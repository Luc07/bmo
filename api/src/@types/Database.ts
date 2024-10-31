export interface PgDbConfig {
    host: string;
}

export interface QueryStoreDbConfigData {
    query: QueryString;
    values: QueryValues;
    connectionConfig: PgDbConfig;
}

export type QueryString = string;
export type QueryValues = (string | number)[];