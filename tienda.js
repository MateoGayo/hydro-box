
let stockProductos =[
    {id: 1, nombre: "Maceta 15L", tipo:"maceta", cantidad: 1, desc: "maceta cuadrada de 15 litros", precio:8500, img:"https://i.ibb.co/HdM9VMG/maceta15.jpg"},
    {id: 2, nombre: "Maceta 30L", tipo:"maceta", cantidad: 1, desc: "maceta cuadrada de 30 litros", precio:11800, img:"https://i.ibb.co/9pxzJWh/maceta-30-L.jpg"},
    {id: 3, nombre: "Maceta Doble 30L", tipo:"maceta", cantidad: 1, desc: "maceta doble cuadrada de 30 litros", precio:12500, img:"https://i.ibb.co/kK62WtW/doble-maceta-30-L.jpg"},
    {id: 4, nombre: "Maceta Doble 60L", tipo:"maceta", cantidad: 1, desc: "maceta doble cuadrada de 60 litros", precio:16000, img:"https://i.ibb.co/W3g0VYZ/maceta-doble-60-L.jpg"},
    {id: 5, nombre: "Maceta 10L", tipo:"maceta", cantidad: 1, desc: "maceta cilindrica de 10 litros", precio:6400, img:"https://i.ibb.co/v1BGJzW/maceta-10-L.jpg"},
    {id: 6, nombre: "Maceta 20L", tipo:"maceta", cantidad: 1, desc: "maceta cuadrada de 20 litros", precio:7400, img:"https://i.ibb.co/519xXbJ/Maceta-20-L.jpg"},
    {id: 7, nombre: "Clon Box", tipo:"clonbox", cantidad: 1, desc: "maceta clonadora", precio:11000, img:"https://i.ibb.co/ySbZ7g4/clonbox.jpg"},
    {id: 8, nombre: "Clon Box Doble", tipo:"clonbox", cantidad: 1, desc: "maceta clonadora doble", precio:17000, img:"https://i.ibb.co/0r90q0Z/clonboxdoble.jpg"},
]

const contenedorProductos = document.getElementById ('tienda-productos')

const botonVaciar = document.getElementById ('vaciar-carrito')




document.addEventListener ('DOMContentLoaded', () => {
    if (localStorage.getItem ('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
    }
})


stockProductos.forEach ((producto) => {
    const div = document.createElement ('div')
    div.classList.add('producto')
    div.innerHTML = `
    <img class="fotoProductos" src= ${producto.img} alt= "">
    <h3>${producto.nombre}</h3>
    <p>${producto.desc}</p>
    <p class="claseProducto"> Precio:$ ${producto.precio}</p>
    <button class="agregar${producto.id} class="botonAgregar"> Agregar <i class="fa-sharp fa-solid fa-cart-plus main__boton"></i></button>
    `
    contenedorProductos.appendChild(div)

    const boton = document.querySelector(`.agregar${producto.id}`)
    console.log(boton)
    
    boton.addEventListener ('click', () => {
        agregarAlCarrito(producto.id)
        })

})

const agregarAlCarrito = (prodId) => {
    const item = stockProductos.find((prod) => prod.id === prodId);
    const itemEnCarrito = carrito.find((prod) => prod.id === prodId);

    (itemEnCarrito) ? itemEnCarrito.cantidad++ : carrito.push(item);
    localStorage.setItem("carrito", JSON.stringify(carrito));

    const items =  stockProductos.find(item => item.id == prodId)
    console.log(carrito)
    }



