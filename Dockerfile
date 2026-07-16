FROM node:22-bookworm

WORKDIR /app

# 1. Copie des fichiers de dépendances
COPY package*.json ./

# 2. Installation des dépendances (mise en cache)
RUN npm ci

# 3. Copie des fichiers de configuration
COPY tsconfig.json webpack.common.js webpack.config.js webpack.dev.js webpack.prod.js server.js ./

# 4. Copie des sources et des ressources statiques
COPY public ./public
COPY src ./src

# 5. Compilation de l'application
RUN npm run build

# 6. Exposition du port serveur et commande de démarrage
EXPOSE 5181
CMD ["npm", "run", "serve"]