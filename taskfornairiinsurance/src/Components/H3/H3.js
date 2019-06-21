import React, {Component} from "react";
import Div from '../Div/Div';

class H3 extends Component{
    render () {
        return (
            <h3 className={this.props.className}>{this.props.heading}</h3>
            
        );

    }
}
export default H3;