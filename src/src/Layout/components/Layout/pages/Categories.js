import { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState(100);

  const categories = [
    { id: 'all', name: 'All Cakes' },
    { id: 'chocolate', name: 'Chocolate' },
    { id: 'fruit', name: 'Fruit' },
    { id: 'wedding', name: 'Wedding' },
    { id: 'birthday', name: 'Birthday' },
    { id: 'custom', name: 'Custom' }
  ];

  const cakes = [
    {
      id: 1,
      name: 'Dark Chocolate Delight',
      category: 'chocolate',
      price: 49.99,
      image: '/api/placeholder/300/200',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Fresh Fruit Paradise',
      category: 'fruit',
      price: 54.99,
      image: '/api/placeholder/300/200',
      rating: 4.5
    },
    {
      id: 3,
      name: 'Wedding Elegance',
      category: 'wedding',
      price: 89.99,
      image: '/api/placeholder/300/200',
      rating: 5.0
    },
    // Add more cakes as needed
  ];

  const filteredCakes = cakes.filter(cake => 
    (selectedCategory === 'all' || cake.category === selectedCategory) &&
    cake.price <= priceRange
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-pink-600 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Our Cakes</h1>
          <p className="text-lg opacity-90">Find the perfect cake for your special occasion</p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="sticky top-0 bg-white shadow-md z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full sm:w-96">
              <input
                type="text"
                placeholder="Search cakes..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
            </div>

            {/* Filter Toggle Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
            >
              <SlidersHorizontal size={20} />
              <span>Filters</span>
            </button>
          </div>

          {/* Expandable Filters */}
          {showFilters && (
            <div className="mt-4 p-4 border rounded-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full p-2 border rounded-md"
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price Range Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Max Price: ${priceRange}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={priceRange}
                    onChange={(e) => setPriceRange(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category.id
                  ? 'bg-pink-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Cakes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCakes.map(cake => (
            <div key={cake.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <img
                  src={cake.image}
                  alt={cake.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-sm">
                  ⭐️ {cake.rating}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{cake.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-pink-600 font-bold">${cake.price}</span>
                  <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;