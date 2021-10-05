import { Button } from 'bootstrap';
import React from 'react';
import './Sdetail.css'



const Sdetail = (props) => {
    const {name, teacher, coursename, duration,price,description,img}  = props.course;
    return (
        <div>
            <img src= {img} alt="img" sizes="20px" srcset="" />
            <h3>{coursename}</h3>
            <h3 className="h5">Instrctor: {teacher}</h3>
            <h3 className="h5">Course Duration: {duration} hour </h3>
            <h3 className="h5">Price: ${price} </h3>
            <p> {description} </p>

            

        </div>
    );
};

export default Sdetail;