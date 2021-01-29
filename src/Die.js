import React, {Component} from 'react';

class Die extends Component{
  constructor(props) {
    super(props);
    this.state = {
      num : 9
    }
  }

  render() {
    return(
      <div>
        <i className="fas fa-dice-one"></i>
      </div>
    )
  }
}

export default Die;