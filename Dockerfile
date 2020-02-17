# dernière version LTS stable
FROM node:10

# racine container docker
WORKDIR /app

# ajoute la config json locale à Docker
COPY ./package.json .

# lance l'installation des packages npm
RUN npm install

# copie tous les dossiers en local sur la racine d container (/app)
COPY . .

# permet de se connecter via le port 8080
EXPOSE 8080


CMD npm run start