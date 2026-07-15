FROM node:22-bookworm

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json webpack.common.js webpack.dev.js webpack.prod.js webpack.config.js server.js ./
COPY public ./public
COPY tom-design-system-0.1.0.tgz ./
COPY src ./src

RUN npm ci
RUN npm run build

EXPOSE 5181

CMD ["npm", "run", "serve"]
