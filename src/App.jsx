import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from './pages/Blogs';
import BlogPostPage from './pages/page';
import Login from './pages/login';
import { SiX, SiFacebook, SiInstagram } from '@icons-pack/react-simple-icons';
import Member from './pages/member';
import { useState } from 'react';
import Project from './pages/Project';
import ScrollToTop from './component/ScrollToTop';
import About from './pages/About';
import OBOG from './pages/obog';
import PrivateRoute from "./component/PrivateRoute";
import Contact from './pages/contact';
import { ChevronDownIcon } from 'lucide-react';
import { Menu } from '@headlessui/react';
function App() {
  const [isOpen, setOpen] = useState(false);
  const handlemenuToggle = () => {
    setOpen(!isOpen);
  };
  return (
    <div className="relative">
      <button onClick={handlemenuToggle} type="button" aria-label="メニューボタン" className="z-40 space-y-2 fixed top-5 right-5 md:hidden">
        <div className={isOpen ? 'w-8 h-0.5 bg-gray-400 translate-y-2.5 rotate-45 transition duration-500 ease-in-out' :
          'w-8 h-0.5 bg-gray-400 transition duration-500 ease-in-out'} />
        <div className={isOpen ? 'opacity-0 transition duration-500 ease-in-out' : 'w-8 h-0.5 bg-gray-400 transition duration-500 ease-in-out'} />
        <div className={isOpen ? 'w-8 h-0.5 bg-gray-400 -rotate-45 transition duration-500 ease-in-out' : 'w-8 h-0.5 bg-gray-400 transition duration-500 ease-in-out'} />
      </button>
      {isOpen ? (
        <nav
          className="z-30 fixed bg-white right-0 top-0 w-8/12 h-screen flex flex-col justify-between pt-8 ease-linear duration-500"
          style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
        >
          <ul className="flex flex-col items-center w-full text-gray-900">
            <li className="mt-8 p-3 w-full text-center text-lg font-semibold border-b border-gray-300 hover:text-[#355070] hover:bg-gray-100 transition-colors">
              <Link to="/">Home</Link>
            </li>
            <li className="p-3 w-full text-center text-lg font-semibold border-b border-gray-300 hover:text-[#355070] hover:bg-gray-100 transition-colors">
              <Link to="/blogs">お知らせ</Link>
            </li>
            <li className="p-3 w-full text-center text-lg font-semibold border-b border-gray-300 hover:text-[#355070] hover:bg-gray-100 transition-colors">
              <Link to="/about">AboutUs</Link>
            </li>
            <li className="p-3 w-full text-center text-lg font-semibold border-b border-gray-300 hover:text-[#355070] hover:bg-gray-100 transition-colors">
              <Link to="/project">活動内容</Link>
            </li>
            <li className="p-3 w-full text-center text-lg font-semibold hover:text-[#355070] border-b border-gray-300 hover:bg-gray-100 transition-colors">
              <Link to="/member">運営メンバー紹介</Link>
            </li>
            <li className="p-3 w-full text-center text-lg font-semibold hover:text-[#355070] hover:bg-gray-100 transition-colors">
              <Link to="/contact">お問い合わせ</Link>
            </li>
          </ul>
          {/* OB/OGとSNSセクション */}
          <div className="w-full flex flex-col items-center pb-6">
            <ul className="w-full">
              <li className="p-3 w-full text-center text-base font-medium border-b border-gray-200">

              </li>
              <li className="p-3 w-full text-center text-base font-medium border-t border-gray-200">
                <Link to="/obog" className="text-gray-600 hover:text-cyan-500 transition-colors">
                  Alumniの方はこちらから
                </Link>
              </li>
            </ul>
            <div className="mt-4 text-sm text-gray-400">
              <span>Follow us on Social Media!</span>
            </div>
          </div>
        </nav>
      ) : null}
      {/* ヘッダーセクション */}
      <header className="py-6 hidden md:block">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="righteous-regular text-[#1c1e56] text-3xl font-bold">
            Beyond2020NextProject
          </Link>
          <div className="space-x-8 flex items-center">
            <Link to="/" className="text-sm font-medium text-[#3E5465] transition duration-200 hover:opacity-60">
              Home
            </Link>
            <Link to="/blogs" className="text-sm font-medium text-[#3E5465] transition duration-200 hover:opacity-60">
              お知らせ
            </Link>
            <Menu as="div" className="relative">
              {({ open }) => (
                <>
                  <Menu.Button className="text-sm font-medium text-[#3E5465] flex items-center transition duration-200 hover:opacity-60">
                  私たちについて
                    <ChevronDownIcon className={`w-5 h-5 ml-1 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
                  </Menu.Button>
                  <Menu.Items className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-40 bg-white border rounded-lg shadow-lg">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/about"
                          className={`block px-4 py-2 text-sm text-[#3E5465] ${active ? 'bg-gray-100' : ''}`}
                        >
                          概要
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/project"
                          className={`block px-4 py-2 text-sm text-[#3E5465] ${active ? 'bg-gray-100' : ''}`}
                        >
                          活動内容
                        </Link>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </>
              )}
            </Menu>
            <Link to="/member" className="text-sm font-medium text-[#3E5465] transition duration-200 hover:opacity-60">
              運営メンバー紹介
            </Link>
            <Link to='/contact' className="text-sm font-medium text-[#3E5465] transition duration-200 hover:opacity-60">
              お問い合わせ
            </Link>
            <Link to="/login" className="text-sm font-medium text-[#3E5465] transition duration-200 hover:opacity-60">
              for Alumni
            </Link>
          </div>
        </div>
      </nav>
    </header>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogPostPage />} />
        <Route path="/member" element={<Member />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/obog"
          element={
            <PrivateRoute>
              <OBOG />
            </PrivateRoute>
          }
        />
      </Routes>
      <footer className="bg-gray-800 text-white py-4">
        {/* シェアボタン */}
        <div className="my-10 flex flex-col items-center text-center">
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() =>
                window.open(
                  `https://x.com/w_beyond2020`,
                  '_blank'
                )
              }
              className="group inline-flex h-12 w-12 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/50 text-slate-400 transition-all duration-300 hover:border-purple-500/50 hover:text-white"
            >
              <SiX className="h-5 w-5" />
            </button>

            <button
              onClick={() =>
                window.open(
                  `https://www.facebook.com/beyond2020nextproject/`,
                  '_blank'
                )
              }
              className="group inline-flex h-12 w-12 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/50 text-slate-400 transition-all duration-300 hover:border-purple-500/50 hover:text-white"
            >
              <SiFacebook className="h-5 w-5" />
            </button>
            <button
              onClick={() =>
                window.open(
                  `https://www.instagram.com/beyond2020nextproject/`,
                  '_blank'
                )
              }
              className="group inline-flex h-12 w-12 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/50 text-slate-400 transition-all duration-300 hover:border-purple-500/50 hover:text-white"
            >
              <SiInstagram className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="container mx-auto text-center">
          <p>&copy; 2025
            Beyond2020NextProject. All rights reserved.</p>
        </div>
      </footer>
    </div>

  );
}

export default App;