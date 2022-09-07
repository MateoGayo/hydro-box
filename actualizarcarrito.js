let carrito = []

carrito=JSON.parse(localStorage.getItem('carrito')) || [];

const contenedorCarrito = document.querySelector('#containerCarrito')

const percioTotal= document.getElementById('precioTotal')

console.log(contenedorCarrito)
const actualizarCarrito = () => {

    contenedorCarrito.innerHTML=""

    carrito.forEach ((prod) => {
        const div = document.createElement('div')
        div.className = ('producto')
        div.innerHTML = `
        <img class="imagenDelCarrito" src=${prod.img}>
        <p>${prod.nombre}</p>
        <p>Producto: $ ${prod.precio} </p>
        <p>Cantidad: <span id= "cantidad">${prod.cantidad}</span></p>
        <button onclick ="eliminarDelCarrito(${prod.id})" class= "boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `
        contenedorCarrito.appendChild(div)
        console.log(prod.img)
        localStorage.setItem('carrito',JSON.stringify(carrito))
    })
    percioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.precio, 0)
} 

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find ((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice (indice, 1)
    actualizarCarrito()
}
