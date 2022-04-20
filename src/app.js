window.onload = function() {
    let pinta_random = "";
    let numero_random = "";
    let cartas_creadas = [];
    let pull_pinta = ["♦", "♥", "♠", "♣"];
    let pull_numero = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  
    function crear_carta(numero_cartas) {
      let i = 0;
      while (numero_cartas > i) {
        i++;
        pinta_random = Math.floor(Math.random() * (4 - 0)) + 0;
        numero_random = Math.floor(Math.random() * (13 - 0)) + 0;
        let contenedor = document.getElementById("contenedo_random");
  
        let carta = document.createElement("div");
        carta.classList.add("carta");
        let pinta = document.createElement("div");
        pinta.classList.add("pinta");
        carta.appendChild(pinta);
        pinta.innerHTML = pull_pinta[pinta_random];
        let numero = document.createElement("div");
        numero.classList.add("numero");
        carta.appendChild(numero);
        numero.innerHTML = pull_numero[numero_random];
        let pinta2 = document.createElement("div");
        pinta2.classList.add("pinta2");
        carta.appendChild(pinta2);
        pinta2.innerHTML = pull_pinta[pinta_random];
        contenedor.appendChild(carta);
        let p = pull_pinta[pinta_random];
        let n = pull_numero[numero_random];
        if (n == "A") {
          n = 1;
        }
        if (n == "J") {
          n = 11;
        }
        if (n == "Q") {
          n = 12;
        }
        if (n == "K") {
          n = 13;
        }
  
        cartas_creadas.push({
          pinta: p,
          numero: n
        });
        if (pinta_random == 2 || pinta_random == 3) {
          pinta.classList.add("text-dark");
          pinta2.classList.add("text-dark");
          numero.classList.add("text-dark");
          pinta.classList.remove("text-red");
          pinta2.classList.remove("text-red");
          numero.classList.remove("text-red");
        } else {
          pinta.classList.add("text-red");
          pinta2.classList.add("text-red");
          numero.classList.add("text-red");
          pinta.classList.remove("text-dark");
          pinta2.classList.remove("text-dark");
          numero.classList.remove("text-dark");
        }
      }
      return;
    }
    function sort() {
      let i = cartas_creadas.length - 1;
      while (i > 0) {
        let contador = 0;
        while (contador < i) {
          if (
            cartas_creadas[contador].numero > cartas_creadas[contador + 1].numero
          ) {
            let guardar_carta = cartas_creadas[contador];
            cartas_creadas[contador] = cartas_creadas[contador + 1];
            cartas_creadas[contador + 1] = guardar_carta;
          }
          contador++;
          crear_carta_ordenadas(cartas_creadas);
        }
  
        i--;
      }
      return cartas_creadas;
    }
    function crear_carta_ordenadas(cartas_creadas) {
      let j = 0;
      let div_ordenado2 = document.createElement("div");
      let numero_de_orden = document.createElement("p");
      numero_de_orden.classList.add("numero_de_orden");
      numero_de_orden.innerHTML = "Ordenando ";
      div_ordenado2.appendChild(numero_de_orden);
  
      div_ordenado2.classList.add("lineacartas");
      while (j < cartas_creadas.length) {
        if (cartas_creadas[j].numero == 1) {
          cartas_creadas[j].numero = "A";
        }
        if (cartas_creadas[j].numero == 11) {
          cartas_creadas[j].numero = "J";
        }
        if (cartas_creadas[j].numero == 12) {
          cartas_creadas[j].numero = "Q";
        }
        if (cartas_creadas[j].numero == 13) {
          cartas_creadas[j].numero = "K";
        }
        let contenedor = document.getElementById("contenedor_ordenado");
        contenedor.appendChild(div_ordenado2);
        let carta = document.createElement("div");
        carta.classList.add("carta");
        let pinta = document.createElement("div");
        pinta.classList.add("pinta");
        carta.appendChild(pinta);
        pinta.innerHTML = cartas_creadas[j].pinta;
        let numero = document.createElement("div");
        numero.classList.add("numero");
        carta.appendChild(numero);
        numero.innerHTML = cartas_creadas[j].numero;
        let pinta2 = document.createElement("div");
        pinta2.classList.add("pinta2");
        carta.appendChild(pinta2);
        pinta2.innerHTML = cartas_creadas[j].pinta;
        div_ordenado2.appendChild(carta);
        if (cartas_creadas[j].pinta == "♣" || cartas_creadas[j].pinta == "♠") {
          pinta.classList.add("text-dark");
          pinta2.classList.add("text-dark");
          numero.classList.add("text-dark");
          pinta.classList.remove("text-red");
          pinta2.classList.remove("text-red");
          numero.classList.remove("text-red");
        } else {
          pinta.classList.add("text-red");
          pinta2.classList.add("text-red");
          numero.classList.add("text-red");
          pinta.classList.remove("text-dark");
          pinta2.classList.remove("text-dark");
          numero.classList.remove("text-dark");
        }
        if (cartas_creadas[j].numero == "A") {
          cartas_creadas[j].numero = 1;
        }
        if (cartas_creadas[j].numero == "J") {
          cartas_creadas[j].numero = 11;
        }
        if (cartas_creadas[j].numero == "Q") {
          cartas_creadas[j].numero = 12;
        }
        if (cartas_creadas[j].numero == "K") {
          cartas_creadas[j].numero = 13;
        }
        j++;
      }
    }
  
    let input2 = document.getElementById("input");
    let button = document.getElementById("button");
    let button_sort = document.getElementById("button_sort");
  
    button.addEventListener("click", e => {
      crear_carta(input2.value);
      console.log(cartas_creadas);
    });
  
    button_sort.addEventListener("click", e => {
      sort();
      console.log(cartas_creadas);
    });
  };
  