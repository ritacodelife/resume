const picturePath = './pic';
const vertical = true;
const reverse = false;
const data = [
	{
		img: '登入頁(M).png',
		primary: '管理系統-登入頁-行動版',
		secondary: '2025/02 - 2025/05',
		paragraph: [
			'使用 vue.js 框架',
			'頁面均可切換夜間主題',
			'欄位必填',
			'運用驗證與權限控制',
		],
	},
	{
		img: '列表搜尋功能(M).png',
		primary: '管理系統-搜尋功能-行動版',
		secondary: '2025/02 - 2025/05',
		paragraph: [
			'使用 vue.js 框架',
			'使用 axios 篩選資料',
			'可展開、收合，收合即重置條件',
			'切換分頁仍可保持搜尋條件',
		],
	},
	{
		img: '列表搜尋功能(PC).png',
		primary: '管理系統-搜尋功能-桌機版',
		secondary: '2025/02 - 2025/05',
		paragraph: [
			'使用 vue.js 框架',
			'使用 axios 篩選資料',
			'可展開、收合，收合即重置條件',
			'切換分頁保持搜尋條件',
			'桌機版依序欄位數量自動排版',
		],
	},
	{
		img: '排序列表(M).jpg',
		primary: '管理系統-排序列表-行動版',
		secondary: '2025/02 - 2025/05',
		paragraph: [
			'使用 vue.js 框架',
			'使用 axios 更新資料',
			'有搜尋功能',
			'按住第一欄可直接拖曳排序資料',
		],
	},
	{
		img: '不同狀態列表(M).png',
		primary: '管理系統-資料列表-行動版',
		secondary: '2025/02 - 2025/05',
		paragraph: [
			'使用 vue.js 框架',
			'使用 axios 取得資料',
			'行動版長按資料可從左側滑出操作按鈕',
			'行動版資料依據不同狀態在左側標示不同顏色',
			'使用 bootstraps 與自定義 CSS 設計顏色',
			'有搜尋功能',
			'最後一張是夜間主題',
		],
	},
	{
		img: '編輯列表和視窗(M).png',
		primary: '管理系統-資料列表和編輯視窗-行動版',
		secondary: '2025/02 - 2025/05',
		paragraph: [
			'使用 vue.js 框架',
			'使用 axios 取得、更新資料',
			'行動版長按資料可從左側滑出操作按鈕',
			'行動版資料依據不同狀態在左側標示不同顏色',
			'使用 bootstraps 與自定義 CSS 設計顏色',
			'有搜尋功能',
		],
	},
	{
		img: '新增視窗(M).png',
		primary: '管理系統-新增視窗-行動版',
		secondary: '2025/02 - 2025/05',
		paragraph: [
			'使用 vue.js 框架',
			'使用 axios 新增資料',
			'有欄位必填與正規化驗證',
			'有縮小視窗功能可保留填寫一半的資料',
			'有特殊操作的提示視窗',
		],
	},
	{
		img: '列表(PC).png',
		primary: '管理系統-資料列表-桌機版',
		secondary: '2025/02 - 2025/05',
		paragraph: [
			'使用 vue.js 框架',
			'使用 axios 取得資料',
			'桌機版在最後一欄可直接看到操作按鈕的顏色',
			'使用 bootstraps 與自定義 CSS 設計顏色',
			'有搜尋功能',
		],
	},
	{
		img: '匯出列表(M).png',
		primary: '管理系統-匯出資料-行動版',
		secondary: '2025/02 - 2025/05',
		paragraph: [
			'使用 vue.js 框架',
			'使用 axios 取得資料',
			'匯出成 .xls 檔',
			'可匯出篩選後的資料',
		],
	},
	{
		img: '匯入資料(M).jpg',
		primary: '管理系統-匯入資料-行動版',
		secondary: '2025/02 - 2025/05',
		paragraph: [
			'使用 vue.js 框架',
			'使用 axios 篩選資料',
			'有搜尋功能',
			'可匯入 .xls, .xlsm, .csv檔並自動分析欄位',
		],
	},
	{
		img: '加總列表(M).png',
		primary: '管理系統-資料統計-行動版',
		secondary: '2025/02 - 2025/05',
		paragraph: [
			'使用 vue.js 框架',
			'使用 axios 篩選資料',
			'有搜尋功能',
			'依據搜尋條件統計資料',
		],
	},
	{
		img: '檢視列表(PC).png',
		primary: '管理系統-檢視列表-桌機版',
		secondary: '2025/02 - 2025/05',
		paragraph: [
			'使用 vue.js 框架',
			'使用 axios 取得資料',
			'行動版與其他列表一樣，也是長按會從左側滑出檢視icon',
			'有搜尋功能',
		],
	},
	{
		img: '檢視視窗(PC).png',
		primary: '管理系統-檢視視窗-桌機版',
		secondary: '2025/02 - 2025/05',
		paragraph: [
			'使用 vue.js 框架',
			'使用 axios 取得資料',
			'可讓使用者看到操作修改紀錄',
			'另有給開發人員查看的詳細LOG紀錄',
		],
	},
	{
		img: '2020總統選舉即時開票.png',
		primary: '2020總統選舉即時開票',
		secondary: '2019/12 - 2020/01',
		paragraph: [
			'新增中選會資料與更新排程',
			'使用 Ajax 每分鐘取得更新票數資料',
			'使用 Google chart 圖表顯示總統和立委各選區的得票數',
		],
		url: 'https://election.ltn.com.tw/2020/president/vote'
	},
	{
		img: '2020立委選舉即時開票.png',
		primary: '2020立委選舉即時開票',
		secondary: '2019/12 - 2020/01',
		paragraph: [
			'新增中選會資料與更新排程',
			'使用 Ajax 每分鐘取得更新票數資料',
		],
		url: 'https://election.ltn.com.tw/2020/legislator/vote/Taipei'
	},
	{
		img: 'TT首頁.png',
		primary: 'Taipei Times 首頁',
		secondary: '2020/01 - 2020/03',
		paragraph: [
			'利用排程產資料',
			'埋設第三方廣告(DFP)',
			'從Smarty改用CI框架',
			'改用PHP7'
		],
		url: 'http://www.taipeitimes.com/'
	},
	{
		img: 'TT內頁.png',
		primary: 'Taipei Times 新聞頁',
		secondary: '2020/01 - 2020/03',
		paragraph: [
			'利用排程產ES格式資料',
			'埋設第三方廣告(DFP)',
			'從Smarty改用CI框架',
		],
		url: 'https://www.taipeitimes.com/News/front/archives/2022/02/01/2003772407'
	},
	{
		img: 'TT清單頁.png',
		primary: 'Taipei Times 清單頁',
		secondary: '2020/01 - 2020/03',
		paragraph: [
			'利用排程產資料',
			'埋設第三方廣告(DFP)',
			'從Smarty改用CI框架',
			'採用瀑布流 ajax 載入多頁資料'
		],
		url: 'https://www.taipeitimes.com/News/taiwan'
	},
	{
		img: '娛樂清單頁.png',
		primary: '頻道清單頁',
		secondary: '2020/08 - 2020/09',
		paragraph: [
			'用排程產清單資料',
			'採用瀑布流 ajax 載入多頁資料',
			'埋設第三方廣告(DFP)',
			'圖片做lazyload',
			'resize縮圖',
		],
		url: 'https://ent.ltn.com.tw/travel'
	},
	{
		img: '娛樂首頁.png',
		primary: '頻道首頁',
		secondary: '2020/08 - 2020/09',
		paragraph: [
			'讀取排程產生的JSON資料',
			'使用Swiper套件',
			'埋設第三方廣告(DFP)',
			'圖片做lazyload',
			'resize縮圖',
		],
		url: 'https://ent.ltn.com.tw/'
	},
	{
		img: '玩咖內頁.png',
		primary: '頻道文章頁',
		secondary: '2020/05 - 2020/05',
		paragraph: [
			'RWD改版套程式資料',
			'改讀ES文章資料',
			'用排程產文章相關資料',
			'埋設第三方廣告(DFP等…)',
		],
		url: 'https://playing.ltn.com.tw/'
	},
	{
		img: '主站首頁.png',
		primary: '主站首頁',
		secondary: '2019/07 - 2019/09',
		paragraph: [
			'讀取排程產生的JSON資料',
			'影片串接Youtube API',
			'使用Swiper套件',
			'埋設第三方廣告(DFP等…)',
		],
		url: 'https://www.ltn.com.tw/'
	},
];