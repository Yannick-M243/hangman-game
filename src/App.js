import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Words from './components/Words.js'
import './styles/style.scss';


function App() {
  return (
    <div className="App">
      <Words />
      <div className='footer py-3'>
        <span >Created by <a href="https://github.com/Yannick-M243" target='blank'>Yannick Makwenge</a></span>
      </div>
    </div>
  );
}

export default App;
