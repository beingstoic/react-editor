
import './App.css';
import React from 'react';
import ReactMarkdown from 'react-markdown';
class App  extends React.Component{
  constructor(props){
    super(props);
    this.state={
      inputText:""
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    event.preventDefault();
    this.setState({
      inputText: event.target.value
    })
  }
  render(){
    return (
      <div className="App">
        
        <textarea id='editor' value={this.state.inputText} onChange={this.handleChange} />
        <div id='preview'>
          <ReactMarkdown>{this.state.inputText}</ReactMarkdown>
          
        </div>
      </div>
    );
  }
}

export default App;
