// シンプルなキャッシュ実装（メモリ + localStorage）
const CACHE_DURATION = 5 * 60 * 1000; // 5分
const CACHE_KEY_PREFIX = 'blog_cache_';

// メモリキャッシュ
const memoryCache = new Map();

// キャッシュからデータを取得
export function getCachedData(key) {
  const cacheKey = `${CACHE_KEY_PREFIX}${key}`;

  // メモリキャッシュをチェック
  const memoryData = memoryCache.get(cacheKey);
  if (memoryData && Date.now() - memoryData.timestamp < CACHE_DURATION) {
    return memoryData.data;
  }

  // localStorageをチェック
  try {
    const stored = localStorage.getItem(cacheKey);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Date.now() - parsed.timestamp < CACHE_DURATION) {
        // メモリキャッシュにも保存
        memoryCache.set(cacheKey, parsed);
        return parsed.data;
      } else {
        // 期限切れのキャッシュを削除
        localStorage.removeItem(cacheKey);
      }
    }
  } catch (e) {
    console.warn('Cache read error:', e);
  }

  return null;
}

// データをキャッシュに保存
export function setCachedData(key, data) {
  const cacheKey = `${CACHE_KEY_PREFIX}${key}`;
  const cacheData = {
    data,
    timestamp: Date.now()
  };

  // メモリキャッシュに保存
  memoryCache.set(cacheKey, cacheData);

  // localStorageに保存（エラーを無視）
  try {
    localStorage.setItem(cacheKey, JSON.stringify(cacheData));
    // localStorageのサイズ制限を考慮して、古いキャッシュを削除
    cleanupOldCache();
  } catch (e) {
    console.warn('Cache write error:', e);
  }
}

// 古いキャッシュをクリーンアップ
function cleanupOldCache() {
  try {
    const keys = Object.keys(localStorage);
    const cacheKeys = keys.filter(k => k.startsWith(CACHE_KEY_PREFIX));

    // キャッシュが多すぎる場合（50個以上）、古いものを削除
    if (cacheKeys.length > 50) {
      const cacheData = cacheKeys.map(key => ({
        key,
        timestamp: JSON.parse(localStorage.getItem(key)).timestamp
      })).sort((a, b) => a.timestamp - b.timestamp);

      // 古い25個を削除
      cacheData.slice(0, 25).forEach(({ key }) => {
        localStorage.removeItem(key);
        memoryCache.delete(key);
      });
    }
  } catch (e) {
    console.warn('Cache cleanup error:', e);
  }
}

// キャッシュをクリア
export function clearCache(key) {
  const cacheKey = `${CACHE_KEY_PREFIX}${key}`;
  memoryCache.delete(cacheKey);
  try {
    localStorage.removeItem(cacheKey);
  } catch (e) {
    console.warn('Cache clear error:', e);
  }
}


