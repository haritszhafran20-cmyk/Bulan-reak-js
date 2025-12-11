import { useEffect, useState } from "react";

function SimpleEffect() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("Komponen dirender atau di-update");
  });

  return (
    <div>
      <h2>Simple Effect</h2>
      <p>Value: {value}</p>
      <button onClick={() => setValue(value + 1)}>Tambah</button>
    </div>
  );
}

export default SimpleEffect;
