import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../store/loginSlice";
import { useNavigate } from "react-router-dom";

function Home() {
  const [title, setTitle] = useState("");
  const userName = useSelector((state) => state.login.user);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const isLogin = useSelector(state => state.login.isLogin)

  useEffect(() => {
    if (userName === "admin") {
      setTitle("Login Sebagai Admin");
    } else {
      setTitle("Login Sebagai User");
    }
  }, [userName]);

  const handleUserLogout = () => {
    dispatch(loginAction.handleLogout());

    if(isLogin){
      navigate('/')
    }
  };

  return (
    <div className="px-28 py-10">
      <h1 className="text-3xl mb-5">{title}</h1>
      <button className="px-4 py-2 mb-5 bg-green-700 font-bold rounded text-white">Tambah</button>
      <button onClick={handleUserLogout} className="px-4 py-2 mb-5 bg-green-700 font-bold rounded text-white mx-2">Logout</button>
      <table className="table-auto text-center">
        <thead>
          <tr>
            <th>No</th>
            <th className="w-40">Nama Barang</th>
            <th className="w-20">Stock</th>
            <th className="w-40">Harga</th>
            <th className="w-40">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Minyak Goreng</td>
            <td>10</td>
            <td>30.000</td>
            <td>
              <button className="bg-blue-500 px-2 py-1 rounded text-white mx-1">Edit</button>
              <button className="bg-red-500 px-2 py-1 rounded text-white mx-1">Hapus</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Home;
