'use client';
import { Product } from '@/types/product'; // ✅ Import Product từ alias
import Image from 'next/image';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="relative w-[280px] bg-white rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg group">
            {/* Ảnh sản phẩm */}
            <div className="w-full flex justify-center px-2">
                {product.image_url ? (
                    <Image
                        src={product.image_url}
                        alt={product.prd_name || 'Sản phẩm'}
                        width={180}
                        height={180}
                        className="w-[250px] h-[250px] object-cover rounded-md"
                    />
                ) : (
                    <div className="w-[180px] h-[180px] bg-gray-200 flex items-center justify-center rounded-md">
                        <span>Không có ảnh</span>
                    </div>
                )}
            </div>

            <p className="categories text-[15px] text-gray-500 text-center font-cairo font-normal leading-none mt-2">
                Vegetables
            </p>

            {/* Tên sản phẩm */}
            <h3 className="font-cairo text-gray-500 font-semibold text-[16px] text-center mt-3">
                {product.prd_name}
            </h3>

            {/* Giá sản phẩm */}
            <div className="text-center mb-2">
                <span className="text-[16px font-cairo font-bold text-black">
                    {product.price?.toLocaleString('vi-VN')}đ
                </span>
                {product.cost_price && (
                    <span className="text-gray-400 text-sm line-through ml-2">
                        {product.cost_price.toLocaleString('vi-VN')}đ
                    </span>
                )}
            </div>

            {/* Phần thông tin mở rộng (Ẩn mặc định, hiển thị khi hover) */}
            <div
                className="absolute bottom-0 left-0 w-full bg-white p-4 text-center rounded-b-lg 
                            opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                <p className="text-gray-500 text-sm">
                    All products are carefully selected to ensure food safety.
                </p>

                {/* Nhóm nút "Mua ngay" và "Giỏ hàng" */}
                <div className="mt-3 flex space-x-2">
                    <button className="flex-grow-[7] bg-[rgb(57,255,46)] text-white py-2 rounded-md hover:bg-green-700">
                        Mua ngay
                    </button>
                    <button className="flex-grow-[3] bg-gray-300 text-black py-2 rounded-md hover:bg-gray-400">
                        🛒
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
