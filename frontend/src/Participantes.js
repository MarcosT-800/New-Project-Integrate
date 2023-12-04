import React, { useEffect, useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import axios from "axios";
function Participantes(){

    const [participante, setParticipante] = useState([])

    useEffect(()=>{
        const fetchAllArtigo = async ()=>{
            try{
                const res = await axios.get("http://localhost:8081/participantes")
                setParticipante(res.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchAllArtigo()
    },[])

    return(
        
        <div>
            <h1> Participantes </h1>
            <div className="participante" key={participante.id}>
                {participante.map((participante) => (
                <div className="participante">
                <label> {participante.email} &nbsp; &nbsp; &nbsp;</label>
                
                <input type="checkbox" name="optradio" value="0"/>
                
                </div>
                
                ))}
            </div>
            <Link to="/addeventos" className='btn btn-default border w-100 bg-light rounded-0'>voltar</Link>

        </div>
    )
}

export default Participantes

