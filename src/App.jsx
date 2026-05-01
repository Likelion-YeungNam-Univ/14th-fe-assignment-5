import React from 'react';
import Header from './Header';
import GuideRenderer from './GuideRenderer';
import Category from './Category';
import LongForm from './LongForm';
import ShortForm from './ShortForm';

function App() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* 전체 화면 스크롤 방지 */}
      <Header />

      <div id="main-container" className="flex flex-1 overflow-hidden">
        <GuideRenderer />
        {/* 1. 이 영역만 스크롤 가능*/}
        <div id="contents" className="flex-1 overflow-y-auto px-5">
          {/* 2. 카테고리는 스크롤을 내려도 상단에 붙어있게 sticky 적용 */}
          <div className="sticky top-0 bg-white z-20">
            <Category />
          </div>

          <LongForm />
          <ShortForm />
        </div>
      </div>
    </div>
  );
}
export default App;
