import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';


const Expert = ({mechanic}) => {
    const {name, img, expertize} = mechanic;
    return (
            <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
                    <img height={250} width={350} src={img} alt="" />
                    <p className='text-primary'>Name: {name}</p>
                    <p className='text-danger'>{expertize}</p>
                </div>
    );
};

export default Expert;