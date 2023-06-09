import Navbar from "./Navbar";
import "../components/DataPasien.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendData } from "./Redux/action/dataAction";
import { useEffect, useState } from "react";
import { addId } from "./Redux/action/idAction";

function DataPasien() {
  const tele = useNavigate();
  function teleRiwayat(index) {
    dispatch(addId(index));
    tele("/dashboard/riwayat");
  }
  const dispatch = useDispatch();
  const state = useSelector((state) => state.data);
  const stateId = useSelector((state) => state.id);
  const [filteredList, setFilteredList] = useState(state.pasien);

  const handleSearch = (e) => {
    const inputSearch = e.target.value;

    let updatedList = [...state.pasien];

    updatedList = state.pasien.filter((o) => o.idPasien.includes(inputSearch) || o.namaLengkap.includes(inputSearch));
    setFilteredList(updatedList);
  };

  useEffect(() => {
    dispatch(sendData());
  }, []);
  return (
    <>
      <Navbar />
      <div className="global">
        {/* start kanan*/}
        {/*start tabel*/}
        <div className="row mx-3">
          <div className="container-sm">
            {/* BARIS*/}
            <div className="row">
              <div className="col-md">
                <h1 className="title">Data Pasien</h1>
              </div>
            </div>
            {/*END BARIS*/}

            {/*BARIS*/}
            <div className="row">
              <div className="col-xl-6">
                <div className="input-group flex-nowrap">
                  <input type="text" onChange={handleSearch} className="form-control" placeholder="Cari berdasarkan ID Pasien atau Nama" id="inputSearch" />
                  <span className="input-group-text" id="icon-search">
                    {" "}
                    <i className="material-icons">search</i>
                  </span>
                </div>
              </div>
            </div>
            {/* END BARIS */}
            {/*BARIS*/}
            <div className="row">
              <div className="col-md table-responsive-md con-table">
                <table className="table table-striped table-hover table-bordered table-md text-center vertical-align: middle;">
                  <thead>
                    <tr>
                      <th scope="col" className="col-sm-1">
                        No
                      </th>
                      <th scope="col" className="col-sm-1">
                        ID Pasien
                      </th>
                      <th scope="col">Nama Pasien</th>
                      <th scope="col" className="col-sm-1">
                        Jenis Kelamin
                      </th>
                      <th scope="col" className="col-sm-1">
                        Umur
                      </th>
                      <th scope="col" className="col-sm-2">
                        Tanggal Lahir
                      </th>
                      <th scope="col" className="col-sm-2">
                        Alamat
                      </th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody className="table-body">
                    {filteredList.map((item, index) =>
                      item.konsultasi ? (
                        <tr id="row" key={index}>
                          <td scope="col">{index + 1}</td>
                          <td scope="col">{item.idPasien}</td>
                          <td scope="col">{item.namaLengkap}</td>
                          <td scope="col">{item.jenisKelamin}</td>
                          <td scope="col">{item.umur}</td>
                          <td scope="col">{item.tanggalLahir}</td>
                          <td scope="col">{item.alamat}</td>
                          <td scope="col">
                            <button id="" className="btn btn-sm" role="button" onClick={() => teleRiwayat(index)}>
                              <i className="material-icons">zoom_in</i>
                              Lihat
                            </button>
                          </td>
                        </tr>
                      ) : null
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DataPasien;
