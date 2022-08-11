module.exports = client => {
    console.log(
      `Ready to serve in ${client.channels.cache.size} channels on ${client.guilds.cache.size} servers for a total of ${client.users.cache.size} users.`
    );
  
    const activities = [
      `Giveaways in ${client.guilds.cache.size} guilds`,
      "g!help",
      `+help | invite me `
    ];
    setInterval(() => {
      const activities = [`+help | invite me` ];
          const activity = activities[Math.floor(Math.random() * activities.length)];
          client.user.setActivity(activity, { type: "WATCHING" });
      }, 5000);
  };
  