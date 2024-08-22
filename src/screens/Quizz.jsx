import QuizzSection from "../Components/QuizzSection";
import questions from "../data/data";
import results from "../data/results";
import { useState } from "react";

const Quizz = () => {

    return (
        <>
        <h1>Which pet is the best for you?</h1>
        <QuizzSection 
        data= {questions} results= {results}></QuizzSection>
        </>
    )
}

export default Quizz;