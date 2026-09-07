import { createSlice } from "@reduxjs/toolkit"

const CONTADOR_VALOR_INICIAL = 22

const contadorSlice = createSlice({
    name: 'contador',
    initialState: {
        contador: CONTADOR_VALOR_INICIAL
    },
    reducers: {
        incrementar(estado) {
            estado.value += 1
        },
        decrementar(estado) {
            estado.value -= 1
        },
        reset(estado) {
            estado.value = CONTADOR_VALOR_INICIAL
        },
        incrementarPorValor(estado, accion) { // accion -> type | payload
            estado.value = accion.payload
        }
    }
})

export const { incrementar, decrementar, reset, incrementarPorValor  } = contadorSlice.actions // { incrementar, decrementar, ...}

export default contadorSlice.reducer