import { Http } from '@types';

/* 
    Objeto padrão de erro. Deve ser preenchido sempre que uma função queira disparar erro
*/
export interface AppError {
    code: Http;
    message?: string;
    thrownBy: string;
}