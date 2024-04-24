import React, { useContext, useState } from 'react'
import '/public/css/sectionUno.css'
import {useValidations} from '../context/Functions.jsx'
import preguntaUno from '/public/global.json'
import { ContextTest } from '../context/Provider.jsx'
import { Toaster  } from 'sonner'
import Tests from './Tests.jsx'

const EleccionRuta = () => {
    const { handleConfirmacion, handleAnswer } = useValidations()
    const {productsORecomendaciones,confirmarAnswerGlobal} = useContext(ContextTest)
    return (
    <>
        <section className='section-uno'>
            <h1 className='title-test'>Test <span>La Ragazza Riccia</span> </h1>
            {
                (productsORecomendaciones == "" || confirmarAnswerGlobal == false) ?
                <>
                    <div className='msj-presentacion'>
                        <p>
                            Este es un test, responde esta pregunta para guiarte, si eliges rutina, te haremos un test y al finalizar te recomendaremos la rutina más adecuada, y si eliges productos también te haremos un pequeño test para recomendarte los mejores productos para tus necesidades.
                        </p>
                    </div>
                    <div className='container-preguntaGlobal'>
                        <h1>{preguntaUno.preguntaGlobal.question}</h1>
                        <ul>
                            {
                            preguntaUno.preguntaGlobal.answers.map((item, index)=>{
                                return(
                                    <label className='label-options-global' key={index}>
                                        <input type="radio" name={`question`} value={item} onChange={()=> handleAnswer(item)}/>
                                        {item}
                                    </label>
                                )
                            })  
                            }
                        </ul>
                        <button onPointerDown={handleConfirmacion} className='confirmar-btn'>Seleccionar</button>
                    </div>
                </> : 
                <>
                    <Tests/>
                </>
            }
        </section>
        <Toaster richColors/>
    </>
  )
}

export default EleccionRuta