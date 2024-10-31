import { PricerRequest, PricerRequestDTO } from "@/DTOs/pricer";
import { getPrice } from "@controllers/pricer";
import { schemaValidator } from "@middlewares/schemaValidator";
import { Router } from "express";

const mainRouter = Router();

mainRouter.post(
    '/',
    schemaValidator<PricerRequestDTO>(PricerRequest),
    getPrice
)

export default mainRouter;