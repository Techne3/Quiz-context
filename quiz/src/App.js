import React, { useState,useEffect } from "react";
import "./App.css";
import Progress from "./components/Progress";
import Question from "./components/Question";
import Answers from "./components/Answers";
import axios from 'axios'

function App() {
  // let questions = [
  //   {
  //     id: 1,
  //     question: "Which statement about Hooks is not true?",
  //     answer_a:
  //       "Hooks are 100% backwards-compatible and can be used side by side with classes",
  //     answer_b: "Hooks are still in beta and not available yet",
  //     answer_c:
  //       "Hooks are completely opt-in, there's no need to rewrite existing code",
  //     answer_d: "All of the above",
  //     correct_answer: "b"
  //   },
  //   {
  //     id: 2,
  //     question: "Which one is not a Hook?",
  //     answer_a: "useState()",
  //     answer_b: "useConst()",
  //     answer_c: "useReducer()",
  //     answer_d: "All of the above",
  //     correct_answer: "b"
  //   },
  //   {
  //     id: 3,
  //     question: "What Hook should be used for data fetching?",
  //     answer_a: "useDataFetching()",
  //     answer_b: "useApi()",
  //     answer_c: "useEffect()",
  //     answer_d: "useRequest()",
  //     correct_answer: "c"
  //   }
  // ];

const [questions,setQuestions]=useState([false])
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [error, setError] = useState("");




  useEffect(() => {
    axios
    .get("http://localhost:6800/api/quiz")
    .then(res => {
      // console.log(res);
      setQuestions(res.data);
    })
    .catch(err => {
      console.log(err, err.response);
    });

}, []);
    
    



    const question = questions[currentQuestion];
    
    console.log('this right here',questions)




  const handleClick = e => {
    setCurrentAnswer(e.target.value);
    //once  user picks an option clear the error message
    setError("");
  };

  // set an error if there is no question picked
  const renderError = e => {
    if (!error) {
      return;
    }
    return <div className="error">{error}</div>;
  };

  //show the question on the result component
  const renderResultsData = () => {
    return answers.map(answered => {
      const questioned = questions.find( question => question.id === answered.questionId );

      return (
        <div key={questioned.id}>
          {questioned.question} - {renderResultsMark(questioned, answered)}
          {console.log(answered)}
        </div>
      );
    });
  };

  // show the result of quiz
  const renderResultsMark = (question, answer) => {
    if (question.correct_answer === answer.answer) {
      return <span className="correct">Correct</span>;
    }
    return <span className="failed">Wrong</span>;
  };

  //restart quiz
  const restart = () => {
    setAnswers([]);
    setCurrentAnswer("");
    setCurrentQuestion(0);
    setShowResults(false);
  };

  
  const next = e => {
    const answer = { questionId: question.id, answer: currentAnswer };
    //if they don't select an option set Error
    if (!currentAnswer) {
      setError("Please select an option");
      return;
    }

    // answers.push(answer)
    setAnswers([...answers, answer]);
    setCurrentAnswer("");

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      return;
    }
    setShowResults(true);
  };

  // Show the results or else show quiz
  if (showResults) {
    return (
      <div className="container results">
        <h2>Results</h2>
        <ul> {renderResultsData()} </ul>
        <button className="btn btn-primary" onClick={restart}>
          Restart
        </button>
      </div>
    );
  } else {
    return (
      <div className="container">
        <Progress total={questions.length} current={currentQuestion + 1} />
        <Question question={question.question} />
        {renderError()}
        <Answers
          question={question}
          currentAnswer={currentAnswer}
          handleClick={handleClick}
        />
        <button className="btn btn-primary" onClick={next}>
          Confirm and Continue
        </button>

      </div>
    );
  }
}

export default App;
