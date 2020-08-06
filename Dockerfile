FROM node:14
WORKDIR /usr/src/app
COPY package.json tsconfig.json yarn.lock  ./
RUN yarn install --pure-lockfile && yarn cache clean
COPY . .
RUN yarn run build
EXPOSE 4555
CMD ["node","dist/index.js"]