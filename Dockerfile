FROM node:13-alpine

ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PWD=password

<<<<<<< HEAD
RUN mkdir -p /home/node-app

COPY ./app /home/node-app

CMD ["node", "/home/node-app/server.js"]
=======
RUN mkdir -p /home/app

COPY ./app /home/app

CMD ["node", "/home/app/server.js"]
>>>>>>> 93e34c3f8e0ef949dc9ea625415990b3976fff4c
