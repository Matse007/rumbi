//const { Presence } = require("discord.js");
//module.exports = (client) =>{
module.exports = {
  name: 'presenceUpdate',
  execute(oldPresence, newPresence, client){
  
    //Hardcoded guild not a good way of doing it, but works for now
    //Guild ID for Hat in Time Server 78323416637116416
    const guildid = "722374549089288195";
    guild = client.guilds.cache.get(guildid);
    //this requires that a streaming role does exist.
    role = guild.roles.cache.find((r) => r.name === "Streaming");
    if (!newPresence.activities) return false;
    let lenghtvar = newPresence.activities.length;
    newPresence.activities.forEach((activity) => {
      if (activity.name === "Twitch" && activity.state === "A Hat in Time") {
        console.log(new Date().toLocaleString());
        newPresence.member.roles.add(role).catch(console.error);
        console.log(newPresence.member.user.tag + " assigned Stream Role");
      } else {
        newPresence.member.roles.remove(role).catch(console.error);
      }
    });
    if (newPresence.activities.length == 0) {
      newPresence.member.roles.remove(role).catch(console.error);
    }
    console.log();
  },
};
