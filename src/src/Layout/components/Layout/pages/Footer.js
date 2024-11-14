const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          <div>
            <h3 className="text-xl font-bold mb-4">Sweet Delights</h3>
            <p>Crafting delicious moments since 2020</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/categories">Categories</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/cart">Cart</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p>123 Baker Street</p>
            <p>Phone: (555) 123-4567</p>
            <p>Email: info@sweetdelights.com</p>
          </div>
        </div>
      </footer>
    );
  };
  