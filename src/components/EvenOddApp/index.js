// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {num: 0}

  inc = () => {
    this.setState(prevState => ({
      num: prevState.num + Math.floor(Math.random() * 100),
    }))
  }

  render() {
    const {num} = this.state
    let text
    if (num % 2 === 0) {
      text = 'Even'
    } else {
      text = 'Odd'
    }

    return (
      <div className="app-container">
        <div className="even-odd-container">
          <h1 className="title">
            Count <span>{num}</span>
          </h1>
          <h2 className="content">Count is {text}</h2>
          <button className="btn" type="button" onClick={this.inc}>
            Increment
          </button>
          <p className="description">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp