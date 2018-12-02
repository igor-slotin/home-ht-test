The project has a form with few steps for fill in and result page.

For run project execute "npm i && npm run build && npm start"
or you can use Docker

docker build -t home-ht-test .
docker run -p 3000:3000 home-ht-test

or Docker compose

docker-compose up

Server will run on localhost:3000