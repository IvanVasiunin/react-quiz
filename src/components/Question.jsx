import { useEffect, useState } from 'react';
import ProgressBar from './ProgressBar';
import correctAnswers from 'correct_answers';

const Question = ({ text, answers, id, addAnswer }) => {
  const [timeForAnswer, setTimeForAnswer] = useState(5000);
  const [loadingTime, setLoadingTime] = useState(1000);
  const [waitingTime, setWaitingTime] = useState(2000);
  const [answered, setAnswered] = useState(false);
  const [waitingforNext, setWaitingforNext] = useState(false);
  const [clicked, setClicked] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

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

  function handleClickAnswer(index) {
    if (!answered && !waitingforNext) {
      setClicked(index);
      setAnswered(true);
    }
  }

  useEffect(() => {
    if(timeForAnswer === 0 && !clicked) {
      setAnswered(true);
    }
    if (loadingTime === 0) {
      setIsCorrect(correctAnswers[id] === answers[clicked]);
      setWaitingforNext(true);
      setAnswered(false);
    }
    if (waitingTime === 0) {
      let dataToWrite;
      if(clicked !== null) {
        dataToWrite = [answers[clicked], correctAnswers[id] === answers[clicked]];
      } else {
        dataToWrite = ['You skipped the question', false];
      }
      addAnswer(dataToWrite);
    }
  }, [loadingTime, timeForAnswer, clicked, waitingTime, addAnswer, answers, id]);


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
              <button
                className={`${clicked === index ? 'selected' : ''} ${
                  !waitingforNext
                    ? ''
                    : clicked !== index
                    ? ''
                    : isCorrect
                    ? 'correct'
                    : 'wrong'
                }`}
                onClick={() => handleClickAnswer(index)}
              >
                {answer}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Question;
