import React from 'react';
import { IoNotifications } from "react-icons/io5";
import { CiMenuKebab } from "react-icons/ci";
import { TfiLayoutMenuSeparated } from "react-icons/tfi";

const Dashboard = () => {
    return (
        <div>
            <div className='bg-gradient-to-r from-pink-500 via-pink-500 to-yellow-500 rounded-br-full min-h-2 flex item-center justify-between p-10'>
                <div>
                    <input type="text" placeholder="" className="w-96 rounded-lg pl-3" />
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