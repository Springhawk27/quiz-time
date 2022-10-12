import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="text-gray-600 body-font bg-purple-400 sticky top-0" >
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to='/' className="flex title-font font-medium items-center text-sky-300 mb-4 md:mb-0">

                    <span className="ml-3 text-2xl font-bold">QuizTime</span>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-gray-50 font-bold justify-center">

                    <Link to='/' className="mr-5 hover:text-gray-900">Quiz</Link>
                    <Link to='/statistics' className="mr-5 hover:text-gray-900">Statistics</Link>
                    <Link to='/blog' className="mr-5 hover:text-gray-900">Blog</Link>
                </nav>

            </div>
        </header>
    );
};

export default Header;