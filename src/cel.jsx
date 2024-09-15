import './cel.css'
const Cel = ({curcel}) => {
  return (
    <div className="celcius">
        <p>{`${Math.ceil((curcel - 32) * 5/9)}°C`}</p>
    </div>
  )
}

export default Cel