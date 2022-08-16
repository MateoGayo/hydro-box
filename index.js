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

const usuario = {
    correo : "mateo@gmail.com",
    contrasenia : "mateo"
}
const login = document.querySelector ("#formulario-login")
const inputCorreo = document.querySelector ("#correo-login")
const inputContrasenia = document.querySelector ("#contrasenia-login")
const iniciar = document.querySelector ("#iniciar-boton")
const logout = document.querySelector ("logout-boton")

login.onsubmit = (e) => {
    e.preventDefault();
    if (inputCorreo.value === usuario.correo && inputContrasenia.value === usuario.contrasenia) {
        iniciar.style.display = "none"
        logout.style.display = "flex"
        localStorage.setItem("usuario", true)
        swal("Bienvenido", "Has iniciado sessión correctamente", "success");
    } else{
        login.reset()
        alert("el usuario o la contraseña son incorrectos")
    }
}

function usuarioLog (){
    const token = localStorage.getItem ("usuario")
    if (token === true ) {
        iniciar.style.display = "none"
        logout.style.display = "flex"
    } else if (token !== "true"){
        iniciar.style.display = "flex"
        logout.style.display = "none"
    }
}

usuarioLog()

logout.onclick = () => {
    localStorage.removeItem("usuario")
    location.reload()
}