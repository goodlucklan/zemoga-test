import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Header } from "./components/Header/Header";
import { MainCard } from "./components/Card/MainCard";
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <MainCard />
    </>
  );
}

export default App;
