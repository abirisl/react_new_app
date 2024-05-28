import { Link } from 'react-router-dom';
import UserAuth from '../hooks/UserAuth';
import logo from '../assets/logo.png';
import { IoMdSearch } from 'react-icons/io';
import { FaCaretDown, FaCartShopping } from 'react-icons/fa6';
import DarkMode from './DarkMode';

const menu = [
  {
    id: 1,
    name: "Home",
    link: "#"
  },
  {
    id: 1,
    name: "Top Seller",
    link: "#"
  },
  {
    id: 1,
    name: "Women Wear",
    link: "#"
  },
  {
    id: 1,
    name: "Man Wear",
    link: "#"
  }

]

const Dropdown = [
  {
    id: 1,
    name: "Trending product",
    link: ""
  },
  {
    id: 2,
    name: "Top Rated",
    link: ""
  },
  {
    id: 3,
    name: "Best Selling",
    link: ""
  }
]

const ProfileDrop = [
  {
    id: 1,
    name: "About",
    link: ""
  },
  {
    id: 2,
    name: "Profile",
    link: ""
  },
  {
    id: 3,
    name: "Dashboard",
    link: ""
  },
  {
    id: 4,
    name: "Contact Us",
    link: ""
  }
]
const Navbar = () => {

  const { logOut, user } = UserAuth()

  const ProfileDrop = <>
    <li className="inline-block w-full rounded-md p-2 hover:bg-primary/20"><Link to='/Home'>About</Link></li>
    <li className="inline-block w-full rounded-md p-2 hover:bg-primary/20"><Link to='/parts'>Profile</Link></li>
    {
      user && <li className="inline-block w-full rounded-md p-2 hover:bg-primary/20"><Link to='/drawer'>DASHBOARD</Link></li>
    }
    <li className="inline-block w-full rounded-md p-2 hover:bg-primary/20"><Link to='/blogs'>Contact Us</Link></li>
    {
      !user && (
        <>
          <li className="inline-block w-full rounded-md p-2 hover:bg-primary/20"><Link to='/login'>LogIn</Link></li>
          <li className="inline-block w-full rounded-md p-2 hover:bg-primary/20"><Link to='/register'>signUp</Link></li>
        </>
      )
    }
    {
      user && <button className="inline-block w-full rounded-md p-2 hover:bg-primary/20" onClick={() => logOut()}>LogOut</button>
    }
  </>

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
              <input type="text" placeholder='search' className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800' />
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
          <div className='group relative cursor-pointer'>
            <div className="w-10">
              <img src={user?.photoURL || "/public/vite.svg"} className="rounded-full" />
            </div>
            <div className='absolute z-[9999] hidden group-hover:block rounded-md bg-white text-black shadow-md'>
              <ul>
                {ProfileDrop}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* lower navbar */}
      <div className='flex justify-center'>
        <ul className='sm:flex hidden item-center gap-4'>
          {
            menu.map((data) => (
              <li key={data.id}>
                <a href={data.link}
                  className="inline-block px-4 hover:text-primary duration-300"
                >{data.name}</a>
              </li>
            ))
          }
          {/* simple dropdown links */}
          <li className='group relative cursor-pointer'>
            <a href="" className='flex item-center gap-[2px]'>
              Trending
              <span >
                <FaCaretDown className='transition-all duration-200 group-hover:rotate-180' />
              </span>
            </a>
            <div className='absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white text-black  shadow-md'>
              <ul>
                {
                  Dropdown.map((data) => (
                    <li key={data.id}>
                      <a href={data.link}
                        className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                      >{data.name}</a>
                    </li>
                  ))
                }
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;