var Elementos=0
let ElementosLi = []


const elementoNuevo = (clear = true) => {
  if (!document.getElementById("Ingreso").value) return

  let currentdate = new Date();
  let datetime = currentdate.getHours() + ":"  + currentdate.getMinutes() + ":" + currentdate.getSeconds()
  document.getElementById("uwu").innerHTML += `
  <li class="list-group-item element" id="uwu-${Elementos}">
      <div class="content">
          <input class="form-check-input me-1" type="checkbox" value="" id="check-${Elementos}" onchange="completado(${Elementos})">
          <label class="form-check-label Elementos" id="Ingreso-${Elementos}" for="firstCheckbox">${document.getElementById("Ingreso").value}</label>
      </div>
      <div class="content gap"> Hora: ${datetime} <span id="fecha-${Elementos}"></span>
      <button type="button" class="btn btn-danger" onclick="eliminar(${Elementos})">Borrar</button>
      </div>
  </li>
  `
  
  ElementosLi.push({
    id: Elementos,
    Ingreso: document.getElementById("Ingreso").value,
    fechaInicio: currentdate,
    fechaFin: -1
  })

  if(clear) document.getElementById("Ingreso").value = ""
  
  Elementos++

}

const eliminar = id => {
  document.getElementById(`uwu-${id}`).remove()
  ElementosLi[id].fechaInicio = -1
}

const completado = id => {
  if (document.getElementById(`fecha-${id}`).innerHTML) return
  let currentdate = new Date();
  let datetime = currentdate.getHours() + ":"  + currentdate.getMinutes() + ":" + currentdate.getSeconds()
  
  document.getElementById(`fecha-${id}`).innerHTML = `Completo: ${datetime}`
  document.getElementById(`check-${id}`).setAttribute("disabled", true)

  ElementosLi[id].fechaFin = currentdate
}

const tareaMasRapida = () => {

  const completadas = document.getElementsByClassName("tareaMasRapida")
  for(let Ingreso of completadas) {
      Ingreso.classList.remove("tareaMasRapida")
  }

  let tareaMasRapida = new Date()
  tareaMasRapida = 0
  console.log(tareaMasRapida)
  let idMasRapida = 0
  for (let i = 0; i < ElementosLi.length; i++) {
      if(ElementosLi[i].fechaFin != -1 && ElementosLi[i].fechaInicio != -1){
          console.log("fecha inicio: " + ElementosLi[i].fechaInicio.getTime())
          console.log("fecha fin: " + ElementosLi[i].fechaFin.getTime())
          console.log("fecha fin - fecha inicio: " + (ElementosLi[i].fechaFin.getTime() - ElementosLi[i].fechaInicio.getTime()))

          if ((ElementosLi[i].fechaFin.getTime() - ElementosLi[i].fechaInicio.getTime()) > tareaMasRapida){
              tareaMasRapida = ElementosLi[i].fechaFin.getTime() - ElementosLi[i].fechaInicio.getTime()
              idMasRapida = i
          }
      }
  }
  console.log("fin: " + tareaMasRapida)

  if (tareaMasRapida == 0){
    document.getElementById("tareaMasRapida").value = "no hay tarea mas rapida"
  } 
  else {
      document.getElementById("tareaMasRapida").value = ElementosLi[idMasRapida].Ingreso
      document.getElementById("uwu-" + ElementosLi[idMasRapida].id).classList.add("tareaMasRapida")
  }
}