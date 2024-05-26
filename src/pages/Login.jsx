import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import GoogleLogIn from '../components/Login_Register/GoogleLogIn';
import UserAuth from '../hooks/UserAuth';

const login = () => {
  const { signIn, user } = UserAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const from = location?.state?.from?.pathname || "/"

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const username = form.username.value;
    const password = form.password.value;
    console.log(email, username, password)
    await signIn(email, password)
  }

  useEffect(() => {
    if (user) {
      navigate(from, {replace:true})
    }
  },[user,from,navigate])
  return (
    <form onSubmit={handleSubmit} className='flex justify-center p-32'>
      <div className='card w-96 bg-base-100 shadow-xl p-5 gap-3'>
        <h1 className='font-bold text-4xl text-center m-5 text-red-300'>Please Login</h1>
        <label className="input input-bordered flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
          <input type="text" className="grow" placeholder="Email" name='email' required />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
          <input type="text" className="grow" placeholder="Username" name='username' />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
          <input type="password" name='password' required />
        </label>
        <button className='btn mt-5 bg-green-500'>Login</button>
        <GoogleLogIn />

      </div>
    </form>
  );
};

export default login;