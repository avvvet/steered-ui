FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ARG PUBLIC_ANALYTICS_URL
ARG PUBLIC_API_TOKEN
ENV PUBLIC_ANALYTICS_URL=$PUBLIC_ANALYTICS_URL
ENV PUBLIC_API_TOKEN=$PUBLIC_API_TOKEN
RUN npm run build

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/build build/
COPY --from=builder /app/node_modules node_modules/
COPY package.json .
EXPOSE 3000
CMD ["node", "build"]