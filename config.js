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
    // 揭露拆成三個屬性（使用者 2026-10-26：中央大、邊緣小是混淆，大小要獨立）
    discType: ["none", "text", "icon"],
    discPos: ["edge", "center"],
    discSize: ["small", "large"],
    mask: ["none", "eye", "blur"],  // 2026-10-26 使用者：三水準，眼部與全臉都用薄碼（看得出表情）
    expression: ["sad", "smile"],  // 2026-10-26 使用者選定；微笑版由同一張圖編輯而來
    gender: ["female", "male"]     // 2026-10-26 使用者選定；只用於人（兒童、長者），動物記為 na
  },
  disclosureText: "AI 生成影像",
  // 專案名稱：「守護、支持、照顧」三詞隨機排序＋「計畫」，共 6 種（使用者 2026-10-26：
  // 原本的「關懷、扶助」等詞會與圖片內容產生交互，改為同一組詞只換順序）
  titleWords: ["守護", "支持", "照顧"],
  // 組織名稱：「財團法人＋兩個中性字＋社會福利基金會」，字取自 桐、岸、澄、溪、禾、嵐。
  // 2026-10-26 以網路搜尋逐一查無同名團體；「禾岸」因搜尋結果疑似對應真實團體而排除。正式施測前再查衛福部與法院登記資料。
  orgs: [
    "財團法人桐岸社會福利基金會", "財團法人澄溪社會福利基金會", "財團法人禾嵐社會福利基金會",
    "財團法人嵐桐社會福利基金會", "財團法人溪禾社會福利基金會", "財團法人岸澄社會福利基金會",
    "財團法人澄嵐社會福利基金會", "財團法人桐禾社會福利基金會", "財團法人溪桐社會福利基金會",
    "財團法人嵐溪社會福利基金會", "財團法人岸禾社會福利基金會"
  ],
  // 問卷：只留與本研究假設直接相關的核心題組；題目文字由使用者 2026-10-26 重寫
  // 態度題一律「中性題幹＋兩端具體字眼」，−3 到 +3，0＝沒有意見；全部亂序
  survey: {
    sliders: [
      // 同理心傾向：調節表情與受益者類型
      { key: "emp_distress", text: "看到他人受苦時，我的感受", left: "平靜", right: "難受" },
      { key: "emp_urge",     text: "遇到陌生人有困難時，我會幫忙", left: "從不", right: "總是", mid: "有時" },
      { key: "emp_animal",   text: "當看到動物受傷或流浪時，我的感受", left: "平靜", right: "難受" },
      // 信任與訴求方式：調節揭露、表情、遮臉
      { key: "npo_trust",    text: "對公益團體", left: "不信任", right: "信任" },
      { key: "appeal_pity",  text: "以悲慘不幸的影像來募款", left: "反對", right: "支持" },
      { key: "ai_charity",   text: "公益團體使用 AI 生成募款影像", left: "不同意", right: "同意" },
      { key: "appeal_privacy", text: "募款影像中受助者的隱私", left: "不在意", right: "很在意" },
      // 共同方法變異 marker
      { key: "marker_blue",  text: "藍色", left: "不喜歡", right: "喜歡" }
    ],
    radios: [
      { key: "d_donfreq",  text: "過去一年大約捐款次數", opts: ["0 次", "1–2 次", "3–5 次", "6–11 次", "12 次以上"] },
      { key: "d_cause",    text: "你最常捐給哪一類？", opts: ["兒童與青少年", "長者", "動物", "身心障礙", "醫療與疾病", "急難救助", "宗教", "藝文", "其他", "沒有捐過"] },
      { key: "d_gender",   text: "性別", opts: ["女", "男", "其他", "不願透露"] },
      { key: "d_age",      text: "年齡", opts: ["19 歲以下", "20–29", "30–39", "40–49", "50–59", "60 歲以上"] }
    ]
  }
};
