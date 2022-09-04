import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>`;

/*
Cálculo del área de un rectángulo 
Entrada:
Dato 1: altura 5 cm
Dato 2: base 10 cm
Proceso:
Área=base*altura
Salida:
5*10=50
*/
//let base:number = 0
//let altura:number = 0

//console.log(base*altura);

//let message:string | null = prompt("ingrese mensaje");
//console.log(message);

let base: number = 0;
let altura: number = 0;

const inputBase = document.getElementById("inputBase");
const inputAltura = document.getElementById("inputAltura");
const btn = document.getElementById("btn");
const resultado = document.getElementById("resultado") as HTMLElement;

btn?.addEventListener("click", function () {
  base = Number(inputBase.value);
  altura = Number(inputAltura.value);
  const area: number = base * altura;
  resultado.innerText = area;
});
