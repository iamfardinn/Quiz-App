import React, { useState } from "react";

function Quiz() {
  const questionBank =[
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    
    {
        question: "what is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Jupiter"
    },

    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Text Markup Language", "Hyper Tabular Markup Language", "None of these"],
        answer: "Hyper Text Markup Language"
    }
  ];

  const initialAnswers =[null, null, null];


    const[userAnswers, setUserAnswers] = useState(initialAnswers);

    const [currentQuestion, setCurrentQuestion] = useState(0);

  function handleSelectOption(option) {
    const newUserAnswers =[...userAnswers];
    newUserAnswers[currentQuestion] = option;

    

    setUserAnswers(newUserAnswers);


  }


  function goToNext(){
setCurrentQuestion(currentQuestion + 1);
  }

  function goToPrev(){
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }


  }

    return (
    
    <div>
        <h2>Question 1</h2>
        <p className="question">{questionBank[currentQuestion].question}</p>


{questionBank[currentQuestion].options.map((option) => (
 <button className="option" onClick={() => handleSelectOption(option)}>
    {option}
    </button>
))}


<div className="nav-buttons">
    <button onClick={goToPrev} disabled={currentQuestion===0}>Previous</button>
    <button onClick={goToNext} disabled={currentQuestion===questionBank.length-1}>Next</button>
</div>
        </div>
    )
}
export default Quiz