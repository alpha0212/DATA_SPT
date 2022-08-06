import { React, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Title from "../components/Title";

function Register() {
  const router = useRouter();
  const [addUser, setUser] = useState({
    user_name: "",
    user_id: "",
    user_pw: "",
    user_info: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    let data = await axios.post(`http://localhost:3000/api/spt`, addUser);
    if (data.data) router.push("/");
    setUser({
      user_name: "",
      user_id: "",
      user_pw: "",
      user_info: "",
    });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    console.log("value: ", value);
    setUser({ ...addUser, [e.target.name]: value });
  };
  return (
    <>
      <Title title="회원가입" />
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="user_name"
          placeholder="이름"
          onChange={handleChange}
          value={addUser.user_name}
        />
        <input
          type="text"
          name="user_id"
          placeholder="아이디"
          onChange={handleChange}
          value={addUser.user_id}
        />
        <input
          type="password"
          name="user_pw"
          placeholder="비밀번호"
          onChange={handleChange}
          value={addUser.user_pw}
        />
        <input
          type="text"
          name="user_info"
          placeholder="정보입력"
          onChange={handleChange}
          value={addUser.user_info}
        />
        <button type="submit">회원가입</button>
      </form>
    </>
  );
}

export default Register;
