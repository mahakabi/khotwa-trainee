"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "./close-ended-questions.css"; // Import the CSS file

export default function CloseEndedQuestions() {
  const router = useRouter();
  const [answers, setAnswers] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: 0,
  });

  const handleAnswer = (questionKey, value) => {
    setAnswers((prev) => ({ ...prev, [questionKey]: value }));
  };

  const handleNext = () => {
    localStorage.setItem("surveyAnswers", JSON.stringify(answers));
    router.push("/voice-note");
  };

  const isSelected = (questionKey, value) => answers[questionKey] === value;

  return (
    <div className="container">
      <h1 className="title">Close-Ended Questions</h1>

      {/* Question 1 */}
      <div className="question">
        <p>1. Did the product meet your expectations in terms of quality?</p>
        <button
          onClick={() => handleAnswer("question1", "Yes")}
          className={`btn ${isSelected("question1", "Yes") ? "selected" : ""}`}
        >
          Yes
        </button>
        <button
          onClick={() => handleAnswer("question1", "No")}
          className={`btn ${isSelected("question1", "No") ? "selected" : ""}`}
        >
          No
        </button>
      </div>

      {/* Question 2 */}
      <div className="question">
        <p>2. Was it easy to navigate and use our product?</p>
        <button
          onClick={() => handleAnswer("question2", "Yes")}
          className={`btn ${isSelected("question2", "Yes") ? "selected" : ""}`}
        >
          Yes
        </button>
        <button
          onClick={() => handleAnswer("question2", "No")}
          className={`btn ${isSelected("question2", "No") ? "selected" : ""}`}
        >
          No
        </button>
      </div>

      {/* Question 3 */}
      <div className="question">
        <p>
          3. Do you feel that the pricing of our product offers good value for
          money?
        </p>
        <button
          onClick={() => handleAnswer("question3", "Yes")}
          className={`btn ${isSelected("question3", "Yes") ? "selected" : ""}`}
        >
          Yes
        </button>
        <button
          onClick={() => handleAnswer("question3", "No")}
          className={`btn ${isSelected("question3", "No") ? "selected" : ""}`}
        >
          No
        </button>
      </div>

      {/* Question 4 */}
      <div className="question">
        <p>
          4. On a scale of 1 to 10, how would you rate the quality of our
          product?
        </p>
        <div className="scale">
          {[...Array(10)].map((_, index) => (
            <button
              key={index}
              onClick={() => handleAnswer("question4", index + 1)}
              className={`scale-btn ${
                answers.question4 >= index + 1 ? "selected-scale" : ""
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Next Button */}
      <button onClick={handleNext} className="next-btn">
        Next
      </button>
    </div>
  );
}
