import api from "../api/productos.js"

/* Controller GET */
const getProductos = async (req,res) => {
    let id = req.params.id
    
    if(id) {
        let producto = await api.obtenerProducto(id)
        res.json(producto)
    }
    else {
        let productos = await api.obtenerProductos()
        res.json(productos)
    }
}

/* Controller POST */
const postProducto = async (req,res) => {
    let producto = req.body

    let productoAgregado = await api.guardarProducto(producto)

    res.json(productoAgregado)
}

/* Controller PUT */
const putProducto = async (req,res) => {
    let id = req.params.id
    let producto = req.body

    let productoActualizado = await api.actualizarProducto(id,producto)

    res.json(productoActualizado)
}

/* Controller DELETE */
const deleteProducto = async (req,res) => {
    let id = req.params.id

    let productoBorrado = await api.borrarProducto(id)

    res.json(productoBorrado)
}

//exports
export default {
    getProductos, 
    postProducto,
    putProducto,
    deleteProducto
}