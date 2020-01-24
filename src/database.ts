import { createPool, Pool }  from 'mysql2/promise'


export async function connect(): Promise<Pool> {

    const connection = await createPool({
        host: '172.17.0.2',
        port: 3306,
        user: 'root',
        password: 'password',
        database: 'node_mysql_ts',
        connectionLimit: 10
    });
    return connection;
}