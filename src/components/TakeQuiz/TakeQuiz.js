import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestions from '../QuizQuestions/QuizQuestions';

const TakeQuiz = () => {
    const quiz = useLoaderData();
    // console.log(quiz.data)
    // console.log(quiz.data.questions)
    const { total, name, logo, questions } = quiz.data;


    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20 justify-center items-center">
                    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded bg-purple-200" alt="hero" src={logo} />

                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Quiz on {name}</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Mastery {name} by answering this {total} questions</p>
                </div>
                <QuizQuestions questions={questions}></QuizQuestions>

            </div>
        </section>
    );
};

export default TakeQuiz;