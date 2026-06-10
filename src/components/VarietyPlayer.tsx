import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Tv, MessageSquare, Volume2, Sparkles, Send, Flame, RotateCcw, Award, Youtube } from 'lucide-react';
import { getVarietyYouTubeUrl } from '../utils/youtubeLinks';

interface Episode {
  number: string;
  title: string;
  description: string;
  varietyShowTitle: string;
}

interface VarietyPlayerProps {
  currentEpisode: Episode | null;
  onClose: () => void;
}

// Seed mock subtitles / quotes for each specific episode to make it highly immersive!
const EPISODE_QUOTES: Record<string, { time: number; speaker: string; text: string }[]> = {
  '《SVT 恐怖捕手 (The Tag)》': [
    { time: 0, speaker: '導播', text: '成員們正進入廢棄密室，厲鬼NPC已就位...' },
    { time: 4, speaker: 'JEONGHAN', text: '大家抓緊手，千萬不要單獨走散！' },
    { time: 10, speaker: 'HOSHI', text: '（突然NPC鬼影閃過）啊啊啊！我是老虎！🐯 虎浪嘿！別抓我！' },
    { time: 16, speaker: 'DK', text: '（被嚇到爆哭）媽媽呀！這地方真有鬼！我不玩了！⚔️' },
    { time: 22, speaker: 'WONWOO', text: '（極致冷靜）這裡有個發光的鑰匙，好像可以解除機關。' },
    { time: 28, speaker: 'MINGYU', text: '（大型犬瑟瑟發抖）俊輝啊，你在我前面，我不敢看！🐶' }
  ],
  '《돈\'t Lie (Don\'t Lie) 系列》': [
    { time: 0, speaker: '導播', text: '經典黑手黨狼人殺大作戰，20萬韓元獎金隱藏中！' },
    { time: 4, speaker: 'HOSHI', text: '我發誓，我百分之百不是殺手！如果是，我明天不喊虎浪嘿！' },
    { time: 10, speaker: 'JEONGHAN', text: '（神秘微笑）珉奎啊，你剛才宣布發牌的時候，手抖了一下吧？👼' },
    { time: 16, speaker: 'MINGYU', text: '（大聲辯解）淨漢哥！你又開始編了！我連牌都沒碰到！🐶' },
    { time: 22, speaker: 'SEUNGKWAN', text: '（夫教授瘋狂分析）看腳步！剛才天黑時，右邊傳來了高跟鞋一樣的踏步聲！' },
    { time: 28, speaker: 'VERNON', text: '（嚼著零食看戲）Wow, 雖然不知道誰是狼，但這裡戲真好看。🐢' }
  ],
  '《EGO (自我精神病院)》': [
    { time: 0, speaker: '導播', text: 'GOING 歷史最高驚悚解密神作。13位病人的逃生錄。' },
    { time: 4, speaker: 'WOOZI', text: '（觀察血跡斑斑的櫃子）這裡有張病歷卡，密碼是我們出道日嗎？🍚' },
    { time: 10, speaker: 'THE 8', text: '（在黑暗中冥想）別急，越恐怖越要冷靜，這都是道具。🐸' },
    { time: 16, speaker: 'DINO', text: '（大喊）哥！那邊的假人動了！它真的轉頭看向我了！🦖' },
    { time: 22, speaker: 'JEONGHAN', text: '（拿著手電筒）我們來找找院長的日記，裡面可能有逃生暗道。' },
    { time: 28, speaker: 'S.COUPS', text: '（擋在前面）大家躲到我後面，我是總隊長，有事我先挨！🍒' }
  ],
  '《合作不愉快大作戰 (Ad-lib Semi-formal)》': [
    { time: 0, speaker: '導播', text: '懷舊便利店內的即興情景劇！忍笑大作戰！' },
    { time: 4, speaker: 'SEUNGKWAN', text: '（穿著復古大衣）老闆，你這顆滷蛋為什麼長得像 WOOZI 哥？🍊' },
    { time: 10, speaker: 'WOOZI', text: '（瘋狂憋笑，拿著紙袋敲頭）這位客人，本便利店不支持人身攻擊！🍚' },
    { time: 16, speaker: 'DK', text: '（戴著搞笑安全帽登場）我是今天來送貨的！大家不要看我，看我就被罰了！' },
    { time: 22, speaker: 'JOSHUA', text: '（無厘頭唱英文歌）Let me sing a Lullaby for this dirty egg... 🦌' },
    { time: 28, speaker: 'JUN', text: '（背斜挎包在一旁默默偷吃辣條）麻辣的味道，真香！🐱' }
  ],
  '《高空彈跳 (Bungee Jump)》': [
    { time: 0, speaker: '導播', text: '高空彈跳終極特輯，團魂與尖叫齊飛！' },
    { time: 4, speaker: 'DK', text: '（站在踏板上爆哭，足足站了10分鐘）我真的害怕... 兄弟們... ⚔️' },
    { time: 10, speaker: 'HOSHI', text: '（大喊）李碩珉！跳下去！你就是亞瑟王！音樂劇男主角無所不能！' },
    { time: 16, speaker: 'DK', text: '（縱身一躍）SEVENTEEN 사랑해 (我愛你們)！！！' },
    { time: 22, speaker: 'MINGYU', text: '（在下面熱淚盈眶）看哭了我，碩珉真的太棒了，他是英雄！' },
    { time: 28, speaker: 'S.COUPS', text: '（欣慰拍手）這就是我們的團魂，沒有任何高度能阻擋我們前進。' }
  ],
  '《深夜宿醉突襲綁架實錄》': [
    { time: 0, speaker: '導播', text: '羅PD深夜突襲巨蛋後宿醉酒店！綁架行動開始！' },
    { time: 4, speaker: '羅PD', text: '成員們還在熟睡中。開門！當噹噹！早上好，SEVENTEEN！' },
    { time: 10, speaker: 'WOOZI', text: '（穿著小寬鬆短褲，拿著牙刷）...羅PD？這不是在做夢吧？🍚' },
    { time: 16, speaker: 'SEUNGKWAN', text: '（一臉懵圈）等等！我們不是明天才回韓國嗎？這是直飛義大利的飛機？！' },
    { time: 22, speaker: 'JEONGHAN', text: '（穿著長袍外套，一秒清醒）哈哈！行李都不用收拾了，拿上海關護照，走！' },
    { time: 28, speaker: 'MINGYU', text: '（只拿著一個塑料袋裝底褲）我的護膚品都沒帶啊，羅PD你是魔鬼嗎！🐶' }
  ],
  '《托斯卡尼達人才藝表演大賞》': [
    { time: 0, speaker: '導播', text: '義大利草坪上的爆笑才藝演出，羅PD親自評分。' },
    { time: 4, speaker: '羅PD', text: '現在開始才藝表演。勝出者可以獲得一整瓶陳年頂級莊園紅酒！' },
    { time: 10, speaker: 'SEUNGKWAN & WOOZI', text: '（經典傳統雙人漫才相聲一搭一唱）觀眾朋友們大家好！我們是夫碩...不對，是夫李！' },
    { time: 16, speaker: 'DK', text: '（扮演亞瑟王，用木棍當劍）看我用這把劍斬斷托斯卡尼的番茄！⚔️' },
    { time: 22, speaker: 'THE 8', text: '（秀驚世駭俗的一秒空翻，羅PD直接驚掉下巴給出滿分）🐸' },
    { time: 28, speaker: 'JEONGHAN', text: '（耍小聰明用硬幣魔術直接把紅酒偷走）這紅酒現在是我的了。👼' }
  ],
  '《熱氣球初體驗與真摯告白》': [
    { time: 0, speaker: '導播', text: '清晨的義大利大平原，熱氣球缓缓升空，浪漫而感性。' },
    { time: 4, speaker: 'JOSHUA', text: '俯瞰整個托斯卡尼，朝陽真的太美了... 像畫一樣。🦌' },
    { time: 10, speaker: 'VERNON', text: '（戴著名牌墨鏡）Yeah, this is cinematic. 這就是人生的意義。🐢' },
    { time: 16, speaker: 'SEUNGKWAN', text: '（共情眼眶濕潤）跟哥哥們還有弟弟們在一起十年，能這樣看日出，太幸福了。' },
    { time: 22, speaker: 'DK', text: '（擦眼淚）我愛SEVENTEEN，我們要一直一直唱到80歲！⚔️' },
    { time: 28, speaker: 'S.COUPS', text: '（欣慰地摟住大家）13個人，一個都不能少。克拉們，謝謝你們給的力量。' }
  ],
  '《初入秋島！大驚失色》': [
    { time: 0, speaker: '導播', text: '十一年前青澀時代，經典秋島自給自足大冒險！' },
    { time: 4, speaker: '導播組', text: '這裡是不毛之島秋島，把你們所有隨身包、保養品和私房錢都放進這個塑料袋！' },
    { time: 10, speaker: 'S.COUPS', text: '（瞳孔地震）什麼？！連牙刷都要沒收？！這跟我們說好的度假節目不一樣啊！' },
    { time: 16, speaker: 'WONWOO', text: '（戴著黑框眼鏡發呆）...島上居然連小賣部都沒有。🐱' },
    { time: 22, speaker: 'MINGYU', text: '（拿著大鐵勺子）看來今天只能靠生火烤魚活下去了，哥哥們，開工吧！' },
    { time: 28, speaker: 'JEONGHAN', text: '（對海灘大喊）導演！我們一定會把海鮮全部撈光吃飽的！👼' }
  ],
  '《金敏主廚與捕魚戰隊》': [
    { time: 0, speaker: '導播', text: 'MINGYU 主廚附體，搞定 13 人份豪華海鮮宴！' },
    { time: 4, speaker: 'MINGYU', text: '（熟練洗菜、切土豆）看好了！這就是秋島萬能主廚的实力，今晚吃鐵板大烤魚！🐶' },
    { time: 10, speaker: 'HOSHI', text: '（拿著砍刀劈柴）珉奎，火生好了！可以開火了嗎？🐯' },
    { time: 16, speaker: 'WOOZI', text: '（坐在一旁幫忙剝蒜）珉奎做飯真是天才，沒有他我們真得挨餓了。🍚' },
    { time: 22, speaker: 'DK & SEUNGKWAN', text: '（提著桶回來）抓到八爪魚了！還有三條肥美的海魚！我們晚上加餐！' },
    { time: 28, speaker: 'JUN', text: '（嚐了一口湯）哇！這味道堪比首爾米其林，珉奎萬歲！🐱' }
  ],
  '《大型鐵板烤五花肉狂歡派對》': [
    { time: 0, speaker: '導播', text: '森友會治癒之夜，搭起大鐵板烤五花肉！' },
    { time: 4, speaker: 'MINGYU', text: '（把五大塊厚五花肉鋪在大鐵板上，滋滋作響）🐶' },
    { time: 10, speaker: 'DK', text: '（口水直流，在一旁手舞足蹈）歐買尬！這聲音是世界上最美妙的交響曲！' },
    { time: 16, speaker: 'THE 8', text: '（調製大蒜麻油沾醬）烤五花肉配辛奇（泡菜）和真露，這是頂級享受。🐸' },
    { time: 22, speaker: 'VERNON', text: '（大口吃肉）Wow, 這肉質太完美了，在忙碌的工作後真的太治癒。🐢' },
    { time: 28, speaker: 'S.COUPS', text: '（舉杯）為了 SEVENTEEN 的健康！為了克拉！乾杯！🍷' }
  ],
  '《足網球大亂鬥與卡丁極速》': [
    { time: 0, speaker: '導播', text: '草地足網球終極對決，誰是團內球類黑洞？' },
    { time: 4, speaker: 'JEONGHAN', text: '（大腳一踢發球）看我的幽靈發球！絕對接不住！👼' },
    { time: 10, speaker: 'JOSHUA', text: '（伸腳去擋結果摔了個屁股墩）哎呀！我的小鹿腿滑倒了！🦌' },
    { time: 16, speaker: 'HOSHI', text: '（扣殺高呼）老虎的力量！這一球必殺！🐯（直接把球踢飛進了隔壁小溪）' },
    { time: 22, speaker: 'DINO', text: '（爆笑）HOSHI哥！你到底是在踢球還是在找溪流啊！🦖' },
    { time: 28, speaker: 'SEUNGKWAN', text: '（慘遭排球砸臉，全場笑倒在地）不要再砸我漂亮的臉龐啦！🍊' }
  ]
};

