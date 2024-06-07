import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // 전역 CSS 파일 임포트
import App from './App'; // App 컴포넌트 임포트

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* App 컴포넌트 렌더링 */}
  </React.StrictMode>,
  document.getElementById('root') // HTML 파일에서 지정한 root 요소에 렌더링
);
