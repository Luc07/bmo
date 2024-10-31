import dotenv from 'dotenv';

const configEnv: any = {
    dev: '.env.dev',
    prod: '.env',
    test: '.env.test'
};

const environmentVariablesPath = configEnv[process.env.NODE_ENV ?? 'dev'];

dotenv.config({
    path: environmentVariablesPath,
});