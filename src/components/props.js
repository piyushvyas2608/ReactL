import {Component} from "react";
export default class ImportantNotice extends Component{
    render(){
        return(
            <>
                <h4 className="text-danger m-4">IMPORTANT NOTICE : {this.props.notice}</h4>
            </>
        )
    }
}             //Hi Kovid