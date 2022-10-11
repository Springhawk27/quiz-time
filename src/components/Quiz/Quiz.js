import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizCard from '../QuizCard/QuizCard';

import binary from '../../images/binary.jpg'

const Quiz = () => {
    const quizes = useLoaderData();
    // console.log(quizes.data)

    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5  mx-auto">
                    <div className="lg:w-2/3 mx-auto">
                        <div className="flex flex-wrap w-full  py-32 px-10 relative mb-4">
                            <img alt="gallery" className="w-full object-contain h-full object-center block opacity-25 absolute inset-0" src={binary} />
                            <div className="text-center relative z-10 w-full">
                                <h2 className="text-2xl text-gray-900 font-medium title-font mb-2">Ace the Interview</h2>
                                <p className="leading-relaxed">Take these interactive quiz now and crack the interview</p>

                            </div>
                        </div>

                    </div>
                    <div className="flex flex-wrap -m-4">

                        {
                            quizes.data.map(quiz => <QuizCard
                                key={quiz.id}
                                quiz={quiz}
                            ></QuizCard>)
                        }


                    </div>
                </div>
            </section >
        </div >
    );
};

export default Quiz;