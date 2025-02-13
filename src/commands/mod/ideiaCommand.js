const Discord = require('discord.js');

module.exports = {
  name: 'ideia',
  aliases: ['ideia', 'idea'],
  cooldown: 3,
  guildOnly: false,
  clientPerms: ['ATTACH_FILES', 'EMBED_LINKS', 'READ_MESSAGE_HISTORY'],

  async run(client, message, args) {
    const content = args.join(' ');

    if (!args[0]) {
      return message.FoxyReply(`${message.author.username}, escreva a sugestão após o comando`);
    } if (content.length > 1000) {
      return message.FoxyReply(`${message.author.username}, forneça uma sugestão de no máximo 1000 caracteres.`);
    }
    const msg = await message.FoxyReply(
      new Discord.MessageEmbed()
        .setColor('#FFFFF1')
        .addField('Autor:', message.author)
        .addField('Conteúdo', content)
        .setFooter(`ID do Autor: ${message.author.id}`)
        .setTimestamp(),
    );
    await message.FoxyReply(`${message.author} a mensagem foi enviada com sucesso!`);

    const emojis = ['✔️', '❎'];

    for (const i in emojis) {
      await msg.react(emojis[i]);
    }
  },

};
