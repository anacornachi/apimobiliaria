FROM node:lts-alpine
 
WORKDIR /app
 
COPY package*.json ./
 
RUN npm install
 
COPY . .
 
EXPOSE 3001

RUN npm uninstall bcrypt

RUN npm install bcrypt
 
CMD ["npm", "run", "dev"]