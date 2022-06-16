import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";


import { About } from "../about/About";
import { Contacto } from "../contacto/Contacto";
import { Footer } from "../footer/Footer";
import { Inicio } from "../inicio/Inicio";
import { Productos } from "../productos/Productos";
import { SvgFondo } from "../svgFondo/SvgFondo";
import { NavBar } from "../ui/NavBar";

import { Reposteria } from "../reposteria/Reposteria";
import { Bazar } from "../bazar/Bazar";
import { Manualidades } from "../manualidades/Manualidades";
import { Luminosa } from "../luminosa/Luminosa";
import { Deco } from "../decoracion/Deco";
import { Golosinas } from "../golosinas/Golosinas";
import { Infantiles } from "../infantiles/Infantiles";
import { Disfraces } from "../disfraces/Disfraces";
import { Fechas } from "../fechas/Fechas";

import whatsapp from "../../assets/whatsapp.svg";



import '../../style/style.css'
import ScrollToTop from "./ScrollToTop";


export const AppRouter = () => {

    
    return (
        <BrowserRouter>
        <ScrollToTop/>

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

                    <Route path="/reposteria" element={<Reposteria/>} />
                    <Route path="/bazar" element={<Bazar/>} />
                    <Route path="/manualidades" element={<Manualidades/>} />
                    <Route path="/carioca" element={<Luminosa/>} />
                    <Route path="/deco" element={<Deco/>} />
                    <Route path="/golosinas" element={<Golosinas/>} />
                    <Route path="/infantiles" element={<Infantiles/>} />
                    <Route path="/disfraces" element={<Disfraces/>} />
                    <Route path="/fechas" element={<Fechas/>} />
                    

                    <Route path="*" element={
                        <Navigate replace to='/' />
                    } />
                </Routes>

                <a href="https://api.whatsapp.com/send?phone=5493484342298" target="_blank" rel="noreferrer" ><img className='apiwhatsapp' src={ whatsapp } alt='whatsapp'/></a>
                

                <Footer/>
            </div>

        </BrowserRouter>
    )
}
