import React, { useEffect, useState } from 'react';
import Detail from '../detail/Detail';
import Service from '../service/Service';
import './Home.css';

const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect( () => {
        fetch('./info.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));
    },[])
    return (
        <div>
            <h1 className="text-success" >Welcome to Our School</h1>
            <div className="list">
            {
                courses.map(course => <Detail
                key = {course.id}
                course = {course}

            
                ></Detail> 
                 )

                 

                 
            }
            
            
            </div>

        </div>
    );
};

export default Home;