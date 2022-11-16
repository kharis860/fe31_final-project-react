import "../components/Navbar.css";

function Navbar() {
  return (
    <div>
      {/* start kanan */}
      <div>
        {/* navbar start */}
        <nav className="nav">
          <div className="profil">
            <h5>Danar Riko</h5>
            <img src={require("../Img/person.png")} alt="Gambar profil" width="40px" />
          </div>
        </nav>
        {/* end navbar */}
      </div>
      {/* end kanan */}
    </div>
  );
}

export default Navbar;
