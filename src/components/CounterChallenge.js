import React from 'react';
import './styles/CounterChallenge.css';

class CounterChallenge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount(value) {
    this.setState({
      count: this.state.count + value,
    });
  }
  render() {
    const buttonStyles = {
      valueOne: 'btn blue-btn',
      valueFive: 'btn green-btn',
      valueTen: 'btn purple-btn',
    };

    return (
      <div className='full-width'>
      <div className='container'>
        <h1>Counter Challenge</h1>
        <h4>Count: {this.state.count}</h4>
        <Button
          style={buttonStyles.valueOne}
          text={`${this.props.text} ${this.props.valueOne}`}
          value={this.props.valueOne}
          clickHandler={this.incrementCount.bind(this, this.props.valueOne)}
        />
        <Button
          style={buttonStyles.valueFive}
          text={`${this.props.text} ${this.props.valueFive}`}
          value={this.props.valueFive}
          clickHandler={this.incrementCount.bind(this, this.props.valueFive)}
        />
        <Button
          style={buttonStyles.valueTen}
          text={`${this.props.text} ${this.props.valueTen}`}
          value={this.props.valueTen}
          clickHandler={this.incrementCount.bind(this, this.props.valueTen)}
        /> 
      </div>
      </div>

      
    );
  }
}

CounterChallenge.defaultProps = {
  valueOne: 1,
  valueFive: 5,
  valueTen: 10,
  text: 'Add',
};

const Button = (props) => (
  <button
    className={props.style}
    value={props.value}
    onClick={props.clickHandler}
  >
    {props.text}
  </button>
);

export default CounterChallenge;

