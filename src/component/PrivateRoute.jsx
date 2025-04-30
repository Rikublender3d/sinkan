import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import CryptoJS from "crypto-js";

function PrivateRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    const validUsernameHash = CryptoJS.SHA256(import.meta.env.VITE_OBOG_WEBSITE_USER_KEY).toString();
    const validPasswordHash = CryptoJS.SHA256(import.meta.env.VITE_OBOG_WEBSITE_PASSWORD_KEY).toString();

    // 保存されたデータが存在しない場合
    if (!storedUsername || !storedPassword) {
      setIsAuthenticated(false);
      setLoading(false);
      return;
    }

    // ハッシュ化された値を比較
    if (storedUsername === validUsernameHash && storedPassword === validPasswordHash) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }

    setLoading(false); // チェック完了
  }, []);

  if (loading) {
    return <p>認証チェック中...</p>; // ロード中の状態を表示
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children; // 認証成功時に子要素をレンダリング
}

export default PrivateRoute;
