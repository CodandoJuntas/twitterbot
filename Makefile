KERNEL := $$(uname | tr '[:upper:]' '[:lower:]')

lint:
	npm run lint
test:
	npm test
integration-tests:
	npm run integration-tests
install:
	npm install
watch:
	npm run watch