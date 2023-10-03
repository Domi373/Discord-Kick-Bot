const { Client, Events, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildPresences,
  ]
})
const keepAlive = require("./server");
require("dotenv").config();


client.once(Events.ClientReady, c => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
  c.user.setStatus("invisible");
})

client.on('voiceStateUpdate', (olds, news) => {	
	const date = new Date();
	
	if (news.member.presence != null) {
		if (news.member.presence.status != "offline") {
			if (Object.hasOwn(news.member.presence.clientStatus, "mobile")) {
			news.member.voice.disconnect() ? console.log(news.member.user.tag + " | kicked bcs on mobile | " + date.getHours() + ":" + date.getMinutes()) : console.log("not kicked 1");
			}
		}
		else {
			if (news.id == "567135257883836437") news.member.voice.disconnect() ? console.log(news.member.user.tag + " | kicked bcs changed status to offline | " + date.getHours() + ":" + date.getMinutes()) : console.log("not kicked 2");
		}
	}
	else {
		if (news.id == "567135257883836437") news.member.voice.disconnect() ? console.log(news.member.user.tag + " | kicked bcs of offline status | " + date.getHours() + ":" + date.getMinutes()) : console.log("not kicked 3");
	}
  //kick z serwa -> news.member.kick("Cwel") ? console.log("kicked") : console.log("not kicked");
});

keepAlive();
client.login(process.env['TOKEN']);