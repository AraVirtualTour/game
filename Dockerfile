# Build
FROM node:12.2.0-alpine as build

WORKDIR /app/game
ENV PATH /app/game/node_modules/.bin:$PATH
COPY package.json /app/game/package.json
RUN npm install --silent

COPY . /app/game
RUN npm run build

# Production
FROM nginx:1.16.0-alpine
COPY --from=build /app/game/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
CMD ["nginx", "-g", "daemon off;"]
