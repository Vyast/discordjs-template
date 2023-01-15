import { type SlashCommand } from "@/types/discord";
import { SlashCommandBuilder } from "discord.js";

const Ping: SlashCommand = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with pong!"),
  async execute(interaction) {
    await interaction.reply({
      ephemeral: true,
      content: "Pong!",
    });
  },
};

export default Ping;
