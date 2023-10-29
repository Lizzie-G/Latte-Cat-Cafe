// function leeformu(){
//     var formuDatos = {
//         apellido: document.getElementById('apellido').value,
//         nombre: document.getElementById('nombre').value,
//         domicilio: document.getElementById('domicilio').value,
//         dni: document.getElementById('dni').value,
//         email: document.getElementById('email').value,
//         mensaje: document.getElementById('mensaje').value


//     };
// console.log(leeformu);
// }




const apellido = document.querySelector('[name=apellido]');
const nombre = document.querySelector('[name=nombre]');
const domicilio = document.querySelector('[name=domicilio]');
const dni = document.querySelector('[name=dni]');
const email = document.querySelector('[name=email]');
const mensaje = document.querySelector('[name=mensaje]');

apellido.addEventListener("blur", function (e){
    const field =e.target;
    const fieldValue =e.target.value;
    if (fieldValue.lenght=== 0){
        field.classList.add("Invalido");
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText= "Usuario es requerido";
    } else{
        field.classList.remove("Invalido");
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText= "";


    }
}
