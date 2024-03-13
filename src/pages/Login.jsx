import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../store/loginSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const isLogin = useSelector(state => state.login.isLogin)

  const handlUserLogin = (e) => {
    e.preventDefault();
    dispatch(
      loginAction.handleLogin({
        role,
        password,
      })
    );

    setPassword("");
    setRole("");

    if (!isLogin) {
      navigate('/home')
    }
  };

  return (
    <div className="text-center py-10">
      <form onSubmit={handlUserLogin}>
        <input value={role} onChange={(e) => setRole(e.target.value)} type="text" placeholder="username" className="bg-slate-200 px-4 py-2 mx-2" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" className="bg-slate-200 px-4 py-2 mx-2" />
        <button className="bg-green-500 px-4 py-2 mx-2 text-white rounded font-bold">Login</button>
      </form>
    </div>
  );
}

export default Login;
