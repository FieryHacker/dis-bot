//Setting up file
const Discord = require('discord.js');
const client = new Discord.Client();
const store = require(./index.json);

//When the bot loads up on Discord
client.on('ready', () => {
  console.log('Logged in as ${client.user.tag}!');
});

client.on('message', msg => {
  //Ping command
  if (msg.content === '${store.prefix}ping') {
    msg.reply('Pong!');
  }
  
  //Help command
  if(message.content === '${store.prefix}help') {
     new Discord.RichEmbed();
  };
  
});

//Reminder: put token here
client.login('store.token');
