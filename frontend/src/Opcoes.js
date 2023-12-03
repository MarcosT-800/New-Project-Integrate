import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'


function Opcoes() {
    
    return (
        
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Opcoes</h2>
                <form action="">
                    <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0'>Professor</Link>

                    <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0'>Professor</Link>
                    
                    <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0'>Professor</Link>
                </form>
            </div>  
        </div>
        
    )
}

export default Opcoes