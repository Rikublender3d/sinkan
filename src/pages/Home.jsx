import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Image from '../assets/profile.jpg';
import one from '../assets/one.jpg';
import two from '../assets/two.jpg';
import three from '../assets/three.jpg';
AOS.init();
export default function Home() {
    return (
        <div className="relative">
            <div className="area w-full h-screen absolute bg-gradient-to-l from-[#8f94fb] to-[#4e54c8] -z-10">
                <ul className="circles relative w-full h-full overflow-hidden">
                    <li className="circle circle1"></li>
                    <li className="circle circle2"></li>
                    <li className="circle circle3"></li>
                    <li className="circle circle4"></li>
                    <li className="circle circle5"></li>
                    <li className="circle circle6"></li>
                    <li className="circle circle7"></li>
                    <li className="circle circle8"></li>
                    <li className="circle circle9"></li>
                    <li className="circle circle10"></li>
                </ul>
            </div>
            <div className="mx-auto w-full text-center fade-in" data-aos="fade-up" data-aos-duration="1000">
                <div className="h-screen w-full flex justify-center items-center">
                    <h2 className="righteous-regular p-3 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-clip-text text-6xl font-bold tracking-tight text-transparent">
                        Beyond 2020 NEXT PROJECT
                    </h2>
                </div>
                    <h2 className="p-3 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-clip-text text-6xl font-bold tracking-tight text-transparent" id="about">
                        AboutUs
                    </h2>
                    <h3 className='mt-2 text-base text-gray-600'>Beyond 2020 Next Projectとは</h3>
                    <div className="md:max-w-5xl mx-auto mt-10 md:flex items-center justify-between gap-6 column-3" data-aos="fade-up" data-aos-duration="1000">
                        <img src={Image} alt="Profile" className="px-5 w-full rounded-full md:w-1/2 h-1/2" />
                        <div className="text-left md:w-1/2">
                            <p className="px-5 mt-2 text-2xl text-gray-600">
                                Beyond 2020 NEXT PROJECTは、
                                "アントレプレナーシップを養成する"ことをMISSIONに掲げた、早稲田大学発の学生団体です。アントレプレナーシップとは、起業家精神と直訳されますが、当団体では起業のみならず、全人類が持ち合わせるべきゼロイチ力と捉えています。高校生から大学院生の幅広い世代で構成されるメンバーは、これまで存在しなかった新しい価値を生み出す過程を経験します。
                            </p>
                        </div>
                    </div>
                    <h2 className="p-3 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-clip-text text-6xl font-bold tracking-tight text-transparent mt-10" id="project">
                        Project
                    </h2>
                    <div className="w-[100%] flex-wrap md:flex justify-evenly  mt-10 items-left">
                        <div class="my-5 flex-col md:w-[45%] mx-5  rounded overflow-hidden shadow-2xl" data-aos="flip-up" data-aos-duration="500">
                            <img class="object-cover w-full mx-auto" src={one} alt="Sunset in the mountains"></img>
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">国連を支える世界こども未来会議</div>
                                <p class="text-gray-700 text-base">
                                    国連を支える世界こども未来会議とは、一般財団法人ピースコミュニケーション財団が主催する世界の子どもたちが集まって平和で豊かな世界について考えるプログラムです。私たちは2030年頃に成人する子どもたちが集い、「平和な世界」「豊かな世界」について語り合うピースコミュニケーション の場を作ることを目的とし、コミュニケーションサポーターとして議論の進行を担います。
                                    2023年度は沖縄、浜松市、大阪、品川区、豊島区、北区で実施しました。そして、各地域で受賞したこどもたちと世界各国から集まるこどもたちが集う第4回国連を支える世界こども未来会議の開催を予定しています。
                                </p>
                            </div>
                        </div>
                        <div class="my-5 flex-col md:w-[45%] mx-5 rounded overflow-hidden shadow-lg" data-aos="flip-up" data-aos-duration="1000">
                            <img class="object-cover w-full mx-auto" src={two} alt="Sunset in the mountains"></img>
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">アントレプレナーシップ教育</div>
                                <p class="text-gray-700 text-base">
                                    アントレプレナーシップ教育プロジェクトは、私たちが普段大学や当団体などで学んだアントレプレナーシップを、イノベーションの創出を牽引する人材の育成を目指し、実践するプロジェクトです。現在は、小学校・中学校・高校に出張講義としてアントレプレナーシップワークショップを実施しています。
                                    2023年度は、神奈川県立保健福祉大学が主催する川崎市立川崎高校附属中学校におけるアントレプレナーシップワークショップにファシリテーターとして授業の進行を務めました。
                                </p>
                            </div>
                        </div>
                        <div class="my-5 flex-col md:w-[45%] mx-5 rounded overflow-hidden shadow-lg" data-aos="flip-up" data-aos-duration="1500">
                            <img class="object-cover w-full mx-auto" src={three} alt="Sunset in the mountains"></img>
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">SDGs教育事業                            </div>
                                <p class="text-gray-700 text-base">
                                    SDGs×アントレプレナーシップ教育カリキュラムプロジェクトでは、小学生にSDGsとアントレプレナーシップを伝え、”持続可能な開発”ネイティブを育成することを目的として活動しています。これまで180名以上の小学生を対象に、SDGsの視点から、身近なテーマをベースに新しいアイデアを創出することを通してアントレプレナーシップの重要性を学ぶワークショップを実施してきました。
                                </p>
                            </div>
                        </div>
                        <div class="my-5 flex-col md:w-[45%] mx-5 rounded overflow-hidden shadow-lg" data-aos="flip-up" data-aos-duration="2000">
                            <img class="object-cover mx-auto" src={Image} alt="Sunset in the mountains"></img>
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">学生発企画 </div>
                                <p class="text-gray-700 text-base">
                                    私たちは、アントレプレナーシップの向上と縦横のネットワークの展開を狙いとし、各学生が自身で企画したイベントの開催を行なっております。イベントは早稲田大学やSHIBUYA QWS、TOKYO創業ステーションなどで開催しており、内容は各自の専門を活かしたアカデミックな領域からビジネスやアートに関する領域まで多岐に渡ります。
                                </p>
                            </div>
                        </div>
                    </div>
                    <h2 className="p-3 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-clip-text text-6xl font-bold tracking-tight text-transparent mt-10" id="shedule">
                        Schedule
                    </h2>
                    <div>
                        新入生歓迎会の開催を予定しています。<br></br>
                        画像埋め込み
                    </div>
                </div>
            </div>
    )
}