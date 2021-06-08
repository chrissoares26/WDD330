document.querySelector("#transform1").addEventListener('touchend', event => {document.querySelector('#transform1').classList.toggle("effective1");})
document.querySelector("#transform2").addEventListener('touchend', event => {document.querySelector('#transform2').classList.toggle("effective2");})



// Canvas scripts

let canvas = document.getElementById("myCanvas");     
let context = canvas.getContext("2d");
context.strokeStyle = "red";
context.fillStyle = "blue"