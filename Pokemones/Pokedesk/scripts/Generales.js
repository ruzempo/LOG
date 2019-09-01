function MostrarModal(modal) {
    $('#' + modal).modal('show');
}

function extraeportipo(tipo, menu) {
    
    var pokenombres;
    fetch(`https://pokeapi.co/api/v2/type/${tipo}`)
    .then(function (response) {
        response.json()
        .then(function (type) {
            var cuenta = type.pokemon.length;
            //pokenombre[pokenombre.length]=cuenta - 1
            for (i = 0; i <= cuenta - 1; i++) {

                pokenombres = pokenombres + '|' + type.pokemon[i].pokemon.name;
            }
            //alert(pokenombres);

            extraeimg(pokenombres, menu);
        })
    })

}

function extraeimg(nombre, menu) {

    var pokenombres = nombre.split("|");
    var pokeimg;
    var contador = 0;
    var konto = pokenombres.length;
    var pokeimgarr = new Array(konto - 1);
    for (j = 0; j <= konto - 1; j++) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokenombres[j]}`)
        .then(response => response.json())
        .then(function (pokemon) {
            pokeimg = pokeimg + '|' + pokemon.sprites.front_default;
            if (contador >= j - 2) {

                if (menu == "1") {

                    muestraPokemones4(nombre, pokeimg);

                } else {
                    
                    muestraPokemones(nombre, pokeimg);
                }
                
            } else {
                contador = contador + 1;
            }
        });
    }
}

function muestraPokemones(nombres, imgs) {

    var pokenombres = nombres.split("|");
    //alert(nombres);
    var pokeimgs = imgs.split("|");
    //alert(imgs);
    var tam = pokenombres.length;

    document.getElementById("TablaPokemones").innerHTML = "";
    var d = '<tr>' +
        '<th>Pokédex</th>' +
        '</tr>';
    for (i = 0; i <= tam - 1; i++) {
        if (pokenombres[i] != 'undefined'){
            d += '<tr>' +
             '<td>' + pokenombres[i] + '</td>' +
             '</tr>' +
             '<tr>' +
             '<td><img onclick="detallepokemon(this)" src="' + pokeimgs[i] + '"/>' + pokenombres[i] + '</td>' +
             '</tr>';
        }
    }
    $("#TablaPokemones").append(d);
}

function PokemonxTipo(tipo) {

    fetch(`https://pokeapi.co/api/v2/type/${tipo}`)
    .then(function (response) {
        response.json()
        .then(function (type) {
            var cuenta = type.pokemon.length
            var pokenombre = new Array(cuenta - 1)
            for (i = 0; i <= cuenta - 1; i++) {
                pokenombre[i] = type.pokemon[i].pokemon.name
            }
            alert(pokenombre.length);
        })
    })


}

function buscapokemon(n) {

    var nompoke;
    var div = document.getElementById('divBucar');
    var campos = div.getElementsByClassName('form-control');
    for (var c = 0; c <= campos.length - 1; c++) {

        switch (campos[c].id) {

            case 'bucapokemon1':
                var nompoke1 = campos[c].value;
                break;
            case 'bucapokemon2':
                var nompoke2 = campos[c].value;
                break;
        }
    }
    if (n == "1") {
        nompoke = nompoke1
    } else {
        nompoke = nompoke2
    }
    
    var tam, cad;
    var rta, tipo, altura, peso, habilidades;
    var HP, Attack, Defense, Speed, img;

    fetch(`https://pokeapi.co/api/v2/pokemon/${nompoke}`)
    .then(function (response) {
        response.json()
        .then(function (pokemon) {
            rta = pokemon.sprites.front_default;
            tipo = "Type: " + pokemon.types[0].type.name;
            altura = "Height: " + pokemon.height;
            peso = "Weight: " + pokemon.weight;
            tam = pokemon.abilities.length;
            cad = " ";
            for (i = 0; i <= tam - 1; i++) {
                cad = pokemon.abilities[i].ability.name + " | " + cad;
            }
            habilidades = "Abilities: " + cad;
            HP = pokemon.stats[5].stat.name + ": " + pokemon.stats[5].base_stat;
            Attack = pokemon.stats[4].stat.name + ": " + pokemon.stats[4].base_stat;
            Defense = pokemon.stats[3].stat.name + ": " + pokemon.stats[3].base_stat;
            Speed = pokemon.stats[0].stat.name + ": " + pokemon.stats[0].base_stat;
            img = pokemon.sprites.front_default;
            MostrarModal('mdlDetallePokemon');
            LlenaDetallePokemon(rta, nompoke, tipo, altura, peso, habilidades, HP, Attack, Defense, Speed, img);
        })
    })

}


