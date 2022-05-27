//import React, { useState } from 'react';
//import ResultTime from './ResultTime';
import './ResultItem.css';
import Card from '../UI/Card'
import ResultTime from './ResultTime';


const ResultItem =(props)=> {

  return (
  <li>
    <Card className="result-item">
      <ResultTime time={props.time}/>
      <div className="result-item__description">
        <h2>Score: {props.score}/{props.questions}</h2>
        <div className="result-item__speed"> Speed:{props.speed} </div>
      </div>
    </Card>
   </li>
  );
}

export default ResultItem;
