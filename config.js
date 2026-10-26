// ABI 模擬捐款網站設定。改設計只改這個檔。
window.ABI_CONFIG = {
  // SheetMonkey form URL；空字串＝測試模式（結尾提供下載作答 JSON，不上傳）
  endpoint: "",
  // 研究者與倫理審查窗口；正式施測前由研究者填入（留空則不顯示）
  contactEmail: "",
  ethicsContact: "",
  budget: 1000,
  perDonation: 100,
  maxPages: 30,           // 翻頁上限；到上限仍未捐完就結束並記錄餘額
  minAnswerSec: 3,        // 每頁最短停留秒數，未到前按鈕鎖住
  cardsPerPage: 3,
  trapAfterPage: 2,       // 第幾個正式頁之後插入注意力檢核頁
  repeatSourcePage: 2,    // 重複檢核：重現第幾個正式頁（左右順序反轉）
  repeatAfterPage: 6,     // 在第幾個正式頁之後插入
  arms: ["select", "mixed"],   // 進站隨機分組：自選類別／混合目錄
  categories: [
    { key: "child",  label: "兒童", desc: "兒少照顧、課輔、餐食" },
    { key: "elder",  label: "長者", desc: "獨居長者送餐、陪伴、照顧" },
    { key: "animal", label: "動物", desc: "流浪動物醫療、收容、送養" }
  ],
  levels: {
    style: ["photo", "painting", "cartoon"],
    disclosure: ["none", "text-edge", "text-center", "icon-edge", "icon-center"],
    mask: ["none", "eye", "blur"]
  },
  disclosureText: "AI 生成影像",
  // 專案名稱與組織名稱不是研究變項，所有卡片一律相同（使用者 2026-10-26）
  projectTitle: "公益募款專案｜請支持需要幫助的生命",
  orgName: "財團法人澄穗社會福利慈善事業基金會",
  permitNo: "衛部救字第1141013579號",
  survey: {
    sliders: [
      { key: "ai_charity", text: "公益團體在募款時使用 AI 生成的圖片", left: "反對", right: "支持" },
      { key: "ai_general", text: "AI 生成的圖片與影音", left: "負面", right: "正面" },
      { key: "npo_trust",  text: "台灣的公益團體", left: "不信任", right: "信任" },
      { key: "npo_transp", text: "公益團體使用捐款的方式", left: "不透明", right: "透明" },
      { key: "marker_blue", text: "藍色", left: "不喜歡", right: "喜歡" }
    ]
  }
};
