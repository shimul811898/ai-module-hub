import Banner from "./component/Banner";
import Footer from "./component/Footer";
import Navbar from "./component/NavBar";
import Models from "./component/Models";

const getModels = async () => {
  const res = await fetch("/models.json");
  return res.json();
};

const modelPromise = getModels();

function App() {
  return (
    <>
      <Navbar />

      <Banner />

      <Models modelPromise={modelPromise} />

      <Footer />
    </>
  );
}

export default App;