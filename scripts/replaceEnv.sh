#!/bin/bash

# Define the environment variables that will be used to replace the values
DB_URL=${DB_URL}
PROD_URL=${PROD_URL}
PROD_SECRET=${PROD_SECRET}

# Define the .env file path (modify if necessary)
ENV_FILE=".env"

# Check if the .env file exists
if [[ ! -f "$ENV_FILE" ]]; then
    echo ".env file not found!"
    exit 1
fi

# Replace DATABASE_URL
if grep -q "^DATABASE_URL=" "$ENV_FILE"; then
    sed -i.bak "s|^DATABASE_URL=.*|DATABASE_URL=$DB_URL|" "$ENV_FILE"
    echo "Replaced DATABASE_URL with $DB_URL"
else
    echo "DATABASE_URL=$DB_URL" >>"$ENV_FILE"
    echo "Added DATABASE_URL to .env"
fi

# Replace NEXTAUTH_URL
if grep -q "^NEXTAUTH_URL=" "$ENV_FILE"; then
    sed -i.bak "s|^NEXTAUTH_URL=.*|NEXTAUTH_URL=$PROD_URL|" "$ENV_FILE"
    echo "Replaced NEXTAUTH_URL with $PROD_URL"
else
    echo "NEXTAUTH_URL=$PROD_URL" >>"$ENV_FILE"
    echo "Added NEXTAUTH_URL to .env"
fi

# Replace NEXTAUTH_SECRET
if grep -q "^NEXTAUTH_SECRET=" "$ENV_FILE"; then
    sed -i.bak "s|^NEXTAUTH_SECRET=.*|NEXTAUTH_SECRET=$PROD_SECRET|" "$ENV_FILE"
    echo "Replaced NEXTAUTH_SECRET with $PROD_SECRET"
else
    echo "NEXTAUTH_SECRET=$PROD_SECRET" >>"$ENV_FILE"
    echo "Added NEXTAUTH_SECRET to .env"
fi

# Optional: Remove backup created by sed (on macOS, .bak file is created by default)
rm -f "$ENV_FILE.bak"

echo ".env file updated successfully!"
