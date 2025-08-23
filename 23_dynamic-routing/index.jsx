import {createRoot} from 'react-dom/client'
import App from './App';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import CountryDetail from './components/CountryDetail';

const root=createRoot(document.querySelector('#root'));

const router=createBrowserRouter([{
    path:'/',
    element:<App/>,
    errorElement:<Error/>,
    children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/:country',
            element:<CountryDetail/>
        }
    ]
}])

root.render(<RouterProvider router={router}/>)