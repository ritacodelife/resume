const picturePath = './pic';
const reverse = false;
const data = [
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
];