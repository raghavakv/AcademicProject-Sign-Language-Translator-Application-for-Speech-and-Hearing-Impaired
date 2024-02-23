/* jshint ignore:start */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Asl2Text from './pages/asl2text';
import Text2Asl from './pages/text2asl';
import Isl2Text from './pages/isl2text';
import Text2Isl from './pages/text2isl';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/asl2text",
    element: <Asl2Text />,
  },
  {
    path: "/text2asl",
    element: <Text2Asl />,
  },
  {
    path: "/ist2text",
    element: <Isl2Text />,
  },
  {
    path: "/text2isl",
    element: <Text2Isl />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


