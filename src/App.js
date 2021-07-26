import { Search } from './Components/Search/Search';
import { Card } from './Components/Card/Card';
import './App.css';

import { cards } from './cardsContent';

function App() {
  return (
    <div className="App">
      <Search />
      <div className="cards__container">
        {cards.map((item) => (
          <Card
            name={item.name}
            text={item.text}
            img={item.img}
            category={item.category}
            liked={item.liked}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
