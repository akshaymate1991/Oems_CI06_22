FROM node:18.12.1-alpine AS build 



WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN  npm install 
COPY . .
RUN npm run build  




##STAGE####
FROM  nginx:1.17.1-alpine
COPY  nginx.conf  /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/oems  /usr/share/nginx/html