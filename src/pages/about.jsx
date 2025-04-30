import Chart from 'react-apexcharts';
import Proflie from '../assets/member/profile1.jpg';
import Card1 from '../assets/aboutus/card1.png';
export default function About() {
    return (
        <div className="relative text-center">
            <h2 className="p-3 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-clip-text text-6xl font-bold tracking-tight text-transparent mt-10" id="about">
                About
            </h2>
            <div className='max-w-6xl mx-auto'>
                <div class="flex justify-center items-to gap-4" data-aos="fade-up" data-aos-duration="1000">
                    <img src={Card1} className='w-1/2 h-full aspect-square' />
                    <div className='w-1/2 align-top mt-4'>
                    <p class="mt-2 text-lg text-gray-500 text-left px-3 pt-3">What we are</p>
                        <h2 className='text-[33px] righteous-regular py-2'>Beyond 2020 NEXT PROJECTとは？</h2>
                        <p className='text-left text-lg block px-4 pb-5'>「Beyond2020NextProject」は、アントレプレナーシップ教育を通じて、次世代のリーダーを育成することを目的としたプロジェクトです。</p>
                        <div className='mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2'>
                            <div className='align-bottom flip-up' data-aos="flip-up" data-aos-duration="700" data-aos-delay="500">
                                <div className="flex items-center justify-center h-14 w-14 rounded-md bg-indigo-500 text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" class="w-7 h-7">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                                    </svg>
                                </div>
                                <div className='text-left mt-2'>
                                    <h3 class="text-2xl font-medium text-gray-900">Mission</h3>
                                    <p class="mt-2 text-lg text-gray-500">アントレプレナーシップを養成する</p>
                                </div>
                            </div>
                            <div className="flip-up" data-aos="flip-up" data-aos-duration="700" data-aos-delay="800">
                                <div class="flex items-center justify-center h-14 w-14 rounded-md bg-indigo-500 text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" class="w-7 h-7">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div className='text-left mt-2'>
                                    <h3 class="text-2xl font-medium text-gray-900">Vision</h3>
                                    <p class="mt-2 text-lg text-gray-500">主体的な行動を起こし、イノベーションを創出し続ける</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="p-3 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-clip-text text-6xl font-bold tracking-tight text-transparent mt-10">
                ご挨拶</h2>
            <div className="md:max-w-5xl mx-auto mt-10 md:flex items-center justify-between" data-aos="fade-up" data-aos-duration="1000">
                <img src={Proflie}
                    alt="Profile" className="px-5 mx-auto rounded-lg md:w-1/2 h-1/2" />
                <div className="text-center md:w-1/2">
                    <h3 className="text-2xl font-bold text-gray-800">松本綾香</h3>
                    <h4 className="text-lg text-gray-600">Beyond2020NEXTPROJECT 幹事長</h4>
                    <p className="px-5 mt-2 text-lg text-gray-600">
                        Beyond 2020 NEXT PROJECTは、新しい挑戦に踏み出す仲間と出会い、自分自身も一歩を踏み出せる、刺激的な場所です。
                        私自身、大学1年生のときに団体顧問の朝日先生・一木先生、そしてBeyondに出会い、キャンパスライフはもちろん、世界の見え方まで大きく変わりました。
                        いま私たちが生きるのは、未来の予測が困難な“VUCA時代”。そんな不確実な時代だからこそ、変化を恐れず、新しい価値を創造し続ける「アントレプレナーシップ」がより一層求められています。
                        私たちは「アントレプレナーシップ」を、
                        育む／実践する／普及に貢献する
                        という3つの軸で日々活動しています。
                        私たちは、イベントサークルでも、起業サークルでもありません。
                        「やってみたい気持ちはあるけれど、どう形にすればいいか分からない」
                        「志を持つ仲間と出会いたい」
                        そんなあなたこそ、Beyondで新たな一歩を踏み出してみませんか？
                        熱い想いを抱えた若き挑戦者たちが、あなたと出会える日を心から楽しみにしています。

                    </p>
                </div>
            </div>

        </div>
    )
};