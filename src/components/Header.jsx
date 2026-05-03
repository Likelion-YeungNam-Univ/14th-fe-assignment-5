import React from 'react'
import Icon from '../assets/icon.jpg'

const menuList = [
    { id: 1, name: "웹툰" },
    { id: 2, name: "웹소설" },
    { id: 3, name: "시리즈" },
];

const Header = () => {
    return (
        <header className="flex items-center justify-between px-10 py-4 border-gray-300">

            <div className="flex items-center gap-8">
                <h1 className="text-2xl font-extrabold text-black">NAVER</h1>

                <nav className="flex gap-5 text-gray-700">
                    {menuList.map((menu) => (
                        <span key={menu.id} className={`cursor-pointer ${menu.name === "웹툰"
                            ? "text-3xl font-bold text-black"
                            : "text-base text-gray-500"
                            }`}
                        >
                            {menu.name}
                        </span>
                    ))}
                </nav>
            </div>

            <div className="flex items-center gap-5">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="제목 / 작가로 검색할 수 있습니다."
                        className="border border-gray-300 px-4 pr-10 h-10 text-sm w-72 rounded"
                    />

                    <img
                        src={Icon}
                        alt="search"
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4"
                    />
                </div>
                <button className="text-sm text-gray-700 border border-gray-300 w-15 h-8">
                    로그인
                </button>
            </div>

        </header>
    )
}

export default Header