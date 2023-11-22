import { useEffect, useState } from 'react';

const QuestionTimer = ({ timeout, onTimeout, mode }) => {
  const [remainingTime, setRemainigTime] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [onTimeout, timeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainigTime(prevRemainingTime => prevRemainingTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      value={remainingTime}
      max={timeout}
      id="question-time"
      className={mode}
    />
  );
};

export default QuestionTimer;
