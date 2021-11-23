import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


const Login = () => {

    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const { email, password } = user;

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
                    Iniciar Seseón
                </h1>
                <form>
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
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Iniciar sesion"
                        />
                    </div>
                </form>
                <br />
                <NavLink to="/sign-in" className="enlace-cuenta">Registrarse</NavLink>
            </div>
        </div>
    );
}

export default Login;