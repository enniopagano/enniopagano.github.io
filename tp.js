// import * as math from 'math';
var a, f, ffd, ffe, fuerzaNeta, fx, g, inc, m, materialIndex, pesoy, ud, ue;
g = 9.8;
let checkP = document.getElementById("planoS");
let checkF = document.getElementById("friccionS");

function calcular(){
  m = parseFloat(document.getElementById("Masa").value);
  f = parseFloat(document.getElementById("Fuerza").value);
  fx = f;
  pesoy = m * g;
  console.log(m);
  console.log(f);
  let resultado = document.getElementById("resultado");

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
    let ce = document.getElementById("coeficienteEstatico");
    let cd = document.getElementById("coeficienteDinamico");
    materialIndex = ms.selectedIndex;
    console.log(materialIndex);
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
                    } else {
                      if (materialIndex == "9") {
                        ce.innerHTML=`
                        <label class="col-form-label mt-4">Coeficiente de fricción estático</label>
                        <input type="number" class="form-control" id="ueInput" placeholder="">
                        `
                        let ueInput = parseFloat(document.getElementById("ueInput").value);
                        ue = ueInput;
                        cd.innerHTML=`
                        <label class="col-form-label mt-4">Coeficiente de fricción dinámico</label>
                        <input type="number" class="form-control" id="udInput" placeholder="">
                        `
                        let udInput = parseFloat(document.getElementById("udInput").value);
                        ud = udInput;
                        console.log(ue);
                        console.log(ud);
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
  }
  console.log(ue);
  console.log(ud);
  ffe = ue * pesoy;
  ffd = ud * pesoy;
  fuerzaNeta = fx - ffd;
}

if (prompt("¿Hay friccion? (s/n) ") === "s") {
  materialIndex = prompt("¿Que materiales componen a los cuerpos?\na. Madera sobre madera\nb. Acero sobre hielo\nc. Tefón sobre teflón\nd. Caucho sobre cemento seco\ne. Vidrio sobre vidrio\nf. Esquí sobre nieve\ng. Madera sobre cuero\nh. Aluminio sobre acero\ni. Articulaciones humanas\nj. Personalizado\n");

  if (materialIndex === "a") {
    ue = 0.5;
    ud = 0.3;
  } else {
    if (materialIndex === "b") {
      ue = 0.03;
      ud = 0.02;
    } else {
      if (materialIndex === "c") {
        ue = 0.04;
        ud = 0.04;
      } else {
        if (materialIndex === "d") {
          ue = 1;
          ud = 0.8;
        } else {
          if (materialIndex === "e") {
            ue = 0.9;
            ud = 0.4;
          } else {
            if (materialIndex === "f") {
              ue = 0.1;
              ud = 0.05;
            } else {
              if (materialIndex === "g") {
                ue = 0.5;
                ud = 0.4;
              } else {
                if (materialIndex === "h") {
                  ue = 0.61;
                  ud = 0.47;
                } else {
                  if (materialIndex === "i") {
                    ue = 0.02;
                    ud = 0.003;
                  } else {
                    if (materialIndex === "j") {
                      ue = parseFloat(input("Coeficiente de friccion estatico: "));
                      ud = parseFloat(input("Coeficiente de friccion dinamico: "));
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

  ffe = ue * pesoy;
  ffd = ud * pesoy;
  fuerzaNeta = fx - ffd;

  if (ffe > Math.abs(fx)) {
    console.log("Fuerza Aplicada:", f, "Newton\nFuerza de Friccion Estatica:", ffe, "Newton\nEste objeto no se mueve porque la friccion entre los cuerpos es muy grande");
    exit();
  } else {
    a = fuerzaNeta / m;
  }
} else {
  a = fx / m;

  if (a === 0) {
    console.log("Este objeto no se mueve");
  }
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
          <option>Personalizado</option>
      </select>
    `
  } else {
    friccionq.innerHTML = ``
  }
}


console.log("El objeto tiene una aceleracion de", a, "m/s^2 (Valor positivo: movimiento -> Valor negativo: <-)");