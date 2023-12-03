import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

function AddArtigo() {
    const [artigo, setArtigo] = useState({
        autor: '',
        orientador: '',
        resumo: ''
    })
    const navigate = useNavigate();
    
    const handleChange = (e) => {
        setArtigo((prev) => ({...prev, [e.target.name]: [e.target.value]}))
    }

    const handleClick = async e => {
        e.preventDefault();
        try{
        await axios.post('http://localhost:8081/adartigo', artigo)
        navigate("/home")
        }catch(err){
            console.log(err)
        }
            
           
    }
    return (
        
        <div className='form'>
            <div>
                <h2>Adicionar artigo</h2>
                
                    <div>
                        <label htmlFor="text"><strong>Autor</strong></label>
                        <input type="text" placeholder='Felipe' name='autor'
                         onChange={handleChange} />
                        
                    </div>
                    <div className="mb-3">
                        <label htmlFor="text"><strong>Orientador</strong></label>
                        <input type="text" placeholder="João Pedro" name='orientador'
                        onChange={handleChange} className='form-control rounded-0'/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="text"><strong>Resumo</strong></label>
                        <input type="text" placeholder="resumo" name='resumo'
                        onChange={handleChange} 
                        className='form-control rounded-0'/>
                    </div>
                    <button onClick={handleClick} className='btn btn-default border w-100 bg-light rounded-0'> Criar </button>
                    
                    <Link to="/home" className='btn btn-default border w-100 bg-light rounded-0'>Cancelar</Link>
                
            </div>  
        </div>
        
    )
}

export default AddArtigo