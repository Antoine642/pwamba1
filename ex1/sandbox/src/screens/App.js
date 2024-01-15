import './App.css';
import Footer from '../components/Footer.js';
import Button from '../components/Button.js';

function App() {
  const myButtonName = "Mon autre bouton";
  return (
    <div className="App m-3">
      Hello World!
      
      <br/>
      <Button name="Mon bouton trop cool" className="btn-primary"/>

      <br/>
      <Button name={myButtonName} className="btn-secondary"/>

      <Footer />
    </div>
  );
}

export default App;
