# syntax=docker/dockerfile:1
FROM node:18-alpine
ARG GH_TOKEN
ENV GH_TOKEN $GH_TOKEN

RUN apk update
RUN apk add git

WORKDIR /app

COPY . .

RUN echo "//registry.npmjs.org/:_authToken=${GH_TOKEN}" > /app/.npmrc
RUN npm install
RUN yarn build

CMD ["yarn", "start"]
EXPOSE 8080