# syntax=docker/dockerfile:1
FROM node:18-alpine
ARG GH_TOKEN
WORKDIR /app
COPY . .
RUN echo "registry=https://registry.npmjs.org/\n@sone-dao:registry=https://npm.pkg.github.com/\n//npm.pkg.github.com/:_authToken=$GH_TOKEN" > .npmrc
RUN yarn install
RUN yarn build
CMD ["yarn", "start"]
EXPOSE 8080

