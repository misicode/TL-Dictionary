import Dictionary from "./pages/Dictionary";
import Footer from "./parts/Footer/Footer";
import Header from "./parts/Header/Header";

import './assets/Variables.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Dictionary />
      <Footer />
    </div>
  );
}

export default App;
