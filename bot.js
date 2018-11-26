//Open CMD
//Run the command:    cd [this directory]
//Then:    npm install discord.js
//Then:	   node "bot.js"



const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

});

client.on("message", message => {
    const prefix = '+';
    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;
 
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
 
 
    if (command === "crole") {
        
        if(message.member.roles.find("name", "Owner") || message.member.roles.find("name", "Admin")  ) {
            let roleName = args[0];
            let rColor = args[1];
			rColor = rColor.toUpperCase();
			
            message.guild.createRole({
                name: `${roleName}`,
                color: `${rColor}`,
            })
            
            .then(role => console.log('Created new role with name ${role.name} and color ${role.color}'))
            .catch(console.error);
        } else {
            message.channel.send("You do not have sufficient permissions!");
			
        }
      
    }
    
    if (command === "give-role") {
        if(message.member.roles.find("name", "Owner") || message.member.roles.find("name", "Admin") ) {
            
            
            let member = message.mentions.members.first();
            
            
            let umember = args[0];
            let rname = args[1];
            
            let role = message.guild.roles.find(r => r.name === `${rname}`);
            
            member.addRole(role).catch(console.error);
        } else {
            message.channel.send("You do not have sufficient permissions!");
        }
      
    }
	
	if (command === "ping") {
		message.channel.send("Pong!");
	}
	
	if (command === "help") {
		
	}
});

client.login('');
