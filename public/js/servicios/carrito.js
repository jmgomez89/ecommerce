class CarritoService {
    URL_CARRITO = '/api/carrito/' //'https://61ca482920ac1c0017ed901d.mockapi.io/carrito/'

    async guardarCarritoService(carrito) {
        let carritoGuardado = await http.post(this.URL_CARRITO, carrito)
        return carritoGuardado
    }
}

const carritoService = new CarritoService()
