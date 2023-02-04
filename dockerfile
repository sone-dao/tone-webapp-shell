# syntax=docker/dockerfile:1
FROM node:18-alpine
ARG GH_TOKEN
WORKDIR /app
COPY . .
RUN echo "//registry.npmjs.org/:_authToken=$GH_TOKEN" > .npmrc
RUN yarn install --production
RUN yarn build
CMD ["yarn", "start"]
EXPOSE 8080

