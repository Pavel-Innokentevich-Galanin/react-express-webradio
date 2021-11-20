gpi-install:
	make gpi-copy-env
	cd src/backend; npm i
	cd src/frontend; npm i

gpi-copy-env:
	cd src/backend; cp copy.env .env
	cd src/frontend; cp copy.env .env

gpi-run-backend:
	cd src/backend; npm run start

gpi-run-frontend:
	cd src/frontend; npm run start