// Seed variety bullet comments (彈幕) to fly across screen!
const MOCK_DANMUS = [
  '哈哈哈尹淨漢這個老千又開始了',
  '夫勝寬簡直是我的綜藝神仙！太搞笑了！',
  '金珉奎大狗狗被欺負的好慘哈哈哈',
  '李碩珉高音核能，膽子也是核能小🤣',
  'HOSHI虎浪嘿🐯🐯🐯',
  '這節目真的可以反覆看100遍！太下飯了！',
  'WOOZI冷靜看戲中，笑死我了',
  '文俊輝真的是無厘頭之神，辣條包包裝什麼啊',
  '徐明浩徐老師金句大爆發，太清醒了',
  'VERNON一臉看透紅塵的表情哈哈哈哈',
  'DINO老么果然最有氣場，管管哥哥們吧🦖',
  'S.COUPS真不愧是護弟狂魔，隊長太溫柔了',
  'Joshua 溫柔的外表，無厘頭的心，JOSHUA 萬歲！',
  '全圓佑戴眼鏡真的是斯文敗類既視感，太帥了！',
  '夫碩順隨時隨地在開相聲大會，哈哈哈哈',
  '克拉前來報到！💎 SVT 一生推！',
  '羅PD被這13個人逼瘋的100種方法',
  '果然是美好的一天（大誤）是荒野大逃生吧🤣',
  '森友會真的太高保真治癒了，今晚又是幸福的一天'
];

