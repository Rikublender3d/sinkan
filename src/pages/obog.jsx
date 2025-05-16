import { useState } from "react";
function Obog() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const members = [
    { name: "服部真也斗", role: "Beyond Alumni メンバー" },
    { name: "遠藤竜仁", role: "Beyond Alumni メンバー" },
    { name: "平岡千香子", role: "Beyond Alumni メンバー" },,
  ];
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800">Beyond Alumniとは</h2>
      <ul className="mt-4 space-y-2 text-gray-700">
        <li>Beyond 2020 NEXT PROJECTのOB/OG団体</li>
      </ul>

      <h3 className="mt-6 text-xl font-semibold text-gray-800">活動内容</h3>
      <ul className="mt-2 space-y-2 text-gray-700 list-disc list-inside">
        <li>年2回、Year-end workshop & Snack Sparkを通じて、現役会員とOBOG会員のコラボレーションの場を企画開催する</li>
        <li>世代や業種を超えて気兼ねなくコンタクトできる会員限定プラットフォームを制作する</li>
      </ul>

      <h3 className="mt-6 text-xl font-semibold text-gray-800">ミッション（目的）</h3>
      <ul className="mt-2 space-y-2 text-gray-700 list-disc list-inside">
        <li>Beyond会員同士の創発を加速させる</li>
      </ul>

      <h3 className="mt-6 text-xl font-semibold text-gray-800">幹事メンバー</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
        {members.map((member, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold">
              {member.name.charAt(0)}
            </div>
            <h4 className="mt-3 text-lg font-semibold text-gray-800">{member.name}</h4>
            <p className="text-gray-600">{member.role}</p>
            <button
            onClick={() => {
              setSelectedMember(member);
              setIsOpen(true);
            }}
            className="mt-4 bg-[#355070] text-white py-2 px-4 rounded-full hover:bg-[#1e2d3d]"
          >
            詳細を見る
          </button>
          
            {isOpen && selectedMember && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800">{selectedMember.name}</h3>
                  <p className="text-gray-600">{selectedMember.role}</p>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="mt-4 bg-[#355070] text-white py-2 px-4 rounded-full hover:bg-[#1e2d3d]"
                  >
                    閉じる
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

    </div>

  );
}

export default Obog;
