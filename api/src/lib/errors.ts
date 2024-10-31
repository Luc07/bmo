import { AppError } from '@types';

export function logUnknownError(error: AppError) {
    console.log(`
        \nAn unkown error was cast:
        code: ${error.code}
        message: ${error.message}
        thrown by: ${error.thrownBy}
    `);
}

export function logNonCriticalError(error: AppError) {
    console.log(`
        Erro não crítico disparado:
        code: ${error.code}
        message: ${error.message}
        thrown by: ${error.thrownBy}
    `)
}

export function throwError(err: AppError): never {
    const { code, message, thrownBy }: AppError = err;
    throw {
        code,
        message,
        thrownBy,
    };
}