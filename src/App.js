import './styles/style.scss';
import NavContainer from './components/NavContainer';
import CardContainer from './components/CardContainer';

const App = () => {
  return (
    <div className="App">
      <NavContainer/>
      <CardContainer section="Pc's"/>
    </div>
  );
}

export default App;