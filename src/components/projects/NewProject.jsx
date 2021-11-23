import React, { Fragment, useState } from 'react';


const NewProject = () => {

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
                className="btn btn-block btn-primario">
                Nuevo Proyecto
            </button>
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
        </Fragment>
    );
}
export default NewProject;