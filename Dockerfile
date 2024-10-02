
FROM node:18.17.0


WORKDIR /index


COPY package*.json ./


RUN npm install 


COPY . .


EXPOSE 4000


CMD ["npm", "start"]
