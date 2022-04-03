import { SubCommandPluginCommand } from '@sapphire/plugin-subcommands';
import { Command, Args, UserError } from '@sapphire/framework'
import type { Message } from 'discord.js';
import { pushToNotion } from '../lib/notion'

export class TaskCommand extends SubCommandPluginCommand {
  public constructor(context: Command.Context, options: Command.Options) {
    super(context, {
      ...options,
      name: 'createtask',
      aliases: ['task'],
      description: 'create new page in notion database'
    })
  }

	public async messageRun(message: Message, args: Args) {
    const msg = await this.createMsg(args)
    return message.channel.send(msg)
	}

  createMsg = async (args: Args) => {
    try {
      const stringArgs = await args.repeat('string')
      if (stringArgs.length >= 3) {
        return '引数が多すぎます'
      } else {
        const taskTitle = stringArgs[0]
        const taskTag = stringArgs[1]
        pushToNotion(taskTitle, taskTag)
        return `タスク「${taskTitle}」を作成しました`
      }
    } catch(e) {
      if (e instanceof UserError) {
        return '引数は1つ以上指定してください'
      } else {
        return String(e)
      }
    }
  }
}
