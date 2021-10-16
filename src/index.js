const schedule = require('node-schedule')
const fs = require('fs-extra')
const Twit = require('twit')

const env = require('./env')

const sestaFera = new Twit({
    consumer_key: env.CONSUMER_KEY,
    consumer_secret: env.CONSUMER_SECRET,
    access_token: env.ACCESS_TOKEN,
    access_token_secret: env.ACCESS_TOKEN_SECRET,
})

function BotInit() {
    console.log("O bot está funcionando!!");

    var time = schedule.scheduleJob({ dayOfWeek:0, hour: 12, minute: 30}, function(){
        sestaFera.post('statuses/update',
        { 
            status: 'cade a sesta fera q n chega'
        },
        function(err, data, response) {
            console.log(data)
          })
    })
}

BotInit()