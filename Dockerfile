FROM node:16.11-alpine AS install

WORKDIR /var/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json .
COPY yarn.lock .

RUN yarn

# add app
COPY . ./


FROM install AS build
RUN yarn build

FROM nginx:alpine as production
COPY --from=build /var/app/build /dist
COPY nginx.conf /etc/nginx/conf.d/
