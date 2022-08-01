let consultas = []

class consulta {
    constructor(nombre, apellido, email, consulta){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.consulta = consulta;
    }
}

const formulario = document.querySelector("#formulario-consulta")
const inputNombre = document.querySelector ("#nombre-consulta")
const inputApellido = document.querySelector ("#apellido-consulta")
const inputEmail = document.querySelector ("#email-consulta")
const inputConsulta = document.querySelector ("#consulta-consulta")

formulario.onsubmit = (event) => {
    event.preventDefault()
    consultas.push(new consulta (inputNombre.value, inputApellido.value, inputEmail.value, inputConsulta.value))
    console.log(consultas)
}


const botoninfo = document.querySelector ("#info")
const noVerInfo = document.querySelector ("p")

botoninfo.addEventListener("click", () => {
    noVerInfo.classList.toggle("verInformacion")
})
