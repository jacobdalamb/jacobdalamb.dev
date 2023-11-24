#!/bin/zsh

# Define the paths for .gitignore and biome.json
gitignorePath="${PWD}/.gitignore"
biomeJsonPath="${PWD}/biome.json"

# Check if .gitignore exists
if [[ ! -f "$gitignorePath" ]]; then
    echo ".gitignore not found"
    exit 1
fi

# Read .gitignore and convert it to an array of patterns
ignorePatterns=()
while read line; do
    # Skip empty lines and comments
    [[ -z "$line" || "$line" == \#* ]] && continue
    ignorePatterns+=("$line")
done < "$gitignorePath"

# Add additional files to ignore
ignorePatterns+=("pnpm-lock.yaml" "bun.lockb")

# Read biome.json
if [[ ! -f "$biomeJsonPath" ]]; then
    echo "biome.json not found"
    exit 1
fi

# Convert the ignorePatterns array to a JSON array
jsonArray=$(printf '%s\n' "${ignorePatterns[@]}" | jq -R . | jq -s .)

# Read biome.json
biomeJson=$(<"$biomeJsonPath")

# Use jq to update the ignore array
updatedBiomeJson=$(echo "$biomeJson" | jq --argjson patterns "$jsonArray" '.files.ignore = $patterns')

# Write the updated content back to biome.json
echo "$updatedBiomeJson" > "$biomeJsonPath"

echo "biome.json updated successfully with .gitignore patterns and additional files."
