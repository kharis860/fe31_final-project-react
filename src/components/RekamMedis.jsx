import Navbar from "./Navbar";
import { Accordion } from "react-bootstrap";
import "../components/RekamMedis.css";
import { useState } from "react";
import axios from "axios";

function RekamMedis() {
    const [isiTanggal, setIsiTanggal] = useState("");
    const [isiAnamnesis, setIsiAnamnesis] = useState("");
    const [isiDiagnosis, setIsiDiagnosis] = useState("");
    const [isiObat, setIsiObat] = useState("");
    const [isiCatatan, setIsiCatatan] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const postData = {
            tanggalBerobat: isiTanggal,
            anamnesis: isiAnamnesis,
            diagnosis: isiDiagnosis,
            obat: isiObat,
            catatan: isiCatatan,
        };
        // console.log(postData);
        // kurang nge push ke riwayatPenyakit di API
        // ambil API nya juga belum

        axios
            // tinggal nambahin id di url
            .post(`https://6350e03cdfe45bbd55b074ed.mockapi.io/medTechAPI/pasien`, postData)

            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };
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
                    <div className="id-pasien">
                        <div className="isi-id">
                            <div className="mb-3">
                                <div className="p-2">
                                    <h5>NIK</h5>
                                    <p>00025</p>
                                </div>
                                <div className="p-2">
                                    <h5>Jenis Kelamin</h5>
                                    <p>Laki-laki</p>
                                </div>
                                <div className="p-2">
                                    <h5>Pekerjaan</h5>
                                    <p>Pedagang</p>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="p-2">
                                    <h5>Nama Lengkap</h5>
                                    <p>Joni</p>
                                </div>
                                <div className="p-2">
                                    <h5>Tanggal lahir</h5>
                                    <p>20 Januari 2002</p>
                                </div>
                                <div className="p-2">
                                    <h5>Alergi Obat</h5>
                                    <p>Paracetamol</p>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="p-2">
                                    <h5>Umur</h5>
                                    <p>20</p>
                                </div>
                                <div className="p-2">
                                    <h5>Alamat</h5>
                                    <p>Semarang</p>
                                </div>
                                <div className="p-2">
                                    <h5>Konsultasi Pertama</h5>
                                    <p>30 Agustus 2015</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*end identitas pasien*/}

                {/* start akordion riwayat */}
                <div className="riwayat">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Accordion Item #1</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Accordion Item #2</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                deserunt mollit anim id est laborum.
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
                        <form onSubmit={handleSubmit}>
                            <label>Tanggal periksa</label>
                            <input type="text" value={isiTanggal} onChange={(e) => setIsiTanggal(e.target.value)} id="isiTanggal" placeholder="19 agustus 2021" />
                        </form>
                    </div>
                    <div className="form-rekam">
                        <form id="tArea" onSubmit={handleSubmit}>
                            <div className="grid-container">
                                <div className="field">
                                    <label>Anamnesis</label>
                                    <textarea id="isiAnamnesis" value={isiAnamnesis} onChange={(e) => setIsiAnamnesis(e.target.value)} rows="4" cols="50" placeholder="Masukkan hasil anamnesis..."></textarea>
                                </div>
                                <div className="field">
                                    <label>Diagnosis</label>
                                    <textarea id="isiDiagnosis" value={isiDiagnosis} onChange={(e) => setIsiDiagnosis(e.target.value)} rows="4" cols="50" placeholder="Masukkan diagnosis..."></textarea>
                                </div>
                                <div className="field">
                                    <label>Obat</label>
                                    <textarea id="isiObat" value={isiObat} onChange={(e) => setIsiObat(e.target.value)} rows="4" cols="50" placeholder="Masukkan obat..."></textarea>
                                </div>
                                <div className="field">
                                    <label>Catatan</label>
                                    <textarea id="isiCatatan" value={isiCatatan} onChange={(e) => setIsiCatatan(e.target.value)} rows="4" cols="50" placeholder="Masukkan catatan..."></textarea>
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
