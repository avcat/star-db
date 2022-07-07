import '../../css/bootstrap.min.css';
import './App.css';

import Header from '../Header';
import Details from '../Details';
import List from '../List';

const App = () => {

  return (
    <div className="App p-4">
      <Header />

      <Details type={'person'} id={1} />
      {/* <List />
      <Details add_class={'medium'} /> */}
    </div>
  );

}

export default App;