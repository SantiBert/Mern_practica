import React, {useContext} from 'react';
import projectContext from '../../context/projects/projectContext';

import TaskContext from '../../context/tasks/taskContext';

const Project = ({ project }) => {

    const projectContextForm = useContext(projectContext);
    const { actualProject } = projectContextForm;

    const taskContexts = useContext(TaskContext);

    const {getTask} = taskContexts;

    const selectActualProject = id =>{
        actualProject(id);
        getTask(id);
    }

    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={() =>selectActualProject(project.id)}>
                {project.name}
            </button>
        </li>
    );
}

export default Project;