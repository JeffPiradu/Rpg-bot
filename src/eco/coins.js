const Discord = require("discord.js");
const firebase = require('firebase');
const config = require("../../config.js")
const db = require("quick.db")
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


module.exports.run = async (client, message, args) => {
  const firebase = require('firebase');
  const database = firebase.database();
 const cueca = new Discord.MessageEmbed()
        .setTitle('<:v2:773993754519404574> Erro!')
        .setColor("BLACK")
        .setDescription(`${message.author}, Você não iniciou o RPG! Use \`${config.prefix}start\` para iniciar sua aventura! Depois tente usar \`${config.prefix}atm\` novamente `)

  let user =  message.mentions.users.first() || message.author;
  let bref = database.ref(`economia/itens/${message.author.id}`)
 database.ref(`economia/itens/${user.id}`)
  .once('value').then(async function(db) {
    if (db.val() == null) {
return message.reply(cueca)
      

    } else {
       const embed = new Discord.MessageEmbed()
          .setColor(config.coloreco)
             .addField('> ****ITENS:****',`\n💸 - Coins: [\`${db.val().coins}\`]\n⚔️ - Espadas: [\`${db.val().espada}\`]\n🦾 - Armadura [\`${db.val().armadura}\`]\n🏹 - Arcos: [\`${db.val().arco}\`]\n🎯 - Flechas: [\`${db.val().flecha}\`]\n⊱⋅ ────────────── ⋅⊰\n`)
  .addField('\n > ****PERFIL:****',`\n👷 - Profissão: [\`${db.val().trabalho}\`]\n<:ajuda:773367600822353942> - Nivel: [\`${db.val().lvl}\`]\n☃️ - Time: [\`${db.val().time}\`]\n⊱⋅ ────────────── ⋅⊰`)
         
        message.channel.send(embed)

     }
  })
}   
 module.exports.help = {
	aliases: ["Banbucoins","atm"],
	name: "bc"
}