import { SlashCommandBuilder } from "discord.js";
import { SlashCommand } from "../../types/discord";

const Ping: SlashCommand = {
  data: new SlashCommandBuilder().setName("ping").setDescription("Check if the bot is online."),
  async execute(interaction) {
    await interaction.reply({
      ephemeral: true,
      content: "Pong!",
    });
  },
};

export default Ping;
