.PHONY: clean build deploy dev

clean:
	rm -rf dist
	npm run clean

build:
	mkdir -p dist
	npm run build

deploy:
		sudo yum install -y dist/viewzr-api*.rpm
		sudo systemctl daemon-reload
		sudo systemctl restart viewzr-api

dev:
	npm run dev
