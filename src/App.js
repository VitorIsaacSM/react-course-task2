import React from 'react';
import './App.css';
import { Validation } from './validation/Validation';
import { Char } from './char/Char';

class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {valorInput: ''}
  }

  changeHandler = (event) => {
    this.setState({valorInput: event.target.value});
  }

  deleteCharHandler = (index) => {
    const valorInput = this.state.valorInput;
    this.setState({valorInput: valorInput.slice(0, index) + valorInput.slice(index + 1, valorInput.length)});
  }

  render() {

    return (
      <div className="App">
        <p>Task2</p>
        <input type="text" value={this.state.valorInput} onChange={this.changeHandler}></input>
        <p>Meu input contém {this.state.valorInput.length} caracteres</p>
        <Validation textLength={this.state.valorInput.length}/>
        {this.state.valorInput.split('').map((char, index) => {
          return (
            <Char char={char} deleteHandler={() => this.deleteCharHandler(index)}/>
          )
        })}

        <ol style={{textAlign: 'left'}}>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
      </div>
    );
  }
}

export default App;
