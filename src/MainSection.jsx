import "./MainSection.css";

export function MainSection() {
  return (
    <div>
      <main>
        <section id="main-section">
          <div>
            <h2>LABELED MASTERPIECES</h2>
            <p>Click and get your own cozy art piece</p>
            <button>Shop now</button>
          </div>
          <img src="./Images/rugs.webp" alt="" />
        </section>
        <section id="second-section">
          <h2>Plant Collection</h2>
          <div className="plants">
            <div className="plant">1</div>
            <div className="plant">2</div>
            <div className="plant">3</div>
            <div className="plant">4</div>
          </div>
        </section>
      </main>
    </div>
  );
}
