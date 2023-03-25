import {Component} from 'react'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {VscBold} from 'react-icons/vsc'

import {CustomButton, CustomTextarea} from './StyledComponents/index'
import './App.css'

// Replace your code here
class App extends Component {
  state = {isBold: false, isItalic: false, isUnderline: false}

  onClickBold = () => {
    this.setState(prevState => ({
      isBold: !prevState.isBold,
    }))
  }

  onClickItalic = () => {
    this.setState(prevState => ({
      isItalic: !prevState.isItalic,
    }))
  }

  onClickUnderline = () => {
    this.setState(prevState => ({
      isUnderline: !prevState.isUnderline,
    }))
  }

  render() {
    const {isBold, isItalic, isUnderline} = this.state

    return (
      <div className="app">
        <div className="text-editor-card">
          <div className="left">
            <h1 className="heading">Text Editor</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
              className="image"
            />
          </div>
          <div className="editor">
            <ul className="edit-list">
              <li>
                <CustomButton
                  isHighlight={isBold}
                  onClick={this.onClickBold}
                  type="button"
                  data-testid="bold"
                >
                  <VscBold />
                </CustomButton>
              </li>
              <li>
                <CustomButton
                  isHighlight={isItalic}
                  onClick={this.onClickItalic}
                  type="button"
                  data-testid="italic"
                >
                  <GoItalic />
                </CustomButton>
              </li>
              <li>
                <CustomButton
                  onClick={this.onClickUnderline}
                  type="button"
                  isHighlight={isUnderline}
                  data-testid="underline"
                >
                  <AiOutlineUnderline />
                </CustomButton>
              </li>
            </ul>
            <CustomTextarea
              isBold={isBold}
              isItalic={isItalic}
              isUnderline={isUnderline}
            />
          </div>
        </div>
      </div>
    )
  }
}
export default App
