import React, {Component} from 'react';
import './default.css'
import sample from './img/sample.png'

export default class Summary extends Component{


  showSummary=()=>{
    if(this.props.summary){
    return this.props.summary
    }
    return <h3>"기사내용을 넣으면 요약문이 여기에 나타납니다."</h3>
  }

  render(){
    return (
      <div className="abstractWrapper">
        <h2>Abstractive Summary</h2>
        <div className="summaries">
          {this.showSummary()}
        </div>
      </div>
    )}
  }
  