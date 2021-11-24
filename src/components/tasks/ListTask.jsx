import React, { Fragment } from 'react';
import Task from './Task';

const ListTask = () => {

    const taskPoryect = [
        { name: 'ELegir plataforma', status: true },
        { name: 'Elegir colores', status: false },
        { name: 'Elegir plataforma de pago', status: true },
        { name: 'Elegir hosting', status: false },
    ];

    return (
        <Fragment>
            <h2>
                Proyecto: tienda virtual
            </h2>
            <ul className="listado-tareas">
                {taskPoryect.length === 0
                    ? (<li className="tareas"><p>No hay tareas</p></li>)
                    : taskPoryect.map(task => (
                        <Task task={task} />
                    ))}
                <button type="button" className="btn btn-eliminar">
                    Eliminar proyectos &times;
                </button>
            </ul>
        </Fragment>
    );
}

export default ListTask;