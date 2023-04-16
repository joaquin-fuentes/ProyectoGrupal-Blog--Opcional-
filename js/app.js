let barraBusqueda = document.querySelector("#barra-busqueda")
let btnBuscar = document.querySelector("#btn-buscar")
let btnBorrar = document.querySelector("#btn-borrar")

let formBusqueda = document.querySelector("#form-busqueda")
let articulosNoExisten = document.querySelector("#articulos-noExisten")
let articulosSiExisten = document.querySelector("#articulos-siExisten")
let titulo = document.querySelector("#titulo")
let titulosArticulos = document.querySelectorAll(".titulo-articulo")
let articuloBuscado;

formBusqueda.addEventListener("submit", buscarArticulo)

function borrarBusqueda() {
    barraBusqueda.value = ""
    btnBorrar.className = "d-none"
    titulo.innerHTML = "Conoce nuestros planes"
    articulosNoExisten.className = "d-none"
    articulosSiExisten.className = "row"
    titulosArticulos.forEach((articulo) => {
        let articuloPadre = articulo.parentNode.parentNode.parentNode
        articuloPadre.className = "col-md-4 col-lg-3 mb-3"
    })
}

function buscarArticulo(e) {
    e.preventDefault()
    let coincidencias = 0
    articuloBuscado = barraBusqueda.value
    console.log(`El articulo buscado es: ${articuloBuscado}`)
    if (articuloBuscado != "") {
        btnBorrar.className = "btn btn-outline-dark mx-2"
        titulosArticulos.forEach((articulo) => {
            let textoArticulo = articulo.textContent.toLowerCase()
            // recorrer un articulo y compararlo con el articulo buscado
            if (textoArticulo.includes(articuloBuscado)) {
                coincidencias++
                console.log(`articulo: ${textoArticulo}`)
                let articuloPadre = articulo.parentNode.parentNode.parentNode
                articuloPadre.className = "col-md-4 col-lg-3 mb-3"
                coincidencias++
            } else {
                console.log(`articulo que no se encontro: ${textoArticulo}`)
                let articuloPadre = articulo.parentNode.parentNode.parentNode
                articuloPadre.className = "d-none"
            }
        })
        if (coincidencias == 0) {
            titulo.innerHTML = "No se encontraron articulos con los terminos ingresados"
        } else {
            titulo.innerHTML = "Conoce nuestros planes"
        }
    } else {
        if (coincidencias === 0) {
            titulo.innerHTML = "Conoce nuestros planes"
        }
        articulosNoExisten.className = "d-none"
        articulosSiExisten.className = "row"
        titulosArticulos.forEach((articulo) => {
            let articuloPadre = articulo.parentNode.parentNode.parentNode
            articuloPadre.className = "col-md-4 col-lg-3 mb-3"
        })
    }
}

