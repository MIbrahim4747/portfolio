import "./style.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App" id="container">
      <Header />
      <Content />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
