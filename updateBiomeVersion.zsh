#!/bin/zsh

# Run biome --version and extract the version number
VERSION=$(biome --version | awk '{print $2}')

# Check if VERSION is not empty
if [[ -z "$VERSION" ]]; then
    echo "Error: Unable to determine Biome version."
    exit 1
fi

# Use sed to update biome.json
sed -i '' "s|\"\\\$schema\": \".*\/schema.json\"|\"\\\$schema\": \"https://biomejs.dev/schemas/$VERSION/schema.json\"|" biome.json

echo "biome.json updated to version $VERSION."
