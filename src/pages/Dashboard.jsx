import React from 'react';
import { IoNotifications } from "react-icons/io5";
import { CiMenuKebab } from "react-icons/ci";
import { TfiLayoutMenuSeparated } from "react-icons/tfi";
import { IoMdSearch } from 'react-icons/io';

const Dashboard = () => {
    return (
        <div>
            <div className='bg-gradient-to-r from-pink-500 via-pink-500 to-yellow-500 rounded-br-full min-h-2 flex item-center justify-between p-10'>
                <div className='relative hidden sm:block'>
                    <input type="text" placeholder='search' className='w-[200px] sm:w-[200px]  rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800' />
                    <IoMdSearch className='text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3' />
                </div>
                <div className='flex gap-5 text-xl'>
                    <div>
                        <IoNotifications />
                    </div>
                    <div>
                        <TfiLayoutMenuSeparated />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;