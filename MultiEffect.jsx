import { useEffect, useState } from "react";

function MultiEffect() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  useEffect(() => {
    console.log("Name berubah menjadi:", name);
  }, [name]);

  return (
    <div>
      <h2>Multiple useEffect</h2>

      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tambah Count</button>

      <p>Nama: {name}</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Ketik nama"
      />
    </div>
  );
}

export default MultiEffect;
