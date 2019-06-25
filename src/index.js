const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', _ => {
    console.log('Hello world!')
    client.user.setPresence({ game: { 'name': 'in test mode..' } })
})

client.on('message', message => {
    if(message.guild && (message.content == '<@!592766193929158688>' || message.content == '<@592766193929158688>')) {
        message.channel.send({ embed: {
            title: 'You can only play Slimester Shakedown in Direct Messages'
        } }).then(msg => {
            message.author.send('Type "start" to start the game!').catch(e => {
                msg.react('🛑')
            })
        })
    }
})

client.login(require('../config.json').token)
