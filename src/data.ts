import { Member, Album, VarietyShow, Merchandise, Miniteen } from './types';
import { WEBSITE_ALBUMS } from './data/websiteAlbums';
import { WEBSITE_VARIETY } from './data/websiteVariety';

export const MEMBERS: Member[] = [
  {
    name: 'S.COUPS',
    realName: 'Choi Seung Cheol (최승철)',
    koreanName: '에스쿱스',
    role: 'SVT General Leader & Hip-Hop Team Leader',
    birthDate: '1995.08.08',
    unit: 'Hip-Hop',
    avatarEmoji: '🍒',
    photoGradient: 'linear-gradient(135deg, #F7CAC9 0%, #D6A4A4 100%)',
    photoUrl: 'https://i.pinimg.com/736x/6e/3d/66/6e3d6611280cb69329a198c0f9ee89a8.jpg',
    colorHex: '#D6A4A4',
    zodiac: 'Leo (獅子座)',
    instagram: 'sound_of_coups',
    description: '作為 SEVENTEEN 的總隊長兼 Hip-hop 隊長，S.COUPS 是全團最堅實的後盾。他擁有強大而有魅力的舞台統治力與低沉性感的 Rap 聲線，同時也有著極其溫柔、依賴成員的暖心反差萌。',
    facts: [
      '跆拳道黑帶二段（學了 7 年）',
      '最喜歡櫻桃，因此常被稱為「櫻桃隊長」',
      '非常疼愛、處處保護他的 12 個弟弟，是十足的護弟狂魔',
      '特別擅長體育運動，特別是力量型的遊戲'
    ]
  },
  {
    name: 'JEONGHAN',
    realName: 'Yoon Jeong Han (윤정한)',
    koreanName: '정한',
    role: 'Vocal Team / Lead Vocalist',
    birthDate: '1995.10.04',
    unit: 'Vocal',
    avatarEmoji: '👼',
    photoGradient: 'linear-gradient(135deg, #F7CAC9 10%, #E2CCE9 100%)',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/df/240502_Yoon_Jeong-han_%28SEVENTEEN%29.png',
    colorHex: '#E2CCE9',
    zodiac: 'Libra (天秤座)',
    instagram: 'jeonghaniyoo_n',
    description: '因生日特別（1004 在韓文諧音天使）而被暱稱為「天使」。擁有極其細膩清澈的溫潤歌喉。外表看似柔弱清秀，實則是全團的「大腦」與智多星，經常在綜藝常規競賽中以驚人的奇招 and 幽默感引領全場。',
    facts: [
      '自稱是「SEVENTEEN 最弱體體能」但卻非常擅長體技技巧',
      '最熱衷於與成員們開玩笑，是大家公認 of 「天才騙子」',
      '擁有極度溫柔、傾聽他人煩惱的知心性格',
      '特別有長髮緣，早期的金長髮和近期中長髮造型都驚艷無數 Carat'
    ]
  },
  {
    name: 'JOSHUA',
    realName: 'Hong Ji Soo (홍지수)',
    koreanName: '조슈아',
    role: 'Vocal Team / Lead Vocalist',
    birthDate: '1995.12.30',
    unit: 'Vocal',
    avatarEmoji: '🦌',
    photoGradient: 'linear-gradient(135deg, #EAE5C9 0%, #F7CAC9 100%)',
    photoUrl: 'https://i.pinimg.com/736x/c9/cd/08/c9cd08700999ccfa2f7a68002790ca78.jpg',
    colorHex: '#E5DFA9',
    zodiac: 'Capricorn (摩羯座)',
    instagram: 'joshu_acoustic',
    description: '在美國洛杉磯長大的「紳士擔當」，精通英語、韓語等多國語言。JOSHUA 具有如蜜糖般的溫暖聲線，擅長結他與不插電改編。氣質優雅內斂，但私底下玩鬧起來卻有著出乎意料的搞笑天賦與無厘頭幽默。',
    facts: [
      '非常熱愛自製手工飾品如串珠手鍊，常送給團員們與工作人員',
      '擁有一雙靈動的小鹿眼睛，舉手投足都像是優雅的歐洲紳士',
      '熱愛喝美式咖啡，同時也是健身愛好者',
      '與 Jeonghan 非常合得來，兩人並稱「雙J / 惡魔與天使」'
    ]
  },
  {
    name: 'JUN',
    realName: 'Wen Jun Hui (文준輝)',
    koreanName: '준',
    role: 'Performance Team / Lead Dancer',
    birthDate: '1996.06.10',
    unit: 'Performance',
    avatarEmoji: '🐱',
    photoGradient: 'linear-gradient(135deg, #CBD5E1 0%, #92A8D1 100%)',
    photoUrl: 'https://i.pinimg.com/736x/11/ea/60/11ea60b4401e7c0725a4f230a8abafe8.jpg',
    colorHex: '#A2B8DC',
    zodiac: 'Gemini (雙子座)',
    instagram: 'junhui_moon',
    description: '童星出身的中國籍成員，擁有如雕刻般的精緻五官和高聳身材。JUN 作為 Performance 小隊成員，舞蹈動作大氣流暢、富有舞台戲劇張力。雖然外表高冷，內心卻是極其單純、喜歡吃零食、對貓咪毫無抵抗力的貓系大男孩。',
    facts: [
      '熱愛各種麻辣中式美食，包包裡常備螺螄粉/辣條',
      '擁有優雅的鋼琴琴藝，曾多次在演唱會上鋼琴獨奏',
      '在綜藝中有奇異的思考迴路，常做出出人意料的可愛無厘頭舉動',
      '演戲經驗極為豐富，能完美詮釋高冷與溫柔的反差'
    ]
  },
  {
    name: 'HOSHI',
    realName: 'Kwon Soon Young (권순영)',
    koreanName: '호시',
    role: 'Performance Team Leader',
    birthDate: '1996.06.15',
    unit: 'Performance',
    avatarEmoji: '🐯',
    photoGradient: 'linear-gradient(135deg, #FFF1F2 0%, #F43F5E 100%)',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/af/240502_Hoshi_%28SEVENTEEN%29.png',
    colorHex: '#F43F5E',
    zodiac: 'Gemini (雙子座)',
    instagram: 'ho5hi_kwon',
    description: '身為 Performance Team 隊長兼全團編舞核心，HOSHI（老虎）在舞台上是熱烈的能量爆發者，是名副其實的「舞台巨匠」。他對舞台極其嚴苛，狂熱自稱擁有一顆「老虎的心」，私下卻是一個超級愛撒嬌、容易感動大哭的倉鼠男孩。',
    facts: [
      '自創招牌問候語「Horanghae (虎浪嘿)」並開發了配套的爪子手勢',
      '設計了 SEVENTEEN 早期絕大部分高難度、整齊度驚人的舞台編舞',
      '極度熱愛老虎，甚至蒐集一切有老虎圖案的衣服、抱枕、日用品',
      '眼睛呈現特殊的 10 點 10 分角度，成為他最迷人的標誌'
    ]
  },
  {
    name: 'WONWOO',
    realName: 'Jeon Won Woo (전원우)',
    koreanName: '원우',
    role: 'Hip-Hop Team / Lead Rapper',
    birthDate: '1996.07.17',
    unit: 'Hip-Hop',
    avatarEmoji: '🐱',
    photoGradient: 'linear-gradient(135deg, #334155 0%, #64748B 100%)',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/240502_Wonwoo_%28SEVENTEEN%29.png',
    colorHex: '#475569',
    zodiac: 'Cancer (巨蟹座)',
    instagram: 'everyone_woo',
    description: '擁有全團最深沉迷人的超級低音砲嗓音，也是 Hip-hop 隊的作詞才子。WONWOO 平時神情沉穩冷靜，酷愛看書、打電玩和研究攝影。有著慵懶隨性的貓咪特質，看似高冷不易親近，實則是內心極其溫厚、心思極細的暖男。',
    facts: [
      '名副以前的電玩宅男，在多款遊戲中都展現驚人天賦',
      '視力非常好，戴眼鏡時有一種知性的學院風魅力（「眼鏡貓」）',
      '曾執導過自製雜誌或 MV（如成員個人自製曲）',
      '擁有超強的冷靜消化能力，性格極度淡定'
    ]
  },
  {
    name: 'WOOZI',
    realName: 'Lee Ji Hoon (이지훈)',
    koreanName: '우지',
    role: 'Vocal Team Leader & Main Producer',
    birthDate: '1996.11.22',
    unit: 'Vocal',
    avatarEmoji: '🍚',
    photoGradient: 'linear-gradient(135deg, #F7CAC9 0%, #92A8D1 100%)',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/240502_Woozi_%28SEVENTEEN%29.png',
    colorHex: '#B2BACC',
    zodiac: 'Sagittarius (射手座)',
    instagram: 'woozi_universe_factory',
    description: 'SEVENTEEN 的靈魂製作人。作為天才音樂創作人，WOOZI 承包了全團幾乎 99% 的歌曲作詞和作曲（包括成名作《Pretty U》《Don’t Wanna Cry》等）。身形小巧卻有著無比巨大的精神力量，不苟言笑但對音樂與成員飽含無可替代的深愛。',
    facts: [
      '極度熱愛白米飯，甚至有著「白飯精靈」的稱號',
      '非常熱愛健身與重訓，甚至在團內有著數一數二的驚人臂肌力',
      '不喜歡肢體接觸與撒嬌，卻對克拉和成員們寫出了世上最溫柔浪漫的旋律',
      '是韓國音樂著作權協會 (KOMCA) 的正式會員，獲獎無數'
    ]
  },
  {
    name: 'THE 8',
    realName: 'Xu Ming Hao (徐明浩 / 디에잇)',
    koreanName: '디에잇',
    role: 'Performance Team / Lead Dancer',
    birthDate: '1997.11.07',
    unit: 'Performance',
    avatarEmoji: '🐸',
    photoGradient: 'linear-gradient(135deg, #92A8D1 0%, #CCD9E5 100%)',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/240502_The_8_%28SEVENTEEN%29.png',
    colorHex: '#9FADB1',
    zodiac: 'Scorpio (天蠍座)',
    instagram: 'xuminghao_o',
    description: '中國籍成員，藝名 THE 8 寓意著無限（∞）和幸運。他曾是專業的 B-Boy 和武術選手，其舞蹈極富線條美感與律動性。生活品味極高，擅長繪畫、茶道、冥想及高質感時尚穿搭，是成員眼中的「潮流哲學藝術家」。',
    facts: [
      '常勸誡克拉要「先過好自己的人生，再來追星」，展現溫柔睿智的三觀',
      '極度熱愛茶道 and 冥想，經常在宿舍邀請成員們共同品茶淨化心靈',
      '品味實力非凡，多次參與國際時裝週，其個人畫作也曾公開展出',
      '性格直率，常以清醒直接的發言被封為「金句製造機」'
    ]
  },
  {
    name: 'MINGYU',
    realName: 'Kim Min Gyu (김민규)',
    koreanName: '민규',
    role: 'Hip-Hop Team / Lead Rapper',
    birthDate: '1997.04.06',
    unit: 'Hip-Hop',
    avatarEmoji: '🐶',
    photoGradient: 'linear-gradient(135deg, #B1BCE5 0%, #6E7B9D 100%)',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/69/240502_Kim_Min-gyu_%28SEVENTEEN%29.png',
    colorHex: '#6E7B9D',
    zodiac: 'Aries (白羊座)',
    instagram: 'min9yu_k',
    description: '身高 187cm 的「視覺擔當」。擁有模特兒般高挑完美的黃金比例、健美體格，以及極其熟練的手工藝（料理、清掃、修理、攝影等樣樣精通）。性格開朗熱情、毫無架子，常被稱為「大型犬汪汪」，深受所有人喜愛和欺負。',
    facts: [
      '做飯實力被公認為主廚級別，能一人搞定 13 人份以上的超大分量餐食',
      '負責過團內多樣自製設計（如周邊設計、MV 導演和剪輯）',
      '笨手笨腳的破壞王屬性，常在不經意間摔壞或撞倒東西，形成巨大反差',
      '人緣極佳，積極開朗，是隊內的活力素與開心果'
    ]
  },
  {
    name: 'DK',
    realName: 'Lee Seok Min (이석민)',
    koreanName: '도겸',
    role: 'Vocal Team / Main Vocalist',
    birthDate: '1997.02.18',
    unit: 'Vocal',
    avatarEmoji: '⚔️',
    photoGradient: 'linear-gradient(135deg, #F9D5E5 0%, #EEB4C0 100%)',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/240501_DK_%28SEVENTEEN%29.png',
    colorHex: '#EEB4C0',
    zodiac: 'Aquarius (水瓶座)',
    instagram: 'dk_is_dokyeom',
    description: 'SEVENTEEN 的「快樂病毒」兼第一主唱。擁有一副高昂透亮、充滿爆發力又極具感染力的「核能金嗓」。性格無比純真開朗、善良易感、淚腺發達，是夫碩順 (BSS) 的核心隊長，隨時隨地能用完美的笑顏與活力渲染所有人。',
    facts: [
      '曾主演多部大型音樂劇（如《Xcalibur》飾演亞瑟王），獲得業界高評價突破',
      '心腸極其冰雪無瑕，善良到會主動把好東西全部讓給成員和工作團隊',
      '與 Hoshi、Seungkwan 組成極高知名度的小分隊「夫碩順 (BSS)」並大獲成功',
      '笑容像冬日陽光一樣璀璨溫情，極致的高音能帶來絕對的心靈治癒'
    ]
  },
  {
    name: 'SEUNGKWAN',
    realName: 'Boo Seung Kwan (부승관)',
    koreanName: '승관',
    role: 'Vocal Team / Main Vocalist',
    birthDate: '1998.01.16',
    unit: 'Vocal',
    avatarEmoji: '🍊',
    photoGradient: 'linear-gradient(135deg, #FED7AA 0%, #F59E0B 100%)',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/91/240502_Seungkwan_%28SEVENTEEN%29.png',
    colorHex: '#F59E0B',
    zodiac: 'Capricorn (摩羯座)',
    instagram: 'pledis_boos',
    description: '來自濟州島的「國寶級主唱」兼眾人皆知的「綜藝神童」。高音穩重圓潤，自帶無以復加的情感底蘊。情商極高，擁有恐怖級別的舞台主持反應能力與綜藝嗅覺，同時對 K-pop 歷史瞭如指掌（被尊稱為「夫教授」）。',
    facts: [
      '多次獲得演藝大賞的新人獎與綜藝獎，是各大熱門綜藝爭相邀約的常客',
      '極度注重自我管理，熱衷於給身邊成員科普各種消水腫、排毒的健康操',
      '心思極度敏感細膩，經常因為太過共情粉絲和成員而淚灑舞台',
      '對團隊推廣有著無比巨大的使命感，一生都在不遺餘力地推廣 SEVENTEEN'
    ]
  },
  {
    name: 'VERNON',
    realName: 'Hansol Vernon Chwe (최한솔)',
    koreanName: '버non',
    role: 'Hip-Hop Team / Main Rapper',
    birthDate: '1998.02.18',
    unit: 'Hip-Hop',
    avatarEmoji: '🐢',
    photoGradient: 'linear-gradient(135deg, #A7F3D0 0%, #34D399 100%)',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/23/240502_Vernon_%28SEVENTEEN%29.png',
    colorHex: '#34D399',
    zodiac: 'Aquarius (水瓶座)',
    instagram: 'vernonline',
    description: '韓美混血的「自由靈魂」。外表俊朗如青年時期的李安納度，嗓音低沉且有著極為獨特的 Rap 律動與慵懶高級感。音樂品味非常超前，喜愛各種小眾電子與龐克搖滾樂。對名利名次極其淡定，崇尚自由平等的靈魂信徒。',
    facts: [
      '對貓咪有著極致的喜愛，養了一隻叫 LEO 的貓，頭像也常是一隻貓',
      '性格極致灑脫，被成員公認為「最酷也最難約出門」的清心寡慾系神仙',
      '特別擅長作詞與獨特世界觀解鎖，常能給隊友提出各種天馬行空的音樂概念',
      '時尚品味非常有個人態度，常穿着完全出人意料的奇怪色彩混搭'
    ]
  },
  {
    name: 'DINO',
    realName: 'Lee Chan (이찬)',
    koreanName: '디노',
    role: 'Performance Team / Main Dancer / Sub-Rapper',
    birthDate: '1999.02.11',
    unit: 'Performance',
    avatarEmoji: '🦖',
    photoGradient: 'linear-gradient(135deg, #FEE2E2 0%, #FECDD3 100%)',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/240502_Dino_%28SEVENTEEN%29.png',
    colorHex: '#FDA4AF',
    zodiac: 'Aquarius (水瓶座)',
    instagram: 'feat.dino',
    description: 'SEVENTEEN 的「大勢忙內」。出身於舞者世家的他是天生的舞台掌控者，舞台力度精確得令人嘆為觀止。雖然年齡最小，但工作態度極度成熟嚴格。富有堅強的心靈意志，常常勇敢與 12 個哥哥開玩笑互懟，是團寵也是巨人的代表。',
    facts: [
      '被稱為「K-pop的未來」，偶像是米高·積遜，舞蹈風格力量感與速度感極高',
      '創立了自己的專屬舞蹈概念影音企劃《DINO\'S DANCEOLOGY》備受盛讚',
      '十分熱愛開麥歌唱與自主 Rap 創作，是全能型全能藝人',
      '雖然是老么，卻活得最為自律且有條理，有時反而像哥哥們的導師'
    ]
  }
];

