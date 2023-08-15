import { Command, Navi, Context } from "../../structures/index.js";
import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js";

export default class Invite extends Command {
    constructor(client: Navi) {
        super(client, {
            name: "invite",
            description: {
                content: "Sends the bot's invite link",
                examples: ["invite"],
                usage: "invite"
            },
            category: "info",
            aliases: ["inv"],
            cooldown: 3,
            args: false,
            player: {
                voice: false,
                dj: false,
                active: false,
                djPerm: null
            },
            permissions: {
                dev: false,
                client: ["SendMessages", "ViewChannel", "EmbedLinks"],
                user: []
            },
            slashCommand: true,
            options: []
        });
    };
    public async run(client: Navi, ctx: Context, args: string[]): Promise<void> {

        const embed = this.client.embed();
        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setLabel("Invite Navi")
                .setStyle(ButtonStyle.Link)
                .setURL(`https://discord.com/api/oauth2/authorize?client_id=875635121770889257&permissions=8&scope=bot%20applications.commands`),
            new ButtonBuilder()
                .setLabel("Support Server")
                .setStyle(ButtonStyle.Link)
                .setURL("https://discord.gg/ns8CTk9J3e"))

        return ctx.sendMessage({ embeds: [embed.setColor(this.client.color.main).setDescription(`[Invite Navi](https://discord.com/api/oauth2/authorize?client_id=875635121770889257&permissions=8&scope=bot%20applications.commands) | [Support Server](https://discord.gg/ns8CTk9J3e)`)], components: [row] });
    }
};

