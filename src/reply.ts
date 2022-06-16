import { Client, Interaction, TextChannel } from "discord.js";

export const reply = (client: Client) => {
   client.on("interactionCreate", async (interaction: Interaction) => {
      if (!interaction.isChatInputCommand()) return;

      if (interaction.commandName === "ping") {
         await interaction.reply("Pong!");
      }

      if (interaction.commandName === "echo") {
         const message = interaction.options.getString("message");

         const channel = interaction.guild?.channels.cache.get(
            "985936739753398302"
         ) as TextChannel;

         const replyMessage = "@everyone " + message;

         await channel.send(replyMessage);

         await interaction.reply("Your message was sent");
      }
   });
};
