FROM node:18.12.1-alpine
LABEL maintainer="cesosag@gmail.com"
RUN apk add --no-cache libc6-compat
RUN apk update
ENV NODE_ENV=development
WORKDIR /app
COPY ./package.json ./package.json
COPY ./yarn.lock ./yarn.lock
RUN yarn
CMD yarn dev
EXPOSE ${PORT}
