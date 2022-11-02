FROM node:14-alpine as build
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build
# production environment
FROM nginx:1.21.3
COPY --from=builder /app/build /usr/share/nginx/html
COPY --from=builder /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]