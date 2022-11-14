FROM node:16.13.1

EXPOSE 5000

WORKDIR /drima

RUN npm i npm@latest -g

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --force

RUN npm run build

COPY . .

COPY .env /drima/

WORKDIR /dist

CMD node dist/main.js