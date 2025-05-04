import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // ハッシュ化された正しいデータ
  const validUsernameHash = CryptoJS.SHA256(import.meta.env.VITE_OBOG_WEBSITE_USER_KEY).toString();
  const validPasswordHash = CryptoJS.SHA256(import.meta.env.VITE_OBOG_WEBSITE_PASSWORD_KEY).toString();
  const EXPIRATION_TIME = 30 * 60 * 1000; // 10分（ミリ秒）

  useEffect(() => {
    // ローカルストレージからデータを取得
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    const storedTimestamp = localStorage.getItem("timestamp");

    if (storedUsername && storedPassword && storedTimestamp) {
      const currentTime = new Date().getTime();
      // 時間経過をチェック
      if (currentTime - storedTimestamp > EXPIRATION_TIME) {
        // 有効期限切れなら削除
        localStorage.clear();
        console.log("認証情報が期限切れのため削除しました。");
      } else if (
        storedUsername === validUsernameHash &&
        storedPassword === validPasswordHash
      ) {
        // 認証情報が有効ならOBOGページへ遷移
        console.log("既存の認証情報を確認。OBOGページに遷移します。");
        navigate("/obog");
      }
    }
  }, [navigate, validUsernameHash, validPasswordHash]);

  const handleLogin = (e) => {
    e.preventDefault();
    const inputUsernameHash = CryptoJS.SHA256(username).toString();
    const inputPasswordHash = CryptoJS.SHA256(password).toString();

    if (inputUsernameHash === validUsernameHash && inputPasswordHash === validPasswordHash) {
      // 認証成功時の処理
      localStorage.setItem("username", inputUsernameHash);
      localStorage.setItem("password", inputPasswordHash);
      localStorage.setItem("timestamp", new Date().getTime()); // タイムスタンプを保存
      console.log("ログイン成功！OBOGページへ遷移します。");
      navigate("/obog");
    } else {
      // 認証失敗時
      setError("ユーザー名またはパスワードが間違っています。");
    }
  };

  return (
    <div className="mx-auto flex flex-col items-center justify-center bg-gray-100">
                        <h2 className="mt-14 md:mt-0 p-3 bg-gradient-to-r from-[#F5A043] to-[#E45627]  bg-clip-text text-6xl font-bold tracking-tight text-transparent" id="about">
                    Beyond Alumni
                </h2>
                <p className="text-gray-400 text-md mb-4">
                    閲覧にはログインが必要です。
                </p>
      <div className="w-full max-w-md bg-white p-5 rounded-lg shadow-md my-4">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          ログイン
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              ユーザー名
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="ユーザー名を入力"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              パスワード
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="パスワードを入力"
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            ログイン
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

