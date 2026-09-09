import { configureStore } from "@reduxjs/toolkit";
import contadorReducer from './slices/contador/contador-slice'
import productosReducer from './slices/productos/productos-slice'

// Configuración moderna del Store sin necesidad de hacer pasos extra para incorporar Redux a nuestro proyecto
export const store = configureStore({
    reducer: {
        contador: contadorReducer, // cuando hagamos el selector en el componente (UI) -> state -> contador
        productos: productosReducer
    } // <---- los slices del proyecto
})