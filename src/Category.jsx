// Category.jsx
import React from 'react'
const categoryList = [
     "전체",
    "음악",
     "믹스",
    "뉴스",
    "ASMR",
     "라이브",
     "새로운 맞춤형 동영상",
    "요리",
    "감상한 동영상",
     "뷰티 팁",
     "피트니스",
     "최근에 업로드된 동영상"
];

const Category = () => {
  return (
    <div className="flex space-x-2 justify-center">
      {categoryList.map((category, index) => (
        <div

          key={index}
          className={index===0
            ? "bg-black text-white py-2 px-4 text-sm rounded-lg justify-center"
            : "bg-gray-300 py-2 px-4 text-sm rounded-lg justify-center"
          }
        >
          {category}
        </div>
      ))}
    </div>
  )
}

export default Category