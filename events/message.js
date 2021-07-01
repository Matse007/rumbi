let botTalkChannelId = 415000409963495424;
const memeaddon = require('../addons/meme');
module.exports = {
	name: 'message',
	execute(message, client, prefix) {
		//TODO TOGGLE THIS BEFORE PUTTING THIS ON LIVE
		//set botTalkChannelId to the wanted channel. Can be modified. As of writing this, its disabled entirely.
		//if (message.channel.id != botTalkChannelId) return;
		memeaddon.execute(message);
		if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();
	const command = client.commands.get(commandName)
	|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (command.guildOnly && message.channel.type === 'dm') {
		return message.reply('I can\'t execute that commandName inside DMs!');
		console.log("send message");
	}

	if (command.permissions) {
		const authorPerms = message.channel.permissionsFor(message.author);
		if (!authorPerms || !authorPerms.has(commandName.permissions)) {
			return message.reply('You can not do this!');
		}
	}
	try {
		client.commands.get(commandName).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that commandName!');
	}
	},
};