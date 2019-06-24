const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', _ => {
    console.log('Hello world!')
    client.user.setPresence({ game: { 'name': 'in test mode..' } })
})

client.login(require('./config.json').token)
