import React, { useContext } from 'react';
import TaskContext from '../../context/tasks/taskContext';
import projectContext from '../../context/projects/projectContext';

const Task = ({ task }) => {

    const taskContexts = useContext(TaskContext);
    const { deleteTask, getTask, changeStateTask, setActualTask } = taskContexts;

    const projectContextForm = useContext(projectContext);
    const { project } = projectContextForm;

    const [ actualProject ] =  project;

    const destroyTask = id =>{
        deleteTask(id);
        getTask(actualProject.id);
    }

    const changeStatus = task =>{
        if(task.status){
            task.status = false;
        } else {
            task.status = true;
        }
        changeStateTask(task);
    }

    const selectTask = task =>{
        setActualTask(task);
    }

    return (
        <li className="tarea sombra">
            <p>{task.name}</p>
            <div className="estado">
                {task.status
                    ?
                    (
                        <button
                            type='button'
                            className="completo"
                            onClick={() => changeStatus(task)}>
                            Completo
                        </button>
                    )
                    :
                    (
                        <button
                            type='button'
                            className="incompleto"
                            onClick={()=>changeStatus(task)}>
                            Incompleto
                        </button>
                    )
                }
            </div>
            <div className="acciones">
                <button
                    type="button"
                    className="btn bnt-primario"
                    onClick={()=> selectTask(task)}>
                    Editar
                </button>
                <button
                    type="button"
                    className="btn bnt-secundario"
                    onClick={() =>destroyTask(task.id)}>
                    Eliminar
                </button>
            </div>
        </li>
    );
}

export default Task;