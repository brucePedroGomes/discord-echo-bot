import { REST } from "@discordjs/rest";
import { Routes } from "discord.js";
import { commands } from "./commands";

const TOKEN = process.env.TOKEN ?? "";
const CLIENT_ID = process.env.CLIENT_ID ?? "";
const GUILD_ID = process.env.GUILD_ID ?? "";

const rest = new REST({ version: "10" }).setToken(TOKEN);

export const start = async () => {
   try {
      console.log("Started refreshing application (/) commands.");

      await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {
         body: commands,
      });

      console.log("Successfully reloaded application (/) commands.");
   } catch (error) {
      console.error("error when starting", error);
   }
};
