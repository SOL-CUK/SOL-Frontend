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
  const handleRegionClick = (region) => {
    setChatInput(`${region} 맛집 추천해줘`);
    navigate('/chat'); 
  };
  const regionsTop = ['한경', '한림', '애월', '제주', '조천', '구좌'];
  const regionsBottom = [ '안덕', '중문', '서귀포', '남원', '표선', '성산'];
  return (
    <div className="container">
      <Background></Background>
      <div className="icon-wrapper">
        <img src="/assets/mainRabbit.png" alt="Main Icon" className="main-icon" />
      </div>
      <div className="greeting-text">
        안녕하수꽝~<br />
        🍊제주 맛집을 추천해주꽝
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
      <h2 className="region-title">🗾지역선택으로 추천 받기</h2>
      <div className="region-container">
        {/* 상단 지역 버튼 */}
        {regionsTop.map((region, index) => (
          <div
            key={index}
            className={`region-button top-${index + 1}`}  // 영역을 버튼으로 처리
            onClick={() => handleRegionClick(region)}     // 클릭 시 지역 적용
          >
            <span className="region-text">{region}</span> {/* 버튼 내부에 텍스트 */}
          </div>
        ))}

        {/* 하단 지역 버튼 */}
        {regionsBottom.map((region, index) => (
          <div
            key={index}
            className={`region-button bottom-${index + 1}`} // 영역을 버튼으로 처리
            onClick={() => handleRegionClick(region)}       // 클릭 시 지역 적용
          >
            <span className="region-text">{region}</span>   {/* 버튼 내부에 텍스트 */}
          </div>
        ))}
      </div>

    </div>
  );
}

export default MainPage;
