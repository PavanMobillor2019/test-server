FROM node:12-alpine
RUN apk add --no-cache python3 g++ make
WORKDIR /test-server
COPY . .
RUN npm install
CMD ["npm","start"]