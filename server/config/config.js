//==============================
//Credenciales BD
//==============================
module.exports = {

    database: {
        host: 'localhost',
        user: 'root',
        password: 'root1234',
        database: 'misdatos_leal'
    }
}

//==============================
//Puerto del servidor
//==============================
process.env.PORT = process.env.PORT || 3002;

//==============================
//Fecha de expiracion del token
//==============================
//60 Segundos
//60 minutos
//24 horas
//2 dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 2;

//==============================
//SEED de autenticacion
//==============================
process.env.SEED = 'secret-leal-misdatos';