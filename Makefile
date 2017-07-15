.PHONY: clean build deploy dev

clean:
	rm -rf dist
	$(MAKE) -C packge clean

build:
	mkdir -p dist
	rm -rf api/node_modules/*
	npm install
	npm run prune
	npm test
	npm run build
	$(MAKE) -c package build
	cp package/build/dist/* dist/

deploy:
		sudo yum install -y dist/viewzr-api*.rpm
		sudo systemctl daemon-reload
		sudo systemctl restart viewzr-api

dev:
	npm run dev
