
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Hello from "./components/Index";
import SectionFaq from "./components/Faq";
import User from "./components/Userprofile";


function App() {
  return (
    <>
      <div className="App">
        <Hello></Hello>
        <div className="d-flex">
          <User name="Piyush" lastname="Vyas" Location="Jodhpur" description="FrontEnd Web Developer Intern"></User>
          <User name="Mohan" lastname="Singh " Location="Jodhpur" description="FullStack Web Developer"></User>
          <User name="Ankit" lastname="Goyal" Location="Jodhpur" description="FullStack Web Developer"></User>
        </div>
        <SectionFaq></SectionFaq>
      </div>
    </>
  );
}

export default App;
