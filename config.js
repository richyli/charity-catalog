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
  // 專案名稱：句型固定「前半｜後半計畫」，只換可互換的位置；9 種組合語意等值（使用者 2026-10-26）
  titleSlotA: ["陪伴", "守護", "支持"],
  titleSlotB: ["關懷", "扶助", "照顧"],
  // 組織名稱：「財團法人＋兩個中性字＋社會福利基金會」，字取自 桐、岸、澄、溪、禾、嵐。
  // 2026-10-26 以網路搜尋逐一查無同名團體；「禾岸」因搜尋結果疑似對應真實團體而排除。正式施測前再查衛福部與法院登記資料。
  orgs: [
    "財團法人桐岸社會福利基金會", "財團法人澄溪社會福利基金會", "財團法人禾嵐社會福利基金會",
    "財團法人嵐桐社會福利基金會", "財團法人溪禾社會福利基金會", "財團法人岸澄社會福利基金會",
    "財團法人澄嵐社會福利基金會", "財團法人桐禾社會福利基金會", "財團法人溪桐社會福利基金會",
    "財團法人嵐溪社會福利基金會", "財團法人岸禾社會福利基金會"
  ],
  // 問卷（2026-10-26 使用者：圖片已看得出是 AI，不再問 AI；改為可分群的題目）
  // 態度題一律「中性題幹＋兩端具體字眼」，−3 到 +3，0＝沒有意見；全部亂序
  survey: {
    sliders: [
      // 捐款動機
      { key: "mot_need",     text: "捐款時，受助者的迫切需要", left: "不看重", right: "看重" },
      { key: "mot_warmglow", text: "捐款後自己的好心情", left: "不看重", right: "看重" },
      { key: "mot_impact",   text: "捐款實際產生的成效", left: "不看重", right: "看重" },
      { key: "mot_social",   text: "捐款得到親友或社群的認同", left: "不看重", right: "看重" },
      { key: "mot_faith",    text: "捐款在信仰上的意義", left: "不看重", right: "看重" },
      { key: "mot_reciproc", text: "捐款作為回饋社會", left: "不看重", right: "看重" },
      // 選擇組織的考量
      { key: "org_fame",     text: "選擇捐款對象時，組織的知名度", left: "不看重", right: "看重" },
      { key: "org_report",   text: "選擇捐款對象時，組織公開財報與成果", left: "不看重", right: "看重" },
      { key: "org_story",    text: "選擇捐款對象時，照片與故事是否打動人", left: "不看重", right: "看重" },
      { key: "org_local",    text: "選擇捐款對象時，與自己的地方或經驗是否有關", left: "不看重", right: "看重" },
      { key: "org_fixed",    text: "固定捐給同一個組織", left: "很少這樣", right: "經常這樣" },
      // 同理心傾向
      { key: "emp_distress", text: "看到別人受苦時，自己心裡的感受", left: "平靜", right: "難受" },
      { key: "emp_urge",     text: "陌生人遇到困難時，想幫忙的衝動", left: "很弱", right: "很強" },
      { key: "emp_animal",   text: "看到受傷或流浪的動物時，心裡的感受", left: "平靜", right: "難受" },
      // 信任與訴求方式
      { key: "npo_trust",    text: "台灣的公益團體", left: "不信任", right: "信任" },
      { key: "npo_transp",   text: "公益團體公開捐款用途", left: "不夠公開", right: "充分公開" },
      { key: "appeal_pity",  text: "以悲慘畫面打動人的募款方式", left: "反對", right: "支持" },
      { key: "appeal_privacy", text: "募款照片中受助者的隱私保護", left: "不在意", right: "很在意" },
      // 共同方法變異 marker
      { key: "marker_blue",  text: "藍色", left: "不喜歡", right: "喜歡" }
    ],
    radios: [
      { key: "d_donated",  text: "過去一年，你有沒有捐過款？", opts: ["有", "沒有"] },
      { key: "d_donfreq",  text: "過去一年大約捐了幾次？", opts: ["0 次", "1–2 次", "3–5 次", "6–11 次", "12 次以上"] },
      { key: "d_donamt",   text: "你每次捐款大約多少錢？", opts: ["100 元以下", "101–500 元", "501–1,000 元", "1,001–5,000 元", "5,000 元以上", "沒有捐過"] },
      { key: "d_regular",  text: "你目前有沒有定期定額捐款？", opts: ["有", "沒有"] },
      { key: "d_channel",  text: "你最常用哪種方式捐款？", opts: ["行動支付或網路平台", "銀行轉帳或信用卡", "超商", "現場或街頭募款", "宗教場所", "沒有捐過"] },
      { key: "d_cause",    text: "你最常捐給哪一類？", opts: ["兒童與青少年", "長者", "動物", "身心障礙", "醫療與疾病", "急難救助", "宗教", "其他", "沒有捐過"] },
      { key: "d_volunteer", text: "過去一年，你有沒有當過志工？", opts: ["有", "沒有"] },
      { key: "d_religion", text: "你的宗教信仰", opts: ["無", "佛教或道教", "基督教或天主教", "一貫道", "其他", "不願透露"] },
      { key: "d_gender",   text: "性別", opts: ["女", "男", "其他", "不願透露"] },
      { key: "d_age",      text: "年齡", opts: ["19 歲以下", "20–29", "30–39", "40–49", "50–59", "60 歲以上"] },
      { key: "d_edu",      text: "最高學歷", opts: ["高中職以下", "專科", "大學", "研究所以上"] },
      { key: "d_income",   text: "個人每月收入", opts: ["3 萬元以下", "3–5 萬元", "5–8 萬元", "8 萬元以上", "不願透露"] },
      { key: "d_region",   text: "居住地區", opts: ["北部", "中部", "南部", "東部", "離島", "海外"] }
    ]
  }
};
