
let ElementosLi = []

function elementoNuevo() {
  var li = document.createElement("li");    
  var inputValue = document.getElementById("Ingreso").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  AgregarAlArray(inputValue)
  if (inputValue === '') {
    alert("Escriba Algo");
  } else {
    document.getElementById("uwu").appendChild(li);

  }
  document.getElementById("Ingreso").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  var close = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

  var list = document.querySelector('ul');
  list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
      var Terminado =Date.now()
    }
  }, false);
}

function tareaMasRapida(){
  for (let i = 0; i < ElementosLi.length; i++) {
    const element = ElementosLi[i];
    console.log(element.FechaTerminado)
  }
}

function AgregarAlArray(Contenido) {
    var ID=0
    var NewElement = new Object()
    NewElement.ID=ID
    NewElement.Contenido = Contenido
    NewElement.FechaCreacion = Date.now()
    NewElement.FechaTerminado = Date.now()
    NewElement.Terminado = false
    ElementosLi.push(NewElement)
    console.log(NewElement.ID)
    ID++
  }

