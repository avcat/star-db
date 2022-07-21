import '../../css/bootstrap.min.css';
import './App.css';

import Header from '../Header';

import Planet from '../Planet';

const App = () => {

  return (
    <div className="App p-4">
      <Header />
      <Planet />
    </div>
  );

}

export default App;