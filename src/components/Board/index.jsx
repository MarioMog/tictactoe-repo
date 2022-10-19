import { useState, useEffect, useRef } from "react";

import "./Styles.css";

const Board = ({ reset, setReset, winner, setWinner, score, setScore }) => {
  const [turnPlayer, setTurnPlayer] = useState("X");
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
  const checkWin = () => {
    for (let i = 0; i < 3; i++) {
      if (
        data[i * 3] === data[i * 3 + 1] &&
        data[i * 3] === data[i * 3 + 2] &&
        data[i * 3] !== ""
      )
        return true;
      if (
        data[i] === data[i + 3] &&
        data[i] === data[i + 6] &&
        data[i] !== ""
      )
        return true;
    }
    if (
      (data[0] === data[4] && data[0] === data[8] && data[0] !== "") ||
      (data[2] === data[4] && data[2] === data[6] && data[2] !== "")
    )
      return true;
    return false;
  };

  const checkTie = () => {
    if (!data.includes("")) return true;
    return false;
  };

  const draw = (event, index) => {
    if (data[index] === "" && winner === "") {
      data[index] = turnPlayer;
      setTurnPlayer(turnPlayer === "X" ? "O" : "X");
      if (checkWin()) {
        if (turnPlayer === "X") setScore((score) => [score[0] + 1, score[1]]);
        else setScore((score) => [score[0], score[1] + 1]);

        setWinner(turnPlayer === "X" ? "Player 1!" : "Player 2!");
      } else if (checkTie()) setWinner("Tie");
    }
  };

  useEffect(() => {
    setData(["", "", "", "", "", "", "", "", ""]);
    setTurnPlayer("X");
    setWinner("");
    setReset(false);
  }, [reset, setReset, setWinner]);

  return (
    <div className="board">
      <div
        className={"input border-right border-bottom " + data[0]}
        onClick={(e) => draw(e, 0)}
      ></div>
      <div
        className={"input border-right border-bottom " + data[1]}
        onClick={(e) => draw(e, 1)}
      ></div>
      <div
        className={"input border-bottom " + data[2]}
        onClick={(e) => draw(e, 2)}
      ></div>
      <div
        className={"input border-right border-bottom " + data[3]}
        onClick={(e) => draw(e, 3)}
      ></div>
      <div
        className={"input border-right border-bottom " + data[4]}
        onClick={(e) => draw(e, 4)}
      ></div>
      <div
        className={"input border-bottom " + data[5]}
        onClick={(e) => draw(e, 5)}
      ></div>
      <div
        className={"input border-right " + data[6]}
        onClick={(e) => draw(e, 6)}
      ></div>
      <div
        className={"input border-right " + data[7]}
        onClick={(e) => draw(e, 7)}
      ></div>
      <div className={"input " + data[8]} onClick={(e) => draw(e, 8)}></div>
    </div>
  );
};

export default Board;
