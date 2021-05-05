module.exports = {
    name: 'st',
    description: "This will display a random Swear Trek Gif",
    execute(message, args){

        var giphy = require('giphy-api')(process.env.GIPHY_API);
        const Discord = require('discord.js');

        giphy.random('sweartrek', function (err, res) {
            // Res contains gif data!

            console.log(res.data)

            let embed = new Discord.MessageEmbed()
            .setImage(res.data.images.downsized.url);
            message.channel.send(embed);
            });
    }
}