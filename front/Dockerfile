# FROM node:14.4.0-alpine 使用不可
FROM node:20.10.0-alpine

ARG WORKDIR
# ARG CONTAINER_PORT
ARG API_URL

ENV HOME=/${WORKDIR} \
    LANG=C.UTF-8 \
    TZ=Asia/Tokyo \
    HOST=0.0.0.0 \
    API_URL=${API_URL}

# ENV check（このRUN命令は確認のためなので無くても良い）
# RUN echo ${HOME}
# RUN echo ${CONTAINER_PORT}

WORKDIR ${HOME}

# EXPOSE ${CONTAINER_PORT}
