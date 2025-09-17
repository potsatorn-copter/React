import React, { useEffect, useState } from "react";
import Form from "./components/Form.jsx";
import UserList from "./components/UserList.jsx";
import "./App.css";


function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "สมชาย", gender: "ชาย", province: "กรุงเทพมหานคร" },
    { id: 2, name: "สมหญิง", gender: "หญิง", province: "เชียงใหม่" },
    { id: 3, name: "John", gender: "ชาย", province: "ภูเก็ต" },
    { id: 4, name: "Jane", gender: "หญิง", province: "ขอนแก่น" },
    { id: 5, name: "Test", gender: "ชาย", province: "ชลบุรี" }
  ]);

  const [theme, setTheme] = useState("light");

  // โหลด theme จาก localStorage ตอน mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.className = savedTheme;
    }
  }, []);

  // ทุกครั้งที่ theme เปลี่ยน → อัปเดต body + localStorage
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const addUser = (user) => {
    setUsers([...users, { id: Date.now(), ...user }]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="app-container">
      <h1>ฟอร์มเพิ่มผู้ใช้</h1>
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === "light" ? "🌙 Dark Mode" : "🌞 Light Mode"}
      </button>
      <Form addUser={addUser} />
      <UserList users={users} deleteUser={deleteUser} />
    </div>
  );
}

export default App;
