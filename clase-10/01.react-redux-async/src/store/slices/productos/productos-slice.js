import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const url = import.meta.env.VITE_API_PRODUCTOS 
console.log(url)    
const valorInicialEstadoProductos = {
    productos: null, // productos obtenidos
    loading: false, // indica si estamos esperando una respuesta.
    error: null, // Si hay un error guardo el error,
    creating: false,
    updating: false,
    deleting: false
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

export const createProducto = createAsyncThunk(
    "productos/createProducto",
    async (nuevoProducto) => {
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': "applicattion/json",
                body: JSON.stringify(nuevoProducto)
            }
        }
        const res = await fetch(url, config)

        if (!res) {
            throw new Error('No se pudo crear el producto')
        }

        return await res.json()
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
            .addCase(
                createProducto.pending,
                (estado) => {
                    estado.creating = true
                }
            )
            .addCase(
                createProducto.fulfilled,
                (estado, accion) => { // accion = { type, payload } 
                    estado.creating = false
                    estado.productos.push(accion.payload)
                }
            )
            .addCase(
                createProducto.rejected,
                (estado, accion) => { // accion = { type, payload } 
                    estado.creating = false
                    estado.error = accion.error.message
                }
            )
    }
})

export default productosSlice.reducer