let express = require('express')
let manga = require('./manga.min.json')
let ejs = require('ejs')
let app = express()

app.set('view engine, ejs')
app.use(express.static('./public'))

app.get('/', function(req, res) {
	// console.log({manga})
	res.render("index.ejs", { manga })
})

app.listen(3000, function(){
	console.log('Server initialised on port: 3000')
})

// function getJson(req, res, next){
//     res.send(foo);
// }