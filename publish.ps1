docker build -t publish-bufferbloat-image .
docker run -d -e NPM_TOKEN=$env:NPM_PUBLISH_TOKEN --name publish-bufferbloat-container publish-bufferbloat-image
docker logs -f publish-bufferbloat-container
docker wait publish-bufferbloat-container > $null 2>&1

pause