const express = require('express');
const { Client, RichEmbed } = require('discord.js');
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
const http = require('http');
app.get("/", (request, response) => {
  console.log(Date.now() + " DuySad Youtube | Hostlandı");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000) 
const Discord = require('discord.js');
const client = new Discord.Client();
const data = new Map();

client.on('ready', () => {
        console.log(`${client.user.username} ismi ile giriş yapıldı! ${client.guilds.size} Sunucu, ${client.users.size} Kullanıcı.`);
});

client.on("message", async msg => {
  if (msg.channel.type === "dm") {
    if (msg.author.id === client.user.id) {
    } else {
      if (msg.author.bot) {
      } else {
        let fyukas = await data.get(msg.author.id)
        
        if (fyukas === 1) {
        } else {
          await data.set(msg.author.id, 1)
          await sleep(4500)
          await msg.channel.send("") // Discord sunucunuzun kalıcı linkini girin size mesaj atanlara oto dönüş yapması için.  
          await data.set(msg.author.id, 2)
          await sleep(7500)
          await msg.channel.send("")
      }
      }
    }
  }
})


client.on("guildCreate", fyukas => {
  sleep(1000);
  if (
    fyukas.id === "" ||  // j4j sunucusunun idsi
    fyukas.id === ""  // j4j sunucusunun idsi
  ) {
    
  } else {
    fyukas.leave();
  }
  });

client.on("ready", () => {
      setInterval(() => {
       let a = client.channels.get("") // j4j sunucusunun kanal id'si


       a.send(" ░░░░░██╗░░██╗██╗░░░░░██╗  \n  ░░░░░██║░██╔╝██║░░░░░██║ \n  ░░░░░██║██╔╝░██║░░░░░██║ \n  ██╗░░██║███████║██╗░░██║ \n ╚█████╔╝╚════██║╚█████╔╝ \n ░╚════╝░░░░░░╚═╝░╚════╝░ ")


      }, 50000);
})

client.on("ready", () => {
      setInterval(() => {
       let a = client.channels.get("") // j4j sunucusunun kanal id'si


       a.send("██▓▒­░ ►▬J4J DM▬◄ ░▒▓██")


      }, 30000);
})

const Constants = require('discord.js/src/util/Constants.js')
Constants.DefaultOptions.ws.properties.$browser = 'Discord iOS'



client.login(process.env.TOKEN)
