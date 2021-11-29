import React, { useContext, useEffect } from 'react';
import Project from './Project';
import projectContext from '../../context/projects/projectContext';

const ListProjects = () => {
    const projectContextForm = useContext(projectContext);
    const { projetcs } = projectContextForm;

    if(projetcs.length === 0 ) return null;
    
    return (
        <ul className="listado-proyecto">
            {projetcs.map((project) => (
                <Project
                    project={project}
                    key={project.id}
                />
            ))}
        </ul>
    );
}

export default ListProjects;