import logo from './logo.svg';
import './App.css';
import MainPage from './pages/mainPage/MainPage';
import Footer from './component/footer/Footer';
import Navbar from './component/Navbar/Navbar';

function App() {
  return (

    <>
    <Navbar/>
    <div className="App">
      <MainPage />
    </div>
    <Footer />
    </>
   
  );
}

export default App;
