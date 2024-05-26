import React from 'react';
import UserAuth from '../../hooks/UserAuth';

const GoogleLogIn = () => {
    const {googleLogin} = UserAuth();

    const handleGoogleSignIn = () =>{
        googleLogin()

    }
    return (
        <button onClick={handleGoogleSignIn} className='btn bg-red-400'>
            <div>
                <p>Google</p>
            </div>
        </button>
    );
};

export default GoogleLogIn;