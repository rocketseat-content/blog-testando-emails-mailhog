FROM node:alpine

WORKDIR /usr/app

COPY index.js ./

RUN yarn add nodemailer