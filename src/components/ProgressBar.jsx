import { useEffect } from 'react';

const ProgressBar = props => {
  useEffect(() => {
    if (props.timeForAnswer > 0) {
      const interval = setInterval(() => {
        props.decreaseTime();
      }, 10);
      return () => {
        clearInterval(interval);
      };
    }
  }, []);

  return (
    <progress
      value={props.timeForAnswer}
      max={props.maxTime}
      className={props.className}
    />
  );
};

export default ProgressBar;
