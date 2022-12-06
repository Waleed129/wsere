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
    if(message.content === prefix+'توضيح') {
     // 
      if (message.guild.id == '980493720233316372') {
              //
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
      }
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
    //
     if (message.guild.id == '980493720233316372') {
      if (!message.member.permissions.has('ADMINISTRATOR'))
        //
        if (!message.member.roles.cache.has('980494296320999424'))
          return message.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' });
    //
    if(!dbb.has(`logtf3el_${message.guild.id}`)) return message.reply({ content: ` __** يرجى تعيين لوق التفعيل قبل !
  \`${prefix}لوق-التفعيل\` **__ ` });
    //
      if (!member) return message.reply({ content: ' __** منشن العسكري **__ ' });
     if(message.author.id == user.id) return message.reply({ content: ` __** لا يمكنك تفعيل نفسك ! **__ ` });
      if(user.bot) return message.reply({ content: " __** لا يمكن تفعيل البوتات :x: **__ " });
        //
  let idps4 = message.content.split(' ').slice(2).join(' ')
  if(!idps4) return message.reply({ content: `__** يرجى كتابة أيدي العسكري **__ ` })
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
      label: 'امن-الطرق',
      description: 'لـ تفعيل شخص بـ قطاع امن الطرق',
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
      .setDescription(` __** تم تفعيل : ${user} \n و الأيدي : ${idps4} \n و الكود العسكري : T-${count || 0} \n و إسمه بالكامل : ${user.nickname} \n من قبل الإداري : ${message.author} **__ `);
    
    logtf3el.send({ embeds: [embed2] });
    logtf3el.send({ files: ["https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png"] });  
        m.delete();  
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
      amn3am.send({ content: ` __** تم تفعيل العسكري : ${user} \n أيديه : \`${idps4}\` \n كوده العسكري : G-${count || 0} \n قطاعه : <@&980494327371399218> \n <@&980494296320999424> **__ `, files: ["https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png"] });
      //
      i.channel.send({ content: " __** تم تفعيل `العسكري` بـ نجاح **__ " });
      
      let embed2 = new Discord.MessageEmbed()
      .setColor(`#32496b`)
      .setDescription(` __** تم تفعيل : ${user} \n و الأيدي : ${idps4} \n و الكود العسكري : G-${count || 0} \n و إسمه بالكامل : ${user.nickname} \n من قبل الإداري : ${message.author} **__ `);
    
    logtf3el.send({ embeds: [embed2] });
    logtf3el.send({ files: ["https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png"] });  
           m.delete();  
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
      gwat5a9h.send({ content: ` __** تم تفعيل العسكري : ${user} \n أيديه : \`${idps4}\` \n كوده العسكري : S-${count || 0} \n قطاعه : <@&980494318580162590> \n <@&980494296320999424> **__ `, files: ["https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png"] });
      //
      i.channel.send({ content: " __** تم تفعيل `العسكري` بـ نجاح **__ " });
      
      let embed2 = new Discord.MessageEmbed()
      .setColor(`#32496b`)
      .setDescription(` __** تم تفعيل : ${user} \n و الأيدي : ${idps4} \n و الكود العسكري : S-${count || 0} \n و إسمه بالكامل : ${user.nickname} \n من قبل الإداري : ${message.author} **__ `);
    
    logtf3el.send({ embeds: [embed2] });
    logtf3el.send({ files: ["https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png"] });
m.delete();  
    }
    }
    })
  }
    // عصابات
