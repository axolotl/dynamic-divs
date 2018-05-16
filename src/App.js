import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      boxes: [],
    }
  }

  componentDidMount() {
    this.addBoxes(0);
  }

  getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  addBoxes = (num) => {
    if (num < 48) {
      setTimeout(() => {
        const { boxes } = this.state;
        boxes.push(this.getRandomColor());
        this.setState({boxes});
        this.addBoxes(num+1);
      }, 50);
    }
    else {
      this.removeBoxes(48);
    }
  }

  removeBoxes = (num) => {
    if (num > 0) {
      setTimeout(() => {
        const { boxes } = this.state;
        boxes.pop();
        this.setState({boxes});
        this.removeBoxes(num-1);
      }, 50);
    }
    else {
      this.addBoxes(0);
    }
  }


  render() {
    const { boxes } = this.state;

    return (
      <div className='container'>
        {boxes.map(color => (
          <div key={color} className='box' style={{backgroundColor: color}} />
        ))}
      </div>
    );
  }
}

export default App;
