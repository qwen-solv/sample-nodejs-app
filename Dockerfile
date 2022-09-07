FROM node:16-alpine
WORKDIR /usr/app
COPY . .
RUN npm install
RUN npm run build

EXPOSE 3000
CMD [ "node", "dist/index.js" ]



