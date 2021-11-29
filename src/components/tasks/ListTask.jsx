import React, { Fragment, useContext } from 'react';
import Task from './Task';
import projectContext from '../../context/projects/projectContext';

const ListTask = () => {

    const taskPoryect = [
        { name: 'ELegir plataforma', status: true },
        { name: 'Elegir colores', status: false },
        { name: 'Elegir plataforma de pago', status: true },
        { name: 'Elegir hosting', status: false },
    ];

    const projectsContext = useContext(projectContext);
    
    const { project, deleteProject } = projectsContext;

    if(!project) return <h2>Selecciona un proyecto</h2>

    const [ actualProject ] = project;
    
    return (
        <Fragment>
            <h2>
                Proyecto: { actualProject.name }
            </h2>
            <ul className="listado-tareas">
                {taskPoryect.length === 0
                    ? (<li className="tareas"><p>No hay tareas</p></li>)
                    : taskPoryect.map(task => (
                        <Task task={task} />
                    ))}
            </ul>
            <button 
                type="button" 
                className="btn btn-primario"
                onClick={() =>deleteProject(actualProject.id)}>
                    Eliminar proyectos &times;
                </button>
        </Fragment>
    );
}

export default ListTask;