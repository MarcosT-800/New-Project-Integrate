import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import NavbarLogin from '../src/components/navbarLogin/navbarLogin'



function Opcoes() {
    
    return (
        
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
                <h2 className="mb-3 text-indigo-900" style={{ color: "#1D1D47", fontFamily: "Roboto", letterSpacing: "1px", fontWeight: "lighter", fontSize: "55px"}}>Entrar Como</h2>
                <form action="" 
                className="justify-content-center"
                style={{display: 'flex', justifyItems: 'center', justifyContent: 'center'}}
                
                >
                <div className="d-flex flex-column justify-content-center items-center mt-2 w-100"
                style={{alignItems: 'center'}}
                >

                    <Link to="/signup" 
className="btn btn-secondary rounded-2 bg-gradient-to-dark"
style={{background: "#1D1D47", width: '70%', fontFamily: 'roboto', fontSize: '27px', letterSpacing: '2px', marginBottom: '15px'}}>Professor</Link>

                    <Link to="/signup" 
className="btn btn-secondary rounded-2 bg-gradient-to-dark"
style={{background: "#1D1D47", width: '70%', fontFamily: 'roboto', fontSize: '27px', letterSpacing: '2px', marginBottom: '15px' }}
                    >Autor</Link>
                    
                    <Link to="/signup" 
className="btn btn-secondary rounded-2 bg-gradient-to-dark"
style={{background: "#1D1D47", width: '70%', fontFamily: 'roboto', fontSize: '27px', letterSpacing: '2px', marginBottom: '15px'}}>Avalidor</Link>
</div>
                </form>
            </div>  
        </div>
        </div>
        </div>
        
    )
}

export default Opcoes