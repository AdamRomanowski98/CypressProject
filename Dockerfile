FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "e2e-allure", "&&", "npm", "run", "allure-report"]