import { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [featuredCakes] = useState([
    {
      id: 1,
      name: 'Chocolate Dream',
      image: '/api/placeholder/300/200',
      price: 49.99,
      description: 'Rich chocolate layers with ganache'
    },
    {
      id: 2,
      name: 'Strawberry Delight',
      image: '/api/placeholder/300/200',
      price: 44.99,
      description: 'Fresh strawberries with cream'
    },
    {
      id: 3,
      name: 'Vanilla Paradise',
      image: '/api/placeholder/300/200',
      price: 39.99,
      description: 'Classic vanilla with buttercream'
    }
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Sweet Delights
        </h1>
        <p className="text-xl text-gray-600">
          Crafting unforgettable moments with every slice
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          Featured Cakes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCakes.map((cake) => (
            <div key={cake.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={cake.image}
                alt={cake.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{cake.name}</h3>
                <p className="text-gray-600 mb-4">{cake.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-pink-600">
                    ${cake.price}
                  </span>
                  <Link
                    to={`/cake/${cake.id}`}
                    className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Why Choose Sweet Delights?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Fresh Ingredients</h3>
            <p className="text-gray-600">
              We use only the finest, freshest ingredients in all our cakes
            </p>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Custom Designs</h3>
            <p className="text-gray-600">
              Every cake can be customized to your specific needs
            </p>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">
              Same-day delivery available for local orders
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;