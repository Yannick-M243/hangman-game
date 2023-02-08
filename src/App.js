import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Words from './components/Words.js'
import './styles/style.scss';
import useWindowSize from './components/useWindowSize'
import checkDevice from './components/checkDevice'

function App() {
  //Checking the type of device
  const size = useWindowSize();
  const isMobile = checkDevice(size);

  //changing the footer's position property for mobiles
  if (isMobile) {
    return (
      <div className="App">
        <Words />
        <div className='footer-mobile py-3'>
          <span >Created by <a href="https://github.com/Yannick-M243" target='blank'>Yannick Makwenge</a></span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Words />
        <div className='footer-computer py-3'>
          <span >Created by <a href="https://github.com/Yannick-M243" target='blank'>Yannick Makwenge</a></span>
        </div>
      </div>
    );
  }
}

export default App;
