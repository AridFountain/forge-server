const { SlashCommandBuilder } = require('discord.js')
const fs = require('node:fs/promises')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('players')
        .setDescription('list of active players.'),
    async execute(interaction) {
        let playerString = ''
        try {
            let data = await fs.readFile('C:/Users/colec/Projects/C/server/server_main/active-players.json')
            let players = await JSON.parse(data);
            if(players && players.length > 0) {
                for(let player in players) {
                    playerString = `${playerString}\n${players[player].name}`
                }
                interaction.reply(playerString)
            }
            else {
                await interaction.reply('No players are currently online.')
            }
        }
        catch {
            await interaction.reply('No players are currently online.')
        }
    }
}