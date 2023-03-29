
let ElementosLi = []

function elementoNuevo() {
  console.log(Date.now() / 1000)
  var li = document.createElement("li");
  var inputValue = document.getElementById("Ingreso").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  AgregarAlArray(inputValue)
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("uwu").appendChild(li);
  }
  document.getElementById("Ingreso").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

document.getElementById("Ingreso1")
    .addEventListener("keyup", function(e) {
        if (e.code === 'Enter') {
            document.getElementById("Ingreso").click();
        }
    });

function AgregarAlArray(Contenido) {

  var NewElement = new Object()
  NewElement.Contenido = Contenido
  NewElement.FechaCreacion = Date.now()
  NewElement.FechaTerminado = Date.now()
  NewElement.Terminado = false

  ElementosLi.push(NewElement)  
  console.log(NewElement.Terminado)
}