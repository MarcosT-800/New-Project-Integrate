import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Validation from './EventosValidation'
import NavbarLogin from '../src/components/navbarLogin/navbarLogin'

function AddEventos() {
    const [values, setValues] = useState({
        nome: '',
        data: '',
        horas: '',
        resumo: '',
        organizador: ''
    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        //setErrors(Validation(values));
        const err = Validation(values);
        setErrors(err);
        if (err.email === "" && err.senha === "" && err.las === "") {
            axios.post('http://localhost:8081/adeventos', values)
                .then(res => {
                    navigate('/');
                }
                )
                .catch(err => console.log(err));
        }
    }
    return (
        <>
            <NavbarLogin />

            <div className="flex flex-column justify-content-center items-center vh-100"

                style={{ display: 'flex', background: '#1D1D37', height: '150vh', justifyContent: 'center', marginTop: '20px' }}
            >

                <div className="bg-white p-4 rounded w-75 mx-auto my-auto text-center text-base mt-6">
                    <h2 className="mb-3 text-indigo-900" style={{ color: "#1D1D47", fontFamily: "Righteous", letterSpacing: "1px", fontWeight: "lighter", fontSize: "55px"}}>Criar Evento</h2>
                    <form action="" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="nome" className="d-flex justify-content-start pr-2"><strong>Nome</strong></label>
                            <input type="text" placeholder='nome do evento' name='nome'
                                onChange={handleInput} className="form-control rounded-1 border-1 border-gray-700 bg-white"
                                style={{ borderColor: '#1D1D47', border: '1px solid #1D1D47' }}
                                />
                            {errors.nome && <span className='text-danger'> {errors.nome} </span>}
                        </div>
                        <div className="mb-3 d-flex justify-content-start align-items-center">
                            <label htmlFor="data" className="d-flex justify-content-start" style={{ paddingRight: '30px' }}>
                                <strong>Data</strong>
                            </label>
                            <input
                                type="date"
                                placeholder="22/11"
                                name="data"
                                onChange={handleInput}
                                className="form-control rounded-1 border-1 border-gray-700 bg-white"
                                style={{ borderColor: '#1D1D47', border: '1px solid #1D1D47' }}
                                
                            />
                            {errors.data && <span className="text-danger"> {errors.data} </span>}

                            <label htmlFor="horas" className="d-flex justify-content-start pl-6" style={{ paddingLeft: '60px', paddingRight: '30px' }}>
                                <strong>Horas</strong>
                            </label>
                            <input
                                type="text"
                                placeholder="00:00"
                                name="las"
                                onChange={handleInput}
                                className="form-control rounded-1 border-1 border-gray-700 bg-white"
                                style={{ borderColor: '#1D1D47', border: '1px solid #1D1D47' }}
                                
                            />
                            {errors.horas && <span className="text-danger"> {errors.horas} </span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="las" className="d-flex justify-content-start pr-2"><strong>Horas</strong></label>
                            <input type="text" placeholder="00:00" name='las'
                                onChange={handleInput} className="form-control rounded-1 border-1 border-gray-700 bg-white"
                                style={{ borderColor: '#1D1D47', border: '1px solid #1D1D47' }}
                                />
                            {errors.horas && <span className='text-danger'> {errors.horas} </span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="resumo" className="d-flex justify-content-start pr-2"><strong>Resumo</strong></label>
                            <input type="text" placeholder="Escreva aqui sobre o evento" name='resumo'
                                onChange={handleInput} className="form-control rounded-1 border-1 border-gray-700 bg-white"
                                style={{ borderColor: '#1D1D47', border: '1px solid #1D1D47' }}
                                />
                            {errors.resumo && <span className='text-danger'> {errors.resumo} </span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="organizador" className="d-flex justify-content-start pr-2"><strong>Organizador</strong></label>
                            <input type="text" placeholder="Organizador" name='organizador'
                                onChange={handleInput} className="form-control rounded-1 border-1 border-gray-700 bg-white"
                                style={{ borderColor: '#1D1D47', border: '1px solid #1D1D47' }}
                                />
                            {errors.organizador && <span className='text-danger'> {errors.organizador} </span>}
                        </div>
{/*                             <p>Você concorda com nossa condições</p>
 */}                        <div className="d-flex justify-content-between w-80">
                        <button type="submit" onSubmit={handleSubmit}
                            className="btn btn-primary rounded-2 bg-gradient-to-dark mr-2"
                            style={{background: "#1D1D47", width: '45%'}}> <Link to="/" style={{background: "#1D1D47", width: '45%'}}>Avançar </Link></button>
                        <Link to="/" className="btn btn-primary rounded-2 bg-gradient-to-dark mr-2"
          style={{background: "#1D1D47", width: '45%'}}>Cancelar</Link>
                    </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default AddEventos