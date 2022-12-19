FROM node:16-alpine as BUILD_IMAGE

# Installing libvips-dev for sharp Compatibility
RUN apk update && apk add build-base gcc autoconf automake zlib-dev libpng-dev vips-dev && rm -rf /var/cache/apk/* > /dev/null 2>&1

WORKDIR /strapi

# Resolve node_modules for caching
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm install --production=true --frozen-lockfile

# Copy all for build and release cache if package.json update
COPY . .
ENV NODE_ENV=production
ENV DATABASE_URL=postgres://postgres:postgres@dongalab-db:5432/dongalab

RUN npm run build

#------------------------------------------------------------------------------------

# Create new namespace for final Docker Image
FROM node:16-alpine

# Installing libvips-dev for sharp Compatibility
RUN apk update && apk add build-base gcc autoconf automake zlib-dev libpng-dev vips-dev && rm -rf /var/cache/apk/* > /dev/null 2>&1
RUN apk add vips-dev

# Only copy your source code without system file
COPY --from=BUILD_IMAGE /strapi /strapi

WORKDIR /strapi

EXPOSE 1337

ENV NODE_ENV=production
ENV STRAPI_LOG_LEVEL=debug

CMD ["npm", "run", "start"]