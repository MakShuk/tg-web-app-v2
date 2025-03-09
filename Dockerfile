# Этап сборки
FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build

# Финальный образ
FROM node:18-alpine
WORKDIR /app
ENV NODE_ENV production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

EXPOSE 2999
CMD ["npm", "start"]