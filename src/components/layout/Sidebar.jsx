import React from 'react';
import NewProject from '../projects/NewProject';
import ListProjects from '../projects/ListProjects';

const Sidebar = () => {
    return (
        <aside>
            <h1>
                MERN
                <span>
                    Task
                </span>
            </h1>
            <NewProject />
            <div className="proyecto">
                <h2>Tus Proyectos</h2>
                <ListProjects />
            </div>
        </aside>
    );
}
export default Sidebar;