FROM node:18.14.0-alpine AS builder
LABEL maintainer="cesosag@gmail.com"
RUN apk update && apk add --no-cache libc6-compat zip
ENV NODE_ENV=production
WORKDIR /app
COPY . .
RUN yarn
RUN --mount=type=secret,id=_env,target=/app/.env yarn build
RUN rm -rf .next/standalone/.env

FROM node:18.14.0-alpine AS runner
# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs
WORKDIR /app
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone .
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
CMD yarn start
