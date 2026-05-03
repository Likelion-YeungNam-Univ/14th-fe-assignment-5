import React from 'react'
import dashboardimages1 from "/Users/it/Desktop/14th-fe-assignment-5/images/가나디1.jpeg"
import dashboardimages2 from "/Users/it/Desktop/14th-fe-assignment-5/images/가나디2.jpeg"
import notice from "/Users/it/Desktop/14th-fe-assignment-5/images/공지.png"


const DashboradList = [
    { id: 1, thumbnail: dashboardimages2, plus: "⋮", profile: notice, title: "Fe-14th", SmallTitle: "fe-14th", semester: "2026년 1학기" },
    { id: 2, color: "bg-yellow-300", textColor: "text-yellow-300", plus: "⋮", profile: notice, title: "0.사전 준비", SmallTitle: "0.사전 준비", semester: "2026년 1학기" },
    { id: 3, color: "bg-red-300", textColor: "text-red-300", plus: "⋮", profile: notice, title: "1. HTML & CSS ", SmallTitle: "1. HTML & CSS ", semester: "2026년 1학기" },
    { id: 4, color: "bg-blue-300", textColor: "text-blue-300", plus: "⋮", profile: notice, title: "2. JavaScript", SmallTitle: "2. JavaScript", semester: "2026년 1학기" },
    { id: 5, color: "bg-green-300", textColor: "text-green-300", plus: "⋮", profile: notice, title: "3. React", SmallTitle: "3. React", semester: "2026년 1학기" },
    { id: 6, color: "bg-orange-300", textColor: "text-orange-300", plus: "⋮", profile: notice, title: "4. Node.js", SmallTitle: "4. Node.js", semester: "2026년 1학기" },
    { id: 7, thumbnail: dashboardimages1, plus: "⋮", profile: notice, title: "2026년_Likelion", SmallTitle: "2026년_Likelion", semester: "2026년 1학기" },
    { id: 8, color: "bg-purple-300", textColor: "text-purple-300", plus: "⋮", profile: notice, title: "5. Routing", SmallTitle: "5. Routing", semester: "2026년 1학기" },
    { id: 9, color: "bg-gray-300", textColor: "text-gray-300", plus: "⋮", profile: notice, title: "6. useState", SmallTitle: "6. useState", semester: "2026년 1학기" },
    { id: 10, color: "bg-pink-300", textColor: "text-pink-300", plus: "⋮", profile: notice, title: "7. useEffect", SmallTitle: "7. useEffect", semester: "2026년 1학기" },    
];

const Dashboard = () => {
    return (
        <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-4 gap-x-2 gap-y-2">
            {DashboradList.map(form => (
                <div id={form.id} className="bg-white pt-4 pb-4 rounded-md shadow-xl w-60 h-72">
                    {/* main */}
                    <div className="relative">
                        {form.thumbnail ? (
                            <img className="rounded-s w-60 h-40" src={form.thumbnail} />
                        ) : (
                            <div className={` w-60 h-40 rounded-s ${form.color}`}></div>
                        ) }
                        <div className="absolute top-2 right-2 text-white text-2xl px-2 py-0.5">{form.plus}</div>
                    </div>
                    {/* info */}
                    <div className="flex justify-between">
                        <div className="flex space-x-2">
                            <div className="flex-none text-sm px-2 py-1 mt-1">
                                <div className={`font-bold ${form.textColor}`}>{form.title}</div>
                                <div className="text-gray-500">{form.SmallTitle}</div>
                                <div className="text-gray-400">{form.semester}</div>
                                <img className="w-5 h-5 m-2" src={form.profile} />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </div>
    )
}

export default Dashboard