import './App.css';
import Home from './components/Home';
import {Helmet} from "react-helmet";

function App() {
  return (
    <>
    <Helmet>
      <title>Minimal Website</title>
    </Helmet>
    <Home />
    </>
  );
}

export default App;
