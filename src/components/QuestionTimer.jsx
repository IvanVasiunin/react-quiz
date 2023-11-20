import { useEffect, useState } from 'react';

const QuestionTimer = ({ timeout, onTimeout }) => {
  const [remainingTime, setRemainigTime] = useState(timeout);

  useEffect(() => {
    setTimeout(onTimeout, timeout);
  }, [onTimeout, timeout]);

  useEffect(() => {
    setInterval(() => {
      setRemainigTime(prevRemainingTime => prevRemainingTime - 10)
    }, 10);
  }, []);

  return <progress value={remainingTime} max={timeout} id="question-time" />;
};

export default QuestionTimer;
