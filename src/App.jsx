import './App.css';
import {Menus} from './compontents/menus/menu.js'
import  {CardsUsers} from './compontents/Cards/cards';

function App() {
  return (
    <div className="App">
      <header>
        <Menus/>
      </header>
      <main>
        <ul>
          <li>
            <CardsUsers name='Junior' age='33' country='Brasil'/>
          </li>
          <li>
            <CardsUsers  age='28' name='Joaquin' country='França'/>
          </li>
          <li>
          <CardsUsers name='Joana' age='27' country='Portugal'/>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
