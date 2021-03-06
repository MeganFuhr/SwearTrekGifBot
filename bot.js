require('dotenv').config()
const fs = require('fs');
const Discord = require('discord.js');
const client =  new Discord.Client();

const PREFIX = '!';

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.on('ready', () => {
  console.log("SwearTrek Gif Bot is ready.");
});

client.on('message', msg => {
  const args = msg.content.slice(PREFIX.length).split(/ +/);
  const command = args.shift().toLocaleLowerCase();
 
  if (!msg.content.startsWith(PREFIX) || msg.author.bot) {
    return;
  }

  if (command === 'st') {
    client.commands.get('st').execute(msg, args);
  }
});

client.login(process.env.BOT_TOKEN)