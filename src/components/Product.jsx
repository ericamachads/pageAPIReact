// Product.jsx
import React from 'react';

const Product = ({ product }) => {
  const [descriptionIsOpen, setDescription] = React.useState(false);
  const handleDescription = () => setDescription(!descriptionIsOpen);
  return (
    <div className="product">
      <img src={product.image_link} alt={product.name} />
      <h3>{product.name}</h3>
      <button className="button secondary" onClick={handleDescription}>
        Description
      </button>
      {descriptionIsOpen && <p>{product.description}</p>}
    </div>
  );
};

export default Product;
