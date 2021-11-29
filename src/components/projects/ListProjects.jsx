import React, { useContext, useEffect } from 'react';
import Project from './Project';
import projectContext from '../../context/projects/projectContext';

const ListProjects = () => {
    const projetcs = [
        { name: 'Tienda virtual' },
        { name: 'Devops' },
        { name: 'Diseño de sitio web' },
    ]
    
    return (
        <ul className="listado-proyecto">
            {projetcs.map(project => (
                <Project
                    project={project}
                />
            ))}
        </ul>
    );
}

export default ListProjects;