FROM node:14

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm i -g @nestjs/cli
RUN npm install
COPY . .

EXPOSE 3000

CMD [ "node", "dist/main"]