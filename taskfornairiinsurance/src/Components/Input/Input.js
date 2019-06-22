import React, { Component, Fragment } from 'react';
import './Input.css';

class Input extends Component {
    

  callback = () => this.props.callback;

  render() {
    return (
      <Fragment>
          <input value = {this.props.value} id={this.props.id} display = {this.props.display} className={this.props.className} type={this.props.type} placeholder={this.props.placeholder} required onChange = {this.props.callback}/>
      </Fragment>
    );
  }
}

export default Input;
