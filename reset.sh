#!/bin/sh

# Navigate to the project directory
cd ./

# Remove the existing SQLite database file
rm -f ./prisma/dev.db

# Generate the Prisma Client
npx prisma generate

# remove the existing migrations
rm -rf ./prisma/migrations


# Reset the database schema
npx prisma migrate reset --force 

# Create a new migration
npx prisma migrate dev --name init


# Seed the database with test data
node prisma/seed.js

echo "Prisma database reset and cleaned successfully."