if (message.guild.id == '996810757238968431') {


 if (!message.member.permissions.has('ADMINISTRATOR'))
        //
        if (!message.member.roles.cache.has('996820405828464742'))
          return message.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' });
    //
    if(!dbb.has(`logtf3el_${message.guild.id}`)) return message.reply({ content: ` __** يرجى تعيين لوق التفعيل قبل !
  \`${prefix}لوق-التفعيل\` **__ ` });
    //
      if (!member) return message.reply({ content: ' __** منشن عضو العصابة ! **__ ' });
     if(message.author.id == user.id) return message.reply({ content: ` __** لا يمكنك تفعيل نفسك ! **__ ` });
      if(user.bot) return message.reply({ content: " __** لا يمكن تفعيل البوتات :x: **__ " });
        //
  let idps4 = message.content.split(' ').slice(2).join(' ')
  if(!idps4) return message.reply({ content: `__** يرجى كتابة أيدي عضو العصابة ! **__ ` })
//
    let row2 = new Discord.MessageActionRow()
    .addComponents(
    new Discord.MessageSelectMenu()
    .setMinValues(0)
    .setMaxValues(1)
    .setPlaceholder('إضغط هنا لرؤية خريطة التفعيل')
    .setCustomId('tf3el3sabat')
    .addOptions([
      {
        label: 'ذا-بلود',
        description: 'لـ تفعيل شخص بـ عصابة ذا بلود',
        emoji: '💀',
        value: 'blood'
        },
    {
    label: 'مافيا',
    description: 'لـ تفعيل شخص بـ عصابة مافيا',
    emoji: '💀',
    value: 'mafua'
    },
    {
      label: 'بيكي-بلاندرز',
      description: 'لـ تفعيل شخص بـ عصابة بيكي بلاندرز',
      emoji: '💀',
      value: 'peaky'
      },
      {
      label: 'بلاك-ماركت',
      description: 'لـ تفعيل شخص بـ عصابة بلاك ماركت',
      emoji: '💀',
      value: 'blackmarkt'
      }
    ])
    )
    let embed2 = new Discord.MessageEmbed()
    .setColor('RED')
    .setDescription('__** لـ تفعيل عضو قم بإختيار العصابة من الأسفل . **__')  
    let m = await message.reply({ embeds: [embed2], components: [row2] });
  
    let collector = m.createMessageComponentCollector({ filter: i => i.user.id === message.author.id, time: 3600000})
    
      collector.on('collect', async i => {
      if (i.customId == "tf3el3sabat") {
      if(i.values[0] === 'blood' || i.values[1] === 'blood') {
        if (!i.member.permissions.has('ADMINISTRATOR'))
        if (!i.member.roles.cache.has('996820405828464742'))
          return i.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' , ephemeral: true });
        //
        let ch = dbb.get(`logtf3el_${message.guild.id}`)
        let logtf3el = message.guild.channels.cache.find(c => c.id == ch)
        //
        let h9o = message.guild.roles.cache.get('996820412421898431');// الداخلية
        let blood = message.guild.roles.cache.get('996820414133174292');// القوات
        //
        if(user.roles.cache.some(r=> r.id == h9o)) return i.reply({ content: ` __** تم تفعيل العضو مسبقاُ **__ ` , ephemeral: true });
        if(user.roles.cache.some(r=> r.id == blood)) return i.reply({ content: ` __** تم تفعيل العضو مسبقاُ **__ ` , ephemeral: true });
        //
        member.roles.add(h9o);
        member.roles.add(blood);
        //
        let embed = new MessageEmbed()
        .setTitle("تفعيل العصابات")
        .setDescription(` __** عزيزي عضو البلود : ${user} . \n صاحب الأيدي : \`${idps4}\` . \n نحيطك علماَ بأنه قم تم تفعيلك في FBI Gang و إعتبارك عضو عصابة في ذا بلود رسمياَ . \n و قد تم تفعيلك من الإداري : ${message.author} . **__ `)
        .setImage('https://cdn.discordapp.com/attachments/996820450275500093/1049453075779305492/9BFA5912-825A-46FB-93E3-5B2863DB6D8F.png')
        .setThumbnail(user.user.avatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor("#11e2e2")
        i.channel.send({ embeds: [embed] });
      //
      user.setNickname(`${idps4}`);
      //
      i.channel.send({ content: " __** تم تفعيل عضو `البلود` بـ نجاح **__ " });
      
      let embed2 = new Discord.MessageEmbed()
      .setColor(`#32496b`)
      .setDescription(` __** تم تفعيل : ${user} \n و الأيدي : ${idps4} . \n و إسمه بالكامل : ${user.nickname} \n من قبل الإداري : ${message.author} **__ `);
    
    logtf3el.send({ embeds: [embed2] });
    logtf3el.send({ files: ["https://cdn.discordapp.com/attachments/996820450275500093/1049453075779305492/9BFA5912-825A-46FB-93E3-5B2863DB6D8F.png"] });  
        m.delete();  
    }
    //
              if(i.values[0] === 'mafua' || i.values[1] === 'mafua') {
             if (!i.member.permissions.has('ADMINISTRATOR'))
        if (!i.member.roles.cache.has('996820405828464742'))
          return i.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' , ephemeral: true });
        //
        let ch = dbb.get(`logtf3el_${message.guild.id}`)
        let logtf3el = message.guild.channels.cache.find(c => c.id == ch)
        //
        let h9o = message.guild.roles.cache.get('996820412421898431');// الداخلية
        let mafua = message.guild.roles.cache.get('996820419745169408');// القوات
        //
        if(user.roles.cache.some(r=> r.id == h9o)) return i.reply({ content: ` __** تم تفعيل العضو مسبقاُ **__ ` , ephemeral: true });
        if(user.roles.cache.some(r=> r.id == mafua)) return i.reply({ content: ` __** تم تفعيل العضو مسبقاُ **__ ` , ephemeral: true });
        //
        member.roles.add(h9o);
        member.roles.add(mafua);
        //
        let embed = new MessageEmbed()
        .setTitle("تفعيل العصابات")
        .setDescription(` __** عزيزي عضو المافيا : ${user} . \n صاحب الأيدي : \`${idps4}\` . \n نحيطك علماَ بأنه قم تم تفعيلك في FBI Gang و إعتبارك عضو عصابة في المافيا رسمياَ . \n و قد تم تفعيلك من الإداري : ${message.author} . **__ `)
        .setImage('https://cdn.discordapp.com/attachments/996820450275500093/1049453075779305492/9BFA5912-825A-46FB-93E3-5B2863DB6D8F.png')
        .setThumbnail(user.user.avatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor("#11e2e2")
        i.channel.send({ embeds: [embed] });
      //
      user.setNickname(`${idps4}`);
      //
      i.channel.send({ content: " __** تم تفعيل عضو `المافيا` بـ نجاح **__ " });
      
      let embed2 = new Discord.MessageEmbed()
      .setColor(`#32496b`)
      .setDescription(` __** تم تفعيل : ${user} \n و الأيدي : ${idps4} . \n و إسمه بالكامل : ${user.nickname} \n من قبل الإداري : ${message.author} **__ `);
    
    logtf3el.send({ embeds: [embed2] });
    logtf3el.send({ files: ["https://cdn.discordapp.com/attachments/996820450275500093/1049453075779305492/9BFA5912-825A-46FB-93E3-5B2863DB6D8F.png"] });  
        m.delete();  
    }
    //
              if(i.values[0] === 'peaky' || i.values[1] === 'peaky') {
               if (!i.member.permissions.has('ADMINISTRATOR'))
        if (!i.member.roles.cache.has('996820405828464742'))
          return i.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' , ephemeral: true });
        //
        let ch = dbb.get(`logtf3el_${message.guild.id}`)
        let logtf3el = message.guild.channels.cache.find(c => c.id == ch)
        //
        let h9o = message.guild.roles.cache.get('996820412421898431');// الداخلية
        let peaky = message.guild.roles.cache.get('999371184254763139');// القوات
        //
        if(user.roles.cache.some(r=> r.id == h9o)) return i.reply({ content: ` __** تم تفعيل العضو مسبقاُ **__ ` , ephemeral: true });
        if(user.roles.cache.some(r=> r.id == peaky)) return i.reply({ content: ` __** تم تفعيل العضو مسبقاُ **__ ` , ephemeral: true });
        //
        member.roles.add(h9o);
        member.roles.add(peaky);
        //
        let embed = new MessageEmbed()
        .setTitle("تفعيل العصابات")
        .setDescription(` __** عزيزي عضو بيكي : ${user} . \n صاحب الأيدي : \`${idps4}\` . \n نحيطك علماَ بأنه قم تم تفعيلك في FBI Gang و إعتبارك عضو عصابة في بيكي بلاندرز رسمياَ . \n و قد تم تفعيلك من الإداري : ${message.author} . **__ `)
        .setImage('https://cdn.discordapp.com/attachments/996820450275500093/1049453075779305492/9BFA5912-825A-46FB-93E3-5B2863DB6D8F.png')
        .setThumbnail(user.user.avatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor("#11e2e2")
        i.channel.send({ embeds: [embed] });
      //
      user.setNickname(`${idps4}`);
      //
      i.channel.send({ content: " __** تم تفعيل عضو `بيكي` بـ نجاح **__ " });
      
      let embed2 = new Discord.MessageEmbed()
      .setColor(`#32496b`)
      .setDescription(` __** تم تفعيل : ${user} \n و الأيدي : ${idps4} . \n و إسمه بالكامل : ${user.nickname} \n من قبل الإداري : ${message.author} **__ `);
    
    logtf3el.send({ embeds: [embed2] });
    logtf3el.send({ files: ["https://cdn.discordapp.com/attachments/996820450275500093/1049453075779305492/9BFA5912-825A-46FB-93E3-5B2863DB6D8F.png"] });  
        m.delete();  
    }
        //
                      if(i.values[0] === 'blackmarkt' || i.values[1] === 'blackmarkt') {
               if (!i.member.permissions.has('ADMINISTRATOR'))
        if (!i.member.roles.cache.has('996820405828464742'))
          return i.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' , ephemeral: true });
        //
        let ch = dbb.get(`logtf3el_${message.guild.id}`)
        let logtf3el = message.guild.channels.cache.find(c => c.id == ch)
        //
        let h9o = message.guild.roles.cache.get('996820412421898431');// الداخلية
        let blackmarkt = message.guild.roles.cache.get('999371184254763139');// القوات
        //
        if(user.roles.cache.some(r=> r.id == h9o)) return i.reply({ content: ` __** تم تفعيل العضو مسبقاُ **__ ` , ephemeral: true });
        if(user.roles.cache.some(r=> r.id == blackmarkt)) return i.reply({ content: ` __** تم تفعيل العضو مسبقاُ **__ ` , ephemeral: true });
        //
        member.roles.add(h9o);
        member.roles.add(blackmarkt);
        //
        let embed = new MessageEmbed()
        .setTitle("تفعيل العصابات")
        .setDescription(` __** عزيزي عضو البلاك : ${user} . \n صاحب الأيدي : \`${idps4}\` . \n نحيطك علماَ بأنه قم تم تفعيلك في FBI Gang و إعتبارك عضو عصابة في البلاك ماركت رسمياَ . \n و قد تم تفعيلك من الإداري : ${message.author} . **__ `)
        .setImage('https://cdn.discordapp.com/attachments/996820450275500093/1049453075779305492/9BFA5912-825A-46FB-93E3-5B2863DB6D8F.png')
        .setThumbnail(user.user.avatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor("#11e2e2")
        i.channel.send({ embeds: [embed] });
      //
      user.setNickname(`${idps4}`);
      //
      i.channel.send({ content: " __** تم تفعيل عضو `البلاك` بـ نجاح **__ " });
      
      let embed2 = new Discord.MessageEmbed()
      .setColor(`#32496b`)
      .setDescription(` __** تم تفعيل : ${user} \n و الأيدي : ${idps4} . \n و إسمه بالكامل : ${user.nickname} \n من قبل الإداري : ${message.author} **__ `);
    
    logtf3el.send({ embeds: [embed2] });
    logtf3el.send({ files: ["https://cdn.discordapp.com/attachments/996820450275500093/1049453075779305492/9BFA5912-825A-46FB-93E3-5B2863DB6D8F.png"] });  
        m.delete();  
    }
    }
    })
}
    //
}});

client.on("messageCreate", async message => {
  if(message.author.bot) return;
  if (message.content.startsWith(prefix+"ترقية")) {
 let member = message.mentions.members.first();
     let user = message.mentions.members.first();
                  if (message.guild.id == '980493720233316372') {
      if (!message.member.permissions.has('ADMINISTRATOR'))
//
if (!message.member.roles.cache.has('980494296320999424'))
          return message.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' });
    //
    if(!dbb.has(`logtf3el_${message.guild.id}`)) return message.reply({ content: ` __** يرجى تعيين لوق التفعيل قبل !
  \`${prefix}لوق-التفعيل\` **__ ` });
    //
      if (!member) return message.reply({ content: ' __** منشن العضو **__ ' });
     if(message.author.id == user.id) return message.reply({ content: ` __** لا يمكنك ترقية نفسك ! **__ ` });
      if(user.bot) return message.reply({ content: " __** لا يمكن ترقية البوتات :x: **__ " });
    //
    let row = new Discord.MessageActionRow()
    .addComponents(
    new Discord.MessageSelectMenu()
    .setMinValues(0)
    .setMaxValues(1)
    .setPlaceholder('إضغط هنا لرؤية خريطة الترقيات')
    .setCustomId('tr8eh')
    .addOptions([
      {
        label: 'تحت-التدريب',
        description: 'لـ ترقية شخص إلى جندي تحت التدريب',
        emoji: '👮🏻‍♂️',
        value: 't7taltdreb'
        },
    {
    label: 'جندي',
    description: 'لـ ترقية شخص إلى جندي',
    emoji: '👮🏻‍♂️',
    value: 'gnde'
    },
    {
      label: 'جندي-أول',
      description: 'لـ ترقية شخص إلى جندي أول',
      emoji: '👮🏻‍♂️',
      value: 'gndeaol'
      },
      {
        label: 'عريف',
        description: 'لـ ترقية شخص إلى عريف',
        emoji: '👮🏻‍♂️',
        value: '3ref'
        },
        {
          label: 'رقيب',
          description: 'لـ ترقية شخص إلى رقيب',
          emoji: '👮🏻‍♂️',
          value: 'r8eb'
          },
          {
            label: 'رقيب-أول',
            description: 'لـ ترقية شخص إلى رقيب أول',
            emoji: '👮🏻‍♂️',
            value: 'r8ebaol'
            },
            {
              label: 'ملازم',
              description: 'لـ ترقية شخص إلى ملازم',
              emoji: '👮🏻‍♂️',
              value: 'mlazm'
              },
              {
                label: 'ملازم-أول',
                description: 'لـ ترقية شخص إلى ملازم أول',
                emoji: '👮🏻‍♂️',
                value: 'mlazmaol'
                },
                {
                  label: 'عقيد',
                  description: 'لـ ترقية شخص إلى عقيد',
                  emoji: '👮🏻‍♂️',
                  value: '38ed'
                  },
                  {
                    label: 'لواء',
                    description: 'لـ ترقية شخص إلى لواء',
                    emoji: '👮🏻‍♂️',
                    value: 'lwaaa'
                    },
                    {
                      label: 'فريق',
                      description: 'لـ ترقية شخص إلى فريق',
                      emoji: '👮🏻‍♂️',
                      value: 'fre8'
                      },
                      {
                        label: 'فريق-أول',
                        description: 'لـ ترقية شخص إلى فريق أول',
                        emoji: '👮🏻‍♂️',
                        value: 'fre8aol'
                        }
    ])
    )
    let embed = new Discord.MessageEmbed()
    .setColor('#32496b')
    .setDescription('__** لـ ترقية عسكري قم بإختيار الرتبة من الأسفل . **__')  
    let m = await message.reply({ embeds: [ embed ], components: [ row ] });
  
    let collector = m.createMessageComponentCollector({ filter: i => i.user.id === message.author.id, time: 3600000})
    
      collector.on('collect', async i => {
      if (i.customId == "tr8eh") {
      if(i.values[0] === 't7taltdreb' || i.values[1] === 't7taltdreb') {
        if (!i.member.permissions.has('ADMINISTRATOR'))
        if (!i.member.roles.cache.has('980494296320999424'))
          return i.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' , ephemeral: true });
        //
        let ch = dbb.get(`logtf3el_${message.guild.id}`)
        let logtf3el = message.guild.channels.cache.find(c => c.id == ch)
        //
        let t7t = message.guild.roles.cache.get('980494360539987978');
        let gnde = message.guild.roles.cache.get('980494359508164628');
        let gndeaol = message.guild.roles.cache.get('1005542090270318592');
        let href = message.guild.roles.cache.get('1005543033363767336');
        let r8eb = message.guild.roles.cache.get('980494355846561872');
        let r8ebaol = message.guild.roles.cache.get('1005542165721665717');
        let mlazm = message.guild.roles.cache.get('980494352495284326');
        let mlazmaol = message.guild.roles.cache.get('980494350624641155');
        let h8ed = message.guild.roles.cache.get('980494347491500034');
        let lwaaa = message.guild.roles.cache.get('980494345717305504');
        let fre8 = message.guild.roles.cache.get('980494341359411300');
        let fre8aol = message.guild.roles.cache.get('980494340516376606');
       //
        member.roles.add(t7t);
        member.roles.remove(gnde);
        member.roles.remove(gndeaol);
        member.roles.remove(href);
        member.roles.remove(r8eb);
        member.roles.remove(r8ebaol);
        member.roles.remove(mlazm);
        member.roles.remove(mlazmaol);
        member.roles.remove(h8ed);
        member.roles.remove(lwaaa);
        member.roles.remove(fre8);
        member.roles.remove(fre8aol);
        //
        let embed = new MessageEmbed()
        .setTitle("الترقيات الوزارية")
        .setDescription(` __** عزيزي العسكري : ${user} . \n يسرنا بأنه قم تم ترقيتك \n و لكن يرجى منك الإستمرار على هذا المجهود و ستصل إلى أعلى المراتب بإذن الله .\n و يرجى الحفاظ على القوانين و البورتوكولات و عدم الإغترار بنفسك و التصغير من زملائك . \n و قد تم ترقيتك من الإداري : ${message.author} . \n و مرةَ أخرى ; نتمنى لك التوفيق و المراتب العليا . **__ `)
        .setImage('https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png')
        .setThumbnail(user.user.avatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor("#11e2e2")
        i.channel.send({ embeds: [embed] });
          //
      i.channel.send({ content: " __** تم ترقية `العسكري` بـ نجاح **__ " });
      
      let embed2 = new Discord.MessageEmbed()
      .setColor(`#32496b`)
      .setDescription(` __** تم ترقية : ${user} \n إلى : جندي تحت التدريب . \n من قبل الإداري : ${message.author} **__ `);
    
    logtf3el.send({ embeds: [embed2] });
    logtf3el.send({ files: ["https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png"] });
    m.delete();  
    message.delete();
    }
        //
          if(i.values[0] === 'gnde' || i.values[1] === 'gnde') {
        if (!i.member.permissions.has('ADMINISTRATOR'))
        if (!i.member.roles.cache.has('980494296320999424'))
          return i.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' , ephemeral: true });
        //
        let ch = dbb.get(`logtf3el_${message.guild.id}`)
        let logtf3el = message.guild.channels.cache.find(c => c.id == ch)
        //
        let t7t = message.guild.roles.cache.get('980494360539987978');
        let gnde = message.guild.roles.cache.get('980494359508164628');
        let gndeaol = message.guild.roles.cache.get('1005542090270318592');
        let href = message.guild.roles.cache.get('1005543033363767336');
        let r8eb = message.guild.roles.cache.get('980494355846561872');
        let r8ebaol = message.guild.roles.cache.get('1005542165721665717');
        let mlazm = message.guild.roles.cache.get('980494352495284326');
        let mlazmaol = message.guild.roles.cache.get('980494350624641155');
        let h8ed = message.guild.roles.cache.get('980494347491500034');
        let lwaaa = message.guild.roles.cache.get('980494345717305504');
        let fre8 = message.guild.roles.cache.get('980494341359411300');
        let fre8aol = message.guild.roles.cache.get('980494340516376606');
       //
        member.roles.remove(t7t);
        member.roles.add(gnde);
        member.roles.remove(gndeaol);
        member.roles.remove(href);
        member.roles.remove(r8eb);
        member.roles.remove(r8ebaol);
        member.roles.remove(mlazm);
        member.roles.remove(mlazmaol);
        member.roles.remove(h8ed);
        member.roles.remove(lwaaa);
        member.roles.remove(fre8);
        member.roles.remove(fre8aol);
        //
        let embed = new MessageEmbed()
        .setTitle("الترقيات الوزارية")
        .setDescription(` __** عزيزي العسكري : ${user} . \n يسرنا بأنه قم تم ترقيتك \n و لكن يرجى منك الإستمرار على هذا المجهود و ستصل إلى أعلى المراتب بإذن الله .\n و يرجى الحفاظ على القوانين و البورتوكولات و عدم الإغترار بنفسك و التصغير من زملائك . \n و قد تم ترقيتك من الإداري : ${message.author} . \n و مرةَ أخرى ; نتمنى لك التوفيق و المراتب العليا . **__ `)
        .setImage('https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png')
        .setThumbnail(user.user.avatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor("#11e2e2")
        i.channel.send({ embeds: [embed] });
          //
      i.channel.send({ content: " __** تم ترقية `العسكري` بـ نجاح **__ " });
      
      let embed2 = new Discord.MessageEmbed()
      .setColor(`#32496b`)
      .setDescription(` __** تم ترقية : ${user} \n إلى : جندي  . \n من قبل الإداري : ${message.author} **__ `);
    
    logtf3el.send({ embeds: [embed2] });
    logtf3el.send({ files: ["https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png"] });
    m.delete();  
    message.delete();
    }
        //
              if(i.values[0] === 'gndeaol' || i.values[1] === 'gndeaol') {
        if (!i.member.permissions.has('ADMINISTRATOR'))
        if (!i.member.roles.cache.has('980494296320999424'))
          return i.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' , ephemeral: true });
        //
        let ch = dbb.get(`logtf3el_${message.guild.id}`)
        let logtf3el = message.guild.channels.cache.find(c => c.id == ch)
        //
        let t7t = message.guild.roles.cache.get('980494360539987978');
        let gnde = message.guild.roles.cache.get('980494359508164628');
        let gndeaol = message.guild.roles.cache.get('1005542090270318592');
        let href = message.guild.roles.cache.get('1005543033363767336');
        let r8eb = message.guild.roles.cache.get('980494355846561872');
        let r8ebaol = message.guild.roles.cache.get('1005542165721665717');
        let mlazm = message.guild.roles.cache.get('980494352495284326');
        let mlazmaol = message.guild.roles.cache.get('980494350624641155');
        let h8ed = message.guild.roles.cache.get('980494347491500034');
        let lwaaa = message.guild.roles.cache.get('980494345717305504');
        let fre8 = message.guild.roles.cache.get('980494341359411300');
        let fre8aol = message.guild.roles.cache.get('980494340516376606');
       //
        member.roles.remove(t7t);
        member.roles.remove(gnde);
        member.roles.add(gndeaol);
        member.roles.remove(href);
        member.roles.remove(r8eb);
        member.roles.remove(r8ebaol);
        member.roles.remove(mlazm);
        member.roles.remove(mlazmaol);
        member.roles.remove(h8ed);
        member.roles.remove(lwaaa);
        member.roles.remove(fre8);
        member.roles.remove(fre8aol);
        //
        let embed = new MessageEmbed()
        .setTitle("الترقيات الوزارية")
        .setDescription(` __** عزيزي العسكري : ${user} . \n يسرنا بأنه قم تم ترقيتك \n و لكن يرجى منك الإستمرار على هذا المجهود و ستصل إلى أعلى المراتب بإذن الله .\n و يرجى الحفاظ على القوانين و البورتوكولات و عدم الإغترار بنفسك و التصغير من زملائك . \n و قد تم ترقيتك من الإداري : ${message.author} . \n و مرةَ أخرى ; نتمنى لك التوفيق و المراتب العليا . **__ `)
        .setImage('https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png')
        .setThumbnail(user.user.avatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor("#11e2e2")
        i.channel.send({ embeds: [embed] });
          //
      i.channel.send({ content: " __** تم ترقية `العسكري` بـ نجاح **__ " });
      
      let embed2 = new Discord.MessageEmbed()
      .setColor(`#32496b`)
      .setDescription(` __** تم ترقية : ${user} \n إلى : جندي أول . \n من قبل الإداري : ${message.author} **__ `);
    
    logtf3el.send({ embeds: [embed2] });
    logtf3el.send({ files: ["https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png"] });
    m.delete();  
    message.delete();
    }
        //
              if(i.values[0] === 't7taltdreb' || i.values[1] === 't7taltdreb') {
        if (!i.member.permissions.has('ADMINISTRATOR'))
        if (!i.member.roles.cache.has('980494296320999424'))
          return i.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' , ephemeral: true });
        //
        let ch = dbb.get(`logtf3el_${message.guild.id}`)
        let logtf3el = message.guild.channels.cache.find(c => c.id == ch)
        //
        let t7t = message.guild.roles.cache.get('980494360539987978');
        let gnde = message.guild.roles.cache.get('980494359508164628');
        let gndeaol = message.guild.roles.cache.get('1005542090270318592');
        let href = message.guild.roles.cache.get('1005543033363767336');
        let r8eb = message.guild.roles.cache.get('980494355846561872');
        let r8ebaol = message.guild.roles.cache.get('1005542165721665717');
        let mlazm = message.guild.roles.cache.get('980494352495284326');
        let mlazmaol = message.guild.roles.cache.get('980494350624641155');
        let h8ed = message.guild.roles.cache.get('980494347491500034');
        let lwaaa = message.guild.roles.cache.get('980494345717305504');
        let fre8 = message.guild.roles.cache.get('980494341359411300');
        let fre8aol = message.guild.roles.cache.get('980494340516376606');
       //
        member.roles.remove(t7t);
        member.roles.remove(gnde);
        member.roles.remove(gndeaol);
        member.roles.add(href);
        member.roles.remove(r8eb);
        member.roles.remove(r8ebaol);
        member.roles.remove(mlazm);
        member.roles.remove(mlazmaol);
        member.roles.remove(h8ed);
        member.roles.remove(lwaaa);
        member.roles.remove(fre8);
        member.roles.remove(fre8aol);
        //
        let embed = new MessageEmbed()
        .setTitle("الترقيات الوزارية")
        .setDescription(` __** عزيزي العسكري : ${user} . \n يسرنا بأنه قم تم ترقيتك \n و لكن يرجى منك الإستمرار على هذا المجهود و ستصل إلى أعلى المراتب بإذن الله .\n و يرجى الحفاظ على القوانين و البورتوكولات و عدم الإغترار بنفسك و التصغير من زملائك . \n و قد تم ترقيتك من الإداري : ${message.author} . \n و مرةَ أخرى ; نتمنى لك التوفيق و المراتب العليا . **__ `)
        .setImage('https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png')
        .setThumbnail(user.user.avatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor("#11e2e2")
        i.channel.send({ embeds: [embed] });
          //
      i.channel.send({ content: " __** تم ترقية `العسكري` بـ نجاح **__ " });
      
      let embed2 = new Discord.MessageEmbed()
      .setColor(`#32496b`)
      .setDescription(` __** تم ترقية : ${user} \n إلى : عريف . \n من قبل الإداري : ${message.author} **__ `);
    
    logtf3el.send({ embeds: [embed2] });
    logtf3el.send({ files: ["https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png"] });
    m.delete();  
    message.delete();
    }
        //
              if(i.values[0] === 'r8eb' || i.values[1] === 'r8eb') {
        if (!i.member.permissions.has('ADMINISTRATOR'))
        if (!i.member.roles.cache.has('980494296320999424'))
          return i.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' , ephemeral: true });
        //
        let ch = dbb.get(`logtf3el_${message.guild.id}`)
        let logtf3el = message.guild.channels.cache.find(c => c.id == ch)
        //
        let t7t = message.guild.roles.cache.get('980494360539987978');
        let gnde = message.guild.roles.cache.get('980494359508164628');
        let gndeaol = message.guild.roles.cache.get('1005542090270318592');
        let href = message.guild.roles.cache.get('1005543033363767336');
        let r8eb = message.guild.roles.cache.get('980494355846561872');
        let r8ebaol = message.guild.roles.cache.get('1005542165721665717');
        let mlazm = message.guild.roles.cache.get('980494352495284326');
        let mlazmaol = message.guild.roles.cache.get('980494350624641155');
        let h8ed = message.guild.roles.cache.get('980494347491500034');
        let lwaaa = message.guild.roles.cache.get('980494345717305504');
        let fre8 = message.guild.roles.cache.get('980494341359411300');
        let fre8aol = message.guild.roles.cache.get('980494340516376606');
       //
        member.roles.remove(t7t);
        member.roles.remove(gnde);
        member.roles.remove(gndeaol);
        member.roles.remove(href);
        member.roles.add(r8eb);
        member.roles.remove(r8ebaol);
        member.roles.remove(mlazm);
        member.roles.remove(mlazmaol);
        member.roles.remove(h8ed);
        member.roles.remove(lwaaa);
        member.roles.remove(fre8);
        member.roles.remove(fre8aol);
        //
        let embed = new MessageEmbed()
        .setTitle("الترقيات الوزارية")
        .setDescription(` __** عزيزي العسكري : ${user} . \n يسرنا بأنه قم تم ترقيتك \n و لكن يرجى منك الإستمرار على هذا المجهود و ستصل إلى أعلى المراتب بإذن الله .\n و يرجى الحفاظ على القوانين و البورتوكولات و عدم الإغترار بنفسك و التصغير من زملائك . \n و قد تم ترقيتك من الإداري : ${message.author} . \n و مرةَ أخرى ; نتمنى لك التوفيق و المراتب العليا . **__ `)
        .setImage('https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png')
        .setThumbnail(user.user.avatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor("#11e2e2")
        i.channel.send({ embeds: [embed] });
          //
      i.channel.send({ content: " __** تم ترقية `العسكري` بـ نجاح **__ " });
      
      let embed2 = new Discord.MessageEmbed()
      .setColor(`#32496b`)
      .setDescription(` __** تم ترقية : ${user} \n إلى : رقيب . \n من قبل الإداري : ${message.author} **__ `);
    
    logtf3el.send({ embeds: [embed2] });
    logtf3el.send({ files: ["https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png"] });
    m.delete();  
    message.delete();
    }
        //
              if(i.values[0] === 'r8ebaol' || i.values[1] === 'r8ebaol') {
        if (!i.member.permissions.has('ADMINISTRATOR'))
        if (!i.member.roles.cache.has('980494296320999424'))
          return i.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' , ephemeral: true });
        //
        let ch = dbb.get(`logtf3el_${message.guild.id}`)
        let logtf3el = message.guild.channels.cache.find(c => c.id == ch)
        //
        let t7t = message.guild.roles.cache.get('980494360539987978');
        let gnde = message.guild.roles.cache.get('980494359508164628');
        let gndeaol = message.guild.roles.cache.get('1005542090270318592');
        let href = message.guild.roles.cache.get('1005543033363767336');
        let r8eb = message.guild.roles.cache.get('980494355846561872');
        let r8ebaol = message.guild.roles.cache.get('1005542165721665717');
        let mlazm = message.guild.roles.cache.get('980494352495284326');
        let mlazmaol = message.guild.roles.cache.get('980494350624641155');
        let h8ed = message.guild.roles.cache.get('980494347491500034');
        let lwaaa = message.guild.roles.cache.get('980494345717305504');
        let fre8 = message.guild.roles.cache.get('980494341359411300');
        let fre8aol = message.guild.roles.cache.get('980494340516376606');
       //
        member.roles.remove(t7t);
        member.roles.remove(gnde);
        member.roles.remove(gndeaol);
        member.roles.remove(href);
        member.roles.remove(r8eb);
        member.roles.add(r8ebaol);
        member.roles.remove(mlazm);
        member.roles.remove(mlazmaol);
        member.roles.remove(h8ed);
        member.roles.remove(lwaaa);
        member.roles.remove(fre8);
        member.roles.remove(fre8aol);
        //
        let embed = new MessageEmbed()
        .setTitle("الترقيات الوزارية")
        .setDescription(` __** عزيزي العسكري : ${user} . \n يسرنا بأنه قم تم ترقيتك \n و لكن يرجى منك الإستمرار على هذا المجهود و ستصل إلى أعلى المراتب بإذن الله .\n و يرجى الحفاظ على القوانين و البورتوكولات و عدم الإغترار بنفسك و التصغير من زملائك . \n و قد تم ترقيتك من الإداري : ${message.author} . \n و مرةَ أخرى ; نتمنى لك التوفيق و المراتب العليا . **__ `)
        .setImage('https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png')
        .setThumbnail(user.user.avatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor("#11e2e2")
        i.channel.send({ embeds: [embed] });
          //
      i.channel.send({ content: " __** تم ترقية `العسكري` بـ نجاح **__ " });
      
      let embed2 = new Discord.MessageEmbed()
      .setColor(`#32496b`)
      .setDescription(` __** تم ترقية : ${user} \n إلى : رقيب أول . \n من قبل الإداري : ${message.author} **__ `);
    
    logtf3el.send({ embeds: [embed2] });
    logtf3el.send({ files: ["https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png"] });
    m.delete();  
    message.delete();
    }
        //
              if(i.values[0] === 'mlazm' || i.values[1] === 'mlazm') {
        if (!i.member.permissions.has('ADMINISTRATOR'))
        if (!i.member.roles.cache.has('980494296320999424'))
          return i.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' , ephemeral: true });
        //
        let ch = dbb.get(`logtf3el_${message.guild.id}`)
        let logtf3el = message.guild.channels.cache.find(c => c.id == ch)
        //
        let t7t = message.guild.roles.cache.get('980494360539987978');
        let gnde = message.guild.roles.cache.get('980494359508164628');
        let gndeaol = message.guild.roles.cache.get('1005542090270318592');
        let href = message.guild.roles.cache.get('1005543033363767336');
        let r8eb = message.guild.roles.cache.get('980494355846561872');
        let r8ebaol = message.guild.roles.cache.get('1005542165721665717');
        let mlazm = message.guild.roles.cache.get('980494352495284326');
        let mlazmaol = message.guild.roles.cache.get('980494350624641155');
        let h8ed = message.guild.roles.cache.get('980494347491500034');
        let lwaaa = message.guild.roles.cache.get('980494345717305504');
        let fre8 = message.guild.roles.cache.get('980494341359411300');
        let fre8aol = message.guild.roles.cache.get('980494340516376606');
       //
        member.roles.remove(t7t);
        member.roles.remove(gnde);
        member.roles.remove(gndeaol);
        member.roles.remove(href);
        member.roles.remove(r8eb);
        member.roles.remove(r8ebaol);
        member.roles.add(mlazm);
        member.roles.remove(mlazmaol);
        member.roles.remove(h8ed);
        member.roles.remove(lwaaa);
        member.roles.remove(fre8);
        member.roles.remove(fre8aol);
        //
        let embed = new MessageEmbed()
        .setTitle("الترقيات الوزارية")
        .setDescription(` __** عزيزي العسكري : ${user} . \n يسرنا بأنه قم تم ترقيتك \n و لكن يرجى منك الإستمرار على هذا المجهود و ستصل إلى أعلى المراتب بإذن الله .\n و يرجى الحفاظ على القوانين و البورتوكولات و عدم الإغترار بنفسك و التصغير من زملائك . \n و قد تم ترقيتك من الإداري : ${message.author} . \n و مرةَ أخرى ; نتمنى لك التوفيق و المراتب العليا . **__ `)
        .setImage('https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png')
        .setThumbnail(user.user.avatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor("#11e2e2")
        i.channel.send({ embeds: [embed] });
          //
      i.channel.send({ content: " __** تم ترقية `العسكري` بـ نجاح **__ " });
      
      let embed2 = new Discord.MessageEmbed()
      .setColor(`#32496b`)
      .setDescription(` __** تم ترقية : ${user} \n إلى : ملازم . \n من قبل الإداري : ${message.author} **__ `);
    
    logtf3el.send({ embeds: [embed2] });
    logtf3el.send({ files: ["https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png"] });
    m.delete();  
    message.delete();
    }
        //
              if(i.values[0] === 'mlazmaol' || i.values[1] === 'mlazmaol') {
        if (!i.member.permissions.has('ADMINISTRATOR'))
        if (!i.member.roles.cache.has('980494296320999424'))
          return i.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' , ephemeral: true });
        //
        let ch = dbb.get(`logtf3el_${message.guild.id}`)
        let logtf3el = message.guild.channels.cache.find(c => c.id == ch)
        //
        let t7t = message.guild.roles.cache.get('980494360539987978');
        let gnde = message.guild.roles.cache.get('980494359508164628');
        let gndeaol = message.guild.roles.cache.get('1005542090270318592');
        let href = message.guild.roles.cache.get('1005543033363767336');
        let r8eb = message.guild.roles.cache.get('980494355846561872');
        let r8ebaol = message.guild.roles.cache.get('1005542165721665717');
        let mlazm = message.guild.roles.cache.get('980494352495284326');
        let mlazmaol = message.guild.roles.cache.get('980494350624641155');
        let h8ed = message.guild.roles.cache.get('980494347491500034');
        let lwaaa = message.guild.roles.cache.get('980494345717305504');
        let fre8 = message.guild.roles.cache.get('980494341359411300');
        let fre8aol = message.guild.roles.cache.get('980494340516376606');
       //
        member.roles.remove(t7t);
        member.roles.remove(gnde);
        member.roles.remove(gndeaol);
        member.roles.remove(href);
        member.roles.remove(r8eb);
        member.roles.remove(r8ebaol);
        member.roles.remove(mlazm);
        member.roles.add(mlazmaol);
        member.roles.remove(h8ed);
        member.roles.remove(lwaaa);
        member.roles.remove(fre8);
        member.roles.remove(fre8aol);
        //
        let embed = new MessageEmbed()
        .setTitle("الترقيات الوزارية")
        .setDescription(` __** عزيزي العسكري : ${user} . \n يسرنا بأنه قم تم ترقيتك \n و لكن يرجى منك الإستمرار على هذا المجهود و ستصل إلى أعلى المراتب بإذن الله .\n و يرجى الحفاظ على القوانين و البورتوكولات و عدم الإغترار بنفسك و التصغير من زملائك . \n و قد تم ترقيتك من الإداري : ${message.author} . \n و مرةَ أخرى ; نتمنى لك التوفيق و المراتب العليا . **__ `)
        .setImage('https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png')
        .setThumbnail(user.user.avatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor("#11e2e2")
        i.channel.send({ embeds: [embed] });
          //
      i.channel.send({ content: " __** تم ترقية `العسكري` بـ نجاح **__ " });
      
      let embed2 = new Discord.MessageEmbed()
      .setColor(`#32496b`)
      .setDescription(` __** تم ترقية : ${user} \n إلى : ملازم أول . \n من قبل الإداري : ${message.author} **__ `);
    
    logtf3el.send({ embeds: [embed2] });
    logtf3el.send({ files: ["https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png"] });
    m.delete();  
    message.delete();
    }
        //
              if(i.values[0] === 'h8ed' || i.values[1] === 'h8ed') {
        if (!i.member.permissions.has('ADMINISTRATOR'))
        if (!i.member.roles.cache.has('980494296320999424'))
          return i.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' , ephemeral: true });
        //
        let ch = dbb.get(`logtf3el_${message.guild.id}`)
        let logtf3el = message.guild.channels.cache.find(c => c.id == ch)
        //
        let t7t = message.guild.roles.cache.get('980494360539987978');
        let gnde = message.guild.roles.cache.get('980494359508164628');
        let gndeaol = message.guild.roles.cache.get('1005542090270318592');
        let href = message.guild.roles.cache.get('1005543033363767336');
        let r8eb = message.guild.roles.cache.get('980494355846561872');
        let r8ebaol = message.guild.roles.cache.get('1005542165721665717');
        let mlazm = message.guild.roles.cache.get('980494352495284326');
        let mlazmaol = message.guild.roles.cache.get('980494350624641155');
        let h8ed = message.guild.roles.cache.get('980494347491500034');
        let lwaaa = message.guild.roles.cache.get('980494345717305504');
        let fre8 = message.guild.roles.cache.get('980494341359411300');
        let fre8aol = message.guild.roles.cache.get('980494340516376606');
       //
        member.roles.remove(t7t);
        member.roles.remove(gnde);
        member.roles.remove(gndeaol);
        member.roles.remove(href);
        member.roles.remove(r8eb);
        member.roles.remove(r8ebaol);
        member.roles.remove(mlazm);
        member.roles.remove(mlazmaol);
        member.roles.add(h8ed);
        member.roles.remove(lwaaa);
        member.roles.remove(fre8);
        member.roles.remove(fre8aol);
        //
        let embed = new MessageEmbed()
        .setTitle("الترقيات الوزارية")
        .setDescription(` __** عزيزي العسكري : ${user} . \n يسرنا بأنه قم تم ترقيتك \n و لكن يرجى منك الإستمرار على هذا المجهود و ستصل إلى أعلى المراتب بإذن الله .\n و يرجى الحفاظ على القوانين و البورتوكولات و عدم الإغترار بنفسك و التصغير من زملائك . \n و قد تم ترقيتك من الإداري : ${message.author} . \n و مرةَ أخرى ; نتمنى لك التوفيق و المراتب العليا . **__ `)
        .setImage('https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png')
        .setThumbnail(user.user.avatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor("#11e2e2")
        i.channel.send({ embeds: [embed] });
          //
      i.channel.send({ content: " __** تم ترقية `العسكري` بـ نجاح **__ " });
      
      let embed2 = new Discord.MessageEmbed()
      .setColor(`#32496b`)
      .setDescription(` __** تم ترقية : ${user} \n إلى : عقيد . \n من قبل الإداري : ${message.author} **__ `);
    
    logtf3el.send({ embeds: [embed2] });
    logtf3el.send({ files: ["https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png"] });
    m.delete();  
    message.delete();
    }
        //
              if(i.values[0] === 'lwaaa' || i.values[1] === 'lwaaa') {
        if (!i.member.permissions.has('ADMINISTRATOR'))
        if (!i.member.roles.cache.has('980494296320999424'))
          return i.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' , ephemeral: true });
        //
        let ch = dbb.get(`logtf3el_${message.guild.id}`)
        let logtf3el = message.guild.channels.cache.find(c => c.id == ch)
        //
        let t7t = message.guild.roles.cache.get('980494360539987978');
        let gnde = message.guild.roles.cache.get('980494359508164628');
        let gndeaol = message.guild.roles.cache.get('1005542090270318592');
        let href = message.guild.roles.cache.get('1005543033363767336');
        let r8eb = message.guild.roles.cache.get('980494355846561872');
        let r8ebaol = message.guild.roles.cache.get('1005542165721665717');
        let mlazm = message.guild.roles.cache.get('980494352495284326');
        let mlazmaol = message.guild.roles.cache.get('980494350624641155');
        let h8ed = message.guild.roles.cache.get('980494347491500034');
        let lwaaa = message.guild.roles.cache.get('980494345717305504');
        let fre8 = message.guild.roles.cache.get('980494341359411300');
        let fre8aol = message.guild.roles.cache.get('980494340516376606');
       //
        member.roles.remove(t7t);
        member.roles.remove(gnde);
        member.roles.remove(gndeaol);
        member.roles.remove(href);
        member.roles.remove(r8eb);
        member.roles.remove(r8ebaol);
        member.roles.remove(mlazm);
        member.roles.remove(mlazmaol);
        member.roles.remove(h8ed);
        member.roles.add(lwaaa);
        member.roles.remove(fre8);
        member.roles.remove(fre8aol);
        //
        let embed = new MessageEmbed()
        .setTitle("الترقيات الوزارية")
        .setDescription(` __** عزيزي العسكري : ${user} . \n يسرنا بأنه قم تم ترقيتك \n و لكن يرجى منك الإستمرار على هذا المجهود و ستصل إلى أعلى المراتب بإذن الله .\n و يرجى الحفاظ على القوانين و البورتوكولات و عدم الإغترار بنفسك و التصغير من زملائك . \n و قد تم ترقيتك من الإداري : ${message.author} . \n و مرةَ أخرى ; نتمنى لك التوفيق و المراتب العليا . **__ `)
        .setImage('https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png')
        .setThumbnail(user.user.avatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor("#11e2e2")
        i.channel.send({ embeds: [embed] });
          //
      i.channel.send({ content: " __** تم ترقية `العسكري` بـ نجاح **__ " });
      
      let embed2 = new Discord.MessageEmbed()
      .setColor(`#32496b`)
      .setDescription(` __** تم ترقية : ${user} \n إلى : لواء . \n من قبل الإداري : ${message.author} **__ `);
    
    logtf3el.send({ embeds: [embed2] });
    logtf3el.send({ files: ["https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png"] });
    m.delete();  
    message.delete();
    }
        //
              if(i.values[0] === 'fre8' || i.values[1] === 'fre8') {
        if (!i.member.permissions.has('ADMINISTRATOR'))
        if (!i.member.roles.cache.has('980494296320999424'))
          return i.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' , ephemeral: true });
        //
        let ch = dbb.get(`logtf3el_${message.guild.id}`)
        let logtf3el = message.guild.channels.cache.find(c => c.id == ch)
        //
        let t7t = message.guild.roles.cache.get('980494360539987978');
        let gnde = message.guild.roles.cache.get('980494359508164628');
        let gndeaol = message.guild.roles.cache.get('1005542090270318592');
        let href = message.guild.roles.cache.get('1005543033363767336');
        let r8eb = message.guild.roles.cache.get('980494355846561872');
        let r8ebaol = message.guild.roles.cache.get('1005542165721665717');
        let mlazm = message.guild.roles.cache.get('980494352495284326');
        let mlazmaol = message.guild.roles.cache.get('980494350624641155');
        let h8ed = message.guild.roles.cache.get('980494347491500034');
        let lwaaa = message.guild.roles.cache.get('980494345717305504');
        let fre8 = message.guild.roles.cache.get('980494341359411300');
        let fre8aol = message.guild.roles.cache.get('980494340516376606');
       //
        member.roles.remove(t7t);
        member.roles.remove(gnde);
        member.roles.remove(gndeaol);
        member.roles.remove(href);
        member.roles.remove(r8eb);
        member.roles.remove(r8ebaol);
        member.roles.remove(mlazm);
        member.roles.remove(mlazmaol);
        member.roles.remove(h8ed);
        member.roles.remove(lwaaa);
        member.roles.add(fre8);
        member.roles.remove(fre8aol);
        //
        let embed = new MessageEmbed()
        .setTitle("الترقيات الوزارية")
        .setDescription(` __** عزيزي العسكري : ${user} . \n يسرنا بأنه قم تم ترقيتك \n و لكن يرجى منك الإستمرار على هذا المجهود و ستصل إلى أعلى المراتب بإذن الله .\n و يرجى الحفاظ على القوانين و البورتوكولات و عدم الإغترار بنفسك و التصغير من زملائك . \n و قد تم ترقيتك من الإداري : ${message.author} . \n و مرةَ أخرى ; نتمنى لك التوفيق و المراتب العليا . **__ `)
        .setImage('https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png')
        .setThumbnail(user.user.avatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor("#11e2e2")
        i.channel.send({ embeds: [embed] });
          //
      i.channel.send({ content: " __** تم ترقية `العسكري` بـ نجاح **__ " });
      
      let embed2 = new Discord.MessageEmbed()
      .setColor(`#32496b`)
      .setDescription(` __** تم ترقية : ${user} \n إلى : فريق . \n من قبل الإداري : ${message.author} **__ `);
    
    logtf3el.send({ embeds: [embed2] });
    logtf3el.send({ files: ["https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png"] });
    m.delete();  
    message.delete();
    }
        //
              if(i.values[0] === 'fre8aol' || i.values[1] === 'fre8aol') {
        if (!i.member.permissions.has('ADMINISTRATOR'))
        if (!i.member.roles.cache.has('980494296320999424'))
          return i.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' , ephemeral: true });
        //
        let ch = dbb.get(`logtf3el_${message.guild.id}`)
        let logtf3el = message.guild.channels.cache.find(c => c.id == ch)
        //
        let t7t = message.guild.roles.cache.get('980494360539987978');
        let gnde = message.guild.roles.cache.get('980494359508164628');
        let gndeaol = message.guild.roles.cache.get('1005542090270318592');
        let href = message.guild.roles.cache.get('1005543033363767336');
        let r8eb = message.guild.roles.cache.get('980494355846561872');
        let r8ebaol = message.guild.roles.cache.get('1005542165721665717');
        let mlazm = message.guild.roles.cache.get('980494352495284326');
        let mlazmaol = message.guild.roles.cache.get('980494350624641155');
        let h8ed = message.guild.roles.cache.get('980494347491500034');
        let lwaaa = message.guild.roles.cache.get('980494345717305504');
        let fre8 = message.guild.roles.cache.get('980494341359411300');
        let fre8aol = message.guild.roles.cache.get('980494340516376606');
       //
        member.roles.remove(t7t);
        member.roles.remove(gnde);
        member.roles.remove(gndeaol);
        member.roles.remove(href);
        member.roles.remove(r8eb);
        member.roles.remove(r8ebaol);
        member.roles.remove(mlazm);
        member.roles.remove(mlazmaol);
        member.roles.remove(h8ed);
        member.roles.remove(lwaaa);
        member.roles.remove(fre8);
        member.roles.add(fre8aol);
        //
        let embed = new MessageEmbed()
        .setTitle("الترقيات الوزارية")
        .setDescription(` __** عزيزي العسكري : ${user} . \n يسرنا بأنه قم تم ترقيتك \n و لكن يرجى منك الإستمرار على هذا المجهود و ستصل إلى أعلى المراتب بإذن الله .\n و يرجى الحفاظ على القوانين و البورتوكولات و عدم الإغترار بنفسك و التصغير من زملائك . \n و قد تم ترقيتك من الإداري : ${message.author} . \n و مرةَ أخرى ; نتمنى لك التوفيق و المراتب العليا . **__ `)
        .setImage('https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png')
        .setThumbnail(user.user.avatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor("#11e2e2")
        i.channel.send({ embeds: [embed] });
          //
      i.channel.send({ content: " __** تم ترقية `العسكري` بـ نجاح **__ " });
      
      let embed2 = new Discord.MessageEmbed()
      .setColor(`#32496b`)
      .setDescription(` __** تم ترقية : ${user} \n إلى : فريق أول . \n من قبل الإداري : ${message.author} **__ `);
    
    logtf3el.send({ embeds: [embed2] });
    logtf3el.send({ files: ["https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png"] });
    m.delete();  
    message.delete();
    }
    }
    })
  }
    if (message.guild.id == '996810757238968431') {
return message.reply({ content: ` __** الأمر خاص بالعساكر ! **__ ` });
  }
}});

client.on("messageCreate", async message => {
  if(message.author.bot) return;
  if (message.content.startsWith(prefix+"فصل")) {
 let member = message.mentions.members.first();
     let user = message.mentions.members.first();
                  if (message.guild.id == '980493720233316372') {
      if (!message.member.permissions.has('ADMINISTRATOR'))
       //
        if (!message.member.roles.cache.has('980494296320999424'))
          return message.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' });
    //
    if(!dbb.has(`logtf3el_${message.guild.id}`)) return message.reply({ content: ` __** يرجى تعيين لوق التفعيل قبل !
  \`${prefix}لوق-التفعيل\` **__ ` });
    //
      if (!member) return message.reply({ content: ' __** منشن العضو **__ ' });
     if(message.author.id == user.id) return message.reply({ content: ` __** لا يمكنك فصل نفسك ! **__ ` });
      if(user.bot) return message.reply({ content: " __** لا يمكن فصل البوتات :x: **__ " });
    //
   let reson = message.content.split(' ').slice(2).join(' ')
  if(!reson) return message.reply({ content: `__** يرجى كتابة سبب فصل العسكري **__ ` });
//
    let row = new Discord.MessageActionRow()
    .addComponents(
    new Discord.MessageSelectMenu()
    .setMinValues(0)
    .setMaxValues(1)
    .setPlaceholder('إضغط هنا لرؤية خريطة الفصل')
    .setCustomId('fcl')
    .addOptions([
      {
        label: 'فصل',
        description: 'لـ فصل عسكري',
        emoji: '👮🏻‍♂️',
        value: 'fsl'
        },
      {
        label: 'ازالة-الفصل',
        description: 'لـ إزالة فصل عسكري',
        emoji: '👮🏻‍♂️',
        value: 'azalt-alfsl'
        },
      {
        label: 'سبب-الفصل',
        description: 'لـ معرفة سبب فصل عسكري',
        emoji: '👮🏻‍♂️',
        value: 'sbb-alfsl'
        }
    ])
    )
    let embed = new Discord.MessageEmbed()
    .setColor('#32496b')
    .setDescription('__** قم بتحديد ما تريده بالضغط على الزر بالأسفل . **__')  
    let m = await message.reply({ embeds: [ embed ], components: [ row ] });
  
    let collector = m.createMessageComponentCollector({ filter: i => i.user.id === message.author.id, time: 3600000})
    
      collector.on('collect', async i => {
      if (i.customId == "fcl") {
      if(i.values[0] === 'fsl' || i.values[1] === 'fsl') {
        if (!i.member.permissions.has('ADMINISTRATOR'))
        if (!i.member.roles.cache.has('980494296320999424'))
          return i.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' , ephemeral: true });
        //
        if(db.has(`mfsol_${user.id}`,`reason_${user.id}`)) return i.reply({ content: ` __** تم فصل العسكري مسبقاَ ! **__ ` , ephemeral: true });
        //
        let ch = dbb.get(`logtf3el_${message.guild.id}`)
        let logtf3el = message.guild.channels.cache.find(c => c.id == ch)
        //
        let t7t = message.guild.roles.cache.get('980494360539987978');
        let gnde = message.guild.roles.cache.get('980494359508164628');
        let gndeaol = message.guild.roles.cache.get('1005542090270318592');
        let href = message.guild.roles.cache.get('1005543033363767336');
        let r8eb = message.guild.roles.cache.get('980494355846561872');
        let r8ebaol = message.guild.roles.cache.get('1005542165721665717');
        let mlazm = message.guild.roles.cache.get('980494352495284326');
        let mlazmaol = message.guild.roles.cache.get('980494350624641155');
        let h8ed = message.guild.roles.cache.get('980494347491500034');
        let lwaaa = message.guild.roles.cache.get('980494345717305504');
        let fre8 = message.guild.roles.cache.get('980494341359411300');
        let fre8aol = message.guild.roles.cache.get('980494340516376606');
        let da7leh = message.guild.roles.cache.get('980494313295331328');
        let amn3am = message.guild.roles.cache.get('980494327371399218');
        let hrs7dod = message.guild.roles.cache.get('980494332949844058');
        let gwat5ash = message.guild.roles.cache.get('980494318580162590');
        let gwatmsl7h = message.guild.roles.cache.get('1045729509250449459');
        let mfsol = message.guild.roles.cache.get('980494370623094814');
       //
        member.roles.remove(t7t);
        member.roles.remove(gnde);
        member.roles.remove(gndeaol);
        member.roles.remove(href);
        member.roles.remove(r8eb);
        member.roles.remove(r8ebaol);
        member.roles.remove(mlazm);
        member.roles.remove(mlazmaol);
        member.roles.remove(h8ed);
        member.roles.remove(lwaaa);
        member.roles.remove(fre8);
        member.roles.remove(fre8aol);
        member.roles.remove(da7leh);
        member.roles.remove(amn3am);
        member.roles.remove(hrs7dod);
        member.roles.remove(gwat5ash);
        member.roles.remove(gwatmsl7h);
        member.roles.add(mfsol);
        //
        let embed = new MessageEmbed()
        .setTitle("الفصل الوزاري")
        .setDescription(` __** عزيزي العسكري : ${user} . \n لا يسرنا بأنه قم تم فصلك \n و لكن يرجى منك إتباع البروتوكولات و القوانين في المرة القادمة و ستصل إلى أعلى المراتب بإذن الله . \n و قد تم فصلك من الإداري : ${message.author} . \n و مرةَ أخرى ; نتمنى لك التوفيق و المراتب العليا . **__ `)
        .setImage('https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png')
        .setThumbnail(user.user.avatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor("#11e2e2")
        i.channel.send({ embeds: [embed] });
          //
      i.channel.send({ content: " __** تم فصل `العسكري` بـ نجاح **__ " });
      
      let embed2 = new Discord.MessageEmbed()
      .setColor(`#32496b`)
      .setDescription(` __** تم فصل : ${user} \n سبب الفصل : ${reson} . \n من قبل الإداري : ${message.author} **__ `);
    
    logtf3el.send({ embeds: [embed2] });
    logtf3el.send({ files: ["https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png"] });
    m.delete();  
    message.delete();
    db.set(`msfol`, user.id)
    db.set(`reason_${user.id}`, reson)
    }
        //
          if(i.values[0] === 'sbb-alfsl' || i.values[1] === 'sbb-alfsl') {
        if (!i.member.permissions.has('ADMINISTRATOR'))
        if (!i.member.roles.cache.has('980494296320999424'))
          return i.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' , ephemeral: true });
        //
        if(!db.has(`mfsol_${user.id}`,`reason_${user.id}`)) return i.reply({ content: ` __** لم يتم فصل العسكري ! **__ ` , ephemeral: true });
//
        let resons = db.get(`reason_${user.id}`)
        let embed = new MessageEmbed()
        .setTitle("الفصل الوزاري")
        .setDescription(` __** عزيزي الإداري : ${message.author} . \n سبب فصل : ${user} . \n هو : ${resons} . **__ `)
        .setImage('https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png')
        .setThumbnail(user.user.avatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor("#11e2e2")
        i.channel.send({ embeds: [embed] });
          //
    m.delete();  
    message.delete();
    }
        //
              if(i.values[0] === 'azalt-alfsl' || i.values[1] === 'azalt-alfsl') {
        if (!i.member.permissions.has('ADMINISTRATOR'))
        if (!i.member.roles.cache.has('980494296320999424'))
          return i.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' , ephemeral: true });
        //
        if(!db.has(`mfsol_${user.id}`,`reason_${user.id}`)) return i.reply({ content: ` __** لم يتم فصل العسكري ! **__ ` , ephemeral: true });
//
        let ch = dbb.get(`logtf3el_${message.guild.id}`)
        let logtf3el = message.guild.channels.cache.find(c => c.id == ch)
        //
        let mfsol = message.guild.roles.cache.get('980494370623094814');
        member.roles.remove(mfsol);
        //
        let resons = db.get(`reason_${user.id}`)
        let embed = new MessageEmbed() 
        .setTitle("الفصل الوزاري")
        .setDescription(` __** عزيزي الإداري : ${message.author} . \n تم إزالة الفصل عن : ${user} .\n مع العلم أن سبب فصله قد كان : ${resons} . **__ `)
        .setImage('https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png')
        .setThumbnail(user.user.avatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor("#11e2e2")
        i.channel.send({ embeds: [embed] });
          //
      i.channel.send({ content: " __** تم إزالة الفصل عن `العسكري` بـ نجاح **__ " });
      
      let embed2 = new Discord.MessageEmbed()
      .setColor(`#32496b`)
      .setDescription(` __** تم إزالة فصل : ${user} \n و قد كان سبب فصله هو : ${resons} \n من قبل الإداري : ${message.author} **__ `);
    
    logtf3el.send({ embeds: [embed2] });
    logtf3el.send({ files: ["https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png"] });
    m.delete();  
    message.delete();
    db.delete(`mfsol_${user.id}`)
    db.delete(`reason_${user.id}`)
    }
    }
    })
  }
    if (message.guild.id == '996810757238968431') {
      message.reply({ content: ` __** عذراً أمر الفصل موقف , لا يمكن فصل إي شخص من العصابات فنحن لسنا فشله مثل الوزارة . **__ ` });
}
    //
}});

client.on("guildMemberAdd" , member => { 
if (member.guild.id == '980493720233316372') {
//
let mfsol = member.guild.roles.cache.get('980494370623094814');
//
if(db.has(`msfol_${member.id}`)) {
member.roles.add(mfsol)
}};
//
}); 

client.on('messageCreate', message => {
if (message.content === prefix+'نام') {
if (owner.includes(message.author.id)) return;
message.channel.send({ content: "__** سيو برب **__ " })
client.destroy()
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
if (message.guild.id == '980493720233316372') {
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
}
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
if(message.content.startsWith(prefix+'say')) {
setTimeout(() => message.delete(), 5000)
  //
if (!message.member.permissions.has('ADMINISTRATOR'))
return message.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' }).then(message => setTimeout(() => message.delete(), 5000));
let args = message.content.split(' ').slice(1).join(' ')
if (!args) return message.reply({ content: ' __** ❌ أرسل النص !! **__ ' }).then(message => setTimeout(() => message.delete(), 5000));
  //
 if (message.guild.id == '980493720233316372') {
let embed = new Discord.MessageEmbed()
.setColor("#32496B")
.setDescription(`${args}`)
.setImage('https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png')
//
message.channel.send({ embeds: [embed] });
message.delete();
}
if (message.guild.id == '996810757238968431') {
let embed2 = new Discord.MessageEmbed() 
.setColor("RED")
.setDescription(`${args}`)
.setImage(`https://cdn.discordapp.com/attachments/996820450275500093/1049453075779305492/9BFA5912-825A-46FB-93E3-5B2863DB6D8F.png`)
//
message.channel.send({ embeds: [embed2] });
message.delete();
}
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
if (message.guild.id === "980493720233316372") {
message.send(`__** مرحباً بالعُضو الجديد ${message} في ${message.guild.name} 🔰
نرجى منك قرائة القوانين 🛠
و التفعيل و لكن قبلها قرائة قوانين التفعيل 📚 …
و نستودعك في رحلتك لحماية الدولة مع ${message.guild.memberCount} عسكري مخلص لوطنه 👮🏻‍♂️ **__ `);
}
if (message.guild.id === "996810757238968431") {
message.send(`__** مرحباً بالعُضو الجديد ${message} في ${message.guild.name} 🔰
نرجى منك قرائة القوانين 🛠
و التفعيل و لكن قبلها قرائة قوانين التفعيل 📚 …
و نستودعك في رحلتك لتدمير المدينة مع ${message.guild.memberCount} مستعد لتدمير المدينة 💀🏻‍♂️ **__ `);
}
});

// رد

  client.on('messageCreate', message => {
    if(message.content.includes("شعار") || message.content.includes("وش الشعار")) {
      let member = message.mentions.members.first();
      let user = message.mentions.members.first();
      //
      if (message.guild.id == '980493720233316372') {
       if (!message.member.permissions.has('ADMINISTRATOR'))
         //
         if (!message.member.roles.cache.has('980494296320999424'))
           return message.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' });
  //
       if (!member) return message.reply({ content: ' __** منشن العسكري **__ ' }).then(message => setTimeout(() => message.delete(), 5000));
          return message.reply({ content: `!! ✯ 𝗙𝗣・˹ ${member.nickname} ˼` });
}
            if (message.guild.id == '996810757238968431') {
       if (!message.member.permissions.has('ADMINISTRATOR'))
         //
         if (!message.member.roles.cache.has('996820405828464742'))
           return message.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' });
  //
       if (!member) return message.reply({ content: ' __** منشن الإداري **__ ' }).then(message => setTimeout(() => message.delete(), 5000));
          return message.reply({ content: `!! ✯ 𝗙𝗚・˹ ${member.nickname} ˼` });
}
}});
  
client.on('messageCreate', message => {
if(message.content.includes("السلام عليكم") || message.content.includes("سلام عليكم")) {
if (message.guild.id == '980493720233316372') {

if (message.channel.id !== "1031233706473553992") 
return message.reply({ content: `__~~** وعـلـيـكـم الــســلام ورحـمـه الله وبـركـاتـه مـنـور/ه 👮‍♂️ **~~__` });
}
if (message.guild.id == '996810757238968431') {
return message.reply({ content: `__~~** وعـلـيـكـم الــســلام ورحـمـه الله وبـركـاتـه مـنـور/ه ☠️ **~~__` });
}
}
});
  
client.on('messageCreate', message => {
if(message.author.bot) return;
if (message.guild.id == '980493720233316372') {
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
message.reply({ embeds: [embed] });
}
}
});

client.on('messageCreate', message => {
if (message.guild.id == '980493720233316372') {
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
message.reply({ embeds: [embed] });
}
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

/* client.on('messageCreate', message => {
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

// العصابات

client.on('messageCreate', message => {
  if (message.author.bot) return;
  let line = new Discord.MessageAttachment("https://cdn.discordapp.com/attachments/996820450275500093/1049453075779305492/9BFA5912-825A-46FB-93E3-5B2863DB6D8F.png");
  if (message.guild.id !== '996810757238968431') return;
  if (message.channel.id !== '996820476892545134') return;
  if (message) {
    message.channel.send({ files: [line] });
  }
}); // تنبيهات السيرفر

client.on('messageCreate', message => {
  if (message.author.bot) return;
  let line = new Discord.MessageAttachment("https://cdn.discordapp.com/attachments/996820450275500093/1049453075779305492/9BFA5912-825A-46FB-93E3-5B2863DB6D8F.png");
  if (message.guild.id !== '996810757238968431') return;
  if (message.channel.id !== '1041751365757702174') return;
  if (message) {
    message.channel.send({ files: [line] });
  }
}); //  تعاميم العصابات

client.on('messageCreate', message => {
  if (message.author.bot) return;
  let line = new Discord.MessageAttachment("https://cdn.discordapp.com/attachments/996820450275500093/1049453075779305492/9BFA5912-825A-46FB-93E3-5B2863DB6D8F.png");
  if (message.guild.id !== '996810757238968431') return;
  if (message.channel.id !== '996820489550962769') return;
  if (message) {
    message.channel.send({ files: [line] });
  }
}); // تنبيهات المسؤولين

client.on('messageCreate', message => {
  if (message.author.bot) return;
  let line = new Discord.MessageAttachment("https://cdn.discordapp.com/attachments/996820450275500093/1049453075779305492/9BFA5912-825A-46FB-93E3-5B2863DB6D8F.png");
  if (message.guild.id !== '996810757238968431') return;
  if (message.channel.id !== '996820502322610256') return;
  if (message) {
    message.channel.send({ files: [line] });
  }
}); // تعاميم بلود

client.on('messageCreate', message => {
  if (message.author.bot) return;
  let line = new Discord.MessageAttachment("https://cdn.discordapp.com/attachments/996820450275500093/1049453075779305492/9BFA5912-825A-46FB-93E3-5B2863DB6D8F.png");
  if (message.guild.id !== '996810757238968431') return;
  if (message.channel.id !== '996820497952149605') return;
  if (message) {
    message.channel.send({ files: [line] });
  }
}); // تعاميم مافيا

client.on('messageCreate', message => {
  if (message.author.bot) return;
  let line = new Discord.MessageAttachment("https://cdn.discordapp.com/attachments/996820450275500093/1049453075779305492/9BFA5912-825A-46FB-93E3-5B2863DB6D8F.png");
  if (message.guild.id !== '996810757238968431') return;
  if (message.channel.id !== '998951014226989086') return;
  if (message) {
    message.channel.send({ files: [line] });
  }
}); // تعاميم بيكي

client.on('messageCreate', message => {
  if (message.author.bot) return;
  let line = new Discord.MessageAttachment("https://cdn.discordapp.com/attachments/996820450275500093/1049453075779305492/9BFA5912-825A-46FB-93E3-5B2863DB6D8F.png");
  if (message.guild.id !== '996810757238968431') return;
  if (message.channel.id !== '999370556128383066') return;
  if (message) {
    message.channel.send({ files: [line] });
  }
}); // تعاميم بلاك

client.on('messageCreate', message => {
  if (message.author.bot) return;
  let line = new Discord.MessageAttachment("https://cdn.discordapp.com/attachments/996820450275500093/1049453075779305492/9BFA5912-825A-46FB-93E3-5B2863DB6D8F.png");
  if (message.guild.id !== '996810757238968431') return;
  if (message.channel.id !== '996820519150178334') return;
  if (message) {
    message.channel.send({ files: [line] });
  }
}); // تنبيهات الإدارة

client.on('messageCreate', message => {
let line = new Discord.MessageAttachment("https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png");
let line2 = new Discord.MessageAttachment("https://cdn.discordapp.com/attachments/996820450275500093/1049453075779305492/9BFA5912-825A-46FB-93E3-5B2863DB6D8F.png");
if (message.content === "خط"||message.content === "لاين"|| message.content === "line" ) {
//
if (message.guild.id == '980493720233316372') {
if (!message.member.permissions.has('ADMINISTRATOR'))
if (!message.member.roles.cache.has('980494295444361216'))
return message.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' }).then(message => setTimeout(() => message.delete(), 5000));
message.delete()
message.channel.send({ files: [line] });
} 
//
if (message.guild.id == '996810757238968431') {
if (!message.member.permissions.has('ADMINISTRATOR'))
if (!message.member.roles.cache.has('996820405828464742')) 
return message.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' }).then(message => setTimeout(() => message.delete(), 5000));
message.delete()
message.channel.send({ files: [line2] });
}
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
    if(!dbp.has(`channel1_${message.guild.id}`)) return message.reply("**I Can't Find The Channel !**")
    if(!dbp.has(`codes_${message.guild.id}`)) return message.reply("**I Can't Find The Codes !**")
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
channel1.send({ content: ` __** <:emoji_20:981170142744567808> تحضير جديد بواسطة : ${interaction.member} <:emoji_20:981170142744567808> **__ `, embeds:[embed] });
channel1.send({ files: [line] });
interaction.reply({ content: ` __** <:emoji_20:981170142744567808> تم إرسال تحضيرك بـ نجاح : ${interaction.member} <:emoji_20:981170142744567808> **__ `, ephemeral:true }).then(m=> {
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
        if (!owner.includes(message.author.id)) return message.reply({ content: ' __** منت ستيفن لا تحاول هعهعهعهع **__ ' })
      let channel = message.mentions.channels.first()
      if(!channel) return message.reply({ content: ` __** منشن الشات ! **__ ` });
      db.set(`channel_${message.guild.id}` , channel.id)
      message.reply({ content: ` __** تم تعيين ${channel} كـ شات للتقديمات ! **__ ` });
  }
});

client.on("messageCreate" , message => {
if(message.content.startsWith(prefix+"رتبة-الإدارة-1")) {
      if (!owner.includes(message.author.id)) return message.reply({ content: ' __** منت ستيفن لا تحاول هعهعهعهع **__ ' })
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
        if (!owner.includes(message.author.id)) return message.reply({ content: ' __** منت ستيفن لا تحاول هعهعهعهع **__ ' })
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
      if (!owner.includes(message.author.id)) return message.reply({ content: ' __** منت ستيفن لا تحاول هعهعهعهع **__ ' })
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
      if (!owner.includes(message.author.id)) return message.reply({ content: ' __** منت ستيفن لا تحاول هعهعهعهع **__ ' })
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
   interaction.reply({ content: " __** تم إرسال تقديمك ! **__ " , ephemeral:true})
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