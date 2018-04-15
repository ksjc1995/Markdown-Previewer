import React, { Component } from 'react';
import Editor from './components/Editor/Editor';
import Preview from './components/Preview/Preview';
import './App.css';

class App extends Component {

  state = {
    markup:'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*',
  }
  
  changeMarkupHandler = ( event ) => {
    const markup = event.target.value;   
    this.setState({
      markup : markup 
    })
  }

  resetHandler = () => {
    const markup = 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*';
      this.setState({
        markup:markup
      })
  }

  render() {
    return (
      <div className="App">
           <Editor 
            changed={this.changeMarkupHandler} 
            data={this.state.markup}/>

           <Preview data={this.state.markup} />

           <button onClick={this.resetHandler}>Reset</button>
      </div>
    );
  }
}

export default App;
