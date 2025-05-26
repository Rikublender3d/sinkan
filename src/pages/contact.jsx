export default function Contact() {
  const handleSubmit = async (event) => {
    event.preventDefault(); // ページ遷移を防ぐ

    const form = event.target;

    // フォームのバリデーションを適用
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const googleFormURL =
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSc8Lz8w5okA_9j9QOpy51lu7R85nEBeZveogn7veOZK9Q8Lrg/formResponse";

    const formDataObject = new FormData(form);

    await fetch(googleFormURL, {
      method: "POST",
      body: formDataObject,
      mode: "no-cors",
    });

    // 既存のメッセージを削除
    const existingMessage = document.getElementById("success-message");
    if (existingMessage) {
      existingMessage.remove();
    }

    // 完了メッセージを追加
    const successMessage = document.createElement("p");
    successMessage.textContent = "お問い合わせを送信しました。";
    successMessage.classList.add("text-green-500", "mt-4");
    successMessage.id = "success-message";
    form.appendChild(successMessage);
  };
  const Breadcrumb = () => {
    return (
      <nav className="flex items-center space-x-2 text-gray-500 text-sm my-4">
        <a href="/" className="hover:text-gray-700">ホーム</a>
        <span className="text-gray-400">/</span>
        <a href="/#/contact" className="hover:text-gray-700">お問い合わせ</a>
      </nav>
    );
  };

  return (
    <div className="flex flex-col items-center text-center relative justify-center ">
      <div className="w-[90%] mx-auto mt-12">
      <Breadcrumb />
    </div>
    <div className="p-6 max-w-2xl mx-auto bg-white ">
      <h2 className="inline-block text-3xl font-semibold mb-4 bg-gradient-to-r from-[#F5A043] to-[#E45627] bg-clip-text text-transparent">お問い合わせ</h2>
      <p className="text-md font-medium text-gray-700 mb-4">ご不明点,ご依頼等お気軽にお問い合わせください。<br/>（ご回答には数日程度かかる場合がありますので予めご了承ください。）</p>

      <form action="" method="POST" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-10">
        {/* 姓 */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">姓<span className="text-red-500 ml-1">必須</span></label>
          <input className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" name="entry.422619453" type="text" required placeholder="早稲田"/>
        </div>

        {/* 名 */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">名<span className="text-red-500 ml-1">必須</span></label>
          <input className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" name="entry.588994485" type="text" required placeholder="花子"/>
        </div>
        </div>
        <div className="grid grid-cols-2 gap-10">
        {/* 姓（フリガナ） */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">姓（フリガナ）<span className="text-red-500 ml-1">必須</span></label>
          <input className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" name="entry.1457065099" type="text" pattern="^[ァ-ヶー]+$" required placeholder="ワセダ"/>
        </div>

        {/* 名（フリガナ） */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">名（フリガナ）<span className="text-red-500 ml-1">必須</span></label>
          <input className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" name="entry.1922977752" type="text" pattern="^[ァ-ヶー]+$" required placeholder="ハナコ"/>
        </div>
        </div>
        {/* 所属名 */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">所属名（会社,学校等）<span className="text-red-500 ml-1">必須</span></label>
          <input className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" name="entry.196846531" type="text" required placeholder="早稲田大学1年"/>
        </div>

        {/* メール */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">メール<span className="text-red-500 ml-1">必須</span></label>
          <input className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" name="entry.19535856" type="email" required placeholder="example@co.jp"/>
        </div>

        {/* 電話番号（任意） */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">電話番号<span className="text-gray-500 ml-1">任意</span></label>
          <input className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" name="entry.1135621900" type="tel" placeholder="000-0000-0000"/>
        </div>

        {/* メッセージ内容 */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">メッセージ内容<span className="text-red-500 ml-1">必須</span></label>
          <textarea className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" name="entry.682085419" required placeholder="お問い合わせ内容を入力してください"></textarea>
        </div>

        {/* 送信ボタン */}
        <div className="text-center">
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">送信する</button>
        </div>
      </form>
    </div>
  </div>
  );
}
