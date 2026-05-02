import React from 'react'

const Footer = () => {
  return (
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
  );
};

export default Footer;