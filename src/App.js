import './styles/style.scss';
import NavContainer from './components/NavContainer';
import CardContainer from './components/CardContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

const App = () => {
  return (
    <div className="App">
      <NavContainer />
      <CardContainer section="Pc's" />
      <ItemDetailContainer />
    </div>
  );
};

export default App;