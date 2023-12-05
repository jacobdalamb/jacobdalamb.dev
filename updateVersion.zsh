#!/usr/bin/env zsh

# Set the date format to YYYY.MM.DD
current_date=$(date +"%Y.%m.%d")

# Path to your package.json file
package_json_path="./package.json"

# Extract the current version from package.json
current_version=$(jq -r '.version' $package_json_path)

# Compare current date with current version
if [ "$current_version" != "$current_date" ]; then
    # Update the version in package.json if the dates are different
    jq --arg v "$current_date" '.version = $v' $package_json_path > temp.json && mv temp.json $package_json_path
    echo "Version updated to $current_date."
else
    echo "Version is already up to date."
fi
