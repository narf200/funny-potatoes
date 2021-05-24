import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="BotomBlock" tabIndex="1">
          <img
              alt="img"
              src="https://media4.giphy.com/media/Hzhkf0esHVMhW/giphy.gif?cid=ecf05e47800jwzlp0bjrhpvisl2jlw1qgzlez4j6l9tlpacf&rid=giphy.gif&ct=g"
          />
        </div>
        <div className="SlideBlock" tabIndex="2">
          <p>Наведи на меня мышку</p>
          <p>Или кликни на меня</p>
          <img alt="img" src={"https://live.staticflickr.com/3689/8989851909_9b78222fbb.jpg"} />
        </div>
      </header>
    </div>
  );
}

export default App;
