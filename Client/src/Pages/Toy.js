import React, { useState, useEffect, useContext } from 'react';
import ProductList from '../Components/ProductList';
import { PetContext } from '../Context/Context';

export default function Toy() {
  const { fetchDogFood } = useContext(PetContext);
  const [dogFood, setDogFood] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const products = await fetchDogFood();
      setDogFood(products);
    };

    fetchData();
  }, [fetchDogFood]);

  return (
    <>
      <section className="products d-flex flex-column align-items-center mb-5" style={{ paddingTop: '80px' }}>
        <h1 className="mt-5 text-black fw-bolder">
          <span>Dog</span> Food
        </h1>
    {dogFood ? <ProductList products={dogFood} /> : <h1>No Inventory</h1>}
       
      </section>
    </>
  );
}
