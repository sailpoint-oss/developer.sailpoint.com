.PHONY: build-JSONPathGoFunction

build-JSONPathGoFunction:
	GOOS=linux GOARCH=amd64 CGO_ENABLED=0 go build -tags lambda.norpc -o bootstrap
	zip -FS bootstrap.zip bootstrap
