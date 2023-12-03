import React from 'react';
import Login from './Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './Signup'
import Home from './Home';
import Opcoes from './Opcoes';
import AddArtigo from './AddArtigo';


function App() {
  return (
    
      <BrowserRouter>
      <Routes>
         <Route path ='/' element={<Login />}></Route>
         <Route path ='/signup' element={<Signup />}></Route>
         <Route path ='/home' element={<Home />}></Route>
         <Route path ='/opcoes' element={<Opcoes />}></Route>
         <Route path ='/addartigo' element={<AddArtigo />}></Route>
         
      </Routes>
      </BrowserRouter>
  
  )
}

export default App;
