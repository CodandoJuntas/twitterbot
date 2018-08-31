FROM mhart/alpine-node:8.11.2

RUN mkdir /app
WORKDIR /app

COPY . /app

RUN npm install --production

EXPOSE 3334

CMD ["npx", "pm2-docker", "--raw", "src/index.js"]
