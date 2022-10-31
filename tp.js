// import * as math from 'math';
var a, f, ffd, ffe, fuerzaNeta, fx, g, inc, m, material, pesoy, ud, ue;
m = Number.parseFloat(prompt("Ingrese la masa del cuerpo (Kilogramos) "));
f = Number.parseFloat(prompt("Ingrese la fuerza aplicada al cuerpo (Newton)(Ingresar valor negativo (-) para mover el objeto en la direccion opuesta) "));
g = 9.8;
fx = f;
pesoy = m * g;

if (prompt("\u00bfEl plano esta inclinado? (s/n) ") === "s") {
  inc = Number.parseInt(input("\u00bfCuantos grados(\u00b0) esta inclinado el plano? "));

  while (inc > 90 || inc < 0) {
    console.log("No es posible, ingrese otro valor ");
    inc = Number.parseInt(prompt("\u00bfCuantos grados(\u00b0) esta inclinado el plano? "));
  }

  fx = fx + m * g * math.sin(inc * math.pi / 180);
  pesoy = m * g * math.cos(inc * math.pi / 180);
}

if (prompt("\u00bfHay friccion? (s/n) ") === "s") {
  material = input("\u00bfQue materiales componen a los cuerpos?\na. Madera sobre madera\nb. Acero sobre hielo\nc. Tefl\u00f3n sobre tefl\u00f3n\nd. Caucho sobre cemento seco\ne. Vidrio sobre vidrio\nf. Esqu\u00ed sobre nieve\ng. Madera sobre cuero\nh. Aluminio sobre acero\ni. Articulaciones humanas\nj. Personalizado\n");

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
                      ue = Number.parseFloat(input("Coeficiente de friccion estatico: "));
                      ud = Number.parseFloat(input("Coeficiente de friccion dinamico: "));
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

  if (ffe > abs(fx)) {
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

console.log("El objeto tiene una aceleracion de", a, "m/s^2 (Valor positivo: movimiento -> Valor negativo: <-)");