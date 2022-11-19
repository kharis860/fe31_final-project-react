import Navbar from "./Navbar";
import { Accordion } from "react-bootstrap";
import "../components/RekamMedis.css";
import { useDispatch, useSelector } from "react-redux";
import { sendData } from "./Redux/action/dataAction";
import { useEffect } from "react";

function RekamMedis() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(() => {
    dispatch(sendData());
  }, []);
  return (
    <div className="global">
      <Navbar />
      {/*start riwayat penyakit*/}
      <section className="pasien">
        {/*start identitas pasien*/}
        <div id="identitas" className="Identitas">
          {/*isi dari js*/}
          <div className="head-isi">
            <h1>Data Pasien</h1>
            <h6>Identitas Pasien</h6>
          </div>
          {state.pasien
            .filter((pasien) => pasien.id == 1)
            .map((item, index) => (
              <div className="id-pasien" key={index}>
                <div className="isi-id">
                  <div className="mb-3">
                    <div className="p-2">
                      <h5>NIK</h5>
                      <p>{item.NIK}</p>
                    </div>
                    <div className="p-2">
                      <h5>Jenis Kelamin</h5>
                      <p>{item.jenisKelamin}</p>
                    </div>
                    <div className="p-2">
                      <h5>Pekerjaan</h5>
                      <p>{item.pekerjaan}</p>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="p-2">
                      <h5>Nama Lengkap</h5>
                      <p>{item.namaLengkap}</p>
                    </div>
                    <div className="p-2">
                      <h5>Tanggal lahir</h5>
                      <p>{item.tanggalLahir}</p>
                    </div>
                    <div className="p-2">
                      <h5>Alergi Obat</h5>
                      <p>{item.alergiObat[0]}</p>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="p-2">
                      <h5>Umur</h5>
                      <p>{item.umur}</p>
                    </div>
                    <div className="p-2">
                      <h5>Alamat</h5>
                      <p>{item.alamat}</p>
                    </div>
                    <div className="p-2">
                      <h5>Konsultasi Pertama</h5>
                      <p>{item.konsultasiPertama}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {/*end identitas pasien*/}

        {/* start akordion riwayat */}
        <div className="riwayat">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Accordion Item #1</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        {/* end akordion riwayat */}

        {/* start form isi rekam medis */}
        <div className="rekam">
          <div className="head-rekam">
            <h1>Isi Rekam Medis</h1>
          </div>
          <div className="date">
            <form action="">
              <label>Tanggal periksa</label>
              <input disabled type="text" name="" id="isiTanggal" value="19 agustus 2021" />
            </form>
          </div>
          <div className="form-rekam">
            <form id="tArea" action="">
              <div className="grid-container">
                <div className="field">
                  <label>Anamnesis</label>
                  <textarea id="isiAnamnesis" rows="4" cols="50" placeholder="Masukkan hasil anamnesis..."></textarea>
                </div>
                <div className="field">
                  <label>Diagnosis</label>
                  <textarea id="isiDiagnosis" rows="4" cols="50" placeholder="Masukkan diagnosis..."></textarea>
                </div>
                <div className="field">
                  <label>Obat</label>
                  <textarea id="isiObat" rows="4" cols="50" placeholder="Masukkan obat..."></textarea>
                </div>
                <div className="field">
                  <label>Catatan</label>
                  <textarea id="isiCatatan" rows="4" cols="50" placeholder="Masukkan catatan..."></textarea>
                </div>
              </div>
              <div className="button-rekam">
                <button id="submitRiwayat" type="submit">
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RekamMedis;
