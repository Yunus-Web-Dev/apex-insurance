import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import MainPage from './pages/MainPage/MainPage';

import Footer from './components/Footer/Footer';
import './App.css'

function App() {

  return (

    <Router>
      <div className='app-layout'>
        <Header />
        <Navbar />
        <main className='main-content'>
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App;