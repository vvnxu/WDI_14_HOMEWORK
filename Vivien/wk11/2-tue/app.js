var express = require('express')
var app = express()
var _ = require('underscore')
app.set('view engine', 'ejs')
app.listen(8080, function () {
    console.log('listening on port 8080')
}

function getColor() {
    var color = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]
    return _.sample(color)
}
function compliments() {
    var compliments = [
          "Your instructors love you",
          "High five = ^5",
          "Shut up and take my money",
          "It's almost beer o'clock",
          "The Force is strong with you"]
    return _.sample(compliment)
}


app.get('/:name', function (req, res) {

    res.render('home', {
        name: req.params.name,
        color: getColor(),
        greeting: compliments()
    })
})

