import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './styles/index.css';
import App from './components/App.jsx';
import Shop from './components/Shop.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import Cart from './components/Cart.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<ErrorPage />
  },
  {
    path: "Shop",
    element: <Shop />,
    children: [
      {path: 'Cart', element: <Cart />},
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
