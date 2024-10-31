import '@/setup';
import pg from 'pg';
import { QueryStoreDbConfigData } from '@types';

const { Pool } = pg;
console.log("process default db name: ", process.env.BRANCHES_DEFAULT_DATABASE)
function buildPgConnectionUrl({ host }) {
    return `postgresql://${process.env.BRANCHES_DEFAULT_USER}:${process.env.BRANCHES_DEFAULT_PASSWORD}@${host}:${process.env.BRANCHES_DEFAULT_PORT}/${process.env.BRANCHES_DEFAULT_DATABASE}`;
}

function buildPool(connectionString: string) {
    const config = {
        connectionString,
        ssl: false,
    };
    return new Pool(config);
}

export async function queryStoreDB<T>({
    query,
    values,
    connectionConfig,
}: QueryStoreDbConfigData): Promise<T[]> {
    const connectionUrl = buildPgConnectionUrl(connectionConfig);
    const pool = buildPool(connectionUrl);
    try {
        const result = await pool.query(query, values);
        return result.rows;
    } finally {
        await pool.end();
    }
}