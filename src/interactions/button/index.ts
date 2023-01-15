import type { ButtonInteraction, CacheType } from "discord.js";

export const buttonInteraction = async (
  interaction: ButtonInteraction<CacheType>
) => {
  if (interaction.customId === "button_custom_id") {
    await interaction.reply("Button Interaction");
  }
};
