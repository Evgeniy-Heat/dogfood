import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { MainPage } from './pages/MainPage';
import { ProductPage } from './pages/ProductPage';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='content'>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/product/:id' element={<ProductPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
