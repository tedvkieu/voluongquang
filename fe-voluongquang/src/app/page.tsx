'use client';
import { useEffect, useState } from 'react';
import ProductList from './components/Product/ProductList';

const products = [
    {
        prd_id: '1',
        prd_name: 'Rau Cải Xanh',
        price: 250000,
        cost_price: 244000,
        unit: '1kg',
        image_url: 'http://localhost:8080/images/cool_prd/cacom.jpg',
    },
    {
        prd_id: '2',
        prd_name: 'Cà Rốt Hữu Cơ',
        price: 15000,
        cost_price: 14000,
        unit: '500g',
        image_url: 'http://localhost:8080/images/cool_prd/cbo.jpg',
    },
    {
        prd_id: '3',
        prd_name: 'Hành Tây Đỏ',
        price: 44000, // Sản phẩm chưa có giá
        cost_price: 42000,
        unit: '1kg',
        image_url: 'http://localhost:8080/images/cool_prd/chalua.jpg',
    },
    {
        prd_id: '3',
        prd_name: 'Hành Tây Đỏ',
        price: 1365400, // Sản phẩm chưa có giá
        cost_price: 1305400,
        unit: '1kg',
        image_url: 'http://localhost:8080/images/cool_prd/hvi.jpg',
    },
    {
        prd_id: '3',
        prd_name: 'Hành Tây Đỏ',
        price: 175000, // Sản phẩm chưa có giá
        cost_price: 154000,
        unit: '1kg',
        image_url: 'http://localhost:8080/images/cool_prd/hvi.jpg',
    },
    {
        prd_id: '3',
        prd_name: 'Hành Tây Đỏ',
        price: 85000, // Sản phẩm chưa có giá
        cost_price: 84000,
        unit: '1kg',
        image_url: 'http://localhost:8080/images/cool_prd/chalua.jpg',
    },
];

export default function Home() {
    const images = ['/home/green-slide-01.jpg', '/home/green-slide-02.jpg'];
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000); // Chuyển ảnh mỗi 5s

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            {/* Phần banner */}
            <div
                className="relative h-[500px] bg-cover bg-center flex items-center justify-center text-white"
                style={{ backgroundImage: `url(${images[currentImage]})` }}>
                <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center max-w-lg">
                    <i className="text-lg text-gray-300 block">Pomegranate</i>
                    <h3 className="text-3xl font-bold mt-2">
                        Vegetables 100% Organic
                    </h3>
                    <p className="mt-2 text-gray-300">
                        A blend of freshly squeezed green apple & fruits
                    </p>

                    {/* Nút bấm */}
                    <div className="mt-4 space-x-4 left">
                        <a
                            href="#main-products"
                            className="bg-customGreen font-cairo text-white px-4 py-2 rounded-md font-bold hover:bg-green-700">
                            Mua Ngay
                        </a>
                        <a
                            href="#"
                            className="border border-customGreen font-cairo px-4 py-2 rounded-lg text-customGreen hover:bg-gray-600 hover:text-white hover:border-gray-600">
                            Hôm nay ăn gì?
                        </a>
                    </div>
                </div>
            </div>

            {/* Danh sách sản phẩm - ĐẶT NGOÀI BANNER */}
            <section id="main-products" className="py-10 mt-2">
                <h2 className="text-2xl font-bold text-center mb-6">
                    Sản Phẩm Nổi Bật
                </h2>

                {/* Danh sách sản phẩm */}
                <div className="flex justify-center">
                    <ProductList products={products} />
                </div>
            </section>
        </div>
    );
}
