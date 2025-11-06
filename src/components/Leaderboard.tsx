import { useState } from "react";
import { getLeaderboard } from "../utils/localStorage";

export default function Leaderboard() {
  const [leaderboard] = useState<number[]>(getLeaderboard());

  return (
    <div className="leaderboard">
      <h2 className="leaderboard-title">leaderboard</h2>
      <h3 className="leaderboard-description">Number of words typed per minute</h3>
      {leaderboard.length && (
        <ol>
          {leaderboard.map((bt, i) => {
            return (
              <li className="item" key={i}>
                {bt}
              </li>
            );
          })}
        </ol>
      )}
    </div>
  );
}
