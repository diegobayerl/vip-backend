module.exports = {
    //"type":"sqlite",
    //"database": "./dist/database/database.sqlite",
    "type":"postgres",
    "url": process.env.DATABASE_URL,
    
    "migrations": [
        "./dist/database/migrations/*.js"
    ],
    "entities": [
        "./dist/models/*.js"
    ],
    "cli": {
        "migrationsDir": "./dist/database/migrations",
        "entitiesDir": "./dist/models"
    }
}