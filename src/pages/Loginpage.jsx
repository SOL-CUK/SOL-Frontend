import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/pages/LoginPage.css'; // CSS 파일 분리
import Background from '../components/Background';
function LoginPage() {
  const navigate = useNavigate();

  const goToRegister = () => {
      navigate('/register');
  };

  return (
    
    <div className="container">
        <Background></Background>
      <div className="title">
        추천 해주꽝 👍👍 <br />
        제주 맛집 AI
      </div>

      <div className="content-wrapper">
        <div className="rabbit-image">
          <img src="assets/mainRabbit.png" alt="토끼 그림" />
        </div>

        <div className="green-box">
          <div className="green-div">
            체팅으로 맛집을 추천 받으세요!
          </div>
          <div className="white-div">
            제주도 맛집 추천 AI를 통해 <span>좋은</span> 경험을 하세요!
          </div>
        </div>

        <p className="main-text">제주도 맛집을 찾아보세요!</p>
        <p className="gray-text">제주도 맛집 추천 AI</p>
        <button className="kakao-login-button" onClick={goToRegister}>
            <img src="/assets/kakaoicon.svg" alt="" className='kakaoimg'/>
            카카오 로그인
        </button>
      </div>

      
    </div>
  );
}

export default LoginPage;
