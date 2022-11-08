// import * as math from 'math';
let a, f, ffd, ffe, fuerzaNeta, fx, g, inc, m, materialIndex, pesoy, ud, ue;
g = 9.8;
let checkP = document.getElementById("planoS");
let checkF = document.getElementById("friccionS");

function calcular(){
  m = parseFloat(document.getElementById("Masa").value);
  f = parseFloat(document.getElementById("Fuerza").value);
  fx = f;
  pesoy = m * g;
  let resultado = document.getElementById("resultado");
  let xlr8L = document.getElementById("xlr8");
  let checkPe = document.getElementById("personalizado");

  if (checkP.checked == true){
    inc = parseFloat(document.getElementById("inc").value);
    console.log(inc);
    if (inc > 90 || inc < 0){
      let error = document.getElementById("error");
      error.innerHTML=`
      <label class="col-form-label mt-4">No es posible, ingrese otro valor</label>
      `
      resultado.innerHTML=`
      <label class="col-form-label mt-4">ERROR</label>
      `
    } else {
      fx = fx + m * g * Math.sin(inc * Math.PI / 180);
      pesoy = m * g * Math.cos(inc * Math.PI / 180);
      console.log(fx);
      console.log(pesoy);
    }
  }
  if (checkF.checked == true){  
    let ms = document.getElementById("materialSelect");
    materialIndex = ms.selectedIndex;
    if (checkPe.checked == true){
      ue = parseFloat(document.getElementById("coeE").value);
      ud = parseFloat(document.getElementById("coeD").value);
    } else {
      if (materialIndex == "0") {
        ue = 0.5;
        ud = 0.3;
      } else {
        if (materialIndex == "1") {
          ue = 0.03;
          ud = 0.02;
        } else {
          if (materialIndex == "2") {
            ue = 0.04;
            ud = 0.04;
          } else {
            if (materialIndex == "3") {
              ue = 1;
              ud = 0.8;
            } else {
              if (materialIndex == "4") {
                ue = 0.9;
                ud = 0.4;
              } else {
                if (materialIndex == "5") {
                  ue = 0.1;
                  ud = 0.05;
                } else {
                  if (materialIndex == "6") {
                    ue = 0.5;
                    ud = 0.4;
                  } else {
                    if (materialIndex == "7") {
                      ue = 0.61;
                      ud = 0.47;
                    } else {
                      if (materialIndex == "8") {
                        ue = 0.02;
                        ud = 0.003;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    console.log(ue);
    console.log(ud);
    ffe = ue * pesoy;
    ffd = ud * pesoy;
    fuerzaNeta = fx - ffd;

    if (ffe > Math.abs(fx)) {
      console.log("Fuerza Aplicada:", f, "Newton\nFuerza de Friccion Estatica:", ffe, "Newton\nEste objeto no se mueve porque la friccion entre los cuerpos es muy grande");
      resultado.innerHTML=`
      <label class="col-form-label mt-4">Este objeto no se mueve porque la fricción entre los cuerpos es muy grande</label>
      `
    } else {
      a = fuerzaNeta / m;
      console.log(a);
      resultado.innerHTML=`
      <label class="col-form-label mt-4">Este objeto se mueve</label>
      `
    }
  } else {
    a = fx / m;
    xlr8 = "La aceleración del objeto es " + a + "m/s^2 (Valor positivo: movimiento -> Valor negativo: <-)";
    console.log(xlr8);
    if (isNaN(a)){
      resultado.innerHTML=`
      <label class="col-form-label mt-4">Este objeto no se mueve</label>
      `
    } else {
      xlr8L.innerHTML= xlr8
    }
  }
  console.log(a);
}

function planoq() {
  const planoq = document.getElementById("planoq");
  if (checkP.checked == true){
    planoq.innerHTML = `
      <label class="col-form-label mt-4">¿A cuántos grados está inclinado el cuerpo?</label>
      <input type="number" class="form-control" id="inc" placeholder="(°)">
    `
  } else {
    planoq.innerHTML = ``
  }
}

function friccionq() {
  const friccionq = document.getElementById("friccionq");
  if (checkF.checked == true){
    friccionq.innerHTML = `
      <label class="col-form-label mt-4">¿Qué materiales componen los cuerpos?</label>
      <select class="form-select" id="materialSelect">
          <option>Madera sobre madera</option>
          <option>Acero sobre hielo</option>
          <option>Teflón sobre teflón</option>
          <option>Caucho sobre cemento seco</option>
          <option>Vidrio sobre vidrio</option>
          <option>Esquí sobre nieve</option>
          <option>Madera sobre cuero</option>
          <option>Aluminio sobre acero</option>
          <option>Articulaciones humanas</option>
      </select>
      <label for="exampleSelect1" class="form-label mt-4">Personalizado</label>
      <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" id="personalizado" onclick="personalizado()">
      </div>
      
    `
  } else {
    friccionq.innerHTML = ``
  }
}
function personalizado() {
  let cE = document.getElementById("coeficienteEstatico");
  let cD = document.getElementById("coeficienteDinamico");
  let checkPe = document.getElementById("personalizado");
  console.log(cD)
  if (checkPe.checked == true){
    cE.innerHTML=`
      <label class="col-form-label mt-4">Coeficiente de fricción estático</label>
      <input type="number" class="form-control" id="coeE" placeholder="">
    `
    cD.innerHTML=`
      <label class="col-form-label mt-4">Coeficiente  de fricción dinámico</label>
      <input type="number" class="form-control" id="coeD" placeholder="">
    `
  } else {
    cE.innerHTML=``
    cD.innerHTML=``
  }
}


console.log("El objeto tiene una aceleracion de", a, "m/s^2 (Valor positivo: movimiento -> Valor negativo: <-)");