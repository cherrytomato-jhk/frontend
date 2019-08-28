import React, {Component} from 'react';
import logo from './img/cherries.png';
import './App.css';
import InputAndOutput from './inputAndOutput' 
import Summary from './summary'
import Graph from './graph'


export default class App extends Component {

  state={
    relation: [],
    summary: null,
    results : null 
  }


  getDatas=()=>{
    console.log("못받나?", this.state.summary)
    fetch('http://localhost:5000/result', {method:"POST" , 		headers: {
      "Content-Type": "application/json; charset=utf-8"
  },body:JSON.stringify({ "corpus": this.state.summary})})
   .then(res=> res.json())
   .then(result=> {
    console.log("결과", result)
    this.setState({ relation : result.relation, results: result.summary})
   })
  }


  ClickButton=()=>{
    console.log("clicked")
    this.getDatas();
  }

  upload=(e)=>{
    this.setState({summary:e})
  }

  render(){ 
    return (
      <div className="App">
          <div className="imageWrapper">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="headLine">
            <h1>영어 기사를 5초만에 이해하기</h1>
          </div>
          <div className="inputAndSummary">
            <InputAndOutput clickButton={this.ClickButton} upload={(e)=> this.upload(e)}></InputAndOutput>
          </div>
          <div className="summaryWrapper">
              <Summary summary={this.state.results}/>
              <Graph relation={this.state.relation}></Graph>
            </div>
      </div>
    )}
}

