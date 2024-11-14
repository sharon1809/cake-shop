import { useState } from 'react';
import { Heart, ShoppingCart, Star } from 'lucide-react';

const CakeDetail = () => {
  const [selectedSize, setSelectedSize] = useState('medium');
  const [quantity, setQuantity] = useState(1);
  
  const cake = {
    id: 1,
    name: 'Dark Chocolate Delight',
    description: 'A rich, moist chocolate cake layered with dark chocolate ganache and decorated with chocolate shavings.',
    price: {
      small: 39.99,
      medium: 49.99,
      large: 59.99
    },
    images: [
      '/api/placeholder/600/400',
      '/api/placeholder/600/400',
      '/api/placeholder/600/400'
    ],
    ingredients: [
      'Dark Chocolate',
      'Fresh Cream',
      'Belgian Cocoa',
      'Free-range Eggs',
      'Organic Flour'
    ],
    rating: 4.8,
    reviews: 124
  };

  const [mainImage, setMainImage] = useState(cake.images[0]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Product Section */}
        <div className="bg-white rounded-xl shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4 sm:p-8">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative">
                <img
                  src={mainImage}
                  alt={cake.name}
                  className="w-full rounded-lg"
                />
                <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                  <Heart className="text-gray-600" size={24} />
                </button>
              </div>
              <div className="flex gap-4 overflow-x-auto pb-2">
                {cake.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setMainImage(img)}
                    className={`flex-shrink-0 ${
                      mainImage === img ? 'ring-2 ring-pink-500' : ''
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${cake.name} ${index + 1}`}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {cake.name}
                </h1>
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={i < Math.floor(cake.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600">
                    ({cake.reviews} reviews)
                  </span>
                </div>
              </div>

              <p className="text-gray-600">{cake.description}</p>

              {/* Size Selection */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Select Size</h3>
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(cake.price).map(([size, price]) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`p-3 rounded-lg border text-center capitalize ${
                        selectedSize === size
                          ? 'border-pink-500 bg-pink-50 text-pink-700'
                          : 'border-gray-200 hover:border-pink-200'
                      }`}
                    >
                      <div className="font-medium">{size}</div>
                      <div className="text-sm text-gray-600">${price}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Quantity</h3>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="text-xl font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 flex items-center justify-center gap-2">
                  <ShoppingCart size={20} />
                  Add to Cart - ${(cake.price[selectedSize] * quantity).toFixed(2)}
                </button>
              </div>

              {/* Ingredients */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Ingredients</h3>
                <div className="flex flex-wrap gap-2">
                  {cake.ingredients.map((ingredient, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CakeDetail;