export const ALBUMS: Album[] = WEBSITE_ALBUMS;

export const VARIETY_SHOWS: VarietyShow[] = WEBSITE_VARIETY;

export const MERCHANDISE: Merchandise[] = [
  {
    id: 'merch-1',
    name: 'Official Light Stick VER.3 10th Anniv',
    category: '應援手燈 (Lightstick)',
    price: '₩44,545',
    description: 'SEVENTEEN 10週年紀念限定特別版官方應援手燈！採用專屬 10th Anniversary 紀念款精裝外盒與限定特製防塵套，完美承襲經典克拉棒 Ver.3 的通透多面切角超靚鑽石設計。完美支持演唱會現場巨蛋級藍牙無線中控系統，與 13 位成員一同閃耀下一個黃金十年！',
    status: 'available',
    emoji: '💎',
    officialLink: 'https://shop.weverse.io/zh-tw/shop/KRW/artists/7/sales/36527',
    imageUrl: 'https://media.95music.com/product/K/K-M250324-SVTLS.jpg'
  },
  {
    id: 'merch-2',
    name: 'SEVENTEEN CARAT MEMBERSHIP',
    category: '粉絲會籍 (Membership)',
    price: '₩22,727',
    description: 'SEVENTEEN 官方全球粉絲俱樂部「CARAT」正式會員資格。加入即可解鎖個人專屬電子會員卡、Weverse 獨家專屬限定內容與圖片、巡迴演唱會及實體活動優先參與預售特權、正式會員限定周邊商品購買權利，以及精美的實體會員迎新套裝（選購）等豐富福利！',
    status: 'available',
    emoji: '🔑',
    officialLink: 'https://shop.weverse.io/zh-tw/shop/KRW/artists/7/sales/43824',
    imageUrl: 'https://cdn-contents.weverseshop.io/public/shop/bc3d2f9bd44ea768437ff361060d6e7b.png?w=720&q=95'
  },
  {
    id: 'merch-3',
    name: 'SEVENTEEN WORLD TOUR [RIGHT HERE] Uniform Shirt',
    category: '官方服飾 (Apparel)',
    price: '₩90,000',
    description: 'SEVENTEEN WORLD TOUR [RIGHT HERE] 官方巡迴演唱會排汗運動制服襯衫！選用極致輕盈、親膚排汗的機能透氣面料，搭配經典美式復古寬鬆落肩落落大方的排釦版型。正面胸前綴有簡約俐落的官方巡演 LOGO，背部則印有專屬霸氣的巡迴精神藝術圖騰，不論是日常街頭潮流穿搭還是極致現場應援，皆能完美襯托出青春動感！',
    status: 'preorder',
    emoji: '🧥',
    officialLink: 'https://shop.weverse.io/zh-tw/shop/KRW/artists/7/sales/32583',
    imageUrl: 'https://shoplineimg.com/6528e1e10660e20062880be5/673f35bf1fbe41000ebe8868/800x.webp?source_format=png'
  },
  {
    id: 'merch-4',
    name: 'SEVENTEEN WORLD TOUR [NEW_] DC',
    category: '官方影音 (Media)',
    price: '₩56,364',
    description: 'SEVENTEEN [NEW_]  全球巡迴世運主場館演唱會數位影像限定代碼套裝！內建高清流暢現場原汁原味演出與獨家秘辛花絮（支援多系統多國字幕）、附贈超厚實精裝概念寫真書、紀念明信片精選套組及幸運隨機成員珍藏卡，永駐閃耀的黃金夜晚！',
    status: 'available',
    emoji: '🃏',
    officialLink: 'https://shop.weverse.io/zh-tw/shop/KRW/artists/7/sales/57640',
    imageUrl: 'https://cdn-contents.weverseshop.io/public/shop/3941f212bda8998ab9d00044cc1aaf3b.png?w=720&q=95'
  },
  {
    id: 'merch-5',
    name: 'SEVENTEEN  MINITEEN Plush Toy',
    category: '萌趣玩偶 (Plush)',
    price: '₩35,455',
    description: 'SEVENTEEN 官方全新推出的 MINITEEN 系列絨毛萌趣小玩偶！精緻巧妙地捕捉 13 位成員獨一無二的萌趣神韻與精靈怪僻造型，選用 100% 親膚不刺肌膚的超彈性柔軟短毛絨精工製成，內部填充飽滿高回彈羽絨棉，抱感紮實細緻。每款皆附有高級金屬雙重彈簧掛扣，不論是擺置桌面陪伴工作，或是扣在隨身包袋上出門都散發無可抵擋的極致療癒感！',
    status: 'preorder',
    emoji: '🧸',
    officialLink: 'https://shop.weverse.io/zh-tw/shop/KRW/artists/7/sales/42410',
    imageUrl: 'https://shoplineimg.com/6528e1e10660e20062880be5/686f34b0196e36000acc82ad/800x.png?'
  },
  {
    id: 'merch-6',
    name: '12th Mini Album "SPILL THE FEELS" (Set)',
    category: '唱片專輯 (Album)',
    price: '₩56,455',
    description: 'SEVENTEEN 第12張迷你專輯《SPILL THE FEELS》官方限定珍藏 Set 套包！一次購入即可完美收集全套視覺概念，內含各版本極致精美的主題寫真冊（約84P）、寫真歌詞本、高音質 CD 碟盤、驚喜隨機成員照片卡、摺疊海報與多樣獨家特典贈品。傾聽成員最真摯溫暖的音樂密語，感受無與倫比的 K-pop 溫暖陪伴與藝術饗宴！',
    status: 'available',
    emoji: '💿',
    officialLink: 'https://shop.weverse.io/zh-tw/shop/KRW/artists/7/sales/30757',
    imageUrl: 'https://cdn-contents.weverseshop.io/public/shop/7a9c0e5c5eda3f7d1341079d0976e213.png?w=720&q=95'
  },
];

