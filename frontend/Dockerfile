# build environment
FROM --platform=linux/amd64 node:14.19.0-alpine as build

# RUN npm install -g npm@8.3.2
RUN apk --no-cache --virtual --update add g++ make python3 py3-pip
WORKDIR /app
# ENV PATH /app/node_modules/.bin:$PATH
COPY ./portfolio-frontend/package.json ./
COPY ./portfolio-frontend/package-lock.json ./
RUN npm ci
RUN npm install react-scripts@3.4.1 -g --silent
COPY ./portfolio-frontend/ ./
RUN npm run build
# install node modules and build assets
#RUN yarn install && yarn build


# production environment
FROM nginx:stable-alpine
# Copy static assets from builder stage
COPY --from=build /app/public /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
