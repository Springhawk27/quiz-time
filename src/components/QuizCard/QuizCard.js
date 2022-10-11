import React from 'react';
import { Link } from 'react-router-dom';

const QuizCard = (props) => {
    // console.log(props)
    const { id, name, logo, total } = props.quiz
    return (
        <div className="p-4 md:w-1/2">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-contain object-center bg-purple-100" src={logo} alt="quiz" />
                <div className="p-6">

                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{name}</h1>

                    <div className="flex justify-between  items-center flex-wrap">
                        <Link to={`/quiz/${id}`} className="text-purple-500 inline-flex items-center md:mb-2 lg:mb-0">Start Quiz

                        </Link>
                        <div>
                            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                Questions
                            </span>
                            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                {total}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizCard;