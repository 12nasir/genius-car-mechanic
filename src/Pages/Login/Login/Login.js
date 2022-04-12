import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div>
            <h3>Please login</h3>
           <button onClick={signInUsingGoogle} className='btn btn-warning'>Please Login</button> 
        </div>
    );
};

export default Login;<button></button>