FROM node:12-alpine

WORKDIR /app

COPY .  .

RUN apk update && apk upgrade && apk add --no-cache bash git openssh \
&& npm i && npm run compile \
&& apk del bash git openssh

EXPOSE 8080

CMD ["node", "-r", "esm", "server/server.js"]



