import { useEffect, useRef, useState } from "react";

function StopWatch({ start }: { start: boolean }) {
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    start && startWatch();
    return () => clearInterval(timeHandler.current);
  }, []);

  let timeHandler = useRef(0);
  const startWatch = () => {
    timeHandler.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };
  return (
    <>
      <h1>{time}</h1>
      <button onClick={() => setTime(0)}>restart</button>
    </>
  );
}

export default StopWatch;
