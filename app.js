// llamar las etiquetas de html
// const username = document.getElementById("username")
// const btnGreat = document.querySelector("#btnGreat")

// evento escuchador
// btnGreat.addEventListener("click", great)

// funcion que se ejecuta al hacer click en el boton
// function great() {
//     alert(username.value)
// }

const username = document.getElementById("nombre")
const data1 = document.getElementById("nota1")
const data2 = document.getElementById("nota2")
const data3 = document.getElementById("nota3")
const btnCalculate = document.getElementById("btnCalculate")
const response = document.getElementById("result")
const predecirNota = document.getElementById("resultado")

predecirNota.addEventListener("click", calculateNote3)

function validarRango(note1,note2,note3) {
    
    return note1 >= 0 && note1 <= 5 && note2 >= 0 && note2 <= 5 && note3 >= 0 && note3 <= 5
}

function calculateNote3() {

    let note1 = parseFloat(data1.value)
    let note2 = parseFloat(data2.value)

    if (!validarRango(note1, note2, 0)) {

        response.textContent = "Las notas deben estar entre un rango de 0 y 5 para poder predecir la nota 3.";
        response.style.color = 'red';
        return;
    }

    let result3 = ((3.5 - (note1*0.3) - (note2*0.3)) /0.4).toFixed(2)

    if (result3 > 5) {
        response.textContent = `SR/SRA/SRE ${username.value}, para obtener una nota definitiva de 3.5, tendria que sacar mas de 5 lo cual no se puede porque la nota mayor es 5`;
        response.style.color = 'red';
    }else{
        response.textContent = `SR/SRA/SRE ${username.value}, para tener una nota definitiva de 3.5, debes sacar al menos ${result3} en la nota 3.`;
        response.style.color = 'green';
    }
}

btnCalculate.addEventListener("click", calculateNote)

function calculateNote(event) {

    event.preventDefault()

    let note1 = parseFloat(data1.value)
    let note2 = parseFloat(data2.value)
    let note3 = parseFloat(data3.value)

    if (!validarRango(note1, note2, note3)) {

        response.textContent = "Las notas deben estar entre un rango de 0 y 5 para poder calcular la nota final.";
        response.style.color = 'red';
        return;
    }

    let result = ((note1*0.3) + (note2*0.3) + (note3*0.4)).toFixed(2)
    
    if (result<3.5) {
        response.style.color = "black"
        response.textContent = `SR/SRA/SRE ${username.value} usted perdio la materia, con una nota definitiva de: ${result}`
    }else if (result>4.5) {
        response.style.color = "green"
        response.textContent = `SR/SRA/SRE ${username.value} su nota es sobresaliente, la nota definitiva es: ${result}`
    }else if(result>3.5 && result<4.5){
        response.style.color = "orange"
        response.textContent = `SR/SRA/SRE ${username.value} usted aprobo la materia, la nota definitiva es: ${result}`
    }
}