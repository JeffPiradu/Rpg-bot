const Discord = require('discord.js');
const config = require("../../config.js")
const talkedRecently = new Set();
const db = require("quick.db")

exports.run = async (bot, message, argumentos, args, chat) => {


console.log(`--------------\nComando: Loja\n${message.author.username} usou o ${config.prefix}loja\n--------------`)
const cool= new Discord.MessageEmbed()
.setTitle('⏰ Tempo')
.setColor("BLACK")
.setDescription(`<:v2:773993754519404574> <@${message.author.id}> Calma ae! Espere um pouco para usar esse comando novamente!`)

if (talkedRecently.has(message.author.id)) {
message.reply(cool)

} else {

if(!message.guild.me.permissions.has("USE_EXTERNAL_EMOJIS")) {
return message.reply("\n**Ei! Eu não tenho permição de \"Usar emojis externos\"!\nPreciso dessa permição para mandar embeds/mensagens mais bonitas**")
}

const firebase = require('firebase');
const database = firebase.database();

const cueca = new Discord.MessageEmbed()
.setTitle('<:v2:773993754519404574> Erro!')
.setColor("BLACK")
.setDescription(`${message.author}, Você não iniciou o RPG! Use \`${config.prefix}start\` para iniciar sua aventura! Depois tente usar \`${config.prefix}loja\` novamente `)





let bref = database.ref(`economia/itens/${message.author.id}`)
xbref = database.ref(`economia/itens/${message.author.id}`)
let dbref = database.ref(`economia/itens/${message.author.id}`)
database.ref(`economia/itens/${message.author.id}`)
.once('value').then(async function(db) {
if (db.val() == null) {
return message.reply(cueca)
}










const cu = new Discord.MessageEmbed()
.setColor(config.coloreco)
.setTitle('Cabana do ferreiro')
.setDescription(`****__⚔️ - Armas:__****\n\n🏹 Arco [\`56\`]\n🎯 64 Flechas [\`15\`]\n🗡️ Espada de ferro: [\`150\`]\n🪠 Espada Updor [\`1000\`]\n\n****📈 - Upgrades:****\n\n🎉 Lvl [\`50\`]\n⛏️ Trabalho [\`100\`]\n\n****__🦾 - Armaduras:__****\n\n🌀 Ferro [\`60\`]\n🔱 Malha [\`30\`]\n⚜️ JunkDex [\`500\`]`)
.setFooter("Clique nas reações abaixo de acordo com o que deseja comprar!")
message.channel.send(cu).then(msg => {



msg.react('🏹').then(r => {
msg.react('🎯').then(r => {
msg.react('🗡️').then(r => {
msg.react('🪠').then(r => {

msg.react('🎉').then(r => {
msg.react('⛏️').then(r => {
 

msg.react('🌀').then(r => {
msg.react('🔱').then(r => {
msg.react('⚜️').then(r => {

})  
})
})
})
})
})
})
})
})
//armas Filter:
const arcoFilter = (reaction, user) => reaction.emoji.name === '🏹' && user.id === message.author.id;
const flechasFilter = (reaction, user) => reaction.emoji.name === '🎯' && user.id === message.author.id;
const espadaFilter = (reaction, user) => reaction.emoji.name === '🗡️' && user.id === message.author.id;
const updorFilter = (reaction, user) => reaction.emoji.name === '🪠' && user.id === message.author.id;
//Armaduras filter:
const ferroFilter = (reaction, user) => reaction.emoji.name === '🌀' && user.id === message.author.id;
const malhaFilter = (reaction, user) => reaction.emoji.name === '🔱' && user.id === message.author.id;
const junkdexFilter = (reaction, user) => reaction.emoji.name === '⚜️' && user.id === message.author.id;
//up filter:
const workFilter = (reaction, user) => reaction.emoji.name === '⛏️' && user.id === message.author.id;
const lvlFilter = (reaction, user) => reaction.emoji.name === '🎉' && user.id === message.author.id;

//itens:
const arco = msg.createReactionCollector(arcoFilter);
const flechas = msg.createReactionCollector(flechasFilter);
const espada = msg.createReactionCollector(espadaFilter);
const updor = msg.createReactionCollector(updorFilter);
//armaduras:
const ferro = msg.createReactionCollector(ferroFilter);
const malha = msg.createReactionCollector(malhaFilter);
const junkdex = msg.createReactionCollector(junkdexFilter);
//ups:
const work = msg.createReactionCollector(workFilter);
const lvl = msg.createReactionCollector(lvlFilter);



//arco

arco.on('collect', async (reaction, user) => {



if(user.bot) return;
arco.stop();
const cuca = new Discord.MessageEmbed()
.setTitle('<:v2:773993754519404574> Erro!')
.setColor("BLACK")
.setDescription(`${message.author}, Você não tem Coins suficientes para comprar um arco.\nTenha determinação! Trabalhe e junte Coins usando \`${config.prefix}trabalhar\``);

const comprouArco = new Discord.MessageEmbed()
.setTitle('🏹 Ferreiro')
.setColor("GREEN")
.setDescription(`${message.author}, Comprou um arco por: \`56 coins\``);

if(db.val().coins < 56){  return message.reply(cuca).then(msgi => {
setTimeout(() => {
msgi.delete();
}, 20000);
})

}

dbref.update({
coins: db.val().coins - 56
})
dbref.update({
arco: db.val().arco + 1
})

message.channel.send(comprouArco).then(msgi => {
setTimeout(() => {
msgi.delete();
}, 20000);
})

})



//flechas
flechas.on('collect', async (reaction, user) => {
if(user.bot) return;
flechas.stop();

const cacu = new Discord.MessageEmbed()

.setTitle('<:v2:773993754519404574> Erro!')
.setColor("BLACK")
.setDescription(`${message.author}, Você não tem Coins suficientes para comprar flechas.\nTenha determinação! Trabalhe e junte Coins usando \`${config.prefix}trabalhar\``);

const comprouFlechas = new Discord.MessageEmbed()
.setTitle('🏹 Ferreiro')
.setColor("GREEN")
.setDescription(`${message.author}, Comprou 64 flechas por: \`15 coins\``);



if(db.val().coins < 15){  return message.reply(cacu).then(msgi => {
setTimeout(() => {
msgi.delete();
}, 20000);
})
}

dbref.update({
coins: db.val().coins - 15
})
dbref.update({
flecha: db.val().flecha + 64
})

message.channel.send(comprouFlechas).then(msgi => {
setTimeout(() => {
msgi.delete();
}, 20000);
})

})


//espada
espada.on('collect', async (reaction, user) => {
if(user.bot) return;
espada.stop();
const cacu2 = new Discord.MessageEmbed()
.setTitle('<:v2:773993754519404574> Erro!')
.setColor("BLACK")
.setDescription(`${message.author}, Você não tem Coins suficientes para comprar uma espada de ferro.\nTenha determinação! Trabalhe e junte Coins usando \`${config.prefix}trabalhar\``);

const comprouEsp = new Discord.MessageEmbed()
.setTitle('🏹 Ferreiro')
.setColor("GREEN")
.setDescription(`${message.author}, Comprou uma espada por: \`150 coins\``);


if(db.val().coins < 150){  return message.reply(cacu2).then(msgi => {
setTimeout(() => {
msgi.delete();
}, 20000);
})
}

dbref.update({
coins: db.val().coins - 150
})
dbref.update({
espada: db.val().espada + 1
})

message.channel.send(comprouEsp).then(msgi => {
setTimeout(() => {
msgi.delete();
}, 20000);
})

})
//updor
updor.on('collect', async (reaction, user) => {
if(user.bot) return;
updor.stop();
const cacu3 = new Discord.MessageEmbed()
.setTitle('<:v2:773993754519404574> Erro!')
.setColor("BLACK")
.setDescription(`${message.author}, Você não tem Coins suficientes para comprar a Updor (Espada que fica mais forte a cada batalha).\nTenha determinação! Trabalhe e junte Coins usando \`${config.prefix}trabalhar\``);

const comprouUp = new Discord.MessageEmbed()
.setTitle('🏹 Ferreiro')
.setColor("GREEN")
.setDescription(`${message.author}, Comprou uma Updor por: \`1000 coins\``);


if(db.val().coins < 1000){  return message.reply(cacu3).then(msgi => {
setTimeout(() => {
msgi.delete();
}, 20000);
})
}

dbref.update({
coins: db.val().coins - 1000
})
xbref.update({
espada: db.val().espada = 'Updor',
})

message.channel.send(comprouUp).then(msgi => {
setTimeout(() => {
msgi.delete();
}, 20000);
})

})
//ferro
ferro.on('collect', async (reaction, user) => {
if(user.bot) return;

ferro.stop();
const cacu4 = new Discord.MessageEmbed()
.setTitle('<:v2:773993754519404574> Erro!')
.setColor("BLACK")
.setDescription(`${message.author}, Você não tem Coins suficientes para comprar uma armadura de ferro.\nTenha determinação! Trabalhe e junte Coins usando \`${config.prefix}trabalhar\``);

const comprouFerr = new Discord.MessageEmbed()
.setTitle('🏹 Ferreiro')
.setColor("GREEN")
.setDescription(`${message.author}, Comprou uma armadura de ferro por: \`60 coins\``);


if(db.val().coins < 60){  return message.reply(cacu4).then(msgi => {
setTimeout(() => {
msgi.delete();
}, 20000);
})
}

dbref.update({
coins: db.val().coins - 60
})
xbref.update({
armadura: db.val().armadura = 'de ferro',
})

message.channel.send(comprouFerr).then(msgi => {
setTimeout(() => {
msgi.delete();
}, 20000);
})


})
//malha
malha.on('collect', async (reaction, user) => {
if(user.bot) return;

malha.stop();
const cacu5 = new Discord.MessageEmbed()
.setTitle('<:v2:773993754519404574> Erro!')
.setColor("BLACK")
.setDescription(`${message.author}, Você não tem Coins suficientes para comprar uma armadura de malha.\nTenha determinação! Trabalhe e junte Coins usando \`${config.prefix}trabalhar\``);

const comprouMalha = new Discord.MessageEmbed()
.setTitle('🏹 Ferreiro')
.setColor("GREEN")
.setDescription(`${message.author}, Comprou uma armadura de malha por: \`30 coins\``);


if(db.val().coins < 30){  return message.reply(cacu5).then(msgi => {
setTimeout(() => {
msgi.delete();
}, 20000);
})
}

dbref.update({
coins: db.val().coins - 30
})
xbref.update({
armadura: db.val().armadura = 'de malha',
})

message.channel.send(comprouMalha).then(msgi => {
setTimeout(() => {
msgi.delete();
}, 20000);
})


})

//junkdex
junkdex.on('collect', async (reaction, user) => {
if(user.bot) return;

junkdex.stop();
const cacu6 = new Discord.MessageEmbed()
.setTitle('<:v2:773993754519404574> Erro!')
.setColor("BLACK")
.setDescription(`${message.author}, Você não tem Coins suficientes para comprar uma armadura Jukdex.\nTenha determinação! Trabalhe e junte Coins usando \`${config.prefix}trabalhar\``);

const comproujk = new Discord.MessageEmbed()
.setTitle('🏹 Ferreiro')
.setColor("GREEN")
.setDescription(`${message.author}, Comprou uma armadura JunkDex: \`500 coins\``);


if(db.val().coins < 500){  return message.reply(cacu6).then(msgi => {
setTimeout(() => {
msgi.delete();
}, 20000);
})
}

dbref.update({
coins: db.val().coins - 500
})
xbref.update({
armadura: db.val().armadura = 'JunkDex',
})

message.channel.send(comproujk).then(msgi => {
setTimeout(() => {
msgi.delete();
}, 20000);
})

})
//work
work.on('collect', async (reaction, user) => {
if(user.bot) return;
work.stop();
const cacu7 = new Discord.MessageEmbed()
.setTitle('<:v2:773993754519404574> Erro!')
.setColor("BLACK")
.setDescription(`${message.author}, Você não tem Coins suficientes para dar esse up.\nTenha determinação! Trabalhe e junte Coins usando \`${config.prefix}trabalhar\``);

const comprouff = new Discord.MessageEmbed()
.setTitle('🏹 Ferreiro')
.setColor("GREEN")
.setDescription(`${message.author}, Deu Up trabalho por: \`100 coins\``);


if(db.val().coins < 100){  return message.reply(cacu7).then(msgi => {
setTimeout(() => {
msgi.delete();
}, 20000);
})
}

dbref.update({
coins: db.val().coins - 100
})
dbref.update({
upwork: db.val().upwork + 30
})

message.channel.send(comprouff).then(msgi => {
setTimeout(() => {
msgi.delete();
}, 20000);
})

})
//lvl
lvl.on('collect', async (reaction, user) => {
if(user.bot) return;

lvl.stop();
const pika = new Discord.MessageEmbed()
.setTitle('<:v2:773993754519404574> Erro!')
.setColor("BLACK")
.setDescription(`${message.author}, Você não tem Coins suficientes para dar esse up.\nTenha determinação! Trabalhe e junte Coins usando \`${config.prefix}trabalhar\``);

const rola = new Discord.MessageEmbed()
.setTitle('🏹 Ferreiro')
.setColor("GREEN")
.setDescription(`${message.author}, Deu Up LvL por: \`50 coins\``);


if(db.val().coins < 50){  return message.reply(pika).then(msgi => {
setTimeout(() => {
msgi.delete();
}, 20000);
})
}

dbref.update({
coins: db.val().coins - 50
})
dbref.update({
lvl: db.val().lvl + 1
})

message.channel.send(rola).then(msgi => {
setTimeout(() => {
msgi.delete();
}, 20000);
})

})

})
})
}
talkedRecently.add(message.author.id);
setTimeout(() => {
talkedRecently.delete(message.author.id);
}, 40000);



}
module.exports.help = {
aliases: ["loja"],
name: "shop"
}