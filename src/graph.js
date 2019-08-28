import React, {Component} from 'react';
import {Graph} from"react-d3-graph";
import "./default.css"

export default class relation extends Component {


  dataFunction=(props)=>{
    let datas = { links: [], nodes:[]}

    if(!props){
      return datas
    }

    datas["links"]=  props
  
    let nodes =[]
    props.forEach(element=>{
      if(!nodes.includes(element.source)){
        nodes.push( {id: element.source })
      }
      if(!nodes.includes(element.target)){
        nodes.push( {id: element.target})
      }
    })
  
    datas["nodes"] = nodes
  
  return datas
  }

render(){
  let Data = this.dataFunction(this.props.relation)
  if(Data.links.length==0){
    Data=data
  }

  return (
    <div className="RelationExtraction">
      <h2>Relation Extraction</h2>
      <Graph
          id="hello" // id is mandatory, if no id is defined rd3g will throw an error
          data={Data}
          config={myConfig}
        >
      </Graph>
    </div>
  )}    
}

const data = {
  nodes: [{ id: "Harry" }, { id: "Sally" }, { id: "Alice" }],
  links: [{ source: "Harry", target: "Sally" , label: "picka"}, { source: "Harry", target: "Alice" , label:"chu"}]
};


// the graph configuration, you only need to pass down properties
// that you want to override, otherwise default ones will be used
const myConfig = {
  nodeHighlightBehavior: true,
  node: {
      color: "red",
      size: 120,
      highlightStrokeColor: "blue",
  },
  link: {
      highlightColor: "lightblue",
      renderLabel: true
  },
  width: 900,
  height:900
};

// graph event callbacks
