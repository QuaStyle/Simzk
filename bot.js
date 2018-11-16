const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "-"

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(` ✨ `,"https://www.twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.on('ready', () => {
  client.user.setGame(`»Tφp★ .`,'https://www.twitch.tv/v5bz');
  console.log('---------------');
  console.log('Desert Bot Is Online')
  console.log('---------------')
});

client.on('message', msg => {
	var prefix = "...=";
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```Supply A Number 👌```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```Cleard: " + textxt + "\n Messages```").then(m => m.delete(3000));
        }    
    }
}
});


client.on("message", message => {
	var prefix = "003A469";
 if (message.content === "=..0hElp") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`
	  
	         Please Chose: 
			 
${prefix}help public ⇏ اوامر عامة
${prefix}help admin ⇏ اوامر ادارة السيرفر
			 
${prefix}help games ⇏ اوامر الالعاب
${prefix}help music ⇏ اوامر الموسيقى

${prefix}clan لعرض اوامر الكلانات 
`)
   message.channel.sendEmbed(embed)
    
   }
   }); 
  

client.on("message", message => {
	var prefix = "a.aaaa.a=";
 if (message.content === "=help public") {
	 message.channel.send('**تم ارسالك في الخاص** :mailbox_with_mail: ');
  const embed = new Discord.RichEmbed() 
      .setColor("#000000")
      .setDescription(`
			  اوامر عامة
❖=allbots ~ لعرض جميع البوتات الي بالسيرفر
❖=server ~يعرض لك معلومات عن السيرفر
❖=bot ~ يعرض لك كل معلومات البوت
❖=skin <name> ~ يعرض لك سكنك بماين كرافت
❖=count ~ يعرض لك عدد الاشخاص بالسيرفر بدون بوتات
❖=invites ~ يعرض لك  عدد انفايتاتك بالسيرفر 
❖=invite-codes ~ يعرض لك روابط الانفايتات حكك في السيرفر 
❖=cal ~ اله حاسبة
❖=trans <language> <any thing> ~ يترجم لك الي تبيه من اي لغة
❖=short ~ يختصر لك رابط كبير الى رابط صغير
❖=tag ~ يكتب لك الكلمة بشكل جميل وكبير
❖=google ~ للبحث في قوقل عن طريق الدسكورد
❖=perms ~ يعرض لك برمشناتك بالسيرفر
❖=za5 ~ يزخرف لك كلمة او جملة
❖=rooms ~ يعرض لك كل الرومات الي بالسيرفر مع عددها
❖=roles ~ يعرض لك كل الرانكات بالسيرفر بشكل جميل
❖=emojilist ~ يعرض لك كل الايموجيات الي بالسيرفر
❖=say ~ يكرر الكلام الي تكتبو
❖=image ~ صورة السيرفر
❖=members ~ يعرض لك عدد كل حالات الاشخاص وعدد البوتات وعدد الاشخاص
❖=id ~ معلومات عنك
❖=bans ~ عدد الاشخاص المبندة 
❖=avatar ~ صورتك او صورة الي تمنشنو
❖=embed ~ يكرر الي تقولو بشكل حلو
❖=emoji <any things> ~ لتحويل اي كلمه تقولها الي ايموجي
❖=inv ~ لدعوة البوت الى سيرفرك
❖=support ~ سيرفر الدعم
❖=contact ~ ارسال اقتراح او لمراسلة صاحب البوت
❖=topinv لعرض اكثر الاعضاء الذين يدعون

`)
   message.author.sendEmbed(embed)
    
   }
   }); 

const adminprefix = "-";
const devs = ['411137717884289024','298047001239486466'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'setG')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else 
  if (message.content.startsWith(adminprefix + 'setN')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'setA')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else     
if (message.content.startsWith(adminprefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
}
});



client.login(process.env.BOT_TOKEN);
