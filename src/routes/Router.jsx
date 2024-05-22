import { createBrowserRouter } from 'react-router-dom';
import MainLAyout from '../layouts/MainLAyout';
import About from '../pages/About';
import Contact from '../pages/Contact';
import ErrorPages from '../pages/ErrorPages';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
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
        
    }
])