# syntax=docker/dockerfile:1
FROM node:18-alpine
ARG GH_TOKEN

RUN apk update
RUN apk add git
RUN echo $GH_TOKEN
RUN git config --global url."https://${GH_TOKEN}@github.com".insteadOf "ssh://git@github.com"

WORKDIR /app

COPY . .

RUN yarn install
RUN yarn build

CMD ["yarn", "start"]
EXPOSE 8080