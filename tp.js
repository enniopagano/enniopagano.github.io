// import * as math from 'math';
var a, f, ffd, ffe, fuerzaNeta, fx, g, inc, m, material, pesoy, ud, ue;
m = Number.parseFloat(prompt("Ingrese la masa del cuerpo (Kilogramos) "));
f = Number.parseFloat(prompt("Ingrese la fuerza aplicada al cuerpo (Newton)(Ingresar valor negativo (-) para mover el objeto en la direccion opuesta) "));
g = 9.8;
fx = f;
pesoy = m * g;

if (prompt("¿El plano esta inclinado? (s/n) ") === "s") {
  inc = Number.parseInt(prompt("¿Cuantos grados(°) esta inclinado el plano? "));

  while (inc > 90 || inc < 0) {
    console.log("No es posible, ingrese otro valor ");
    inc = Number.parseInt(prompt("¿Cuantos grados(°) esta inclinado el plano? "));
  }

  fx = fx + m * g * Math.sin(inc * Math.PI / 180);
  pesoy = m * g * Math.cos(inc * Math.PI / 180);
}

if (prompt("¿Hay friccion? (s/n) ") === "s") {
  material = prompt("¿Que materiales componen a los cuerpos?\na. Madera sobre madera\nb. Acero sobre hielo\nc. Tefón sobre teflón\nd. Caucho sobre cemento seco\ne. Vidrio sobre vidrio\nf. Esquí sobre nieve\ng. Madera sobre cuero\nh. Aluminio sobre acero\ni. Articulaciones humanas\nj. Personalizado\n");

  if (material === "a") {
    ue = 0.5;
    ud = 0.3;
  } else {
    if (material === "b") {
      ue = 0.03;
      ud = 0.02;
    } else {
      if (material === "c") {
        ue = 0.04;
        ud = 0.04;
      } else {
        if (material === "d") {
          ue = 1;
          ud = 0.8;
        } else {
          if (material === "e") {
            ue = 0.9;
            ud = 0.4;
          } else {
            if (material === "f") {
              ue = 0.1;
              ud = 0.05;
            } else {
              if (material === "g") {
                ue = 0.5;
                ud = 0.4;
              } else {
                if (material === "h") {
                  ue = 0.61;
                  ud = 0.47;
                } else {
                  if (material === "i") {
                    ue = 0.02;
                    ud = 0.003;
                  } else {
                    if (material === "j") {
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
  var check = document.getElementById("planoS")
  const planoq = document.getElementById("planoq");
  if (check.checked == true){
    planoq.innerHTML = `
      <label class="col-form-label mt-4">¿A cuántos grados está inclinado el cuerpo?</label>
      <input type="number" class="form-control" id="inputDefault" placeholder="(°)">
    `
  } else {
    planoq.innerHTML = ``
  }
}
function friccionq() {
  var check = document.getElementById("friccionS")
  const friccionq = document.getElementById("friccionq");
  if (check.checked == true){
    friccionq.innerHTML = `
      <label class="col-form-label mt-4">¿Qué materiales componen los cuerpos?</label>
      <select multiple="" class="form-select" id="exampleSelect2">
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