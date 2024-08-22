import CounterInput from "./CounterInput";
import CheckInput from "./CheckInput";
import SliderInput from "./SliderInput";
import { useState } from "react";

const QuizzSection = (questions) => {
    const [points, setPoints] = useState({
        Dog: 0,
        Cat: 0,
        Bird: 0,
        Reptile: 0,
        Fish: 0
    });

    const handleAnswer = (receivedPoints) => {
        receivedPoints.forEach((point) => {
            setPoints((prev) => {
                return {
                    ...prev,
                    [point]: prev[point] + 1
                }
            })
        })
        
        setTimeout(() => {
            console.log(points)
        }, 10000);
    };

    
    return (
        <>
        {questions.data.map((question) => {
            switch (question.type) {
                case "counter":
                    return (
                        <div key={question.id}>
                        <h2>{question.question}</h2>
                        <CounterInput 
                        onSelect={handleAnswer} 
                        props={question.answers}>
                        </CounterInput>
                        </div>
                    )
                case "multiple":
                    return (
                        <div key={question.id}>
                        <h2>{question.question}</h2>
                        {question.answers.map((answer) => {
                            return (
                                <CheckInput key={answer.id} props={answer}></CheckInput>
                            )
                        })}
                        </div>
                    )
                case "slider":
                    return (
                        <div key={question.id}>
                        <h2>{question.question}</h2>
                        <SliderInput props={question.answers}></SliderInput>
                        </div>
                    )
                default:
                    return null;
            }
        })}
        </>
    )
}

export default QuizzSection;