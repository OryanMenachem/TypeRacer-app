import { useEffect, useState } from "react";
import type { StopWatchProps } from "../types/types";

export default function StopWatch(props: StopWatchProps) {
  const [time, setTime] = useState<number>(0);
  if (props.resetWatch) {
    setTime(0);
    props.setResetWatch!(false);
  }
  useEffect(() => {
    let interval: any;
    if (props.running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!props.running) {
      clearInterval(interval);
      props.setSeconds!((prev: number) => prev + Math.floor(time / 1000));
    }
    return () => clearInterval(interval);
  }, [props.running]);
  return (
    <>
      <div className="stop-watch-container">
        <span className="stop-watch minutes">
          {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
        </span>
        <span className="stop-watch seconds">
          {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
        </span>
        <span className="stop-watch milliseconds">
          {("0" + Math.floor((time / 10) % 100)).slice(-2)}
        </span>
      </div>
    </>
  );
}
