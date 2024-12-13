#!/bin/bash

# Get the NPM token from the environment variable
export NPM_TOKEN=$NPM_TOKEN

# Configure NPM with the token
echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > .npmrc
cat .npmrc

# Publish the package to NPM
echo "Publishing package to NPM..."
npm publish

# Check if the publish was successful
if [ $? -eq 0 ]; then
    echo "Package published successfully!"
else
    echo "Failed to publish package."
    exit 1
fi