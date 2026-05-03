import adImage from "./images/ad.png";

const SubNavbar = () => {
  return (
    <>
      <div className="flex flex-row justify-between items-center p-1  border-b">
        <div className="ml-20 mr-20 flex flex-row gap-5">
          <button className="text-green-600 font-bold underline">
            블로그 홈
          </button>
          <button>주제별 보기</button>
        </div>
        <div className="ml-20 mr-20 flex flex-row gap-5">
          <button>이달의 블로그</button>
          <button>공식블로그</button>
          <button>챌린지프로그램</button>
        </div>
        <div className="ml-20 mr-20 flex flex-row gap-5">
          <button>블로그 마켓 가입</button>
          <button>블로그팀 공식 블로그</button>
        </div>
      </div>
    </>
  );
};

const list = [1, 2, 3, 4, 5];
const HotTopicSection = () => {
  return (
    <div className="flex flex-row justify-between ml-20 mr-20">
      <div>
        <button className="text-red-500 font-bold">핫토픽</button>
        <span> &lt; </span>
        <button> 주말 농장</button>
      </div>

      <div className="flex">
        {list.map((item) => (
          <button className="m-1 inline-block w-5 h-5 text-center bg-gray-300 ">
            {item}
          </button>
        ))}
      </div>

      <div>
        <button className=" inline-block w-5 h-5 text-center bg-gray-300 ml-20 mr-20">
          1
        </button>
      </div>
    </div>
  );
};

//props사용
const posts = [
  {
    id: 1,
    title: "농장에 심을 모종 쇼핑",
    img: "url1.jpg",
    profileImg: "profile1.jpg",
    userName: "도농로그",
    description: "안녕하세요! 주말농장 기록입니다.",
  },
  {
    id: 2,
    title: "직접 심고 수확하는 재미~",
    img: "url2.jpg",
    profileImg: "profile2.jpg",
    userName: "성주맘",
    description:
      "주말농장 생강심는 시기 수확시기 생강 재배법 종자심기 심는방법 올해는 작년보다 10일 정도 벚꽃이 빨리 피었습니다.",
  },
  {
    id: 3,
    title: "감자 웃거름 주고 잘 자라요~",
    img: "url3.jpg",
    profileImg: "profile3.jpg",
    userName: "현이네파파",
    description:
      "4/14 금요일 엄니와 텃밭에 왔다 텃밭 적양파 1-2주 뒤면슬슬 비대기에 들어서며 양파가 생길 것 같다.",
  },
];

const PostCard = ({ title, img, profileImg, userName, description }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg">
      <img src={img} alt={title} className="w-full h-48 object-cover" />

      {/* 호버시 나타나는 props데이터 */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-white text-center">
        <img src={profileImg} className="w-12 h-12 rounded-full mb-2" />
        <h4 className="font-bold underline">{userName}</h4>
        <p className="text-xs mt-2">{description}</p>
      </div>

      <div className="bg-gray-800 text-white p-2 text-center text-sm">
        {title}
      </div>
    </div>
  );
};

export const MainPage = () => {
  return (
    <>
      <SubNavbar></SubNavbar>
      <HotTopicSection></HotTopicSection>
      <div className="grid grid-cols-4 gap-4 mr-20 ml-20">
        {/* 3칸 */}
        <div className="col-span-3 grid grid-cols-3 gap-4 ">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              img={post.img}
              profileImg={post.profileImg}
              userName={post.userName}
              description={post.description}
            />
          ))}
        </div>
        {/* 1칸 */}
        <div className="col-span-1">
          <img
            src={adImage}
            alt="광고 배너"
            className="w-full h-full object-cover rounded-lg"
          ></img>
        </div>
      </div>
    </>
  );
};
