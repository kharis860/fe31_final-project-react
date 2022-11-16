import Navbar from "./Navbar";

function Konsultasi() {
  return (
    <div className="global">
      <Navbar />
      {/*start tabel*/}
      <div className="row mx-3">
        <div className="container-sm">
          {/*BARIS*/}
          <div className="row">
            <div className="col-md">
              <h1 className="title">Konsultasi Hari Ini</h1>
            </div>
          </div>
          {/*END BARIS*/}

          {/*BARIS*/}
          <div className="row">
            <div className="col-xl-6">
              <div className="input-group flex-nowrap">
                <input type="text" className="form-control" placeholder="Cari berdasarkan ID Pasien atau Nama" id="inputSearch" />
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
            <div className="col-md table-responsive-md">
              <table className="table table-striped table-hover table-bordered table-md text-center vertical-align: middle;">
                <thead>
                  <tr>
                    <th scope="col" className="col-sm-1">
                      No
                    </th>
                    <th scope="col" className="col-sm-2">
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
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody className="table-body">
                  <tr>
                    <td scope="col">1</td>
                    <td scope="col">209</td>
                    <td scope="col">Rudi</td>
                    <td scope="col">Laki-laki</td>
                    <td scope="col">20</td>
                    <td scope="col">20 Maret 2002</td>
                    <td scope="col">
                      <form action="index.html">
                        <button id="submit${i}" onclick="kondisi(${i + 1})" className="btn btn-sm" role="button">
                          <i className="material-icons" style={{ font_size: "15px" }}>
                            edit
                          </i>
                          Edit
                        </button>
                      </form>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* END BARIS */}
        </div>
      </div>
    </div>
  );
}

export default Konsultasi;
