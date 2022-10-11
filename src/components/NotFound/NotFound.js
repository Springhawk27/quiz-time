import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/not-found.png'


// Not found component 
const NotFound = () => {
    return (
        <div >
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-5 object-cover object-center rounded" alt="Not Found" src={img} />
                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font sm:text-3xl text-4xl mb-1 font-bold text-red-600">4 0 4</h1>
                        <h1 className="title-font sm:text-2xl text-3xl mb-4 font-bold text-red-600">The page you are looking for is not found</h1>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-purple-400 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
                                <Link to="/">Go to  Quiz</Link>

                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NotFound;