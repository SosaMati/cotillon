import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import { About } from "../about/About";
import { Contacto } from "../contacto/Contacto";
import { Footer } from "../footer/Footer";
import { Inicio } from "../inicio/Inicio";
import { Productos } from "../productos/Productos";
import { SvgFondo } from "../svgFondo/SvgFondo";
import { NavBar } from "../ui/NavBar";

import '../../style/style.css'

export const AppRouter = () => {

    
    return (
        <BrowserRouter>

            <SvgFondo />
        
            <div className=" animate__animated animate__fadeIn" 
                 style={{ position: 'absolute', top: '0', width: '100%' }}
            >
                <NavBar/>
                
                <Routes>
                    <Route path="/" element={<Inicio/>} />
                    <Route path="/productos" element={<Productos/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/contacto" element={<Contacto/>} />

                    <Route path="*" element={
                        <Navigate replace to='/' />
                    } />
                </Routes>

                <Footer/>
            </div>

        </BrowserRouter>
    )
}
