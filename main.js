console.log("Starting Bluepillbot")
console.log("Loading Libraries...")
const Discord = require('discord.js');
const fs = require('fs')

bluepillid = "591085044471431178"

console.log("Connecting to Discord...")
const client = new Discord.Client();
client.on('message', async function(message) {
  username = message.author.username
  if(message.channel instanceof Discord.DMChannel) {
    console.log(`${username} (DM): ${message.toString()}`)
  } else {
    console.log(`${username} (#${message.channel.name}, ${message.guild.name}): ${message.toString()}`)
  }
  await message.react(bluepillid)
})

client.on('ready', () => {
  console.log(`Connected to Discord.`);
});
const token = fs.readFileSync('token.txt').toString().slice(0, -2)
client.login(token)
