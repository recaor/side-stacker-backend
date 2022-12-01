import { ConnectionOptions } from 'typeorm'
import * as PostgresConnectionStringParser from 'pg-connection-string'
import * as dotenv from 'dotenv'

dotenv.config()
const connectionOptions = PostgresConnectionStringParser.parse(
    process.env.DATABASE_URL
)

// Check typeORM documentation for more information.
const config: ConnectionOptions = {
    type: 'postgres',
    host: connectionOptions.host,
    port: Number(connectionOptions.port),
    username: connectionOptions.user,
    password: connectionOptions.password,
    database: connectionOptions.database,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],

    // We are using migrations, synchronize should be set to false.
    synchronize: true,
}

export = config
