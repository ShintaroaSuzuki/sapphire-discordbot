# 初期設定

```
cp Dockerfile.example Dockerfile
```

`Dockerfile` 内で下記の設定を修正

```
ENV DISCORD_TOKEN="YOUR_DISCORD_BOT_TOKEN"
ENV DEFAULT_PREFIX="!"
ENV NOTION_TOKEN="YOUR_NOTION_TOKEN"
ENV NOTION_DATABASE_ID="YOUR_NOTION_DATABASE_ID"

```

# ローカルで動かす

## イメージの作成

```
docker build -t YOUR_IMAGE_NAME .
```

## コンテナの起動

```
docker run YOUR_IMAGE_NAME
```

# Cloud Run上でDiscord Botを動かす

## イメージの作成

```
gcloud build submit --tag gcr.io/YOUR_PROJECT_ID/YOUR_IMAGE_NAME
```

## イメージのデプロイ

```
gcloud run deploy --image gcr.io/YOUR_PROJECT_ID/YOUR_IMAGE_NAME --platform managed
```

[sapphire]: https://github.com/sapphiredev/framework
[unlicense]: https://github.com/sapphiredev/examples/blob/main/LICENSE.md
