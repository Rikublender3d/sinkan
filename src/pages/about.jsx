import Proflie from '../assets/member/profile1.jpg';
import Card1 from '../assets/aboutus/card1.png';
import { GrGrow } from "react-icons/gr";
import { GiTeamIdea } from "react-icons/gi";
import { MdCoPresent } from "react-icons/md";
export default function About() {
    return (
        <div className="relative text-center">
            <h2 className="inline-block p-3 bg-gradient-to-r from-[#F5A043] to-[#E45627] bg-clip-text text-6xl font-bold tracking-tight text-transparent mt-10" id="about">
                About
            </h2>
            <div className='max-w-6xl mx-auto'>
                <div class="md:flex justify-center items-to gap-4" data-aos="fade-up" data-aos-duration="1000">
                    <img src={Card1} className='md:w-1/2 h-full aspect-square' />
                    <div className='md:w-1/2 align-top mt-4 '>
                        <p class="mt-2 text-lg text-gray-500 text-left px-3 pt-3">What we are</p>
                        <h2 className='md:text-[33px] text-[27px] righteous-regular md:py-2 p-1'>Beyond 2020 NEXT PROJECTとは？</h2>
                        <p className='text-left text-xl block px-4 pb-5'>「Beyond2020NextProject」は、アントレプレナーシップ教育を通じて、次世代のリーダーを育成することを目的としたプロジェクトです。</p>
                        <div className='mt-12 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-2'>
                            <div className='align-bottom flip-up px-5 shadow-md rounded-md py-3 mx-4 md:mx-0 mb-5 md:mb-0' data-aos="flip-up" data-aos-duration="700" data-aos-delay="500">
                                <div className="flex items-center justify-center h-14 w-14 rounded-md bg-[#1c1e56] text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" class="w-7 h-7">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                                    </svg>
                                </div>
                                <div className='text-left mt-2'>
                                    <h3 class="text-2xl font-medium text-gray-900">Mission</h3>
                                    <p class="mt-2 text-lg text-gray-700">アントレプレナーシップを養成する</p>
                                </div>
                            </div>
                            <div className="flip-up px-5 shadow-md rounded-md py-3 mx-4 md:mx-0" data-aos="flip-up" data-aos-duration="700" data-aos-delay="800">
                                <div class="flex items-center justify-center h-14 w-14 rounded-md bg-[#1c1e56] text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" class="w-7 h-7">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div className='text-left mt-2'>
                                    <h3 class="text-2xl font-medium text-gray-900">Vision</h3>
                                    <p class="mt-2 text-lg text-gray-700">主体的な行動を起こし、イノベーションを創出し続ける</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="inline-block p-3 bg-gradient-to-r from-[#F5A043] to-[#E45627] bg-clip-text text-4xl font-bold tracking-tight text-transparent mt-10" id="mission">
                具体的な取り組み</h2>
                <div class="grid gap-14 md:grid-cols-3 md:gap-5 mx-5 mt-10">
                    <div class="rounded-lg bg-white p-6 text-center shadow-xl">
                        <div
                            class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
                                <GrGrow className='h-8 w-8'/>
                        </div>
                        <h1 class="text-darken mb-3 text-2xl font-medium lg:px-2">アントレプレナーシップを育む</h1>
                        <p class="px-4 text-gray-500">メンバーが創造的なアイデアを生み出し、挑戦する環境を提供します。ワークショップを通じて、ビジネスの基礎や問題解決能力を磨き、実践的なスキルを養うことができます。</p>
                    </div>
                    <div data-aos-delay="150" class="rounded-xl bg-white p-6 text-center shadow-xl">
                        <div
                            class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-rose-500 shadow-rose-500/40">
                                <GiTeamIdea className='h-8 w-8'/>
                        </div>
                        <h1 class="text-darken mb-3 text-2xl font-medium lg:px-2 ">アントレプレナーシップを実践する</h1>
                        <p class="px-4 text-gray-500">学生がアイデアを現実化し、ビジネスの成功に向けた実践的な経験を積めるようになります。</p>
                    </div>
                    <div data-aos-delay="300" class="rounded-xl bg-white p-6 text-center shadow-xl">
                        <div
                            class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-sky-500 shadow-sky-500/40">
                                <MdCoPresent className='h-8 w-8'/>
                        </div>
                        <h1 class="text-darken mb-3 text-2xl font-medium lg:px-2">アントレプレナーシップの普及に貢献する</h1>
                        <p class="px-4 text-gray-500">成功事例を発信することで、より多くの学生がアントレプレナーシップに関心を持ち、挑戦できる環境を整えます。</p>
                    </div>
                </div>
            <h2 className="inline-block p-3 bg-gradient-to-r from-[#F5A043] to-[#E45627] bg-clip-text text-5xl font-bold tracking-tight text-transparent mt-10">
                ご挨拶</h2>
            <div className="py-10 md:max-w-5xl mx-auto mt-10 md:flex items-center justify-between" data-aos="fade-up" data-aos-duration="1000">
                <div className="rounded-md  overflow-hidden md:w-1/2 h-1/2 mx-5 object-cover">
                    <img src={Proflie}
                        alt="Profile" />
                </div>
                <div className="text-center md:w-1/2">
                    <h3 className="text-2xl font-bold text-gray-800">松本綾香</h3>
                    <h4 className="text-lg text-gray-600">Beyond2020NEXTPROJECT 幹事長</h4>
                    <p className="px-5 mt-2 text-md text-gray-600">
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