import CounterInput from "./CounterInput";
import CheckInput from "./CheckInput";

const QuizzSection = (questions) => {
    return (
        <>
        {questions.data.map((question) => {
            switch (question.type) {
                case "counter":
                    return (
                        <div key={question.id}>
                        <h2>{question.question}</h2>
                        <CounterInput></CounterInput>
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
                        <input type="range" min="0" max="100" step="1"></input>
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