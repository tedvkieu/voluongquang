export interface Product {
    prd_id: string;
    prd_name: string;
    gr_prd_id?: string | null;
    category_id?: string | null;
    brand_id?: string | null;
    price?: number | null;
    cost_price?: number | null;
    wholesale_price?: number | null;
    stock_quantity?: number | null;
    unit?: string | null;
    image_url?: string | null;
    weight?: string | null;
    created_at?: Date;
    updated_at?: Date;
}
