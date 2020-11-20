const Discord = require("discord.js")

exports.run = async (client, message, args) => {


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
      

    }
const prf = Discord.MessageEmbed()
.setTitle(db.val().trabalho)
.setColor()
.setDescription()
message.channel.send(prf)




  })

}

module.exports.help = {

aliases:["profisao"],
name: "profissão"
}