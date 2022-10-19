import { useState } from "react";

import Board from "./components/Board";
import ScoreBoard from "./components/ScoreBoard";

import "./app.css";

function App() {
  const [reset, setReset] = useState(false);

  const [winner, setWinner] = useState("");
  const [score, setScore] = useState([0, 0]);
  const resetBoard = () => {
    setReset(true);
  };

  return (
    <div className="App">
      <div className={`winner ${winner !== "" ? "" : "shrink"}`}>
        <div className="winner-text">
          {winner === "Tie" ? (
            <>
              <p className="winner-title">Tie</p>
              <p>Loosers</p>
            </>
          ) : (
            <>
              <p className="winner-title">Winner</p>
              <p>{winner}</p>
            </>
          )}
        </div>
        <button onClick={() => resetBoard()}>Reset Board</button>
      </div>
      <ScoreBoard score={score} />
      <Board
        reset={reset}
        setReset={setReset}
        winner={winner}
        setWinner={setWinner}
        score={score}
        setScore={setScore}
      />
    </div>
  );
}

export default App;
