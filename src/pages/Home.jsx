import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Image from '../assets/profile.jpg';
import { client } from '../lib/microcms';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
AOS.init();

// Component to fetch and display blog posts
export default function Home() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const data = await client.get({
                    endpoint: 'blogs', // 'blogs' is the microCMS endpoint name
                    queries: {
                        fields: 'id,title,image,category', // Retrieve 'id' and 'title'
                        limit: 3, // Fetch the latest 5 blog posts
                    },
                });
                setPosts(data.contents);
            }
            catch (error) {
                console.error('Error fetching posts:', error);
            }
        }
        fetchData();
    }, []);
    const categoryColor = {
        "イベント": "text-red-500",
        "ワークショップ": "text-purple-500",
        "お知らせ": "text-green-500",
        "活動報告": "text-blue-500",
    };
    return (
        <div className="relative">
            <div className="area w-auto h-screen absolute bg-gradient-to-l from-[#8f94fb] to-[#4e54c8] -z-10">
                <ul className="circles relative w-auto h-full overflow-hidden">
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
            <div className=" text-center fade-in" data-aos="fade-up" data-aos-duration="1000">
                <div className="h-screen w-auto flex justify-center items-center">
                    <h2 className="righteous-regular p-3 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-clip-text text-6xl font-bold tracking-tight text-transparent">
                        Beyond 2020 NEXT PROJECT
                    </h2>
                </div>
                <div>
                    <h2 className="p-3 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-clip-text text-6xl font-bold tracking-tight text-transparent">
                        News
                    </h2>
                    {posts.map((post) => (
                        <Link class="max-w-[900px] w-[90%] mx-auto my-3 block shadow-md rounded-lg hover:shadow-2xs focus:outline-hidden dark:border-neutral-700"
                            to={`/blogs/${post.id}`} key={post.id} data-aos="fade-in" data-aos-duration="1000">
                            <div class="relative flex items-center overflow-hidden">
                                <img class="w-32 sm:w-48 h-full absolute inset-0 object-cover rounded-s-lg" src={post.image.url} alt={post.title} />
                                <div class="grow p-4 ms-32 sm:ms-48">
                                    <div class="min-h-24 flex flex-col justify-center">
                                        <h3 class="font-semibold text-sm text-gray-800">
                                            <span className={`block text-left mb-1 text-sm leading-6 ${categoryColor[post.category.name] || "text-indigo-500"}`}>                                                {post.category.name}
                                            </span>
                                            <span class="block text-left text-gray-900 font-semibold text-lg">
                                                {post.title}
                                            </span>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                    <Link to="/blogs" class="my-3 group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200 duration-500">
                        <div class="translate-x-0 transition group-hover:-translate-x-[150%]">
                            一覧はこちら</div>
                        <div class="absolute translate-x-[150%] transition group-hover:translate-x-0">
                            一覧はこちら
                        </div>
                    </Link>
                </div>
                <h2 className="p-3 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-clip-text text-6xl font-bold tracking-tight text-transparent" id="about">
                    AboutUs
                </h2>
                <h3 className='mt-2 text-base text-gray-600'>Beyond 2020 Next Projectとは</h3>
                <div className="md:max-w-5xl mx-auto mt-10 md:flex items-center justify-between column-3" data-aos="fade-up" data-aos-duration="1000">
                    <img src={Image} alt="Profile" className="px-5 w-[90%] mx-auto rounded-full md:w-1/2 h-1/2" />
                    <div className="text-center md:w-1/2">
                        <p className="px-5 mt-2 text-2xl text-gray-600">
                            Beyond 2020 NEXT PROJECTは、
                            "アントレプレナーシップを養成する"ことをMISSIONに掲げた、早稲田大学発の学生団体です。<br/>アントレプレナーシップとは、起業家精神と直訳されますが、当団体では起業のみならず、全人類が持ち合わせるべきゼロイチ力と捉えています。<br/>高校生から大学院生の幅広い世代で構成されるメンバーは、これまで存在しなかった新しい価値を生み出す過程を経験します。
                        </p>
                        <Link to ="/about">
                        <button class="my-5 group relative h-12 overflow-hidden overflow-x-hidden rounded-md bg-neutral-950 px-8 py-2 text-neutral-50"><span class="relative z-10">詳しくはこちら</span><span class="absolute inset-0 overflow-hidden rounded-md"><span class="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-blue-500 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span></span></button>
                        </Link>
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