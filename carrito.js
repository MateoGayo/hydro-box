carrito=JSON.parse(localStorage.getItem('carrito')) || [];
const botonVaciar = document.getElementById ('vaciar-carrito')

botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    localStorage.setItem("carrito", carrito)
    actualizarCarrito()
})

document.addEventListener ('DOMContentLoaded', () => {
    if (localStorage.getItem ('carrito')){
    carrito = JSON.parse(localStorage.getItem('carrito'))
    actualizarCarrito()
    console.log(carrito)}
})

