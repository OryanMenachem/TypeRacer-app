import { useState } from "react";
import InputField from "./InputField";
import StopWatch from "./StopWatch";
import Sentence from "./Sentence";

export default function Manager() {
  const [running, setRunning] = useState<boolean>(false);
  const [resetWatch, setResetWatch] = useState<boolean>(false);
  const [sentenceMatches, setSentenceMatches] = useState<boolean>(false);
  const [sentencesCompleted, setSentencesCompleted] = useState<boolean>(false);
  const [currentSentence, setCurrentSentence] = useState<string>("");
  const [seconds, setSeconds] = useState<number>(0);


  return (
    <div className="main-container">
      <StopWatch
        running={running}
        resetWatch={resetWatch}
        setResetWatch={setResetWatch}
        setSeconds={setSeconds}
      />
      <Sentence
        sentenceMatches={sentenceMatches}
        setSentenceMatches={setSentenceMatches}
        currentSentence={currentSentence}
        setCurrentSentence={setCurrentSentence}
        setSentencesCompleted={setSentencesCompleted}
        sentencesCompleted={sentencesCompleted}
        seconds={seconds}

      />
      <InputField
        setRunning={setRunning}
        sentenceMatches={sentenceMatches}
        setSentenceMatches={setSentenceMatches}
        currentSentence={currentSentence}
 
      />

      <button
        className="start-again-btn"
        onClick={() => {
          window.location.reload();
        }}
      >
        Start Again
      </button>
    </div>
  );
}
