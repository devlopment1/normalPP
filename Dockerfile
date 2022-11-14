#FROM node:14-alpine as build
#WORKDIR /app
#COPY . .
#RUN yarn install
#RUN yarn build
# production environment
#FROM nginx:1.21.3
#COPY --from=builder /app/build /usr/share/nginx/html
#COPY --from=builder /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]
FROM node:14-alpine as builder
WORKDIR /app
COPY package.json .
#COPY yarn.lock .
RUN npm install 
COPY . .
RUN npm run build
EXPOSE 5003

FROM nginx:1.19.0 
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/dist .
ENTRYPOINT ["nginx", "-g", "daemon off;"]
