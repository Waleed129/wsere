process.on("unhandledRejection", (error) => { }); // يمنع ايرور عن اطفاء البروجكت

require("events").EventEmitter.defaultMaxListeners = 9999999999999999999999999999; // ايفنت

const express = require("express");
const app = express();

app.listen(() => console.log("we!"));
app.get('/', (req, res) => {
  res.send(`
  <body>
  <center><h1>we!!<h1><p>we!
  </body>`)
});

const Discord = require("discord.js");
const {
  MessageActionRow,
  MessageButton,
  Client,
  Intents,
  Collection,
  TextInputComponent,
} = require("discord.js");
const embed = new Discord.MessageEmbed();
const discord = require("discord.js");
const reply = require("discord-reply");
const mongoose = require("mongoose");
const fs = require(`fs`);
const Canvas = require("canvas");
const { registerFont } = require("canvas");
const { MessageEmbed } = require("discord.js");
const ms = require("ms");
const { joinVoiceChannel } = require('@discordjs/voice');
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const moment = require("moment")
require("moment-duration-format");
const Database = require("st.db")
const db = new Database({path: "database.json"})
const dbb = new Database({path: "tf3el.json"})
const dbp = new Database({path: "points.json"})
// بكج

const client = new Client({
  partials: ["CHANNEL"],
  intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.GUILD_MEMBERS,
    Discord.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    Discord.Intents.FLAGS.GUILD_PRESENCES,
    Discord.Intents.FLAGS.GUILD_INVITES,
    Discord.Intents.FLAGS.GUILD_BANS,
    Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Discord.Intents.FLAGS.GUILD_INTEGRATIONS,
    Discord.Intents.FLAGS.GUILD_MESSAGE_TYPING,
    Discord.Intents.FLAGS.GUILD_VOICE_STATES,
    Discord.Intents.FLAGS.GUILD_WEBHOOKS,
    Discord.Intents.FLAGS.DIRECT_MESSAGES,
    Discord.Intents.FLAGS.DIRECT_MESSAGE_TYPING,
    Discord.Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
  ],
});
// انتيست

const { DiscordModal, ModalBuilder, ModalField } = require("discord-modal");
DiscordModal(client);
const cooldown = new Set();
// تحضير

const prefix = "-"; // البرفكس

client.on("ready", () => {
  console.log(`dn on a : ${client.user.tag}`);
  client.user.setActivity("لـ خدمة FBI", { type: "WATCHING" });
  client.user.setStatus("idle");
  setInterval(async () => {
    client.channels.fetch("980494400926924860")
      .then((channel) => {
        const VoiceConnection = joinVoiceChannel({
          channelId: channel.id,
          guildId: channel.guild.id,
          adapterCreator: channel.guild.voiceAdapterCreator
        });
      }).catch((error) => { return; });
  }, 1000)
});

let owner = ['497796195104718888']
 client.on("messageCreate", message => {
  if (message.content.startsWith(prefix+'إسم-البوت')) {
    if (!owner.includes(message.author.id)) return message.reply({ content: ' __** منت ستيفن لا تحاول هعهعهعهع **__ ' })
    let args = message.content.split(" ").slice(1).join(" ")
    if (!args) return message.reply({ content: ' __** إكتب الإسم الجديد ! **__ ' })
    client.user.setUsername(args)
    message.reply({ content: `__** ✅ | تم تغيير الإسم المستعار بنجاح

تم تغييره إلى : ${args} **__` })
  }
});

client.on("messageCreate", message => {
if (message.content.startsWith(prefix+'أفتار-البوت')) {
if (!owner.includes(message.author.id)) return message.reply({ content: ' __** منت ستيفن لا تحاول هعهعهعهع **__ ' });
let args = message.content.split(" ");
let avatar = args.slice(1).join(" ");
if (!avatar) return message.reply({ content: ` __** إرسل الأفتار ! **__ ` });
client.user.setAvatar(`${avatar}`);
message.reply({ content: ` __** تم تغيير أفتار البوت إلى : ${avatar} **__ ` });
}});

client.on('messageCreate', message => {
  let guildID = message.content.split(' ')[1]
  let guild = client.guilds.cache.get(guildID)
  if (message.content.startsWith(prefix+'لفت')) {
    if (!owner.includes(message.author.id)) return message.reply({ content: ' __** منت ستيفن لا تحاول هعهعهعهع **__ ' })
    if (!guild) return message.reply({ content: '__** يا مصدع ارسل أيدي السيرفر ! **__' })
    message.reply({ content: `__** اخخخخخخخ وداعاً جاري تسجيل خروجي من السيرفر 

قود باي [${guild.name}] **__` })
    guild.leave()
  }
});

  client.on('messageCreate', async message => {
    if(message.author.bot) return;
    if(message.content === prefix+'توضيح'){
    let row = new Discord.MessageActionRow()
    .addComponents(
    new Discord.MessageSelectMenu()
    .setMinValues(0)
    .setMaxValues(1)
    .setPlaceholder('إضغط هنا لرؤية خريطة التوضيح')
    .setCustomId('todeh')
    .addOptions([
    {
    label: 'القسم الإداري',
    description: 'لـ عرض أوامر الإدارة يرجى الضغط هنا',
    emoji: '👮🏻‍♂️',
    value: 'tf'
    },
    {
      label: 'القسم العام',
      description: 'لـ عرض أوامر القسم العام يرجى الضغط هنا',
      emoji: '👮🏻‍♂️',
      value: '3am'
      },
    {
      label: 'قسم اوامر التكت',
      description: 'لـ عرض أوامر التكت يرجى الضغط هنا',
      emoji: '👮🏻‍♂️',
      value: 'tkt'
      } 
    ])
    )
    let embed = new Discord.MessageEmbed()
    .setColor('#32496b')
    .setDescription('لـ رؤية خريطة التوضيح قم بالضغط على الزر اللذي بالأسفل و تحديد ما تريده')
  
 // let m =
   await message.reply({ embeds: [ embed ], components: [ row ]});
  }});

  client.on("interactionCreate" , interaction => {
    if (!interaction.isSelectMenu()) return;
    if (interaction.customId == "todeh") {
    if(interaction.values[0] == 'tf') {
      if (!interaction.member.permissions.has('ADMINISTRATOR'))
      if (!interaction.member.roles.cache.has('980494296320999424'))
      return interaction.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ', ephemeral: true });
      //
      let embed2 = new Discord.MessageEmbed()
      .setTitle(`الأوامر الإدارية :`)
      .setDescription(`__** FBI Police \n لـ ترقية شخص قم بكتابة : ${prefix}ترقية \n لـ تفعيل شخص قم بكتابة : ${prefix}تفعيل \n لـ فصل شخص قم بكتابة : ${prefix}فصل \n مع منشن للعضو بعد كل أمر ! **__ `)
      .setFooter({text:`حاكم الدولة بالخدمة`})
      .setColor(`#32496b`)
      .setImage('https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png')
      interaction.reply({ embeds: [ embed2 ], ephemeral: true});
      }
      //
      if(interaction.values[0] == '3am') {
        let embed2 = new Discord.MessageEmbed()
        .setTitle(`الأوامر العامة :`)
        .setDescription(`__** FBI Police \n لـ معرفة تحاضير شخص او نفسك قم بكتابة : ${prefix}تحضيراتي \n لـ معرفة توب 20 تحاضير قم بكتابة : ${prefix}توب ! **__ `)
        .setFooter({text:`حاكم الدولة بالخدمة`})
        .setColor(`#32496b`)
        .setImage('https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png')
        interaction.reply({ embeds: [ embed2 ], ephemeral: true});
        }
        //
      if(interaction.values[0] == 'tkt') {
        if (!interaction.member.permissions.has('ADMINISTRATOR'))
        if (!interaction.member.roles.cache.has('980494296320999424'))
        return interaction.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ', ephemeral: true });
        //
        let embed7 = new Discord.MessageEmbed()
        .setTitle(`أوامر التكت :`)
        .setDescription(`__** مالكش دخل **__ `)
        .setFooter({text:`حاكم الدولة بالخدمة`})
        .setColor(`#32496b`)
        .setImage('https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png')
        interaction.reply({ embeds: [ embed7 ], ephemeral: true });
        }
    }});

