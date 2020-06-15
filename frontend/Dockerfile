# build environment
FROM node:14-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./portfolio-frontend/package.json ./
COPY ./portfolio-frontend/package-lock.json ./
RUN npm ci --silent
RUN npm install react-scripts@3.4.1 -g --silent
COPY ./portfolio-frontend/ ./
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/public /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]