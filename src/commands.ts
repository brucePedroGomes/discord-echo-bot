import { SlashCommandBuilder } from "discord.js";

export const commands = [
   new SlashCommandBuilder()
      .setName("ping")
      .setDescription("Replies with pong!"),
   new SlashCommandBuilder()
      .setName("echo")
      .setDescription("Replies with your input!")
      .addStringOption((option) =>
         option
            .setName("message")
            .setDescription("The input to echo back")
            .setRequired(true)
      ),
].map((command) => command.toJSON());
