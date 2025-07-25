import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css';
import MyNavbar from './components/MyNavbar';
import Footer from './components/Footer';
import Header from './components/Header';
import Title from './components/Title';
import Galleries from './components/Galleries';

function App() {
  return (
    <>
      <div className='body'>
        <MyNavbar />
        <div className='container-fluid px-4 testo'>
          <Header />
          <div className='mb-4'>
            <Title title='Trending Now' />
            <Galleries movie='Marvel' />
          </div>
          <div className='mb-4'>
            <Title title='Watch it Again' />
            <Galleries movie='Star Wars' />
          </div>
          <div className='mb-4'>
            <Title title='New Releases' />
            <Galleries movie='Harry Potter' />
          </div>
        </div>
        <Footer className='testo' />
      </div>
    </>
  );
}

export default App;
