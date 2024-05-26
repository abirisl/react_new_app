import { Link } from 'react-router-dom';
import UserAuth from '../hooks/UserAuth';
import logo from '../assets/logo.png';
import { IoMdSearch } from 'react-icons/io';
import { FaCartShopping } from 'react-icons/fa6';
import DarkMode from './DarkMode';

const menu =[
  {
    id:1,
    name: "Home",
    link: "#"
  },
  {
    id:1,
    name: "Top Seller",
    link: "#"
  },
  {
    id:1,
    name: "Women Wear",
    link: "#"
  },
  {
    id:1,
    name: "Man Wear",
    link: "#"
  }
  
]
const Navbar = () => {

  const { logOut, user } = UserAuth()

  return (
    <div className='shadow-md dark:bg-gray-900 dark:text-white relative z-40'>
      {/* upper navbar */}
      <div className='bg-primary/40 py-2'>
        <div className='container flex justify-between items-center'>
          <div>
            <a href="#" className='font-bold text-2xl sm:text-3xl flex gap-2'>
              <img src={logo} alt="" className='w-10 uppercase' />
              Shopsy
            </a>
          </div>
          {/* search bar */}
          <div className='flex justify-between item-center gap-4'>
            <div className='relative group hidden sm:block'>
              <input type="text" placeholder='search' className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary' />
              <IoMdSearch className='text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3' />
            </div>
          </div>
          {/* order button */}
          <button className='bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white px-4 py-1 rounded-full flex item-center gap-3 group'>
            <span className='group-hover:block hidden transition-all duration-200'>order</span>
            <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer' />
          </button>
          {/* DarkMode Button */}
          <div>
            <DarkMode />
          </div>
        </div>
      </div>
      {/* lower navbar */}
      <div className='flex justify-center'>
          <ul className='sm:flex hidden item-center gap-4'>
            {
              menu.map((data)=>(
                <li key={data.id}>
                  <a href={data.link}
                  className="inline-block px-4 hover:text-primary duration-300"
                  >{data.name}</a>
                </li>
              ))
            }
          </ul>
      </div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL || "/public/vite.svg"} />
              </div>
            </div>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li><Link to='/about'>About Us</Link></li>
              <li><Link to='/contact_us'>Contact</Link></li>
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              {!user && (
                <>
                  <li><Link to='/login'>LogIn</Link></li>
                  <li><Link to='/register'>signUp</Link></li>
                </>
              )
              }
              {user && (
                <li><Link to='/drawer'>Drawer</Link></li>
              )}
              {user && (
                <li>
                  <button className="btn btn-active btn-accent text-white" onClick={() => logOut()}>LOG OUT</button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Navbar;