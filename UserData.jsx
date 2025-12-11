import { useEffect, useState } from "react";

function UserData({ userId }) {
  const [user, setUser] = useState({ name: "", email: "" });

  useEffect(() => {
    // Simulasi fetch data
    setUser({ name: "User " + userId, email: "user" + userId + "@mail.com" });
  }, [userId]);

  return (
    <div>
      <h2>Data Pengguna</h2>
      <p>Nama: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserData;
