import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {lettersLength: 0}

  onInputChange = event => {
    this.setState({lettersLength: event.target.value.length})
  }

  render() {
    const {lettersLength} = this.state
    return (
      <div className="bg-con">
        <div className="calsi-con">
          <div className="image-calsi-con">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label htmlFor="input">Enter the phrase</label>
            <input
              type="search"
              placeholder="Enter the phrase"
              id="input"
              onChange={this.onInputChange}
            />
            <div className="count">
              <p>No.of letters: {lettersLength}</p>
            </div>
          </div>
          <div className="image-calsi-con">
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
              alt="letters calculator"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
