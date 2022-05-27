import React from 'react';
import  './ResultList.css';
import ResultItem from './ResultItem';
import Button from '../UI/Button';

const ResultList =(props)=>{
    
 
  return (
    <div> 
      <span onClick={props.onCancel} className="canceller">&times;</span>
      
    <ul className="results-list">
      {props.results.map((result) => (
        <ResultItem
          key={result.id}
          score={result.score}
          questions={result.questions}
          speed={result.speed}
          time={result.time}
        />
      ))}
    </ul>
    
    <Button onClick={props.onCancel}>Close</Button>
    </div>
  );
};
    
export default ResultList;