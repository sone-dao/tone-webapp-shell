# syntax=docker/dockerfile:1
FROM node:18-alpine
ARG NPM_TOKEN
ENV NPM_TOPEN = ${NPM_TOKEN}
WORKDIR /app
COPY . .
RUN npm install && rm -f .npmrc && yarn build
#RUN echo "//npm.pkg.github.com/:_authToken=$GH_TOKEN" > .npmrc
#RUN yarn install
#RUN yarn build
CMD ["yarn", "start"]
EXPOSE 8080

