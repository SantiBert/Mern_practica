import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const SignIn = () => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirm: '',

    });

    const { email, password, name, confirm } = user;

    const onChange = e => {
        setUser({
            ...user,
            [e.tatget.name]: e.target.value
        })
    };

    const onSubmit = e => {
        e.preventDefault();
    };

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>
                    Crear cuenta
                </h1>
                <form>
                    <div className="campo-form">
                        <label htmlFor="name">
                            Nombre
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            placeholder="Tu Nombre"
                            onChange={onChange} />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">
                            E-mail
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            placeholder="Tu Email"
                            onChange={onChange} />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu Contraseña"
                            value={password}
                            onChange={onChange} />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="confirm">
                            Confirmar Password
                        </label>
                        <input
                            type="password"
                            id="confirm"
                            name="confirm"
                            placeholder="Confirmar Contraseña"
                            value={confirm}
                            onChange={onChange} />
                    </div>
                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Crear cuenta"
                        />
                    </div>
                </form>
                <br />
                <NavLink to="/" className="enlace-cuenta">Iniciar sesión</NavLink>
            </div>
        </div>
    );
}

export default SignIn;