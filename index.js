const Discord = require('discord.js');
const client = new Discord.Client();
const Fs = require('fs')

client.on("ready", () => {

    console.log("Bot Operational")
    client.user.setActivity("Auto-Mod & Fun | >help")
})





let badWords = [((INSERT LINKS))]

client.on("message", async message => {
for (i = 0; i < badWords.length; i++) {
if (message.content.toLowerCase().includes(badWords[i])) {
await message.delete();
message.reply("**Please do not send bad words. It can result in a mute!**");


        }
if (message.author.bot) return;
    }
})
