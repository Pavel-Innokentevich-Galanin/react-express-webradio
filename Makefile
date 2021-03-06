gpi_wi:
	make gpi_wc
	cd gpi_ba & npm i
	cd gpi_ds & npm i
	cd gpi_fr & npm i
	cd gpi_gp & npm i

gpi_wc:
	cd gpi_ba & copy .env.txt .env
	cd gpi_ds & copy .env.txt .env
	cd gpi_ds & copy .env.production.local.txt .env.production.local
	cd gpi_fr & copy .env.txt .env

gpi_wba:
	cd gpi_ba & npm run start

gpi_wds:
	cd gpi_ds & npm run start

gpi_wfr:
	cd gpi_fr & npm run start

gpi_wgp:
	cd gpi_ds & npm run build
	cd gpi_fr & npm run build
	cd gpi_gp & npm run start
