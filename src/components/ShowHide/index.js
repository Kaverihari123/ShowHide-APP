// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    isfirstName: false,
    isLastname: false,
  }

  onBtn1 = () => {
    this.setState(prevState => ({isfirstName: !prevState.isfirstName}))
  }

  onBtn2 = () => {
    this.setState(prevState => ({isLastname: !prevState.isLastname}))
  }

  render() {
    const {isfirstName, isLastname} = this.state
    const mode1 = isfirstName ? 'btn' : null
    const mode2 = isLastname ? 'btn' : null

    return (
      <div className="container1">
        <h1 className="heading">Show/Hide</h1>
        <div className="container2">
          <div className="name-container">
            <button
              className={`button ${mode1}`}
              type="button"
              onClick={this.onBtn1}
            >
              Show/Hide Firstname
            </button>
            {isfirstName && <p className="name">Joe</p>}
          </div>
          <div className="name-container">
            <button
              className={`button ${mode2}`}
              type="button"
              onClick={this.onBtn2}
            >
              Show/Hide Lastname
            </button>
            {isLastname && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
