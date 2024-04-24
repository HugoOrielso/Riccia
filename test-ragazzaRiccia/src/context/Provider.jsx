import React, { createContext, useState } from 'react'
export const ContextTest = createContext()

export function ProviderValuesGlobal({children}) {
    const [productosORecomendaciones, setProductosORecomendaciones] = useState("");
    const [confirmarAnswerGlobal, setConfirmarAnswerGlobal] = useState(false)
  return (
    <ContextTest.Provider
        value={{
            productosORecomendaciones,setProductosORecomendaciones,confirmarAnswerGlobal,setConfirmarAnswerGlobal
        }}

    >
        {children}
    </ContextTest.Provider>
  )
}
