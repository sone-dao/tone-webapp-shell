# syntax=docker/dockerfile:1
FROM node:18-alpine
ARG GH_TOKEN
ENV GH_TOKEN $GH_TOKEN

RUN apk update
RUN apk add git

WORKDIR /app

COPY . .

RUN echo -e "machine github.com\n  login $GH_TOKEN" > ~/.netrc
RUN yarn install
RUN rm ~/.netrc
RUN yarn build

CMD ["yarn", "start"]
EXPOSE 8080