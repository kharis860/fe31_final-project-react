import Navbar from "./Navbar";
import "../components/DataPasien.css";

function DataPasien() {
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
                  <input type="text" className="form-control" placeholder="Cari berdasarkan ID Pasien atau Nama" id="inputSearch" />
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
                    <tr id="row">
                      <td scope="col">1</td>
                      <td scope="col">203</td>
                      <td scope="col">Joni</td>
                      <td scope="col">Laki-laki</td>
                      <td scope="col">31 Tahun</td>
                      <td scope="col">21 Agustus 1990</td>
                      <td scope="col">Semarang</td>
                      <td scope="col">
                        <form action="../Data Pasien/data.html">
                          <button id="" className="btn btn-sm" role="button">
                            <i className="material-icons">zoom_in</i>
                            Lihat
                          </button>
                        </form>
                      </td>
                    </tr>
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
