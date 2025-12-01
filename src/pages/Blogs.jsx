import React, { useEffect, useState } from 'react';
import { client } from '../lib/microcms';
import { Link } from 'react-router-dom';
import { getCachedData, setCachedData } from '../lib/cache';

export default function Blogs() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const [loading, setLoading] = useState(true);
  const postsPerPage = 9; // Number of posts per page

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        // キャッシュをチェック
        const cacheKey = `blogs_page_${currentPage}`;
        const cached = getCachedData(cacheKey);

        if (cached) {
          setPosts(cached);
          setLoading(false);
          return;
        }

        const data = await client.get({
          endpoint: 'blogs',
          queries: {
            fields: 'id,title,image,category',
            limit: postsPerPage,
            offset: (currentPage - 1) * postsPerPage, // Calculate offset based on page
          },
        });

        setPosts(data.contents);
        // キャッシュに保存
        setCachedData(cacheKey, data.contents);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [currentPage]); // Refetch data when currentPage changes

  const handleNextPage = () => setCurrentPage((prev) => prev + 1);
  const handlePreviousPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  const categoryColor = {
    "イベント": "text-red-500",
    "ワークショップ": "text-purple-500",
    "お知らせ": "text-green-500",
    "活動報告": "text-blue-500",
  };
  const Breadcrumb = () => {
    return (
      <nav className="flex items-center space-x-2 text-gray-500 text-sm my-4">
        <a href="/" className="hover:text-gray-700">ホーム</a>
        <span className="text-gray-400">/</span>
        <a href="/blogs" className="hover:text-gray-700">ニュース</a>
      </nav>
    );
  };
  return (
    <div className="flex flex-col items-center justify-center bg-gray-50">
      <div className="w-[90%] mx-auto mt-12">
        <Breadcrumb />
      </div>
      {loading ? (
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8 w-full">
          {[...Array(postsPerPage)].map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="aspect-video bg-gray-200 rounded-lg mb-6"></div>
              <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
              <div className="h-6 bg-gray-200 rounded w-full mb-4"></div>
              <div className="h-9 bg-gray-200 rounded w-32"></div>
            </div>
          ))}
        </div>
      ) : (
        <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8">
          {posts.map((post, index) => {
            const rowIndex = Math.floor(index / postsPerPage);
            const delay = rowIndex * 300;
            return (
              <li
                key={post.id}
                className="relative flex flex-col sm:flex-row xl:flex-col items-start"
                data-aos="fade-up"
                data-aos-delay={delay}
                data-aos-duration="1000"
              >
                <div className="order-1 sm:ml-6 xl:ml-0">
                  <h3 className="mb-1 text-slate-900 font-semibold">
                    <span className={`mb-1 block text-sm leading-6 text-indigo-500 ${categoryColor[post.category.name] || 'text-gray-500'}`}>
                      {post.category.name}
                    </span>
                    {post.title}
                  </h3>
                  <button key={post.id}>
                    <Link
                      className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-3"
                      to={`/blogs/${post.id}`}
                    >
                      詳しくはこちら
                    </Link>
                  </button>
                </div>
                {post.image && post.image.url && (
                  <img
                    src={post.image.url}
                    alt={post.title}
                    className="aspect-video h-auto mb-6 object-cover shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
                    width="1200"
                    height="640"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                )}
              </li>
            );
          })}
        </ul>
      )}
      <div className="flex justify-center mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="my-5 mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={posts.length < postsPerPage}
          className="my-5 ml-2 px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}