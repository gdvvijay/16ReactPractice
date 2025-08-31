import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import App from "./App";
import Home from "./components/Home";
import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:'/:country',
        
      }
    ],
  },
]);
const root = createRoot(document.querySelector("#root"));

root.render(<RouterProvider router={router} />);
