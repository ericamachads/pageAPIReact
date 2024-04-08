// ProductsList.jsx
import React from 'react';
import Product from './Product';

const ProductsList = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          'https://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick',
        );
        const data = await response.json();
        setProducts(data.slice(0, 12)); // Pega os primeiros 12 produtos

        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <div className="products-container">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
