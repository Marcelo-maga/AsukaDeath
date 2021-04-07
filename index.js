const schedule = require('node-schedule');
var Twit = require('twit');
require('dotenv').config();

const Bot = new Twit({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
})

function BotInit() {
    console.log("O bot está funcionando!!");
    var img = F.gif

    var time = schedule.scheduleJob({hour: 13,minute: 12}, function(){
        Bot.post('statuses/update',
        { 
            status: img
        },
        function(err, data, response) {
            console.log(data)
          })
    })
}
BotInit();