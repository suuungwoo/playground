SOURCES = src
PORT = 1996

lint:
	./node_modules/.bin/eslint scripts $(SOURCES) *.js --format=codeframe

deploy:
	node webpack/config/deploy.js

start:
	NODE_PATH=$(shell which node) \
	NODE_ENV=development \
	STAGE_ENV=local \
	BABEL_ENV=local \
	HTTPS=false \
	yarn run webpack-dev-server --config webpack/development.js --port $(PORT) --color --progress

develop:
	node ./webpack/config/deploy.js

	NODE_PATH=$(shell which node) \
	NODE_ENV=development \
	STAGE_ENV=develop \
	BABEL_ENV=development \
	HTTPS=true \
	yarn run webpack --config webpack/development.js

release:
	node ./webpack/config/deploy.js

	NODE_PATH=$(shell which node) \
	NODE_ENV=production \
	STAGE_ENV=release \
	BABEL_ENV=production \
	HTTPS=true \
	yarn run webpack --config webpack/production.js

master:
	node ./webpack/config/deploy.js

	NODE_PATH=$(shell which node) \
	NODE_ENV=production \
	STAGE_ENV=master \
	BABEL_ENV=production \
	HTTPS=true \
	yarn run webpack --config webpack/production.js
