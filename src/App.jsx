import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css';
import MyNavbar from './components/MyNavbar';
import Footer from './components/Footer';
import Header from './components/Header';
import Title from './components/Title';

function App() {
  return (
    <>
      <div className='body'>
        <MyNavbar />
        <div className='container-fluid px-4 footer'>
          <Header />
          <Title title='Trending Now' />
          <Title title='Watch it Again' />
          <Title title='New Releases' />
        </div>
        <Footer className='footer' />
      </div>
    </>
  );
}

export default App;
