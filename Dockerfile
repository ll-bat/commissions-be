FROM node:19-alpine

RUN mkdir -p /home/app/node_modules && chown -R node:node /home/app

WORKDIR /home/app

COPY package.json package-lock.json entrypoint.sh ./

# Change ownership and permissions of package.json and package-lock.json
RUN chown node:node package*.json && chmod 644 package*.json

USER node

RUN npm install

COPY --chown=node:node . .
