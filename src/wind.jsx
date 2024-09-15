import { BsWater } from "react-icons/bs";
import { BsWind } from "react-icons/bs";
import './wind.css'
const Wind = ({humidity,winspeed}) => {
  return (
    <div className="wind">
        <div className='humi'>
            <BsWater className="icons"/>
            <p className="values">{humidity}%</p>
            <p className='windname'>Humidity</p> 
        </div>
        <div className='speedwin'> 
            <BsWind  className="icons"/>
            <p className="values">{winspeed}m/s W</p>
            <p className='windname'>Wind Speed</p>
        </div>
    </div>
  )
}

export default Wind