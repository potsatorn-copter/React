import React, { useState } from "react";
import provinces from "./provinces.json";


function Form({ addUser }) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [province, setProvince] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && gender && province) {
      addUser({ name, gender, province });
      setName("");
      setGender("");
      setProvince("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>ชื่อ: </label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>เพศ: </label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">--เลือกเพศ--</option>
          <option value="ชาย">ชาย</option>
          <option value="หญิง">หญิง</option>
        </select>
      </div>
      <div>
        <label>จังหวัด: </label>
        <select value={province} onChange={(e) => setProvince(e.target.value)}>
          <option value="">--เลือกจังหวัด--</option>
          {provinces.map((prov, idx) => (
            <option key={idx} value={prov}>
              {prov}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" disabled={!name || !gender || !province}>
        เพิ่มข้อมูล
      </button>
    </form>
  );
}

export default Form;
