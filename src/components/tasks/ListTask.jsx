import React, { Fragment, useContext } from 'react';
import Task from './Task';
import projectContext from '../../context/projects/projectContext';
import TaskContext from '../../context/tasks/taskContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ListTask = () => {

    const projectsContext = useContext(projectContext);
    
    const { project, deleteProject } = projectsContext;

    const taskContexts = useContext(TaskContext);

    const {tasksprojects} = taskContexts;

    if(!project) return <h2>Selecciona un proyecto</h2>

    const [ actualProject ] = project;

    
    return (
        <Fragment>
            <h2>
                Proyecto: { actualProject.name }
            </h2>
            <ul className="listado-tareas">
                {tasksprojects.length === 0
                    ? (<li className="tareas"><p>No hay tareas</p></li>)
                    :
                    <TransitionGroup>
                        {tasksprojects.map(task => (
                            <CSSTransition
                            key={task.id}
                            timeout={200}
                            className="tarea"
                            >
                                 <Task 
                                    task={task} 
                                     />
                            </CSSTransition>
                    ))}
                    </TransitionGroup> 
                    }
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