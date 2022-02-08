import ProductoModel from "../model/productos.js"
import config from '../config.js'

import ProductosValidation from "../model/validaciones/productos.js"

const model = ProductoModel.get(config.TIPO_DE_PERSISTENCIA)

/* Api Obtener ALL */
const obtenerProductos = async () => {
    let productos = await model.readProductos()
    return productos
}

/* Api Obtener ONE */
const obtenerProducto = async id => {
    let producto = await model.readProducto(id)
    return producto
}

/* Api Guardar */
const guardarProducto = async producto => {
    const errorValidacion = ProductosValidation.validar(producto)
    if(!errorValidacion) {
        let productoCreado = await model.createProducto(producto)
        return productoCreado
    }
    else {
        throw new Error(`Error en validación guardarProducto: ${errorValidacion.details[0].message}`)
        console.log('Error en validación guardarProducto:', errorValidacion.details[0].message)
        return {}
    }
}

/* Api Actualizar */
const actualizarProducto = async (id,producto) => {
    const errorValidacion = ProductosValidation.validar(producto)
    if(!errorValidacion) {
        let productoUpdate = await model.updateProducto(id,producto)
        return productoUpdate
    }
    else {
        console.log('Error en validación actualizarProducto:', errorValidacion.details[0].message)
        return {}
    }
}

/* Api Borrar */
const borrarProducto = async id => {
    let productoDelete = await model.deleteProducto(id)
    return productoDelete 
}


//exports
export default {
    obtenerProductos,
    obtenerProducto,
    guardarProducto,
    actualizarProducto,
    borrarProducto
}