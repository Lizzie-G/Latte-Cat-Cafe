function formu(){
document.getElementById('formuadopcion').addEventListener('submit')

const apellido = document.getElementById('apellido').value;
const nombre = document.getElementById('nombre').value;
const domicilio = document.getElementById('domicilio').value;
const dni = document.getElementById('dni').value;
const email = document.getElementById('email').value;
const mensaje = document.getElementById('mensaje').value;


const formu={
    apellido,
    nombre,
    domicilio,
    dni,
    email,
    mensaje,
};
}
localStorage.setItem('formu', JSON.stringify(formu));

