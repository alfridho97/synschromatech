import React from 'react';

function Recommendations() {
  const recommendations = [
    { name: "Cetak Buku", price: "Rp. 15.000" },
    { name: "Cetak Stiker A3+", price: "Rp. 3.000" },
    { name: "Cetak Stiker A3+", price: "Rp. 3.000" },
    { name: "Cetak Stiker A3+", price: "Rp. 3.000" },
    { name: "Cetak Stiker A3+", price: "Rp. 3.000" },
    { name: "Cetak Stiker A3+", price: "Rp. 3.000" },
    { name: "Cetak Stiker A3+", price: "Rp. 3.000" },
    { name: "Cetak Stiker A3+", price: "Rp. 3.000" },
    { name: "Cetak Stiker A3+", price: "Rp. 3.000" },
    // ... more recommendations
  ];

  return (
    <div className="mt-4 bg-white p-4">
      <div className="border-t border-l border-r border-black border-b-4 border-brown-500 mb-4 rounded-sm">
        <h2 className="my-4 text-center text-yellow-700 font-bold">REKOMENDASI</h2>
      </div>
      <div className="mt-8 grid grid-cols-4 gap-4">
        {recommendations.map(item => (
          <div className="border p-2 rounded-md">
            <div className="bg-gray-200 h-32 mb-2"></div>
            <div className='ml-2 justify-start'>{item.name}</div>
            <div className="ml-2 mb-4 text-red-500">{item.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recommendations;
