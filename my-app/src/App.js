import React, { useState, useEffect } from "react";
import GameStart from "./components/MentalGame/GameStart";
import ResultDisplay from "./components/MentalGame/ResultDisplay";
import axios from 'axios'


function App() { 

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
   refreshResults();
  });

  const [resultList, setResultList] = useState([]);
  
  
  
// This function renders the results on the page
const refreshResults =()=>{
    axios
      .get("/api/mentals/")
      .then((res) => setResultList(res.data ))
      .catch((err) => console.log(err));
      return;  
}

// Implement save result
const saveResultHandler = (item) => {
  
  if (item.id) {
    axios
      .put(`/api/mentals/${item.id}/`, item)
      .then((res) => refreshResults());
    return;
  }
  axios
    .post("/api/mentals/", item)
    .then((res) => refreshResults());
};

     
  return (
    <div>
     <GameStart onSave={saveResultHandler}/>
     <ResultDisplay  results={resultList}/>
    </div>
  );
}

export default App;
