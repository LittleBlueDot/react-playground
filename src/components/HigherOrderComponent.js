import React from 'react';
import './styles/CounterChallenge.css';

let BaseCount = (BasicComponent) =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
        //   text: "Hello"
      };
      this.incrementCount = this.incrementCount.bind(this);
    }
    incrementCount() {
      this.setState({
        count: this.state.count + 1,
      });
    }
    render() {
      return <BasicComponent {...this.state} increment={this.incrementCount} />;
    }
  };

const Button = (props) => {
  return (
    <button className='btn purple-btn' onClick={props.increment}>
      Count on click: {props.count}
    </button>
  );
};

const Label = (props) => {
  return (
    <label onMouseOver={props.increment}>
      Count on mouseover: {props.count}
    </label>
  );
};

let ExtendedButton = BaseCount(Button);
let ExtendedLabel = BaseCount(Label);

const HigherOrderComponent = () => {
  return (
    <div className='full-width'>
      <div className='container'>
        <h1>Higher Order Component</h1>
        <div className='flex-center'>
          <ExtendedButton />
        </div>
        <div className='flex-center'>
          <ExtendedLabel />
        </div>
      </div>
    </div>
  );
};

export default HigherOrderComponent;
