import { useEffect, useState } from 'react';
import ProgressBar from './ProgressBar';

const Question = ({ text, answers, addAnswer }) => {
  const [timeForAnswer, setTimeForAnswer] = useState(5000);
  const [loadingTime, setLoadingTime] = useState(1000);
  const [waitingTime, setWaitingTime] = useState(2000);
  const [answered, setAnswered] = useState(false);
  const [waitingforNext, setWaitingforNext] = useState(false);
  const [clicked, setClicked] = useState(null);

  function decreaseAnswerTime() {
    if (timeForAnswer >= 10) {
      setTimeForAnswer(prev => prev - 10);
    }
  }

  function decreaseLoadingTime() {
    if (loadingTime >= 10) {
      setLoadingTime(prev => prev - 10);
    }
  }

  function decreaseWaitingTime() {
    if (waitingTime >= 10) {
      setWaitingTime(prev => prev - 10);
    }
  }

  function handleClickAnswer(e) {
    if (!answered && !waitingforNext) {
      e.target.classList.add('selected');
      setAnswered(true);
    }
    
  }

  useEffect(() => {
    if (loadingTime === 0) {
      setWaitingforNext(true);
      setAnswered(false);
    }
  }, [loadingTime]);

  return (
    <div id="question">
      {!answered && !waitingforNext && (
        <ProgressBar
          decreaseTime={decreaseAnswerTime}
          timeForAnswer={timeForAnswer}
          maxTime={5000}
        />
      )}
      {answered && !waitingforNext && (
        <ProgressBar
          className="answered"
          decreaseTime={decreaseLoadingTime}
          timeForAnswer={loadingTime}
          maxTime={1000}
        />
      )}
      {!answered && waitingforNext && (
        <ProgressBar
          decreaseTime={decreaseWaitingTime}
          timeForAnswer={waitingTime}
          maxTime={2000}
        />
      )}
      <h2 id="question">{text}</h2>
      <ul id="answers">
        {answers.map((answer, index) => {
          return (
            <li key={index} className="answer">
              <button onClick={handleClickAnswer}>{answer}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Question;
