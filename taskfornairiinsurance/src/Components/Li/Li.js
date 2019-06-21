import React, {Component, Fragment} from "react";
import './Li.css'

class Li extends Component{
    render () {
        return (
            <Fragment>
                <li className = {this.props.className}>{this.props.name}</li>
            </Fragment>
        );

    }
}
export default Li;