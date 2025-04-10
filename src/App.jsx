import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import { SiX, SiFacebook, SiInstagram } from '@icons-pack/react-simple-icons';
import { ClipboardCopy } from 'lucide-react';

function App() {
  return (
    <div className="relative">
        {/* ヘッダーセクション */}
        <header className="py-6">
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
                <a href='#about' className="text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white">
                  AboutUs
                </a>
                <a href='#skills' className="text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white">
                  Schedule
                </a>
                <Link
                  to="#"
                  className="text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white"
                >
                  参加申込はこちら
                </Link>
              </div>
            </div>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
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