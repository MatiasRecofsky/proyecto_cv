
function funcion1() {
    window.print()
}

function mostrarfecha() {
    document.getElementById("textodefecha").innerHTML = Date();
  }

  function agrandar(){
    document.getElementById("mont").style.width="700px";
  }
  function achicar(){
    document.getElementById("mont").style.width="200px";
}


document.getElementById("boton1").addEventListener("click", funcion1);


