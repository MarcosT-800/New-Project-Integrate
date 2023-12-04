import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import NavbarLogin from '../src/components/navbarLogin/navbarLogin'


function AddArtigo() {
    const [artigo, setArtigo] = useState({
        autor: '',
        orientador: '',
        resumo: ''
    })
    const navigate = useNavigate();

    const handleChange = (e) => {
        setArtigo((prev) => ({ ...prev, [e.target.name]: [e.target.value] }))
    }

    const handleClick = async e => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8081/adartigo', artigo)
            navigate("/home")
        } catch (err) {
            console.log(err)
        }


    }
    return (

        <div
            className="flex flex-column justify-content-center items-center"
            style={{ display: 'flex', background: '#1D1D37', height: '100vh', justifyContent: 'center' }}
        >
            <NavbarLogin />
            <div className="bg-white p-4 rounded w-75 mx-auto my-auto text-center text-base">

                <div className='form'>
                    <div>
                        <h2 className="mb-3 text-indigo-900" style={{ color: "#1D1D47", fontFamily: "Righteous", letterSpacing: "1px", fontWeight: "lighter", fontSize: "55px"}}>Adicionar artigo</h2>

                        <div className="mb-3 mt-6">
                            <label htmlFor="text" className="d-flex justify-content-start pr-2"><strong>Autor</strong></label>
                            <input type="text" placeholder='Felipe' name='autor'
                                onChange={handleChange}
                                className="form-control rounded-1 border-1 border-gray-700 bg-white"
                                style={{ borderColor: '#1D1D47', border: '1px solid #1D1D47' }}
                            />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="text" className='d-flex justify-content-start'><strong>Orientador</strong></label>
                            <input type="text" placeholder="João Pedro" name='orientador'
                                onChange={handleChange}
                                className="form-control rounded-1 border-1 border-gray-700 bg-white"
                                style={{ borderColor: '#1D1D47', border: '1px solid #1D1D47' }}
                            />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="text" className='d-flex justify-content-start'><strong>Resumo</strong></label>
                            <input type="text" placeholder="resumo" name='resumo'
                                onChange={handleChange}
                                className="form-control rounded-1 border-1 border-gray-700 bg-white"
                                style={{ borderColor: '#1D1D47', border: '1px solid #1D1D47' }}
                            />
                        </div>
                        <div className="d-flex justify-content-between">

                        <button onClick={handleClick} className="btn btn-primary rounded-2 bg-gradient-to-dark mr-2"
          style={{background: "#1D1D47", width: '45%'}}> Criar </button>

                        <Link to="/home" className="btn btn-primary rounded-2 bg-gradient-to-dark mr-2"
          style={{background: "#1D1D47", width: '45%'}}>Cancelar</Link>
</div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AddArtigo