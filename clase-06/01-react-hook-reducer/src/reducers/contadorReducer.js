
export const initialState = {
    contador: 55
}

export const contadorReducer = (estado, accion) => { // estado = {} | accion = {}
    //console.log(estado) // { contador: 22 }
    //console.log(accion) // { accion.type = 'incrementar', accion.payload: 5 }

    switch (accion.type) {
        case 'incrementar':
            //estado.contador = estado.contador + 1
            return { // clonar el estado
                ...estado, // { contador: 22 }
                contador: estado.contador + 1
            }
        case 'decrementar':
            return {
                ...estado,
                contador: estado.contador - 1
            }
        case 'resetear':
            return {
              ...estado,
              contador: initialState.contador
            }
        case 'incrementarXValor':
            return {
              ...estado,
              contador: estado.contador + accion.payload
            }
    
        default:
            console.log('Se intento hacer una acción que no existe...')
            return estado
    }

}