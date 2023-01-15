import { type CacheType, type StringSelectMenuInteraction } from "discord.js";

export const stringSelectMenuInteraction = async (
  interaction: StringSelectMenuInteraction<CacheType>
) => {
  if (interaction.customId === "select_custom_id") {
    await interaction.reply("String Select Menu Interaction");
  }
};
