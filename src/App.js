import Header from './components/header/Header';
import Menu from './components/menu/menu'
import Carrusel from './components/carrusel/carrusel'
import Packages from './components/packages/packages'
import Footer from './components/footer/footer'
import imagenesMock from './assets/img'
import './App.css';

function App() {
  return (
    <main>
      <Header/>
      <Menu/>
      <Carrusel imagenes={imagenesMock}/>
      <Packages/>
      <Footer/>
    </main>
  );
}

export default App;
