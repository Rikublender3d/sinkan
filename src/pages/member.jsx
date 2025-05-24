import Profile1 from '../assets/member/profile1.jpg';
import Profile2 from '../assets/member/profile2.jpg';
import Profile3 from '../assets/member/profile3.jpg';
import Profile4 from '../assets/member/profile4.png';
import Profile5 from '../assets/member/profile5.jpg';
import Profile6 from '../assets/member/profile6.jpg';
import Profile7 from '../assets/member/profile7.jpg';
import Profile8 from '../assets/member/profile8.jpg';
import Profile9 from '../assets/member/profile9.jpg';
import { SiFacebook, SiInstagram,SiX} from '@icons-pack/react-simple-icons';
import { FaExternalLinkAlt } from "react-icons/fa";
export default function Member() {

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 mt-10">幹事メンバー紹介</h1>
      <div class="my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto w-[90%] mx-auto">
        {[
          {
            name: '松本　綾香',
            role: '幹事長',
            introduction: '早稲田大学生物物性科学研究室 (朝日研究室) に所属。専門は物理化学、キラル科学、結晶光学。また早稲田大学本庄高等学院で非常勤講師を務める。Beyond 2020 NEXT PROJECTには2020年度から参加し、2022年度に総務、2023年度からは事務局長を務めたのち、2025年度より現職。国連を支える世界こども未来会議PJ、SDGs教育カリキュラムPJ、アントレプレナーシップ教育PJメンバー。',
            image: Profile1,
            site: "http://asahi-lab.jp/member/student/2023/matsumoto.html",
            school:"早稲田大学 先進理工学研究科 先進理工学専攻\n一貫制博士課程2年"
          },
          {
            name: '中島　真理子',
            role: '事務局長',
            introduction: '小学校教員を志し、早稲田大学教育学部教育学科初等教育学専攻に進学。また、東京都公立小学校にて学習支援員、早稲田大学本庄高等学院にて剣道部コーチを務める。現在、国内外の様々な視点から教育を学びながら専門分野を模索中。国連を支える世界子ども未来会議PJメンバー、アントレプレナーシップ教育PJメンバー。',
            image: Profile2,
            facebook: "https://www.facebook.com/profile.php?id=100089589111219",
            school:"早稲田大学教育学部教育学科初等教育学専攻"
          },
          {
            name: '笹野　朋子',
            role: '事務局次長',
            introduction: '早稲田大学情報数理応用・データサイエンス研究室（後藤研究室）に所属。Beyond 2020 Next Projectでは幹事 (総務担当)を務める。これまで、同団体の東京創業ステーションでの特別イベント「Think Beyond ！」-WiL General Partner・共同創業者 松本真尚氏による基調講演とビジネスアイデア構築-の実行委員長などを務めた。',
            image: Profile3,
            facebook: "https://www.facebook.com/profile.php?id=100083553781782",
            school:"早稲田大学創造理工学研究科経営デザイン専攻"
          },
          {
            name: 'Kaho',
            role: '総務',
            introduction: '2023年度よりBeyond 2020 NEXT PROJECT幹事メンバー。これまでに同団体にて、国連を支える世界こども未来会議プロジェクトに参画。また、「高校生のためのビジネスモデル構築講座」「自分の強みを活かすリーダーシップとは？-リーダーを支える側からその在り方を探る-」などで実行委員長を務める。興味分野は、教育、デザイン、そして、建築。',
            facebook:"https://www.facebook.com/profile.php?id=100084273409836",
            instagram:"https://www.instagram.com/kaho_black_swan",
            image:Profile4,
            school:"早稲田大学国際教養学部"
          },
          {
            name: "鶴岡秀士",
            role: "総務",
            introduction: "2024年度よりBeyond 2020 NEXT PROJECTメンバー。これまで同団体では、株式会社COLORSで共催している「起業家養成プロジェクト－暁－」の実行委員を務めたほか、「一人でできないことを達成するには？－人を動かす起業の要諦－」で実行委員長を務めている。広告関連会社でマーケティングコンテンツの作成を経験した。現在は、店舗支援を行っているベンチャー企業でマーケティング施策の運用を横断的に経験している。",
            image: Profile8,
            facebook:"https://www.facebook.com/profile.php?id=100058251858947",
            school:"早稲田大学創造理工学部経営システム工学科3年"
          },
          {
            name: "新見蓮",
            role: "総務",
            introduction: "フォトグラファー/PRプランナー。教育系インパクトスタートアップの執行役員/事業責任者として、機会格差や情報格差の解消に取り組んでいる。大学ではコミュニケーションを専門に、世界各地を巡りながら、言語・コンテクスト・広告表現の関係を研究中。誰もが関わる一方で、難度が高いと言われる「教育」の領域に、インパクトスタートアップとして挑み、現場から未来のスタンダードをつくろうとしている。",
            image: Profile9,
            site:"https://my.prairie.cards/u/ren2130",
            school:"早稲田大学社会科学部"
          },
          {
            name: "天野　実来",
            role: "広報",
            introduction: "N高等学校在籍時に培ったプログラミングスキルを活かし、WebサイトやWebアプリケーションの制作等を個人で手がけながら法人化を目指している。\nまた、高校時代にXRを活用した教育事例に強い関心を持ち、教育格差のない社会を実現するための活動に注力している。\n今年の春より株式会社GMO NIKKOでエンジニアのインターン活動を行っている。",
            image: Profile5,
            facebook:"https://www.facebook.com/profile.php?id=100078989904621",
            site:"https://rikublender3d.github.io/portfolio/",
            school:"早稲田大学人間科学部人間情報科学科1年"
          },
          {
            name: "濵田　快志",
            role: "広報",
            introduction: "これまでに多くのビジコンや、アントレプレナーシップの講座、団体の立ち上げを経験。個人ではタクシー業界が持つ課題に興味を持ち、業界を変える新型タクシー配車アプリの開発を志す。昨年の春から、株式会社newmoでインターン活動を行っている。",
            image: Profile6,
            instagram: "https://www.instagram.com/kaigon_11/",
            X: "https://x.com/kaishi_hamada",
            school:"早稲田大学政治経済学部経済学科"
          },
          {
            name: "本田 瑛大",
            role: "広報",
            introduction: "2023年度よりBeyond 2020 NEXT PROJECT幹事メンバー。同団体にて、「国連を支える世界こども未来会議」に携わる。これまで「感じてみようアントレプレナーシップ愛知」の実行委員長。高校時代は『常識を覆す選択』と挑戦を体現し、自身の『人生に彩り』をくわえてきた。大学時代は、環境関係なく日本の若者が挑戦できる居場所を自ら見つけることができる社会を構想することを目標とする。",
            image: Profile7,
            instagram:"https://www.instagram.com/akito.honda.official?igsh=MTlhdGJ0cmo2c2s3Yw%3D%3D&utm_source=qr",
            facebook:"https://www.facebook.com/share/162Yhp1WNn/?mibextid=wwXIfr",
            school:"同志社大学社会学部"
          },
        ].map((profile) => (
          <div class="flex flex-col bg-white shadow-lg rounded-lg my-6">
            <div class="m-2.5 overflow-hidden rounded-md h-80 flex justify-center items-center">
              <img class="aspect-square object-cover object-top" src={profile.image} alt="profile-picture" />
            </div>
            <div>
              <div class="p-6 text-center">
                <h4 class="mb-1 text-xl font-semibold text-slate-800">
                  {profile.name}
                </h4>
                <p
                  class="mb-1 text-md font-semibold text-slate-500 uppercase">
                  {profile.role}
                </p>
                <p class="text-sm font-semibold text-slate-500 uppercase whitespace-pre-wrap">
                  {profile.school}
                </p>
                <p class="text-base text-slate-600 mt-2 font-light whitespace-pre-wrap">
                  {profile.introduction}
                </p>
              </div>
              <div class="flex justify-center p-6 pt-2 gap-7">
                {profile.site ?
                  <button
                    onClick={() =>
                      window.open(
                        profile.site,
                        '_blank'
                      )
                    }
                    className="group inline-flex h-12 w-12 items-center justify-center rounded-xl border border-slate-800 bg-gray-800 text-slate-400 transition-all duration-300 hover:border-slate-400 hover:text-white"
                  >
                    <FaExternalLinkAlt className="h-5 w-5" />
                  </button>
                  : null}
                {profile.instagram ?
                  <button
                    onClick={() =>
                      window.open(
                        profile.instagram,
                        '_blank'
                      )
                    }
                    className="group inline-flex h-12 w-12 items-center justify-center rounded-xl border border-slate-800 bg-gray-800 text-slate-400 transition-all duration-300 hover:border-slate-400 hover:text-white"
                  >
                    <SiInstagram className="h-5 w-5" />
                  </button>
                  : null}
                {profile.facebook ?
                  <button
                    onClick={() =>
                      window.open(
                        profile.facebook,
                        '_blank'
                      )
                    }
                    className="group inline-flex h-12 w-12 items-center justify-center rounded-xl border border-slate-800 bg-gray-800 text-slate-400 transition-all duration-300 hover:border-slate-400 hover:text-white"
                  >
                    <SiFacebook className="h-5 w-5" />
                  </button>
                  : null}
                {profile.X ?
                  <button
                    onClick={() =>
                      window.open(
                        profile.X,
                        '_blank'
                      )
                    }
                    className="group inline-flex h-12 w-12 items-center justify-center rounded-xl border border-slate-800 bg-gray-800 text-slate-400 transition-all duration-300 hover:border-slate-400 hover:text-white"
                  >
                    <SiX className="h-5 w-5" />
                  </button>
                  : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}