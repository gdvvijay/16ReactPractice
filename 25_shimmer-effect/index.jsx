import {createRoot} from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Error from './Error';
import './style.css'
import Home from './components/Home';
import CountryDetail from './components/CountryDetail';

const root=createRoot(document.querySelector('#root'));

const router=createBrowserRouter([{
    path:'/',
    errorElement:<Error/>,
    element:<App/>,
    children:[
        {
            path:'/',
            element:<Home/>,
        },
        {
            path:'/:country',
            element:<CountryDetail/>
        }
    ]
}])


root.render(<RouterProvider router={router}/>)