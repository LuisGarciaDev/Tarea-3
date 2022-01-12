const formulario = document.getElementById("formulario")
const listar = document.getElementById("listar")
let boton = document.getElementById('calcular');
let res = document.getElementById('resultado');
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');
let p4 = document.getElementById('p4');
let datos = []



function calcularImc(p, a) {
    let suma = (p / (Math.pow(a, 2)));
    let total = suma.toFixed();

    p1.innerHTML = '';
    p2.innerHTML = '';
    p3.innerHTML = '';
    p4.innerHTML = '';


    res.innerHTML = `Su Masa Corporal es de <h3 class="text-center"> ${total} </h3>`;
    if (total < 18.5) {
        return p1.innerHTML += `<div class="colorimc">tu resultado imc es:${total} se considera Bajo Peso<div>`
    }
    else if (total < 25) {
        return p2.innerHTML += `<div class="colorimc">tu resultado imc es:${total} se considera Saludable<div>`
    }
    else if (total < 30) {
        return p3.innerHTML += `<div class="colorimc">tu resultado imc es:${total} se considera Exceso de peso<div>`
    }
    else {
        return p3.innerHTML += `<div class="colorimc">tu resultado imc es:${total} se considera Obeso<div>`
    }
}



formulario.addEventListener("submit", e => {
    e.preventDefault();
    let sexm = document.getElementById("mujer").checked
    let sexh = document.getElementById("hombre").checked
    let edad = document.getElementById("idedad").value
    let peso = document.getElementById("idpeso").value
    let altura = document.getElementById("idaltura").value
    let sexo = [];
    if (sexh) {
        sexo = "Masculino"
    } 
    if (sexm) {
        sexo = "Femenino"
    }

    calcularImc(peso, altura)
    agregarUsuario(edad, peso, altura, sexo)
    })  


const agregarUsuario = (edad, peso, altura, sexo) => {


    if (datos.length < 15) {
        let registro = {
            sexo: sexo,
            edad: edad,
            peso: peso,
            altura: altura
        }

        datos.push(registro)
        guardarDatos()
        console.log('todo bien', datos);

    } else {
        alert("ya no puedes agregar mas datos")
    };

    listarDatos();
}


//almacenamos y enviamos los datos al localstorage (set)
const guardarDatos = () => {
    localStorage.setItem('registro', JSON.stringify(datos))
    listarDatos();
}




const listarDatos = () => {
    listar.innerHTML = " ";
    datos = JSON.parse(localStorage.getItem("registro"))
    datos.forEach(element => {
        const { edad, peso, altura, sexo } = element
        listar.innerHTML += ` <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${sexo}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${edad}</h6>
          <h6 class="card-subtitle mb-2 text-muted">${peso}</h6>
          <h6 class="card-subtitle mb-2 text-muted">${altura}</h6>
        </div>
      </div>
         `
    })
}