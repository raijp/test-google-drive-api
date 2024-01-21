FROM node:latest

ARG WORKSPACE=/test

RUN apt update
RUN apt install vim curl nmap net-tools -y
WORKDIR $WORKSPACE
RUN npm install googleapis google-auth-library

