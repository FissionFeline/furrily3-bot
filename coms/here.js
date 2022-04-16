module.exports = {
    name: "here",
    description: "Creates a new embed",
    usage: '>embed_create "titel" "Description"',
    trigger: "here",
    category: "Stuff",
    async execute(client, msg, args) {
        const { MessageEmbed } = require('discord.js');
        const embed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Choose your role color')
            .setDescription('React below with your desired role color')
            .setFooter("If you're having issues dm Furious Feline#3399");
        msg.channel.send({ embeds: [embed] }).then(sentEmbed => {
            sentEmbed.react("🟥")
            sentEmbed.react("🟧")
            sentEmbed.react("🟨")
            sentEmbed.react("🟩")
            sentEmbed.react("🟦")
            sentEmbed.react("🟪")
            sentEmbed.react("⬛")
        })
    }
}