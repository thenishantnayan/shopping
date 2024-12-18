import { ShoppingCart, User, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { auth } from '../lib/firebase';

export default function Navbar() {
  const { user } = useAuth();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-gray-800">
            ShopHub
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="text-gray-600 hover:text-gray-800">
              <ShoppingCart className="h-6 w-6" />
            </Link>
            
            {user ? (
              <div className="flex items-center space-x-4">
                <Link to="/profile" className="text-gray-600 hover:text-gray-800">
                  <User className="h-6 w-6" />
                </Link>
                <button
                  onClick={() => auth.signOut()}
                  className="text-gray-600 hover:text-gray-800"
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
      </div>
    </nav>
  );
}