//bot logged in successfully and it's ready to be used
exports = {
	name: 'ready',
	once: true, 
	execute(client) {
        client.user.setPresence({
            game: {
                name: 'in Hat Kid\'s Spaceship',
                type: 0
            }
        });
      console.log(`Ready to  server in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);
    
	},
};