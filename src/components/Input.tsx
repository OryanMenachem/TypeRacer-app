import { useState } from "react";
import type {
  KeyboardEvent,
  JSX,
  ChangeEvent,
  ChangeEventHandler,
} from "react";

function Input(): JSX.Element {
  const [userInput, setUserInput] = useState<string>();
  const [isMatching, setIsmatching] = useState<boolean>(false);
  const [message, setMessage] = useState<string>();
  const sentence = "Hello moon";
  const handleChange = (e: any) => {
    setUserInput(e.target.value);
  };
  const handleKeydown = (e: KeyboardEvent) => {
    const space = " ";
    if (e.key === "Enter" && userInput === sentence) {
      e.preventDefault();
      setMessage("You have successfully completed typing the sentence.");
      setIsmatching(true);
      return;
    }
    if (e.key !== space) {
      return;
    }
    if (!userInput?.trim()) {
      return;
    }
    const userInputList = userInput.trim().split(space);
    const textList = sentence.trim().split(space);
    const index = userInput.trim().split(space).length - 1;

    if (userInputList[index] !== textList[index]) {
      setMessage("The word does not match, please try again.");
    } else {
      setMessage("");
    }
  };
  return (
    <div className="input-container">
      <p>{message}</p>
      <input
        placeholder="Type the sentence..."
        className="input-text-field"
        type="text"
        onKeyDown={handleKeydown}
        onChange={handleChange}
      />
    </div>
  );
}

export default Input;
