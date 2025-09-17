import React from "react";

function UserList({ users, deleteUser }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2>รายชื่อผู้ใช้</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.gender} - {user.province}
            <button onClick={() => deleteUser(user.id)} style={{ marginLeft: "10px" }}>
              ลบ
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
