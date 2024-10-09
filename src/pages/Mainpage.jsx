import React, { useState } from 'react';
import '../css/pages/Mainpage.css';
import Background from '../components/Background';
import { useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';

import { chatInputState } from '../store/atom.js';
function MainPage() {
  const [input, setInput] = useState('');
  const setChatInput = useSetRecoilState(chatInputState);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (input.trim()) {
      setChatInput(input); // Store input in Recoil
      navigate('/chat');   // Navigate to Chatpage
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };
  return (
    <div className="container">
      <Background></Background>
      <div className="icon-wrapper">
        <img src="/assets/mainRabbit.png" alt="Main Icon" className="main-icon" />
      </div>
      <div className="greeting-text">
        안녕하수꽝<br />
        제주 맛집을 추천해주꽝
      </div>
      <div className="chat-input-wrapper">
        <input
          type="text"
          placeholder="채팅을 입력하세요"
          className="chat-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown} // Added event listener for Enter key
        />
        <button className="submit-button" onClick={handleSubmit}>
          <img src="/assets/upicon.png" alt="Send" />
        </button>
      </div>

    </div>
  );
}

export default MainPage;
