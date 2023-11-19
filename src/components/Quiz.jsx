import QUESTIONS from '../questions.js';
import Question from './Question.jsx';

const Quiz = ({addAnswer, index}) => {

  return (
    <div id="quiz">
      <Question
        addAnswer={addAnswer}
        key={QUESTIONS[index].id}
        text={QUESTIONS[index].text}
        answers={QUESTIONS[index].answers}
        id={QUESTIONS[index].id}
      />
    </div>
  );
};

export default Quiz;
