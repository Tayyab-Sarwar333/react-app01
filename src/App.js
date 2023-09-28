import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TexrForm from "./components/TextForm";
import About from "./components/About";

function App() {
  return (
    <>
      <h1>Muhammad Tayyab</h1>
      <Navbar title="Sarwar"  mode="mode"/>
      <div class="container">
        <TexrForm heading= "Enter your Text Here"/>
      
      </div>
      <About/>
      

    </>
  );
}

export default App;
