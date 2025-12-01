import React from "react";
import { useParams, Link } from "react-router-dom";
import { client } from "../lib/microcms";
import { useEffect, useState } from "react";
import { SiX, SiFacebook } from "@icons-pack/react-simple-icons";
import { getCachedData, setCachedData } from "../lib/cache";
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

// スケルトンローディングコンポーネント
const SkeletonLoader = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <div className="flex justify-center">
        <div className="h-[150px] md:h-[200px] w-full md:w-[90%] bg-gray-200 animate-pulse rounded mt-12"></div>
      </div>
      <div className="md:w-[90%] mx-auto pb-8">
        <div className="container md:mx-auto p-8 mt-10 bg-white md:rounded-lg md:shadow-md">
          <div className="h-4 bg-gray-200 animate-pulse rounded w-1/3 mb-4"></div>
          <div className="h-10 bg-gray-200 animate-pulse rounded w-3/4 mb-6"></div>
          <div className="h-6 bg-gray-200 animate-pulse rounded w-1/2 mb-8"></div>
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 animate-pulse rounded"></div>
            <div className="h-4 bg-gray-200 animate-pulse rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 animate-pulse rounded w-4/6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

async function getBlogPost(id) {
  // キャッシュをチェック
  const cached = getCachedData(`post_${id}`);
  if (cached) {
    return cached;
  }

  const data = await client.get({
    endpoint: "blogs",
    contentId: id,
    queries: {
      fields: "id,title,body,category,tags,image,publishedAt",
    },
  });

  // キャッシュに保存
  setCachedData(`post_${id}`, data);
  return data;
}

async function getRelatedPosts(category, currentPostId, limit = 3) {
  // カテゴリーIDを取得（オブジェクトまたは文字列のどちらでも対応）
  const categoryId = category?.id || category;
  if (!categoryId) {
    return [];
  }

  const cacheKey = `related_${categoryId}_${currentPostId}`;
  const cached = getCachedData(cacheKey);
  if (cached) {
    return cached;
  }

  try {
    // microCMSのフィルター構文に合わせて調整
    const data = await client.get({
      endpoint: "blogs",
      queries: {
        fields: "id,title,image,category,publishedAt",
        filters: `category[equals]${categoryId}`,
        limit: limit + 1, // 現在の記事を除外するため+1
        orders: "-publishedAt",
      },
    });

    // 現在の記事を除外
    const relatedPosts = (data.contents || []).filter(post => post.id !== currentPostId).slice(0, limit);
    setCachedData(cacheKey, relatedPosts);
    return relatedPosts;
  } catch (error) {
    console.error("関連記事取得エラー:", error);
    return [];
  }
}

export default function BlogPostPage() {
  const shareURL = new URL(window.location.origin + window.location.pathname).toString();
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [transformedBody, setTransformedBody] = useState("");
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
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

        // 関連記事を取得（カテゴリーが存在する場合）
        if (data.category) {
          const related = await getRelatedPosts(data.category, id);
          setRelatedPosts(related);
        }
      } catch (error) {
        console.error("データ取得エラー:", error);
        setError("記事の読み込みに失敗しました。もう一度お試しください。");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

  if (loading) {
    return <SkeletonLoader />;
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 text-lg mb-4">{error || "記事が見つかりませんでした"}</p>
          <Link to="/blogs" className="text-blue-500 hover:underline">
            記事一覧に戻る
          </Link>
        </div>
      </div>
    );
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

          {/* メイン画像（控えめに追加） */}
          {post.image && post.image.url && (
            <div className="mb-6">
              <img
                src={post.image.url}
                alt={post.title}
                className="w-full h-auto rounded-lg object-cover"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          )}

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

        {/* 関連記事セクション（控えめに追加） */}
        {relatedPosts.length > 0 && (
          <div className="container md:mx-auto p-8 mt-8 bg-white md:rounded-lg md:shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">関連記事</h2>
            <div className="space-y-4">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blogs/${relatedPost.id}`}
                  className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-medium text-gray-800 mb-1">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {relatedPost.category?.name && (
                      <span className="mr-2">{relatedPost.category.name}</span>
                    )}
                    {new Date(relatedPost.publishedAt).toLocaleDateString()}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