export const MINITEENS: Miniteen[] = [
  {
    name: '崔櫻桃 (CHOITCHERRY)',
    originalMember: 'S.COUPS',
    avatarEmoji: '🍒',
    colorHex: '#D6A4A4',
    photoGradient: 'linear-gradient(135deg, #F7CAC9 0%, #D6A4A4 100%)',
    photoUrl: 'https://img.girlstalk.cc/images/author/yifang/Untitled.jpg',
    characterType: 'S.coups 的化身',
    personality: '外冷內溫，不喜歡成為焦點，很容易害羞，但是有很多隱藏的肌肉！',
    features: [
      '頭上戴著一顆漂亮的紅櫻桃',
      '擁有溫暖而沉穩的氣質',
      '做事低調但充滿力量'
    ],
    facts: [
      '不喜歡成為焦點，很容易害羞，但是有很多隱藏的肌肉！',
      '不小心摔倒時，頭上的櫻桃會啵的一聲亮起來。',
      '最喜歡指揮其他小土豆排隊，雖然通常大家都不怎麼理他。'
    ],
    residence: '江南或是龍山某處',
    favoriteFood: '香煎鮭魚排、生拌牛肉',
    favoriteSong: 'K-pop 所有偶像',
    hobbies: '躺一整天',
    mbti: 'ISFJ'
  },
  {
    name: '淨兔鼠 (JJONGTORAM)',
    originalMember: 'JEONGHAN',
    avatarEmoji: '👼',
    colorHex: '#E2CCE9',
    photoGradient: 'linear-gradient(135deg, #F7CAC9 10%, #E2CCE9 100%)',
    photoUrl: 'https://img.girlstalk.cc/images/author/yifang/Untitled-1.jpg',
    characterType: 'Jeonghan 的化身',
    personality: '聰明絕頂、古靈精怪的天使兔鼠，偶爾會圍著毯子飛翔。',
    features: [
      '擁有一雙長長的兔子耳朵與松鼠尾巴',
      '身上總是披著柔軟溫馨的小毯子',
      '帶著無辜甜美微笑的粉紫兔鼠外型'
    ],
    facts: [
      '偶爾會圍著毯子飛翔，享受自由自在的風。',
      '一天中大部分時間都要蓋毯子睡覺或發呆。',
      '智商極高，能在調皮搗蛋之餘出其不意地幫助朋友。'
    ],
    residence: '清潭洞240208-1004',
    favoriteFood: '部隊鍋',
    favoriteSong: '原聲音樂',
    hobbies: '兜風、看海、收集毯子',
    mbti: 'LOVE',
    specialNotes: '偶爾會圍著毯子飛翔'
  },
  {
    name: '刷粟米 (SHUASUMI)',
    originalMember: 'JOSHUA',
    avatarEmoji: '🦌',
    colorHex: '#E5DFA9',
    photoGradient: 'linear-gradient(135deg, #EAE5C9 0%, #F7CAC9 100%)',
    photoUrl: 'https://img.girlstalk.cc/images/author/yifang/Untitled-2.jpg',
    characterType: 'Joshua 的化身',
    personality: '溫柔優雅但有時非常無厘頭，因為怕變髒一天會洗三次澡。',
    features: [
      '頭上長著一對金金亮亮、掛滿串珠的小鹿角',
      '閃爍著如純淨泉水般的星光大眼睛 (鹿眼)',
      '脖子上常年繫著一根精緻的藍白色格紋領結'
    ],
    facts: [
      '因為極其怕變髒，一天會洗三次澡！',
      '特別擅長把樹枝和野花串成五彩編織手鍊送給小夥伴。',
      '對蟲子很脆弱，看到蟲子、泥巴時會輕輕跺腳逃跑。'
    ],
    residence: '蘇格蘭森林',
    favoriteFood: '牛排、柳橙、香草冰淇淋',
    favoriteSong: 'Jazz、R&B',
    hobbies: '調香水、烹飪、散步、游泳、衝浪、滑雪',
    dislikedThings: '蟲子、變髒、泥巴'
  },
  {
    name: '文開門/文關門/文鎖門 (OPEN/CLOSE/LOCK)',
    originalMember: 'JUN',
    avatarEmoji: '🐱',
    colorHex: '#A2B8DC',
    photoGradient: 'linear-gradient(135deg, #CBD5E1 0%, #92A8D1 100%)',
    photoUrl: 'https://img.girlstalk.cc/images/author/yifang/Untitled-3.jpg',
    characterType: 'Jun 的化身',
    personality: '性格會隨開門（開朗）、關門（安靜）、鎖門（親切）不停變化。',
    features: [
      '嘴角永遠帶著上揚一絲弧度的粉桃色貓唇',
      '兩隻毛茸茸且一激動就會瘋狂抖動的藍灰色貓耳',
      '一條又長又大、走路時會圈成愛心形狀的尾巴'
    ],
    facts: [
      '最喜歡運動、閱讀小說，以及在山上吃火鍋。',
      '可在任何立體表面上彈奏無聲鋼琴，彈得非常陶醉。',
      '最好的朋友就是 SEVENTEEN 的 Jun 本尊！'
    ],
    residence: '貓咪森林/貓咪湖/貓咪山',
    favoriteFood: '橘子/檸檬/桃子',
    favoriteSong: "Very Nice / Fallin' Flower / 凌白熱",
    hobbies: '運動 / 閱讀書與小說 / 在山上吃火鍋',
    specialNotes: '性格會隨著開門、關門、鎖門而變化：開朗/安靜/親切'
  },
  {
    name: '眈眈 (TAMTAM)',
    originalMember: 'HOSHI',
    avatarEmoji: '🐯',
    colorHex: '#F43F5E',
    photoGradient: 'linear-gradient(135deg, #FFF1F2 0%, #F43F5E 100%)',
    photoUrl: 'https://img.girlstalk.cc/images/author/yifang/Untitled-4.jpg',
    characterType: 'Hoshi 的化身',
    personality: '熱熱烈、充滿舞台魅力。名字由來是「虎視眈眈」（호시탐탐）。',
    features: [
      '眼睛微微向上傾斜，定格在最熱辣的十點十分方向',
      '穿著一件隨時冒著小夥伴亮黃斑紋老虎連身衣',
      '手心有兩個肉肉的粉紅色「虎爪」粉印'
    ],
    facts: [
      '眈眈的名字由來正是成語「虎視眈眈」（호시탐탐）！',
      '極其熱愛 CARAT 和躺著打滾，活力永遠是 13 萬分。',
      '一哼歌或跳舞就會爆發驚人的老虎 Power！'
    ],
    residence: '虎穴',
    favoriteFood: '克拉們的愛、辛奇(泡菜)',
    favoriteSong: '老虎的Power (호랑意Power)',
    hobbies: '一二三木頭人、躺著打滾',
    favoriteThings: 'CARAT、躺著打滾',
    mbti: 'INFP'
  },
  {
    name: '狐袋子 (FOXDUNGEE)',
    originalMember: 'WONWOO',
    avatarEmoji: '🦊',
    colorHex: '#94A3B8',
    photoGradient: 'linear-gradient(135deg, #E2E8F0 0%, #475569 100%)',
    photoUrl: 'https://img.girlstalk.cc/images/author/yifang/Untitled-5.jpg',
    characterType: 'Wonwoo 的化身',
    personality: '安靜溫和、好奇心旺盛，生來擁有六條尾巴的閱讀宅狐狸。',
    features: [
      '鼻樑上掛著一副快滑下來的黑框復古小眼鏡',
      '一雙細長而深邃、帶著智慧智慧光芒的狐狸眼',
      '擁有六條漂亮蓬鬆的狐狸尾巴，好奇心旺盛且耳朵挺拔'
    ],
    facts: [
      '擁有六條溫暖的尾巴，是大家最愛靠著睡覺的蓬鬆抱枕。',
      '可以連續24小時沉浸在玩遊戲以及用相機記錄美好生活中。',
      '說話聲音極低，小夥伴需要貼在耳朵邊才能聽清他的悄悄話。'
    ],
    residence: '寬敞的房子',
    favoriteFood: '辣炒年糕',
    favoriteSong: '搖滾樂',
    hobbies: '拍照、玩遊戲',
    mbti: 'ROCK',
    specialNotes: '有六條尾巴、好奇心旺盛（豎著耳朵）'
  },
  {
    name: 'ㄆㄧㄡ噗哩 (PPYOPULI)',
    originalMember: 'WOOZI',
    avatarEmoji: '🍚',
    colorHex: '#EC4899',
    photoGradient: 'linear-gradient(135deg, #FDF2F8 0%, #EC4899 100%)',
    photoUrl: 'https://img.girlstalk.cc/images/author/yifang/Untitled-6.jpg',
    characterType: 'Woozi 的化身',
    personality: '冷靜專注的音樂大師，生活在電鍋，不喜歡任何喧鬧或太黏人的事物。',
    features: [
      '形狀像一枚剛捏好、冒著白氣的軟Q三角形白飯糰',
      '頭上放有特製小菜，能更換不同鮮豔顏色並改變髮調',
      '一雙終日睡不飽、一激動就變成一字線的超萌豆豆眼'
    ],
    facts: [
      '頭頂的小菜配料會隨著心情或染髮更換不同顏色！',
      '每天最愛在溫暖的電鍋裡構思新旋律，紫菜是他的生命源泉。',
      '非常高冷，誰要強行擁抱他，他就會用魔法棒輕輕敲打抗議。'
    ],
    residence: '電鍋',
    favoriteFood: '紫菜',
    favoriteSong: '舞曲',
    hobbies: '染髮 (根據放在頭上的小菜不停更換顏色)',
    dislikedThings: '充滿活力的事物'
  },
  {
    name: 'the趴哩 (THEPALEE)',
    originalMember: 'THE 8',
    avatarEmoji: '🐸',
    colorHex: '#52525B',
    photoGradient: 'linear-gradient(135deg, #A1A1AA 0%, #3F3F46 100%)',
    photoUrl: 'https://img.girlstalk.cc/images/author/yifang/Untitled-7.jpg',
    characterType: 'The 8 的化身',
    personality: '時尚前衛，酷愛茶道與畫畫，性格冷幽默，可以寄生（粘附）在他人身上。',
    features: [
      '頭上戴著精緻黑色貝雷帽，架著酷炫反光墨鏡',
      '隨身攜帶一把大茶壺，一邊走路一邊優雅倒茶',
      '長長的四肢，可以輕鬆附著在哥哥弟弟的名牌背後'
    ],
    facts: [
      '具有令人捧腹的特技：能像貼紙一樣緊緊「寄生」在其他角色身上！',
      '能一邊單腳站在荷葉上冥想，一邊用腳丫子倒普洱茶。',
      '在下雨的地方聽雨聲、畫畫、發起茶道對話是他最酷的儀式感。'
    ],
    residence: '下雨的地方',
    favoriteFood: '中國菜',
    favoriteSong: '呱呱',
    favoriteThings: '雨、茶道、畫畫、冥想',
    dislikedThings: '吵鬧、太冷',
    mbti: 'iiff',
    specialNotes: '可以寄生在其他角色身上 (黏在上面)'
  },
  {
    name: '金薯 (KIMJA)',
    originalMember: 'MINGYU',
    avatarEmoji: '🐶',
    colorHex: '#F59E0B',
    photoGradient: 'linear-gradient(135deg, #FEF3C7 0%, #F59E0B 100%)',
    photoUrl: 'https://img.girlstalk.cc/images/author/yifang/Untitled-8.jpg',
    characterType: 'Mingyu 的化身',
    personality: '愛鬧彆扭但也消氣最快，雖然特別能吃但又極講衛生的大暖汪。',
    features: [
      '香檳金大狗耳與一激動就飛快扇風的小狗尾巴',
      '一邊有著亮白可愛「小虎牙」的傻笑狗狗嘴',
      '手持洋芋片或者繫著格子廚房吊帶圍裙'
    ],
    facts: [
      '紅薯是他的宿命剋星兼強大對手，因此他完全討厭紅薯！',
      '精通大排檔廚藝，但每天必須豪氣地使用松露油洗一個護皮熱水澡。',
      '性格十分傲嬌，如果有人說他做飯一般，他會假裝生氣扭頭跑開。'
    ],
    residence: '廚房',
    favoriteFood: '洋芋片（吃洋芋片、用松露油洗澡）',
    favoriteSong: '鄉村音樂！',
    hobbies: '吃洋芋片、用松露油洗澡',
    dislikedThings: '紅薯...對手...！',
    mbti: 'ENFJ',
    personalityDetail: '愛鬧彆扭，消氣也快、能吃、非常愛乾淨'
  },
  {
    name: '道兒 (DOA)',
    originalMember: 'DK',
    avatarEmoji: '🐴',
    colorHex: '#3B82F6',
    photoGradient: 'linear-gradient(135deg, #DBEAFE 0%, #3B82F6 100%)',
    photoUrl: 'https://img.girlstalk.cc/images/author/yifang/Untitled-9.jpg',
    characterType: 'DK 的化身',
    personality: '乖巧溫柔，但十分愛吃與充滿瘋狂能量，超級狂熱擁抱怪。',
    features: [
      '額上繫著一條寫著反光「DK」的大發光帶頭衛',
      '一張咧得很開、幾乎佔據半邊臉、永遠在燦爛大笑的陽光大嘴',
      '擁有能跳極富動感「馬步扭屁股舞」的完美柔軟尾巴'
    ],
    facts: [
      '因為極度鍾情於溫潤的大擁抱，他的首選神曲永遠是《HUG》。',
      '雖然大部分時間很聽話，但只要好吃的被搶走，就會調皮地嗷嗚咬主人。',
      '他的高音歌聲清澈響亮，能直接把兩公里外的精緻茶杯唱碎。'
    ],
    residence: 'DK哥的心裡',
    favoriteSong: 'HUG （因為喜歡擁抱）',
    favoriteThings: 'DK哥\u11ab、DK哥喜歡的克拉們',
    dislikedThings: '香菜、芹菜、茄子',
    personalityDetail: '很乖巧，但充滿了比特犬的魅力，看到吃的會瘋狂！偶爾會咬主人'
  },
  {
    name: 'BOO小橘 (BBOOGYULI)',
    originalMember: 'SEUNGKWAN',
    avatarEmoji: '🍊',
    colorHex: '#F97316',
    photoGradient: 'linear-gradient(135deg, #FFEDD5 0%, #F97316 100%)',
    photoUrl: 'https://img.girlstalk.cc/images/author/yifang/Untitled-10.jpg',
    characterType: 'Seungkwan 的化身',
    personality: '全宇宙越看越可愛、帶有甜甜果香的新鮮大甜桔子。',
    features: [
      '全身長得圓滾滾，就像是一顆長了四肢跟小腳的大萌橘',
      '頭頂冒出一片細嫩嫩、隨好心情不停微小震顫的綠小葉片',
      '手心牢牢吸著一支閃亮的粉色專屬主持人微型水晶麥克風'
    ],
    facts: [
      '極度喜歡打羽毛球跟吃甜辣雞塊，堅信Cheating Day才是最棒的！',
      '極度討厭蔬菜盤裡的黃瓜與番茄。被笑話冷場時他會全力自救。',
      '哭泣的時候，據說擠出來的眼淚常年帶有濟州頂級甜橙汁的高雅芳香。'
    ],
    residence: '濟州市 論峴洞',
    favoriteFood: '咖啡 \u11ab、天惠香、甜辣雞塊',
    favoriteSong: 'K - POP',
    favoriteThings: 'Cheating、吃天惠香、吃甜辣雞塊、打羽毛球',
    dislikedThings: '黃瓜、番茄、聽了我的笑話毫無反應',
    personalityDetail: '有點可愛、越看越可愛'
  },
  {
    name: '噥啵 (NONVER)',
    originalMember: 'VERNON',
    avatarEmoji: '🐻',
    colorHex: '#10B981',
    photoGradient: 'linear-gradient(135deg, #D1FAE5 0%, #10B981 100%)',
    photoUrl: 'https://img.girlstalk.cc/images/author/yifang/Untitled-11.jpg',
    characterType: 'Vernon 的化身',
    personality: '擁有迷幻酷感、超凡物理維度的休閒熊熊。',
    features: [
      '頭扣復古 3D 紅藍紙墨眼鏡，神情永遠在探索宇宙未知空間',
      '戴著一副終日不摘的抗噪薄荷綠耳罩式大耳機',
      '胖胖小拳頭緊抓著裝裝滿滾熱巧克力甜奶茶的暖手杯'
    ],
    facts: [
      '對他而言，最幸福的就是擁有大把無拘無束的閒暇時光。',
      '大腦常年在太空漂流冥想，對身邊大吼大叫的小土豆反應慢三拍。',
      '最拿手的美食自製料理是茄汁燉蛋，被他豪邁地稱為「地獄之蛋」。'
    ],
    residence: '首爾',
    favoriteFood: '茄汁燉蛋（地獄之蛋）',
    favoriteSong: '太多了',
    favoriteThings: '閒暇時間',
    dislikedThings: '睡眠不足',
    hobbies: '自由地玩耍'
  },
  {
    name: '燦噠哩 (CHANDALEE)',
    originalMember: 'DINO',
    avatarEmoji: '🦖',
    colorHex: '#FDA4AF',
    photoGradient: 'linear-gradient(135deg, #FEE2E2 0%, #FECDD3 100%)',
    photoUrl: 'https://img.girlstalk.cc/images/author/yifang/Untitled-12.jpg',
    characterType: 'Dino 的化身',
    personality: '充滿熱血自信、喜歡結交一眾摯友、一唱歌跳起舞就超級愛笑的水獺恐龍仔。',
    features: [
      '尾巴呈胖嘟嘟水獺龍形，後背嵌有三片精緻粉紅小背甲',
      '神采飛揚的双眸，充滿了隨時要在舞台上大展身手的驚人光彩',
      '頭上端正頂著一頂迷你銀白爵士帽'
    ],
    facts: [
      '性格極度開朗，人緣超棒，酷愛交朋友並向他們展現自信！',
      '對馬鈴薯排骨湯的美味情有獨鍾。聽到 R&B 就情不自禁扭動身姿。',
      '一高興起來就會張開恐龍嘴发出嗷嗚嗷嗚的霸氣嚎叫，無比惹人喜愛。'
    ],
    residence: '水獺王國',
    favoriteFood: '排骨馬鈴薯湯',
    favoriteSong: 'R&B',
    hobbies: '運動',
    mbti: 'INFJ',
    personalityDetail: '愛笑、喜歡交友、充滿自信'
  }
];
