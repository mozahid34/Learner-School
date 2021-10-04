import React, { useEffect, useState } from 'react';
import Sdetail from '../sdetail/Sdetail';
import './Service.css';

const Service = () => {
    const [courses, setCourses] = useState([])
    useEffect( () => {
        fetch('./info.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));
    },[])
    return (
        <div>
            <h1>Our Courses</h1>
            <div className="list">
            {
                courses.map(course => <Sdetail
                key = {course.id}
                course = {course}
                >

                </Sdetail>)
            }
            
        </div>
        </div>
    );
};

export default Service;