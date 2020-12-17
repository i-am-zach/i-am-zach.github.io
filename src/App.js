import Navbar from "./components/Navbar";
import yearbookPhoto from "./images/yearbook.png";

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="container hero" style={{ marginTop: "1rem" }}>
        <div className="hero-layout">
          <div className="picture">
            <img src={yearbookPhoto} alt="Me!"></img>
          </div>
          <div className="text-content">
            <h1>
              Hey there 👋
              <br />
              I’m Zach
            </h1>
            <h3>
              I’m a student who makes interactive websites and I’m learning how
              to hack.
            </h3>
            <span className="button-container">
              <a href={`${process.env.PUBLIC_URL}/assets/Resume.pdf`} className="button">
                View my resume
              </a>
              <span className="outline"></span>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
