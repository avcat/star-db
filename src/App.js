import './css/bootstrap.min.css';
import './App.css';

function App() {
  const get_data_from_url = async ( url ) => {
    const data = await fetch('https://swapi.dev/api/people/1');
    const parsed_data = await data.json();
    console.log( parsed_data.name );
  };
  get_data_from_url();

  return (
    <div className="App">
      App
    </div>
  );
}

export default App;
