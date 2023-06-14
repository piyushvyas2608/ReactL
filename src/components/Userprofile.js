export default function User(props){
    return(
        <>
            <div className ="card m-2" style={{width: "18rem"}}>
                <div className ="card-body">
                    <h5 className ="card-title"> Name : {props.name} {props.lastname}</h5>
                    <h6 className ="card-subtitle mb-2 text-muted">Location : {props.Location}</h6>
                    <p className ="card-text">Description : {props.description}</p>
                </div>
            </div>
        </>
    )
}