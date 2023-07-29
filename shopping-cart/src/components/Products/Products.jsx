import React, { useState, useEffect} from 'react';

import './Products.css';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../ProductCard/ProductCard';
import Loading from '../Loading/Loading';

function Products() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts('iphone').then((reponse) => {
      setProducts(reponse);
    });
  }, []);
  
  return (
    (Loading && <Loading /> ) || (
      <section className="products container"> 
        {products.map((product) => <ProductCard key={product.id} data={product}/>)}
      </section>
    )

  );
}

export default Products;
