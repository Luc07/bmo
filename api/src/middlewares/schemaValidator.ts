import { Request, Response, NextFunction, RequestHandler } from 'express';
import { throwError } from '@lib/errors';
import { Http } from '@types';

/* 
    Devolve um middleware de checagem de body, que por sua vez
    Checa se o body veio no formato exigido pela aplicação e altera o body para receber o body parseado
*/
export function schemaValidator<schemaT>(schema: any): RequestHandler {
    return async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> => {
        try {
            const parsedBody: schemaT = schema.parse(req.body);
            req.body = parsedBody;
            next();
        } catch (error) {
            console.log(error);
            throwError({
                code: Http.BAD_REQUEST,
                thrownBy: __filename,
                message:
                    'zod Parsing Error: O body da requisição veio fora do padrão exigido',
            });
        }
    };
}