import { useState } from "react";
import type { InputFieldProps } from "../types/types";
import React from "react";

export default function InputField(props: InputFieldProps): React.JSX.Element {
  const [userInput, setUserInput] = useState<string>();
  const [notice, setNotice] = useState<string>();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setRunning!(true);
    setUserInput(e.target.value);
  };

  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const space = " ";
    if (e.key === "Enter" && userInput === props.currentSentence) {
      e.preventDefault();
      props.setRunning!(() => false);
      (e.target as HTMLInputElement).value = "";
      props.setSentenceMatches!(() => true);
      return;
    }

    if (e.key !== space || !userInput?.trim()) {
      return;
    }

    const userInputWords = userInput.trim().split(space);
    const sentenceWords = props.currentSentence!.trim().split(space);
    const index = userInput.trim().split(space).length - 1;

    if (userInputWords[index] !== sentenceWords[index]) {
      setNotice("The word does not match, please try again.");
    } else {
      setNotice("");
    }
  };

  const handleonPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    setNotice("Can't paste text, only type");
  };

  return (
    <div className="input-container">
      <input
        placeholder="Type the sentence above...."
        className="input-text-field"
        type="text"
        onKeyDown={handleKeydown}
        onChange={handleOnChange}
        onPaste={handleonPaste}
      />
      <p className="notice">{notice}</p>
    </div>
  );
}
