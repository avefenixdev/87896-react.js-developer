import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const url = import.meta.env.API_PRODUCTOS 

const valorInicialEstadoProductos = {
    productos: [], // productos obtenidos
    loading: false, // indica si estamos esperando una respuesta.
    error: null // Si hay un error guardo el error
}
// Con createAsyncThunk creo la acción asincronica que va a ser capturada por el middleware Thunk
export const getProductos = createAsyncThunk(
    "productos/getProductos", // defino el type de la acción thunk
    async () => {
        const res = await fetch(url)

        if (!res) {
            throw new Error('No se pudieron obtener los productos')
        }

        const data = await res.json()

        return data.products
    }
)


const productosSlice = createSlice({
    name: 'productos',
    initialState: valorInicialEstadoProductos, // siempre objetos
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(
                getProductos.pending,
                (estado) => {
                    estado.loading = true
                    estado.error = null
                }
            )
            .addCase(
                getProductos.fulfilled,
                (estado, accion) => { // accion = { type, payload } 
                    estado.loading = false
                    estado.productos = accion.payload
                }
            )
            .addCase(
                getProductos.rejected,
                (estado, accion) => { // accion = { type, payload } 
                    estado.loading = false
                    estado.error = accion.error.message
                }
            )
    }
})

export default productosSlice.reducer