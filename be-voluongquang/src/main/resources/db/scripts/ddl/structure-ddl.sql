CREATE TABLE product (
    prd_id VARCHAR(20) NOT NULL PRIMARY KEY,
    prd_name VARCHAR(255) NOT NULL,
    gr_prd_id VARCHAR(20) NULL,
    category_id VARCHAR(20) NULL,
    brand_id VARCHAR(20) NULL,
    price NUMERIC(10, 2) NULL,
    cost_price NUMERIC(10, 2) NULL,
    wholesale_price NUMERIC(10, 2) NULL,
    stock_quantity INT NULL,
    unit VARCHAR(50) NULL,
    image_url TEXT NULL,
    weight VARCHAR(50) NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE brand (
	brand_id varchar(20) NOT NULL PRIMARY KEY,
	brand_name varchar(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE category (
	category_id varchar(20) NOT NULL PRIMARY KEY,
	category_name varchar(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE product_group (
	gr_prd_id varchar(20) NOT NULL PRIMARY KEY,
	gr_prd_name varchar(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE users (
    user_id VARCHAR(20) PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    phone VARCHAR(20) NULL,
    address TEXT NULL,
    role VARCHAR(50) CHECK (role IN ('customer', 'admin')) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE cart (
    cart_id SERIAL PRIMARY KEY,
    user_id VARCHAR(20) NOT NULL UNIQUE,  -- Mỗi user chỉ có một giỏ hàng
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE cart_items (
    cart_id INT NOT NULL,
    prd_id VARCHAR(20) NOT NULL,
    quantity INT NOT NULL DEFAULT 1,
    PRIMARY KEY (cart_id, prd_id),  -- Đảm bảo không có sản phẩm trùng trong giỏ hàng
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE product 
ADD CONSTRAINT fk_brand FOREIGN KEY (brand_id) 
REFERENCES public.brand(brand_id) ON DELETE SET NULL;

ALTER TABLE product 
ADD CONSTRAINT fk_category FOREIGN KEY (category_id) 
REFERENCES public.category(category_id) ON DELETE CASCADE;

ALTER TABLE product 
ADD CONSTRAINT fk_product_group FOREIGN KEY (gr_prd_id) 
REFERENCES public.product_group(gr_prd_id) ON DELETE SET NULL;

ALTER TABLE cart
ADD CONSTRAINT fk_cart_user FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE;

ALTER TABLE cart_items
ADD CONSTRAINT fk_cart_items_cart FOREIGN KEY (cart_id) REFERENCES cart(cart_id) ON DELETE CASCADE;

ALTER TABLE cart_items
ADD CONSTRAINT fk_cart_items_product FOREIGN KEY (prd_id) REFERENCES product(prd_id) ON DELETE CASCADE;
