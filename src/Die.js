import React, {Component} from 'react';
import './Die.css';

class Die extends Component{
  render() {
    console.log(this.props);
    let cls = `Die fas fa-dice-${this.props.face}`;
    return(
        <i className={cls}></i>
    )
  }
}

export default Die;