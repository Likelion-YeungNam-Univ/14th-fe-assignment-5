const categoryList = [
  { id: 1, category: "전체" },
  { id: 2, category: "스포츠" },
  { id: 3, category: "음악" },
  { id: 4, category: "뉴스" },
  { id: 5, category: "요리" },
  { id: 6, category: "새로운 맞춤형 동영상" },
];

const Category = () => {
  return (
    <div className="flex space-x-2">
      {categoryList.map((category) => (
        <div
          id={category.id}
          className="bg-gray-300 py-2 px-4 text-sm rounded-lg"
        >
          {category.category}
        </div>
      ))}
    </div>
  );
};

export default Category;
