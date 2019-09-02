<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="CryptoFolio.aspx.vb" Inherits="Pokedesk.CryptoFolio" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>CryptoFolio</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    
</head>
<body> <div id="contenedor">
    <div id="barra" "><h4>Crypto Folio</h4></div>
    <form id="formulario" runat="server" >
   
          <div class="form-row">
            <div class="form-group col-md-4">
              <input type="text" value="0" class="form-control" id="txtCuenta1"/>
            </div>
            <div class="form-group col-md-2">
              <asp:DropDownList runat="server" id="cmbMoneda1" class="form-control" AutoPostBack="true">
                <asp:ListItem selected="True">Seleccione...</asp:ListItem>
                <asp:ListItem>BTC</asp:ListItem>
                <asp:ListItem>ETH</asp:ListItem>
                <asp:ListItem>LTC</asp:ListItem>
                <asp:ListItem>PRG</asp:ListItem>
              </asp:DropDownList>
            </div>
            <div class="form-group col-md-4">
              <input type="text"  value="0" class="form-control" id="txtTransfer" />
            </div>
             <div class="form-group col-md-2">
              <select id="cmbMonedaTransf1" class="form-control">
                <option selected>Seleccione...</option>
                <option>BTC</option>
                <option>ETH</option>
                <option>LTC</option>
                <option>PRG</option>
              </select>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group col-md-4">
              <input type="text" value="0" class="form-control" id="txtCuenta2"/>
            </div>
            <div class="form-group col-md-2">
              <asp:DropDownList runat="server" id="cmbMoneda2" class="form-control" AutoPostBack="true">
                <asp:ListItem selected="True">Seleccione...</asp:ListItem>
                <asp:ListItem>BTC</asp:ListItem>
                <asp:ListItem>ETH</asp:ListItem>
                <asp:ListItem>LTC</asp:ListItem>
                <asp:ListItem>PRG</asp:ListItem>
              </asp:DropDownList>
            </div>
            <div class="form-group col-md-4">
              <label id="lblTransfiere" class="float-right" >Transfiere a:</label>
            </div>
             <div class="form-group col-md-2">
              <select id="cmbMonedaTransf2" class="form-control">
                <option selected>Seleccione...</option>
                <option>BTC</option>
                <option>ETH</option>
                <option>LTC</option>
                <option>PRG</option>
              </select>
            </div>
          </div>

         <div class="form-row">
            <div class="form-group col-md-4">
              <input type="text" value="0" class="form-control" id="txtCuenta3"/>
            </div>
            <div class="form-group col-md-2">
              <asp:DropDownList runat="server" id="cmbMoneda3"  class="form-control" AutoPostBack="true">
                <asp:ListItem selected="True">Seleccione...</asp:ListItem>
                <asp:ListItem>BTC</asp:ListItem>
                <asp:ListItem>ETH</asp:ListItem>
                <asp:ListItem>LTC</asp:ListItem>
                <asp:ListItem>PRG</asp:ListItem>
              </asp:DropDownList>
            </div>
            <div class="form-group col-md-6">
              <button type="submit" class="btn btn-primary float-right">Transferir</button>
            </div>
          </div>

          <div class="form-group col-md-6">
              <hr />
          </div>

          <div class="form-row" >
            <div class="form-group col-md-2">
              <label id="lblGT" class="float-right" >Gran Total:</label>
            </div>
            <div class="form-group col-md-2">
              <input type="text" value="0" class="form-control" id="txtCuenta4"/>
            </div>
            <div class="form-group col-md-2">
              <select id="cmbMoneda4" class="form-control">
                <option selected>Seleccione...</option>
                <option>USD</option>
              </select>
            </div>
          </div>  

   


</form>
    </div>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

    <script type="text/javascript" src="scripts/Generales.js"></script>
    <link href="scripts/formatoCrypto.css" rel="stylesheet" />
</body>
</html>
