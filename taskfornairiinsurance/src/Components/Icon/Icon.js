import React, {Component, Fragment} from "react";
import './Icon.css'

class Icon extends Component{
    callback = () => this.props.callback;
    render () {
        return (
            <Fragment>
                <i className = {this.props.className} onClick = {this.props.callback}></i>
            </Fragment>
        );

    }
}
export default Icon;