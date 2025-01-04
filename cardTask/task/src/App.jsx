import Cards from "./companents/cards";
import "bootstrap/dist/css/bootstrap.min.css";
import nurseImage from "./assets/nurse.jpg";
function App() {
  const rowStyle = {
    display: "flex",
    justifyContent: "center",
    padding: "50px",
    marginRight: "30px",
  };

  const cardsContainerStyle = {
    display: "flex",
    gap: "16px",
    padding: "10px",
    marginRight: "30px",
  };

  return (
    <div style={rowStyle}>
      <div style={cardsContainerStyle}>
        <Cards
          images={nurseImage}
          title="Hemşire"
          desc="Aydında bir kadın hemşire "
          buttonTitle="Tıkla Özgeçmişi Gör"
        />
        <Cards
          images={nurseImage}
          title="Doktor"
          desc="İzmirde bir kadın doktor"
          buttonTitle="Tıkla Özgeçmişi Gör"
        />
      </div>
    </div>
  );
}

export default App;
