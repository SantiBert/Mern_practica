import React from 'react';
import Project from './Project';

const ListProjects = () => {

    const projetcs = [
        { name: 'Tienda virtual' },
        { name: 'Devops' },
        { name: 'Diseño de sitio web' },
    ]

    return (
        <ul className="listado-proyecto">
            {projetcs.map(project => (
                <Project project={project} />
            ))}
        </ul>
    );
}

export default ListProjects;