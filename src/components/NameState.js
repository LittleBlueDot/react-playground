import React from 'react';

class NameState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
    };
    this.firstNameChanged = this.firstNameChanged.bind(this);
    this.resetName = this.resetName.bind(this);
  }
  firstNameChanged(event) {
    this.setState({
      firstName: event.target.value,
    });
  }

  resetName() {
    this.setState({
      firstName: '',
    });
  }

  render() {
    return (
      <div className='full-width'>
        <div className='container'>
          <h1>Name State</h1>
          <input type='text' placeholder='Insert your name' onChange={this.firstNameChanged} />
          <h4>Hello, my name is <span className='dark-green'>{this.state.firstName}</span></h4>
          <button className='btn' onClick={this.resetName}>Reset name</button>
        </div>
      </div>
    );
  }
}

export default NameState;
