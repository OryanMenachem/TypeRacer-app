import type { Dispatch, SetStateAction } from "react";

export interface Sentence {
  id: number;
  sentence: string;
  wordsAmount: number;
}

export interface Running {
  running?: boolean;
  setRunning?: Dispatch<SetStateAction<boolean>>;
}

export interface SentenceMatches {
  sentenceMatches?: boolean;
  setSentenceMatches?: Dispatch<SetStateAction<boolean>>;
}

export interface ResetWatch {
  resetWatch?: boolean;
  setResetWatch?: Dispatch<SetStateAction<boolean>>;
}

export interface CurrentSentence {
  currentSentence?: string;
  setCurrentSentence?: Dispatch<SetStateAction<string>>;
}

export interface Seconds {
  seconds?: number;
  setSeconds?: Dispatch<SetStateAction<number>>;
}

export interface SentencesCompleted {
  sentencesCompleted?: boolean;
  setSentencesCompleted?: Dispatch<SetStateAction<boolean>>;
}


export type StopWatchProps = Running & ResetWatch & Seconds;

export type InputFieldProps = Running &
  ResetWatch &
  SentenceMatches &
  CurrentSentence;

export type SentenceProps = SentenceMatches &
  CurrentSentence &
  SentencesCompleted &
  Seconds;
