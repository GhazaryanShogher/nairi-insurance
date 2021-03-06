import React, {Component, Fragment} from "react";
import './Div.css'

class Div extends Component{
    render () {
        return (
            <Fragment>
                <div className = {this.props.className} id = {this.props.id} style = {this.props.style} onClick = {this.props.click}>{this.props.text}</div>
            </Fragment>
        );

    }
}
export default Div;