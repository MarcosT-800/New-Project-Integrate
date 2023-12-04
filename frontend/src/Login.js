import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './LoginValidation';
import axios from 'axios';
import NavbarLogin from '../src/components/navbarLogin/navbarLogin'

function Login() {
    const [values, setValues] = useState({
        email: '',
        senha: '',
    });
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        setValues((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const err = Validation(values);
        setErrors(err);

        if (err.email === '' && err.senha === '') {
            axios.post('http://localhost:8081/login', values).then((res) => {
                if (res.data === 'Success') {
                    navigate('/home');
                } else {
                    alert('Conta não existe');
                }
            }).catch((err) => console.log(err));
        }
    };

    return (
        <>
        <div
            className="flex justify-content-center align-items-center"
            style={{background: '#1D1D37', height: 'auto'}}
            >
            <NavbarLogin/>
            <div className="d-flex flex-row w-100 h-100 items-center">
                <img
                    src="/backgroundLogin.png"
                    alt="Imagem de login"
                    className="img-fluid w-50 ml-3 h-auto"
                    />
                <div className="d-flex flex-column w-50">
                    <div className="bg-white p-4 rounded w-75 mx-auto my-auto text-center text-base">
                    <h2 className="mb-3 text-indigo-900" style={{ color: "#1D1D47", fontFamily: "Righteous", letterSpacing: "1px", fontWeight: "lighter", fontSize: "55px"}}>Login</h2>
                        <form action="" onSubmit={handleSubmit} className=''>
                            <div className="mb-3">
                                <label htmlFor="email" className="d-flex justify-content-start">
                                    <strong>Email</strong>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Exemplo@gmail.com"
                                    name="email"
                                    onChange={handleInput}
                                    className="form-control rounded-1 border-1 border-gray-700 bg-white"
                                     style={{borderColor: '#1D1D47', border: '1px solid #1D1D47'}}
                                />
                                {errors.email && (
                                    <span className="text-danger"> {errors.email} </span>
                                )}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="senha" className='d-flex justify-content-start'>
                                    <strong>Senha</strong>
                                </label>
                                <input
                                    type="password"
                                    placeholder="123456789"
                                    name="senha"
                                    onChange={handleInput}
                                    className="form-control rounded-1 border-1 border-gray-700 bg-white"
                                    style={{borderColor: '#1D1D47', border: '1px solid #1D1D47'}}
                                    />
                                {errors.senha && (
                                    <span className="text-danger"> {errors.senha} </span>
                                    )}
                            </div>
                            <div className="d-flex justify-content-between">
        <button
          type="submit"
          className="btn btn-primary rounded-2 bg-gradient-to-dark mr-2"
          style={{background: "#1D1D47", width: '40%'}}

          >
          Entrar
        </button>
        <button
          type="reset"
          className="btn btn-secondary rounded-2 bg-gradient-to-dark"
          style={{background: "#1D1D47", width: '40%'}}
          >
          Limpar
        </button>
      </div>
    </form>
  </div>
</div>


            </div>
        </div>
            </>
    );
}

export default Login;