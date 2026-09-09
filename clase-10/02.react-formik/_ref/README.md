# Recursos útiles

* <https://react-redux.js.org/>
* <https://redux.js.org/>
* <https://redux-toolkit.js.org/>

# Instalando Redux Toolkit

<https://redux-toolkit.js.org/introduction/getting-started>

```sh
npm install @reduxjs/toolkit react-redux
```

## Creando carpetas en el proyecto

```sh
mkdir components pages utils constants store routers
```

## Creando archivos de páginas

```sh
touch Inicio.jsx Productos.jsx Redux.jsx Contacto.jsx Nosotros.jsx NoEncontrado.jsx
```

## Instalando el Router

<https://reactrouter.com/start/data/installation>

```sh
npm i react-router
```

## Redux sincronico vs Redux asincronico
El sincronico son todos estados que están dentro de la aplicación REACT, se inicializan o están dentro de la aplicación react. Redux asincronico cuando hay una comunicación hacia el exterior de la aplicación. O sea comunicarse y obtener recursos de una API, Storage del cliente.

## Store
Ese el lugaar donde Redux guarda el estado global. Store -> contador

## Action
Una acción describe lo que quiero que ocurra -> action -> { type: 'contador/incrementar' }

## Reducer
Es modificar el estado basado en la acción. Hay varios reducer, uno por cada acción que se requiera.

## Dispatch
Es la manera de enviar la acción al reducer.

## Selector (React-Redux) -> useSelector
Un selector que permite elegir información del store (Qué estado quiero consumir)


React UI (componente) -> dispatch(action) -> Reducer -> Store (contador: 10) -> selector -> React UI (componente)

## Estructura de proyecto por features

src
    app
        store.js
    features
        contador
            contadorSlice.js
            Contador.jsx
    App.jsx
    index.css
    main.jsx


## Estructura de proyecto por caracteristicas

src
    store
        store.js
        slices
            contadorSlices.js
    components
        Contador.jsx
    pages
    App.jsx
    index.css
    main.jsx