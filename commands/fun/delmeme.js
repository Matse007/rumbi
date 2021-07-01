let memes;
var fs = require("fs");
module.exports = {
  name: "delmeme",
  description: "this is a meme command!",
  guildOnly: true,
  hidden: true,
  execute(message, args) {
    if (
      message.member.roles.cache.find((role) => (role.name = "Admin")) ||
      message.author.id == "72182588885700608" ||
      message.author.id == "82799177439907840"
    ) {
      if (args.length <= 0) {
        message.channel.send(
          "Next time, try telling me what to delete ya goofnut..."
        );
        return;
      }
      memes = JSON.parse(fs.readFileSync("./ressources/memes.json", "utf8"));
      let newMeme = args.join(" ").toLowerCase().split("|");
      message.channel.send("Deleting meme: " + newMeme);
      delete memes[newMeme];
      fs.writeFile(
        "./ressources/memes.json",
        JSON.stringify(memes, null, "\t"),
        "utf8",
        (err) => {
          if (err) {
            console.log("Error writing file", err);
          } else {
            console.log("Successfully wrote file");
          }
        }
      );  
    }
  },
};
