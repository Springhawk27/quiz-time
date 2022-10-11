import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import NotFound from './components/NotFound/NotFound';
import Quiz from './components/Quiz/Quiz';
import Statistics from './components/Statistics/Statistics';
import TakeQuiz from './components/TakeQuiz/TakeQuiz';
import Main from './layouts/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Quiz></Quiz>
        },
        {
          path: '/quiz/:quizId',
          loader: async ({ params }) => {
            // console.log(params)
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element: <TakeQuiz></TakeQuiz>,
        },
        {
          path: '/statistics',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '*',
          element: <NotFound></NotFound>
        }
      ]
    }
  ])

  return (
    <div >
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
