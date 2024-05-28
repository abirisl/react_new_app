import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import AOS from "aos";
import "aos/dist/aos.css";

const MainLAyout = () => {
    React.useEffect(()=>{
        AOS.init({
          offset:100,
          duration:800,
          easing:"ease-in-sine",
          delay: 100,
        });
        AOS.refresh();
      },[])
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLAyout;