import { Product } from '@/types/product'; // ✅ Alias
import ProductCard from './ProductCard';

interface ProductListProps {
    products: Product[];
}
const ProductList: React.FC<ProductListProps> = ({ products }) => {
    return (
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center mt-4">
            {products.map((product, index) => (
                <ProductCard key={index} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
