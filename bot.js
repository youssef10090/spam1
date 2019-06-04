const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("585504008995602436")
setInterval(function() {
channel.send(`youssef10090 زعيم كبير `);
}, 30)
})

client.login(process.env.BOT_TOKEN);
