// ShortForm.jsx
import thumbnail from "./assets/thumbnail.png";

const shortFormList = [
  {id:1, thumbnail, title: "왜 지뻔뻔님 따라하세요?", views: "33만회"},
  {id:2, thumbnail, title: "환승연애4 민와와", views: "13만회"},
  {id:3, thumbnail, title: "홈트만 7개월하면..", views: "61만회"},
  {id:4, thumbnail, title: "소식좌의 하루", views: "4.6만회"},
  {id:5, thumbnail, title: "CU 신제품 소개!", views: "8.2만회"},
  {id:6, thumbnail, title: "도전 먹방", views: "218만회"},
  {id:7, thumbnail, title: "집에서 하는 운동", views: "12만회"},
];

function ShortForm() {
  return (
    <div className="flex overflow-x-auto space-x-4 p-4">

      {shortFormList.map(sf => (
        <div
          key={sf.id}
          className="relative min-w-[180px] h-[320px] rounded-xl overflow-hidden cursor-pointer"
        >

         
          <img
            src={sf.thumbnail}
            className="w-full h-full object-cover"
          />

        
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

        
          <div className="absolute bottom-2 left-2 text-white">
            <p className="text-sm font-semibold line-clamp-2">
              {sf.title}
            </p>
            <p className="text-xs text-gray-300">
              조회수 {sf.views}
            </p>
          </div>

        </div>
      ))}

    </div>
  );
}

export default ShortForm;