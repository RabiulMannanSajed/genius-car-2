import React from 'react';
import './Service.css'
import { useNavigate } from 'react-router';
const Service = ({ service }) => {
    const { name, img, description, price, id } = service;
    const navigate = useNavigate();
    const navigateToServiceDetails = (id) => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='service'>
            <img className='service-img w-100' src={img} alt="" />
            <h2>Service Name : {name}</h2>
            <p><small>Price: {price} $</small></p>
            <p>{description}</p>
            <button onClick={() => navigateToServiceDetails(id)}>Book {name}</button>
        </div>
    );
};

export default Service;