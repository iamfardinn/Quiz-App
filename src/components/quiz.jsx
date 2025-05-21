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



    const [optionSelected, setOptionSelected] = useState(null);


  function handleSelectOption(option) {
    
setOptionSelected(option);

  }

    return (
    
    <div>
        <h2>Question 1</h2>
        <p className="question">{questionBank[0].question}</p>


{questionBank[0].options.map((option) => (
 <button className="option" onClick={() => handleSelectOption(option)}>
    {option}
    </button>
))}

<p>option Selected:{optionSelected}</p>

<div className="nav-buttons">
    <button>Previous</button>
    <button>Next</button>
</div>
        </div>
    )
}
export default Quiz