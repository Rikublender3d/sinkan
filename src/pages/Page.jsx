import React from "react";
import { useParams } from "react-router-dom";
import { client } from "../lib/microcms";
import { useEffect, useState } from "react";
import { SiX, SiFacebook } from "@icons-pack/react-simple-icons";
import Test from '../assets/header.png';
const Breadcrumb = ({ title }) => {
  return (
    <nav className="flex items-center space-x-2 text-gray-500 text-sm my-4">
      <a href="/" className="hover:text-gray-700">ホーム</a>
      <span className="text-gray-400">/</span>
      <a href={`/blogs`} className="hover:text-gray-700">News</a>
      <span className="text-gray-400">/</span>
      <span className="font-semibold text-gray-700">  {title.length > 18 ? `${title.slice(0, 18)}...` : title}</span>
    </nav>
  );
};

async function getBlogPost(id) {
  const data = await client.get({
    endpoint: "blogs",
    contentId: id,
    queries: {
      fields: "id,title,body,category,tags,image,publishedAt",
    },
  });
  return data;
}

export default function BlogPostPage() {
  const shareURL = new URL(window.location.origin + window.location.pathname).toString();
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [transformedBody, setTransformedBody] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getBlogPost(id);

        // aタグをボタンに変換
        const transformed = data.body.replace(
          /<a\s+href="([^"]+)".*?<\/a>/g,
          (_, url) => {
            return `<button class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition"><a href="${url}" className="cursor-pointer" target="_blank" rel="noopener noreferrer">申し込みはこちら</a></button>`;
          }
        );

        setPost(data);
        setTransformedBody(transformed);
      } catch (error) {
        console.error("データ取得エラー:", error);
      }
    }
    fetchData();
  }, [id]);

  if (!post) {
    return <p className="text-center text-gray-600">読み込み中...</p>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <div className="flex justify-center ">
        <img src={Test} alt="ブログロゴ" className="object-cover h-[150px] md:h-auto md:w-full mt-12 md:mt-0" />
      </div>
      <div className="md:w-[90%]  mx-auto pb-8">
        <div className="container md:mx-auto p-8 mt-10 bg-white md:rounded-lg md:shadow-md hover:shadow-lg transition-shadow">
          {/* パンくずリスト */}
          <Breadcrumb category={post.category.name} title={post.title} />

          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6 border-b-2 border-gray-300 pb-2">
            {post.title}
          </h1>
          <p className="text-gray-600 mb-4">
            投稿日: {new Date(post.publishedAt).toLocaleDateString()} カテゴリー:{" "}
            <span className="px-3 py-1 text-sm rounded-md bg-blue-500 text-white shadow-md">
              {post.category.name}
            </span>
          </p>

          {/* 変換された記事本文 */}
          <div className="prose max-w-none text-gray-700 leading-relaxed link" dangerouslySetInnerHTML={{ __html: transformedBody }}></div>

          <div className="mt-8">
            <hr className="border-gray-300" />
            <h2 className="text-lg mt-8 mb-4">共有する</h2>
            <div className="flex items-center gap-6">
              <button
                onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareURL)}`, "_blank")}
                className="flex items-center gap-3 bg-white text-gray-700 px-5 py-2 rounded-full border border-gray-300 hover:bg-blue-50 transition-all duration-300 shadow-sm"
              >
                <SiX className="h-6 w-6" /> Twitterで共有
              </button>

              <button
                onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareURL)}`, "_blank")}
                className="flex items-center gap-3 bg-white text-gray-700 px-5 py-2 rounded-full border border-gray-300 hover:bg-blue-50 transition-all duration-300 shadow-sm"
              >
                <SiFacebook className="h-6 w-6" /> Facebookで共有
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
