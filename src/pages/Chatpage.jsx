// src/pages/Chatpage.js
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { chatInputState } from '../store/atom.js';
import '../css/pages/Chatpage.css';

function Chatpage() {
  const userQuestion = useRecoilValue(chatInputState);
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    // Handle submit logic here, e.g., adding more chat bubbles dynamically
    if (input.trim()) {
      // For now, we're not adding more bubbles, but this is where you'd do it
      setInput('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="chat-page">
      <div className="chat-container">
        <div className="user-message">
          <div className="message-bubble">{userQuestion}</div>
        </div>
        <div className="ai-message">
          <div className="message-bubble">안녕하세요! 어떤 맛집을 추천해드릴까요?</div>
        </div>
      </div>
      
      {/* Chat input fixed at the bottom */}
      <div className="chatpage-input-wrapper">
        <input
          type="text"
          placeholder="채팅을 입력하세요"
          className="chatpage-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown} // Handle Enter key
        />
        <button className="submit-button" onClick={handleSubmit}>
          <img src="/assets/upicon.png" alt="Send" />
        </button>
      </div>
    </div>
  );
}

export default Chatpage;
