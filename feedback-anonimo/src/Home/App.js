import logo from './logo.svg';
import './App.css';
import logo1 from './grupo_lidon_logo.png';



function App() {
  return (
<div className="App">
  <div className="menu-bar">
    <img src={logo1} className="img-grupoLidon" alt="logoGrupoLidon" />
    <div className='title-menu'>
      <p>Feedback-Anonimo</p>
    </div>
    
  </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Grupo Lidon 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
