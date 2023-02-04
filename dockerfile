# syntax=docker/dockerfile:1
FROM node:18-alpine
ARG GH_TOKEN
ENV GH_TOKEN $GH_TOKEN

RUN apk update
RUN apk add git
RUN echo $GH_TOKEN
RUN git config --global url."https://npm.pkg.github.com/:_authToken=$GH_TOKEN".insteadOf "https://npm.pkg.github.com/"

WORKDIR /app

COPY . .

RUN yarn install
RUN yarn build

CMD ["yarn", "start"]
EXPOSE 8080