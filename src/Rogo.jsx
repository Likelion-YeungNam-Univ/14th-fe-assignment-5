import React from 'react'
const RogoList = [
    {id:1, category: "전체"},
    {id:2, category: "스포츠"},
    {id:3, category: "음악"},
    {id:4, category: "뉴스"},
    {id:5, category: "요리"},
    {id:6, category: "새로운 맞춤형 동영상"},
];

const Rogo = () => {
  return (
      <div>
        {RogoList.map(category => (
		        // RogoList의 각 객체에 접근하여 category요소 출력
            <div id={category.id}>{category.category}</div>
        ))}
      </div>
  )
}

export default Rogo