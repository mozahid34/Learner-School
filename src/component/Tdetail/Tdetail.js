import React from 'react';

const Tdetail = (props) => {
    const {pic, teacher, coursename, duration,price,description,img}  = props.course;
    return (
        <div>
            <img src={pic} alt="" />
            <h3>{teacher} </h3>
            <h5 className="h5"> instruct: {coursename}</h5>
        </div>
    );
};

export default Tdetail;