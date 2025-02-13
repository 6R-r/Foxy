const figlet = require('figlet');

module.exports = {
  name: 'ascii',
  aliases: ['ascii'],
  cooldown: 1,
  guildOnly: false,
  clientPerms: ['READ_MESSAGE_HISTORY'],
  
  async run(client, message, args) {
    if (!args[0]) return message.FoxyReply('Por favor Digite algo');
    if (args[0].length > 32) return message.FoxyReply('Você não pode digitar mais de 32 caracteres');
    let msg = args.join(' ');

    figlet.text(msg, (err, data) => {
      if (err) {
        message.FoxyReply('Algo deu errado ao executar este comando');
        message.FoxyReply(err);
      }
      if (data.length > 2000) return message.FoxyReply('Por favor digite algo com menos de 2000 caractéres!');

      message.FoxyReply(`\`\`\`${data}\`\`\``);
    });
  },

};
