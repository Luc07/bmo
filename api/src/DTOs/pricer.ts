import { z } from 'zod';

export const PricerRequest = z.object({
    host: z.string(),
    barCode: z.string()
})

export type PricerRequestDTO = z.infer<typeof PricerRequest>