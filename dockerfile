# syntax=docker/dockerfile:1
FROM node:18-alpine
ARG NPM_TOKEN
WORKDIR /app
COPY . .
RUN echo "//npm.pkg.github.com/:_authToken=$NPM_TOKEN" > ~/.npmrc && npm install
#RUN yarn install
RUN yarn build
CMD ["yarn", "start"]
EXPOSE 8080

