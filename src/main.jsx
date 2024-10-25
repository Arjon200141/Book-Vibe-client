import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import PagestoRead from './Components/PagestoRead/PagestoRead';
import About from './Components/About/About';
import BookReview from './Components/BookReview/BookReview';
import ReadBooks from './Components/ReadBooks/ReadBooks';
import Wishlist from './Components/Wishlist/Wishlist';
import UpcomingBooks from './Components/UpcomingBooks/UpcomingBooks';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:"/listedbooks",
        element:<ListedBooks></ListedBooks>,
        children:[
          {
            path:"/listedbooks",
            element:<ReadBooks></ReadBooks>,
            loader:()=>(fetch("/book.json")),
          },
          {
            path:"readbooks",
            element:<ReadBooks></ReadBooks>,
            loader:()=>(fetch("/book.json")),
          },
          {
            path:"wishlist",
            element:<Wishlist></Wishlist>,
            loader:()=>(fetch("/book.json")),
          }
        ]
      },

      {
        path: "/read",
        element: <PagestoRead></PagestoRead>,
        
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/upcoming",
        element: <UpcomingBooks></UpcomingBooks>,
      },
      {
        path: "/books/:bookId",
        element: <BookReview></BookReview>,
        loader : () => fetch('book.json')
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
