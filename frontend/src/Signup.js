import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Validation from './SignupValidation'
import axios from 'axios'

function Signup() {
    const [values, setValues] = useState({
        email: '',
        senha: '',
        las: ''
    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        //setErrors(Validation(values));
        const err = Validation(values);
        setErrors(err);
        if(err.email === "" && err.senha === "" && err.las === ""){
            axios.post('http://localhost:8081/signup', values)
            .then(res => {
                navigate('/');
            }
            )
            .catch(err => console.log(err));
        }
    }
    return (
        
        <div className='d-flex justify-content-center align-items-center vh-100'
        style={{background: '#1D1D37'}}
        >
        <div className="d-flex flex-row w-100 h-100 items-center">
        <img
                    src="/backgroundLogin.png"
                    alt="Imagem de login"
                    className="img-fluid w-50 ml-3 h-auto"
                />
                                <div className="d-flex flex-column w-50">

                    <div className="bg-white p-4 rounded w-75 mx-auto my-auto text-center text-base">
                <h2 className="mb-3 text-indigo-900" style={{ color: "#1D1D47", fontFamily: "Roboto", letterSpacing: "1px", fontWeight: "lighter", fontSize: "65px"}}>Cadastro</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="d-flex justify-content-start"><strong>Email</strong></label>
                        <input type="email" placeholder='Exemplo@gmail.com' name='email' 
                        onChange={handleInput} className='form-control rounded-2'
                        style={{borderColor: '#1D1D47', border: '1px solid #1D1D47'}}
                        />
                        {errors.email && <span className='text-danger'> {errors.email} </span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="senha" className="d-flex justify-content-start"><strong>Senha</strong></label>
                        <input type="password" placeholder="123456789" name="senha"
                        onChange={handleInput} className='form-control rounded-2'
                        style={{borderColor: '#1D1D47', border: '1px solid #1D1D47'}}
                        />
                        {errors.senha && <span className='text-danger'> {errors.senha} </span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="las" className="d-flex justify-content-start"><strong>LAS</strong></label>
                        <input type="las" placeholder="000" name='las'
                        onChange={handleInput} 
                        className='form-control rounded-2'
                        style={{borderColor: '#1D1D47', border: '1px solid #1D1D47'}}

                        />
                        {errors.las && <span className='text-danger'> {errors.las} </span>}
                    </div>

                    <div className="d-flex justify-content-between">

                    <button type="submit" onSubmit={handleSubmit}
                    className='btn btn-success'
                    style={{background: "#1D1D47", width: '40%'}}
                    > Cadastrar </button>
                    <Link to="/" className='btn btn-success border rounded-2'
                              style={{background: "#1D1D47", width: '40%'}}

                    >Logar</Link>
                    </div>
                </form>
            </div>  
            </div>
            </div>
        </div>
        
    )
}

export default Signup 