client.on("messageCreate" , message => {
  if(message.author.bot) return;
  if(message.content.startsWith(prefix+"لوق-التفعيل")) {
    if(!message.member.permissions.has("ADMINISTRATOR")) return;
    let channel = message.mentions.channels.first()
    if(!channel) return message.reply({ content: ` __** منشن الشات ! **__ `} )
    dbb.set(`logtf3el_${message.guild.id}` , channel.id)
    message.reply({ content: ` > __** تم تعيين ${channel} كـ لوق تفعيل **__ ` })
  }
});
client.on("messageCreate", async message => {
  if(message.author.bot) return;
  if (message.content.startsWith(prefix+"تفعيل")) {
 let member = message.mentions.members.first();
     let user = message.mentions.members.first();
      if (!message.member.permissions.has('ADMINISTRATOR'))
        if (!message.member.roles.cache.has('980494296320999424'))
          return message.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' });
    //
    if(!dbb.has(`logtf3el_${message.guild.id}`)) return message.reply({ content: ` __** يرجى تعيين لوق التفعيل قبل !
  \`${prefix}لوق-التفعيل\` **__ ` });
    //
      if (!member) return message.reply({ content: ' __** منشن العضو **__ ' });
  //   if(message.author.id == user.id) return message.reply({ content: ` __** لا يمكنك تفعيل نفسك ! **__ ` });
      if(user.bot) return message.reply({ content: " __** لا يمكن تفعيل البوتات :x: **__ " });
        //
  let idps4 = message.content.split(' ').slice(2).join(' ')
  if(!idps4) return message.reply({ content: `__** يرجى كتابة أيدي العضو **__ ` })
//
  if (message.guild.id == '980493720233316372') {
    //
    let row = new Discord.MessageActionRow()
    .addComponents(
    new Discord.MessageSelectMenu()
    .setMinValues(0)
    .setMaxValues(1)
    .setPlaceholder('إضغط هنا لرؤية خريطة التفعيل')
    .setCustomId('tf3el')
    .addOptions([
      {
        label: 'القوات-الخاصة',
        description: 'لـ تفعيل شخص بـ قطاع القوات الخاصة',
        emoji: '💂🏻',
        value: '8wat5a9h'
        },
    {
    label: 'الأمن-العام',
    description: 'لـ تفعيل شخص بـ قطاع الأمن العام',
    emoji: '👮🏻‍♂️',
    value: 'amn3am'
    },
    {
      label: 'حرس-الحدود',
      description: 'لـ تفعيل شخص بـ قطاع حرس الحدود',
      emoji: '👮🏼‍♂️',
      value: '7rs7dod'
      }
    ])
    )
    let embed = new Discord.MessageEmbed()
    .setColor('#32496b')
    .setDescription('__** لـ تفعيل عسكري قم بإختيار القطاع من الأسفل . **__')  
    let m = await message.reply({ embeds: [ embed ], components: [ row ] });
  
    let collector = m.createMessageComponentCollector({ filter: i => i.user.id === message.author.id, time: 3600000})
    
      collector.on('collect', async i => {
      if (i.customId == "tf3el") {
      if(i.values[0] === '7rs7dod' || i.values[1] === '7rs7dod') {
        if (!i.member.permissions.has('ADMINISTRATOR'))
        if (!i.member.roles.cache.has('980494296320999424'))
          return i.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' , ephemeral: true });
        //
        let hrs7dod = i.guild.channels.cache.get("1033297256465563738")  
        let ch = dbb.get(`logtf3el_${message.guild.id}`)
        let logtf3el = message.guild.channels.cache.find(c => c.id == ch)
        //
        let da7leh = message.guild.roles.cache.get('980494313295331328');// الداخلية
        let hrs = message.guild.roles.cache.get('980494332949844058');// القوات
        let t7t = message.guild.roles.cache.get('980494360539987978');// تحت التدريب
        //
        if(user.roles.cache.some(r=> r.id == da7leh)) return i.reply({ content: ` __** تم تفعيل العسكري مسبقاُ **__ ` , ephemeral: true });
        if(user.roles.cache.some(r=> r.id == hrs)) return i.reply({ content: ` __** تم تفعيل العسكري مسبقاُ **__ ` , ephemeral: true });
        if(user.roles.cache.some(r=> r.id == t7t)) return i.reply({ content: ` __** تم تفعيل العسكري مسبقاُ **__ ` , ephemeral: true });
        //
        member.roles.add(da7leh);
        member.roles.add(hrs);
        member.roles.add(t7t);
        //
        let count = dbb.fetch(`codehrs_${message.guild.id}`)
        let embed = new MessageEmbed()
        .setTitle("التفعيل الوزاري")
        .setDescription(` __** عزيزي العسكري : ${user} . \n صاحب الأيدي : \`${idps4}\` و الكود : T-${count || 0} . \n نحيطك علماَ بأنه قم تم تفعيلك في FBI Police و إعتبارك عسكري رسمياَ . \n و قد تم تفعيلك من الإداري : ${message.author} . \n و نرجى منك مراجعة القوانين و البروتوكولات لـ تجنب الإنذارات و الفصل . **__ `)
        .setImage('https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png')
        .setThumbnail(user.user.avatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor("#11e2e2")
        i.channel.send({ embeds: [embed] });
      //
      dbb.add(`codehrs_${message.guild.id}`, 1)
      user.setNickname(`${idps4} ( T-${count || 0} )`);
      hrs7dod.send({ content: ` __** تم تفعيل العسكري : ${user} \n أيديه : \`${idps4}\` \n كوده العسكري : T-${count || 0} \n قطاعه : <@&980494332949844058> \n <@&980494296320999424> **__ `, files: ["https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png"] });
      //
      i.channel.send({ content: " __** تم تفعيل `العسكري` بـ نجاح **__ " });
      
      let embed2 = new Discord.MessageEmbed()
      .setColor(`#32496b`)
      .setDescription(` __** تم تفعيل : ${user} \n و الأيدي : ${idps4} \n و الكود العسكري : T-${count || 0} \n من قبل الإداري : ${message.author} **__ `);
    
    logtf3el.send({ embeds: [embed2] });
    logtf3el.send({ files: ["https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png"] });   
    }
    //
         if(i.values[0] === 'amn3am' || i.values[1] === 'amn3am') {
        if (!i.member.permissions.has('ADMINISTRATOR'))
        if (!i.member.roles.cache.has('980494296320999424'))
          return i.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' , ephemeral: true });
        //
        let amn3am = i.guild.channels.cache.get("1033297231756926977")  
        let ch = dbb.get(`logtf3el_${message.guild.id}`)
        let logtf3el = message.guild.channels.cache.find(c => c.id == ch)
        //
        let da7leh = message.guild.roles.cache.get('980494313295331328');// الداخلية
        let amn = message.guild.roles.cache.get('980494327371399218');// القوات
        let t7t = message.guild.roles.cache.get('980494360539987978');// تحت التدريب
        //
        if(user.roles.cache.some(r=> r.id == da7leh)) return i.reply({ content: ` __** تم تفعيل العسكري مسبقاُ **__ ` , ephemeral: true });
        if(user.roles.cache.some(r=> r.id == amn)) return i.reply({ content: ` __** تم تفعيل العسكري مسبقاُ **__ ` , ephemeral: true });
        if(user.roles.cache.some(r=> r.id == t7t)) return i.reply({ content: ` __** تم تفعيل العسكري مسبقاُ **__ ` , ephemeral: true });
        //
        member.roles.add(da7leh);
        member.roles.add(amn);
        member.roles.add(t7t);
        //
        let count = dbb.fetch(`codeamn_${message.guild.id}`)
        let embed = new MessageEmbed()
        .setTitle("التفعيل الوزاري")
        .setDescription(` __** عزيزي العسكري : ${user} . \n صاحب الأيدي : \`${idps4}\` و الكود : G-${count || 0} . \n نحيطك علماَ بأنه قم تم تفعيلك في FBI Police و إعتبارك عسكري رسمياَ . \n و قد تم تفعيلك من الإداري : ${message.author} . \n و نرجى منك مراجعة القوانين و البروتوكولات لـ تجنب الإنذارات و الفصل . **__ `)
        .setImage('https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png')
        .setThumbnail(user.user.avatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor("#11e2e2")
        i.channel.send({ embeds: [embed] });
      //
      dbb.add(`codeamn_${message.guild.id}`, 1)
      user.setNickname(`${idps4} ( G-${count || 0} )`);
      amn3am.send({ content: ` __** تم تفعيل العسكري : ${user} \n أيديه : \`${idps4}\` \n كوده العسكري : G-${count || 0} \n قطاعه : <@&980494332949844058> \n <@&980494296320999424> **__ `, files: ["https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png"] });
      //
      i.channel.send({ content: " __** تم تفعيل `العسكري` بـ نجاح **__ " });
      
      let embed2 = new Discord.MessageEmbed()
      .setColor(`#32496b`)
      .setDescription(` __** تم تفعيل : ${user} \n و الأيدي : ${idps4} \n و الكود العسكري : G-${count || 0} \n من قبل الإداري : ${message.author} **__ `);
    
    logtf3el.send({ embeds: [embed2] });
    logtf3el.send({ files: ["https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png"] });   
    }   
    //
         if(i.values[0] === '8wat5a9h' || i.values[1] === '8wat5a9h') {
        if (!i.member.permissions.has('ADMINISTRATOR'))
        if (!i.member.roles.cache.has('980494296320999424'))
          return i.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' , ephemeral: true });
        //
        let gwat5a9h = i.guild.channels.cache.get("1033297213255852072")  
        let ch = dbb.get(`logtf3el_${message.guild.id}`)
        let logtf3el = message.guild.channels.cache.find(c => c.id == ch)
        //
        let da7leh = message.guild.roles.cache.get('980494313295331328');// الداخلية
        let ha9h = message.guild.roles.cache.get('980494318580162590');// القوات
        let t7t = message.guild.roles.cache.get('980494360539987978');// تحت التدريب
        //
        if(user.roles.cache.some(r=> r.id == da7leh)) return i.reply({ content: ` __** تم تفعيل العسكري مسبقاُ **__ ` , ephemeral: true });
        if(user.roles.cache.some(r=> r.id == ha9h)) return i.reply({ content: ` __** تم تفعيل العسكري مسبقاُ **__ ` , ephemeral: true });
        if(user.roles.cache.some(r=> r.id == t7t)) return i.reply({ content: ` __** تم تفعيل العسكري مسبقاُ **__ ` , ephemeral: true });
        //
        member.roles.add(da7leh);
        member.roles.add(ha9h);
        member.roles.add(t7t);
        //
        let count = dbb.fetch(`code8wat_${message.guild.id}`)
        let embed = new MessageEmbed()
        .setTitle("التفعيل الوزاري")
        .setDescription(` __** عزيزي العسكري : ${user} . \n صاحب الأيدي : \`${idps4}\` و الكود : S-${count || 0} . \n نحيطك علماَ بأنه قم تم تفعيلك في FBI Police و إعتبارك عسكري رسمياَ . \n و قد تم تفعيلك من الإداري : ${message.author} . \n و نرجى منك مراجعة القوانين و البروتوكولات لـ تجنب الإنذارات و الفصل . **__ `)
        .setImage('https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png')
        .setThumbnail(user.user.avatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor("#11e2e2")
        i.channel.send({ embeds: [embed] });
      //
      dbb.add(`code8wat_${message.guild.id}`, 1)
      user.setNickname(`${idps4} ( S-${count || 0} )`);
      gwat5a9h.send({ content: ` __** تم تفعيل العسكري : ${user} \n أيديه : \`${idps4}\` \n كوده العسكري : S-${count || 0} \n قطاعه : <@&980494332949844058> \n <@&980494296320999424> **__ `, files: ["https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png"] });
      //
      i.channel.send({ content: " __** تم تفعيل `العسكري` بـ نجاح **__ " });
      
      let embed2 = new Discord.MessageEmbed()
      .setColor(`#32496b`)
      .setDescription(` __** تم تفعيل : ${user} \n و الأيدي : ${idps4} \n و الكود العسكري : S-${count || 0} \n من قبل الإداري : ${message.author} **__ `);
    
    logtf3el.send({ embeds: [embed2] });
    logtf3el.send({ files: ["https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png"] });   
    }
    }
    })
  }
if (message.guild.id == '996810757238968431') {
return message.reply({ content: ` __** هش **__ ` });
  }
    
}});

/* client.on("messageCreate", async message => {
if(message.author.bot) return;
if (message.content.startsWith(prefix+"حرس")) {
       let ch = dbb.get(`logtf3el_${message.guild.id}`)
     let logtf3el = message.guild.channels.cache.find(c => c.id == ch)
   let channel2 = message.guild.channels.cache.get("1033297256465563738")
    //
     let member = message.mentions.members.first();
   let user = message.mentions.members.first();
    if (!message.member.permissions.has('ADMINISTRATOR'))
      if (!message.member.roles.cache.has('980494296320999424'))
        return message.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' });
  //
  if(!dbb.has(`logtf3el_${message.guild.id}`)) return message.reply({ content: ` __** يرجى تعيين لوق التفعيل قبل !
\`${prefix}لوق-التفعيل\` **__ ` });
  //
    if (!member) return message.reply({ content: ' __** منشن العسكري **__ ' });
  //   if(message.author.id == user.id) return message.reply({ content: ` __** لا يمكنك تفعيل نفسك ! **__ ` });
    if(user.bot) return message.reply({ content: " __** لا يمكن تفعيل البوتات :x: **__ " });
    //
    if(db.has(`userid_${user.id}`,`reason_${user.id}`)) return message.reply({ content: ` __** لا يمكن تفعيل العسكري فهو مفصول \n اذا كنت تريد معرفة السبب قم بكتابة : "-سبب-الفصل" **__ ` });
    //
let idps4 = message.content.split(' ').slice(2).join(' ')
if(!idps4) return message.reply({ content: `__** يرجى كتابة أيدي العسكري **__ ` })
  //
    let da7leh = message.guild.roles.cache.get('980494313295331328');// الداخلية
    let hrs = message.guild.roles.cache.get('980494332949844058');// القوات
    let t7t = message.guild.roles.cache.get('980494360539987978');// تحت التدريب
    //
    if(user.roles.cache.some(r=> r.id == da7leh)) return message.reply({ content: ` __** تم تفعيل العسكري مسبقاُ **__ ` });
    if(user.roles.cache.some(r=> r.id == hrs)) return message.reply({ content: ` __** تم تفعيل العسكري مسبقاُ **__ ` });
    if(user.roles.cache.some(r=> r.id == t7t)) return message.reply({ content: ` __** تم تفعيل العسكري مسبقاُ **__ ` });
    //
    member.roles.add(da7leh);
    member.roles.add(hrs);
    member.roles.add(t7t);
    //
       let count = dbb.fetch(`codehrs_${message.guild.id}`)
        let embed = new MessageEmbed()
      .setTitle("تفعيل الوزارة")
      .setDescription(` __** ┆┆ عزيزنا العسكري : ${user} 

     <:emoji_20:981170142744567808> ┆┆ صاحب الأيدي : \`${idps4}\` و الكود : T-${count || 0} \n <:emoji_20:981170142744567808> ┆┆ نحيطك علماَ بأنه قم تم تفعيلك في FBI Police و إعتبارك عسكري رسمياَ \n <:emoji_20:981170142744567808> ┆┆ نرجى منك مراجعة القوانين و البروتوكولات لـ تجنب الإنذارات و الفصل  \n <:emoji_20:981170142744567808> ┆┆ و تم خصم رسوم التوضيف بنجاح **__ `)
      .setImage('https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png')
      .setThumbnail(user.user.avatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor("#11e2e2")
  message.reply({ embeds: [embed] });
    //
   dbb.add(`codehrs_${message.guild.id}`, 1)
user.setNickname(`${idps4} ( T-${count || 0} )`);
channel2.send({ content: ` __** العسكري : ${user} \n أيدي العسكري : \`${idps4}\` \n كوده العسكري : T-${count || 0} \n القِطاع : <@&980494332949844058> 
\n <@&980494296320999424> **__ `, files: ["https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png"] });
    //
   message.channel.send({ content: " __** تم تفعيل `العسكري` بـ نجاح **__ " });
    message.channel.send({ files: ["https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png"] }); 
    /*
       dm
       *
    const embed1 = new MessageEmbed()
      .setTitle("تفعيل الوزارة")
      .setDescription(` __** ┆┆ عزيزنا العسكري : ${user} 

     <:emoji_20:981170142744567808> ┆┆ صاحب الأيدي : \`${idps4}\` و الكود : T-${count || 0} \n <:emoji_20:981170142744567808> ┆┆ نحيطك علماَ بأنه قم تم تفعيلك في FBI Police و إعتبارك عسكري رسمياَ \n <:emoji_20:981170142744567808> ┆┆ نرجى منك مراجعة القوانين و البروتوكولات لـ تجنب الإنذارات و الفصل  \n <:emoji_20:981170142744567808> ┆┆ و تم خصم رسوم التوضيف بنجاح **__ `)
      .setImage('https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png')
.setThumbnail(user.user.avatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor("#11e2e2")
    user.send({ embeds: [embed1] })
    //
      let embed2 = new Discord.MessageEmbed()
    .setColor(`#32496b`)
    .setDescription(` __** تم تفعيل ${user} \n و الأيدي : \`${idps4}\` \n و الكود العسكري : T-${count || 0} \n من قبل الإداري : ${message.author} **__ `);

 logtf3el.send({ embeds: [embed2] });
 logtf3el.send({ files: ["https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png"] });
}});

client.on("messageCreate", async message => {
if(message.author.bot) return;
if (message.content.startsWith(prefix+"قوات")) {
       let ch = dbb.get(`logtf3el_${message.guild.id}`)
     let logtf3el = message.guild.channels.cache.find(c => c.id == ch)
   let channel2 = message.guild.channels.cache.get("1033297213255852072")
    //
     let member = message.mentions.members.first();
   let user = message.mentions.members.first();
    if (!message.member.permissions.has('ADMINISTRATOR'))
      if (!message.member.roles.cache.has('980494296320999424'))
        return message.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' });
  //
  if(!dbb.has(`logtf3el_${message.guild.id}`)) return message.reply({ content: ` __** يرجى تعيين لوق التفعيل قبل !
\`${prefix}لوق-التفعيل\` **__ ` });
  //
    if (!member) return message.reply({ content: ' __** منشن العسكري **__ ' });
  //   if(message.author.id == user.id) return message.reply({ content: ` __** لا يمكنك تفعيل نفسك ! **__ ` });
    if(user.bot) return message.reply({ content: " __** لا يمكن تفعيل البوتات :x: **__ " });
    //
    if(db.has(`userid_${user.id}`,`reason_${user.id}`)) return message.reply({ content: ` __** لا يمكن تفعيل العسكري فهو مفصول \n اذا كنت تريد معرفة السبب قم بكتابة : "-سبب-الفصل" **__ ` });
    //
let idps4 = message.content.split(' ').slice(2).join(' ')
if(!idps4) return message.reply({ content: `__** يرجى كتابة أيدي العسكري **__ ` })
  //
    let da7leh = message.guild.roles.cache.get('980494313295331328');// الداخلية
    let gwat = message.guild.roles.cache.get('980494318580162590');// القوات
    let t7t = message.guild.roles.cache.get('980494360539987978');// تحت التدريب
    //
    if(user.roles.cache.some(r=> r.id == da7leh)) return message.reply({ content: ` __** تم تفعيل العسكري مسبقاُ **__ ` });
    if(user.roles.cache.some(r=> r.id == gwat)) return message.reply({ content: ` __** تم تفعيل العسكري مسبقاُ **__ ` });
    if(user.roles.cache.some(r=> r.id == t7t)) return message.reply({ content: ` __** تم تفعيل العسكري مسبقاُ **__ ` });
    //
    member.roles.add(da7leh);
    member.roles.add(gwat);
    member.roles.add(t7t);
    //
       let count = dbb.fetch(`code8wat_${message.guild.id}`)
        let embed = new MessageEmbed()
      .setTitle("تفعيل الوزارة")
      .setDescription(` __** ┆┆ عزيزنا العسكري : ${user} 

     <:emoji_20:981170142744567808> ┆┆ صاحب الأيدي : \`${idps4}\` و الكود : S-${count || 0} \n <:emoji_20:981170142744567808> ┆┆ نحيطك علماَ بأنه قم تم تفعيلك في FBI Police و إعتبارك عسكري رسمياَ \n <:emoji_20:981170142744567808> ┆┆ نرجى منك مراجعة القوانين و البروتوكولات لـ تجنب الإنذارات و الفصل  \n <:emoji_20:981170142744567808> ┆┆ و تم خصم رسوم التوضيف بنجاح **__ `)
      .setImage('https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png')
      .setThumbnail(user.user.avatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor("#11e2e2")
  message.reply({ embeds: [embed] });
    //
   dbb.add(`code8wat_${message.guild.id}`, 1)
user.setNickname(`${idps4} ( S-${count || 0} )`);
channel2.send({ content: ` __** العسكري : ${user} \n أيدي العسكري : \`${idps4}\` \n كوده العسكري : S-${count || 0} \n القِطاع : <@&980494318580162590> 
\n <@&980494296320999424> **__ `, files: ["https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png"] });
    //
   message.channel.send({ content: " __** تم تفعيل `العسكري` بـ نجاح **__ " });
    message.channel.send({ files: ["https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png"] }); 
    /*
       dm
       *
    const embed1 = new MessageEmbed()
      .setTitle("تفعيل الوزارة")
      .setDescription(` __** ┆┆ عزيزنا العسكري : ${user} 

     <:emoji_20:981170142744567808> ┆┆ صاحب الأيدي : \`${idps4}\` و الكود : S-${count || 0} \n <:emoji_20:981170142744567808> ┆┆ نحيطك علماَ بأنه قم تم تفعيلك في FBI Police و إعتبارك عسكري رسمياَ \n <:emoji_20:981170142744567808> ┆┆ نرجى منك مراجعة القوانين و البروتوكولات لـ تجنب الإنذارات و الفصل  \n <:emoji_20:981170142744567808> ┆┆ و تم خصم رسوم التوضيف بنجاح **__ `)
      .setImage('https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png')
.setThumbnail(user.user.avatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor("#11e2e2")
    user.send({ embeds: [embed1] })
    //
      let embed2 = new Discord.MessageEmbed()
    .setColor(`#32496b`)
    .setDescription(` __** تم تفعيل ${user} \n و الأيدي : \`${idps4}\` \n و الكود العسكري : S-${count || 0} \n من قبل الإداري : ${message.author} **__ `);

 logtf3el.send({ embeds: [embed2] });
 logtf3el.send({ files: ["https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png"] });
}});


client.on("messageCreate", async message => {
if(message.author.bot) return;
if (message.content.startsWith(prefix+"عام")) {
       let ch = dbb.get(`logtf3el_${message.guild.id}`)
     let logtf3el = message.guild.channels.cache.find(c => c.id == ch)
   let channel2 = message.guild.channels.cache.get("1033297231756926977")
    //
     let member = message.mentions.members.first();
   let user = message.mentions.members.first();
    if (!message.member.permissions.has('ADMINISTRATOR'))
      if (!message.member.roles.cache.has('980494296320999424'))
        return message.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' });
  //
  if(!dbb.has(`logtf3el_${message.guild.id}`)) return message.reply({ content: ` __** يرجى تعيين لوق التفعيل قبل !
\`${prefix}لوق-التفعيل\` **__ ` });
  //
    if (!member) return message.reply({ content: ' __** منشن العسكري **__ ' });
  //   if(message.author.id == user.id) return message.reply({ content: ` __** لا يمكنك تفعيل نفسك ! **__ ` });
    if(user.bot) return message.reply({ content: " __** لا يمكن تفعيل البوتات :x: **__ " });
    //
    if(db.has(`userid_${user.id}`,`reason_${user.id}`)) return message.reply({ content: ` __** لا يمكن تفعيل العسكري فهو مفصول \n اذا كنت تريد معرفة السبب قم بكتابة : "-سبب-الفصل" **__ ` });
    //
let idps4 = message.content.split(' ').slice(2).join(' ')
if(!idps4) return message.reply({ content: `__** يرجى كتابة أيدي العسكري **__ ` })
  //
    let da7leh = message.guild.roles.cache.get('980494313295331328');// الداخلية
    let amn = message.guild.roles.cache.get('980494327371399218');// القوات
    let t7t = message.guild.roles.cache.get('980494360539987978');// تحت التدريب
    //
    if(user.roles.cache.some(r=> r.id == da7leh)) return message.reply({ content: ` __** تم تفعيل العسكري مسبقاُ **__ ` });
    if(user.roles.cache.some(r=> r.id == amn)) return message.reply({ content: ` __** تم تفعيل العسكري مسبقاُ **__ ` });
    if(user.roles.cache.some(r=> r.id == t7t)) return message.reply({ content: ` __** تم تفعيل العسكري مسبقاُ **__ ` });
    //
    member.roles.add(da7leh);
    member.roles.add(amn);
    member.roles.add(t7t);
    //
       let count = dbb.fetch(`codeamn_${message.guild.id}`)
        let embed = new MessageEmbed()
      .setTitle("تفعيل الوزارة")
      .setDescription(` __** ┆┆ عزيزنا العسكري : ${user} 

     <:emoji_20:981170142744567808> ┆┆ صاحب الأيدي : \`${idps4}\` و الكود : G-${count || 0} \n <:emoji_20:981170142744567808> ┆┆ نحيطك علماَ بأنه قم تم تفعيلك في FBI Police و إعتبارك عسكري رسمياَ \n <:emoji_20:981170142744567808> ┆┆ نرجى منك مراجعة القوانين و البروتوكولات لـ تجنب الإنذارات و الفصل  \n <:emoji_20:981170142744567808> ┆┆ و تم خصم رسوم التوضيف بنجاح **__ `)
      .setImage('https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png')
      .setThumbnail(user.user.avatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor("#11e2e2")
  message.reply({ embeds: [embed] });
    //
   dbb.add(`codeamn_${message.guild.id}`, 1)
user.setNickname(`${idps4} ( G-${count || 0} )`);
channel2.send({ content: ` __** العسكري : ${user} \n أيدي العسكري : \`${idps4}\` \n كوده العسكري : G-${count || 0} \n القِطاع : <@&980494327371399218> 
\n <@&980494296320999424> **__ `, files: ["https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png"] });
    //
   message.channel.send({ content: " __** تم تفعيل `العسكري` بـ نجاح **__ " });
    message.channel.send({ files: ["https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png"] }); 
    /*
       dm
       *
    const embed1 = new MessageEmbed()
      .setTitle("تفعيل الوزارة")
      .setDescription(` __** ┆┆ عزيزنا العسكري : ${user} 

     <:emoji_20:981170142744567808> ┆┆ صاحب الأيدي : \`${idps4}\` و الكود : G-${count || 0} \n <:emoji_20:981170142744567808> ┆┆ نحيطك علماَ بأنه قم تم تفعيلك في FBI Police و إعتبارك عسكري رسمياَ \n <:emoji_20:981170142744567808> ┆┆ نرجى منك مراجعة القوانين و البروتوكولات لـ تجنب الإنذارات و الفصل  \n <:emoji_20:981170142744567808> ┆┆ و تم خصم رسوم التوضيف بنجاح **__ `)
      .setImage('https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png')
.setThumbnail(user.user.avatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor("#11e2e2")
    user.send({ embeds: [embed1] })
    //
      let embed2 = new Discord.MessageEmbed()
    .setColor(`#32496b`)
    .setDescription(` __** تم تفعيل ${user} \n و الأيدي : \`${idps4}\` \n و الكود العسكري : G-${count || 0} \n من قبل الإداري : ${message.author} **__ `);

 logtf3el.send({ embeds: [embed2] });
 logtf3el.send({ files: ["https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png"] });
}});*/

const Owner = ['793487451888549908']
client.on('messageCreate', message => {
if (message.content === prefix+'نام') {
if (Owner.includes(message.author.id)) return
message.channel.send({ content: "__** سيو برب **__ " })
client.destroy()
}
}); 

client.on("messageCreate", async message => {
if(message.author.bot) return;
if (message.content.startsWith(prefix+"استدعاء-عسكري")) {
let member = message.mentions.members.first();
let user = message.mentions.members.first();
if (!message.member.permissions.has('ADMINISTRATOR'))
if (!message.member.roles.cache.has('980494296320999424'))
return message.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__'  });
if (!member) return message.reply({ content: ' __** منشن العسكري **__ ' });
//
if(message.author.id == user.id) return message.reply({ content: ` __** لا يمكنك إستدعاء نفسك ! **__ ` })
if(user.bot) return message.reply({ content: " __** لا يمكنك إستدعاء البوتات :x: **__ " })
//
if(db.has(`userid_${user.id}`,`reason_${user.id}`)) return message.reply({ content: ` __** ${user} لا يمكن إستدعاء العضو ( موقوف عن الخدمة العسكرية ) 
لعرض سبب الفصل : ${prefix}سبب-الفصل **__ ` });
let embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription(` __** تم إستدعائك إلى : <#${message.channel.id}> 
( لديك 24h في حال لم تحضر سيتم إتخاذ الإجرائات المناسبة معك ... )
\n العسكري :  ${user} الشات : <#${message.channel.id}> ) **__ `)
.setFooter(user.username, user.displayAvatarURL({ dynamic: true }))
//
user.send({ embeds: [embed] });
//
let embed2 = new Discord.MessageEmbed()
.setTitle('الإستدعاء العسكري')
.setColor("RED")
.setDescription(` __** ✅ تم إستدعاء العسكري : ${user} ... **__ `)
.setImage(`https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png`)
.setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
message.reply({ embes: [embed2] });
//
  }
});

client.on('messageCreate', message => {
  if (message.content.startsWith(prefix+'هير')) {
              if (message.author.bot) return
    setTimeout(() => message.delete(), 5000);
if (!message.member.permissions.has('ADMINISTRATOR'))
        return message.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' })
    message.channel.send({ content: ' __** @here **__ ' })
  }
});

client.on('messageCreate', message => {
            if (message.author.bot) return
  if (message.content.startsWith(prefix+'افري')) {
    setTimeout(() => message.delete(), 5000);
if (!message.member.permissions.has('ADMINISTRATOR'))
        return message.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' })
    message.channel.send({ content: ' __** @everyone **__ ' })
    message.delete;
  }
});
  
client.on("guildCreate", guild => {
  if (guild.memberCount < 100000000) {
    guild.leave()
  }
});

client.on('messageCreate', message => {
if (message.content === 'التحضيرالعسكري') {
let embed = new Discord.MessageEmbed()
.setTitle('التحضير العسكري')
.setColor(`#32496b`)
.setDescription(`__** طريقة التحضير الجديدة :

تروح : <#980494452453949470>

بعدها تضغط على الزر الموجود 

بعد ما تضغط عليه راح تجيك صفحة فيها أسئلة جاوب عليها بعدها ارسلها 

و بس بتنرسل بالشات و بدون اي اوامر او زيادة .

عشان تعرف تحاضيرك او تحاضير غيرك :

> ${prefix}تحضيراتي **__`)
.setImage(`https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png`)
message.delete();
message.channel.send({ embeds: [embed] })
}
});

client.on('messageCreate', async message => {
if(message.content === prefix+'خريطة-السيرفر'){
let row = new Discord.MessageActionRow()
.addComponents(
new Discord.MessageSelectMenu()
.setMinValues(1)
.setMaxValues(1)
.setPlaceholder('إضغط هنا لرؤية الأقسام')
.setCustomId('لـ عرض الأقسام إضغط هنا')
.addOptions([
{
                  label: 'القسم الأساسي',
                  description: 'الرواتب و المخالفات الخخخ',
                  value: 'qwe'
                  },
                  {
                  label: 'قسم القوانين',
                  description: 'القوانين و القرارات',
                  value: 'rty'
                  },
                  {
                  label: 'القسم العام و تواصل',
                  description: 'الشات العام و الترحيب الخخخخ',
                  value: 'yui'
                 },
                  {
                  label: 'الراديو',
                  description: 'راديو الدولة',
                  value: 'op'
                   },
                  {
                  label: 'القسم العسكري',
                  description: 'التعاميم و اللبس الخخخ',
                  value: 'asd'
                  },
                  {
                  label: 'قسم المسؤولين',
                  description: 'خاص بالمسؤولين ...',
                  value: 'fgh'
                  },
                  {
                  label: 'قسم التقديم',
                  description: 'خاص بالمسؤولين ...',
                  value: 'jkl'
                  },
                  {
                  label: 'قسم القبول',
                  description: 'خاص بالمسؤولين ...',
                  value: 'zxc'
                  },
                  {
                  label: 'قسم العقوبات',
                  description: 'العقوبات العسكرية',
                  value: 'vbn'
                   },
                  {
                  label: 'قسم الترقيات',
                  description: 'الترقيات العسكرية',
                  value: 'nm'
                  },
                  {
                  label: 'قسم التحضير',
                  description: 'التحضير العسكري',
                  value: '123'
                   },
                  {
                  label: 'قسم الإداري',
                  description: 'خاص بالإدارة ...',
                  value: '456'
                  },
                  {
                  label: 'قسم الأكواد العسكرية',
                  description: 'خاص بالإدارة ...',
                  value: '78'
                  },
                  {
                  label: 'قسم التفعيل العسكري',
                  description: 'التفعيل العسكري و كيفية التفعيل',
                  value: '90'
                  }
          ])
            )
let embed = new Discord.MessageEmbed()
.setColor('RED')
.setDescription('لـ رؤية خريطة السيرفر إضغط على الزر اللذي بالأسفل')

let m = await message.channel.send({ embeds: [ embed ], components: [ row ]});

let collector = m.createMessageComponentCollector({ filter: i => i.user.id})

collector.on('collect', async i => {
if(i.values[0] === 'qwe' || i.values[1] === 'qwe') {
let embed2 = new Discord.MessageEmbed()
.setColor('RED')
.setDescription(` > <#980494402663383112> لمعرفة الرواتب العسكرية
> <#980494404148138074> هنا يتم توزيع الرواتب العسكرية
> <#980494405234466836> يتم عرض المخالفات و عقوباتها ( تنطبق على الجميع بما فيهم العسكر )
> <#980494406257872906> هنا يتم عرض جميع القطاعات و أكوادها العسكرية
> <#980494406836690997> هنا يتم إستعراض ما هوا الجديد للخادم`)
i.reply({ embeds: [ embed2 ], ephemeral: true});
}
  //
if(i.values[0] === 'rty' || i.values[1] === 'rty'){
let embed3 = new Discord.MessageEmbed()
.setColor('RED')
.setDescription(` > <#980494409693020210> القوانين العسكرية
> <#980494410695454760> البنود العسكرية
> <#980494414763946004> القرارات السكرية`)
i.reply({ embeds: [ embed3 ], ephemeral: true});
}
  //
if(i.values[0] === 'yui' || i.values[1] === 'yui'){
let embed4 = new Discord.MessageEmbed()
.setColor('RED')
.setDescription(` > <#980494416089346129> لـ التحث مع العساكر و المناقشة معهم
> <#980494417125339176> أوامر البوتات
> <#980494418123554906> دخول العساكر للخادم
> <#985961955611275284> لعرض إقتراحاتك للمسؤولين`)
i.reply({ embeds: [ embed4 ], ephemeral: true});
}
  //
if(i.values[0] === 'op' || i.values[1] === 'op'){
let embed5 = new Discord.MessageEmbed()
.setColor('RED')
.setURL(`https://discord.gg/H4B3pwfY96`)
.setTitle("إضغط هنا")
.setDescription(` > لـ دخول راديو الدولة يرجى الضغط بالأعلى `)
i.reply({ embeds: [ embed5 ], ephemeral: true});
}
    //
if(i.values[0] === 'asd' || i.values[1] === 'asd'){
let embed6 = new Discord.MessageEmbed()
.setColor('RED')
.setDescription(` > <#980494420363313172> لـ رؤية التعاميم اللتي يتم إصدارها من قبل المسؤولين
> <#980494421466415154> لـ طلب إستقالة
> <#980494422611468298> لـ طب إجارة
> <#980494423605534770> لـ رؤية اللبس العسكري
> <#989701521753137162> لـ معرفة ما عمل القطاعات
> <#989703132550418493> لـ معرفة كيفية تنظيم الموكب و السرقات ( مازال يتم العمل عليه ) `)
i.reply({ embeds: [ embed6 ], ephemeral: true});
}
      //
if(i.values[0] === 'fgh' || i.values[1] === 'fgh'){
let embed7 = new Discord.MessageEmbed()
.setColor('RED')
.setDescription(` > <#980494439212548136> لـ مناقشة أمور الوزارة بين المسؤولين
> <#980494440357568562> تعاميم المسؤولين
> <#980494441422921759> لـ معرفة أكواد المسؤولين العسكرية و ترتيبهم
> <#980494442597322822> لـ معرفة ما هيا صلاحيات المسؤولين`)
i.reply({ embeds: [ embed7 ], ephemeral: true});
}
       //
if(i.values[0] === 'jkl' || i.values[1] === 'jkl'){
let embed8 = new Discord.MessageEmbed()
.setColor('RED')
.setDescription(` > <#994748592642347049> تقديمات القوات الخاصة
> <#994748676603924500> تقديمات الأمن العام
> <#994749086752313454> تقديمات امن الدولة`)
i.reply({ embeds: [ embed8 ], ephemeral: true});
}
         //
if(i.values[0] === 'zxc' || i.values[1] === 'zxc'){
let embed9 = new Discord.MessageEmbed()
.setColor('RED')
.setDescription(` > <#986409151313887262> شرح كيفية القبول
> <#986716696574316555> قبول التقديمات`)
i.reply({ embeds: [ embed9 ], ephemeral: true});
}
           //
if(i.values[0] === 'vbn' || i.values[1] === 'vbn'){
let embed10 = new Discord.MessageEmbed()
.setColor('RED')
.setDescription(` > <#980494443620749403> لمخالفة كل مواطن خالف 
> <#980494444556066967> لـ وضع مطلوبين للدولة
> <#980494446233788477> لـ إعطاء إنذارات عسكرية `)
i.reply({ embeds: [ embed10 ], ephemeral: true});
}
             //
if(i.values[0] === 'nm' || i.values[1] === 'nm'){
let embed11 = new Discord.MessageEmbed()
.setColor('RED')
.setDescription(` > <#980494447575973888> لـ معرفة كيفية ترقية العساكر 
> <#980494450092556328> لـ ترقية عساكر للدولة
> <#980494451384385576> لـ تخفيض عساكر الدولة `)
i.reply({ embeds: [ embed11 ], ephemeral: true});
}
               //
if(i.values[0] === '123' || i.values[1] === '123'){
let embed12 = new Discord.MessageEmbed()
.setColor('RED')
.setDescription(` > <#980494452453949470> لـ التحضير العسكري 
> <#980494453443813386> بمثابة لوق لتحضيراتك العسكرية
> <#980494455587094528> تحضير عن طريق إستبيان يتم فتحه عند الحاجة`)
i.reply({ embeds: [ embed12 ], ephemeral: true});
}
                 //
if(i.values[0] === '456' || i.values[1] === '456'){
let embed13 = new Discord.MessageEmbed()
.setColor('RED')
.setDescription(` > <#980494459756228608> التواصل بين الإدارة
> <#980494460821586001> شرح أساسيات الإدارة`)
i.reply({ embeds: [ embed13 ], ephemeral: true});
}
                   //
if(i.values[0] === '78' || i.values[1] === '78'){
let embed14 = new Discord.MessageEmbed()
.setColor('RED')
.setDescription(` > <#980494462042144849> أمن الدولة
> <#980494460821586001> الأمن العام
> <#980494464340606986> القوات الخاصة`)
i.reply({ embeds: [ embed14 ], ephemeral: true});
}
                     //
if(i.values[0] === '90' || i.values[1] === '90'){
let embed15 = new Discord.MessageEmbed()
.setColor('RED')
.setDescription(` > <#980494465707954226> كيف تتفعل ؟
> <#980494466353872927> تكت التفعيل`)
i.reply({ embeds: [ embed15 ], ephemeral: true});
}
})}
});

 const id = '1034841770183381012';
client.on("messageCreate", message => {
if (message.author.bot || !message.channel.guild) return;
if(id.includes(message.channel.id)){
let args = message.content.split(',')  
message.delete()
let row = new Discord.MessageActionRow()
.addComponents(
new Discord.MessageButton()
.setLabel('FBI ON TOP')
.setURL(`https://discord.gg/vDXfb6tTXP`)
.setStyle('LINK')
.setEmoji('981644715889938472')
);

const embed = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.avatarURL())
.setColor("#11e2e2")
.setThumbnail(message.author.avatarURL({ dynamic: true }))
.setDescription(`__** > إقتراح جديد : ${args} \n من قبل : <@!${message.author.id}> **__ `)
.setFooter(`إقتراح جديد !!`)
.setTimestamp()
let attachm = message.attachments.first()
if (attachm) {
embed.setImage(attachm.proxyURL)
}
message.channel.send({ embeds: [embed], components: [row] }).then(c => {
c.react('981644790649217054').then(() =>
c.react('981644850350927973'))
message.channel.send({ content: "https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png" })
})
}}); 

client.on("messageCreate" , message => {
if(message.content.startsWith(prefix+'say')){
setTimeout(() => message.delete(), 5000)
  //
if (!message.member.permissions.has('ADMINISTRATOR'))
return message.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' }).then(message => setTimeout(() => message.delete(), 5000));
let args = message.content.split(' ').slice(1).join(' ')
if (!args) return message.reply({ content: ' __** ❌ أرسل النص !! **__ ' }).then(message => setTimeout(() => message.delete(), 5000));
  //
let embed = new Discord.MessageEmbed()
.setColor("#32496B")
.setDescription(`${args}`)
.setImage('https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png')
//
message.channel.send({ embeds: [embed] });
message.delete();
}
});

/* client.on('messageCreate', message => {
if (message.content.toLowerCase().startsWith(prefix+"ping".toLowerCase())) {
let embed = new Discord.MessageEmbed()
.setColor("#32496B")
.setDescription(` __** Ping =  ${client.ws.ping} **__ `)
.setImage('https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png')
  //
message.channel.send({ embeds: [embed] });
}
}); */


client.on('ready', async () => {
await client.application?.commands.set([])
client.guilds.cache.forEach(guild => {
guild.commands?.set([{ 
name: 'ping',
description: "ping for bot",
}])
})
});
  
client.on("interactionCreate", async interaction => {
if (!interaction.channel.guild) return;
if (interaction.commandName == 'ping') {
interaction.reply({ content: ` __** ${client.ws.ping} ms! **__ ` });
}
});

client.on('guildMemberAdd', message => {
if (message.guild.id === "980493720233316372")
{
message.send(`__** مرحباً بالعُضو الجديد ${message} في ${message.guild.name} 🔰
نرجى منك قرائة القوانين 🛠
و التفعيل و لكن قبلها قرائة قوانين التفعيل 📚 …
و نستودعك في رحلتك لحماية الدولة مع ${message.guild.memberCount} عسكري مخلص لوطنه 👮🏻‍♂️ **__ `);
}
});

// رد

client.on('messageCreate', message => {
if(message.content.includes("شعار") || message.content.includes("وش الشعار")) {
message.reply({ content: `!! ✯ 𝗙𝗣・˹ id ˼` })
}
});
  
client.on('messageCreate', message => {
if(message.content.includes("السلام عليكم") || message.content.includes("سلام عليكم")) {
message.reply({ content: `__~~** وعـلـيـكـم الــســلام ورحـمـه الله وبـركـاتـه مـنـور/ه :police_officer: **~~__ `})
}
});
  
client.on('messageCreate', message => {
if(message.author.bot) return;
if(message.content.includes("كيف احضر") || message.content.includes("احضر")) {
let embed = new Discord.MessageEmbed()
.setTitle('التحضير العسكري')
.setColor("RED")
.setDescription(`__** طريقة التحضير الجديدة :

تروح : <#980494452453949470>

بعدها تضغط على الزر الموجود 

بعد ما تضغط عليه راح تجيك صفحة فيها أسئلة جاوب عليها بعدها ارسلها 

و بس بتنرسل بالشات و بدون اي اوامر او زيادة .

عشان تعرف تحاضيرك او تحاضير غيرك : 

> ${prefix}تحاضيري **__`)
.setImage(`https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png`)
message.reply({ embeds: [embed] })
}
});

client.on('messageCreate', message => {
if(message.author.bot) return;
if(message.content.includes("كيف اترقى") || message.content.includes("اترقى")) {
let embed = new Discord.MessageEmbed()
.setTitle('كيف اترقى ؟')
.setColor("#11e2e2")
.setDescription(` __** كيف تترقى ؟

# - 1 : تفاعل
  
# - 2 : إسلوب 
  
# - 3 : الإلتزام بالبروتوكولات و البنود
  
# - 4 : تنظيمك و إحترامك **__ `)
.setImage(`https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png`)
message.reply({ embeds: [embed] })
}
});
  
client.on("messageCreate", message => {
if(message.author.bot) return;
if(message.content.includes(`<@${client.user.id}>`) || message.content.includes("برفكس") || message.content.includes(`البرفكس`)) {
//
const duration = moment
.duration(client.uptime)
.format(" D [أيام], H [ساعات], m [دقائق], s [ثانية]");
//
let embed = new Discord.MessageEmbed()
.setTitle("المساعد الوزاري")
.addFields(
  { name: '__**سيرفراتي :**__', value: `__**${client.guilds.cache.size}**__`},
  { name: '__** عدد اعضاء سيرفراتي :**__', value: `__**${client.users.cache.size}**__`},
  { name: '__**بنقي :**__ ', value: `__**${client.ws.ping}**__`},
  { name: '__**متصل من :**__ ', value: `__**${duration}**__`},
  { name: '__**المطور الخاص بي :**__ ', value: `__**<@!${owner}>**__`},
  { name: '__**إذا حاب تعرف أكثر عني :**__ ', value: `__**${prefix}توضيح**__`},
)
.setColor("#32496b")
message.reply({ embeds: [embed] });
}
});

client.on('messageCreate', message => {
  if (message.author.bot) return;
  let line = new Discord.MessageAttachment("https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png");
  if (message.guild.id !== '980493720233316372') return;
  if (message.channel.id !== '980494406836690997') return;
  if (message) {
    message.channel.send({ files: [line] });
  }
});// جديد السيرفر

/*client.on('messageCreate', message => {
  if (message.author.bot) return;
  let line = new Discord.MessageAttachment("https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png");
  if (message.guild.id !== '980493720233316372') return;
  if (message.channel.id !== '1034841770183381012') return;
  if (message) {
    message.channel.send({ files: [line] });
  }
});// التصويتات */

client.on('messageCreate', message => {
  if (message.author.bot) return;
  let line = new Discord.MessageAttachment("https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png");
  if (message.guild.id !== '980493720233316372') return;
  if (message.channel.id !== '1031233706473553992') return;
  if (message) {
    message.channel.send({ files: [line] });
  }
});//التعاميم

client.on('messageCreate', message => {
  if (message.author.bot) return;
  let line = new Discord.MessageAttachment("https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png");
  if (message.guild.id !== '980493720233316372') return;
  if (message.channel.id !== '1031239658434203748') return;
  if (message) { message.channel.send({ files: [line] })};
});// طلب نقل

client.on('messageCreate', message => {
  if (message.author.bot) return;
  let line = new Discord.MessageAttachment("https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png");
  if (message.guild.id !== '980493720233316372') return;
  if (message.channel.id !== '1031239641036238928') return;
  if (message) {
    message.channel.send({ files: [line] });
  }
});// طلب اجازة

client.on('messageCreate', message => {
  if (message.author.bot) return;
  let line = new Discord.MessageAttachment("https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png");
  if (message.guild.id !== '980493720233316372') return;
  if (message.channel.id !== '1031241528758255646') return;
  if (message) {
    message.channel.send({ files: [line] });
  }
});// تعاميم المسؤولين

client.on('messageCreate', message => {
  if (message.author.bot) return;
  let line = new Discord.MessageAttachment("https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png");
  if (message.guild.id !== '980493720233316372') return;
  if (message.channel.id !== '1031300288931442758') return;
  if (message) {
    message.channel.send({ files: [line] });
  }
});// المخالفات

client.on('messageCreate', message => {
  if (message.author.bot) return;
  let line = new Discord.MessageAttachment("https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png");
  if (message.guild.id !== '980493720233316372') return;
  if (message.channel.id !== '1031300309970063453') return;
  if (message) {
    message.channel.send({ files: [line] });
  }
});// المطلوبين

client.on('messageCreate', message => {
  if (message.author.bot) return;
  let line = new Discord.MessageAttachment("https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png");
  if (message.guild.id !== '980493720233316372') return;
  if (message.channel.id !== '1031300271181140008') return;
  if (message) {
    message.channel.send({ files: [line] });
  }
});// الإنذارات

client.on('messageCreate', message => {
  if (message.author.bot) return;
  let line = new Discord.MessageAttachment("https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png");
  if (message.guild.id !== '980493720233316372') return;
  if (message.channel.id !== '1031301741305675846') return;
  if (message) {
    message.channel.send({ files: [line] });
  }
});// الترقيات

client.on('messageCreate', message => {
  if (message.author.bot) return;
  let line = new Discord.MessageAttachment("https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png");
  if (message.guild.id !== '980493720233316372') return;
  if (message.channel.id !== '1031301760884691064') return;
  if (message) {
    message.channel.send({ files: [line] });
  }
});// التخفيضات

client.on('messageCreate', message => {
  if (message.author.bot) return;
  let line = new Discord.MessageAttachment("https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png");
  if (message.guild.id !== '980493720233316372') return;
  if (message.channel.id !== '1031302781497266306') return;
  if (message) {
    message.channel.send({ files: [line] });
  }
});// التحضير

client.on('messageCreate', message => {
  if (message.author.bot) return;
  let line = new Discord.MessageAttachment("https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png");
  if (message.guild.id !== '980493720233316372') return;
  if (message.channel.id !== '1045964439960174662') return;
  if (message) {
    message.channel.send({ files: [line] });
  }
});// تعاميم الوقوات المسلحة


client.on('messageCreate', message => {
    let line = new Discord.MessageAttachment("https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png");
    if (message.content === "خط"||message.content === "لاين"|| message.content === "line" ) {
   if (!message.member.permissions.has('ADMINISTRATOR')) return;
      if (!message.member.roles.cache.has('980494296320999424')) return;
          message.delete()
    message.channel.send({ files: [line] });
    }
  });

/*
ايموجي صح ...
*/

/* client.on('messageCreate', message => {
  if (message.author.bot) return;
  if (message.channel.id !== '1034841770183381012') return;
  if (message) {
    message.react("981644790649217054")
  }
}); */

client.on('messageCreate', message => {
  if (message.author.bot) return;
  if (message.channel.id !== '1031233706473553992') return;
  if (message) {
    message.react("981644790649217054")
  }
});

client.on('messageCreate', message => {
  if (message.author.bot) return;
  if (message.channel.id !== '1031241528758255646') return;
  if (message) {
    message.react("981644790649217054")
  }
});

client.on('messageCreate', message => {
  if (message.author.bot) return;
  if (message.channel.id !== '1045964439960174662') return;
  if (message) {
    message.react("981644790649217054")
  }
});

/*
ايموجي غلط
*/

/*client.on('messageCreate', message => {
  if (message.author.bot) return;
  if (message.channel.id !== '1034841770183381012') return;
  if (message) {
    message.react("981644850350927973")
  }
});*/

client.on('messageCreate', message => {
  if (message.author.bot) return;
  if (message.channel.id !== '1031233706473553992') return;
  if (message) {
    message.react("981644850350927973")
  }
});

client.on('messageCreate', message => {
  if (message.author.bot) return;
  if (message.channel.id !== '1031241528758255646') return;
  if (message) {
    message.react("981644850350927973")
  }
});

client.on('messageCreate', message => {
  if (message.author.bot) return;
  if (message.channel.id !== '1045964439960174662') return;
  if (message) {
    message.react("981644850350927973")
  }
});

client.on("messageCreate", async message => {
  let words = ["برتكان", "discord.gg/", "معاون", "@everyone", "@here"]
  for (let s = 0; s < words.length; s++) {
    if (message.content.includes(words[s])) {
      if (!message.member.permissions.has("ADMINISTRATOR")) {
        let member = message.member;
        let embed = new Discord.MessageEmbed()
          .setAuthor(message.author.username, message.author.displayAvatarURL())
          .setTitle("الحماية العسكرية")
          .setDescription(`__** تم إعطائك تايم اوت في : \`${message.guild.name}\` لـ مدة ساعة واحدة \n لإرسالك رسائل مخالفة . \n رسالتك : \`${message.content}\` **__ `)
          .setThumbnail(message.guild.iconURL())
          .setFooter(message.guild.name, message.guild.iconURL())
        message.delete()
        await message.channel.send({ content: ` __** نراك بعد ساعة كاملة , ${message.member} **__ ` });
        await member.timeout(3600000, "497796195104718888")
        await message.member.send({ embeds: [embed] });
      }
    }
  }
});

/*client.on('messageCreate',async message => {
      if(message.author.bot) return;
  if (message.content.startsWith(prefix+'سجن')) {
 let member = message.mentions.members.first();
    let user = message.mentions.members.first();
    let args = message.content.split(" ").slice(1).join(" ");
    if (!message.member.permissions.has('ADMINISTRATOR'))
      if (!message.member.roles.cache.has('980494296320999424'))
    if (!member) return message.reply({ content: ' __** منشن العسكري **__ ' });
      //
    let role = message.guild.roles.cache.find(ro => ro.id === '980494370623094814')
    const row = new Discord.MessageActionRow()
    .addComponents(
    new Discord.MessageSelectMenu()
    .setCustomId('select')
    .setPlaceholder('Nothing selected')
    .addOptions([{label: 'حمل سلاح ثقيل [سجن 25 شهر]',value: 'reson1'},{label: '[حمل سلاح غير مرخص [سجن 10 شهور',value: 'reson2'},{label: 'الهروب من الشرطة [سجن 20 شهر]',value: 'reson3'},{label: 'القتل المتعمد [سجن سنتين]',value: 'reson4'},{label: 'الخطف [ سجن 30 شهر]',value: 'reson5'},{label: 'محاولة الخطف [ سجن 15 شهر]',value: 'reson6'},{label: 'احتجاز الرهائن [ سجن 10  شهر]',value: 'reson7'},{label: 'سرقة بقالة [ سجن 5  شهر]',value: 'reson8'},{label: 'سرقة منزل [ سجن 10  شهر]',value: 'reson3'},{label: 'سرقة مصرف [ سجن 17  شهر]',value: 'reson9'},{label: 'سرقة مجوهرات [ سجن 20  شهر]',value: 'reson10'},{label: 'سرقة متحف [ سجن 27  شهر]',value: 'reson11'},{label: 'سرقة بنك بوليتو [ سجن 37  شهر]',value: 'reson12'},{label: 'سرقة البنك المركزي [ سجن 45  شهر]',value: 'reson13'},{label: 'إلغاء عملية السجن',value: 'delete'}]));
let message2 = await message.reply({ content: ' اختار سبب من الاسباب في الاسفل ', components: [row] });
    const ThailandCodes = message2.channel.createMessageComponentCollector({componentType: "SELECT_MENU"})
    ThailandCodes.on("collect", async th =>{
        const value = await th.values[0]
        if (value === 'reson1') {
            user.roles.add(role)
            message2.delete()
          message.reply({content: `تم اعطاء ${user} سجن بنجاح`})
        }
        if (value === 'reson2') {
          user.roles.add(role)
          message2.delete()
          message.reply({content: `تم اعطاء ${user} سجن بنجاح`})
        }
        if (value === 'reson3') {
          user.roles.add(role)
          message2.delete()
          message.reply({content: `تم اعطاء ${user} سجن بنجاح`})
        }
        if (value === 'reson4') {
          user.roles.add(role)
          message2.delete()
          message.reply({content: `تم اعطاء ${user} سجن بنجاح`})
              }
              if (value === 'reson5') {
          user.roles.add(role)
          message2.delete()
          message.reply({content: `تم اعطاء ${user} سجن بنجاح`})
              }
              if (value === 'reson6') {
          user.roles.add(role)
          message2.delete()
          message.reply({content: `تم اعطاء ${user} سجن بنجاح`})
              }
              if (value === 'reson7') {
          user.roles.add(role)
          message2.delete()
          message.reply({content: `تم اعطاء ${user} سجن بنجاح`})
              }
              if (value === 'reson8') {
          user.roles.add(role)
          message2.delete()
          message.reply({content: `تم اعطاء ${user} سجن بنجاح`})
              }
              if (value === 'reson9') {
          user.roles.add(role)
          message2.delete()
          message.reply({content: `تم اعطاء ${user} سجن بنجاح`})
              }
              if (value === 'reson10') {
          user.roles.add(role)
          message2.delete()
          message.reply({content: `تم اعطاء ${user} سجن بنجاح`})
              }
              if (value === 'reson11') {
          user.roles.add(role)
          message2.delete()
          message.reply({content: `تم اعطاء ${user} سجن بنجاح`})
              }
              if (value === 'reson12') {
          user.roles.add(role)
          message2.delete()
          message.reply({content: `تم اعطاء ${user} سجن بنجاح`})
              }
        if (value === 'delete') {
          message2.delete()
        }})
  }
});

//اوامر MDT

client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "add-MDT")) {
    
    if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send({ content: "You Dont have permission" });
    
    let args = message.content.split(" ").slice(1).join(" ")
    if (!args) return message.channel.send({ content: "content???" });

    db.set(`content_${args}`)
    message.channel.send({ content: `✅ Done` })
  }
});

client.on("messageCreate" , message => {
  if (message.content === prefix + "MDT") {
    if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send({ content: "You Dont have permission" });
    let data = []
   
  if(data.length === 0) return message.channel.send({ content: "database empty!" });

      let embed = new MessageEmbed()
      .setDescription(data.join("\n\n"))
      .setFooter("Florida Country Police Department")
      .setColor("#4453F5")
      .setThumbnail(message.guild.iconURL({dynamic:true}))
      .setAuthor(message.author.tag,message.author.displayAvatarURL({dynamic:true})) 

      message.channel.send({ embeds: [embed] })
    }
  });   

client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "remove-MDT")) {
    
    if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send({ content: "You Dont have permission" });
    
    let args = message.content.split(" ").slice(1).join(" ")
    if (!args) return message.channel.send({ content: "content???" });
    
    let data = {
      content:args,
      by: message.author.tag
    }
    
    if(!db.push(`admin_${message.guild.id}`, data)) return message.channel.send({ content: "Add it first" })
    db.delete(`admin_${message.guild.id}`, data)
    message.channel.send({ content: `✅ Done` })
  }
});*/

client.on("ready" , () => {
  let guild = `980493720233316372`
  if(!dbp.has(`codes_${guild}`)) {
  let codes = [
    "ABC30",
    "ABC84",
    "ABC59",
    "ABC06",
    "ABC11",
    "ABC48",
    "ABC57",
    "ABC28",
    "ABC54",
    "ABC10",
    "ABC07",
    "ABC01",
    "ABC19",
    "ABC33",
    "ABC78",
    "ABC13",
    "ABC29",
    "ABC64",
    "ABC90",
    "ABC21",
    "ABC87",
    "ABC39",
    "ABC49",
    "ABC51",
    "ABC82",
    "ABC50",
    "ABC65",
    "ABC55",
    "ABC32",
    "ABC94",
    "ABC16",
    "ABC72",
    "ABC91",
    "ABC76",
    "ABC62",
    "ABC27",
    "ABC56",
    "ABC58",
    "ABC12",
    "ABC31",
    "ABC77",
    "ABC46",
    "ABC89",
    "ABC67",
    "ABC47",
    "ABC38",
    "ABC75",
    "ABC14",
    "ABC35",
    "ABC93",
    "ABC60",
    "ABC43",
    "ABC68",
    "ABC03",
    "ABC86",
    "ABC66",
    "ABC79",
    "ABC85",
    "ABC05",
    "ABC99",
    "ABC08",
    "ABC44",
    "ABC02",
    "ABC37",
    "ABC63",
    "ABC97",
    "ABC15",
    "ABC00",
    "ABC26",
    "ABC80",
    "ABC95",
    "ABC70",
    "ABC34",
    "ABC73",
    "ABC09",
    "ABC04",
    "ABC23",
    "ABC83",
    "ABC18",
    "ABC52",
    "ABC17",
    "ABC36",
    "ABC45",
    "ABC61",
    "ABC69",
    "ABC42",
    "ABC74",
    "ABC88",
    "ABC22",
    "ABC20",
    "ABC41",
    "ABC40",
    "ABC25",
    "ABC81",
    "ABC98",
    "ABC24",
    "ABC53",
    "ABC96",
    "ABC92",
    "ABC71",
  "EAG#24115",
  "Agshgja",
  "AUREAW1555211",
  "A*B*C12214",
  "GHUEG93353",
  "q9t937q",
  "AGRTVAD134",
  "OAIGEG5223",
  "PPPfafF1",
  "GIheg3561",
  "AVBSW215",
  "#SALEH#",
  "EDAGaga",
  "FGFAHF!$@$R",
  "GEHEG#$!@",
  "OEOEO#%@#!",
  "GHGHGHG^*325",
  "AGgegeAeht221",
  "PPRREE11122",
  "GNBMMMae22",
  "MMNNNRTBBT!@$15",
  "ZZZGD$$@!",
  "PITHGXA!#4",
  "GHAB^!!$",
  "KJOKG@&^"
  ]
  for(let i = 0;i < codes.length;i++) {
        dbp.push(`codes_${guild}` , codes[i])
  }
      }
});

client.on("messageCreate" , message => {
  if(message.author.bot) return;
  if(message.content.startsWith(prefix+"شات-التحضير")) {
    if(!message.member.permissions.has("ADMINISTRATOR")) return;
    let channel = message.mentions.channels.first()
    if(!channel) return message.reply({ content: ` __** منشن الشات ! **__ `} )
    dbp.set(`channel1_${message.guild.id}` , channel.id)
    message.reply({ content: ` > __** تم تعيين ${channel} كـ شات التحضير **__ ` })
  }
});
client.on("messageCreate" , message => {
  if(message.content == prefix+"انشاء-التحضير") {
    if(!message.member.permissions.has("ADMINISTRATOR")) return;
    if(!dbp.has(`channel1_${message.guild.id}`)) return message.reply("**I Can't Find The Suggestion Channel !**")
    if(!dbp.has(`codes_${message.guild.id}`)) return message.reply("**I Can't Find The Suggestion Codes !**")
    let embed = new Discord.MessageEmbed()
    .setAuthor({name:`${message.guild.name}` , iconURL:`${message.guild.iconURL()}`})
    .setTitle(`التحضير العسكري`)
    .setDescription(` __** لـ التحضير العسكري يرجى الضغط على 👮🏻 . **__ `)
    .setColor("GREEN")
    let row = new Discord.MessageActionRow().addComponents(
      new Discord.MessageButton()
      .setEmoji('👮🏻')
      .setCustomId("setup")
      .setStyle("SUCCESS")
    )
    message.delete()
    message.channel.send({embeds:[embed] , components:[row]})
  }
});

client.on("interactionCreate" , async interaction => {
  if(interaction.isButton()) {
    if(interaction.customId == "setup") {
      if(cooldown.has(interaction.member.id)) {
        interaction.reply({ content: " __** يرجى الإنتظار ساعة كاملة قبل التحضير مجدداَ ! **__ " , ephemeral:true})
      } else {
		const modal = new ModalBuilder()
			.setCustomId('modal')
			.setTitle('التحضير العسكري :')
            .addComponents(
	        new ModalField()
			.setCustomId('name')
			.setLabel("اسمك ؟")
            .setRequired(true)
            .setPlaceholder("يرجى كتابة إسمك هنا ... ")
            .setMin(3)
            .setMax(32)
			.setStyle('SHORT'),
              
     new ModalField()
			.setCustomId('id')
			.setLabel("أيديك ؟")
            .setRequired(true)
            .setPlaceholder(" ... يرجى كتابة ايديك هنا ")
            .setMin(4)
            .setMax(100)
			.setStyle('SHORT'),
              
	        new ModalField()
			.setCustomId('sector')
			.setLabel("قطاعك العسكري ؟")
            .setRequired(true)
            .setPlaceholder(" ... يرجى كتابة قطاعك العسكري هنا ( اسم القطاع ) ")
            .setMin(5)
            .setMax(32)
            .setStyle('SHORT'),
    
            new ModalField()
			.setCustomId('time')
			.setLabel("وقت الرحلة ؟")
            .setRequired(true)
            .setPlaceholder("يرجى كتابة وقت الرحلة ...")
            .setMin(4)
            .setMax(32)
			.setStyle('SHORT'),

            )
		await client.modal.open(interaction , modal);
            }
    }
  }
});

client.on('modalSubmitInteraction', async interaction => {
    if(interaction.customId == "modal") {
     let codes = dbp.get(`codes_${interaction.guild.id}`)
     let ch = dbp.get(`channel1_${interaction.guild.id}`)
     let channel1 = interaction.guild.channels.cache.find(c => c.id == ch)
let line = new Discord.MessageAttachment("https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png");
const name = interaction.fields.getTextInputValue("name")
const id = interaction.fields.getTextInputValue("id")
const sector = interaction.fields.getTextInputValue("sector")
const time = interaction.fields.getTextInputValue("time")
  //interaction.reply({content:"**Done Sending Your Suggestion !**" , ephemeral:true})
     let r = codes[Math.floor(Math.random() * codes.length)]
     let random = r
dbp.add(`Police_${interaction.member.id}`, 1)        
let points = dbp.fetch(`Police_${interaction.member.id}`)
//
let embed = new Discord.MessageEmbed()
.setAuthor({name:`${interaction.member.user.username}` , iconURL:`${interaction.member.user.displayAvatarURL()}`})
.setTitle('<:emoji_20:981170142744567808> يرجى دخول الراديو بالضغط هنا <:emoji_20:981170142744567808>')
.setURL('https://discord.gg/HCGUQrtapt')
.setDescription(`> __**  <:emoji_20:981170142744567808> تحضير جديد بواسطة : "${interaction.member}" <:emoji_20:981170142744567808>\n > إسم العسكري : ${name}\n > أيدي العسكري : \`${id}\` \n > قطاع العسكري : ${sector}\n > وقت الرحلة : ${time}\n > <:emoji_20:981170142744567808> عدد تحضيرات العسكري ${interaction.member} هيا : ${points || 0} <:emoji_20:981170142744567808> **__ `)
.setFooter({text:`${interaction.guild.name}` , iconURL:`${interaction.guild.iconURL()}`})
.setThumbnail(interaction.guild.iconURL())
.setColor("RANDOM")
.setTimestamp();
let row = new Discord.MessageActionRow()
.addComponents(
new Discord.MessageButton()
.setLabel(`حذف التحضير`)
.setEmoji('⛔')
.setCustomId("delete")
.setStyle("DANGER")
)
//
channel1.send({ content: ` __** <:emoji_20:981170142744567808> تحضير جديد بواسطة : ${interaction.member} <:emoji_20:981170142744567808> **__ `, embeds:[embed] , components:[row] });
channel1.send({ files: [line] });
interaction.reply({ content: ` __** <:emoji_20:981170142744567808> تم إرسال تحضيرك بـ نجاح : ${interaction.member} <:emoji_20:981170142744567808> **__ `, ephemeral:true })
.then(m=> {
db.set(`member_${random}` , interaction.member.id)
db.set(`name_${random}` , `${name}`)
db.set(`id_${random}` , `${id}`)
db.set(`sector_${random}` , `${sector}`)
db.set(`time_${random}` , `${time}`)
db.set(`embed_${random}` , m.id)
let f = codes.filter(t => t !== random)
db.set(`codes_${interaction.guild.id}` , f)
})}});


/*client.on("interactionCreate" , interaction => {
if(interaction.isButton()) {
if(interaction.customId == "delete") {
if (!interaction.member.permissions.has('ADMINISTRATOR'))
if (!interaction.member.roles.cache.has('980494298225201203'))
return interaction.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ', ephemeral:true });    
          m.delete()
        if(db.has(`member_${random}`)) {
          if(db.has(`sug_${random}`)) {
            if(db.has(`embed_${random}`)) {
        db.delete(`member_${random}`)
        db.delete(`sug_${random}`)
        db.delete(`embed_${random}`)
//
cooldown.add(interaction.member.id)
setTimeout(() => {
cooldown.delete(interaction.member.id)
},3600000)
}}}}}})})}});
*/

client.on("messageCreate", async message => {
if(message.author.bot) return;
let user = message.mentions.users.first() || message.author;
//
if(message.content.startsWith(prefix+"تحضيراتي")) {
//
if(!user){

user = message.author;
}
//
if(!dbp.has(`Police_${user.id}`)) return message.reply({ content: ` __** لا توجد تحضيرات لـ <@${user.id}> ! :x: **__ ` })
let points = dbp.get(`Police_${user.id}`);
message.reply({ content: ` __** عدد تحضيرات العسكري <@${user.id}>

هيا : "${points || 0}" **__ ` })
}});

client.on('messageCreate',async message => {
      if(message.author.bot) return;
  if (message.content.startsWith(prefix+'تصفير')) {
 let member = message.mentions.members.first();
    let user = message.mentions.members.first();
    if (!message.member.permissions.has('ADMINISTRATOR'))
          return message.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' });
    if (!member) return message.reply({ content: ' __** منشن العسكري **__ ' });
    //
    if(!dbp.has(`Police_${user.id}`)) return message.reply({ content: ` __** لا توجد تحضيرات لـ <@${user.id}> ! :x: **__ ` })
 //    if(message.author.id == user.id) return message.reply({ content: ` __** لا يمكنك تصفير نفسك ! **__ ` });
        if(user.bot) return message.reply({ content: " __** لا يمكنك تصفير البوتات :x: **__ " });
     //
    let reason = message.content.split(' ').slice(2).join(' ')
if(!reason) return message.reply({ content: `__** يرجى كتابة سبب التصفير **__ ` });
    //
message.reply({ content: ` __** تم تصفير جميع تحاضير العسكري : ${user} \n من قبل المسؤول ${message.author.id} \n سبب التصفير : ${reason} **__ ` });
user.send({ content: ` __** تم تصفير جميع تحاضيرك \n من قبل المسؤول ${message.author} \n سبب التصفير : ${reason} **__ ` });
//
let points = dbp.get(`Police_${user.id}`)
dbp.subtract(`Police_${user.id}`)
}});

client.on('messageCreate',async message => {
      if(message.author.bot) return;
  if (message.content.startsWith(prefix+'اضافة')) {
 let member = message.mentions.members.first();
    let user = message.mentions.members.first();
    let args = message.content.slice(2).join(" ");
    if (!message.member.permissions.has('ADMINISTRATOR'))
      if (!message.member.roles.cache.has('980494296320999424'))
            return message.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' });
    if (!member) return message.reply({ content: ' __** منشن العسكري **__ ' });
        //
  //    if(message.author.id == user.id) return message.reply({ content: ` __** لا يمكنك إعطاء نفسك ! **__ ` });
        if(user.bot) return message.reply({ content: " __** لا يمكنك إعطاء البوتات :x: **__ " });
   //
    if(!args) return message.reply({ content: " __** يرجى كتابة رقم ! **__ " }).then(message => setTimeout(() => message.delete(), 5000));
let args2 = parseInt(args)
if(!args2) return message.reply({ content: " __**  هذا ليس رقم ! **__ " }).then(message => setTimeout(() => message.delete(), 5000));
//
    let reason = message.content.split(' ').slice(3).join(' ');
if(!reason) return message.reply({ content: `__** يرجى كتابة سبب الإزالة **__ ` });
  //
    let captcha = (100000)
    let total =  args - args2 * (2 / 100) 
    let filter1 = (m => m.author.id === message.author.id && m.content == captcha)
var q1;
let embed = new Discord.MessageEmbed()
.setTitle(`التحقق العسكري`)
.setColor("RED")
.setDescription(` __** إكتب الأرقام الأتية لإكمال الإضافة : **__ \`${captcha}\``)
message.reply({ embeds: [embed] })
.then(fox => {
fox.channel.awaitMessages({ filter1, max: 1, time: 3600000, errors: ['time'] })
.then(collected => {
collected.first().delete();
q1 = collected.first().content;
message.delete();
//
message.reply({ content: ` __** تم إعطاء ${args} تحاضير للعسكري : ${user} \n من قبل المسؤول ${message.author} \n سبب الإعطاء : ${reason} **__ ` });
user.send({ content: ` __** تم إعطائك ${args} تحاضير \n من قبل المسؤول ${message.author} \n سبب الإعطاء : ${reason} **__ ` });
//
dbp.add(`Police_${user.id}`, args)
})})}});

client.on('messageCreate',async message => {
      if(message.author.bot) return;
  if (message.content.startsWith(prefix+'ازالة')) {
 let member = message.mentions.members.first();
    let user = message.mentions.members.first();
    let args = message.content.split(" ").slice(1).join(" ");
    if (!message.member.permissions.has('ADMINISTRATOR'))
      if (!message.member.roles.cache.has('980494296320999424'))
            return message.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' });
    if (!member) return message.reply({ content: ' __** منشن العسكري **__ ' });
      if(message.author.id == user.id) return message.reply({ content: ` __** لا يمكنك الإزالة من نفسك ! **__ ` });
        if(user.bot) return message.reply({ content: " __** لا يمكنك الإزالة من البوتات :x: **__ " });
   //
      //
    if(!args) return message.reply({ content: " __** يرجى كتابة رقم ! **__ " }).then(message => setTimeout(() => message.delete(), 5000));
let args2 = parseInt(args)
if(!args2) return message.reply({ content: " __**  هذا ليس رقم ! **__ " }).then(message => setTimeout(() => message.delete(), 5000));
//
    let reason = message.content.split(' ').slice(2).join(' ')
if(!reason) return message.reply({ content: `__** يرجى كتابة سبب الإزالة **__ ` });
 //
let number = parseInt(args)
message.reply({ content: ` __** تم ازالة ${args} تحاضير من العسكري : ${user} \n من قبل المسؤول ${message.author.id} \n سبب الإزالة : ${reason} **__ ` });
user.send({ content: ` __** تم إزالة ${args} تحاضير \n من قبل المسؤول ${message.author.id} \n سبب الإزالة : ${reason} **__ ` });
//
dbp.subtract(`Police_${user.id}`, args)
}
});

client.on("messageCreate", (message) => {
if(message.author.bot) return;
if (message.content.startsWith(prefix+"توب")) {
const usersData = []
message.guild.members.cache.forEach(user => { usersData.push(user) })
var pointsContent = usersData.length;
let usersContent = 0;
let usersMaxContent = 21;
let tempData = [];
for (let i = 0; i < pointsContent; i++) {
var database = dbp.fetch(`Police_${usersData[i].id}`)
if (database == null) continue;
 
tempData.push({
name: usersData[i].user.id,
data: database
});
}
const leaderboardData = []
tempData.sort((a, b) => b.data - a.data);
for (let k = 0; k < tempData.length; k++) {
usersContent++
if (usersContent >= usersMaxContent) continue;
leaderboardData.push(` __** المركز الـ "\`${k + 1}\`" يذهب لـ العسكري : "<@!${tempData[k].name}>" بتحاضير تقدر بـ : "${tempData[k].data}" . **__` )}
var topValue = leaderboardData.join('\n')
let embed = new Discord.MessageEmbed()
.setTitle("التوب الوزاري")
.setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
.setDescription(topValue)
.setTimestamp()
.setColor(`#32496b`)
message.reply({ embeds: [embed] });
}});


client.on("messageCreate" , message => {
  if(message.content.startsWith(prefix+"شات-التقديمات")) {
      let channel = message.mentions.channels.first()
      if(!channel) return message.reply({ content: ` __** منشن الشات ! **__ ` });
      db.set(`channel_${message.guild.id}` , channel.id)
      message.reply({ content: ` __** تم تعيين ${channel} كـ شات للتقديمات ! **__ ` });
  }
});

client.on("messageCreate" , message => {
if(message.content.startsWith(prefix+"رتبة-الإدارة-1")) {
  let r = message.content.split(" ").slice(1).join(" ")
  let role = message.guild.roles.cache.find(r=> r.id == r)
  if(!r) {
    if(!role) {
      message.reply({ content: ` __** منشن الرتبة ! **__ ` });
    }
  }
  db.set(`role_${message.guild.id}` , r)
  message.reply({ content: ` __** تم تعيين ${r} كـ رتبة للإدارة ! **__ ` })
}
});
client.on("messageCreate" , message => {
  if(message.content.startsWith(prefix+"رتبة-الإدارة-2")) {
    let r2 = message.content.split(" ").slice(1).join(" ")
    let role2 = message.guild.roles.cache.find(r2=> r2.id == r2)
    if(!r2) {
      if(!role2) {
        message.reply({ content: ` __** منشن الرتبة ! **__ ` });
      }
    }
    db.set(`role2_${message.guild.id}` , r2)
    message.reply({ content: ` __** تم تعيين ${r2} كـ رتبة للإدارة ! **__ ` })
  }
  });

client.on("messageCreate" , message => {
if(message.content.startsWith(prefix+"رتبة-القبول")) {
  let r = message.content.split(" ").slice(1).join(" ")
  let role = message.guild.roles.cache.find(r=> r.id == r)
  if(!r) {
    if(!role) {
      message.reply({ content: ` __** منشن رتبة المسؤولين ! **__ ` });
    }
  }
  db.set(`rolehigh_${message.guild.id}` , r)
  message.reply({ content: ` __** تم تعيين ${r} كـ رتبة مسؤولين القبول ! **__ ` });
}
});

client.on("messageCreate" , message => {
if(message.content == prefix+"التقديم") {
  if(!db.has(`channel_${message.guild.id}`)) {
    if(!db.has(`role_${message.guild.id}`)) {
      if(!db.has(`role2_${message.guild.id}`)) {
      if(!db.has(`rolehigh_${message.guild.id}`)) {
      return  message.reply({ content: ` __** قم بتحديد الرتب و الشاتات و المسؤولين ! **__` });
      }
    }
  }
}
  let embed = new Discord.MessageEmbed()
.setAuthor({name:`${message.guild.name}` , iconURL:`${message.guild.iconURL()}`})
.setTitle(`التقديم الإداري`)
.setDescription(` __** لـ التقديم الإداري يرجى الضغط على 👮🏻 . **__ `)
.setColor("GREEN")
let row = new Discord.MessageActionRow()
.addComponents(
new Discord.MessageButton()
.setLabel(`التقديم الإداري`)
.setEmoji('👮🏻')
.setCustomId("apply")
.setStyle("SUCCESS")
)
  message.delete()
  message.channel.send({components:[row] , embeds:[embed]})
}
});

client.on('interactionCreate', async interaction => {
if (!interaction.isButton()) return;
if (interaction.customId === 'apply') {
   let role = db.get(`role_${interaction.guild.id}`)
   let role2 = db.get(`role2_${interaction.guild.id}`)
   let user = db.get(`user_${interaction.member.id}`)  
   if(user) return interaction.reply({content : " __** لا يمكنك التقديم أكثر من مرة ! **__ " , ephemeral:true})
   if(interaction.member.roles.cache.some(r=>r.id == role)) return interaction.reply({content : " __** لديك سكيورتي بوليس مسبقاَ ! **__ " , ephemeral:true}) 
   if(interaction.member.roles.cache.some(r=>r.id == role2)) return interaction.reply({content : " __** لديك بوليس ستاف مسبقاَ ! **__ " , ephemeral:true}) 

   const modal2 = new ModalBuilder()
   .setCustomId('modal2')
   .setTitle('التقديم الإداري :')
         .addComponents(
       new ModalField()
   .setCustomId('name')
   .setLabel("اسمك ؟")
         .setRequired(true)
         .setPlaceholder("يرجى كتابة إسمك هنا ... ")
         .setMin(3)
         .setMax(32)
   .setStyle('SHORT'),
           
  new ModalField()
   .setCustomId('id')
   .setLabel("أيديك ؟")
         .setRequired(true)
         .setPlaceholder(" ... يرجى كتابة ايديك هنا ")
         .setMin(4)
         .setMax(100)
   .setStyle('SHORT'),
           
       new ModalField()
   .setCustomId('sector')
   .setLabel("قطاعك العسكري ؟")
         .setRequired(true)
         .setPlaceholder(" ... يرجى كتابة قطاعك العسكري هنا ( اسم القطاع ) ")
         .setMin(5)
         .setMax(32)
         .setStyle('SHORT'),
 
         new ModalField()
   .setCustomId('5brat')
   .setLabel("خبراتك")
         .setRequired(true)
         .setPlaceholder("يرجى كتابة خبراتك هنا ...")
         .setMin(5)
         .setMax(100)
   .setStyle('PARAGRAPH'),
   new ModalField()
   .setCustomId('time')
   .setLabel("وقت تفاعلك")
         .setRequired(true)
         .setPlaceholder("يرجى كتابة وقت تفاعلك هنا ...")
         .setMin(5)
         .setMax(30)
   .setStyle('SHORT'),
         )
 await client.modal.open(interaction , modal2);
         }
 }
 ); 

client.on('modalSubmitInteraction', async interaction => {
  if(interaction.customId == "modal2") {
   let ch = db.get(`channel_${interaction.guild.id}`)
   let channel = interaction.guild.channels.cache.find(c => c.id == ch)
   const name = interaction.fields.getTextInputValue("name")
   const id = interaction.fields.getTextInputValue("id")
   const sector = interaction.fields.getTextInputValue("sector")
   const hbrat = interaction.fields.getTextInputValue("5brat")
   const time = interaction.fields.getTextInputValue("time")
   let row = new MessageActionRow().addComponents(
     new Discord.MessageButton()
     .setLabel("قبول ✅")
     .setCustomId("acc")
     .setStyle("SUCCESS"),
     new Discord.MessageButton()
     .setLabel("رفض ❌")
     .setCustomId("dec")
     .setStyle("DANGER")
   )
   interaction.reply( {content:" __** تم إرسال تقديمك ! **__ " , ephemeral:true})
   db.set(`user_${interaction.member.id}` , interaction.member.id)
   channel.send({ content:` __** تقديم جديد من : <@${interaction.member.id}> \n  إسم العسكري : ${name} \n أيدي العسكري : \`${id}\` \n قطاع العسكري : ${sector} \n خبراته : ${hbrat} \n وقت تفاعله : ${time} **__ ` , components:[row]}).then(m=> {
   db.set(`userm_${interaction.member.id}` , m.id)
   })
 }
});

client.on("interactionCreate" , interaction => {
if(interaction.isButton()) {
  if(interaction.customId == "acc") {
   // let high = db.get(`rolehigh_${interaction.guild.id}`)
   let role1 = db.get(`role_${interaction.guild.id}`)
   let role3 = db.get(`role2_${interaction.guild.id}`)
   //  if(!interaction.member.roles.cache.some(r=>r.id == high)) return interaction.reply({content:"You Are Not A High Staff !" , ephemeral:true})
    let filter = m => m.author.id == interaction.member.id
    const collector = interaction.channel.createMessageCollector({ filter , max : 1 , time: 15000 });
    interaction.reply({ content: " __** قم بإرسال أيدي الشخص بالدسكورد ! **__ " , ephemeral:true });
    collector.on("collect" , m => {
      let member = interaction.guild.members.cache.find(r=>r.id == m.content)
      let m1 = db.get(`userm_${m.content}`)
      let m2 = interaction.channel.messages.cache.find(m=> m.id == m1)
      let user = db.get(`user_${m.content}`)
      if(!user) {
        if(!m1) {
          m.delete()
          interaction.editReply({ content: ` __** هذا الشخص لم يقدم من قبل ❌ ${interaction.member} **__ ` }).then(s=> {
            setTimeout(() => {
              s.delete()
            } , 5000);
          })
       }}
      if(user) {
        if(m1) {
          let role = interaction.guild.roles.cache.find(r=>r.id == role1)
          let role2 = interaction.guild.roles.cache.find(r=>r.id == role3)
            m2.edit({ content:` __** تم قبول : ${member}  **__ ` , components:[]})
            interaction.deleteReply()
            member.roles.add(role)
            member.roles.add(role2)
            member.send({ content: ` __** لقد تم قبول تقديمك ! **__ ` });
            db.delete(`user_${m.content}`)
            db.delete(`userm_${m.content}`)
            m.delete()
      }}
    });
  }    
  if(interaction.customId == "dec") {
    // let high = db.get(`rolehigh_${interaction.guild.id}`)
  //  if(!interaction.member.roles.cache.some(r=>r.id == high)) return interaction.reply({content:"You Are Not A High Staff !" , ephemeral:true})
    let filter = m => m.author.id == interaction.member.id
    const collector = interaction.channel.createMessageCollector({ filter , max : 1 , time: 15000 });
    interaction.reply({ content: " __** أرسل أيدي الشخص بالدسكورد ! **__ " , ephemeral:true })
    collector.on("collect" , m => {
      let member = interaction.guild.members.cache.find(r=>r.id == m.content)
      let m1 = db.get(`userm_${m.content}`)
      let m2 = interaction.channel.messages.cache.find(m=> m.id == m1)
      let user = db.get(`user_${m.content}`)
      if(!user) {
        if(!m1) {
          m.delete()
          interaction.editReply({ content: ` __** هذا الشخص لم يقدم من قبل ❌ ${interaction.member} **__ ` }).then(s=> {
            setTimeout(() => {
              s.delete()
            } , 5000);
          })
       }}
      if(user) {
        if(m1) {
          m2.edit({ content: ` __** تم رفض : ${member} ❌ **__ ` , components:[]})
          interaction.deleteReply()
          member.send({ content: `__** لقد تم رفض تقديمك يرجى عدم محاولة التقديم مرى أخرة ! **__ ` });
          db.delete(`user_${m.content}`)
          db.delete(`userm_${m.content}`)
          m.delete()
      }}
    });
  }
}
});

/* client.on("messageCreate", wolf => {
  if (wolf.content == "تفعيل") {
       if(!wolf.channel.name.startsWith("ticket-")) return wolf.reply({ content: ` __** يجب إستخدام الامر بالتكتات ! **__ ` });
    //
const user = wolf.author
    //
 /*   let da7leh = wolf.guild.roles.cache.get('980494313295331328');// الداخلية
    let hrs = wolf.guild.roles.cache.get('980494332949844058');// حرس
    let w9at = wolf.guild.roles.cache.get('980494318580162590'); // قوات
    let amn = wolf.guild.roles.cache.get('980494327371399218');// امن عام
    //
    if(user.roles.cache.some(r=> r.id == da7leh)) return wolf.reply({ content: ` __** تم تفعيل العسكري مسبقاُ **__ ` });
    if(user.roles.cache.some(r=> r.id == hrs)) return wolf.reply({ content: ` __** تم تفعيل العسكري مسبقاُ **__ ` });
    if(user.roles.cache.some(r=> r.id == w9at)) return wolf.reply({ content: ` __** تم تفعيل العسكري مسبقاُ **__ ` });
    if(user.roles.cache.some(r=> r.id == amn)) return wolf.reply({ content: ` __** تم تفعيل العسكري مسبقاُ **__ ` });
      //*
    if (cooldown.has(user.id)) {
      wolf.reply({
        content: ` __** لا يمكنك التفعيل إلا مرة واحدة !
    
    يرجى إعادة التفعيل مرة أخرى بعد 5 دقائق . **__ ` });
    } else {
      let filter1 = m => m.author.id === wolf.author.id
      let filter2 = m => (m.author.id === wolf.author.id && m.content === "نعم" || m.content === "لا")
      //
      let sglaltf3el = wolf.guild.channels.cache.get('1016292689941106758')
      let w8wanen1 = wolf.guild.channels.cache.get('980494405234466836')
      let w8wanen2 = wolf.guild.channels.cache.get('980494409693020210')
      let w8wanen3 = wolf.guild.channels.cache.get('980494414763946004')
      //
      w8wanen1.permissionOverwrites.edit(user.id, { VIEW_CHANNEL: false });
      w8wanen2.permissionOverwrites.edit(user.id, { VIEW_CHANNEL: false });
      w8wanen3.permissionOverwrites.edit(user.id, { VIEW_CHANNEL: false });
      //
      var q1;
      wolf.reply({ content: ` __** اسمك ؟ **__ ` })
        .then(fox => {
          fox.channel.awaitMessages({ filter1, max: 1, time: 3600000, errors: ['time'] })
            .then(collected => {
              dbb.set(`guild=${fox.guild.id}_user=${user.id}_name`, collected.first().content)
              collected.first().delete();
              q1 = collected.first().content;
              //
              var q2;
              fox.edit({ content: ` __** عمرك ؟ **__ ` })
                .then(fox => {
                  fox.channel.awaitMessages({ filter1, max: 1, time: 3600000, errors: ['time'] })
                    .then(collected => {
                      dbb.set(`guild=${fox.guild.id}_user=${user.id}_aeg`, collected.first().content)
                      collected.first().delete();
                      q2 = collected.first().content;
                      //
                      var q3;
                      fox.edit({ content: ` __** ايديك ؟ **__ ` })
                        .then(fox => {
                          fox.channel.awaitMessages({ filter1, max: 1, time: 3600000, errors: ['time'] })
                            .then(collected => {
                              dbb.set(`guild=${fox.guild.id}_user=${user.id}_id`, collected.first().content)
                              collected.first().delete();
                              q3 = collected.first().content;
                              //
                              var q4;
                              fox.edit({ content: ` __** قطاعك ؟ **__ ` })
                                .then(fox => {
                                  fox.channel.awaitMessages({ filter1, max: 1, time: 3600000, errors: ['time'] })
                                    .then(collected => {
                                      dbb.set(`guild=${fox.guild.id}_user=${user.id}_sector`, collected.first().content)
                                      collected.first().delete();
                                      q4 = collected.first().content;
                                      //
                                      var q5;
                                      fox.edit({
                                        content: ` __** هل يجب التعامل مع المواطنين بإسلوب جيد ؟ 
هل الجملة صحيحة أم خاطئة ؟ 
 اذا كانت صحيحة قم بكتابة نعم .
و إذا كانت خاطئة قم بكتابة لا . **__ ` })
                                        .then(fox => {
                                          fox.channel.awaitMessages({ filter2, max: 1, time: 3600000, errors: ['time'] })
                                            .then(collected => {
                                              collected.first().delete();
                                              q5 = collected.first().content;
                                              //
                                              var q6;
                                              fox.edit({
                                                content: ` __** عقوبة مخالفة الميثاق العسكري هيا : الفصل 
هل الجملة صحيحة أم خاطئة ؟ 
 اذا كانت صحيحة قم بكتابة نعم
 و إذا كانت خاطئة قم بكتابة لا . **__ ` })
                                                .then(fox => {
                                                  fox.channel.awaitMessages({ filter2, max: 1, time: 3600000, errors: ['time'] })
                                                    .then(collected => {
                                                      collected.first().delete();
                                                      q6 = collected.first().content;
                                                      //  
                                                      var q7;
                                                      fox.edit({
                                                        content: ` __** يسمح بـ رفع السلاح بالمنطقة الآمنة ؟
هل الجملة صحيحة أم خاطئة ؟ 
 اذا كانت صحيحة قم بكتابة نعم
 و إذا كانت خاطئة قم بكتابة لا . **__ ` })
                                                        .then(fox => {
                                                          fox.channel.awaitMessages({ filter2, max: 1, time: 3600000, errors: ['time'] })
                                                            .then(collected => {
                                                              collected.first().delete();
                                                              q7 = collected.first().content;
                                                              //  
                                                              var q8;
                                                              fox.edit({
                                                                content: ` __** يسمح بـ عدم دخول الراديو ؟
هل الجملة صحيحة أم خاطئة ؟ 
 اذا كانت صحيحة قم بكتابة نعم
 و إذا كانت خاطئة قم بكتابة لا . **__ ` })
                                                                .then(fox => {
                                                                  fox.channel.awaitMessages({ filter2, max: 1, time: 3600000, errors: ['time'] })
                                                                    .then(collected => {
                                                                      collected.first().delete();
                                                                      q8 = collected.first().content;
                                                                      //  
                                                                      var q9;
                                                                      fox.edit({
                                                                        content: ` __** الجدية بالعمل من أساسيات العسكري ؟
هل الجملة صحيحة أم خاطئة ؟ 
 اذا كانت صحيحة قم بكتابة نعم
 و إذا كانت خاطئة قم بكتابة لا . **__ ` })
                                                                        .then(fox => {
                                                                          fox.channel.awaitMessages({ filter2, max: 1, time: 3600000, errors: ['time'] })
                                                                            .then(collected => {
                                                                              collected.first().delete();
                                                                              q9 = collected.first().content;
                                                                              //  
                                                                              var q10;
                                                                              fox.edit({
                                                                                content: ` __** أعلى رتبة هو من يستلم التنظيم ؟
هل الجملة صحيحة أم خاطئة ؟ 
 اذا كانت صحيحة قم بكتابة نعم
 و إذا كانت خاطئة قم بكتابة لا . **__ ` })
                                                                                .then(fox => {
                                                                                  fox.channel.awaitMessages({ filter2, max: 1, time: 3600000, errors: ['time'] })
                                                                                    .then(collected => {
                                                                                      collected.first().delete();
                                                                                      q10 = collected.first().content;
                                                                                      //  
                                                                                      var q11;
                                                                                      fox.edit({
                                                                                        content: ` __** المطاردات تكون فردية ؟ 
هل الجملة صحيحة أم خاطئة ؟ 
 اذا كانت صحيصحة قم بكتابة نعم
 و إذا كانت خاطئة قم بكتابة لا . **__ ` })
                                                                                        .then(fox => {
                                                                                          fox.channel.awaitMessages({ filter2, max: 1, time: 3600000, errors: ['time'] })
                                                                                            .then(collected => {
                                                                                              collected.first().delete();
                                                                                              q11 = collected.first().content;
                                                                                              //  
                                                                                              var q12;
                                                                                              fox.edit({
                                                                                                content: ` __** انزال التحية من دون إذن يعد اهانة للأفراد ؟
هل الجملة صحيحة أم خاطئة ؟ 
 اذا كانت صحيحة قم بكتابة نعم
 و إذا كانت خاطئة قم بكتابة لا . **__ ` })
                                                                                                .then(fox => {
                                                                                                  fox.channel.awaitMessages({ filter2, max: 1, time: 3600000, errors: ['time'] })
                                                                                                    .then(collected => {
                                                                                                      collected.first().delete();
                                                                                                      q12 = collected.first().content;
                                                                                                      //  
                                                                                                      var q13;
                                                                                                      fox.edit({
                                                                                                        content: ` __** يسمح بـ السرعة في الملكية و التصديم و العبث بالممتلكات ؟
هل الجملة صحيحة أم خاطئة ؟ 
 اذا كانت صحيحة قم بكتابة نعم
 و إذا كانت خاطئة قم بكتابة لا . **__ ` })
                                                                                                        .then(fox => {
                                                                                                          fox.channel.awaitMessages({ filter2, max: 1, time: 3600000, errors: ['time'] })
                                                                                                            .then(collected => {
                                                                                                              collected.first().delete();
                                                                                                              q13 = collected.first().content;
                                                                                                              //  
                                                                                                              var q14;
                                                                                                              fox.edit({
                                                                                                                content: ` __** يسمح بـ تشغيل السفاتي للحالات الخاصة فقط مثل وجود مطاردة ؟
هل الجملة صحيحة أم خاطئة ؟ 
 اذا كانت صحيحة قم بكتابة نعم
 و إذا كانت خاطئة قم بكتابة لا . **__ ` })
                                                                                                                .then(fox => {
                                                                                                                  fox.channel.awaitMessages({ filter2, max: 1, time: 3600000, errors: ['time'] })
                                                                                                                    .then(collected => {
                                                                                                                      collected.first().delete();
                                                                                                                      q14 = collected.first().content;
                                                                                                                      //  
                                                                                                                      var q15;
                                                                                                                      fox.edit({
                                                                                                                        content: ` __** البند الثالث عشر هو : عدم التشكيك بقرارات الرُتب العُليا . ؟
هل الجملة صحيحة أم خاطئة ؟ 
 اذا كانت صحيحة قم بكتابة نعم
 و إذا كانت خاطئة قم بكتابة لا . **__ ` })
                                                                                                                        .then(fox => {
                                                                                                                          fox.channel.awaitMessages({ filter2, max: 1, time: 3600000, errors: ['time'] })
                                                                                                                            .then(collected => {
                                                                                                                              collected.first().delete();
                                                                                                                              q15 = collected.first().content;
                                                                                                                              //  
                                                                                                                              var q16;
                                                                                                                              fox.edit({
                                                                                                                                content: ` __** البند الثلاثون هو : إحترام المسؤولين . ؟
هل الجملة صحيحة أم خاطئة ؟ 
 اذا كانت صحيحة قم بكتابة نعم
 و إذا كانت خاطئة قم بكتابة لا . **__ ` })
                                                                                                                                .then(fox => {
                                                                                                                                  fox.channel.awaitMessages({ filter2, max: 1, time: 3600000, errors: ['time'] })
                                                                                                                                    .then(collected => {
                                                                                                                                      collected.first().delete();
                                                                                                                                      q16 = collected.first().content;
                                                                                                                                      // 
                                                                                                                                      var q17;
                                                                                                                                      fox.edit({
content: ` __** يسمح بـ إفشال تفاوض لـ إستهزاء الطرف الآخر بالعساكر ؟
هل الجملة صحيحة أم خاطئة ؟ 
 اذا كانت صحيحة قم بكتابة نعم
 و إذا كانت خاطئة قم بكتابة لا . **__ ` })
                                                                                                                                        .then(fox => {
                                                                                                                                          fox.channel.awaitMessages({ filter2, max: 1, time: 3600000, errors: ['time'] })
                                                                                                                                            .then(collected => {
                                                                                                                                              collected.first().delete();
                                                                                                                                              q17 = collected.first().content;
                                                                                                                                              // 
                                                                                                                                              var q18;
                                                                                                                                              fox.edit({
                                                                                                                                                content: ` __** يسمح بـ إعدام إي عضو عصابة ؟
هل الجملة صحيحة أم خاطئة ؟ 
 اذا كانت صحيصحة قم بكتابة نعم
 و إذا كانت خاطئة قم بكتابة لا . **__ ` })
                                                                                                                                                .then(fox => {
                                                                                                                                                  fox.channel.awaitMessages({ filter2, max: 1, time: 3600000, errors: ['time'] })
                                                                                                                                                    .then(collected => {
                                                                                                                                                      collected.first().delete();
                                                                                                                                                      q18 = collected.first().content;
                                                                                                                                                      // 
                                                                                                                                                      var q19;
                                                                                                                                                      fox.edit({
                                                                                                                                                        content: ` __** عدد البنود العسكرية 25 ؟ 
هل الجملة صحيحة أم خاطئة ؟ 
 اذا كانت صحيحة قم بكتابة نعم
 و إذا كانت خاطئة قم بكتابة لا . **__ ` })
                                                                                                                                                        .then(fox => {
                                                                                                                                                          fox.channel.awaitMessages({ filter2, max: 1, time: 3600000, errors: ['time'] })
                                                                                                                                                            .then(collected => {
                                                                                                                                                              collected.first().delete();
                                                                                                                                                              q19 = collected.first().content;
                                                                                                                                                              // 
                                                                                                                                                              var q20;
                                                                                                                                                              fox.edit({
                                                                                                                                                                content: ` __** التجمهر غرامته 1000 ﷼ ؟
هل الجملة صحيحة أم خاطئة ؟ 
 اذا كانت صحيحة قم بكتابة نعم
 و إذا كانت خاطئة قم بكتابة لا . **__ ` })
                                                                                                                                                                .then(fox => {
                                                                                                                                                                  fox.channel.awaitMessages({ filter2, max: 1, time: 3600000, errors: ['time'] })
                                                                                                                                                                    .then(collected => {
                                                                                                                                                                      collected.first().delete();
                                                                                                                                                                      q20 = collected.first().content;
                                                                                                                                                                      //
                                                                                                                                                                      if (q5 === "نعم") {
                                                                                                                                                                        dbb.add(`true_${user.id}`, 1)
                                                                                                                                                                      } else if (q5 === "لا") {
                                                                                                                                                                        dbb.add(`false_${user.id}`, 1)
                                                                                                                                                                      }
                                                                                                                                                                      if (q6 === "لا") {
                                                                                                                                                                        dbb.add(`true_${user.id}`, 1)
} else if (q6 === "نعم") {
                                                                                                                                                                        dbb.add(`false_${user.id}`, 1)
}
                                                                                                                                                                      if (q7 === "لا") {
                                                                                                                                                                        dbb.add(`true_${user.id}`, 1)
                                                                                                                                                                      } else if (q7 === "نعم") {
                                                                                                                                                                        dbb.add(`false_${user.id}`, 1)
                                                                                                                                                                      }
                                                                                                                                                                      if (q8 === "لا") {
                                                                                                                                                                        dbb.add(`true_${user.id}`, 1)
                                                                                                                                                                      } else if (q8 === "نعم") {
                                                                                                                                                                        dbb.add(`false_${user.id}`, 1)
                                                                                                                                                                      }
                                                                                                                                                                      if (q9 === "نعم") {
                                                                                                                                                                        dbb.add(`true_${user.id}`, 1)
                                                                                                                                                                      } else if (q9 === "لا") {
                                                                                                                                                                        dbb.add(`false_${user.id}`, 1)
                                                                                                                                                                      }
                                                                                                                                                                      if (q10 === "نعم") {
                                                                                                                                                                        dbb.add(`true_${user.id}`, 1)
                                                                                                                                                                      } else if (q10 === "لا") {
                                                                                                                                                                        dbb.add(`false_${user.id}`, 1)
                                                                                                                                                                      }
                                                                                                                                                                      if (q11 === "لا") {
                                                                                                                                                                        dbb.add(`true_${user.id}`, 1)
                                                                                                                                                                      } else if (q11 === "نعم") {
                                                                                                                                                                        dbb.add(`false_${user.id}`, 1)
                                                                                                                                                                      }
                                                                                                                                                                      if (q12 === "لا") {
                                                                                                                                                                        dbb.add(`true_${user.id}`, 1)
                                                                                                                                                                      } else if (q12 === "نعم") {
                                                                                                                                                                        dbb.add(`false_${user.id}`, 1)
                                                                                                                                                                      }
                                                                                                                                                                      if (q13 === "لا") {
                                                                                                                                                                        dbb.add(`true_${user.id}`, 1)
                                                                                                                                                                      } else if (q13 === "نعم") {
                                                                                                                                                                        dbb.add(`false_${user.id}`, 1)
                                                                                                                                                                      }
                                                                                                                                                                      if (q14 === "نعم") {
                                                                                                                                                                        dbb.add(`true_${user.id}`, 1)
                                                                                                                                                                      } else if (q14 === "لا") {
                                                                                                                                                                        dbb.add(`false_${user.id}`, 1)
                                                                                                                                                                      }
                                                                                                                                                                      if (q15 === "لا") {
                                                                                                                                                                        dbb.add(`true_${user.id}`, 1)
                                                                                                                                                                      } else if (q15 === "نعم") {
                                                                                                                                                                        dbb.add(`false_${user.id}`, 1)
                                                                                                                                                                      }
                                                                                                                                                                      if (q16 === "لا") {
                                                                                                                                                                        dbb.add(`true_${user.id}`, 1)
                                                                                                                                                                      } else if (q16 === "نعم") {
                                                                                                                                                                        dbb.add(`false_${user.id}`, 1)
                                                                                                                                                                      }
                                                                                                                                                                      if (q17 === "لا") {
                                                                                                                                                                        dbb.add(`true_${user.id}`, 1)
                                                                                                                                                                      } else if (q17 === "نعم") {
                                                                                                                                                                        dbb.add(`false_${user.id}`, 1)
                                                                                                                                                                      }
                                                                                                                                                                      if (q18 === "لا") {
                                                                                                                                                                        dbb.add(`true_${user.id}`, 1)
                                                                                                                                                                      } else if (q18 === "نعم") {
                                                                                                                                                                        dbb.add(`false_${user.id}`, 1)
                                                                                                                                                                      }
                                                                                                                                                                      if (q19 === "نعم") {
                                                                                                                                                                        dbb.add(`true_${user.id}`, 1)
                                                                                                                                                                      } else if (q19 === "لا") {
                                                                                                                                                                        dbb.add(`false_${user.id}`, 1)
                                                                                                                                                                      }
                                                                                                                                                                      if (q20 === "لا") {
                                                                                                                                                                        dbb.add(`true_${user.id}`, 1)
                                                                                                                                                                      } else if (q20 === "نعم") {
                                                                                                                                                                        dbb.add(`false_${user.id}`, 1)
                                                                                                                                                                      }
                                                                                                                                                                      let truee = dbb.fetch(`true_${user.id}`)
                                                                                                                                                                      let falsee = dbb.fetch(`false_${user.id}`)
                                                                                                                                                                      var done
                                                                                                                                                                      if (!falsee) falsee = 0
                                                                                                                                                                      if (!truee) truee = 0
                                                                                                                                                                      if (falsee > 5) {
                                                                                                                                                                        done = "مرفوض"
                                                                                                                                                                      } else if (falsee <= 5) {
                                                                                                                                                                        done = "مقبول"
                                                                                                                                                                      }
                                                                                                                                                                      var name = dbb.fetch(`guild=${fox.guild.id}_user=${user.id}_name`)
                                                                                                                                                                      var aeg = dbb.fetch(`guild=${fox.guild.id}_user=${user.id}_aeg`)
                                                                                                                                                                      var sector = dbb.fetch(`guild=${fox.guild.id}_user=${user.id}_sector`)
                                                                                                                                                                      var id = dbb.fetch(`guild=${fox.guild.id}_user=${user.id}_id`)
                                                                                                                                                                      //
fox.reply({ content: ` __** FBI Police || التفعيل العسكري . \n  هوية العسكري : <@${user.id}> .
. إسم العسكري : ${name} 
. عمر العسكري : ${aeg} 
. قطاع العسكري : ${sector} 
. أيدي العسكري : \`${id}\` .
. عدد الأجوبة الصحيحة : ${truee} 
. عدد الأجوبة الخاطئة : ${falsee} 
. الحالة : ${done} \n وطن لا نحميه لا نستحق العيش فيه | وطن لا نفديه حياتنا لا نستحق العيش فيه . **__ ` });
fox.delete();
//
sglaltf3el.send({ content: ` __** FBI Police || التفعيل العسكري . \n  هوية العسكري : <@${user.id}> .
. إسم العسكري : ${name} 
. عمر العسكري : ${aeg} 
. قطاع العسكري : ${sector} 
. أيدي العسكري : \`${id}\` .
. عدد الأجوبة الصحيحة : ${truee} 
. عدد الأجوبة الخاطئة : ${falsee} 
. الحالة : ${done} \n وطن لا نحميه لا نستحق العيش فيه | وطن لا نفديه حياتنا لا نستحق العيش فيه . **__ `, files: ["https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png"] });
                                                                                                                                                                      w8wanen1.permissionOverwrites.edit(user.id, { VIEW_CHANNEL: null });
                                                                                                                                                                      w8wanen2.permissionOverwrites.edit(user.id, { VIEW_CHANNEL: null });
                                                                                                                                                                      w8wanen3.permissionOverwrites.edit(user.id, { VIEW_CHANNEL: null });
//
dbb.delete(`guild=${fox.guild.id}_user=${user.id}_name`)
dbb.delete(`guild=${fox.guild.id}_user=${user.id}_age`)
dbb.delete(`guild=${fox.guild.id}_user=${user.id}_sector`)
dbb.delete(`guild=${fox.guild.id}_user=${user.id}_id`)
//
dbb.delete(`true_${user.id}`)
dbb.delete(`false_${user.id}`)
//
cooldown.add(user.id)
setTimeout(() => {
cooldown.delete(user.id)
}, 90000)
})
                                                                                                                                                                })
                                                                                                                                                            })
                                                                                                                                                        })
                                                                                                                                                    })
                                                                                                                                                })
                                                                                                                                            })
                                                                                                                                        })
                                                                                                                                    })
                                                                                                                                })
                                                                                                                            })
                                                                                                                        })
                                                                                                                    })
                                                                                                                })
                                                                                                            })
                                                                                                        })
                                                                                                    })
                                                                                                })
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    }
  }
}); */

client.login(process.env.token) 