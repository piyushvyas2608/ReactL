import { Component } from "react"
export default class Project extends Component{
    constructor(){
        super();
        this.state = {
            counte : 0,
        };
    }
    increment(){
        this.setState({
            counte: this.state.counte + 1,
        })
    }
    delete(){
        this.setState({
            counte : this.state.counte - 1
        })
    }
    render(){
        const { name , lastname , Location , description} = this.props;
        return(
            <>
            <div className ="card m-2" style={{width: "22rem"}}>
                <div className ="card-body">
                    <h5 className ="card-title"> Name : {name} {lastname}</h5>
                    <h6 className ="card-subtitle mb-2 text-muted">Location : {Location}</h6>
                    <p className ="card-text">Description : {description}</p>
                    <p className="card-text">Projects Done : {this.state.counte}</p>
                    <button className="btn btn-success m-1" onClick={() => this.increment()}>Increment</button>
                    <button className="btn btn-danger m-1" onClick={() => this.delete()}>Delete</button>
                </div>
            </div>
        </>            
        )
    }
}


// export default function User(props){
//     return(
//         <>
//             <div className ="card m-2" style={{width: "22rem"}}>
//                 <div className ="card-body">
//                     <h5 className ="card-title"> Name : {props.name} {props.lastname}</h5>
//                     <h6 className ="card-subtitle mb-2 text-muted">Location : {props.Location}</h6>
//                     <p className ="card-text">Description : {props.description}</p>
//                     <p className="card-text">Projects : </p>
//                     <button className="btn btn-success m-2">Increment</button>
//                     <button className="btn btn-danger m-2">Delete</button>
//                 </div>
//             </div>
//         </>
//     )
// }