require('dotenv').config();

const HOST = process.env.HOST
const USER = process.env.USER
const PASSWORD = process.env.PASSWORD
const DATABASE = process.env.DATABASE
const PORTDATABASE = process.env.PORTDATABASE

module.exports = {
    user     :USER     ,
    host     :HOST     ,
    password :PASSWORD ,
    database :DATABASE ,
    portdatabase: PORTDATABASE
}