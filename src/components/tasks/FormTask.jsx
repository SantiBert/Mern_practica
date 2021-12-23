import React, {useContext, useEffect, useState} from 'react';
import projectContext from '../../context/projects/projectContext';
import TaskContext from '../../context/tasks/taskContext';


const FormTask = () => {

    const projectsContext = useContext(projectContext);

    const { project } = projectsContext;

    const [task, setTask] = useState({
        name:''
    });

    const taskContexts = useContext(TaskContext);

    const { errortask, createTask, validateTask, getTask, 
        selectedTask , updateTask, clearnerTaskSelected} = taskContexts;
    

    const { name } = task;

    useEffect(() =>{
        if(selectedTask !== null){
            setTask(selectedTask);
        }else{
            setTask({
                name:''
            })
        }
    }, [selectedTask])

    if(!project) return null;

    const [ actualProject ] = project;

    const handleChange = e =>{
        setTask({
            ...task,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e =>{
        e.preventDefault();

        if(name.trim() === ''){
            validateTask();
            return;
        }

        if(selectedTask === null){
            task.proyectID = actualProject.id;
            task.status = false;
            createTask(task);
        }else{
            updateTask(task);
            clearnerTaskSelected()
        }

        getTask(actualProject.id);

        setTask({
            name:''
        });
    }

    return (
        <div className="formulario">
            <form
                onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input type="text"
                        className="input-text"
                        placeholder="Nombre Tarea..."
                        name="name" 
                        value={name}
                        onChange={handleChange}/>
                </div>
                <div className="contenedor-input">
                    <input type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value={selectedTask ? 'Editar Tarea':'Agregar Tarea'}/>
                </div>
            </form>
            {errortask ? <p className='mensaje error'>El nombre de la tarea es obligatorio</p> : null}
        </div>
    );
}

export default FormTask;