import { useState, useEffect } from 'react';
import Header from './Header';
import Quiz from './Quiz';
import QUESTIONS from '../questions.js';
import Result from './Result';

function App() {
  const [answers, setAnswers] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if(QUESTIONS.length === answers.length) {
      console.log(answers)
    }
  }, [answers])

  const addAnswer = answer => {
    setAnswers(prevAnswers => [...prevAnswers, answer]);
    if (index < QUESTIONS.length - 1) {
      setIndex(prev => prev + 1);
    }
  };

  return (
    <>
      <Header />
      {QUESTIONS.length !== answers.length && <Quiz addAnswer={addAnswer} index={index} /> }
      {QUESTIONS.length === answers.length && <Result answers={answers} />}
    </>
  );
}

export default App;
