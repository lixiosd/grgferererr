const Discord = module.require("discord.js");


module.exports = {
   name: "lock",
   description: "Locks a Channel",
   usage: "lock <channel>",
  args: true,
 category: "moderation",
   run: async(client, message, args) => {
   if (!message.member.hasPermission('MANAGE_SERVER', 'MANAGE_CHANNELS')) {
   return message.channel.send("<a:no:865963806483808256> You don't have enough Permissions")
   }
   message.channel.overwritePermissions([
     {
        id: message.guild.id,
        deny : ['SEND_MESSAGES'],
     },
    ],);
   const embed = new Discord.MessageEmbed()
   .setTitle("Channel Updates")
   .setDescription(`🔒 ${message.channel} has been Locked`)
   await message.channel.send(embed);
}
}
/**
 * @INFO
 * Bot Coded by NarutoCodm#0989 |
 * https://www.youtube.com/channel/UCpW4KtW2TLxWi_B0WgDfWEQ
 * @INFO
 * Please mention Him , when using this Code!
 * @INFO
 */