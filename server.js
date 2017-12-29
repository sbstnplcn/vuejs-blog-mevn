'use strict'
// Set up ======================================================================
let http = require('http')
let express = require('express')
let app = exports.app = express()
let bodyParser = require('body-parser')
let methodOverride = require('method-override')
let morgan = require('morgan')
let routes = require('./app/routes')
const ENV = require('./config/env')
const port = process.env.PORT || 8000

app.use((req, res, next) => {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080')
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true)
    // Pass to next layer of middleware
    next()
})

// Indication du dossier de notre application Angular
app.use(express.static(__dirname + '/public'))
    // Configuration des logs
app.use(morgan('combined'))
    // Configuration du parser pour récupérer les infos des requêtes
app.use(bodyParser.urlencoded({
    'extended': 'true'
}))
app.use(bodyParser.json())
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}))

app.use(methodOverride('X-HTTP-Method-Override'))

//Charger toutes les routes
app.use('/api', routes())

// Création du serveur
let server = http.Server(app)
    // Mise en écoute
server.listen(port)
console.log(`server listening on port ${port}`)

//Méthode pour quitter "proprement" l'application
process.on('SIGINT', function() {
    console.log("\nStopping...")
    process.exit()
})

// Connexion à mongodb via mongoose
let mongoose = require('mongoose')
mongoose.connect(ENV.db)

// Création d'un middleware pour logger les erreurs
app.use((error, request, response, next) => {
    // Middleware to catch all errors
    console.error(error.stack)
    response.status(500).send(error.message)
})
