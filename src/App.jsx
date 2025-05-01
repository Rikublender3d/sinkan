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
        <Link to="/blogs">News</Link>
      </li>
      <li className="p-3 w-full text-center text-lg font-semibold border-b border-gray-300 hover:text-[#355070] hover:bg-gray-100 transition-colors">
        <Link to="/about">AboutUs</Link>
      </li>
      <li className="p-3 w-full text-center text-lg font-semibold border-b border-gray-300 hover:text-[#355070] hover:bg-gray-100 transition-colors">
        <Link to="/project">Project</Link>
      </li>
      <li className="p-3 w-full text-center text-lg font-semibold hover:text-[#355070] hover:bg-gray-100 transition-colors">
        <Link to="/member">Member</Link>
      </li>
    </ul>
    {/* OB/OGとSNSセクション */}
    <div className="w-full flex flex-col items-center pb-6">
      <ul className="w-full">
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
            <Link
              to="/"
              className="righteous-regular text-[#1c1e56] text-3xl font-bold "
            >
              Beyond2020NextProject
            </Link>
            <div className="space-x-8">
              <Link
                to="/"
                className="text-sm font-medium text-[#3E5465] transition duration-200 hover:opacity-60"
              >
                Home
              </Link>
              <Link
                to="/blogs"
                className="text-sm font-medium text-[#3E5465] transition duration-200 hover:opacity-60"
              >
                News
              </Link>
              <Link
                to="/member"
                className="text-sm font-medium text-[#3E5465] transition duration-200 hover:opacity-60"
              >
                Member
              </Link>
              <Link
                to="/about"
                className="text-sm font-medium text-[#3E5465] transition duration-200 hover:opacity-60"
              >
                About us
              </Link>
              <Link
                to="/project"
                className="text-sm font-medium text-[#3E5465] transition duration-200 hover:opacity-60"
              >
                Project
              </Link>
              <Link
                to="/login"
                className="text-sm font-medium text-[#3E5465] transition duration-200 hover:opacity-60"
              >
                OBOG
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