import React, {useContext} from 'react';
import projectContext from '../../context/projects/projectContext';

const Project = ({ project }) => {

    const projectContextForm = useContext(projectContext);
    const { actualProject } = projectContextForm;

    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={() =>actualProject(project.id)}>
                {project.name}
            </button>
        </li>
    );
}

export default Project;