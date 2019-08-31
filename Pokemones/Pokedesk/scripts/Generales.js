function MostrarModal(modal) {
    $('#' + modal).modal('show');
}

function extraeportipo(tipo) {
    
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
            extraeimg(pokenombres);
        })
    })

}

function extraeimg(nombre) {

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
                //alert(pokeimg);
                muestraPokemones(nombre,pokeimg);
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

    tabla.setAttribute("border", "2");
}