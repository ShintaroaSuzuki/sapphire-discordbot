import { Client } from '@notionhq/client'

const notion = new Client({
  auth: process.env.NOTION_TOKEN
})

export const pushToNotion = async (title: string, tag?: string) => {
  await notion.pages.create({
    parent: { database_id: process.env.NOTION_DATABASE_ID! },
    properties: {
      タスク名: {
        type: "title",
        title: [
          {
            text: {
              content: title,
            },
          },
        ],
      },
      状態: {
        type: "select",
        select: {
          name: "未着手",
        },
      },
      タグ: {
        type: "select",
        select: {
          name: tag || " "
        },
      },
    },
  });
}

