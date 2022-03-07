import { ReactComponent as GithubIcon } from 'assets/img/Github.svg'; // Importa a imagem para ser aproveitada no projeto com a tag GithubIcon
import './styles.css';

// Criação do componente Navbar - Barra de navegação
function Navbar() {
  // Funcão JavaScript
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>DSMovie</h1>
          <a href="https://github.com/Rodrigooosc" target="_blank" rel="noreferrer">
            <div className="dsmovie-contact-container">
                <GithubIcon />              
              <p className="dsmovie-contact-link">/ RodrigoSC</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar; // Esporta a função
