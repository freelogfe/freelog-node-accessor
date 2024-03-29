FROM node:14.6.0-alpine

MAINTAINER yuliang <yu.liang@freelog.com>

RUN mkdir -p /data/freelog-node-web

WORKDIR /data/freelog-node-web

COPY . /data/freelog-node-web

RUN npm install --production

#ENV
#VOLUME ['/opt/logs','/opt/logs/db','/opt/logs/koa','/opt/logs/track']

ENV NODE_ENV prod
ENV EGG_SERVER_ENV prod
ENV PORT 7777
ENV TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

EXPOSE 7777

CMD [ "npm", "start" ]
