Imports System.Web.UI
Public Class CryptoFolio
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        'creamos cuentas
        'cargamos datos en formulario
    End Sub



    Public Function CreaObjeto(simbolo As String)
        If (simbolo Is Nothing) Then 'si el objeto no esta instanciado

            Select Case simbolo
                Case "BTC"
                    Dim BTC = New cryptoAcount
                    BTC.nombre = "Bitcoin"
                    BTC.simbolo = "BTC"
                    BTC.balance = 0
                    BTC.proporcionUSD = 0
                    BTC.url = "https://www.bitcoin.com/"
                Case = "ETH"
                    Dim ETH = New cryptoAcount
                    ETH.nombre = "Ethereum"
                    ETH.simbolo = "ETH"
                    ETH.balance = 0
                    ETH.proporcionUSD = 0
                    ETH.url = "https://www.cryptocompare.com/coins/eth/overview/USD"
                Case = "LTC"
                    Dim LTC = New cryptoAcount
                    LTC.nombre = "Litecoin"
                    LTC.simbolo = "LTC"
                    LTC.balance = 0
                    LTC.proporcionUSD = 0
                    LTC.url = "https://www.cryptocompare.com/coins/ltc/overview/USD"
                Case = "PRG"
                    Dim PRG = New cryptoAcount
                    PRG.nombre = "PARAGON"
                    PRG.simbolo = "PRG"
                    PRG.balance = 0
                    PRG.proporcionUSD = 0
                    PRG.url = "https://www.cryptocompare.com/coins/prg/overview"
            End Select

            'conectamos a la api y extraemos tipo de cambio


            ClientScript.RegisterStartupScript(Me.Page.GetType, "CnxAPI", "urlCrypto(" + simbolo + ");", True)


        Else
            MsgBox("El objeto " & simbolo & ", ya esta instanciado.")
        End If
    End Function

    Protected Sub cmbMoneda1_SelectedIndexChanged(sender As Object, e As EventArgs) Handles cmbMoneda1.SelectedIndexChanged
        CreaObjeto(cmbMoneda1.SelectedItem.Text)
    End Sub

    Protected Sub cmbMoneda2_SelectedIndexChanged(sender As Object, e As EventArgs) Handles cmbMoneda2.SelectedIndexChanged
        CreaObjeto(cmbMoneda2.SelectedItem.Text)
    End Sub
    Protected Sub cmbMoneda3_SelectedIndexChanged(sender As Object, e As EventArgs) Handles cmbMoneda3.SelectedIndexChanged
        CreaObjeto(cmbMoneda3.SelectedItem.Text)
    End Sub
End Class