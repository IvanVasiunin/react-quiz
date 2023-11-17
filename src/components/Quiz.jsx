import { useState, useEffect } from 'react';
import QUESTIONS from '../questions.js';
import Question from './Question.jsx';

const Quiz = () => {
  const [answers, setAnswers] = useState([]);
  const [index, setIndex] = useState(0);

  const addAnswer = answer => {
    setAnswers(prevAnswers => [...prevAnswers, answer]);
    if (index < QUESTIONS.length - 1) {
      setIndex(prev => prev + 1);
    }
  };

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
      
  //   }, 7000);
  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, [index]);

  return (
    <div id="quiz">
      <Question
        addAnswer={addAnswer}
        key={QUESTIONS[index].id}
        text={QUESTIONS[index].text}
        answers={QUESTIONS[index].answers}
      />
    </div>
  );
};

export default Quiz;
