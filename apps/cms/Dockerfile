
FROM node:18.14.0-alpine as build
LABEL maintainer="cesosag@gmail.com"
# Installing libvips-dev for sharp compatibility
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev > /dev/null 2>&1
ENV NODE_ENV=production
WORKDIR /opt/
COPY ./package.json ./
ENV PATH /opt/node_modules/.bin:$PATH
RUN yarn install --production
WORKDIR /opt/app
COPY ./ .
RUN yarn build

FROM node:18.14.0-alpine
# Installing libvips-dev for sharp compatibility
RUN apk add --no-cache vips-dev
# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 strapi
USER strapi
ENV NODE_ENV=production
WORKDIR /opt/
COPY --from=build --chown=strapi:nodejs /opt/node_modules ./node_modules
ENV PATH /opt/node_modules/.bin:$PATH
WORKDIR /opt/app?|
COPY --from=build --chown=strapi:nodejs /opt/app ./
EXPOSE 1337
CMD yarn start
