import { useDispatch, useSelector } from "react-redux";
import { dataAction } from "../store/DataSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddItem() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.stockData.stockBarang);
  const navigate = useNavigate();

  const [stockName, setStockName] = useState("");
  const [itemQuantitiy, setItemQuantitiy] = useState(0);
  const [price, setPrice] = useState(0);

  const handleAddStock = (e) => {
    e.preventDefault();

    dispatch(
      dataAction.addItem({
        id: data.length,
        nama: stockName,
        jumlahBarang: itemQuantitiy,
        harga: price,
      })
    );

    setItemQuantitiy("");
    setStockName("");
    setPrice("");

    navigate("/home");
  };

  return (
    <div className="px-28 py-10">
      <h1 className="text-3xl font-semibold">Tambah Barang</h1>
      <form onSubmit={handleAddStock} className="mt-3 ">
        <div className="flex flex-wrap gap-3 mb-3">
          <input value={stockName} onChange={(e) => setStockName(e.target.value)} type="text" placeholder="Nama Barang" className="bg-slate-200 px-4 py-2" />
          <input value={itemQuantitiy} onChange={(e) => setItemQuantitiy(e.target.value)} type="text" placeholder="Jumlah Barang" className="bg-slate-200 px-4 py-2" />
          <input value={price} onChange={(e) => setPrice(e.target.value)} type="text" placeholder="Harga Barang" className="bg-slate-200 px-4 py-2" />
        </div>
        <button className="px-4 py-2 mb-5 bg-green-700 font-bold rounded text-white">Tambah</button>
      </form>
    </div>
  );
}

export default AddItem;
