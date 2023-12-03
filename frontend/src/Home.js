import React, { useEffect, useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import axios from "axios";
function Home(){

    const [artigo, setArtigo] = useState([])

    useEffect(()=>{
        const fetchAllArtigo = async ()=>{
            try{
                const res = await axios.get("http://localhost:8081/artigo")
                setArtigo(res.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchAllArtigo()
    },[])

    return(
        
        <div>
            <h1> Artigos </h1>
            <div className="artigo" key={artigo.id}>
                {artigo.map((artigo) => (
                <div className="artigo">
                <h2>{artigo.autor}</h2>
                <p>{artigo.orientador}</p>
                <p>{artigo.resumo}</p>
                </div>
                
                ))}
            </div>
            <Link to="/addartigo" className='btn btn-default border w-100 bg-light rounded-0'>Criar Artigo</Link>

        </div>
    )
}

export default Home

