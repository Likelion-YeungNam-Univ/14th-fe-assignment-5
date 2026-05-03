import React from 'react'

const categoryList = [
    { id: 1, category: "홈" },
    { id: 2, category: "웹툰" },
    { id: 3, category: "컷츠" },
    { id: 4, category: "베스트도전" },
    { id: 5, category: "도전만화" },
    { id: 6, category: "마이페이지" }
]

const Category = () => {
    return (
        <div className='flex items-center h-14 border-y border-gray-300 px-10 text-1xl'>
            {categoryList.map(category => (
                <div id={category.id} className={`px-3 h-full flex items-center justify-center ${category.category === "홈"
                    ? 'bg-green-500 text-white w-13'
                    : 'text-black'
                    }`}>{category.category}</div>
            ))
            }
        </div >
    )
}

export default Category