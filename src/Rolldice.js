import React, {Component} from 'react';
import Die from './Die';
import './Rolldice.css';
 
class Rolldice extends Component{
  static defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six']
  };
  constructor(props) {
    super(props);
    this.state = {
      // initial state 
      die1: 'one',
      die2: 'one',
      isRolling: false
    }
    this.roll = this.roll.bind(this);
  }

  roll() {
    // pick = choose 2 new rolls (numbers)
    const newDie1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    const newDie2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];

    // set = change new state with new rolls
    this.setState({
      die1: newDie1,
      die2: newDie2,
      isRolling: true
    })

    // wait one second, then set rolling to false
    setTimeout(() => {
      this.setState({
        isRolling: false
      });
    }, 1000);
  }

  render() {
    return(
        <div className="Rolldice">
          <div className='Rolldice-box'>
            <Die face={this.state.die1} makeRoll={this.state.isRolling}/>
            <Die face={this.state.die2} makeRoll={this.state.isRolling}/>
          </div>
          <button onClick={this.roll} disabled={this.state.isRolling}>
            {this.state.isRolling ? 'Rolling...' : 'Roll Dice!'}
          </button>
        </div>
    )
  }
}

export default Rolldice;