export default function VarietyPlayer({ currentEpisode, onClose }: VarietyPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [bullets, setBullets] = useState<{ id: number; text: string; top: number; speed: number; color: string }[]>([]);
  const [userInputBullet, setUserInputBullet] = useState('');
  const [currentQuote, setCurrentQuote] = useState({ speaker: '導播', text: '精彩內容即將呈现' });
  const [volume, setVolume] = useState(80);
  const [videoFlasher, setVideoFlasher] = useState<string | null>(null);

  const maxDuration = 32; // simulated duration per highlight trailer 
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const bulletIdRef = useRef(0);

  // Auto-launch periodic initial bullets (danmu)
  useEffect(() => {
    let danmuTimer: NodeJS.Timeout;
    if (isPlaying) {
      danmuTimer = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * MOCK_DANMUS.length);
        const randomTop = Math.floor(Math.random() * 60) + 10; // random height percentage (10% to 70%)
        const randomSpeed = Math.floor(Math.random() * 5) + 6; // random duration in seconds for flight (6s to 10s)
        
        // beautiful pastel SVT colors for bullet comment
        const colors = ['#FFF', '#F7CAC9', '#92A8D1', '#FFF1F2', '#E2CCE9', '#FED7AA'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        setBullets(prev => [
          ...prev, 
          { 
            id: bulletIdRef.current++, 
            text: MOCK_DANMUS[randomIndex], 
            top: randomTop, 
            speed: randomSpeed,
            color: randomColor
          }
        ]);
      }, 2500);
    }
    return () => clearInterval(danmuTimer);
  }, [isPlaying]);

  // Main simulated video play clock
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= maxDuration) {
            return 0; // Loop play
          }
          return prev + 1;
        });
      }, 1000 / playbackSpeed);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, playbackSpeed]);

  // Find and update current subtitle quote mapped to specific time
  useEffect(() => {
    if (!currentEpisode) return;
    const quotes = EPISODE_QUOTES[currentEpisode.title] || [];
    
    // Find matching quote for current played second
    const match = [...quotes].reverse().find(q => currentTime >= q.time);
    if (match) {
      setCurrentQuote({ speaker: match.speaker, text: match.text });
    } else {
      setCurrentQuote({ speaker: '導播', text: `精選片段《${currentEpisode.title}》高能熱播中` });
    }
  }, [currentTime, currentEpisode]);

  // Handler to manually send a bullet comment (danmu)
  const handleSendBullet = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInputBullet.trim()) return;
    
    const randomTop = Math.floor(Math.random() * 50) + 15;
    const randomSpeed = 6; // slightly faster for user bullet
    
    setBullets(prev => [
      ...prev,
      {
        id: bulletIdRef.current++,
        text: userInputBullet.trim() + " 👈 (我發的)",
        top: randomTop,
        speed: randomSpeed,
        color: '#F43F5E' // Hot pink for user bullet so they stand out!
      }
    ]);
    
    setUserInputBullet('');
  };

  // Fun soundboard trigger with caption flash
  const triggerReaction = (type: string, message: string) => {
    setVideoFlasher(message);
    const audioFramer = document.getElementById('flasher-box');
    if (audioFramer) {
      audioFramer.classList.remove('animate-ping');
      void audioFramer.offsetWidth; // trigger reflow
    }
    setTimeout(() => setVideoFlasher(null), 2500);
  };

  if (!currentEpisode) return null;

  const percentagePlayed = (currentTime / maxDuration) * 100;

  return (
    <div className="bg-slate-950 text-white rounded-[2.5rem] p-6 md:p-8 flex flex-col md:flex-row gap-8 shadow-2xl relative border border-slate-800 overflow-hidden">
      
      {/* Absolute decorative header element */}
      <div className="absolute top-0 right-10 bg-[#92A8D1] text-slate-950 rounded-b-xl px-4 py-1 text-[8px] font-mono tracking-widest font-extrabold uppercase">
        SVT THEATRE-CAST HD
      </div>

      {/* LEFT: Video Player Monitor Interface */}
      <div className="w-full md:w-7/12 flex flex-col">
        {/* Dynamic Mock CRT Screen Frame */}
        <div className="relative aspect-video w-full rounded-2xl bg-slate-900 border border-slate-800 shadow-inner overflow-hidden select-none group flex flex-col justify-between items-center p-4">
          
          {/* Subtle Scanline Overlay Effect */}
          <div className="absolute inset-0 bg-scanlines pointer-events-none opacity-5 z-20" />
          
          {/* Top Status Indicators */}
          <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-20">
            <div className="flex items-center gap-2 bg-black/60 px-3 py-1 rounded-full border border-white/10 text-[9px] font-mono">
              <span className={`w-1.5 h-1.5 rounded-full ${isPlaying ? 'bg-red-500 animate-pulse' : 'bg-slate-500'}`} />
              <span className="tracking-wide">SIMULATING {currentEpisode.number} ({playbackSpeed}x)</span>
            </div>
            <div className="flex gap-1">
              <span className="text-[10px] bg-black/40 px-2 py-0.5 rounded text-white/50 border border-white/5">Auto</span>
              <span className="text-[10px] bg-rose-600/70 px-2 py-0.5 rounded text-white font-bold blink shadow-sm text-[8px]">LIVE 彈幕</span>
            </div>
          </div>

          {/* FLASSING SOUND REACTION EFFECT OVERLAY */}
          {videoFlasher && (
            <div id="flasher-box" className="absolute top-24 z-30 bg-pink-500/90 text-white px-6 py-2.5 rounded-full text-sm font-extrabold shadow-xl border border-white/30 tracking-widest transform scale-110 shadow-pink-500/50 flex items-center gap-2">
              <Sparkles size={16} fill="currentColor" />
              <span>{videoFlasher}</span>
            </div>
          )}

          {/* Centered screen audio visualizer bars when playing */}
          <div className="absolute inset-x-0 bottom-16 h-36 flex items-end justify-center gap-0.5 px-10 pointer-events-none z-10 opacity-30">
            {Array.from({ length: 42 }).map((_, idx) => (
              <div 
                key={idx}
                className="w-1.5 bg-gradient-to-t from-[#92A8D1]/80 to-[#F7CAC9]/90 rounded-t-full transition-all duration-300"
                style={{
                  height: isPlaying ? `${Math.floor(Math.random() * 80) + 12}%` : '5px',
                }}
              />
            ))}
          </div>

          {/* DYNAMIC ROLLING BULLET CHATTERS (DANMU) CANVAS */}
          <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
            {bullets.map(b => (
              <div
                key={b.id}
                className="absolute whitespace-nowrap text-[11px] font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] animate-danmu"
                style={{
                  top: `${b.top}%`,
                  color: b.color,
                  animationDuration: `${b.speed}s`
                }}
              >
                {b.text}
              </div>
            ))}
          </div>

          {/* TV icon background and placeholder text when paused */}
          {!isPlaying && (
            <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm z-30 flex flex-col justify-center items-center">
              <Tv size={50} className="text-pink-300 mb-3" />
              <h5 className="font-bold text-sm tracking-wide">綜藝節目已暫停</h5>
              <p className="text-[10px] text-slate-400 mt-1">點擊播放按鈕繼續觀看高能瞬間</p>
            </div>
          )}

          {/* Screen Content Wrapper space */}
          <div className="flex-1 w-full" />

          {/* Dynamic Mock Subtitles Overlay at video bottom */}
          <div className="w-full max-w-lg bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-3 px-4 text-center z-20 mt-auto">
            <span className="text-[9px] font-bold text-[#F7CAC9] bg-white/10 px-2 py-0.5 rounded tracking-wide font-mono mr-2">
              {currentQuote.speaker}
            </span>
            <span className="text-xs font-semibold text-white tracking-wide">
              {currentQuote.text}
            </span>
          </div>

        </div>

        {/* Video Scrubber & Timeline Progress control bar */}
        <div className="mt-4">
          <div 
            className="h-1.5 bg-slate-800 rounded-full overflow-hidden cursor-pointer relative"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const percentage = (e.clientX - rect.left) / rect.width;
              setCurrentTime(Math.floor(percentage * maxDuration));
            }}
          >
            <div 
              className="h-full bg-gradient-to-r from-[#F7CAC9] via-[#92A8D1] to-purple-400 rounded-full"
              style={{ width: `${percentagePlayed}%` }}
            />
          </div>
          
          <div className="flex justify-between items-center text-[10px] text-slate-500 font-mono mt-1.5">
            <span>{Math.floor(currentTime / 60)}:{(currentTime % 60).toString().padStart(2, '0')}</span>
            <span>0:{maxDuration} Trailer / Highlight</span>
          </div>
        </div>

        {/* Playback Controls Box */}
        <div className="flex flex-wrap items-center justify-between mt-4 bg-slate-900/60 p-4 rounded-2xl border border-slate-800/80 gap-4">
          
          {/* Main timeline controllers */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-10 h-10 rounded-full bg-white text-slate-950 hover:bg-slate-100 active:scale-95 transition-all flex items-center justify-center cursor-pointer shadow-md"
              title={isPlaying ? '暫停' : '播放'}
            >
              {isPlaying ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" className="translate-x-0.5" />}
            </button>
            
            <button 
              onClick={() => setCurrentTime(0)}
              className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/5 transition-all cursor-pointer"
              title="重新放映"
            >
              <RotateCcw size={16} />
            </button>
          </div>

          {/* Speed Controls tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-black/40 rounded-lg border border-white/5">
            {([0.5, 1, 1.5, 2] as const).map(speed => (
              <button
                key={speed}
                onClick={() => setPlaybackSpeed(speed)}
                className={`px-2.5 py-1 rounded text-[9px] font-bold font-mono transition-colors cursor-pointer ${
                  playbackSpeed === speed 
                    ? 'bg-gradient-to-r from-[#F7CAC9] to-[#92A8D1] text-slate-950 font-extrabold' 
                    : 'text-slate-500 hover:text-white'
                }`}
              >
                {speed}x
              </button>
            ))}
          </div>

          {/* Volume controls */}
          <div className="flex items-center gap-1.5">
            <Volume2 size={13} className="text-slate-500" />
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="w-12 sm:w-16 h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#92A8D1]"
              title={`音量: ${volume}%`}
            />
          </div>

        </div>

      </div>

      {/* RIGHT: Selected Episode Meta details & Community Interactive Soundboard */}
      <div className="w-full md:w-5/12 flex flex-col justify-between">
        <div className="flex flex-col flex-1">
          
          {/* Header titles */}
          <div className="flex justify-between items-start border-b border-slate-800 pb-4 mb-4">
            <div>
              <span className="text-[8px] font-mono font-extrabold text-[#F7CAC9] tracking-widest block uppercase">
                {currentEpisode.varietyShowTitle}
              </span>
              <h4 className="text-lg font-bold text-white leading-tight mt-1">
                {currentEpisode.number} — {currentEpisode.title}
              </h4>
            </div>
            <button 
              onClick={onClose}
              className="text-xs bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white px-2.5 py-1 rounded-lg border border-slate-800 transition-colors"
            >
              隱藏放映
            </button>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed font-normal mb-3">
            {currentEpisode.description}
          </p>

          <div className="mb-5 flex">
            <a
              href={getVarietyYouTubeUrl(currentEpisode.title, currentEpisode.varietyShowTitle)}
              target="_blank"
              rel="noreferrer referrerPolicy"
              className="inline-flex items-center gap-2 text-[11px] font-bold text-white bg-red-650 hover:bg-red-700 transition-all px-4 py-2 rounded-xl shadow-md tracking-wide cursor-pointer w-full justify-center sm:w-auto"
            >
              <Youtube size={14} fill="currentColor" />
              <span>在 YouTube 觀看本集節目 ↗</span>
            </a>
          </div>

          {/* Fun Reactions Soundboard - fully customized with icons */}
          <div className="mb-6 bg-slate-900/35 p-4 rounded-2xl border border-slate-800/60">
            <h5 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
              <Award size={12} className="text-yellow-400" />
              <span>克拉經典配音發聲器 (SOUND REACTION)</span>
            </h5>
            
            <div className="grid grid-cols-2 gap-2">
              <button 
                onClick={() => triggerReaction('tiger', '호랑해🐯! 老虎發光!')}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-850 hover:bg-slate-800 transition-transform active:scale-95 text-xs font-semibold text-white/90 flex items-center gap-1.5 cursor-pointer text-left"
              >
                <span>🐯 虎浪嘿！</span>
              </button>
              
              <button 
                onClick={() => triggerReaction('cheetah', '淨漢：我又耍小聰明啦！👼')}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-850 hover:bg-slate-800 transition-transform active:scale-95 text-xs font-semibold text-white/90 flex items-center gap-1.5 cursor-pointer text-left"
              >
                <span>👼 淨漢老千警告</span>
              </button>
              
              <button 
                onClick={() => triggerReaction('vocal', '李碩珉核能高音中！🎙️')}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-850 hover:bg-slate-800 transition-transform active:scale-95 text-xs font-semibold text-white/90 flex items-center gap-1.5 cursor-pointer text-left"
              >
                <span>⚔️ 核能金嗓</span>
              </button>
              
              <button 
                onClick={() => triggerReaction('orange', '夫教授K-pop知識科普中！🍊')}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-850 hover:bg-slate-800 transition-transform active:scale-95 text-xs font-semibold text-white/90 flex items-center gap-1.5 cursor-pointer text-left"
              >
                <span>🍊 夫教授上課囉</span>
              </button>
            </div>
          </div>

        </div>

        {/* INPUT: Type custom Danmu / Bullet Comments */}
        <form onSubmit={handleSendBullet} className="mt-auto border-t border-slate-800/80 pt-4 flex gap-2">
          <div className="relative flex-1">
            <input 
              type="text" 
              placeholder="輸入彈幕評論，飛渡放映廳螢幕..."
              value={userInputBullet}
              onChange={(e) => setUserInputBullet(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 text-white rounded-xl py-2 px-3 pl-9 text-xs focus:outline-none focus:ring-1 focus:ring-[#92A8D1]"
              maxLength={25}
            />
            <MessageSquare className="absolute left-3 top-2.5 text-slate-500" size={13} />
          </div>
          
          <button 
            type="submit"
            className="bg-gradient-to-r from-[#F7CAC9] to-[#92A8D1] text-slate-950 rounded-xl px-4 py-2 font-bold text-xs flex items-center gap-1 shadow hover:opacity-90 active:scale-95 transition-all cursor-pointer"
          >
            <span>發送</span>
            <Send size={10} />
          </button>
        </form>

      </div>

    </div>
  );
}
