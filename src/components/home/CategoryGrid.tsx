import { categories } from '../../data/categories';
import { Link } from 'react-router-dom';

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.slice(0, 4).map((category) => (
        <Link
          key={category.id}
          to={`/category/${category.slug}`}
          className="relative group overflow-hidden rounded-lg"
        >
          <div className="aspect-w-16 aspect-h-9">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-200"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h3 className="text-xl font-semibold text-white">{category.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}