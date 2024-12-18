import { ShoppingBag } from 'lucide-react';
import { Product } from '../../types/product';
import { formatPrice } from '../../utils/format';

interface ProductCardProps {
  product: Product;
  onAddToCart: (productId: number) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <div className="relative h-64">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {product.discount > 0 && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md">
            {product.discount}% OFF
          </div>
        )}
      </div>
      <div className="p-4">
        <span className="text-sm text-gray-500">{product.category}</span>
        <h3 className="text-lg font-semibold text-gray-900 mt-1">{product.name}</h3>
        <div className="mt-2 flex items-center">
          <span className="text-xl font-bold text-gray-900">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="ml-2 text-sm text-gray-500 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
        <div className="mt-4">
          <button
            onClick={() => onAddToCart(product.id)}
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center justify-center gap-2"
          >
            <ShoppingBag className="h-5 w-5" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}