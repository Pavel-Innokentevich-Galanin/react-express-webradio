gpi_wi:
	make gpi_wc
	cd gpi_ba & npm i
	cd gpi_fr & npm i

gpi_wc:
	cd gpi_ba & copy .env.txt .env
	cd gpi_fr & copy .env.txt .env

gpi_wba:
	cd gpi_ba & npm run start

gpi_wfr:
	cd gpi_fr & npm run start
