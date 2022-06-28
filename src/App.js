import './css/bootstrap.min.css';
import './App.css';

const App = () => {

  const get_data_from_url = async ( url ) => {
    try {
      const response = await fetch( url );
      if ( !response.ok ) { // if result status is not the one of 200-299
        throw new Error( `Could not fetch from ${ url } - received status ${ response.status }` );
      }

      const data = await response.json();
      console.log( data.name );
    }
    catch( err ) {
      console.error( `No way! ${err}` );
    };
  }
  get_data_from_url( 'https://swapi.dev/api/people/123432' );

  return (
    <div className="App">
      App
    </div>
  );
}

export default App;
