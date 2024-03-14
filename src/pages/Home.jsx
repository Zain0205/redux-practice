import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../store/loginSlice";
import { useNavigate } from "react-router-dom";
import { dataAction } from "../store/DataSlice";

function Home() {
  const [title, setTitle] = useState("");
  const [data, setData] = useState([]);
  const userName = localStorage.getItem("role");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const isLogin = useSelector((state) => state.login.isLogin);
  const updatedStockData = localStorage.getItem("stock");

  useEffect(() => {
    const fetchedData = JSON.parse(localStorage.getItem("stock"));

    setData(fetchedData);
  }, [updatedStockData]);

  useEffect(() => {
    if (userName === "admin") {
      setTitle("Login Sebagai Admin");
    } else {
      setTitle("Login Sebagai User");
    }
  }, [userName, title]);

  const handleUserLogout = () => {
    dispatch(loginAction.handleLogout());

    if (!localStorage.getItem("role")) {
      navigate("/");
    }
  };

  const handleAddItem = () => {
    if (localStorage.getItem("role")) {
      navigate("/add");
    }
  };

  const handleClear = () => {
    localStorage.removeItem("stock");
    setData(undefined);
  };

  const handleDellete = (item) => {
    dispatch(dataAction.delleteItem(item));

    const fetchedData = JSON.parse(localStorage.getItem("stock"));

    setData(fetchedData);
  };

  return (
    <div className="px-28 py-10">
      <h1 className="text-3xl mb-5">{title}</h1>
      {userName === "admin" && (
        <button onClick={handleAddItem} className="px-4 py-2 mb-5 bg-green-700 font-bold rounded text-white mr-2">
          Tambah
        </button>
      )}
      <button onClick={handleUserLogout} className="px-4 py-2 mb-5 bg-green-700 font-bold rounded text-white mr-2">
        Logout
      </button>
      {userName === "admin" && (
        <button onClick={handleClear} className="px-4 py-2 mb-5 bg-green-700 font-bold rounded text-white">
          Clear
        </button>
      )}
      <table className="table-auto text-center">
        <thead>
          <tr>
            <th>No</th>
            <th className="w-40">Nama Barang</th>
            <th className="w-20">Stock</th>
            <th className="w-40">Harga</th>
            {/* <th className="w-40">Jumlah Harga</th> */}
            {userName === "admin" && <th className="w-40">Action</th>}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((x, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td className="capitalize">{x.nama}</td>
                <td>{x.jumlahBarang}</td>
                <td>Rp. {x.harga}</td>
                {userName === "admin" && (
                  <td>
                    <button className="bg-blue-500 px-2 py-1 rounded text-white mx-1">Edit</button>
                    <button onClick={() => handleDellete(x.nama)} className="bg-red-500 px-2 py-1 rounded text-white mx-1">
                      Hapus
                    </button>
                  </td>
                )}
              </tr>
            ))}
        </tbody>
      </table>
      {!data && <h1 className="font-semibold text-3xl mt-10">Belum ada barang</h1>}
    </div>
  );
}

export default Home;
