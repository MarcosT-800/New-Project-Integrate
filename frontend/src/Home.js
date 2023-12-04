import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";
import NavbarLogin from '../src/components/navbarLogin/navbarLogin'

function Home() {

    const [artigo, setArtigo] = useState([])

    useEffect(() => {
        const fetchAllArtigo = async () => {
            try {
                const res = await axios.get("http://localhost:8081/artigo")
                setArtigo(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchAllArtigo()
    }, [])

    return (

        <div
            className="flex flex-column justify-content-center items-center"
            style={{ display: 'flex', background: '#1D1D37', height: '100vh', justifyContent: 'center' }}
        >

            <NavbarLogin />
            <div className="bg-white p-4 rounded w-75 mx-auto my-auto text-center text-base">

                <div className='form'>
                    <div>
                        <h1 className="mb-6 text-indigo-900" style={{ color: "#1D1D47", letterSpacing: "1px", fontSize: "45px", marginBottom: '60px' }}> Artigos </h1>
                        <div className="artigo" key={artigo.id}>
                            
                                <div className="artigo">
                                    <h2>nome do autor : Pedro</h2>
                                    <p>nome do orientador : Joao</p>
                                    <p>Resumo : Exemplo</p>
                                </div>

                            
                        </div>
                        <Link to="/addartigo" className="btn btn-primary rounded-2 bg-gradient-to-dark mr-2"
                        style={{background: "#1D1D47", width: '45%'}}>
                        Criar Artigo</Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home

