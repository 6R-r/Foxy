const Discord = require('discord.js');
const client = require('nekos.life');

const neko = new client();

module.exports = {
  name: 'kiss',
  aliases: ['kiss', 'beijar'],
  cooldown: 3,
  guildOnly: true,
  clientPerms: ['ATTACH_FILES', 'EMBED_LINKS', 'READ_MESSAGE_HISTORY'],

  async run(client, message, args) {
    const img = await neko.sfw.kiss();

    const img2 = await neko.sfw.kiss();

    const user = message.mentions.users.first() || client.users.cache.get(args[0]);

    if (user == client.user) return message.channel.send("🙅‍♀️ **|** Nah, eu não quero te beijar!")
    if (!user) {
      return message.FoxyReply('lembre-se de mencionar um usuário válido para beijar!');
    }

    const embed = new Discord.MessageEmbed()
      .setColor('#000000')
      .setDescription(`${message.author} **beijou** ${user}`)
      .setImage(img.url)
      .setFooter('Reaja com 😘 para retribuir')
      .setTimestamp();
    await message.FoxyReply(`${message.author}`, embed).then((msg) => {
      msg.react('😘')

      const filter = (reaction, usuario) => reaction.emoji.name === '😘' && usuario.id === user.id;

      const collector = msg.createReactionCollector(filter, { max: 1, time: 60000 });
      collector.on('collect', () => {
        const repeat = new Discord.MessageEmbed()
          .setColor(client.colors.default)
          .setDescription(`😽 ${user} **Beijou** ${message.author}`)
          .setImage(img2.url)

        message.FoxyReply(repeat)
      })

    })
  },

};
