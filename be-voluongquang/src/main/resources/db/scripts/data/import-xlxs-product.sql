COPY product(prd_id, prd_name, gr_prd_id, category_id, brand_id, price, cost_price, wholesale_price, stock_quantity, unit, image_url, weight)
FROM 'D:/Project/My-Project/voluongquang/be-voluongquang/src/main/resources/db/scripts/data/product.csv'
DELIMITER ',' CSV HEADER ENCODING 'UTF8';

