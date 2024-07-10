import React from 'react';

function PopularProducts() {
  return (
    <div className="bg-white p-4">
      <h2 className="my-4 text-center text-yellow-700 font-bold">POPULAR PRODUCTS</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-200 h-40 rounded-md"></div>
        <div className="bg-gray-200 h-40 rounded-md"></div>
        <div className="bg-gray-200 h-40 rounded-md"></div>
      </div>
    </div>
  );
}

export default PopularProducts;
