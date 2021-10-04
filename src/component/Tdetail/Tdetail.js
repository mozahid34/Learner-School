import React from 'react';

const Tdetail = (props) => {
    const {name, teacher, coursename, duration,price,description,img}  = props.course;
    return (
        <div>
            <h3>{teacher} </h3>
            <h5> instruct: {coursename}</h5>
        </div>
    );
};

export default Tdetail;