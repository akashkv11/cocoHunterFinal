import './App.scss';
import Home  from './home';
import First from './first';
import Contact from './contact';
import Help from './help';

function App() {
  return (
    <div className="App">
      <div className='first'><First/></div>
      <div className='home'><Home/></div>
      <div className='contact'><Contact/></div>
      <div className='help'><Help/></div>
    </div>
  );
}

export default App;
