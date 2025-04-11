import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from './pages/Blogs';
import BlogPostPage from './pages/page';
import { SiX, SiFacebook, SiInstagram } from '@icons-pack/react-simple-icons';
import Member from './pages/member';
import { useState } from 'react';
function App() {
  const [isOpen, setOpen] = useState(false);
  const handlemenuToggle = () => {
    setOpen(!isOpen);
  };
  return (
    <div className="relative">
     <button onClick={handlemenuToggle} type="button" className="z-40 space-y-2 fixed top-5 right-5 md:hidden">
            <div className={isOpen ? 'w-8 h-0.5 bg-gray-600 translate-y-2.5 rotate-45 transition duration-500 ease-in-out' : 
              'w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out'} />
            <div className={isOpen ? 'opacity-0 transition duration-500 ease-in-out' : 'w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out'} />
            <div className={isOpen ? 'w-8 h-0.5 bg-gray-600 -rotate-45 transition duration-500 ease-in-out' : 'w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out'} />
          </button>
            {isOpen ? (
       <nav
       className={
          isOpen
           ? 'z-30 text-left fixed bg-slate-50 right-0 top-0 w-8/12 h-screen flex flex-col justify-start pt-8 px-3 ease-linear duration-500'
           : 'z-30 fixed right-[-100%] ease-linear duration-500'
       }>
                   <ul className='text-center w-full h-full '>
              <li className='p-3 border-b-2 border-black border-dotted'>
              <Link
                  to="/"
                >
                  Home
                </Link>
                </li>
              <li className='p-3'>
                <Link
                  to="/blogs"
                >
                News
                </Link>
                </li>
              <li className='p-3'>
                <Link
                  to="/member"
                >
                  Member
                </Link>
                </li>
            </ul>
            </nav>
      ) : undefined}
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
                  className="text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white"
                >
                  Home
                </Link>
                <Link
                  to="/blogs"
                  className="text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white"
                >
                  News
                </Link>
                <Link
                  to="/member"
                  className="text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white"
                >
                  Member
                </Link>
              </div>
            </div>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogPostPage/>} />
          <Route path="/member" element={<Member />} />
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