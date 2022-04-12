import React, {useEffect, useState} from 'react';
import Service from '../Service/Service';
import './Services.css';

// https://ibb.co/k09Thv7
// https://ibb.co/8DMnnHh
// https://ibb.co/T17jFKm
// https://ibb.co/jkJdND4
// https://ibb.co/0h50yVW
// https://ibb.co/4pwxSr4



const Services = () => {
    const [services, setServices] = useState([]);
    useEffect( () =>{
        fetch('service.json')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])
    return (
        <div id='services' className='services-container'>
            {
                services.map(service =><Service
                key={service.id}
                service={service}
                ></Service>)
            }
        </div>
    );
};

export default Services;