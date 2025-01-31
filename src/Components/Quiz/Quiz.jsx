import React, { useState, useEffect } from "react";
import "./Quiz.css";
import { data } from "../../assets/data";

const Quiz = () => {
  let [index, setIndex] = useState(0);
  let [selectedOptions, setSelectedOption] = useState([]);
  let [question, setQuestion] = useState(data[index]);
  //state to handle the timer
  const [timer, setTimer] = useState(300);

  //created a side effect to handle the timer
  useEffect(() => {
    if (timer > 0) {
      //created an interval to reduce the timer every second
      const interval = setInterval(() => {
        setTimer((currentTime) => currentTime - 1);
      }, 1000);
      //clears the timer
      return () => clearInterval(interval);
    } else if (timer === 0) {
      submitButton();
    }
    //dependency array to trigger the useEffect hook as soon as the timer changes
  }, [timer]);

  //Option clicks
  const optionClick = (option) => {
    const retainOption = [...selectedOptions];
    retainOption[index] = option;
    setSelectedOption(retainOption);
  };

  //Next Button
  const nextButton = () => {
    if (index < data.length - 1) {
      setIndex(index + 1);
      setQuestion(data[index + 1]);
      // setSelectedOption(null);
    }
  };

  //Previous Button
  const previousButton = () => {
    if (index > 0) {
      setIndex(index - 1);
      setQuestion(data[index - 1]);
      // setSelectedOption(null);
    }
  };

  //Submit Button
  const submitButton = () => {};

  return (
    <div>
      <div class="background">
        <div class="parent">
          <div className="logo">
            <img src="/public/quick-logo.png" alt="" />
          </div>
          <div class="welcome">
            <div class="welc">
              <h6>
                Welcome to Quick-Quiz – Where Every Second Counts! <br />
                Think you're a genius under pressure? Prove it! Quick-Quiz is{" "}
                <br />
                your ultimate destination for fast-paced, brain-busting
                challenges. <br />
                💡 Test your wits. Beat the clock. Show the world what you’ve
                got! <br />
                Tap ‘Start’ now and claim your spot on the leaderboard!
              </h6>
            </div>
            <div className="course-home">
              <div class="course">
                <ul>
                  <li>
                    <img src="/public/html.jpg" alt="" />
                    <p>HTML</p>
                  </li>
                  <li>
                    <img src="/public/css.jpg" alt="" />
                    <p>CSS</p>
                  </li>
                </ul>
              </div>
              <div className="course">
                <ul>
                  <li>
                    <img src="/public/JS.jpg" alt="" />
                    <p>Javascript</p>
                  </li>
                  <li>
                    <img src="/public/react.jpg" alt="" />
                    <p>React</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="l-nav">
            <button className="start-btn">
              {" "}
              <a href="#quiz-section">Start</a>
            </button>
          </div>
        </div>
      </div>
      <div id="quiz-section" class="background-1">
        <div class="parent-1">
          <div className="logo">
            <img src="/public/quick-logo.png" alt="" />
          </div>
          <div class="question-1">
            <div class="que-1">
              <h6>{question.question}</h6>
            </div>
            <div className="course-home">
              <div class="option-1">
                <ul>
                  <li
                    onClick={() => optionClick("option1")}
                    className={
                      selectedOptions[index] === "option1" ? "selected" : ""
                    }
                  >
                    <img src="/public/A.jpg" alt="" />
                    <p>{question.option1}</p>
                  </li>
                  <li
                    onClick={() => optionClick("option2")}
                    className={
                      selectedOptions[index] === "option2" ? "selected" : ""
                    }
                  >
                    <img src="/public/B.jpg" alt="" />
                    <p>{question.option2}</p>
                  </li>
                </ul>
              </div>
              <div className="option-1">
                <ul>
                  <li
                    onClick={() => optionClick("option3")}
                    className={
                      selectedOptions[index] === "option3" ? "selected" : ""
                    }
                  >
                    <img src="/public/C.jpg" alt="" />
                    <p>{question.option3}</p>
                  </li>
                  <li
                    onClick={() => optionClick("option4")}
                    className={
                      selectedOptions[index] === "option4" ? "selected" : ""
                    }
                  >
                    <img src="/public/D.jpg" alt="" />
                    <p>{question.option4}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="nav">
            <button onClick={previousButton} disabled={index === 0}>
              Previous
            </button>
            {index === data.length - 1 ? (
              <button onClick={submitButton}>Submit</button>
            ) : (
              <button onClick={nextButton}>Next</button>
            )}
          </div>
          <div class="timer">
            <p>
              Time left {Math.floor(timer / 60)}: {timer % 60}
            </p>
          </div>
          <div className="index">
            <i>
              <b>
                {index + 1} of {data.length}
              </b>
            </i>
          </div>
        </div>
      </div>
      <div class="Results">
        <div class="p-result">
          <div className="logo">
            <img src="/public/quick-logo.png" alt="" />
          </div>
          <div class="result-msg">
            <p>
              <i>Quiz completed</i>
            </p>
            <h6>You scored....</h6>
          </div>
          <div class="score">
            <h4>16</h4>
            <p>out of 20</p>
          </div>
          <div class="r-nav">
            <button>Restart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
