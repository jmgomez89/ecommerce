async function renderPlantillaListado(listado) {

    let plantillaHbs = await fetch('plantillas/cards.hbs').then(r => r.text())
    var template = Handlebars.compile(plantillaHbs);
    let html = template({ listado })
    document.getElementsByClassName('cards-container')[0].innerHTML = html  
}

function agregarCarrito(e,id,ref) {
    e.preventDefault()
    let producto = productoController.productos.find( producto => producto.id == id )
    carritoController.agregarAlCarrito(producto)    
}

async function initInicio() {
    console.warn('initInicio()')
    var productos = await productoController.obtenerProductos()
    await renderPlantillaListado(productos)

    document.querySelector('.section-cards__header p').innerHTML = `Se encontraron ${productos.length} productos`
}
