# syntax=docker/dockerfile:1
FROM node:18-alpine
ARG gh_token

RUN apk update
RUN apk add git
RUN git config --global url."https://${gh_token}@github.com/".insteadOf "https://github.com/"

WORKDIR /app

COPY . .

RUN yarn install
RUN yarn build

CMD ["yarn", "start"]
EXPOSE 8080