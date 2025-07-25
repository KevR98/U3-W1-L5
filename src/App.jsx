import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css';
import MyNavbar from './components/MyNavbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className='body'>
        <MyNavbar />
        <Footer />
      </div>
    </>
  );
}

export default App;
