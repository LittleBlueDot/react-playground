import React from 'react';
import './styles/CounterChallenge.css';

class StatelessFunctionalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.click = this.click.bind(this);
  }
  click() {
    console.log('Clicked');
  }
  render() {
    return (
      <div className='full-width'>
        <div className='container'>
          <h1>Stateless Functional Component</h1>
          <p>Open the console to see what happens</p>
          <div className='flex-center'>
            <Button
              className='btn purple-btn'
              clickHandler={this.click}
              text='Click me!'
            />
          </div>
        </div>
      </div>
    );
  }
}

StatelessFunctionalComponent.defaultProps = { text: 'Hello' };

// Simple stateless functional component
const Button = (props) => {
  return (
    <button className={props.className} onClick={props.clickHandler}>
      {props.text}
    </button>
  );
};

export default StatelessFunctionalComponent;
