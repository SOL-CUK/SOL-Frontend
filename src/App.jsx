import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';  // Import RecoilRoot
import './App.css'
import LoginPage from './pages/Loginpage';
import MainPage from './pages/Mainpage';
import GlobalStyle from './css/fonts/GlobalStyle';
import Chatpage from './pages/Chatpage';
function App() {
  

  return (
    <>
      <GlobalStyle />
      <RecoilRoot>  {/* Wrap the app inside RecoilRoot */}
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/main" element={<MainPage />} />
              <Route path="/chat" element={<Chatpage />} />
            </Routes>
          </div>
        </Router>
      </RecoilRoot>
    </>
  )
}

export default App