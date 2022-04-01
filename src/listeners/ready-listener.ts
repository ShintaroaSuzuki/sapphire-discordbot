import { ApplyOptions } from '@sapphire/decorators';
import { Events, Listener, ListenerOptions } from '@sapphire/framework';
import type { ClientEvents } from 'discord.js'

@ApplyOptions<ListenerOptions>({
  event: Events.ClientReady
})

export class UserEvent extends Listener {
  public run(...args: ClientEvents['ready']) {
    const [client] = args
    console.log(`${client.user.tag} is ready!`)
  }
}
