import "dotenv/config";
import { Client, GatewayIntentBits } from "discord.js";

import { start } from "./start";
import { reply } from "./reply";

const TOKEN = process.env.TOKEN ?? "";

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

start();

reply(client);

client.login(TOKEN);
