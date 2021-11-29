import React, { useContext, useEffect } from 'react';
import Project from './Project';
import projectContext from '../../context/projects/projectContext';

const ListProjects = () => {
    const projectContextForm = useContext(projectContext);
    const { projetcs, getProjects } = projectContextForm;

    useEffect(() => {
        getProjects();
    }, []);

    if(projetcs.length === 0 ) return <p>No hay proyectos, comienza creando uno</p>;
    
    return (
        <ul className="listado-proyecto">
            {projetcs.map(project => (
                <Project
                    key={project.id}
                    project={project}
                />
            ))}
        </ul>
    );
}

export default ListProjects;