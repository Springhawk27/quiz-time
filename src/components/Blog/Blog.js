import React from 'react';

const Blog = () => {
    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="-my-8 divide-y-2 divide-gray-100">
                    <div className="py-8 flex flex-wrap md:flex-nowrap">
                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                            <span className="font-semibold title-font text-purple-500">React Router</span>
                            <span className="mt-1 text-gray-500 text-sm">08 October 2022</span>
                        </div>
                        <div className="md:flex-grow">
                            <h2 className="text-2xl font-medium text-sky-700 title-font mb-2">What is the purpose of react router?</h2>
                            <p className="leading-relaxed">React router is a standard library for routing. It is mainly use for developing single page application. It allows us to define multiple routes for the application. By using react router we can navigate different pages without even refreshing the pages. This is much more efficient than other traditional routing. We can define a route for a page and it will direct to that page without reloding the page means only the routing section will change but the remain will be unchanged.</p>

                        </div>
                    </div>
                    <div className="py-8 flex flex-wrap md:flex-nowrap">
                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                            <span className="font-semibold title-font text-purple-500">React Context API</span>
                            <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
                        </div>
                        <div className="md:flex-grow">
                            <h2 className="text-2xl font-medium text-sky-700 title-font mb-2">How does context api work?</h2>
                            <p className="leading-relaxed">In react, context api provides us a way to pass the information or data of props to the component without having the prop drilling. Context api actually solves the problem of prop drilling. Once a context is created we can pass data anywhere without passing props down through each child. This is actually handy in case of using the data where the data can be needed by many components such as authentication and UI themes are used by many components in general.</p>

                        </div>
                    </div>
                    <div className="py-8 flex flex-wrap md:flex-nowrap">
                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                            <span className="font-semibold title-font text-purple-500">React Hook</span>
                            <span className="text-sm text-gray-500">12 Jun 2019</span>
                        </div>
                        <div className="md:flex-grow">
                            <h2 className="text-2xl font-medium text-sky-700 title-font mb-2">What is useRef in react?</h2>
                            <p className="leading-relaxed">In react, ueRef is a hook which allows us to persist values between renders. So, it can be used to store mutable values that does not re-render when updated. By using useRef we can access  DOM element directly. useRef holds its mutable value in its .current property. We use useRef basically for text selection, managing focus, trigger imperative animations or integrating third-party libraries.</p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;