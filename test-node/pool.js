const pg = require('pg');

var pool;

module.exports = {
    getPool: function () {
        if (pool) {
            return pool;
        }
        
        pool = new pg.Pool({
            user: '{user}',
            host: '{host}',
            database: '{database}',
            password: '{password}',
            port: 5432,
            ssl: {
                rejectUnauthorized: false
            },
            max: 1000
        });

        return pool;
    }
};