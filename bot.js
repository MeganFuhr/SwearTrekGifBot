const giphy = require('giphy-api')(process.env.GIPHY_API);
console.log(require('dotenv').config())
const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = '!';

client.on('ready', () => {
  console.log("Our bot is ready to go.");
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

client.on('message', msg => {
    if(msg.author.bot) {
        return
      }
    if (msg.content === PREFIX+"st") {
        giphy.search('sweartrek', function (err, res) {
            num = getRandomInt(0,res.data.length)
            let ballembed = new Discord.MessageEmbed()
            .setImage(res.data[num].images.downsized.url);
            msg.channel.send(ballembed);
            });
    }
      
});

client.login(process.env.BOT_TOKEN)