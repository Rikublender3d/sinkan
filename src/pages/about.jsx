import Chart from 'react-apexcharts';
import Proflie from '../assets/member/profile1.jpg';
export default function About() {
    const options = {
        labels: [
            '高校生',
            '大学生・院生',
            'OB・OG',
            '社会人',
            'その他'
        ],
        colors: [
            '#FF4560',
            '#008FFB',
            '#00E396',
            '#775DD0',
            '#FEB019',
        ],
        legend: {
            onItemClick: {
                toggleDataSeries: false,
            },
        },
        states: {
            active:{
                filter: {
                    type: 'none',
                },
            },
            hover: {
                filter: {
                    type: 'none',
                },
            },
            normal: {
                filter: {
                    type: 'none',
                },
            },
        },
        chart: {
            type: 'donut',
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            pie: {
                expandOnClick: false,

                donut: {
                    size: '60%',
                    labels: {
                        show: true,
                        name: {
                            fontSize: '22px',
                            color: '#000',
                            offsetY: 10,
                        },
                    },
                },
            },
        },
    }
    const series = [45, 34, 21, 5, 5];
    return (
        <div className="relative text-center">
            <h2 className="p-3 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-clip-text text-6xl font-bold tracking-tight text-transparent mt-10" id="about">
                About
            </h2>
            <div className='max-w-6xl mx-auto'>
                <p className='text-center text-lg'>「Beyond2020NextProject」は、アントレプレナーシップ教育を通じて、次世代のリーダーを育成することを目的としたプロジェクトです。</p>
            </div>
            <h2 className="p-3 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-clip-text text-6xl font-bold tracking-tight text-transparent mt-10">
                ご挨拶</h2>
            <div className="md:max-w-5xl mx-auto mt-10 md:flex items-center justify-between column-3" data-aos="fade-up" data-aos-duration="1000">
                <img src={Proflie}
                    alt="Profile" className="px-5 mx-auto rounded-lg md:w-1/2 h-1/2" />
                <div className="text-center md:w-1/2">
                    <h3 className="text-2xl font-bold text-gray-800">早稲田花子</h3>
                    <h4 className="text-lg text-gray-600">代表</h4>
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
            <h2 className="p-3 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-clip-text text-6xl font-bold tracking-tight text-transparent mt-10" id="mission">
                組織図</h2>
            <div className='max-w-xl mx-auto'>
                <div>
                    <Chart options={options} series={series} type="donut" />
                </div>
            </div>
        </div>
    )
};