import { useEffect, useState } from "react";

function FakeFetch() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData({ nama: "Produk Premium", harga: 50000 });
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div>
      <h2>Simulasi Fetch Data</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>Nama: {data.nama}</p>
          <p>Harga: {data.harga}</p>
        </div>
      )}
    </div>
  );
}

export default FakeFetch;
