import { type CacheType, type ModalSubmitInteraction } from "discord.js";

export const modalSubmitInteraction = async (
  interaction: ModalSubmitInteraction<CacheType>
) => {
  if (interaction.customId === "modal_custom_id") {
    await interaction.reply("Modal Submit");
  }
};
