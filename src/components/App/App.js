import '../../css/bootstrap.min.css';
import './App.css';

import Header from '../Header';
import Person from '../Person';
import Planet from '../Planet';
import Starship from '../Starship';

const App = () => {

  return (
    <div className="App p-4">
      <Header />
      <Planet id={3} />
      {/* <Person /> */}
      {/* <Starship /> */}
    </div>
  );

}

export default App;