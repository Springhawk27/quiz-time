import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TakeQuiz = () => {
    const quiz = useLoaderData();
    console.log(quiz)
    return (
        <div>
            <h1>Take quiz page</h1>
        </div>
    );
};

export default TakeQuiz;