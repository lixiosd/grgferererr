const discord = require("discord.js");

module.exports = {
  name: "invite",
  category: "info",
  description: "INVITE Saturn BOT",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`Invite Me`)
    .setDescription(`• [Invite Me](https://discord.com/api/oauth2/authorize?client_id=1006662645149089823&permissions=8&scope=bot)`)
    .setColor("RANDOM")
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter(
      `Az Giveaway `,
      client.user.displayAvatarURL(),
    );
    
    message.channel .send(embed)
    
  
  }
}