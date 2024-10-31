import { PricerRequestDTO } from '@/DTOs/pricer';
import { getPriceByBarCode } from '@services/pricer';
import { Http } from '@types';
import { Request, Response } from 'express';

export async function getPrice(req: Request, res: Response): Promise<Response> {
    const body: PricerRequestDTO = req.body; 
    const data = await getPriceByBarCode(body);
    return res.status(Http.OK).send(data);
}