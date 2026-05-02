// LongForm.jsx
import React from 'react'
import thumbnail from "./assets/thumbnail.png"

const longFormList = [
  {id:1, thumbnail, runtime:"1:13:21", profile:thumbnail, title:"집중 잘 되는 음악", user:"포커스", views:"124만회", date:"1년 전"},
  {id:2, thumbnail, runtime:"23:08", profile:thumbnail, title:"휴학생의 vlog", user:"담이네", views:"4만회", date:"4시간 전"},
  {id:3, thumbnail, runtime:"5:11", profile:thumbnail, title:"헤어지기 7시간 전", user:"미뇽이", views:"35만회", date:"1개월 전"},
];

const LongForm = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {longFormList.map(form => (
        <div key={form.id} className="w-full">
          
          {/* 썸네일 */}
          <div className="relative aspect-video">
            <img 
              src={form.thumbnail} 
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute bottom-2 right-2 bg-gray-800 text-white text-xs px-1 py-0.5 rounded">
              {form.runtime}
            </div>
          </div>

          {/* 정보 */}
          <div className="flex mt-2 space-x-2">
            <img 
              src={form.profile} 
              className="w-10 h-10 rounded-full"
            />
            <div className="text-sm">
              <div className="font-semibold">{form.title}</div>
              <div className="text-gray-500">{form.user}</div>
              <div className="text-gray-500">
                조회수 {form.views} · {form.date}
              </div>
            </div>
          </div>

        </div>
      ))}
    </div>
  )
}

export default LongForm