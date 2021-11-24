build-IngesterFunction:
	npm run build
	cp -r build/dist $(ARTIFACTS_DIR)
	cp package.json $(ARTIFACTS_DIR)
	cp package-lock.json $(ARTIFACTS_DIR)
	npm ci --prefix $(ARTIFACTS_DIR) --production