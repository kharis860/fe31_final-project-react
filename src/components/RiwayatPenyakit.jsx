import Navbar from "./Navbar";
import "../components/RiwayatPenyakit.css";
import { useDispatch, useSelector } from "react-redux";
import { sendData } from "./Redux/action/dataAction";
import { useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";

function RiwayatPenyakit() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state.pasien);
  // console.log(state.pasien[0]);
  state.pasien
    .filter((pasien) => pasien.id == 1)
    .map((val, index) => {
      console.log(val.riwayatPenyakit);
      val.riwayatPenyakit.map((item, index) => console.log(item));
    });
  // state.pasien.map((val, index) => {
  //   console.log(val);
  //   // console.log(val.riwayatPenyakit);
  // });

  // const pasien1 = state.pasien.map((item, index) => item);

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
            {/* {state.pasien.map((item, index) => (
              <h1 key={index}>{item.NIK}</h1>
            ))} */}
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
                      <p>{item.namaLengkap}</p>
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
        <div className="riwayat">
          <div className="head-isi">
            <h1>Riwayat Penyakit</h1>
          </div>
          <div className="akord-riwayat">
            {/*codingan bootstrap */}
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                  <div>
                    <ul>
                      <li>
                        <h5>Tanggal Periksa</h5>
                      </li>
                      <h6>21 Oktober 2021</h6>
                      <li>
                        <h5>Anamnesis</h5>
                      </li>
                      <h6>sakit kepala</h6>
                      <li>
                        <h5>Diagnosa</h5>
                      </li>
                      <h6>migrain</h6>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <h5>Obat</h5>
                      </li>
                      <h6>paramex</h6>
                      <li>
                        <h5>Catatan</h5>
                      </li>
                      <h6>istirahat total</h6>
                    </ul>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                  <div>
                    <ul>
                      <li>
                        <h5>Tanggal Periksa</h5>
                      </li>
                      <h6>30 Desember 2021</h6>
                      <li>
                        <h5>Anamnesis</h5>
                      </li>
                      <h6>Hidung tersumbat</h6>
                      <li>
                        <h5>Diagnosa</h5>
                      </li>
                      <h6>flu</h6>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <h5>Obat</h5>
                      </li>
                      <h6>OBH combi</h6>
                      <li>
                        <h5>Catatan</h5>
                      </li>
                      <h6>tidur saja</h6>
                    </ul>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            {/*end codingan bootstrap*/}
          </div>
          {/*end riwayat penyakit*/}
        </div>
      </section>
    </div>
  );
}

export default RiwayatPenyakit;
