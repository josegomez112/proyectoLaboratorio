const parametros = new URLSearchParams(window.location.search);

const id = parametros.get("parametro");
console.log(id);

document.getElementById("parametro").textContent = id;