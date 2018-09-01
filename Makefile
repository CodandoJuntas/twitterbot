KERNEL := $$(uname | tr '[:upper:]' '[:lower:]')

lint:
	npm run lint
test:
	npm test
install:
	npm install
watch:
	npm run watch