KERNEL := $$(uname | tr '[:upper:]' '[:lower:]')

lint:
	npm run lint
install:
	npm install
watch:
	npm run watch
run-dev:
	heroku local
start:
	npm start
deploy-prod:
	git push heroku master
logs:
	heroku logs --tail