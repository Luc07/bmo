import { Request, Response, NextFunction } from 'express';
import { AppError } from '@types';
import { logUnknownError } from '@lib/errors';

export default async function errorHandler(
    error: AppError,
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response> {
    try {
        if (error.code === 500) logUnknownError(error);
        return res.status(error.code).send(error.message);
    } catch (err) {
        console.error(
            'XXXXXXXXXXXXXXX- An unexpected error ocurred -XXXXXXXXXXXXXXXXXXX'
        );
        console.error(error);
        console.error('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
        return res
            .status(500)
            .send('Um erro desconhecido aconteceu no servidor motopharma.');
    }
}