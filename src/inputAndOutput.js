import React, {Component} from 'react';
import './default.css'


export default class InputAndOutput extends Component{

state={
    TextValue : ""
}

changeText=(e)=>{
  this.setState({
    TextValue : e.target.value  
  },()=>{
    this.props.upload(this.state.TextValue)
  })

}



render(){
  return (
    <div className="AreaWrapper">
        <textarea className="inputArea" value={this.state.TextValue} onChange={this.changeText}placeholder="영어 기사를 넣어주세요"></textarea>
        <button type="button" id="summarizeButton" className="btn btn-outline-danger" onClick={this.props.clickButton}>줄이기</button>
    </div>
  )}
}

