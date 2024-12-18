import { categories } from '../../data/categories';
import { Link } from 'react-router-dom';

export default function CategoryMenu() {
  return (
    <div className="absolute z-50 w-64 bg-white shadow-lg rounded-b-lg">
      {categories.map((category) => (
        <Link
          key={category.id}
          to={`/category/${category.slug}`}
          className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
}