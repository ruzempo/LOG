<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="Pokedesk.aspx.vb" Inherits="Pokedesk.Pokedesk" %>



<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Pokedesk</title>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    
    <!-- BD Historico -->
    <script type="text/javascript">
        var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

        function startDB() {
            dataBase = indexedDB.open("object", 1);
            dataBase.onupgradeneeded = function (e) {
                active = dataBase.result;
                object = active.createObjectStore("historico", { keyPath: 'id', autoIncrement: true });
                object.createIndex('by_name', 'nombre', { unique: false });
                object.createIndex('by_imagen', 'imagen', { unique: false });
            };

            dataBase.onsuccess = function (e) {
                alert('Base de datos cargada correctamente');

            };

            dataBase.onerror = function (e) {
                alert('Error cargando la base de datos');
            };

        }
    </script>

</head>

<body onload="startDB()";>
<header>
<div id="divBucar">
<div id="menu1" >
    <nav id="navPG" class="navbar navbar-light" style="background-color: #FDD835; "  >
    
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link active" onclick="extraeportipo(10,1)" href="#">Fuego</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" onclick="extraeportipo(11,1)" href="#">Agua</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" onclick="extraeportipo(12,1)" href="#">Hierba</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" onclick="loadAll()" href="#">Hstorico</a>
          </li>
        </ul>
        <div id="divBucar1">
            <form class="form-inline my-2 my-lg-0">
              <input id="bucapokemon1" class="form-control mr-sm-2" type="search" placeholder="Nombre Pokemon" aria-label="Buscar" />
              <button class="btn btn-outline-success my-2 my-sm-0" onclick="buscapokemon('1')" type="submit">Buscar</button>
            </form>
        </div>
    </nav>
</div>

    <div id="menu2" >
        <nav class="navbar navbar-expand-sm navbar-light bg-light">
                <ul class="navbar-nav">
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Tipo pokemon
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <a class="dropdown-item" onclick="extraeportipo(10,2)" href="#">Fuego</a>
                      <a class="dropdown-item" onclick="extraeportipo(11,2)" href="#">Agua</a>
                      <a class="dropdown-item" onclick="extraeportipo(12,2)" href="#">Hierba</a>
                      <a class="dropdown-item" onclick="loadAll()" href="#">Hstorico</a>
                    </div>
                  </li>
                </ul>
    
            <div id="divBucar2">
                <form class="form-inline my-2 my-lg-0">
                  <input id="bucapokemon2" class="form-control mr-sm-2" type="search" placeholder="Nombre Pokemon" aria-label="Buscar" />
                  <button  class="form-control btn btn-outline-success my-2 my-sm-0" onclick="buscapokemon('2')" type="submit">Buscar</button>
                </form> 
            </div>  
        </nav>
     </div>
</div>


</header>
    <br /><br />
     <!-- Panel para pantalla chica -->
    <asp:Panel runat="server" ID="pnlchica" Visible="true">
        <br />
        <div id="TPokemones" style="overflow:auto;">                                 
             <table class="tabla-pokedex" id="TablaPokemones" "> <!-- Esta tabla se llena  -->
                <thead>
                  </thead>
                  <tbody>
               </tbody>
            </table>  
         </div>  

    </asp:Panel>

<div id="divTablaPokemones"></div>

        <!-- Pantalla modal para detalle de pokemon seleccionado -->
        <div class="modal fade" id="mdlDetallePokemon" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                         <h5 class="modal-title" id="exampleModalLabel">Detalle Pokemon</h5>
                    </div>
                    <div class="modal-body">
                        <div id="divimgcard" class="card mb-3" style="max-width: 540px;">
                          <div class="row no-gutters">
                            <div class="col-md-4">
                              <img id="imgcard"  class="form-control card-img" alt="...">
                            </div>
                            <div class="col-md-8">
                              <div class="card-body">
                                
                                <input type="text" id="titulocard" class="form-control card-title" />
                                <ul class="nav nav-tabs" id="myTab" role="tablist">
                                  <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Pokédex</a>
                                  </li>
                                  <li class="nav-item">
                                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Stats</a>
                                  </li>
                                  <li class="nav-item">
                                    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Evolution</a>
                                  </li>
                                </ul>
                                <div class="tab-content" id="myTabContent">
                                  <div class="tab-pane fade show active" id="home" style="font-size:10px" role="tabpanel" aria-labelledby="home-tab">
                                      <form>            
                                              <input type="text" class="form-control" id="txtType"  placeholder="tipo" />
                                              <input type="text" class="form-control" id="txtHeight" placeholder="altura" />
                                              <input type="text" class="form-control" id="txtWeight" placeholder="peso" />
                                              <textarea rows="2" cols="50" class="form-control" id="txtAbilities" ></textarea>
                                      </form>
                                  </div>
                                  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                     <form>            
                                              <input type="text" class="form-control" id="txtHP"  placeholder="HP" />
                                              <input type="text" class="form-control" id="txtAttack" placeholder="Attack" />
                                              <input type="text" class="form-control" id="txtDefense" placeholder="Defense" />
                                              <input type="text" class="form-control" id="txtSpeed" placeholder="Speed" />
                                      </form>
                                  </div>
                                  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                      <img id="img1"  class="form-control card-img" alt="...">

                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
      </div>


<!-- Pantalla modal para mostrar historico -->
<div class="modal fade" id="mdlHistoricoPokemon" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Historico Pokemon</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>






<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>
 
   
       
    <script type="text/javascript" src="scripts/Generales.js"></script>
    <link href="scripts/formatos.css" rel="stylesheet" />
</html>
