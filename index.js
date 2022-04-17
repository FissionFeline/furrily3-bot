const Discord = require('discord.js');
const fs = require("fs");
const fuckIntents = new Discord.Intents(32767);
const client = new Discord.Client({
    intents: fuckIntents,
    partials: ['CHANNEL', 'GUILD_MEMBER', 'GUILD_SCHEDULED_EVENT', 'MESSAGE', 'REACTION', 'USER']
})
require('dotenv').config()

client.config = require("./config.json")

const TmpUserBS = new Map();

client.once('ready', () => {
    console.log('Ready!');
    client.user.setActivity("I want meth");
});

const conf_roles = require("./reaction.json")

client.on('messageReactionAdd', async(reaction, user) => {
    if (user.bot) return;
    if (conf_roles.messages[reaction.message.id]) {
        try {
            const guild_int = client.guilds.cache.get("963953169682034688");
            const member = guild_int.members.cache.get(user.id)
            const role = guild_int.roles.cache.find(role => role.id === conf_roles.messages[reaction.message.id][reaction.emoji.name]);
            member.roles.add(role)
        } catch (e) { console.log(e) }
    }
})

const events = fs.readdirSync("./events").filter(file => file.endsWith(".js"));
for (const file of events) {
    const eventName = file.split(".")[0];
    const event = require(`./events/${file}`);
    client.on(eventName, event.bind(null, client));
}

client.commands = new Discord.Collection();

const commands = fs.readdirSync("./coms").filter(file => file.endsWith(".js"));
for (const file of commands) {
    const command = require(`./coms/${file}`)
    try {
        client.commands.set(command.name, command)
        console.log(`Successfully loaded command ${command.name}`)
    } catch (error) {
        console.log(`Warning command ${file} failed to load`)
    }
}

process.on('uncaughtException', error => {
    console.error('There was an uncaught error', error)
    process.exit(1)
})

client.login(process.env.TOKEN);