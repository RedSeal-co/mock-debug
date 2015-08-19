.PHONY: test compile

.DEFAULT: test

test: compile
	node_modules/.bin/mocha --reporter=spec --ui tdd test/mock-debug-test.js

compile:
	node_modules/.bin/tsc
