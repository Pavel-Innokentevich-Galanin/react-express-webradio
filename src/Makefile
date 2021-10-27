install:
	cd mysql; cp copy.env .env
	cd backend; cp copy.env .env
	cd frontend; cp copy.env .env
	cd backend; npm i
	cd frontend; npm i

run-mysql:
	cd mysql; docker-compose up

run-backend:
	cd backend; npm run start

run-frontend:
	cd frontend; npm run start
