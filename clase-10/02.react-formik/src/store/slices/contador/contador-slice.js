import { createSlice } from "@reduxjs/toolkit"

const CONTADOR_VALOR_INICIAL = 22

const contadorSlice = createSlice({
    name: 'contador',
    initialState: {
        contador: CONTADOR_VALOR_INICIAL,
        mandarina: 'Fruta'
    },
    reducers: {
        incrementar(estado) {
            //console.log(estado)
            estado.contador += 1
        },
        decrementar(estado) {
            estado.contador -= 1
        },
        reset(estado) {
            estado.contador = CONTADOR_VALOR_INICIAL
        },
        incrementarPorValor(estado, accion) { // accion -> type | payload
            console.log(accion) // { type, payload: 55}
            estado.contador += accion.payload
        }
    }
})

export const { 
    incrementar, 
    decrementar, 
    reset, 
    incrementarPorValor  
} = contadorSlice.actions // { incrementar, decrementar, ...}

export default contadorSlice.reducer