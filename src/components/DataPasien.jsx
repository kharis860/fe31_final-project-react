import Navbar from "./Navbar";
import "../components/DataPasien.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendData } from "./Redux/action/dataAction";
import { useEffect, useState } from "react";

function DataPasien() {
    const tele = useNavigate();
    function teleRiwayat() {
        tele("/dashboard/riwayat");
    }
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    // console.log(state.pasien);

    const [filteredList, setFilteredList] = useState(state.pasien);
    // data tidak langsung masuk di bagian ini
    // console.log(filteredList);

    const handleSearch = (e) => {
        const inputSearch = e.target.value;
        console.log(inputSearch);

        // setFilteredList(e.target.value);
        let updatedList = [...state.pasien];

        updatedList = state.pasien.filter((o) => o.idPasien.includes(inputSearch) || o.namaLengkap.includes(inputSearch));
        setFilteredList(updatedList);
        console.log(filteredList);
    };
    // state.pasien.map((item, index) => console.log(item));

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
                                <div className="input-group flex-nowrap" id="search-form">
                                    <input type="text" onChange={handleSearch} className="form-control" placeholder="Cari berdasarkan ID Pasien atau Nama" id="inputSearch" />
                                    <span className="input-group-text" id="icon-search">
                                        {" "}
                                        <i className="material-icons">search</i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/*END BARIS*/}

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
                                        {filteredList.map((item, index) => (
                                            <tr id="row" key={index}>
                                                <td scope="col">{index + 1}</td>
                                                <td scope="col">{item.idPasien}</td>
                                                <td scope="col">{item.namaLengkap}</td>
                                                <td scope="col">{item.jenisKelamin}</td>
                                                <td scope="col">{item.umur}</td>
                                                <td scope="col">{item.tanggalLahir}</td>
                                                <td scope="col">{item.alamat}</td>
                                                <td scope="col">
                                                    <button id="" className="btn btn-sm" role="button" onClick={() => teleRiwayat()}>
                                                        <i className="material-icons">zoom_in</i>
                                                        Lihat
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/*END BARIS*/}
                    </div>
                </div>
                {/*end tabel*/}
                {/* end kanan */}
            </div>
        </>
    );
}

export default DataPasien;
