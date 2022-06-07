import React, { useState } from "react";
import MentalGame from "./MentalGame";
import classes from "./GameStart.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Instruction from "../UI/Instruction";

const GameStart = (props) => {
  const [isGameStart, setIsGameStart] = useState(false);
  const [tableIn, setTableIn] = useState("");
  const [gameInstruction, setGameInstruction] = useState("");
  const [enteredTable, setEnteredTable] = useState("");

  // Table change handler
  const tableChangeHandler = (event) => {
    setEnteredTable(event.target.value);
  };

  const inputKeyPress = (event) => {
    if (event.key === "Enter") {
      parseInt(enteredTable);
      setTableIn(event.target.value);
      setEnteredTable("Table limit  noted!");
    }
  };

  // Game Instruction
  const gameInstructionModal = () => {
    setGameInstruction({
      title: "Game Instruction",
      message:
        "The Mental Game is a multiplication game where you get to answer as many randomly generated multiplication problems as you can, within 60 seconds. You are required to specify the multiplication table limit you want to play and then push the 'Enter' button. You'll receive a confirmation that says 'Table limit noted!'. Then push the 'Start Game' button to get the game started. Once the game starts, you will be flashed a multiplication problem within the table limit you specified. You are to type in the answer to the problem in the input field below and press the 'Enter' button. This process will be repeated till 60 seconds elapses. Note: Only integral values will be processed, e.g. enter '5', '10', ... NOT 'five', 'ten'... Thanks.",
    });
    return;
  };

  // Confirmation handler
  const confirmHandler = () => {
    setGameInstruction(null);
  };

  // This function pushes results to the App
  const resultPusher = (score, question, speed) => {
    const item = { score: score, questions: question, speed: speed };
    return props.onSave(item);
  };

  const startGameHandler = () => {
    setIsGameStart(true);
    if (enteredTable.length === 0) {
      document.getElementById("starter").disabled = true;
      console.log("button inactive");
    } else {
      document.getElementById("starter").removeAttribute("disabled");
    }
  };

  // Stop game
  const stopGameHandler = () => {
    setIsGameStart(false);
    setEnteredTable("");
  };

  // retake test handler
  const reTakehandler = () => {
    setIsGameStart(false);
    setEnteredTable("");
  };

  return (
    <Card className={classes.container}>
      <h2>Welcome to Mental Game</h2>

      <Card className={classes.input}>
        <label htmlFor="enter_multiplication_table_limit">
          Enter Multiplication Table Limit
        </label>
        <input
          id="enter_multiplication_table_limit"
          type="text"
          value={enteredTable}
          onKeyPress={inputKeyPress}
          onChange={tableChangeHandler}
        />
      </Card>

      {!isGameStart && (
        <button
          disabled={enteredTable === "Table limit  noted!" ? false : true}
          id="starter"
          onClick={startGameHandler}
        >
          Start Game
        </button>
      )}
      {isGameStart && (
        <MentalGame
          table={tableIn}
          onSend={resultPusher}
          onCancel={stopGameHandler}
          reTake={reTakehandler}
        />
      )}

      {gameInstruction && (
        <Instruction
          title={gameInstruction.title}
          message={gameInstruction.message}
          onConfirm={confirmHandler}
        />
      )}
      <div>
        <br></br>
      </div>
      <Button onClick={gameInstructionModal}>How to Play</Button>
    </Card>
  );
};
export default GameStart;