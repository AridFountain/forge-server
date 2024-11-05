const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('restart')
        .setDescription('Restarts the minecraft server.'),
    async execute(interaction) {
        await interaction.reply('Restarting server, this usually takes 2 minutes...')
        process.send('restart')
        await new Promise(resolve => {
            process.on('message', (message) => {
                resolve()
            })
        })
        await interaction.followUp('Server restarted!')
    }
}