import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { EyeIcon } from '@heroicons/react/24/solid'






const QuizQuestions = ({ questions }) => {
    // console.log(questions)

    return (
        <>
            {
                questions.map(question => {
                    console.log(question)
                    // console.log(question.correctAnswer)
                    const correctAns = question.correctAnswer

                    const notifyCorrect = (correctAns) => toast.success(`Correct answer is - ${correctAns}`, {
                        style: {
                            border: '1px solid green',
                            padding: '16px',
                            color: '#713200',
                        },
                        iconTheme: {
                            primary: 'green',
                            secondary: '#FFFAEE',
                        },
                    });
                    return (
                        <div className="lg:w-2/3 w-full mx-auto overflow-auto">
                            <div className="w-full">
                                <div className="bg-blue-100 rounded flex p-4 h-full items-center justify-between">

                                    <span className="title-font font-medium">
                                        {question.question.slice(3, -4)}</span>
                                    <EyeIcon onClick={() => notifyCorrect(correctAns)} className="ml-2 h-6 w-6 text-blue-400"></EyeIcon>
                                </div>

                            </div>
                            <div className="flex flex-wrap lg:w-full sm:mx-auto sm:mb-2 -mx-2">
                                {
                                    question.options.map(option => {
                                        const notify = () => toast.success(`Your answer is correct`, {
                                            style: {
                                                border: '1px solid green',
                                                padding: '16px',
                                                color: '#713200',
                                            },
                                            iconTheme: {
                                                primary: 'green',
                                                secondary: '#FFFAEE',
                                            },
                                        });
                                        const notify2 = () => toast.error(`Your answer is  wrong`, {
                                            style: {
                                                border: '1px solid red',
                                                padding: '16px',
                                                color: '#713200',
                                            },
                                            iconTheme: {
                                                primary: 'red',
                                                secondary: '#FFFAEE',
                                            },
                                        });
                                        const displayToast = (correctAns, option) => {
                                            if (correctAns === option) {
                                                notify()

                                            }
                                            else {
                                                notify2()
                                            }
                                        }

                                        return (

                                            <div className="p-2 sm:w-1/2 w-full ">
                                                <div onClick={() => displayToast(correctAns, option)} className="bg-purple-100 rounded flex p-4 h-full items-center cursor-pointer">

                                                    <div >
                                                        <span className="title-font font-medium">{option}</span>

                                                        <Toaster position="top-center"
                                                            reverseOrder={false} />
                                                    </div>

                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                        </div>
                    )
                })
            }
        </>
    );
};

export default QuizQuestions;