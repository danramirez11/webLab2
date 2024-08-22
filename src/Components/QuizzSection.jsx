import CounterInput from "./CounterInput";
import CheckInput from "./CheckInput";
import SliderInput from "./SliderInput";
import { useState } from "react";
import TextInput from "./TextInput";
import ResultCard from "./ResultCard";
import './quizz.css'

const QuizzSection = ({data}) => {
    const {questions, results} = data;

    const [points, setPoints] = useState({
        Dog: 0,
        Cat: 0,
        Bird: 0,
        Reptile: 0,
        Fish: 0
    });
    const [step, setStep] = useState(0);
    const [result, setResult] = useState({});

    const handleAnswer = (receivedPoints) => {
        console.log(receivedPoints)
        receivedPoints.forEach((point) => {
            setPoints((prev) => {
                return {
                    ...prev,
                    [point]: prev[point] + 1
                }
            })
        })
    };

    const renderQuestion = (question) => {
        switch (question.type) {

            case "counter":
                return (
                    <div className="queDiv" key={question.id}>
                    <h2>{question.question}</h2>
                    <CounterInput 
                    onSelect={handleAnswer} 
                    props={question.answers}>
                    </CounterInput>
                    </div>
                )

            case "multiple":
                return (
                    <div className="queDiv" key={question.id}>
                    <h2>{question.question}</h2>
                    {question.answers.map((answer) => {
                        return (
                            <CheckInput key={answer.id} props={answer}
                            onSelect={handleAnswer}></CheckInput>
                        )
                    })}
                    </div>
                )

            case "slider":
                return (
                    <div className="queDiv" key={question.id}>
                    <h2>{question.question}</h2>
                    <SliderInput props={question.answers} onSelect={handleAnswer}></SliderInput>
                    </div>
                )

            case "text":
                return (
                    <div className="queDiv" key={question.id}>
                    <h2>{question.question}</h2>
                    <TextInput prop={question}/>
                    </div>
                )

            default:
                return null;
        }
    }

    const finishTest = () => {
        console.log(results)
        let maxPoints = 0;
        let maxKey = "";
        for (const key in points) {
            if (points[key] > maxPoints) {
                maxPoints = points[key];
                maxKey = key;
            }
        }
        const finalAnimal = results.filter((a) => {
            return a.name === maxKey
        })
        console.log(finalAnimal)

        setResult(finalAnimal);

        setStep(step + 1)
    }

    const nextQue = () => {
        setStep(step + 1)
    }

    const goBack = () => {
        setStep(step - 1)
    }

    
    return (
        <>

        <h4>{step}/{questions.length}</h4>

        { step < questions.length && (
            renderQuestion(questions[step])
        )}
        { step === questions.length && (
            <ResultCard result = {result}></ResultCard>
        )}

        <div className="buttonDiv">
        { step !== 0 ? <button onClick={goBack}>Go back</button> : null}

        {step === questions.length-1 ? <button onClick={finishTest}>Finish Test</button> : 
        <button onClick={nextQue}>Next Question</button>}
        </div>
        
        </>
    )
}

export default QuizzSection;