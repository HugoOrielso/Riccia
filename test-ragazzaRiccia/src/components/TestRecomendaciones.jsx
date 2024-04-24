import React, { useRef, useState } from 'react'
import TestRecomendacionesJson from '/public/preguntas.json'
import 'swiper/css';
import '/public/css/recomendaciones.css'
import {Toaster , toast} from 'sonner'
import emailjs from '@emailjs/browser';
import { SERVICEID, TEMPLATEID, PUBLICKEY } from '../config';


const TestRecomendaciones = () => {
    const form = useRef();
    const [respuestas , setRespuestas ] = useState([])
    const {Recomendaciones} = TestRecomendacionesJson
    const cantidadPreguntas = Recomendaciones.length
    const rutinas = [
      {
        title: "PDGOT",
        descripcion: "Lavado de cabello con nuestros especialistas",
      },
      {
        title: "Planchar pelo",
        descripcion: "Planchado de pelo con baño",
      },
      {
        title: "Trenzar pelo",
        descripcion: "Treanzar cabello con tinte",
      },

    ]

    let text = "Dadas tus respuestas, esta es la rutina que se te ajusta de mejor manera "


    const checkAnswer = answer =>{
      return respuestas.some(item => item.indice === answer);
    }

    function handleChangeInput(indice, respuesta) {
      if (!checkAnswer(indice)) {
        setRespuestas([...respuestas, { indice, respuesta }]);
      }
      respuestas[indice] = {indice, respuesta}
    }

    const checkInputs = ()=>{
      let email = document.querySelector("#email-data").value
      let name = document.querySelector("#name-data").value

      if(!email){
        toast.error("Por favor danos un email para enviarte la recomendación")
        return
      }

      if(!name){
        toast.error("Por favor danos un nombre")
        return
      }
    }

    function randomNumber() {
      return Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    }

    const sendEmail = (e) => {
      e.preventDefault();
      if(!totalRespuestas()){
        return
      }
      let numero = randomNumber()
      let inputRutina = document.querySelector("#input_rutina")
      if(inputRutina){
        let message = text + rutinas[numero - 1].title + " " + rutinas[numero - 1].descripcion
        inputRutina.value = message
      }
      emailjs
        .sendForm('service_zu82pra', 'template_q5i49fr', form.current, {
          publicKey: 'Yq9oduayiN8UrHn0k',
        })
        .then(
          () => {
            toast.success("Rutina enviada correctamente, revisa tu bandeja de entrada.")
            console.log('SUCCESS!');
          },
          (error) => {
            console.log(error);
            toast.error("Ocurrió un error")
            console.log('FAILED...', error.text);
          },
        );
    }


    
  function totalRespuestas(){
    if(respuestas.length == cantidadPreguntas){
      checkInputs()
      return true
    }
    toast.error("Por favor responde todas las preguntas.")
    return false
  }
  

  return (
    <>
      <section>
        {
          Recomendaciones.map((rec, questionIndex)=>{
            return(
              <article key={questionIndex} className='question'>
                <h2>{rec.question}</h2>
                <div className='respuestas'>
                  {rec.answer.map((answer,index)=>{
                    return(
                      <label key={index} className={answer.length >= 30 ? "star" : ""}> 
                        <input type="radio" name={`question${questionIndex}`} value={answer} onClick={() => handleChangeInput(questionIndex, answer)} /> 
                        {answer} 
                      </label>
                    )
                  })}
                </div>
              </article>
            )
          })
        }
        <div className='inputs'>
          <form onSubmit={sendEmail} ref={form}>
            <div className='container-inputs'>
              <input type="text" name='to_name' placeholder='Nombre' className='input-data' id='name-data'/>
              <input type="text" name='to_email' placeholder='Correo electrónico' className='input-data' id='email-data'/>
              <input type="text" name='message' placeholder='Rutina' className='input-data' id='input_rutina'/>
            </div>
            <p>Por favor proveenos de estos datos para poder enviarte la recomendación generada.</p>
            <button type='submit'  className='btn-terminar' >Terminar</button>
          </form>
        </div>
        <Toaster richColors />
      </section>
    </>
  )
}

export default TestRecomendaciones