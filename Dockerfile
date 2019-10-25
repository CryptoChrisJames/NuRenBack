FROM node:latest
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
ARG PROJECTENV="development"
ENV PROJECTENV=${PROJECTENV}
CMD node index.js
EXPOSE 80