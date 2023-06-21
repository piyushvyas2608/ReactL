import { useState } from "react"
export default function Hourcounter(props){
   const[counter , setCounter] = useState(0);
    const increment = () => {
        setCounter(counter + 1)
    }
    const Delete = () => {
        setCounter(counter - 1 )
    }
    const [WorkHour , setWorkHour] = useState (0);
    const HourIncrement = () => {
        setWorkHour(WorkHour + 1)
    }
    const workhourdelete = () => {
        setWorkHour(WorkHour - 1)
    }
    return(
        <>
        <div className ="card m-2" style={{width: "22rem"}}>
        <div className ="card-body">
            <h5 className ="card-title"> Name : {props.name} {props.lastname}</h5>
            <h6 className ="card-subtitle mb-2 text-muted">Location : {props.Location}</h6>
            <p className ="card-text">Description : {props.description}</p>
            <p className="card-text">Projects Done : {counter}</p>
            <button className="btn btn-success m-1" onClick={() => increment()}>Increment</button>
            <button className="btn btn-danger m-1" onClick={() => Delete()}>Delete</button>
            <p>Hours work : {WorkHour}</p>
            <button className="btn btn-success" onClick={HourIncrement}>INCREMENT</button>
            <button className="btn btn-danger m-1" onClick={workhourdelete}>Delete</button>
        </div>
    </div>
        </>
    )
}
