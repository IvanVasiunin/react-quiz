import result_image from '../assets/quiz-complete.png';
import QUESTIONS from '../questions.js';

const Result = props => {
  console.log(props.answers);
  const answers = [...props.answers];
  const correct_answers = Math.round(
    (answers.filter(n => n[1] === true).length / answers.length) * 100
  );
  const incorrect_answers = Math.round(
    (answers.filter(n => n[1] === false && n[0] !== 'You skipped the question')
      .length /
      answers.length) *
      100
  );
  const skipped = Math.round(
    (answers.filter(n => n[0] === 'You skipped the question').length /
      answers.length) *
      100
  );
  return (
    <div id="summary">
      <img src={result_image} alt="Result" />
      <h2>Quiz completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skipped}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correct_answers}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{incorrect_answers}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol className="user-answer">
        {answers.map((answer, index) => {
          return (
            <li
              key={index}
              className={`user-answer ${answer[1] ? 'correct' : 'wrong'}`}
            >
              <h3>{index + 1}</h3>
              <div className='question'>{QUESTIONS[index].text}</div>
              {answer[0]}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Result;
