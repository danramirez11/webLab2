import CounterInput from "./CounterInput";
import CheckInput from "./CheckInput";
import SliderInput from "./SliderInput";
import { useState } from "react";
import TextInput from "./TextInput";
import ResultCard from "./ResultCard";

const QuizzSection = (data, results) => {
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
        
        setStep(step + 1)
    };

    const renderQuestion = (question) => {
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
                            <CheckInput key={answer.id} props={answer}
                            onSelect={handleAnswer}></CheckInput>
                        )
                    })}
                    </div>
                )

            case "slider":
                return (
                    <div key={question.id}>
                    <h2>{question.question}</h2>
                    <SliderInput props={question.answers} onSelect={handleAnswer}></SliderInput>
                    </div>
                )

            case "text":
                return (
                    <div key={question.id}>
                    <h2>{question.question}</h2>
                    <TextInput/>
                    <button onClick={() => {
                        finishTest()
                    }}>Finish Test</button>
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

        setResult(finalAnimal);
    }

    
    return (
        <>
        { step === 0 && (
            renderQuestion(data.data[0])
        )}
        { step === 1 && (
            renderQuestion(data.data[step])
        )}
        { step === 2 && (
            renderQuestion(data.data[step])
        )}
        { step === 3 && (
            renderQuestion(data.data[step])
        )}
        { step === 4 && (
            renderQuestion(data.data[step])
        )}
        { step === 5 && (
            renderQuestion(data.data[step])
        )}
        { step === 6 && (
            renderQuestion(data.data[step])
        )}
        { step === 7 && (
            <ResultCard result = {result}></ResultCard>
        )}
        </>
    )
}

export default QuizzSection;