import React from 'react';

const QuizQuestions = ({ questions }) => {
    console.log(questions)
    const qs = questions.map(question => {
        console.log(question)
    })
    return (
        <>
            {
                questions.map(question => {
                    return (
                        <div className="lg:w-2/3 w-full mx-auto overflow-auto">
                            <div className="w-full">
                                <div className="bg-blue-100 rounded flex p-4 h-full items-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-purple-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium"> {question.question.slice(3, -4)}</span>
                                </div>
                            </div>

                            <div className="flex flex-wrap lg:w-full sm:mx-auto sm:mb-2 -mx-2">
                                <div className="py-2 sm:w-1/2 w-full">
                                    <div className="bg-purple-100 rounded flex p-4 h-full items-center">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-purple-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                            <path d="M22 4L12 14.01l-3-3"></path>
                                        </svg>
                                        <span className="title-font font-medium">Authentic Cliche Forage</span>
                                    </div>
                                </div>


                            </div>
                        </div>
                    )
                })
            }
        </>
    );
};

export default QuizQuestions;