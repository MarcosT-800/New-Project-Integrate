import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Validation from './LoginValidation'
import axios from 'axios'

function Login() {
    const [values, setValues] = useState({
        email: '',
        senha: ''
    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const err = Validation(values);
        setErrors(err);
        if(err.email === "" && err.senha === ""){
            axios.post('http://localhost:8081/login', values)
            .then(res => {
                if(res.data === "Success"){
                navigate('/home');
                }else{
                    alert("Conta não existe")
                }
            })
            .catch(err => console.log(err));
        }
    }
    return (
        
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Login</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder='Exemplo@gmail.com' name='email'
                         onChange={handleInput} className='form-control rounded-0'/>
                        {errors.email && <span className='text-danger'> {errors.email} </span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="senha"><strong>Senha</strong></label>
                        <input type="password" placeholder="123456789" name='senha'
                        onChange={handleInput} className='form-control rounded-0'/>
                        {errors.senha && <span className='text-danger'> {errors.senha} </span>}
                    </div>
                    <button type='submit' className='btn btn-success w-100'> Logar </button>
                    <p>Você concorda com nossa condições</p>
                    <Link to="/opcoes" className='btn btn-default border w-100 bg-light rounded-0'>Criar Conta</Link>
                </form>
            </div>  
        </div>
        
    )
}

export default Login 