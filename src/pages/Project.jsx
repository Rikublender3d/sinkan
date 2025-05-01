import one from '../assets/one.jpg';
import two from '../assets/two.jpg';
import three from '../assets/three.jpg';
import Image from '../assets/profile.jpg';
export default function Project() {
    return (
        <div className="relative text-center">
            <h2 className="inline-block p-3 bg-gradient-to-r from-[#F5A043] to-[#E45627] bg-clip-text text-6xl font-bold tracking-tight text-transparent mt-10" id="project">
                Project
            </h2>
            <div className='max-w-6xl mx-auto'>
                <div class="flex px-6 py-5 fade-up" data-aos="zoom-in" data-aos-duration="1000">
                    <div class="lg:flex grid-cols-2 rounded overflow-hidden shadow-lg" >
                        <img class="object-cover mx-auto lg:w-[50%]" src={one} alt="Sunset in the mountains" />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">国連を支える世界こども未来会議                                </div>
                            <p class="text-gray-700 text-base">
                                国連を支える世界こども未来会議とは、一般財団法人ピースコミュニケーション財団が主催する世界の子どもたちが集まって平和で豊かな世界について考えるプログラムです。私たちは2030年頃に成人する子どもたちが集い、「平和な世界」「豊かな世界」について語り合うピースコミュニケーション の場を作ることを目的とし、コミュニケーションサポーターとして議論の進行を担います。 2023年度は沖縄、浜松市、大阪、品川区、豊島区、北区で実施しました。そして、各地域で受賞したこどもたちと世界各国から集まるこどもたちが集う第4回国連を支える世界こども未来会議の開催を予定しています。
                            </p>
                        </div>
                    </div>
                </div>
                <div class="flex px-6 py-5 fade-up" data-aos="zoom-in" data-aos-duration="1000">
                    <div class="lg:flex  grid-cols-2 rounded overflow-hidden shadow-lg flex-row-reverse">
                        <img class="object-cover mx-auto lg:w-[50%]" src={two} alt="Sunset in the mountains" />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">アントレプレナーシップ教育                                </div>
                            <p class="text-gray-700 text-base">
                                アントレプレナーシップ教育プロジェクトは、私たちが普段大学や当団体などで学んだアントレプレナーシップを、イノベーションの創出を牽引する人材の育成を目指し、実践するプロジェクトです。現在は、小学校・中学校・高校に出張講義としてアントレプレナーシップワークショップを実施しています。 2023年度は、神奈川県立保健福祉大学が主催する川崎市立川崎高校附属中学校におけるアントレプレナーシップワークショップにファシリテーターとして授業の進行を務めました。
                            </p>
                        </div>
                    </div>
                </div>
                <div class="flex py-5 px-6 fade-up" data-aos="zoom-in" data-aos-duration="1000">
                    <div class="lg:flex grid-cols-2 rounded overflow-hidden shadow-lg">
                        <img class="object-cover mx-auto lg:w-[50%]" src={three} alt="Sunset in the mountains" />
                        <div class="px-6  py-4">
                            <div class="font-bold text-xl mb-2">SDGs教育事業                                </div>
                            <p class="text-gray-700 text-base">
                                SDGs×アントレプレナーシップ教育カリキュラムプロジェクトでは、小学生にSDGsとアントレプレナーシップを伝え、”持続可能な開発”ネイティブを育成することを目的として活動しています。これまで180名以上の小学生を対象に、SDGsの視点から、身近なテーマをベースに新しいアイデアを創出することを通してアントレプレナーシップの重要性を学ぶワークショップを実施してきました。
                            </p>
                        </div>
                    </div>
                </div>
                <div class="flex py-5 px-6 fade-up" data-aos="zoom-in" data-aos-duration="1000">
                    <div class="lg:flex flex-row-reverse grid-cols-2 rounded overflow-hidden shadow-lg text-center">
                        <img class="object-fill mx-auto" src={Image} alt="Sunset in the mountains" />
                        <div class="px-6 py-4 lg:w-[50%]">
                            <div class="font-bold text-xl mb-2">学生発企画</div>
                            <p class="text-gray-700 text-base">
                                私たちは、アントレプレナーシップの向上と縦横のネットワークの展開を狙いとし、各学生が自身で企画したイベントの開催を行なっております。イベントは早稲田大学やSHIBUYA QWS、TOKYO創業ステーションなどで開催しており、内容は各自の専門を活かしたアカデミックな領域からビジネスやアートに関する領域まで多岐に渡ります。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}