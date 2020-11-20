const Discord = require('discord.js')
const config = require("../../config.js")
const talkedRecently = new Set();


module.exports.run = async (client, message, args) => {
  
const cool= new Discord.MessageEmbed()
.setTitle('⏰ Tempo')
.setColor("BLACK")
.setDescription(`<:v2:773993754519404574> <@${message.author.id}> Calma ae! Espere um pouco para usar esse comando novamente!`)

if (talkedRecently.has(message.author.id)) {
message.reply(cool)

} else {



const firebase = require('firebase');
const database = firebase.database();

const cueca = new Discord.MessageEmbed()
.setTitle('<:v2:773993754519404574> Erro!')
.setColor("BLACK")
.setDescription(`${message.author}, Você não iniciou o RPG! Use \`${config.prefix}start\` para iniciar sua aventura! Depois tente usar \`${config.prefix}trabalhar\` novamente `)





let bref = database.ref(`economia/itens/${message.author.id}`)
xbref = database.ref(`economia/itens/${message.author.id}`)
let dbref = database.ref(`economia/itens/${message.author.id}`)
database.ref(`economia/itens/${message.author.id}`)
.once('value').then(async function(db) {
if (db.val() == null) {
return message.reply(cueca)
}
//code


if(db.val().trabalho === 'Não escolhido') {
  const urubu = new Discord.MessageEmbed()
.setColor(config.coloreco)
.setTitle(`Erro`)
.setDescription(`${message.author} Você não setou sua profissão!\nUse \`${config.prefix}profissão\``)

  return message.reply(urubu)
}
var din = Math.floor(Math.random() * db.val().upwork) + 20;


dbref.update({
coins: db.val().coins + din
})

const embedWork = new Discord.MessageEmbed()
.setColor(config.coloreco)
.setTitle(`⚒️ ${db.val().trabalho}`)
.setDescription(`> 🔨 - Você trabalhou como ${db.val().trabalho} e conseguiu \`${din}\` coins`)
message.channel.send(embedWork)

})

}
talkedRecently.add(message.author.id);
setTimeout(() => {
talkedRecently.delete(message.author.id);
}, 420000);

}
module.exports.help = {
aliases: ["work","trabalhar","w"],
name: "t"
}