function detallepokemon(control) {
    var tam, cad;
    var tr = control.parentNode.parentNode;
    var td = tr.cells[0];//Nombre
    var pokemono = td.innerText;
    var rta, tipo, altura, peso,habilidades;
    var HP, Attack, Defense, Speed, img;

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemono}`)
    .then(function (response) {
        response.json()
        .then(function (pokemon) {
            rta = pokemon.sprites.front_default;
            tipo = "Type: " + pokemon.types[0].type.name;
            altura = "Height: " + pokemon.height;
            peso = "Weight: " + pokemon.weight;
            tam = pokemon.abilities.length;
            cad = " ";
            for (i = 0; i <= tam - 1; i++) {
                    cad = pokemon.abilities[i].ability.name + " | " + cad;           
            }
            habilidades = "Abilities: " + cad;
            HP = pokemon.stats[5].stat.name + ": " + pokemon.stats[5].base_stat;
            Attack = pokemon.stats[4].stat.name + ": " + pokemon.stats[4].base_stat;
            Defense = pokemon.stats[3].stat.name + ": " + pokemon.stats[3].base_stat;
            Speed = pokemon.stats[0].stat.name + ": " + pokemon.stats[0].base_stat;
            img = pokemon.sprites.front_default;
            MostrarModal('mdlDetallePokemon');
            LlenaDetallePokemon(rta, pokemono, tipo, altura, peso, habilidades, HP, Attack, Defense, Speed, img);
        })
    })

}

function detallepokemon4(nombre) {
    var tam, cad;
    var rta, tipo, altura, peso, habilidades;
    var HP, Attack, Defense, Speed, img;

    fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
    .then(function (response) {
        response.json()
        .then(function (pokemon) {
            rta = pokemon.sprites.front_default;
            tipo = "Type: " + pokemon.types[0].type.name;
            altura = "Height: " + pokemon.height;
            peso = "Weight: " + pokemon.weight;
            tam = pokemon.abilities.length;
            cad = " ";
            for (i = 0; i <= tam - 1; i++) {
                cad = pokemon.abilities[i].ability.name + " | " + cad;
            }
            habilidades = "Abilities: " + cad;
            HP = pokemon.stats[5].stat.name + ": " + pokemon.stats[5].base_stat;
            Attack = pokemon.stats[4].stat.name + ": " + pokemon.stats[4].base_stat;
            Defense = pokemon.stats[3].stat.name + ": " + pokemon.stats[3].base_stat;
            Speed = pokemon.stats[0].stat.name + ": " + pokemon.stats[0].base_stat;
            img = pokemon.sprites.front_default;
            MostrarModal('mdlDetallePokemon');
            LlenaDetallePokemon(rta, nombre, tipo, altura, peso, habilidades, HP, Attack, Defense, Speed, img);
        })
    })

}

function LlenaDetallePokemon(imagen, pokemono, tipo, altura, peso, habilidades, HP, Attack, Defense, Speed, img) {
    var div = document.getElementById('divimgcard');
    var campos = div.getElementsByClassName('form-control');
    for (var c = 0; c <= campos.length - 1; c++) {
        switch (campos[c].id) {
            case 'imgcard':
                campos[c].src=imagen;
                break;
            case 'titulocard':
                campos[c].value = pokemono;
                break;
            case 'txtType':
                campos[c].value = tipo;
                break;
            case 'txtHeight':
                campos[c].value = altura;
                break;
            case 'txtWeight':
                campos[c].value = peso;
                break;
            case 'txtAbilities':
                campos[c].value = habilidades;
                break;
            case 'txtHP':
                campos[c].value = HP;
                break;
            case 'txtAttack':
                campos[c].value = Attack;
                break;
            case 'txtDefense':
                campos[c].value = Defense;
                break;
            case 'txtSpeed':
                campos[c].value = Speed;
                break;
            case 'img1':
                campos[c].src = img;
                break;
        }
    }
    add(pokemono, imagen);
}

function CreaTabla() {

    var body = document.getElementsByTagName("body")[0];


    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");


    for (var i = 0; i < 4; i++) {

        var hilera = document.createElement("tr");

        for (var j = 0; j < 4; j++) {

            var celda = document.createElement("td");
            var textoCelda = document.createTextNode("celda en la hilera " + i + ", columna " + j);
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
        }

        tblBody.appendChild(hilera);
    }

    tabla.appendChild(tblBody);

    body.appendChild(tabla);

    tabla.setAttribute("border", "1");
}

function muestraPokemones4(nombres, imgs) {
    document.getElementById("divTablaPokemones").innerHTML = "";
    var pokenombres = nombres.split("|");
    var pokeimgs = imgs.split("|");
    var tam = pokenombres.length;


    //var body = document.getElementsByTagName("body")[0];
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");
    var konto = 1;
    /*Columnas*/
    var cuenta= (tam -1)/4
    for (var i = 0; i < cuenta.toFixed(0); i++) {
        var hilera = document.createElement("tr"); //Encabezados

        for (var j = 0; j < 4; j++) { //Celdas
            var celda = document.createElement("td");
            var nombre = document.createTextNode(pokenombres[konto]);
            var imagenTx = document.createElement("img");
            if (pokenombres[konto] != "undefined") {
                imagenTx.src = pokeimgs[konto];
                imagenTx.setAttribute("alt",pokenombres[konto]);
                imagenTx.setAttribute("width", "100%");
                imagenTx.setAttribute("height", "100%");               
            celda.appendChild(imagenTx);
            celda.appendChild(nombre);
            hilera.appendChild(celda);
            }
            konto = konto + 1;

        }
        tblBody.appendChild(hilera);
    }

    tabla.appendChild(tblBody);
    document.getElementById("divTablaPokemones").appendChild(tabla);
    tabla.setAttribute("border", "1");
    tabla.setAttribute("align", "center");
    tabla.setAttribute("text-align", "center");

    var arreglo = Array.from(document.querySelectorAll('img[alt]'));

    for (var i = 0; i < arreglo.length; i++) {
        var elemento = arreglo[i];
        const texto = elemento.alt.trim();
        elemento.onclick = function () {
            detallepokemon4(texto);
            //alert(texto);
        };
    }
}


function add(nom, img) {
    var active = dataBase.result;
    var data = active.transaction(["historico"], "readwrite");
    var object = data.objectStore("historico");

    var request = object.put({
        nombre: nom,
        imagen: img,
    });

    request.onerror = function (e) {
        alert(request.error.name + '\n\n' + request.error.message);
    };

    data.oncomplete = function (e) {
        nombre = '';
        imagen = '';
        //alert('Objeto agregado correctamente');
    };

}


function loadAll() {
    var active = dataBase.result;
    var data = active.transaction(["historico"], "readonly");
    var object = data.objectStore("historico");

    var elements = [];

    object.openCursor().onsuccess = function (e) {

        var result = e.target.result;

        if (result === null) {
            return;
        }

        elements.push(result.value);
        result.continue();

    };

    data.oncomplete = function () {

        var historia = '';

        for (var key in elements) {

            historia=historia + ' - ' + elements[key].nombre + " | " + elements[key].imagen + '\n';

        }
        elements = [];
        alert(historia);
    }


}