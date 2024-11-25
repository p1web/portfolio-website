import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Projects = () => {
    const [projects, setProjects] = useState([]);
   
    useEffect(() => {
        axios.get('http://localhost:5000/projects')
            .then((response) => {
                setProjects(response.data);
            })
            .catch((error) => {
                console.error('Error fetching projects:', error);
            });
    }, []);

    return (
        <div className="container">
            <h1 className="text-primary mt-5">Project List </h1> 
            <ul className="list-group list-group-flush">
                { projects.length > 0 ? (
                    projects.map((item, index) => (
                        <li className="list-group-item" key={ index }>{ item.title } <p>{ item.description }</p></li>
                    ))
                ) : (
                    <p>No projects found.</p>
                ) }
            </ul>
        </div>
    );
};

export default Projects;
