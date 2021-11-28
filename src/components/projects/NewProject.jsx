import React, { Fragment, useContext, useState } from 'react';
import projectContext from '../../context/projects/projectContext';


const NewProject = () => {

    const projectContextForm = useContext(projectContext);
    const { formulario, showForm } = projectContextForm;

    const [project, setProject] = useState({
        name: ''
    });

    const { name } = project;

    const onChangeProject = e => {
        setProject({
            ...project,
            [e.target.name]: e.target.value
        });
    };

    const onSubmitProyect = e => {
        e.preventDefault();
    }

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={() => showForm()}>
                Nuevo Proyecto
            </button>

            {
                formulario
                    ?
                    (
                        <form className="formulario-nuevo-proyecto"
                            onSubmit={onSubmitProyect}>
                            <input type="text"
                                className="input-text"
                                placeholder="Nombre Proyecto"
                                name="name"
                                value={name}
                                onChange={onChangeProject} />
                            <input
                                type="submit"
                                className="btn btn-primario btn-block"
                                value="Agregar proyecto"
                            />
                        </form>
                    )
                    :
                    null
            }
        </Fragment>
    );
}
export default NewProject;