import { createBrowserRouter } from 'react-router-dom';
import DrawerLayout from '../layouts/DrawerLayout';
import MainLAyout from '../layouts/MainLAyout';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Dashboard from '../pages/Dashboard';
import ErrorPages from '../pages/ErrorPages';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import PrivateRoute from './PrivateRoute/PrivateRoute';
export const router =createBrowserRouter([
    {
        path: "/",
        element: <MainLAyout/>,
        errorElement: <ErrorPages/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "about",
                element: <About/>
            },
            {
                path: "contact_us",
                element: <Contact/>
            },
            
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>
            },
        ]
             
    },
    {
        path: "drawer",
        element: <DrawerLayout/>,
        errorElement: <ErrorPages/>,
        children:[{
            path:"",
            element:(
                <PrivateRoute>
                    <Dashboard/>
                </PrivateRoute>
            ),
        }],

    },
])