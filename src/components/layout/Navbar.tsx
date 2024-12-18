import { ShoppingCart, User, LogOut, Search, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { auth } from '../../lib/firebase';
import CategoryMenu from './CategoryMenu';
import { useState } from 'react';

export default function Navbar() {
  const { user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-gray-900">
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex items-center h-16 justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-white">
              ShopHub
            </Link>
          </div>

          <div className="flex-1 max-w-3xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 rounded-lg border-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <Link to="/cart" className="text-white hover:text-gray-300 flex items-center">
              <ShoppingCart className="h-6 w-6" />
              <span className="ml-2">Cart</span>
            </Link>

            {user ? (
              <div className="flex items-center space-x-4">
                <Link to="/profile" className="text-white hover:text-gray-300 flex items-center">
                  <User className="h-6 w-6" />
                  <span className="ml-2">Profile</span>
                </Link>
                <button
                  onClick={() => auth.signOut()}
                  className="text-white hover:text-gray-300"
                >
                  <LogOut className="h-6 w-6" />
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
      
      <div className="bg-gray-800 py-2">
        <div className="max-w-7xl mx-auto px-4">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white flex items-center hover:text-gray-300"
          >
            <Menu className="h-5 w-5 mr-2" />
            All Categories
          </button>
        </div>
      </div>
      
      {isMenuOpen && <CategoryMenu />}
    </div>
  );
}