import React, { useContext, useEffect } from 'react';
import Project from './Project';
import projectContext from '../../context/projects/projectContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ListProjects = () => {
    const projectContextForm = useContext(projectContext);
    const { projetcs, getProjects } = projectContextForm;

    useEffect(() => {
        getProjects();
    }, []);

    if(projetcs.length === 0 ) return <p>No hay proyectos, comienza creando uno</p>;
    
    return (
        <ul className="listado-proyecto">
            <TransitionGroup>
            {projetcs.map(project => (
                <CSSTransition
                key={project.id}
                timeout={200}
                className="proyecto">
                    <Project
                    project={project}
                />
                </CSSTransition>
            ))}
            </TransitionGroup>
        </ul>
    );
}

export default ListProjects;