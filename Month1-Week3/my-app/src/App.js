import "./App.css";
import BackgroundImg from "./components/BackgroundImg";
import Card from "./components/Card";
import Cardinfo from "./components/Cardinfo";
import ContactInfo from "./components/ContactInfo";
import TestInfo from "./components/TestInfo";
function App() {
  return (
    <div className="App">
      <Card>
        <Cardinfo>
          <BackgroundImg />
          <TestInfo />
          <ContactInfo/>
        </Cardinfo>
      </Card>
    </div>
  );
}

export default App;
