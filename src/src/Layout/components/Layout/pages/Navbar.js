import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-pink-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Sweet Delights</Link>
        <div className="space-x-6">
          <Link to="/" className="hover:text-pink-200">Home</Link>
          <Link to="/categories" className="hover:text-pink-200">Categories</Link>
          <Link to="/about" className="hover:text-pink-200">About</Link>
          <Link to="/cart" className="hover:text-pink-200">Cart</Link>
        </div>
      </div>
    </nav>
  );
};