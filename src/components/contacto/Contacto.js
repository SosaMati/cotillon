import { useRef } from 'react';
import Swal from 'sweetalert2'

import './contacto.css'
import instagram from '../../assets/instagram.svg';
import facebook from '../../assets/facebook.svg';
import whatsapp from '../../assets/whatsapp.svg';
import reloj from '../../assets/reloj.png';
import ubicacion from '../../assets/ubicacion.png';

export const Contacto = () => {

    const formRef = useRef(); 

    const handleSubmit = (e) => {

        e.preventDefault(); 
        // emailjs
        //     .sendForm(
        //         'service_ejq1jxk', 
        //         'template_q9lehgz', 
        //         formRef.current, 
        //         'Z16jZvK62fN5yGupZ'
        //     )
        Swal.fire(
            '¡Mensaje enviado!',
            '¡Gracias por contactarnos!',
            'success'
        )
        .then((result) => {
            console.log(result.text);
            e.target.reset()
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <div className='c animate__animated animate__fadeIn'>
            <div className="c-bg"></div>
            <div className="c-wrapper container">

                <div className="c-left">
                    <h1 className="c-title">¡Síguenos en nuestras redes sociales!</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={ facebook } alt='facebook' />
                            <a className='c-link' href="https://www.facebook.com/lahormiguitaviajeracotillon" target="_blank" rel="noreferrer" >Encontranos en  Facebook</a>
                        </div>
                        <div className="c-info-item">
                            <img src={ instagram } alt='instagram' />
                            <a className='c-link' href="https://" target="_blank" rel="noreferrer" >Encontranos en Instagram</a>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <h1 className='c-title'>Contáctanos por  Whatsapp</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={ whatsapp } alt='whatsapp' />
                            <a className='c-link' href="https://api.whatsapp.com/send?phone=5493484342298" target="_blank" rel="noreferrer" >Envianos un Whatsapp</a>
                        </div>
                    </div>
                </div>

                <div className="c-right">
                    <p className="c-desc">
                        <b>¿Necesitás realizar una consulta?</b> Ponete en contacto, le responderemos a la brevedad.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder='Tu nombre' name='user_name' autoComplete="off"/>
                        <input type="text" placeholder='Asunto' name='user_subject' autoComplete="off"/>
                        <input type="text" placeholder='Tu Email' name='user_email' />
                        <textarea rows='5' placeholder='Escribe tu consulta...' name='message' />
                        <button className="buttonForm">Enviar</button>
                    </form>
                </div>
                
            </div>

            <div className='c-wrapper container'>
                <div className='c-left'>
                    <div className='c-inline'>
                        <img className='c-icon' src= {reloj} alt= 'reloj' />
                        <h2>Horarios de atención</h2>
                    </div>
                    <h6>Estamos abiertos de lunes a viernes de 08:30 a 13:00 y de 16:00 a 20:00. Los sábados abrimos de 09:00 a 14:00.</h6>

                    <br/>
                    <br/>

                    <div className='c-inline'>
                        <img className='c-icon' src= {ubicacion} alt= 'ubicacion' />
                        <h2>Dirección</h2>
                    </div>
                    <h6>Estamos ubicados en Colón 465, entre las calles Edilfredo Ameghino y Dr. Travi, (frente al Skatepark), Belén de Escobar.</h6>
                </div>

                <div className='c-right'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13176.206624185479!2d-58.7941715!3d-34.3491634!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb20a3a6ea8cee99!2sCotill%C3%B3n%20%22La%20Hormiguita%20viajera%22!5e0!3m2!1ses-419!2sar!4v1651773191357!5m2!1ses-419!2sar"
                        width="400" 
                        height="300" 
                        style={{border:0}} 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    )
}
