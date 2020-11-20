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

 var cu = true;

const rpg = new Discord.MessageEmbed()
.setColor(config.coloreco)
.setTitle("RPG")
.setDescription(`> Clique em ⚔️ para iniciar o RPG! Boa sorte.`)

  message.channel.send(rpg).then(msg => {

    msg.react('⚔️').then(r => {
  })
  
  const backFilter = (reaction, user) => reaction.emoji.name === '⚔️' && user.id === message.author.id;
  const back = msg.createReactionCollector(backFilter);

    back.on('collect', async (reaction, user) => {


 db.set(`start_${message.author.id}`,1)
 
  let bref = database.ref(`economia/itens/${message.author.id}`)
 database.ref(`economia/itens/${message.author.id}`)
  .once('value').then(async function(db) {
    if (db.val() == null) {
      database.ref(`economia/itens/${message.author.id}`)      
      bref.set({
        coins: 0,
       espada: 0,
       armadura: 'de pano',
       arco: 0,
       flecha: 0,
       trabalho: 'Não escolhido',
        lvl: 1,
time: 'Não escolhido',
upwork: 0,

      })

     }
  })






       if(cu === false) return;
      if(user.bot) return;
rpg.setColor(config.coloreco)
rpg.setTitle("RPG")
rpg.setDescription(`> Sua aventura começa!`)
cu = false;
      msg.edit(rpg)
      
    })
     })



}
module.exports.help = {
	aliases: ["start"],
	name: "começar"
}
