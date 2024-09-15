import './loading.css'
const Loading = ({load}) => {
  return (
    <div className={load ? "load" : "nodis"}>
        {load?<p>{`Loading....`}</p>:console.log("data gotted")}
    </div>
  )
}

export default Loading