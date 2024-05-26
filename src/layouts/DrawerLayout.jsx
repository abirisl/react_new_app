import React from 'react';
import { GoHomeFill } from "react-icons/go";
import { IoMdMenu } from "react-icons/io";
import { RiAccountPinBoxFill } from "react-icons/ri";
import { IoChatboxSharp } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { Outlet } from 'react-router-dom';
import UserAuth from '../hooks/UserAuth';

const DrawerLayout = () => {
    const { user,logOut } = UserAuth()
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet />
            </div>

            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-56 min-h-full bg-slate-800 text-base-content text-white text-xl">

                    <img className='p-5 rounded-full w-36' src={user?.photoURL || "/public/avatar.jpg.webp"} />
                    {/* Sidebar content here */}
                    <li>
                        <div className='flex'>
                            <div><IoMdMenu className='text-red-700' /></div>
                            <div><a>Menu</a></div>
                        </div>
                    </li>
                    <li>
                        <div className='flex'>
                            <div><GoHomeFill className='text-red-700' /></div>
                            <div><a>Dashboard</a></div>
                        </div>
                    </li>
                    <li>
                        <div className='flex'>
                            <div><RiAccountPinBoxFill className='text-red-700' /></div>
                            <div><a>Account</a></div>
                        </div>
                    </li>
                    <li>
                        <div className='flex'>
                            <div><IoChatboxSharp className='text-red-700' /></div>
                            <div><a>Chat</a></div>
                        </div>
                    </li>
                    <li>
                        <div className='flex'>
                            <div><IoIosSettings className='text-red-700' /></div>
                            <div><a>Settings</a></div>
                        </div>
                    </li>
                    <li>

                    </li>
                    <div className='text-center mt-5'>
                        <button  onClick={() => logOut()}>Logout</button>
                    </div>
                </ul>


            </div>
        </div>
    );
};

export default DrawerLayout;