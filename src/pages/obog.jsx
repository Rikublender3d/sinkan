import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient"; // 作成したsupabaseClient.jsをインポート

function Obog() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [otherMembers, setOtherMembers] = useState([]); // Supabaseから取得する一般メンバーを格納
  const [executiveMembers, setExecutiveMembers] = useState([]); // Supabaseから取得する幹事メンバーを格納
  const [loading, setLoading] = useState(true); // データのロード状態

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        setLoading(true);

        // 幹事メンバーの取得
        const { data: kanjiData, error: kanjiError } = await supabase
          .from('members')
          .select('*')
          .eq('is_kanji', true); // is_kanjiがtrueのメンバーをフィルタリング

        if (kanjiError) {
          throw kanjiError;
        }
        setExecutiveMembers(kanjiData);

        // 一般メンバーの取得 (is_kanjiがfalseまたはnullのメンバー)
        const { data: otherData, error: otherError } = await supabase
          .from('members')
          .select('*')
          .eq('is_kanji', false); // is_kanjiがfalseのメンバーをフィルタリング
        // または .not('is_kanji', 'eq', true) でis_kanjiがtrueではないメンバーを取得することもできます

        if (otherError) {
          throw otherError;
        }
        setOtherMembers(otherData);

      } catch (error) {
        console.error("Error fetching members:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []); // コンポーネントのマウント時に一度だけ実行

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
      <h2 className="text-2xl font-semibold text-gray-800 ">Beyond Alumniとは</h2>
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
      {loading ? (
        <p>幹事メンバーをロード中...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {executiveMembers.map((member) => ( // executiveMembersを使用
            <div key={member.id} className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center">
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
            </div>
          ))}
        </div>
      )}

      <h3 className="mt-6 text-xl font-semibold text-gray-800">メンバー</h3>
      {loading ? (
        <p>その他のメンバーをロード中...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {otherMembers.map((member) => ( // otherMembersを使用
            <div key={member.id} className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center">
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
            </div>
          ))}
        </div>
      )}

      {isOpen && selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-lg max-w-md w-full max-h-[80vh] overflow-y-auto">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-4">
                {selectedMember.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{selectedMember.name}</h3>
                {selectedMember.name_rubby && (
                  <p className="text-sm text-gray-500">({selectedMember.name_rubby})</p>
                )}
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-gray-700">職種・専門領域</h4>
                <p className="text-gray-600">{selectedMember.field_of_expertise}</p>
              </div>

              {selectedMember.role && (
                <div>
                  <h4 className="font-semibold text-gray-700">所属</h4>
                  <p className="text-gray-600">{selectedMember.role}</p>
                </div>
              )}

              {selectedMember.operational_area && (
                <div>
                  <h4 className="font-semibold text-gray-700">活動地</h4>
                  <p className="text-gray-600">{selectedMember.operational_area}</p>
                </div>
              )}
              {selectedMember.history && (
                <div>
                  <h4 className="font-semibold text-gray-700">経歴</h4>
                  <p className="text-gray-600">{selectedMember.history}</p>
                </div>
              )}

              {selectedMember.message && (
                <div>
                  <h4 className="font-semibold text-gray-700">メッセージ</h4>
                  <p className="text-gray-600">{selectedMember.message}</p>
                </div>
              )}
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="mt-6 w-full bg-[#355070] text-white py-2 px-4 rounded-full hover:bg-[#1e2d3d] transition-colors"
            >
              閉じる
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Obog;