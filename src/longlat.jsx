import './longlat.css'
const Longlat = ({latti,longi}) => {
  return (
    <div className='altti'>
        <div className='latti'>
            <p>Latitude</p>
            <p className='tude'>{latti}</p>
        </div>
        <div className='longi'> 
            <p>Longitude</p>
            <p className='tude'>{Math.floor(longi)}</p>
        </div>
    </div>
  )
}

export default Longlat