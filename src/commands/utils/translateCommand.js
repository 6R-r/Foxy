module.exports = {

  name: 'translate',
  aliases: ['translate', 'traduzir'],
  cooldown: 3,
  guildOnly: false,
  clientPerms: ['EMBED_LINKS', 'READ_MESSAGE_HISTORY'],

  async run(client, message, args) {
    const translate = require('@k3rn31p4nic/google-translate-api');
    const Discord = require('discord.js');
    const language = args[0];
    const text = args.slice(1).join(' ');

    if (!language) return message.FoxyReply('Especifique um idioma');

    if (language.length !== 2) return message.FoxyReply('Use apenas abreviações. Exemplo: `f!language en Olá Mundo!`');

    if (!text) return message.FoxyReply('Insira um texto');

    const result = await translate(text, { to: language }).catch(err => {
      message.FoxyReply(`${client.emotes.error} **|** Ocorreu um erro ao executar o comando! \`${err}\``)
    })

    const embed = new Discord.MessageEmbed()
      .setColor('58bbf5')
      .setTitle(':map: | Translator')
      .setDescription(`\ \ \`\`\`\n${result.text}\n\`\`\``)

    message.FoxyReply(`${message.author}`, embed);
  },
};
