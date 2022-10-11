import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizCard from '../QuizCard/QuizCard';

const Quiz = () => {
    const quizes = useLoaderData();
    console.log(quizes.data)

    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">

                        {
                            quizes.data.map(quiz => <QuizCard
                                key={quiz.id}
                                quiz={quiz}
                            ></QuizCard>)
                        }


                    </div>
                </div>
            </section>
        </div>
    );
};

export default Quiz;