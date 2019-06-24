const { ShardingManager } = require('discord.js')

const manager = new ShardingManager(`${__dirname}/src/index.js`, {
    token: require('./config.json').token
})

manager.spawn()

manager.on('launch', shard => {
    console.log(`${shard.id} is online`)
})

