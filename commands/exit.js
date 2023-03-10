const {SlashCommandBuilder} = require ("@discordjs/builders");
const{MessageEmbed} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
            .setName("exit")
            .setDescription("Fucks your bitch"),
            execute: async  ({client, interaction}) => {

                const queue = client.player.getQueue(interaction.guild);
            

            if (!queue){ 
                await interaction.reply("There is no song playing bitch,");
                return;
            }
            

            queue.destroy();

            await interaction.reply("fuck you bitch");{
      
            }
        }
    }