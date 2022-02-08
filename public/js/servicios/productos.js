class ProductoService {
    URL_PRODUCTOS = '/api/productos/' //'https://61ca482920ac1c0017ed901d.mockapi.io/productos/'

    async obtenerProductosService() {
        let productos = await http.get(this.URL_PRODUCTOS)
        return productos
    }

    async guardarProductoService(producto) {
        let productoGuardado = await http.post(this.URL_PRODUCTOS, producto)
        return productoGuardado
    }

    async actualizarProductoService(id,producto) {
        let productoActualizado = await http.put(this.URL_PRODUCTOS, id, producto)
        return productoActualizado
    }

    async borrarProductoService(id) {
        let productoBorrado = await http.del(this.URL_PRODUCTOS, id)
        return productoBorrado
    }
}

const productoService = new ProductoService()

