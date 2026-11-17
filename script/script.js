const formulario = document.querySelector("form");
const radios = document.querySelectorAll("input[type='radio']");
const select = document.querySelector("select");
const errores = document.querySelectorAll(".error");
const tbody = document.querySelectorAll("tbody");
const numeros = document.querySelectorAll(".stat-card__numero");


let ficcion = 0;
let noFiccion = 0;
let fantasia = 0;
let total = 0;

errores[0].textContent = "";
errores[1].textContent = "";
errores[2].textContent = "";

const titulo = formulario.titulo.value.trim();
const categoria = select.value;

let tapa = "";
if (radios[0].checked) {
    tapa = "Sí";
}
if (radios[1].checked) {
    tapa = "No";
}