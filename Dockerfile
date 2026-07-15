FROM node:22-bookworm

WORKDIR /app

COPY package.json ./
COPY tsconfig.json webpack.config.cjs index.html server.js ./
COPY tom-design-system-0.1.0.tgz ./
COPY src ./src
COPY node_modules ./node_modules

RUN mkdir -p node_modules/@tom/design-system \
  && tar -xzf tom-design-system-0.1.0.tgz -C node_modules/@tom/design-system --strip-components=1 package \
  && npm run build

EXPOSE 5181

CMD ["npm", "run", "serve"]
