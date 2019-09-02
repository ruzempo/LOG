Public Class cryptoAcount

    'Atributos

    Private _nombre As String
    Private _simbolo As String
    Private _balance As Double
    Private _proporcionUSD As Double
    Private _url As String

    'Propiedades

    Public Property nombre As String
        Get
            Return _nombre
        End Get
        Set(value As String)
            _nombre = value
        End Set
    End Property

    Public Property simbolo As String
        Get
            Return _simbolo
        End Get
        Set(value As String)
            _simbolo = value
        End Set
    End Property


    Public Property balance As Double
        Get
            Return _balance
        End Get
        Set(value As Double)
            _balance = value
        End Set
    End Property


    Public Property proporcionUSD As Double
        Get
            Return _proporcionUSD
        End Get
        Set(value As Double)
            _proporcionUSD = value
        End Set
    End Property
    Public Property url As String
        Get
            Return _url
        End Get
        Set(value As String)
            _url = value
        End Set
    End Property


    'Metodos
    Function transferir(cta1 As String, cta2 As String, cantidad As Double) As Boolean

        Return True
    End Function
End Class
