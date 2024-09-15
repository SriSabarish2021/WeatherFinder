import './degimg.css'
const Degimg = ({imgg}) => {
  return (
    <div className="degimg">
        <img src={imgg.includes("01d")||imgg.includes("01n")?"images/sun.png":imgg.includes("02d")||imgg.includes("02n")?"images/weather.png":imgg.includes("03d")||imgg.includes("03n")?"images/clouds.png":imgg.includes("04d")||imgg.includes("04n")?"images/scatteredclouds.png":imgg.includes("09d")||imgg.includes("09n")?"images/showerrain.png":imgg.includes("10d")||imgg.includes("10n")?"images/rain.png":imgg.includes("11d")||imgg.includes("11n")?"images/lightning-bolt-.png":imgg.includes("13d")||imgg.includes("13n")?"images/snow.png":imgg.includes("50d")||imgg.includes("50n")?"images/mist.png":console.log("nothing")
        } alt="" />
    </div>
  )
}

export default Degimg