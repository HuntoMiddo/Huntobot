const {SlashCommandBuilder} = require ("@discordjs/builders");
const{MessageEmbed} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
            .setName("resume")
            .setDescription("Resumes the current song."),
            execute: async  ({client, interaction}) => {

                const queue = client.player.getQueue(interaction.guild);
            

            if (!queue){ 
                await interaction.reply("There is no song playing bitch,");
                return;
            }
            

            queue.setPaused(false);

            await interaction.reply("the current song has been resumed. bitch");{
      
            }
        }
    }