import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10" />
      <img
        src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da"
        alt="Shopping Banner"
        className="w-full h-[500px] object-cover"
      />
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg">
            <h1 className="text-4xl font-bold text-white mb-4">
              Discover Amazing Deals
            </h1>
            <p className="text-lg text-gray-200 mb-6">
              Shop the latest trends with up to 50% off on selected items
            </p>
            <Link
              to="/deals"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}