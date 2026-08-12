import 'dotenv/config'
import { Pool }  from 'pg';

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
    console.log('Connected to Database');
});

pool.on('error', (err) => {
    console.error('Unexpected DB Error ', err);
    process.exit(1);
});

export default pool;
