import React from 'react'


const App = () => {
  return (
    <div className="flex flex-col h-screen bg-[#1f2125] text-gray-300">
       {/* 상단바 */} 
      <div className="flex justify-between items-center h-16 p-4 gap-4">
        <div className="justify-start items-center flex gap-4">
          <a className="text-sm hover:underline justify-start text-[13px]">Google 정보</a>
          <a className="text-sm hover:underline justify-start text-[13px]">스토어</a>
        </div>
        <div className="justify-end items-center flex gap-3">
          <a className="text-sm hover:underline justify-start text-[13px]">Gmail</a>
          <a className="text-sm hover:underline justify-start text-[13px]">이미지</a>
          <button className="p-2.5 text-gray-300 hover:bg-white/10 rounded-full transition-colors">
            <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 11.33L18 18H6l5-6.67V6h2m2.96-2H8.04c-.42 0-.65.48-.39.81L9 6.5v4.17L3.2 18.4c-.49.66-.02 1.6.8 1.6h16c.82 0 1.29-.94.8-1.6L15 10.67V6.5l1.35-1.69c.26-.33.03-.81-.35-.81z" />
            </svg>
          </button> 
          <button className="p-2.5 text-gray-300 hover:bg-white/10 rounded-full transition-colors">
            <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z" />
            </svg>
          </button> 
          <button className="w-8 h-8 rounded-full bg-gray-500 text-white flex items-center justify-center">
            O
          </button>
        </div>  
      </div>
      {/* 중간 */}
      <div className="flex-1 flex flex-col items-center p-4 justify-center gap-6">
         {/* 구글 */}
        <div className="text-white text-7xl font-bold mb-4">
          Google 
        </div>
         {/* 검색창 */}
         <div className="flex items-center w-full max-w-2xl bg-[#4f5256] rounded-full p-2 gap-2 border border-transparent focus-within:border-slate-600 focus-within:shadow-lg focus-within:bg-[#1a1b1e] hover:bg-gray-700 transition-colors">
          {/* +버튼 */}
          <button className="justify-center items-center w-8 h-9 text-white flex text-[30px] hover:text-gray-200 hover:bg-white/10 rounded-full transition-colors">
            +
          </button>
         
          <input 
              type="text" 
              className="flex-1 h-[30px] w-[500px] bg-gray-300 bg-transparent text-white outline-none text-base"
          />

          {/* 가상 키보드  */}
          <button className="p-2 text-gray-400 hover:text-gray-200 hover:bg-white/10 rounded-full transition-colors">
            <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 5H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2V8zm0 3h2v2h-2v-2zM8 8h2v2H8V8zm0 3h2v2H8v-2zm-1 2H5v-2h2v2zm0-3H5V8h2v2zm9 7H8v-2h8v2zm0-4h-2v-2h2v2zm0-3h-2V8h2v2zm3 3h-2v-2h2v2zm0-3h-2V8h2v2z" />
            </svg>
          </button>

          {/* 마이크 버튼 */}
          <button className="p-2 text-gray-400 hover:text-gray-200 hover:bg-white/10 rounded-full transition-colors">
            <svg className="size-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"></path>
            </svg>
          </button>

          
          {/* 렌즈 아이콘 */}
          <button className="p-2 text-gray-400 hover:text-gray-200 hover:bg-white/10 rounded-full transition-colors">
            <svg className="size-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 8V6a2 2 0 012-2h2M4 16v2a2 2 0 002 2h2M16 4h2a2 2 0 012 2v2M16 20h2a2 2 0 002-2v-2" strokeLinecap="round" />
              <circle cx="12" cy="12" r="3" />
              <circle cx="17" cy="17" r="1" fill="currentColor" stroke="none" />
            </svg>
          </button>

          {/* AI mode버튼 */}
          <button className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none">
            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#4285f4,#ea4335,#fbbc04,#34a853,#4285f4)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  
            <span className="relative flex items-center gap-1.5 px-4 py-1.5 bg-[#303134] rounded-full transition-colors z-10 text-gray-200">
  
              <svg className="size-4 text-gray-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" />
                <path d="M16 6l1 1 1-1-1-1-1 1z" fill="currentColor" stroke="none" />
              </svg>
              <span className="text-sm font-medium">AI 모드</span>
            </span>

          </button>
        </div>  
        
         {/* 검색창 밑에 버튼 2개 */}
        <div className='m-[2px]'>
           {/* google Search 버튼 */}
          <button className='m-[8px] bg-[#303134] text-[#e8eaed] border border-transparent hover:border-[#5f6368] px-4 py-1.5 rounded-md text-sm transition-colors'>
            Google 검색
          </button>
           {/* I'm Feeling Lucky 버튼 */}
          <button className='m-[8px] bg-[#303134] text-white text-[14px] py-1.5 px-4 rounded-[6px] hover:border-[#5f6368] border border-transparent'>
            I'm Feeling Lucky
          </button>
        </div>
      </div>
       {/* 하단바 */}
      <div className="bg-[#16171a] h-25">
        <div className="h-12 items-center p-2 text-[14px] m-[7px] border-b-gray-700 border-b-1">
          <a className="text-sm hover:underline ml-4">대한민국</a>
        </div>
        <div className="flex justify-center items-center h-6 p-4 gap-4">
          <div className="flex gap-4 justify-end mr-[25px] ">
            <a className="text-sm hover:underline mr-[10px]">광고</a>
            <a className="text-sm hover:underline mr-[10px]">비즈니스</a>
            <a className="text-sm hover:underline mr-[10px]">검색의 원리</a>
          </div>
          <div className="flex gap-4 justify-start ml-[25px]">
            <a className="text-sm hover:underline mr-[10px]">개인정보처리방침</a>
            <a className="text-sm hover:underline mr-[10px]">약관</a>
            <a className="text-sm hover:underline mr-[10px]">설정</a>
          </div>
        </div>
      </div>
    </div>
  );  
}


export default App
