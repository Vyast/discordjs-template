import { Commands } from "@/cmds";
import {
  type CacheType,
  type ChatInputCommandInteraction,
  inlineCode,
} from "discord.js";

export const chatInputCommandInteraction = async (
  interaction: ChatInputCommandInteraction<CacheType>
) => {
  const command = Commands.find(
    (command) => command.data.name === interaction.commandName
  );

  if (!command) {
    return await interaction.reply({
      ephemeral: true,
      content: `An error occurred. Unknown application command: ${inlineCode(
        interaction.commandName
      )}`,
    });
  }

  try {
    await command.execute(interaction);
  } catch (error: any) {
    console.error(`Application command interaction error: ${error.message}`);

    if (!interaction.isRepliable()) return;

    if (interaction.deferred) {
      await interaction.editReply({
        content:
          "An error occurred while executing this command. Please try again later.",
        components: [],
        embeds: [],
      });
    }
  }
};
