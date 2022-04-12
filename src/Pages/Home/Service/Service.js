import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';


const Service = ({service}) => {
    const {id, name, description, img, price} = service;
    return (
        <div className='service pb-3'>
            <img height={250} width={350}  src={img} alt="" />
            <h3>Name: {name}</h3>
            <h4>Price: {price}</h4>
            <p className='px-5'><small>{description}</small></p>
            <Link to={`/booking/${id}`}><button className='btn btn-warning'>Booking {name}</button></Link>
        </div>
    );
};

export default Service;