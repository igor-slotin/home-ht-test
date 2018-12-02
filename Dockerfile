FROM node:10.14.0-alpine

RUN mkdir -p /mnt/Code
COPY ./ /mnt/Code

WORKDIR /mnt/Code
RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
