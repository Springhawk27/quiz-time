import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer class="text-gray-600 body-font ">
            <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <Link to='/' className="flex title-font font-medium items-center text-sky-500 mb-4 md:mb-0">

                    <span className="ml-3 text-2xl font-bold">QuizTime</span>
                </Link>
                <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2022 QuizTime —
                    <a href="https://twitter.com/knyttneve" class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@sajjadmahmud</a>
                </p>

            </div>
        </footer>
    );
};

export default Footer;