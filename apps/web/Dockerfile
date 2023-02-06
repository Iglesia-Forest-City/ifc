FROM node:18.12.1-alpine AS builder
LABEL maintainer="cesosag@gmail.com"
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app
COPY . .
RUN yarn
RUN yarn build

FROM node:18.12.1-alpine AS runner
# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs
WORKDIR /app
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone .
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
CMD yarn start
