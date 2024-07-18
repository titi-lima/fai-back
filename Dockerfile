FROM node:20.9.0

WORKDIR /usr/src/app

COPY package.json yarn.loc[k] ./

RUN yarn install

COPY . .

RUN yarn prisma generate

EXPOSE 3001

CMD ["yarn", "dev"]