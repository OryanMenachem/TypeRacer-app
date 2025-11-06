import { useEffect, useState } from "react";
import type { JSX } from "react";
import data from "../data/sentences.json";
import type { Sentence, SentenceProps } from "../types/types";
import { addBestTime } from "../utils/localStorage";

export default function Sentence(props: SentenceProps): JSX.Element {
  const [sentences] = useState<Sentence[]>(data.sentences);
  const [sentenceIndex, setSentenceIndex] = useState<number>(0);
  const [wordsAmount, setWordsAmount] = useState<number>(0);

  useEffect(() => {
    if (sentenceIndex === sentences.length) {
      props.setSentencesCompleted!(true);
      addBestTime(Math.floor((wordsAmount * 60) / props.seconds!));
      setSentenceIndex(0);
      return;
    } else if (props.sentenceMatches) {
      setSentenceIndex((prev) => prev + 1);
      props.setSentenceMatches!(false);
      setWordsAmount((prev) => prev + sentences[sentenceIndex].wordsAmount);
    }
    props.setCurrentSentence!(sentences[sentenceIndex].sentence);
  }, [props.sentenceMatches]);

  if (props.sentencesCompleted) {
    return (
      <p className="final-result">
        {"Your typing speed is " +
          Math.floor((wordsAmount * 60) / props.seconds!) +
          " words per minute"}
      </p>
    );
  }
  return (
    <>
      {sentences.length > sentenceIndex && (
        <p className="sentence-to-type">{sentences[sentenceIndex].sentence}</p>
      )}
    </>
  );
}
