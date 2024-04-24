import React, { useContext } from 'react'
import { ContextTest } from '../context/Provider'
import TestRecomendaciones from './TestRecomendaciones';
import TestProductos from './TestProductos';

const Tests = () => {
    const {productosORecomendaciones} = useContext(ContextTest)
  return (
    <>
        {productosORecomendaciones.answer == "Recomendación" && <TestRecomendaciones/> }
        {productosORecomendaciones.answer == "Tratamiento" && <TestProductos/>}
    </>
  )
}

export default Tests