import { useState } from 'react'
import './App.css'
import { TbCloudSearch } from "react-icons/tb";
import Degimg from './degimg';
import Cel from './cel';
import Cityname from './cityname';
import Longlat from './longlat';
import Wind from './wind';
import Designer from './designer';
import Error from './error';
import Loading from './loading';

function App() {
  const [curcity,changecity]=useState('')
  const [curcel,changecel]=useState('')
  const [city,newcity]=useState('')
  const [country,newcountry]=useState('')
  const [longi,changelongi]=useState('')
  const [latti,changelatti]=useState('')
  const [humidity,changehumi]=useState('')
  const [winspeed,changewinspeeed]=useState('')
  //images
  const [imgg,changeimg]=useState('')
  //empty search error
  const [empsr,changempt]=useState('')
  //loading
  const [load,isloading]=useState()


  const prevent=(e)=>{
    let datadisp=document.querySelector(".block")
    let emptyerr=document.querySelector(".emperr")
    e.preventDefault()
    if(curcity===''){
      emptyerr.style.display ="block"
      changempt('please enter the field of location')
      datadisp.style.display ='none';
    }else{
      emptyerr.style.display ="none"
      let API_KEY="f8c952215bf0b19989cd9305097a5421"
      const getweather=async()=>{
        try{
          isloading(true)
          let fetching=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${curcity}&appid=${API_KEY}`)
          if(!fetching.ok)throw Error('Got some errors please reload the page')
          let jsondata=await fetching.json()
          console.log(jsondata)
          if(jsondata.main.temp){
            let temp=jsondata.main.temp;
            let faren=((temp- 273.15) * (9/5) + 32 ).toFixed(1)
            changecel(faren)
          }
          newcity(jsondata.name)
          newcountry(jsondata.sys.country)
          changelatti(jsondata.coord.lat)
          changelongi(jsondata.coord.lon)
          changehumi(jsondata.main.humidity)
          changewinspeeed(jsondata.wind.speed)
          changeimg(jsondata.weather[0].icon)
          datadisp.style.display ='block';
        }
        catch(err){
          window.alert(err)
        }
        finally{
          isloading(false)
        }
      }
      getweather()
    }
    
  }


  

  return (
    <>
      <div className='input'>
        <form onSubmit={(e)=>prevent(e)}>
            <input type="text" placeholder='Enter the City' value={curcity} onChange={(e)=>changecity(e.target.value)}/>
            <span className='icon' onClick={(e)=>prevent(e)}><TbCloudSearch className='search'/></span>
        </form>
      </div>
      <Loading load={load}/>
      <div className='emperr'>
          <Error empsr={empsr}/>
      </div>
      <div className='block' style={{display:'none'}}>
        <Degimg imgg={imgg.toString()}/>
        <Cel curcel={curcel}/>
        <Cityname city={city}
        country={country}/>
        <Longlat latti={latti}
        longi={longi}/>
        <Wind humidity={humidity}
        winspeed={winspeed}/>
        <Designer/>
      </div>
    </>
  )
}

export default App
