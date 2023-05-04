import React from 'react';
import './styles/CounterChallenge.css';

class ComponentLifecycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.likes,
      popular: false,
    };
    this.updateLikes = this.updateLikes.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      popular: nextProps.likes >= 5,
    });
  }
  updateLikes() {
    this.setState({
      likes: this.state.likes + 1,
      popular: this.state.likes >= 5,
    });
  }
  render() {
    return (
      <div className='full-width'>
        <div className='container'>
          <h1>Component Lifecycle Update Methods</h1>
          <p>Click on the button more than 5 times</p>
          <h4>{this.state.popular ? `I'm popular` : null}</h4>
          <div className='flex-center'>
            <button className='btn blue-btn' onClick={this.updateLikes}>
              Likes: {this.state.likes}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

ComponentLifecycle.defaultProps = {
  likes: 0,
};

export default ComponentLifecycle;
