import './App.css';
import Zoom from 'react-reveal/Zoom';

function App() {
  return (
    <div className="App">
      <img src="/icon/favicon-96x96.png" alt="Elena Ambitska"/>
      <Zoom>
        <p>Лена</p>
      </Zoom>
      <Zoom>
        <p>моя</p>
      </Zoom>
      <Zoom>
        <p>ЛЮБИМА</p>
      </Zoom>
      <Zoom>
        <p><span class="biruzoviy">жопця</span></p>
      </Zoom>
    </div>
  );
}

export default App;
