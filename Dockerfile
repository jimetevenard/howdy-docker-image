FROM node:lts-alpine

COPY . .

EXPOSE 8080
CMD [ "node", "index.js" ]
