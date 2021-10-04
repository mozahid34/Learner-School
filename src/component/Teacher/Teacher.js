import React, { useEffect, useState } from 'react';
import Tdetail from '../Tdetail/Tdetail';
import './Teacher.css';

const Teacher = () => {
    const [courses, setCourses] = useState([]);
    useEffect( () => {
        fetch('./info.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));
    },[])
    return (
        <div>
            <h1>Our Instructors:</h1>
            <div className="list">
                {
                    courses.map(course => <Tdetail
                    key = {course.id}
                    course = {course}
                    ></Tdetail>)
                }
            </div>
        </div>
    );
};

export default Teacher;