import { useParams } from 'react-router-dom';
import { client } from '../lib/microcms';
import { useEffect } from 'react';
import { useState } from 'react';
import { SiX,SiFacebook} from '@icons-pack/react-simple-icons';
async function getBlogPost(id) {
  const data = await client.get({
    endpoint: 'blogs',
    contentId: id,
    queries: {
      fields: 'id,title,body,category,publishedAt', // 必要なフィールドを指定
    },
  });
  return data;
}

export default function BlogPostPage() {
  const shareURL = new URL(
    window.location.origin + window.location.pathname
  ).toString();
  const { id } = useParams(); // URLの動的パラメータからIDを取得
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getBlogPost(id); // データ取得
        setPost(data);
      } catch (error) {
        console.error('データ取得エラー:', error);
      }
    }
    fetchData();
  }, [id]);


  if (!post) {
    return <p></p>;
  }

  return (
    <div className='w-[90%] mx-auto'>
    <div className="break-all container md:mx-auto p-4 mt-20 mb-4 md:my-4 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-4">投稿日: {new Date(post.publishedAt).toLocaleDateString()} カテゴリー:{post.category.name}</p>
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.body }}></div>
      <div>
        <hr/>
        <h2 className="text-lg mt-8 mb-4">共有する</h2>
     <button onClick={() =>
      window.open(
        `https://twitter.com/intent/tweet?text=${encodeURIComponent('')}&url=${encodeURIComponent(shareURL)}`,
        '_blank'
      )} className="group inline-flex h-10 w-10 mr-[10px] items-center justify-center rounded-lg border border-slate-800 bg-black text-slate-400 transition-all duration-300  hover:text-white">
        <SiX className="h-5 w-5" />
      </button>
     <button
              onClick={() =>
                window.open(
                  `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareURL)}`,
                  '_blank'
                )
              }
              className="group inline-flex h-10 w-10 items-center justify-center rounded-lg   bg-[#3b5998] text-slate-400 transition-all duration-300 hover:text-white"
            >
              <SiFacebook className="h-5 w-5" />
            </button>
            </div>
    </div>
    </div>
  );
}
