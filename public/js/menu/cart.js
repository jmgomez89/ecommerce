let mostrarCarrito = false

async function renderTablaCarrito(carrito) {
    var elemSectionCarrito = document.getElementsByClassName('section-cart')[0]

    let plantillaHbs = await fetch('plantillas/carrito.hbs').then(r => r.text())
    var template = Handlebars.compile(plantillaHbs);
    let html = template({ carrito })
    elemSectionCarrito.innerHTML = html
    elemSectionCarrito.classList.add('section-cart--visible')
}

function initCarrito() {
    var btnCarrito = document.getElementsByClassName('search-bar__carrito-container')[0]
    var elemSectionCarrito = document.getElementsByClassName('section-cart')[0]

    btnCarrito.addEventListener('click', async function () {
        mostrarCarrito = !mostrarCarrito
        if(mostrarCarrito) {
            await renderTablaCarrito(carritoController.carrito)
        }
        else {
            elemSectionCarrito.classList.remove('section-cart--visible')
        }
    })
}

initCarrito()
