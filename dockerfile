# syntax=docker/dockerfile:1
FROM node:18-alpine
ARG gh_token
ENV token $gh_token
WORKDIR /app
COPY . .
RUN echo "//npm.pkg.github.com/:_authToken=$token" > .npmrc && yarn install && rm -f .npmrc && yarn build
#RUN echo "//npm.pkg.github.com/:_authToken=$GH_TOKEN" > .npmrc
#RUN yarn install
#RUN yarn build
CMD ["yarn", "start"]
EXPOSE 8080

