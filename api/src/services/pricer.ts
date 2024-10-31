import { PricerRequestDTO } from "@/DTOs/pricer";
import { queryStoreDB } from "@database/postgres";
import { ProductInfo } from "@types";

export async function getPriceByBarCode({ barCode, host }:PricerRequestDTO ): Promise<ProductInfo> {
    const result = await queryStoreDB<ProductInfo>({
        connectionConfig: { host },
        query: `SELECT cd_barra AS "barCode", ds_prod AS description, preco AS price FROM public.v_busca_preco WHERE cd_barra = $1;`,
        values: [ barCode ]
    })

    return result[0]
}