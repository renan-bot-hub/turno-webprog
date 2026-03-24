<<<<<<< HEAD
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// HomePage Structure
import Layout from './components/Layout.jsx';
import ArticlePage from './pages/ArticlePage.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'articles',
        element: <ArticlePage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React App</h1>
        <p>
          Name: Renan S. Turno<br />
          Email: turnors@students.national-u.edu.ph<br/>
          Other Personal Info: <a href='https://github.com/renan-bot-hub/turno-webprog.git'>My Repository</a>
        </p>
      </header>
    </div>
  )
}

export default App
>>>>>>> e3dd6680076d548a8e04da637dbde126393e0fea
