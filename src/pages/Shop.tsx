import React, { useEffect } from "react";
import productsData from "../data/products.json";
import Product from "../components/Product/Product";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const navigate = useNavigate();
  const storedUserData = localStorage.getItem('userData');
  const userData = storedUserData ? JSON.parse(storedUserData) : null;

  useEffect(() => {
    if (!userData) {
      navigate('/');
    }
  }, [userData, navigate]);
  
  return (
    <div className="Shop container mx-auto py-11">
      <h3 className="font-bold text-xl mb-7">
        Svi proizvodi <span className="text-[15px] text-[#ddd]">{productsData.length} proizvoda</span>
      </h3>
      <div className="grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productsData.map((product) => (
          <div key={product.id} className="mx-auto">
            <Product product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
