import React, { useState } from "react";
import Form from "./components/Form";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "สมชาย", gender: "ชาย", province: "กรุงเทพมหานคร" },
    { id: 2, name: "สมหญิง", gender: "หญิง", province: "เชียงใหม่" },
    { id: 3, name: "John", gender: "ชาย", province: "ภูเก็ต" },
    { id: 4, name: "Jane", gender: "หญิง", province: "ขอนแก่น" },
    { id: 5, name: "Test", gender: "ชาย", province: "ชลบุรี" }
  ]);

  const addUser = (user) => {
    setUsers([...users, { id: Date.now(), ...user }]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>ฟอร์มเพิ่มผู้ใช้</h1>
      <Form addUser={addUser} />
      <UserList users={users} deleteUser={deleteUser} />
    </div>
  );
}

export default App;
