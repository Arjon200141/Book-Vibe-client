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
import About from './Components/About/About';
import BookReview from './Components/BookReview/BookReview';
import Wishlist from './Components/Wishlist/Wishlist';
import UpcomingBooks from './Components/UpcomingBooks/UpcomingBooks';
import BookList from './Components/BookList/BookList';
import SignIn from './Components/SignIn/SignIn';
import AuthProviders from './Components/Providers/AuthProviders';
import LogIn from './Components/SignIn/LogIn';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Cart from './Components/Cart/Cart';
import PrivateRoutes from './Components/PrivateRoutes/PrivateRoutes';
import AdminRoutes from './Components/AdminRoutes/AdminRoutes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/wishlist",
        element: <Wishlist></Wishlist>,
        loader: () => (fetch("http://localhost:5000/books"))
      },
      {
        path: "/booklist",
        element: <BookList></BookList>
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
        element: <PrivateRoutes><BookReview></BookReview></PrivateRoutes>,
        loader: () => fetch('http://localhost:5000/books')
      },
      {
        path: "/signup",
        element: <SignIn></SignIn>
      },
      {
        path: "/signin",
        element: <LogIn></LogIn>
      },
      {
        path:"/cart",
        element:<Cart></Cart>
      },
    ]
  },
]);
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProviders>
  </React.StrictMode>,
)
