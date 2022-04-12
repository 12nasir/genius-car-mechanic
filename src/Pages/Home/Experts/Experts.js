import React, { useEffect, useState } from 'react';
import Expert from '../Expert/Expert';

const Experts = () => {
    const [mechanics, setMechanics] = useState([]);
    useEffect( () =>{
        fetch('./mechanic.json')
        .then(res=> res.json())
        .then(data => setMechanics(data));
    },[])
    return (
        <div id='experts' className='container'>
            <h2 className='text-primary'>Our Experts</h2>
            <div className='row'>
                {
                    mechanics.map(mechanic =><Expert 
                        key ={mechanic.name}
                        mechanic ={mechanic}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;