import QuizzSection from "../Components/QuizzSection";
import questions from "../data/data";
import { useState } from "react";


const Quizz = () => {

    return (
        <>
        <h1>Which pet is the best for you?</h1>
        <QuizzSection data= {questions} ></QuizzSection>
        </>
    )
}

export default Quizz;