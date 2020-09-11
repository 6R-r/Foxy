const Discord = require("discord.js"); 
const config  = require('../config.json')

exports.run = async (client, message, args) => {

  let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
  
  let avatar = user.avatarURL({ dynamic: true, format: "png", size: 1024 });
  let embed = new Discord.MessageEmbed() 
    .setColor(`#4cd8b2`) 
    .setTitle(`Skin de ${user} foi carregado`) 
    .setImage(avatar) 
    .setFooter("Made with 💖 by WinGamer");
 await message.channel.send(embed); 

};
