import React from 'react'

const sortList = [
  { id: 1, name: "인기순" },
  { id: 2, name: "업데이트순" },
  { id: 3, name: "조회순" },
  { id: 4, name: "별점순" },
];

const SectionHeader = () => {
  return (
    <div className='flex items-center mb-5 gap-6'>

      <div className='flex items-center gap-4'>
        <h2 className='text-3xl font-bold text-black'>목요웹툰</h2>

        <div className='flex gap-3 text-base text-gray-600'>
          {sortList.map((item, index) => (
            <span key={item.id} className='cursor-pointer hover:text-black'>
              {item.name}
              {index !== sortList.length - 1 && (
                <span className='mx-2 text-gray-300'> •</span>
              )}
            </span>
          ))}
        </div>
      </div>

    </div>
  )
}

export default SectionHeader