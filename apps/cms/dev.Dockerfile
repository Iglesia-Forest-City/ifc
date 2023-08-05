FROM node:18.14.0-alpine
LABEL maintainer="cesosag@gmail.com"
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev
ENV NODE_ENV=development
WORKDIR /app
COPY ./package.json ./package.json
RUN yarn
CMD yarn && yarn build && yarn develop
