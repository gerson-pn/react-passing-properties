import './App.css';
import Componente from './componente';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <Componente texto={props.texto} />
      </header>
    </div>
  );
}
export default App;
