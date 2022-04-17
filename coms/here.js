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
            .setTitle('Choose your prononouns')
            .addFields({ name: 'He/Him', value: '1️⃣' }, { name: 'She/Her', value: '2️⃣' }, { name: 'They/Them', value: '3️⃣' })
            .setFooter("If you're having issues dm Furious Feline#3399");
        msg.channel.send({ embeds: [embed] }).then(sentEmbed => {
            sentEmbed.react("1️⃣")
            sentEmbed.react("2️⃣")
            sentEmbed.react("3️⃣")
        })
    }
}