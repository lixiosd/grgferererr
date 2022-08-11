const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const mySecret = process.env['BOT']
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");

module.exports = {
  name: "help",
  description:
    "Get list of all command and even get to know every command detials",
  usage: "help <cmd>",
  category: "info",
  run: async (client, message, args) => {
    
   let helpEmbed = new MessageEmbed()
      .setTitle(process.env['BOT'])
      .setDescription("**Command Parameters: <> is strict & [] is optional**")
      .addField(
        "• **OWNER**",
        "```eval, stats```"
      )
      .addField(
        "• **MODERATION**",
        "```ban, unban, kick, lock ,unlock```"
      )
      .addField(
        "• **GIVEAWAY**",
        "```start , end , reroll```"
      )
      .addField(
        "• **UTILITY**",
        "```nuke```"
      )
      .addField(
        "• **INFO**",
        "```help, invite, ping, uptime``` "
      ) 
      .addField('Important Links ','**[Invite Me](https://discord.com/oauth2/authorize?client_id=1007231408147808346&permissions=8&scope=applications.commands%20bot)**')
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter(
      (client.config.namebot),
      client.user.displayAvatarURL(),
    );

      message.channel.send(helpEmbed)

  },
};