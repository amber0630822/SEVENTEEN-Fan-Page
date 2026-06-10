import React, { useState, useEffect } from 'react';
import { 
  Gem, 
  Music, 
  Heart, 
  Palette, 
  Users, 
  Zap, 
  Star, 
  Youtube, 
  Instagram, 
  Twitter, 
  ArrowUp, 
  ExternalLink, 
  ChevronRight, 
  Menu, 
  X, 
  HeartHandshake, 
  Smile, 
  Search,
  Sliders,
  Play,
  Bell,
  Mail,
  Check,
  ShoppingCart,
  Facebook,
  Repeat,
  HelpCircle,
  Award,
  Sparkles,
  Tv
} from 'lucide-react';

import { MEMBERS, ALBUMS, VARIETY_SHOWS, MERCHANDISE, MINITEENS } from './data';
import { Member, Album, VarietyShow, Merchandise, Miniteen } from './types';
import MemberModal from './components/MemberModal';
import MiniteenModal from './components/MiniteenModal';
import VarietyPlayer from './components/VarietyPlayer';
import { getSongYouTubeUrl, getVarietyYouTubeUrl } from './utils/youtubeLinks';
import { getAlbumCoverUrl, getVarietyCoverUrl, getMemberPhotoUrl } from './utils/albumCovers';

function Weverse({ size = 21, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block object-contain transition-all duration-300 ${className}`}
    >
      <path
        fillRule="evenodd"
        d="M75.3 172.1s12-7.2 17.8-9.9 11.5-4.9 16.9-6.6l3.8-1.2q1.9-.5 3.9-1 1.9-.5 3.9-.9 1.9-.4 3.9-.8c5-.8 9.6-1.3 14-1.5 4.3-.1 8.3 0 12 .4s7 1.1 9.9 1.9c2.8.8 5.3 1.8 7.3 2.8.6.3 1.4.7 2.3 1.4q1.5.9 3.3 2.4l1 .8q.5.4.9.9.5.4 1 .9l.9.9 1 1.2 1 1.2q.4.6.9 1.2.4.7.9 1.3.4.8.9 1.5.4.8.9 1.6l.8 1.6q.3.8.7 1.6.4 1 .7 2 .4.9.7 1.9t.5 2q.3 1 .5 2c.6 2.9.9 6.1 1 9.6q0 5.25-.9 11.4l-1.3 8-1.2 7.9-1.2 7.9-1.3 7.9-1.2 8-1.3 7.9-1.2 7.9-1.3 7.9q-.1 1.2-.3 2.4-.1 1.2-.3 2.4l-.2 2.4-.2 2.4q-.4 4.5-.5 8.3 0 3.9.3 7.2.4 3.2 1.1 5.9.7 2.6 1.8 4.6 1.2 2 2.8 3.3.3.3.8.6.4.3.9.6.4.2.9.4.5.3 1 .4 2 .7 4.5.7 2.2 0 4.8-.7c1.8-.5 3.6-1.3 5.5-2.3 1.9-1.1 3.9-2.5 5.9-4.2s4-3.7 5.9-6.1c2-2.4 3.9-5.2 5.7-8.5q2.7-4.8 5.1-10.9 2.3-6.1 4.2-13.7c1.2-5 2.3-10.5 3-16.6l1.4-10.5 1.4-10.5 1.3-10.5 1.4-10.5 1.3-10.5 1.4-10.5 1.4-10.5 1.3-10.5H302l-1.8 13.5-1.7 13.5-1.7 13.5-1.7 13.4-1.8 13.5-1.7 13.5-1.7 13.5-1.7 13.4q-.7 5.4-1.1 10-.3 4.5-.3 8.3 0 3.7.3 6.7.4 3.1 1.1 5.4t1.8 4q1.1 1.6 2.6 2.7.3.3.7.5.4.3.8.5.5.2.9.3.4.2.9.3 1.8.5 4 .5c1.6 0 3.5-.3 5.4-.8 1.9-.6 3.9-1.5 5.9-2.8s4.1-2.9 6.2-5 4.2-4.5 6.3-7.5 4.1-6.4 6.1-10.4 3.8-8.5 5.6-13.5c1.8-5.1 3.4-10.8 4.9-17.1s2.8-13.2 3.9-20.8q.2-1.1.3-2.3.2-1.1.3-2.2.2-1.2.3-2.3.2-1.1.3-2.3.5-4.4.8-8.6t.5-8.3q.1-4.1.1-8.2v-4.1q-.1-1-.1-2.1 0-1-.1-2 0-1.1-.1-2.1 0-1.1-.1-2.1 0-1.1-.1-2.2-.1-1-.2-2.1-.3-4.3-.8-8.8-.1-1.2-.2-2.3-.2-1.2-.3-2.4-.2-1.1-.3-2.3t-.3-2.4h63.2c.2 1.2.3 2.8.4 5 .2 2.1.3 4.7.5 7.6.3 2.9.6 6.2 1 9.7q.2 1.3.4 2.7l.4 2.8q.3 1.4.5 2.7l.6 2.8c.8 3.8 1.9 7.7 3.2 11.6 1.4 4 3 7.9 5.1 11.7 2 3.8 4.4 7.5 7.3 10.9l2.2 2.6q1.2 1.3 2.5 2.5 1.2 1.2 2.5 2.3t2.7 2.1l-1.5 11.7-1.6 11.6-1.5 11.6-1.6 11.6q-2.9-1.1-5.8-2.5-2.8-1.4-5.5-3.1-2.8-1.6-5.3-3.5-2.6-1.8-5-3.9l-1.6-1.4-1.6-1.4q-.7-.8-1.5-1.5-.7-.8-1.5-1.5c-2.2 8.9-4.9 17.1-8 24.6-3.1 7.6-6.6 14.4-10.5 20.6s-8 11.7-12.5 16.7q-1.7 1.8-3.4 3.5t-3.5 3.4l-3.6 3.2-3.8 3q-1.9 1.4-3.8 2.7t-3.8 2.5q-2 1.3-4 2.4t-4.1 2.1q-2 1.1-4.1 2t-4.2 1.7q-2.1.9-4.2 1.6t-4.3 1.4c-5.7 1.7-11.6 3-17.5 3.8q-2.2.3-4.5.5-2.2.3-4.5.4-2.2.2-4.5.2-2.2.1-4.5.1-6.1 0-11.5-.7-5.5-.7-10.2-2-1.2-.3-2.3-.6l-2.2-.8q-1.2-.4-2.3-.8-1-.4-2.1-.9l-2-1q-1-.5-1.9-1-1-.5-1.9-1.1l-1.8-1.2q-.9-.6-1.7-1.2t-1.6-1.3q-.8-.6-1.6-1.3t-1.5-1.4-1.4-1.5q-.7-.7-1.3-1.5-.6-.7-1.3-1.5-.6-.8-1.1-1.6-.6-.9-1.1-1.7-.6-.8-1.1-1.7-.4-.9-.9-1.8-.5-.8-.9-1.7-.4-1-.8-1.9t-.7-1.9q-.4-.9-.7-1.9-.3-.9-.5-1.9c-3.2 4.7-6.5 8.8-10 12.3q-1.3 1.3-2.6 2.5t-2.6 2.3q-1.3 1.2-2.7 2.2-1.4 1.1-2.9 2.1-1.3 1-2.6 1.8-1.3.9-2.7 1.7t-2.8 1.5q-1.4.8-2.8 1.5-1.2.6-2.5 1.1-1.3.6-2.6 1.1l-2.6 1q-1.3.5-2.6.9-1.2.4-2.3.7-1.2.4-2.3.7-1.2.3-2.3.5-1.2.3-2.3.5-.9.2-1.9.4-.9.2-1.8.3t-1.9.3l-1.8.2c-2.1.2-3.8.3-4.9.3h-1.8q-8.1 0-15.1-1.5-6.9-1.5-12.7-4.5-1.4-.7-2.7-1.5-1.4-.8-2.7-1.7t-2.5-1.9l-2.4-2q-4.5-4.2-7.9-9.7-3.4-5.4-5.6-11.8-2.2-6.5-3.2-13.9-1-7.5-.9-15.7.1-8.3 1.3-17.3l1.3-8.2 1.4-8.2 1.3-8.2 1.3-8.2 1.3-8.2 1.3-8.2 1.3-8.2 1.3-8.2q.1-2.2-.3-3.9-.3-1.6-1-2.8-.2-.3-.4-.5-.2-.3-.4-.5-.2-.3-.4-.5t-.5-.4q-.2-.2-.5-.4-.2-.1-.5-.3-.3-.1-.6-.3-.2-.1-.5-.2l-.6-.2q-.3-.1-.6-.1l-.6-.2q-.2 0-.5-.1h-.6q-.3 0-.6-.1H114l-2.2.2q-1 .2-1.7.4-1.6.5-3.1.9-.8.3-1.5.5-.7.3-1.4.5l-1.4.6q-.7.2-1.4.5l-2.8 1.2q-1.3.7-2.7 1.4c-1 .5-20.5-38.3-20.5-38.3"
        fill="currentColor"
      />
    </svg>
  );
}

interface QuizRecommendation {
  title: string;
  type: 'song' | 'variety';
  reason: string;
  link: string;
}

interface MoodQuestionOption {
  text: string;
  description: string;
  mood: 'energized' | 'healing' | 'laugh' | 'calm';
}

interface MoodQuestion {
  question: string;
  options: MoodQuestionOption[];
}

const MOOD_QUESTIONS: MoodQuestion[] = [
  {
    question: "🎵 經過了漫長又忙碌的一天，你現在內心的「精神能量計量表」大約落在？",
    options: [
      { text: "⚡ 滿電爆表 (100%以上)", description: "體力腦力都在巔峰，好想找點超嗨、刺激、充滿律動的事情來做！", mood: "energized" },
      { text: "🌸 溫馨暖洋洋 (50%-80%)", description: "身心安穩，想吸吮一些溫柔、純粹治癒心靈的神奇光芒", mood: "healing" },
      { text: "😆 耐力見底但笑點低 (20%-50%)", description: "雖然有些累，但想要大笑一場、徹底釋放壓力！", mood: "laugh" },
      { text: "🍵 佛系放空 (20%以下)", description: "電量幾乎歸零，只想安安靜靜地與世隔絕、清冷放空自己", mood: "calm" }
    ]
  },
  {
    question: "🍕 如果可以立刻吃到一口終極美食主食，你現在最渴望哪種極致味道？",
    options: [
      { text: "🌶️ 鮮亮香熱、爽快過癮的韓式起司辣炒年糕與炸雞", description: "舌尖與身心的雙重狂奔！越辛辣熱烈越好！", mood: "energized" },
      { text: "🍜 暖胃暖心、飄浮著蒲燒油豆腐的手打原汁高湯烏龍麵", description: "熱騰騰的湯汁，由內而外溫和承托起靈魂的安寧", mood: "healing" },
      { text: "🍓 甜滋滋、幸福多巴胺炸裂的舒芙蕾厚鬆餅與網紅奶茶", description: "不需思考，只想品嚐純粹無害的狂歡樂趣", mood: "laugh" },
      { text: "☕ 尾韻清冷、帶有一絲高雅的黑咖啡與幾顆手工燕麥餅乾", description: "佛系悠閒，享受最純粹的孤獨、清雅與靜謐", mood: "calm" }
    ]
  }
];

const MOOD_SENSING_POOLS: Record<'energized' | 'healing' | 'laugh' | 'calm', { songs: QuizRecommendation[]; variety: QuizRecommendation[] }> = {
  energized: {
    songs: [
      {
        title: "Hot",
        type: "song",
        reason: "SEVENTEEN 節奏最為狂野耀眼、烈日般燃燒的主打曲！音浪震耳欲聾，最能對焦你目前 100% 以上的狂熱血脈，聽完瞬間起飛！",
        link: "https://www.youtube.com/watch?v=gRnuFC4UalM"
      },
      {
        title: "아주 NICE / VERY NICE",
        type: "song",
        reason: "風靡全球、堪稱無限安可神級曲目！副歌一響起，高昂的銅管樂與源源不絕的熱情活力將讓你快樂跟著原地蹦迪！",
        link: "https://www.youtube.com/watch?v=J-wFp43XOrA"
      },
      {
        title: "박수 /Clap",
        type: "song",
        reason: "超級洗腦與熱血的搖滾風歌曲，前奏一響，全場合唱跟著拍手！為努力生活的你送上最熱情的掌聲與力量！",
        link: "https://www.youtube.com/watch?v=Cye-1Y1K3v0"
      },
      {
        title: "MAESTRO",
        type: "song",
        reason: "強大而震撼的節奏與極致震撼的電音指揮家編舞，展現出 SEVENTEEN 統治舞台的霸氣！聽完瞬間能量爆發！",
        link: "https://www.youtube.com/watch?v=CoC48V6G_B0"
      },
      {
        title: "손오공 / Super",
        type: "song",
        reason: "宏大無匹的東方玄幻氣勢、震天動地的鼓點伴奏與多達數百人的震撼排舞，這就是 SEVENTEEN 不斷飛越重重考驗的巔峰熱血之作！",
        link: "https://www.youtube.com/watch?v=tFPZC_shZ_g"
      }
    ],
    variety: [
      {
        title: "[GOING SEVENTEEN 2020] EP.44 TTT #1 (Hyperrealism Ver.)",
        type: "variety",
        reason: "SVT 最經典純粹的自主團建！這群大男孩在完全沒有腳本的悠閒別墅裡，爆笑暢飲、狂飆卡拉OK、水上大戰，高能高頻絕對嗨翻！",
        link: "https://www.youtube.com/watch?v=OjbjlNbQqLc"
      },
      {
        title: "[GOING SEVENTEEN] COMEBACK SPECIAL : SEVENTEEN TV #1",
        type: "variety",
        reason: "重溫剛出道時期青澀又無比耀眼的男孩們！包含他們驚人的現場才藝、爆笑大吐槽，見證那份初心飽滿、蓄勢待發的活力與激情！",
        link: "https://www.youtube.com/watch?v=55vXlK_iOr0"
      },
      {
        title: "[GOING SEVENTEEN 2020] EP.23 드립 : 세븐틴 갓 탤런트 #1 (Ad-lib : Seventeen's got Talent #1)",
        type: "variety",
        reason: "成員們大展荒謬爆笑個人技與浮誇綜藝感，羅PD也驚嘆的混亂邪惡惡搞大賽，不間斷的狂笑能量讓你的多巴胺直接飆破臨界點！",
        link: "https://www.youtube.com/watch?v=vVAPe9DZxB4"
      },
      {
        title: "[GOING SEVENTEEN] EP.47 준우승 운동회 #1 (Runner-Up Sports Day #1)",
        type: "variety",
        reason: "一場充滿倒戈與陰謀、為了『不拿第一名』而拼盡全力的荒謬運動會！高能爆笑滿滿，保證笑到捧腹！",
        link: "https://www.youtube.com/watch?v=4yXR2ATAXbg"
      }
    ]
  },
  healing: {
    songs: [
      {
        title: "어른 아이 / Kidult",
        type: "song",
        reason: "一首寫給所有心中仍然藏著一位「內在小孩」的人。宏大悠揚的副歌與成員溫暖的真摯高音唱腔，能在一瞬間擁抱你所有不為人知的委屈。",
        link: "https://www.youtube.com/watch?v=s4jHQXd-7gg"
      },
      {
        title: "IN MY ROOM 자취방에서(Jeonghan)",
        type: "song",
        reason: "淨漢溫柔恬靜、宛如在耳畔輕語的 SOLO 療癒之作。配上淡淡的吉他彈奏，傾訴著一個人待在房間內的恬靜夜晚，最適合感到倦怠的日常。",
        link: "https://www.youtube.com/watch?v=gf1hcS-WRsE"
      },
      {
        title: "돌고 돌아 / Circles",
        type: "song",
        reason: "「沒關係，我們會像一盞圓圈一樣，轉了又轉再次相擁。」WOOZI 寫給成員與克拉最深沉真摯的心靈之歌，聽完淚水與溫柔在眼眶中融化。",
        link: "https://www.youtube.com/watch?v=DgAAaV6xfrk"
      },
      {
        title: "포옹 / Hug(Vocal Team)",
        type: "song",
        reason: "Vocal Team 極致簡約溫暖的純木吉他伴奏抒情歌。每一句歌詞都像是在耳邊輕柔對你說：「今天辛苦了，我為你敞開溫軟的懷抱。」",
        link: "https://www.youtube.com/watch?v=wV8oKFqO2Gc"
      },
      {
        title: "My My",
        type: "song",
        reason: "「我不需要急著奔向明天，跟著我當下的腳步踏浪旅行！」輕鬆、開闊而明亮的夏日航行曲風，溫軟地告訴我們只要做最舒適的自己就好。",
        link: "https://www.youtube.com/watch?v=PQOJJ037ys8"
      }
    ],
    variety: [
      {
        title: "[나나민박 with 세븐틴] 하이라이트",
        type: "variety",
        reason: "置身於溫馨、充滿驚喜的 나나민박 微風別墅中，成員們與羅PD一起悠閒遊戲、暢談。慢節奏的美好，能在無形中溫柔撫平身心的疲憊。",
        link: "https://www.youtube.com/watch?v=OLiLKTSZw0o"
      },
      {
        title: "[SEVENTEEN] GOING SEVENTEEN 2019 EP.24 SVT 놀이터 #1 (SVT Playground #1)",
        type: "variety",
        reason: "成員們穿著復古學生裝，在夕陽灑落的小公園裡大玩兒時童玩、捉迷藏。那份純真無邪的嬉鬧笑聲，最適合慰藉你緊繃的心靈。",
        link: "https://www.youtube.com/watch?v=XbNcsgEX2jc"
      },
      {
        title: "[GOING SEVENTEEN] EP.33 둘이서 셉식당 #1 (SVT’s Kitchen for Two #1)",
        type: "variety",
        reason: "荒謬搞笑又充滿溫暖生活氣息的雙人料理接力！看著主廚們在手忙腳亂中完成各式煙火氣十足的美食，搭配著克拉們熟悉的滿滿溫馨！",
        link: "https://www.youtube.com/watch?v=Q7UPTAdSPYs"
      },
      {
        title: "[GOING SEVENTEEN 2020] EP.29 8월의 크리스마스 #1 (Christmas in August #1)",
        type: "variety",
        reason: "成員們在節慶氣息滿溢的白色雪景和溫暖爐火下，互相贈送誠意滿滿（也有些無厘頭）的神秘禮物，傳遞最誠摯溫馨的愛！",
        link: "https://www.youtube.com/watch?v=DtFEm46-XdE"
      }
    ]
  },
  laugh: {
    songs: [
      {
        title: "Left & Right",
        type: "song",
        reason: "不給人生設限的輕鬆旋律！伴隨強大搖擺律動，主打「走左邊或走右邊都沒關係，順著自己心意開心最重要」，幫你卸除緊繃重拾笑容！",
        link: "https://www.youtube.com/watch?v=HdZdxocqzq4"
      },
      {
        title: "음악의 신 /God of Music",
        type: "song",
        reason: "當你情緒有點緊繃、需要歡樂拯救時，這首慶典感滿滿的多巴胺神曲最具療效！歌詞與曲風無比可愛元氣，不自覺心情便明亮了起來。",
        link: "https://www.youtube.com/watch?v=zSQ48zyWZrY"
      },
      {
        title: "Fighting (Feat.LEE YOUNG JI)",
        type: "song",
        reason: "夫碩順最強打工人續命能量歌！超高分貝、極度熱烈的節奏和超好玩的歌詞，讓你一聽就情不自禁一邊打拍子一邊嘿嘿傻笑！",
        link: "https://www.youtube.com/watch?v=mBXBOLG06Wc"
      },
      {
        title: "A-TEEN(Joshua、Hoshi、WOOZI、Vernon、Dino)",
        type: "song",
        reason: "充滿青春洋溢律動、甜爽十足的流行電子風。像果汁汽水在喉嚨裡一瞬間炸開，把所有煩心事情通通洗刷掉，帶給你甜甜的快樂！",
        link: "https://www.youtube.com/watch?v=SrqLA8tRkf8"
      },
      {
        title: "아주 NICE / VERY NICE",
        type: "song",
        reason: "當 13 個調皮男孩在音樂節與安可舞台上瘋狂高音、瘋狂蹦迪，這種極具感召力的狂歡氛圍，一定能逗得你哈哈大笑熱血沸騰！",
        link: "https://www.youtube.com/watch?v=J-wFp43XOrA"
      }
    ],
    variety: [
      {
        title: "[GOING SEVENTEEN 2020] EP.3 돈't Lie #1 (Don't Lie #1)",
        type: "variety",
        reason: "融合高額金幣懸賞、黑手黨狼人殺密謀與尋寶捉迷藏的頂級爆笑巨作！成員們為了勝利拼命爭辯、極限互坑、綜藝神降臨，包準讓你笑到肚子痛！",
        link: "https://www.youtube.com/watch?v=OqTI0KYkeJQ"
      },
      {
        title: "[SEVENTEEN] GOING SEVENTEEN 2019 EP.19 논리나잇 #1 (Debate Night #1)",
        type: "variety",
        reason: "用最一本正經的帥氣西裝造型，狂扯胡言亂語的歪理辯論大賽！高智商與極致中二無縫銜接，堪稱 GOING SEVENTEEN 史詩級大笑神作！",
        link: "https://www.youtube.com/watch?v=9O2D9K7l-FU"
      },
      {
        title: "[GOING SEVENTEEN 2020] EP.27 술래잡기 #1 (The Tag #1)",
        type: "variety",
        reason: "在昏暗工廠裡與『神祕殺手』鬥智鬥勇，明明是驚悚題材，卻被這群調皮鬼玩成爆笑神劇！怕鬼二人組與神勇小分隊的超大反差令人笑瘋！",
        link: "https://www.youtube.com/watch?v=zKa-EGTpkRI"
      },
      {
        title: "[GOING SEVENTEEN 2020] EP.23 드립 : 세븐틴 갓 탤런트 #1 (Ad-lib : Seventeen's got Talent #1)",
        type: "variety",
        reason: "在完全零大綱、隨時隨地被 cue 的即興辦公室短劇中，成員們展現驚為天人的滿嘴胡謅和憋笑能力，極限互吹爆笑非凡！",
        link: "https://www.youtube.com/watch?v=vVAPe9DZxB4"
      }
    ]
  },
  calm: {
    songs: [
      {
        title: "같이 가요 / Together",
        type: "song",
        reason: "充滿動漫清朗與澄澈微風味道的唯美單曲。像是在夏日晴空下奔跑，即使未來的路有些孤單，也有我們一同攜手向前的堅定力量。",
        link: "https://www.youtube.com/watch?v=pa86DMlUpHg"
      },
      {
        title: "Darl+ing",
        type: "song",
        reason: "微甜、舒緩，像是在耳畔暖風絮語的優雅抒情英文單曲。暖橘色調的旋律非常乾淨精緻，最適合你在此刻放遠思緒、悠然慵懶地靜聽。",
        link: "https://www.youtube.com/watch?v=bTtNV6hgDno"
      },
      {
        title: "우리의 새벽은 낮보다 뜨겁다 /Our Dawn Is Hotter Than Day",
        type: "song",
        reason: "舒緩溫柔的流行 R&B 風格，宛如夏夜微涼的海風拂過。唱出了少年的清澈真心與漫長璀璨的守望，最適合安靜發呆的舒服夜晚。",
        link: "https://www.youtube.com/watch?v=MAWM7Y9Wnd0"
      },
      {
        title: "몰래 듣지 마요/Don't listen in secret",
        type: "song",
        reason: "Vocal Team 的神級抒情悲歌。美得像一幅鋼琴畫卷，緩緩流淌出感傷而成熟的治癒力量，能讓你在午後或睡前尋得片刻的情感沈澱。",
        link: "https://www.youtube.com/watch?v=ACOU14kmhAY"
      },
      {
        title: "소용돌い / To you",
        type: "song",
        reason: "清透的吉他打底與柔和明媚的旋律，像溪流在心尖流淌。歌詞充滿對克拉的純粹崇高感謝，有一種洗滌雜念、平定塵囂的力量。",
        link: "https://www.youtube.com/watch?v=7q9Ubv3othc"
      }
    ],
    variety: [
      {
        title: "[SEVENTEEN] GOING SEVENTEEN 2019 EP.21 TTT #1 (Camping Ver.)",
        type: "variety",
        reason: "在夜幕低垂、營火劈啪作響的寧靜夜晚，成員們聚在帳篷前舉杯喝著小酒，談論這十年來攜手前行的暖心內心話，給你最心安雋永的平靜力量。",
        link: "https://www.youtube.com/watch?v=zMpnvIJePt4"
      },
      {
        title: "[GOING SEVENTEEN] EP.14 버논에서 모처럼 모내기를 하며 모든 내기를 해보았다 #1 (Planting Rice and Making Bets #1)",
        type: "variety",
        reason: "成員們一同前往與世隔絕的優美鄉村生活，安安靜靜地在涼亭躺著、隨手摘野花、享受午後大自然暖意。清澈恬淡的畫面給人無比鬆弛平靜的享受。",
        link: "https://www.youtube.com/watch?v=AxQDyhBYMtM"
      },
      {
        title: "[GOING SEVENTEEN] EP.36 쌀밥을 맛있게 먹는 완벽한 방법 #1 (How to Eat Rice the Perfect Way #1)",
        type: "variety",
        reason: "一群毫無生存經驗的大男孩在傳統灶台前和乾柴枯葉作鬥爭，慢節奏的煙火氣與鄉野自然慢步，在舒服的背景樂中讓你安然享受生活。",
        link: "https://www.youtube.com/watch?v=JGc4foXl6BA"
      },
      {
        title: "[GOING SEVENTEEN 2020] EP.34 BAD CLUE #1",
        type: "variety",
        reason: "在古典英倫風情的沈浸式莊園裡，上演高水準燒腦劇本殺！成員們身著歐式復古西裝在陰鬱細雨氣氛中推理解謎，沉靜內斂、驚心動魄！",
        link: "https://www.youtube.com/watch?v=HOQzjZii7LY"
      }
    ]
  }
};

function selectRandomRecommendations(mood: 'energized' | 'healing' | 'laugh' | 'calm'): QuizRecommendation[] {
  const pool = MOOD_SENSING_POOLS[mood];
  if (!pool) return [];

  const shuffledSongs = [...pool.songs].sort(() => Math.random() - 0.5);
  const shuffledVariety = [...pool.variety].sort(() => Math.random() - 0.5);

  const selectedSongs = shuffledSongs.slice(0, 2);
  const selectedVariety = shuffledVariety.slice(0, 1);

  return [...selectedSongs, ...selectedVariety].sort(() => Math.random() - 0.5);
}

export default function App() {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [selectedMiniteen, setSelectedMiniteen] = useState<Miniteen | null>(null);
  const [albumFilter, setAlbumFilter] = useState<string>('all');
  const [activeUnitTab, setActiveUnitTab] = useState<'All' | 'Vocal' | 'Hip-Hop' | 'Performance'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [miniteenActiveTab, setMiniteenActiveTab] = useState<'All' | 'Vocal' | 'Hip-Hop' | 'Performance'>('All');
  const [miniteenSearchQuery, setMiniteenSearchQuery] = useState('');
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [customWelcome, setCustomWelcome] = useState('');
  const [showFandomGreet, setShowFandomGreet] = useState(false);
  const [fandomName, setFandomName] = useState(() => {
    return localStorage.getItem('carat_name') || '';
  });

  // SEVENTEEN Mood Quiz states
  const [quizStep, setQuizStep] = useState<'welcome' | 'playing' | 'result'>('welcome');
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedQuizAnswer, setSelectedQuizAnswer] = useState<number | null>(null);
  const [showQuizFeedback, setShowQuizFeedback] = useState(false);
  const [selectedMoods, setSelectedMoods] = useState<('energized' | 'healing' | 'laugh' | 'calm')[]>([]);
  const [lastRecommendedMood, setLastRecommendedMood] = useState<string>(() => {
    return localStorage.getItem('carat_last_recommended_mood') || '';
  });
  const [currentRecommendations, setCurrentRecommendations] = useState<QuizRecommendation[]>([]);

  useEffect(() => {
    if (lastRecommendedMood) {
      setCurrentRecommendations(selectRandomRecommendations(lastRecommendedMood as any));
    }
  }, []);
  const [activeVarietyIndex, setActiveVarietyIndex] = useState(0);
  const [varietyTab, setVarietyTab] = useState<'all' | 'official' | 'special' | 'challenge'>('all');
  const [varietySearch, setVarietySearch] = useState('');
  const [trackSearchQuery, setTrackSearchQuery] = useState('');
  const [activeAlbumTracks, setActiveAlbumTracks] = useState<Album | null>(null);
  const [merchCategory, setMerchCategory] = useState<string>('all');

  // Shopping Cart & Video Player state variables
  const [cart, setCart] = useState<{ item: Merchandise; quantity: number }[]>(() => {
    try {
      const saved = localStorage.getItem('carat_cart_items');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<{ 
    url: string; 
    title: string; 
    playlist?: { name: string; mvLink?: string; mv?: string }[];
    currentTrackIndex?: number;
    forceSingleVideo?: boolean;
  } | null>(null);
  const [isVideoLoopEnabled, setIsVideoLoopEnabled] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isCheckoutCompleted, setIsCheckoutCompleted] = useState(false);

  // In-app short-hand for adding custom warning messages or custom success alerts
  const addToast = (title: string, message: string, type: 'success' | 'info' | 'bell' = 'success') => {
    const toastId = Date.now().toString() + Math.random().toString();
    setInAppToasts(prev => [
      ...prev,
      { id: toastId, title, message, type }
    ]);
    setTimeout(() => {
      setInAppToasts(prev => prev.filter(t => t.id !== toastId));
    }, 7000);
  };

  // Merchandise Notification & Simulation States
  const [merchandiseList, setMerchandiseList] = useState<Merchandise[]>(() => {
    const saved = localStorage.getItem('svt_merch_list');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return MERCHANDISE;
  });

  const [merchSubscriptions, setMerchSubscriptions] = useState<{
    id: string;
    email: string;
    itemName: string;
    createdAt: string;
  }[]>(() => {
    const saved = localStorage.getItem('svt_merch_subs');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return [];
  });

  const [notifyTargetItem, setNotifyTargetItem] = useState<Merchandise | null>(null);
  const [notifyEmail, setNotifyEmail] = useState(() => {
    return localStorage.getItem('carat_email') || '';
  });

  const [inAppToasts, setInAppToasts] = useState<{
    id: string;
    title: string;
    message: string;
    type: 'success' | 'info' | 'bell';
  }[]>([]);

  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [showImageCustomizer, setShowImageCustomizer] = useState(false);
  const [customizerTab, setCustomizerTab] = useState<'members' | 'albums' | 'variety'>('members');
  const [customPhotos, setCustomPhotos] = useState<{
    members: Record<string, string>;
    albums: Record<string, string>;
    variety: Record<string, string>;
  }>({
    members: {},
    albums: {},
    variety: {}
  });

  // Load custom image overrides on mount
  useEffect(() => {
    try {
      const savedMembers = localStorage.getItem('custom_member_photos') || '{}';
      const savedAlbums = localStorage.getItem('custom_album_covers') || '{}';
      const savedVariety = localStorage.getItem('custom_variety_covers') || '{}';
      setCustomPhotos({
        members: JSON.parse(savedMembers),
        albums: JSON.parse(savedAlbums),
        variety: JSON.parse(savedVariety)
      });
    } catch (e) {
      console.warn('Failed to parse custom images from localStorage', e);
    }
  }, []);

  // Update single member photo
  const handleUpdateMemberPhoto = (name: string, url: string) => {
    setCustomPhotos(prev => {
      const updated = { ...prev.members, [name.trim().toUpperCase()]: url };
      localStorage.setItem('custom_member_photos', JSON.stringify(updated));
      return { ...prev, members: updated };
    });
  };

  // Update single album cover
  const handleUpdateAlbumCover = (title: string, url: string) => {
    setCustomPhotos(prev => {
      const updated = { ...prev.albums, [title.trim()]: url };
      localStorage.setItem('custom_album_covers', JSON.stringify(updated));
      return { ...prev, albums: updated };
    });
  };

  // Update single variety cover
  const handleUpdateVarietyCover = (title: string, url: string) => {
    setCustomPhotos(prev => {
      const updated = { ...prev.variety, [title.trim()]: url };
      localStorage.setItem('custom_variety_covers', JSON.stringify(updated));
      return { ...prev, variety: updated };
    });
  };

  // Helper: check if a user is subscribed to an item
  const isSubscribed = (itemId: string) => {
    return merchSubscriptions.some(sub => sub.id === itemId);
  };

  const handleAddToCart = (item: Merchandise) => {
    setCart(prev => {
      const existing = prev.find(cartItem => cartItem.item.id === item.id);
      let updated;
      if (existing) {
        updated = prev.map(cartItem => cartItem.item.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem);
      } else {
        updated = [...prev, { item, quantity: 1 }];
      }
      localStorage.setItem('carat_cart_items', JSON.stringify(updated));
      return updated;
    });

    addToast(
      `已成功加入購物車！`, 
      `💎 ${item.name} 已加入您的購物籃。您可以打開購物車點擊專屬購買按鈕前往官網購入！`, 
      'success'
    );
  };

  const handleRemoveFromCart = (itemId: string) => {
    setCart(prev => {
      const updated = prev.filter(cartItem => cartItem.item.id !== itemId);
      localStorage.setItem('carat_cart_items', JSON.stringify(updated));
      return updated;
    });
  };

  const handleUpdateQuantity = (itemId: string, delta: number) => {
    setCart(prev => {
      const updated = prev.map(cartItem => {
        if (cartItem.item.id === itemId) {
          const newQty = cartItem.quantity + delta;
          return { ...cartItem, quantity: Math.max(1, newQty) };
        }
        return cartItem;
      });
      localStorage.setItem('carat_cart_items', JSON.stringify(updated));
      return updated;
    });
  };

  const handleClearCart = () => {
    setCart([]);
    localStorage.removeItem('carat_cart_items');
  };

  const getYoutubeEmbedUrl = (url: string, forceSingle: boolean = false, loop: boolean = false) => {
    if (!url) return '';
    
    // Check if it contains a playlist ID
    const listMatch = url.match(/[?&]list=([^#&?]+)/);
    const listId = listMatch ? listMatch[1] : null;

    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    const videoId = (match && match[2].length === 11) ? match[2] : null;

    // Filter out Mix playlists (RD...) and personal private system playlists (LL, WL, LM)
    // as they cannot be loaded inside embedded iframe players on third party sites
    const isEmbeddablePlaylist = listId && 
      !listId.startsWith('RD') && 
      !listId.startsWith('LL') && 
      !listId.startsWith('WL') && 
      !listId.startsWith('LM');

    if (isEmbeddablePlaylist && !forceSingle) {
      const loopParam = loop ? '&loop=1' : '';
      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}?list=${listId}&autoplay=1${loopParam}`;
      }
      return `https://www.youtube.com/embed/videoseries?list=${listId}&autoplay=1${loopParam}`;
    }

    if (videoId) {
      const loopParams = loop ? `&loop=1&playlist=${videoId}` : '';
      return `https://www.youtube.com/embed/${videoId}?autoplay=1${loopParams}`;
    }
    if (url.includes('embed/')) {
      if (loop && !url.includes('loop=')) {
        return url + (url.includes('?') ? '&' : '?') + 'loop=1';
      }
      return url;
    }
    return url;
  };

  // Helper: Request browser notification permissions safely
  const requestNotificationPermission = async () => {
    if (!('Notification' in window)) {
      return false;
    }
    if (Notification.permission === 'granted') {
      return true;
    }
    if (Notification.permission !== 'denied') {
      const permission = await Notification.requestPermission();
      return permission === 'granted';
    }
    return false;
  };

  // Trigger both native (if allowed) and beautiful in-app toast notifications
  const sendItemNotification = (title: string, body: string) => {
    // Attempt native browser notification
    if ('Notification' in window && Notification.permission === 'granted') {
      try {
        new Notification(title, {
          body,
          icon: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="%232D1B3D"><path d="M13.73 21a2 2 0 0 1-3.46 0M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/></svg>'
        });
      } catch (e) {
        console.warn('Native Notification API failed inside sandbox ecosystem: ', e);
      }
    }

    // Always push beautiful in-app toast/banner for perfect sandboxed iframe support
    const toastId = Date.now().toString() + Math.random().toString();
    setInAppToasts(prev => [
      ...prev,
      { id: toastId, title, message: body, type: 'bell' }
    ]);

    // Self-destruct toast after 7 seconds
    setTimeout(() => {
      setInAppToasts(prev => prev.filter(t => t.id !== toastId));
    }, 7000);
  };

  // Handle subscribe action
  const handleSubscribe = (email: string) => {
    if (!notifyTargetItem || !email.trim()) return;

    // Save user email to cache
    localStorage.setItem('carat_email', email.trim());
    setNotifyEmail(email.trim());

    const newSub = {
      id: notifyTargetItem.id,
      email: email.trim(),
      itemName: notifyTargetItem.name,
      createdAt: new Date().toISOString()
    };

    const updatedSubs = [...merchSubscriptions, newSub];
    setMerchSubscriptions(updatedSubs);
    localStorage.setItem('svt_merch_subs', JSON.stringify(updatedSubs));

    // Request notification permissions
    requestNotificationPermission();

    // Trigger toast confirming success
    const toastId = Date.now().toString();
    setInAppToasts(prev => [
      ...prev,
      { 
        id: toastId, 
        title: '🔔 訂閱成功 (Subscribed Successful)', 
        message: `當《${notifyTargetItem.name}》可現貨購買時，將即刻發送通知至 ${email}`,
        type: 'success'
      }
    ]);
    setTimeout(() => {
      setInAppToasts(prev => prev.filter(t => t.id !== toastId));
    }, 5500);

    setNotifyTargetItem(null);
  };

  // Unsubscribe directly if already subscribed
  const handleUnsubscribe = (itemId: string, itemName: string) => {
    const updatedSubs = merchSubscriptions.filter(sub => sub.id !== itemId);
    setMerchSubscriptions(updatedSubs);
    localStorage.setItem('svt_merch_subs', JSON.stringify(updatedSubs));

    const toastId = Date.now().toString();
    setInAppToasts(prev => [
      ...prev,
      { 
        id: toastId, 
        title: '🔕 已取消到貨提醒', 
        message: `已清除對《${itemName}》的通知設定。`,
        type: 'info'
      }
    ]);
    setTimeout(() => {
      setInAppToasts(prev => prev.filter(t => t.id !== toastId));
    }, 4000);
  };

  // Notify Click Handler (Sub vs Unsub toggle)
  const handleNotifyMeClick = (item: Merchandise) => {
    if (isSubscribed(item.id)) {
      handleUnsubscribe(item.id, item.name);
    } else {
      setNotifyTargetItem(item);
    }
  };

  // Trigger simulated inventory update and notify matching users immediately
  const simulateStatusChange = (itemId: string, newStatus: 'available' | 'preorder' | 'soldout') => {
    // 1. Find item and check status change
    let targetItemName = '';
    const originalItem = merchandiseList.find(m => m.id === itemId);
    if (originalItem) {
      targetItemName = originalItem.name;
    }

    const previousStatus = originalItem ? originalItem.status : 'preorder';

    // 2. Update list
    const updatedList = merchandiseList.map(item => {
      if (item.id === itemId) {
        return { ...item, status: newStatus };
      }
      return item;
    });

    setMerchandiseList(updatedList);
    localStorage.setItem('svt_merch_list', JSON.stringify(updatedList));

    // 3. Trigger notify logic if transitioning from 'preorder' to 'available'
    if (previousStatus === 'preorder' && newStatus === 'available') {
      const matchSubs = merchSubscriptions.filter(sub => sub.id === itemId);
      if (matchSubs.length > 0) {
        // Trigger notifications for each subscriber!
        matchSubs.forEach(sub => {
          sendItemNotification(
            `💎 克拉商城到貨通知: ${targetItemName}`,
            `親愛的 ${sub.email}，您設定提醒的限量周邊現已補貨上架，狀態變更為「現貨有庫存(Available)」，趕緊前往購買吧！`
          );
        });
      } else {
        // Broadcast standard toast matching the status change to let them know it works
        const toastId = Date.now().toString();
        setInAppToasts(prev => [
          ...prev,
          {
            id: toastId,
            title: `🔄 庫存狀態已變更`,
            message: `《${targetItemName}》狀態已由「預購中」變更為「現貨有儲備」。目前無該品項的電子信箱訂閱，您可以搶先訂閱其他品項！`,
            type: 'info'
          }
        ]);
        setTimeout(() => {
          setInAppToasts(prev => prev.filter(t => t.id !== toastId));
        }, 4500);
      }
    } else {
      // General status update message
      const toastId = Date.now().toString();
      setInAppToasts(prev => [
        ...prev,
        {
          id: toastId,
          title: `🔄 庫存模擬更新`,
          message: `《${targetItemName}》目前狀態設為：${newStatus === 'available' ? '現貨(Available)' : newStatus === 'preorder' ? '預售(Preorder)' : '已售罄(Soldout)'}`,
          type: 'info'
        }
      ]);
      setTimeout(() => {
        setInAppToasts(prev => prev.filter(t => t.id !== toastId));
      }, 3500);
    }
  };

  const [activeEpisode, setActiveEpisode] = useState<{
    number: string;
    title: string;
    description: string;
    varietyShowTitle: string;
  } | null>(null);

  // Monitor scroll height for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to track overlay when an album is selected for viewing all tracks / playing
  useEffect(() => {
    if (activeAlbumTracks) {
      setTimeout(() => {
        document.getElementById('album-tracks-overlay')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [activeAlbumTracks]);

  // Save Carat Fandom name to LocalStorage for personalization
  const handleSaveCaratName = (e: React.FormEvent) => {
    e.preventDefault();
    if (customWelcome.trim()) {
      setFandomName(customWelcome.trim());
      localStorage.setItem('carat_name', customWelcome.trim());
      setShowFandomGreet(true);
      setCustomWelcome('');
    }
  };

  const handleClearFandomName = () => {
    setFandomName('');
    localStorage.removeItem('carat_name');
    setShowFandomGreet(false);
    
    // Also reset quiz on logout
    setQuizStep('welcome');
    setCurrentQuizIndex(0);
    setSelectedQuizAnswer(null);
    setShowQuizFeedback(false);
    setSelectedMoods([]);
  };

  // SEVENTEEN Mood Quiz handlers
  const handleAnswerSelect = (optIndex: number) => {
    if (showQuizFeedback) return;
    setSelectedQuizAnswer(optIndex);
    setShowQuizFeedback(true);
    
    const chosenMood = MOOD_QUESTIONS[currentQuizIndex].options[optIndex].mood;
    setSelectedMoods(prev => [...prev, chosenMood]);
  };

  const handleNextQuiz = () => {
    if (currentQuizIndex < MOOD_QUESTIONS.length - 1) {
      setCurrentQuizIndex(prev => prev + 1);
      setSelectedQuizAnswer(null);
      setShowQuizFeedback(false);
    } else {
      // Calculate dominant mood based on selectedMoods array
      const count: Record<'energized' | 'healing' | 'laugh' | 'calm', number> = {
        energized: 0,
        healing: 0,
        laugh: 0,
        calm: 0
      };
      
      const allSelected = [...selectedMoods];
      // Just in case selectedMoods is empty or shorter (safety fallback)
      if (allSelected.length === 0) {
        allSelected.push('healing'); 
      }
      
      allSelected.forEach(m => {
        count[m] = (count[m] || 0) + 1;
      });
      
      // Find the mood with the maximum frequency
      let dominant: 'energized' | 'healing' | 'laugh' | 'calm' = 'healing';
      let maxCount = -1;
      
      // Order of preference in case of dynamic ties
      const order: ('energized' | 'healing' | 'laugh' | 'calm')[] = ['energized', 'laugh', 'healing', 'calm'];
      for (const m of order) {
        if (count[m] > maxCount) {
          maxCount = count[m];
          dominant = m;
        }
      }
      
      setLastRecommendedMood(dominant);
      localStorage.setItem('carat_last_recommended_mood', dominant);
      setCurrentRecommendations(selectRandomRecommendations(dominant));
      setQuizStep('result');
    }
  };

  const handleRestartQuiz = () => {
    setQuizStep('playing');
    setCurrentQuizIndex(0);
    setSelectedQuizAnswer(null);
    setShowQuizFeedback(false);
    setSelectedMoods([]);
  };

  const handlePlayRecommendation = (rec: QuizRecommendation) => {
    // 1. Play directly inside our beautiful floating in-app player 
    // without jumping or opening outside!
    setActiveVideo({
      url: rec.link,
      title: rec.title,
      forceSingleVideo: true
    });

    // 2. Scroll to the corresponding page section & search/highlight it on-site
    if (rec.type === 'song') {
      scrollToSection('discography');
      // Set search query for the song
      // Let's clean the title from " (歌曲)" or " / ..."
      const cleanSongTitle = rec.title.replace(/\s*\(歌曲\)/gi, '').trim();
      setTrackSearchQuery(cleanSongTitle);
    } else {
      scrollToSection('variety');
      // Set search query for variety
      const cleanVarietyTitle = rec.title.replace(/\s*\(綜藝\)/gi, '').trim();
      // For TTT or Don't Lie, we can use a simpler keyword to match perfectly
      let searchKeyword = cleanVarietyTitle;
      if (cleanVarietyTitle.includes('TTT')) searchKeyword = 'TTT';
      if (cleanVarietyTitle.includes("Don't Lie") || cleanVarietyTitle.includes("don't") || cleanVarietyTitle.includes("Don’t") || cleanVarietyTitle.includes("돈")) searchKeyword = 'Lie';
      setVarietySearch(searchKeyword);
    }
  };

  // Filter members based on search and sub-unit tab selection
  const filteredMembers = MEMBERS.filter(m => {
    const matchesSearch = m.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          m.realName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          m.role.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeUnitTab === 'All' ? true : m.unit === activeUnitTab;
    return matchesSearch && matchesTab;
  });

  // Filter miniteens based on search and sub-unit tab selection
  const filteredMiniteens = MINITEENS.filter(mt => {
    const origMember = MEMBERS.find(m => m.name.toUpperCase() === mt.originalMember.toUpperCase());
    const matchesTab = miniteenActiveTab === 'All' ? true : (origMember ? origMember.unit === miniteenActiveTab : true);
    const matchesSearch = mt.name.toLowerCase().includes(miniteenSearchQuery.toLowerCase()) ||
                          mt.originalMember.toLowerCase().includes(miniteenSearchQuery.toLowerCase()) ||
                          mt.characterType.toLowerCase().includes(miniteenSearchQuery.toLowerCase()) ||
                          mt.personality.toLowerCase().includes(miniteenSearchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const filteredAlbums = ALBUMS.filter(a => {
    if (albumFilter === 'all') return a.category === 'all';
    return a.category === albumFilter;
  });

  const allMatchingTracks = ALBUMS.flatMap(album => {
    return (album.tracks || []).map((track, trackIdx) => {
      const isObj = typeof track === 'object' && track !== null;
      const rawName = isObj ? track.name : String(track);
      const directLink = isObj ? track.mvLink || track.mv : undefined;
      return {
        name: rawName,
        cleanName: rawName
          .replace(/^\d+\.\s*/, '')
          .replace(/\s*-\s*\[主打歌\]/, '')
          .replace(/\s*-\s*\[雙主打歌\]/, ''),
        album: album.title,
        albumYear: album.year,
        albumCategory: album.category,
        coverGradient: album.coverGradient || 'linear-gradient(135deg, #15111D 0%, #201C2B 100%)',
        coverEmoji: album.coverEmoji || '💿',
        directLink,
        albumObj: album,
        trackIdx
      };
    });
  }).filter(t => {
    if (!trackSearchQuery.trim()) return false;
    const query = trackSearchQuery.toLowerCase().trim();
    return t.name.toLowerCase().includes(query) || t.album.toLowerCase().includes(query);
  });



  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setShowMobileMenu(false);
  };

  return (
    <div className="font-sans text-[#2D1B3D] bg-transparent selection:bg-[#F7CAC9] selection:text-[#2D1B3D] min-h-screen relative">
      
      {/* Dynamic Floating Glass Atmosphere Blur Orbs */}
      <div className="fixed top-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#F7CAC9] rounded-full blur-[120px] opacity-45 pointer-events-none z-0" />
      <div className="fixed bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-[#92A8D1] rounded-full blur-[120px] opacity-45 pointer-events-none z-0" />
      <div className="fixed top-1/3 right-[10%] w-[350px] h-[350px] bg-[#E2CCE9] rounded-full blur-[100px] opacity-30 pointer-events-none z-0" />
      
      {/* Dynamic Header / Navigation */}
      <nav className="fixed top-0 left-0 w-full z-40 px-4 py-4 md:px-8 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between glass-panel rounded-full px-6 sm:px-8 py-3 shadow-lg border border-white/40">
          
          {/* Logo Brand */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl font-bold tracking-tighter hover:scale-105 transition-transform flex items-center gap-2" 
            style={{ fontFamily: 'var(--font-bebas)', color: 'var(--color-darkpurple)' }}
          >
            <span>SEVENTEEN</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-gradient-to-r from-rosequartz to-serenity text-slate-800 tracking-normal font-sans shadow-sm">
              CARAT HUB
            </span>
          </button>

          {/* Nav items for large screens */}
          <div className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest text-slate-500 font-display">
            <button onClick={() => scrollToSection('about')} className="hover:text-blue-400 transition-colors cursor-pointer">核心概念</button>
            <button onClick={() => scrollToSection('members')} className="hover:text-pink-400 transition-colors cursor-pointer">成員目錄</button>
            <button onClick={() => scrollToSection('miniteen')} className="hover:text-amber-500 transition-colors cursor-pointer font-bold text-amber-600">MINITEEN</button>
            <button onClick={() => scrollToSection('discography')} className="hover:text-blue-400 transition-colors cursor-pointer">經典專輯</button>
            <button onClick={() => scrollToSection('variety')} className="hover:text-pink-400 transition-colors cursor-pointer">爆笑綜藝</button>
            <button onClick={() => scrollToSection('merchandise')} className="hover:text-[#92A8D1] transition-colors font-bold text-pink-500 cursor-pointer">官方周邊</button>
          </div>

          <div className="flex items-center gap-3">
            {/* Interactive Shopping Cart button with bounce counts */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-full text-[#475569] hover:bg-slate-50 hover:text-[#2D1B3D] transition-all cursor-pointer flex items-center justify-center border border-slate-200/50"
              title="檢視我的購物籃"
            >
              <ShoppingCart size={15} />
              {cart.reduce((sum, item) => sum + item.quantity, 0) > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white font-bold rounded-full text-[9px] w-4.5 h-4.5 flex items-center justify-center animate-bounce shadow">
                  {cart.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </button>

            {/* Direct prompt visual button for mobile panel */}
            <button 
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="md:hidden text-[#2D1B3D] hover:text-[#92A8D1] transition-all p-1"
              title="展開選單"
            >
              {showMobileMenu ? <X size={20} /> : <Menu size={20} />}
            </button>
            
            {/* SVT Hearts icon cheering feedback */}
            <button 
              onClick={() => {
                const element = document.getElementById('merchandise');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-[#F7CAC9] to-[#92A8D1] p-2.5 rounded-full text-slate-800 hover:scale-105 active:scale-95 transition-all shadow-md hidden sm:flex items-center justify-center cursor-pointer"
              title="前往官方周邊"
            >
              <Gem size={15} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer overlay */}
        {showMobileMenu && (
          <div className="absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-md rounded-3xl p-6 border border-slate-200/60 shadow-xl flex flex-col gap-4 md:hidden animate-in slide-in-from-top duration-300">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b pb-2 mb-1">
              頁面導覽 Hub Navigation
            </div>
            <button 
              onClick={() => {
                setIsCartOpen(true);
                setShowMobileMenu(false);
              }} 
              className="py-2 text-sm text-left font-bold text-slate-700 hover:text-pink-400 flex items-center justify-between"
            >
              <span className="flex items-center gap-2">🛒 我的克拉購物車 ({cart.reduce((sum, i) => sum + i.quantity, 0)})</span>
              <ChevronRight size={14} />
            </button>
            <button onClick={() => scrollToSection('about')} className="py-2 text-sm text-left font-bold text-slate-700 hover:text-blue-400 flex items-center justify-between">
              <span>🌟 自主製作與世界觀故事</span>
              <ChevronRight size={14} />
            </button>
            <button onClick={() => scrollToSection('members')} className="py-2 text-sm text-left font-bold text-slate-700 hover:text-pink-400 flex items-center justify-between">
              <span>👥 13位成員璀璨群像</span>
              <ChevronRight size={14} />
            </button>
            <button onClick={() => scrollToSection('miniteen')} className="py-2 text-sm text-left font-bold text-slate-700 hover:text-amber-500 flex items-center justify-between">
              <span>MINITEEN</span>
              <ChevronRight size={14} />
            </button>
            <button onClick={() => scrollToSection('discography')} className="py-2 text-sm text-left font-bold text-slate-700 hover:text-blue-400 flex items-center justify-between">
              <span>💿 官方精選音樂專輯</span>
              <ChevronRight size={14} />
            </button>
            <button onClick={() => scrollToSection('variety')} className="py-2 text-sm text-left font-bold text-slate-700 hover:text-pink-400 flex items-center justify-between">
              <span>🎬 打工人快樂源泉GOING綜藝</span>
              <ChevronRight size={14} />
            </button>
            <button onClick={() => scrollToSection('merchandise')} className="py-2 text-sm text-left font-bold text-slate-700 hover:text-[#92A8D1] flex items-center justify-between">
              <span>🏷️ 官方限量周邊商品官網</span>
              <ChevronRight size={14} />
            </button>
          </div>
        )}
      </nav>

      {/* Hero Welcome Unit */}
      <header className="relative min-h-screen flex flex-col justify-center items-center pt-32 pb-20 px-6 overflow-hidden bg-transparent border-b border-white/25">
        
        {/* Dynamic floating luxury diamonds illustration inside frame using standard referrals */}
        <div className="absolute top-1/4 left-1/10 text-[#F7CAC9]/25 text-[10rem] select-none pointer-events-none">💎</div>
        <div className="absolute bottom-1/4 right-1/12 text-[#92A8D1]/15 text-[12rem] select-none pointer-events-none">🫧</div>
        <div className="absolute top-1/3 right-1/10 text-slate-400/5 text-[7rem] select-none pointer-events-none">⭐</div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          
          {/* Comeback Release notice badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/60 border border-white/80 shadow-sm mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F7CAC9]" />
            <span className="text-[10px] font-extrabold tracking-[0.25em] text-slate-600 uppercase">
              LATEST COMEBACK RELEASE: SPILL THE FEELS (12th Mini)
            </span>
          </div>

          {/* SAY THE NAME brand tagline */}
          <p className="text-xs sm:text-sm font-bold tracking-[0.5em] text-[#92A8D1] mb-2 uppercase font-display">
            SAY THE NAME • SEVENTEEN
          </p>

          {/* Giant Title banner */}
          <h1 
            className="shimmer-text tracking-normal mb-6 leading-none selection:bg-slate-800 selection:text-white"
            style={{ 
              fontFamily: 'var(--font-bebas)', 
              fontSize: 'clamp(3rem, 12vw, 10rem)', 
              lineHeight: '0.85' 
            }}
          >
            SEVENTEEN
          </h1>

          {/* Subtitle statement */}
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto font-light text-slate-700 leading-relaxed mb-10">
            十三名成員、三大分隊、同一個輝煌璀璨的頂流團體。<br className="hidden sm:inline" />
            在象徵熱烈的「石英粉」與平靜的「寧靜藍」色譜交織中，共譜屬於 CARAT 的極致璀璨青春詩章。
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => scrollToSection('about')}
              className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#2D1B3D] text-white text-xs font-bold tracking-widest hover:bg-[#3e2954] hover:scale-105 active:scale-95 transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>瞭解自主創作理念</span>
              <Star size={13} className="text-pink-300 fill-current" />
            </button>
            <button
              onClick={() => scrollToSection('members')}
              className="w-full sm:w-auto px-9 py-4 rounded-full glass-panel text-slate-800 text-xs font-bold tracking-widest hover:bg-white hover:scale-105 active:scale-95 transition-all shadow flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>與13位成員邂逅</span>
              <ChevronRight size={13} />
            </button>
          </div>

          {/* Personalization content replaced with interactive SEVENTEEN Mood Quiz & Recommendations */}
          <div id="mood-quiz-container" className="max-w-md mx-auto mt-14 p-6 rounded-3xl bg-white/60 backdrop-blur-xl border border-white/60 shadow-xl transition-all duration-300 hover:shadow-2xl">
            {quizStep === 'welcome' ? (
              fandomName ? (
                <div className="text-center space-y-4 animate-in fade-in duration-300">
                  <span className="inline-flex items-center gap-1.5 text-[10px] bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full font-extrabold tracking-wider uppercase">
                    <Sparkles size={11} className="text-indigo-500 animate-pulse" /> SEVENTEEN MOOD SENSING
                  </span>
                  <h3 className="text-base font-extrabold text-[#2D1B3D]">
                    哈囉 克拉成員 <span className="text-pink-500 font-black underline decoration-[#F7CAC9]/80 decoration-2">{fandomName}</span> 
                  </h3>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed font-normal">
                    今天過得好嗎？讓 17 孩子們與你的心電感應開啟！只需答完 3 題感應卡片，我們將為你推薦當下最契合心情的綜藝神劇或經典神曲！
                  </p>

                  <div className="flex flex-col sm:flex-row gap-2.5 justify-center pt-2">
                    <button
                      id="btn-start-mood-quiz"
                      onClick={() => {
                        setQuizStep('playing');
                        setCurrentQuizIndex(0);
                        setSelectedQuizAnswer(null);
                        setShowQuizFeedback(false);
                        setSelectedMoods([]);
                      }}
                      className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#F7CAC9] to-[#92A8D1] hover:opacity-95 hover:scale-[1.02] active:scale-95 transition-all shadow-md cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <span>開啟心情感應</span>
                      <ChevronRight size={12} className="animate-pulse" />
                    </button>
                    <button
                      id="btn-change-fandom-name"
                      onClick={handleClearFandomName}
                      className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-500 hover:text-rose-500 transition-all bg-slate-100 hover:bg-slate-200/60 cursor-pointer"
                    >
                      更換稱呼
                    </button>
                  </div>
                  
                  {lastRecommendedMood && (
                    <div className="text-[10px] font-extrabold text-[#92A8D1] tracking-wider pt-2 border-t border-slate-200/40">
                      🔮 上次感應狀態：
                      <span className="text-pink-500 ml-1 font-black">
                        {lastRecommendedMood === 'energized' ? "⚡ 活力爆棚多巴胺" : 
                         lastRecommendedMood === 'healing' ? "🌸 溫馨療癒避風港" : 
                         lastRecommendedMood === 'laugh' ? "🔋 爆笑解壓笑不停" : "🍵 佛系平靜慢時光"}
                      </span>
                    </div>
                  )}
                </div>
              ) : (
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (customWelcome.trim()) {
                      setFandomName(customWelcome.trim());
                      localStorage.setItem('carat_name', customWelcome.trim());
                      setCustomWelcome('');
                      
                      // Immediately start playing
                      setQuizStep('playing');
                      setCurrentQuizIndex(0);
                      setSelectedQuizAnswer(null);
                      setShowQuizFeedback(false);
                      setSelectedMoods([]);
                    } else {
                      addToast("⚠️ 請輸入稱呼", "請先輸入您的克拉暱稱再開啟心情感應唷！", "info");
                    }
                  }} 
                  className="space-y-4"
                >
                  <div className="text-center">
                    <span className="inline-flex items-center gap-1.5 text-[10px] bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full font-extrabold tracking-wider uppercase mb-1">
                      <Sparkles size={11} className="text-indigo-500 animate-pulse" /> SEVENTEEN MOOD SENSING
                    </span>
                    <h3 className="text-base font-extrabold text-[#2D1B3D]">克拉心情調頻器</h3>
                    <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                      身心俱疲想被治癒？還是能量滿載想找地方開嗨？<br />輸入名字，測出最契合你今晚狀態的 SVT 綜藝歌單！
                    </p>
                  </div>
                  
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      placeholder="輸入你的克拉暱稱..."
                      value={customWelcome}
                      onChange={(e) => setCustomWelcome(e.target.value)}
                      maxLength={16}
                      className="flex-1 px-4 py-2.5 rounded-xl text-xs bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#F7CAC9] text-slate-800 shadow-inner"
                    />
                    <button 
                      type="submit"
                      className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#F7CAC9] to-[#92A8D1] hover:opacity-90 active:scale-95 transition-all shadow-sm cursor-pointer"
                    >
                      開始測驗
                    </button>
                  </div>
                  {lastRecommendedMood && (
                    <div className="text-center text-[10px] font-bold text-[#92A8D1] tracking-wide pt-1">
                      🔮 上次調頻心情: {
                        lastRecommendedMood === 'energized' ? "⚡ 活力爆棚" : 
                        lastRecommendedMood === 'healing' ? "🌸 溫柔治癒" : 
                        lastRecommendedMood === 'laugh' ? "🔋 爆笑解壓" : "🍵 佛系平靜"
                      }
                    </div>
                  )}
                </form>
              )
            ) : quizStep === 'playing' ? (
              <div className="space-y-4 animate-in fade-in duration-300">
                {/* Question Header */}
                <div className="flex justify-between items-center pb-2 border-b border-slate-200/50">
                  <span className="text-[10px] font-extrabold text-[#92A8D1] uppercase tracking-widest font-mono">
                    CARD Q.{currentQuizIndex + 1} / {MOOD_QUESTIONS.length}
                  </span>
                  <span className="text-[10px] font-extrabold text-pink-400 bg-pink-50 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <Sparkles size={9} className="animate-spin text-pink-400" /> 心情感知中
                  </span>
                </div>

                {/* Question Text */}
                <h4 className="text-xs sm:text-xs font-bold text-[#2D1B3D] leading-relaxed text-left min-h-[44px]">
                  {MOOD_QUESTIONS[currentQuizIndex].question}
                </h4>

                {/* Option Buttons */}
                <div className="grid grid-cols-1 gap-2">
                  {MOOD_QUESTIONS[currentQuizIndex].options.map((option, optIdx) => {
                    let btnStyle = "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-pink-200";
                    let checkIcon = null;

                    if (showQuizFeedback) {
                      const isSelected = optIdx === selectedQuizAnswer;
                      if (isSelected) {
                        btnStyle = "bg-gradient-[#F7CAC9]/10 to-[#92A8D1]/10 border-[#92A8D1] text-indigo-950 font-semibold ring-2 ring-[#92A8D1]/30";
                        checkIcon = <Check size={12} className="text-pink-500 font-bold shrink-0" />;
                      } else {
                        btnStyle = "bg-white/40 border-slate-100 text-slate-400 opacity-60";
                      }
                    }

                    return (
                      <button
                        key={optIdx}
                        disabled={showQuizFeedback}
                        onClick={() => handleAnswerSelect(optIdx)}
                        className={`w-full p-3 rounded-xl border text-xs text-left transition-all flex items-center justify-between gap-2.5 cursor-pointer shadow-sm ${btnStyle}`}
                      >
                        <span className="flex-1 font-medium">{option.text}</span>
                        {checkIcon}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation / Description of choice & Next controls */}
                {showQuizFeedback && selectedQuizAnswer !== null && (
                  <div className="mt-3 p-3 rounded-xl bg-slate-50 border border-slate-150 text-left animate-in slide-in-from-bottom-2 duration-300">
                    <p className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                      💡 內心感應特徵：
                    </p>
                    <p className="text-[11px] text-slate-600 leading-relaxed font-normal">
                      「{MOOD_QUESTIONS[currentQuizIndex].options[selectedQuizAnswer].description}」
                    </p>

                    <button
                      id="btn-mood-next-step"
                      onClick={handleNextQuiz}
                      className="mt-3.5 w-full py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#2D1B3D] to-[#45305d] hover:opacity-95 text-center cursor-pointer shadow-sm flex items-center justify-center gap-1"
                    >
                      <span>
                        {currentQuizIndex === MOOD_QUESTIONS.length - 1 ? "查看心情調頻報告" : "進入下一張卡片"}
                      </span>
                      <ChevronRight size={12} />
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center space-y-4 animate-in zoom-in duration-400">
                <span className="inline-flex items-center gap-1 text-[10px] bg-pink-100 text-pink-600 px-3 py-1 rounded-full font-extrabold tracking-wider uppercase">
                  <Award size={10} className="text-pink-500" />調頻感應完成
                </span>

                <div>
                  <h3 className="text-xs text-slate-400 font-semibold uppercase tracking-widest font-mono">
                    你此時的心情調頻狀態
                  </h3>
                  <div className="mt-1.5 inline-block px-5 py-2 rounded-2xl text-sm font-black bg-gradient-to-r from-[#F7CAC9] to-[#92A8D1] text-indigo-950 shadow-md">
                    {lastRecommendedMood === 'energized' ? "⚡ 活力爆棚・多巴胺拉滿" : 
                     lastRecommendedMood === 'healing' ? "🌸 溫馨療癒・心靈避風港" : 
                     lastRecommendedMood === 'laugh' ? "🔋 爆笑解壓・多巴胺警報" : "🍵 平靜安寧・悠閒慢時光"}
                  </div>
                </div>

                {/* Detailed Mood Description */}
                <p className="text-xs text-slate-500 leading-relaxed px-1 font-normal max-w-sm mx-auto">
                  {lastRecommendedMood === 'energized' ? "此時此刻的你，內心像蹦蹦跳跳的鑽石仙子！最需要節奏感拉滿、強勁律動的主打歌，和一頭栽入毫無保留的團建高能綜藝中大肆尖叫、大肆出汗！" :
                   lastRecommendedMood === 'healing' ? "辛苦惹！此時此刻的你最適合躺在慵懶沙發上，被克拉神級溫柔治癒神曲緊緊擁抱，跟著慢悠悠的森林日常綜藝，一起卸下一整天的武裝與疲憊。" :
                   lastRecommendedMood === 'laugh' ? "心防緊鎖、壓力緊繃？這時最需要無腦多巴胺大笑一場！17們的頂級混亂神之操作、黑手黨狼人殺、互扯拆台，絕對是全網最療效速通的笑穴解藥！" :
                   "悠悠午後，只求一人在閣樓發發呆。此時不需多話，只要點燃那一抹舒緩細膩的浪漫伴奏，跟著營火旁微醺的真心聊天，舒服平靜地感悟璀璨時光。"}
                </p>

                {/* Customized Mood Recommendations List */}
                <div className="space-y-2.5 pt-2 border-t border-slate-200/50 text-left">
                  <h4 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest pl-1">
                    🎯 專屬於你的精選推薦
                  </h4>

                  {currentRecommendations.map((rec, idx) => (
                    <div 
                      key={idx} 
                      className="p-3.5 rounded-2xl bg-white border border-slate-150 transition-all hover:border-[#92A8D1] hover:shadow-sm"
                    >
                      <div className="flex justify-between items-center gap-1">
                        <span className={`text-[9px] font-extrabold px-2 py-0.5 rounded-full ${
                          rec.type === 'song' ? 'bg-pink-50 text-pink-600' : 'bg-indigo-50 text-[#92A8D1]'
                        }`}>
                          {rec.type === 'song' ? "🎵 推薦歌曲" : "🎬 推薦綜藝"}
                        </span>
                        <button 
                          onClick={() => handlePlayRecommendation(rec)}
                          className="text-[9px] font-bold text-[#92A8D1] hover:text-pink-600 transition-colors flex items-center gap-0.5 underline decoration-[#F7CAC9] cursor-pointer bg-transparent border-none p-0"
                          title="在網頁內直接播放此熱門推薦"
                        >
                          網頁直接放映 <Sparkles size={8} />
                        </button>
                      </div>

                      <h5 className="text-xs font-bold text-slate-800 mt-1.5 flex items-center gap-1">
                        {rec.title}
                      </h5>

                      <p className="text-[10px] text-slate-500 mt-1 font-normal leading-relaxed">
                        {rec.reason}
                      </p>

                      <div className="mt-2.5 flex">
                        <button 
                          onClick={() => handlePlayRecommendation(rec)}
                          className="w-full py-2 rounded-xl text-[10px] font-black text-center bg-gradient-to-r from-[#F7CAC9]/25 to-[#92A8D1]/25 border border-[#92A8D1]/30 hover:from-[#F7CAC9] hover:to-[#92A8D1] text-indigo-950 hover:text-slate-950 transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 shadow-sm"
                          title="點擊在線播放並自動匹配網頁板塊"
                        >
                          {rec.type === 'song' ? <Play size={10} className="fill-current" /> : <Tv size={10} />}
                          <span>立刻在線放映 / 留在網頁觀看</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Form controls / Footer actions */}
                <div className="flex gap-2.5 pt-2 justify-center">
                  <button
                    id="btn-restart-mood-quiz"
                    onClick={handleRestartQuiz}
                    className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#F7CAC9] to-[#92A8D1] hover:opacity-90 active:scale-95 transition-all shadow-sm cursor-pointer flex items-center gap-1"
                  >
                    <Repeat size={12} />
                    <span>重新感應</span>
                  </button>

                  <button
                    id="btn-share-mood-quiz"
                    onClick={() => {
                      let shareText = `🔮 我在 SEVENTEEN 專屬克拉網頁進行了心情感應！\n我的當下調頻為【${
                        lastRecommendedMood === 'energized' ? "⚡ 活力爆棚・多巴胺拉滿" : 
                        lastRecommendedMood === 'healing' ? "🌸 溫馨療癒・心靈避風港" : 
                        lastRecommendedMood === 'laugh' ? "🔋 爆笑解壓・多巴胺警報" : "🍵 平靜安寧・悠閒慢時光"
                      }】✨\n快來測測你今天的專屬療癒綜藝 & 推薦歌曲吧！💎`;
                      
                      try {
                        navigator.clipboard.writeText(shareText);
                      } catch (e) {}

                      addToast(
                        "🎉 感應報告複製成功！",
                        `已複製您的專屬心情感應報告至剪貼簿，快分享給克拉好友吧！`,
                        "success"
                      );
                    }}
                    className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200/70 transition-all cursor-pointer flex items-center gap-1"
                  >
                    <Star size={11} className="text-amber-500 fill-amber-500" />
                    <span>分享心情</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Floating status strip */}
        <div className="absolute bottom-6 flex items-center gap-2 bg-white/70 backdrop-blur-md px-5 py-2 rounded-full border border-white/80 shadow-sm text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500">
          <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
          <span>13 Members • 3 Teams • 1 Family</span>
        </div>
      </header>

      {/* Story Narrative About Section */}
      <section id="about" className="py-24 sm:py-32 bg-slate-100/50 border-y border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Story text */}
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#F7CAC9]/20 text-[#2D1B3D] text-[10px] font-extrabold uppercase tracking-wider mb-4">
                <HeartHandshake size={10} /> The Legend of Seventeen
              </div>
              
              <h2 className="text-3xl sm:text-5xl font-extrabold mb-6 tracking-tight" style={{ fontFamily: 'var(--font-serif)' }}>
                自主製作偶像的顛峰標竿
              </h2>
              
              <p className="text-slate-600 text-sm leading-relaxed mb-5">
                自 2015 年橫空出世以來，SEVENTEEN 憑藉獨一無二的「13名成員 + 3個專屬分隊 + 1個凝聚全體 = 17」絕妙算式，開創了 K-pop 席捲全球的超高能紀元。
              </p>
              
              <p className="text-slate-600 text-sm leading-relaxed mb-8">
                他們是無可挑剔的表演者，更是真誠的創作者。核心製作人 WOOZI 操刀幾乎全盤詞曲編排，Performance 隊長 HOSHI 親自設計所有不可置信的極限編舞，Hip-Hop 組攜手打造最熱烈真摯的 Rap 段落。正因這份毫無保留的誠摯態度，使他們穩坐公認的「自主製作第一天團」。
              </p>

              {/* Stats Highlights cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-2xl border border-slate-200/50 shadow-sm flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-pink-100 text-[#F7CAC9] flex items-center justify-center font-bold text-center flex-shrink-0">
                    💿
                  </div>
                  <div>
                    <h4 className="text-xl font-extrabold text-[#2D1B3D] tracking-tight">1000萬+</h4>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">專輯累計銷量</span>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-slate-200/50 shadow-sm flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-blue-100 text-[#92A8D1] flex items-center justify-center font-bold text-center flex-shrink-0">
                    👑
                  </div>
                  <div>
                    <h4 className="text-xl font-extrabold text-[#2D1B3D] tracking-tight">NO.1</h4>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">全球音樂盛典大賞</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Illustrative Right Side: The 3 Units visual representation bento board */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              <div className="p-6 bg-gradient-to-r from-pink-50 to-[#F7CAC9]/40 rounded-3xl border border-pink-100 shadow-sm">
                <span className="text-[9px] font-extrabold tracking-widest text-[#2D1B3D] uppercase bg-white/65 px-2.5 py-0.5 rounded-full">VOCAL TEAM [歌唱組]</span>
                <h4 className="text-lg font-bold text-[#2D1B3D] mt-2 mb-1">蜜糖金嗓的深情擁抱</h4>
                <p className="text-xs text-slate-500 leading-relaxed">成員：WOOZI (Leader), JEONGHAN, JOSHUA, DK, SEUNGKWAN。傾瀉溫馨高音與澄澈和聲，完美拿捏每一個真假音深情起伏。</p>
              </div>

              <div className="p-6 bg-gradient-to-r from-blue-50 to-[#92A8D1]/40 rounded-3xl border border-blue-100 shadow-sm">
                <span className="text-[9px] font-extrabold tracking-widest text-slate-700 bg-white/65 px-2.5 py-0.5 rounded-full">HIP-HOP TEAM [嘻哈組]</span>
                <h4 className="text-lg font-bold text-slate-800 mt-2 mb-1">硬核低音砲的詞曲力量</h4>
                <p className="text-xs text-slate-500 leading-relaxed">成員：S.COUPS (Leader), WONWOO, MINGYU, VERNON。深沉迷人的重低音、蓬勃的律動與犀利而飽含哲理的作詞表達，引領心靈共鳴。</p>
              </div>

              <div className="p-6 bg-gradient-to-r from-purple-50 to-[#E2CCE9]/40 rounded-3xl border border-purple-100 shadow-sm">
                <span className="text-[9px] font-extrabold tracking-widest text-slate-700 bg-white/65 px-2.5 py-0.5 rounded-full">PERFORMANCE TEAM [表演組]</span>
                <h4 className="text-lg font-bold text-slate-800 mt-2 mb-1">刀群舞顛峰與舞台掌控</h4>
                <p className="text-xs text-slate-500 leading-relaxed">成員：HOSHI (Leader), JUN, THE 8, DINO。創造不可思議的神級舞台大劇，將古典、現代街舞、武術美感毫無縫隙完美拼接融合。</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Members Directory Grid */}
      <section id="members" className="py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Title and Filter buttons */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 border-b border-purple-100/40 pb-6">
          <div>
            <span className="text-[10px] font-extrabold tracking-[0.3em] text-[#92A8D1] uppercase block mb-1">SVT Core Members</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D1B3D] tracking-tight" style={{ fontFamily: 'var(--font-serif)' }}>
              璀璨群像 Members Directory
            </h2>
            <p className="text-slate-500 text-xs mt-2">点击任意成员，探索他们最私密的趣味百科、人生信条與專屬代表色！</p>
          </div>

          {/* Unit filter tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-slate-100 border border-slate-200/50">
            {(['All', 'Vocal', 'Hip-Hop', 'Performance'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => {
                  setActiveUnitTab(tab);
                  setSearchQuery('');
                }}
                className={`px-4.5 py-2 rounded-lg text-xs font-bold tracking-wider transition-all cursor-pointer ${
                  activeUnitTab === tab 
                    ? 'bg-[#2D1B3D] text-white shadow'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {tab === 'All' ? '全體' : `${tab} 隊`}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Search Box */}
        <div className="mb-10 max-w-md">
          <div className="relative">
            <input 
              type="text"
              placeholder="搜尋成員名字、實名或擔當職責 (e.g. Hoshi, 淨漢)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2.5 pl-10 rounded-2xl text-xs bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#92A8D1]"
            />
            <Search className="absolute left-3.5 top-3 text-slate-400 pointer-events-none" size={14} />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-600 bg-slate-100 rounded px-1.5 py-0.5"
                title="清除搜尋"
              >
                清除
              </button>
            )}
          </div>
        </div>

        {/* Members Grid layout with beautiful gradients */}
        {filteredMembers.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-7">
            {filteredMembers.map((member, index) => (
              <div 
                key={member.name}
                onClick={() => setSelectedMember(member)}
                className="group cursor-pointer rounded-[2rem] bg-slate-900/90 backdrop-blur-md border border-white/10 p-4 transition-all duration-500 hover:-translate-y-2 hover:border-[#92A8D1]/40 relative overflow-hidden flex flex-col justify-between"
                style={{ 
                  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.4)',
                }}
              >
                {/* Image Avatar shown natively to ensure perfect, un-filtered crisp resolution without jagged edges */}
                <div className="aspect-[3/4] w-full rounded-2xl relative mb-4 overflow-hidden border border-white/10 bg-[#120E1A] flex items-center justify-center">
                  {(getMemberPhotoUrl(member.name) || member.photoUrl) ? (
                    <img 
                      src={getMemberPhotoUrl(member.name) || member.photoUrl} 
                      alt={member.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top absolute inset-0 block"
                    />
                  ) : (
                    <span className="text-7xl select-none">
                      {member.avatarEmoji}
                    </span>
                  )}
                </div>

                {/* Info titles */}
                <div className="text-center font-display pb-1">
                  <span className="text-[9px] font-extrabold tracking-widest uppercase text-white/50 bg-white/5 px-2.5 py-0.5 rounded-full inline-block mb-1 border border-white/5">
                    {member.name === 'S.COUPS' ? 'General Leader' : `${member.unit} Team`}
                  </span>
                  <h3 className="font-extrabold text-white text-base group-hover:text-pink-300 transition-colors mt-1 font-sans tracking-wide">
                    {member.name}
                  </h3>
                  <p className="text-[10px] text-slate-400 mt-1 truncate font-sans">
                    {member.realName}
                  </p>
                </div>

                {/* Hover subtle animated underline styled border glows */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-500 scale-x-0 group-hover:scale-x-100" 
                  style={{ backgroundColor: member.colorHex }}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-slate-50 border border-slate-100 rounded-3xl">
            <Smile size={32} className="mx-auto text-slate-350 mb-3" />
            <p className="text-slate-500 text-xs">沒有找到符合條件的成員。試試其他搜尋關鍵詞吧！</p>
          </div>
        )}
      </section>

      {/* Interactive MINITEEN Mascot Directory Grid */}
      <section id="miniteen" className="py-24 sm:py-32 bg-[#FDFBF7] border-y border-amber-100/50 relative overflow-hidden">
        {/* Playful decorative bubbles */}
        <div className="absolute bottom-10 right-10 text-orange-200/20 text-8xl select-none pointer-events-none animate-pulse">🍊</div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Title and Filter buttons */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 border-b border-amber-100 pb-6">
            <div>
              <span className="text-[10px] font-extrabold tracking-[0.3em] text-amber-500 uppercase block mb-1">SVT Chibi Mascots</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D1B3D] tracking-tight" style={{ fontFamily: 'var(--font-serif)' }}>
                MINITEEN
              </h2>
              <p className="text-slate-500 text-xs mt-2">點擊任意Q版分身玩偶，解鎖他們的萌點、外貌特徵與專屬爆笑趣事！</p>
            </div>

            {/* Sub-unit filter tabs targeting original member's unit */}
            <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-slate-100 border border-slate-200/50">
              {(['All', 'Vocal', 'Hip-Hop', 'Performance'] as const).map(tab => (
                <button
                  key={`miniteen-${tab}`}
                  onClick={() => {
                    setMiniteenActiveTab(tab);
                    setMiniteenSearchQuery('');
                  }}
                  className={`px-4.5 py-2 rounded-lg text-xs font-bold tracking-wider transition-all cursor-pointer ${
                    miniteenActiveTab === tab 
                      ? 'bg-amber-500 text-white shadow'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {tab === 'All' ? '全員' : `${tab} 隊` }
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Search Box */}
          <div className="mb-10 max-w-md">
            <div className="relative">
              <input 
                type="text"
                placeholder="搜尋 Q版名字、對應成員或是特徵 (e.g. Hanni, 庫斯, 橘子)..."
                value={miniteenSearchQuery}
                onChange={(e) => setMiniteenSearchQuery(e.target.value)}
                className="w-full px-4 py-2.5 pl-10 rounded-2xl text-xs bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <Search className="absolute left-3.5 top-3 text-slate-400 pointer-events-none" size={14} />
              {miniteenSearchQuery && (
                <button 
                  onClick={() => setMiniteenSearchQuery('')}
                  className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-600 bg-slate-100 rounded px-1.5 py-0.5"
                  title="清除搜尋"
                >
                  清除
                </button>
              )}
            </div>
          </div>

          {/* MINITEEN Grid layout with beautiful gradients */}
          {filteredMiniteens.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-7">
              {filteredMiniteens.map((character, index) => (
                <div 
                  key={character.name}
                  onClick={() => setSelectedMiniteen(character)}
                  className="group cursor-pointer rounded-[2rem] bg-white border border-slate-150 p-4 transition-all duration-500 hover:-translate-y-2 hover:border-amber-450 hover:shadow-lg relative overflow-hidden flex flex-col justify-between"
                  style={{ 
                    boxShadow: '0 4px 20px rgba(139, 92, 26, 0.05)',
                  }}
                >
                  {/* Photo Avatar framed with soft colors */}
                  <div 
                    className="aspect-square w-full rounded-2xl flex items-center justify-center text-6xl select-none relative mb-4 overflow-hidden border border-slate-100 bg-slate-50 shadow-inner isolate"
                    style={{ 
                      background: character.photoGradient,
                      transform: 'translateZ(0)',
                      WebkitTransform: 'translateZ(0)'
                    }}
                  >
                    {character.photoUrl ? (
                      <img 
                        src={character.photoUrl} 
                        alt={character.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110 absolute inset-0"
                      />
                    ) : (
                      <span className="transform group-hover:scale-105 transition-all duration-500 drop-shadow-md">
                        {character.avatarEmoji}
                      </span>
                    )}
                  </div>

                  {/* Info titles */}
                  <div className="text-center font-display pb-1">
                    <span className="text-[9px] font-extrabold tracking-widest uppercase text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-full inline-block mb-1 border border-amber-100/30">
                      對應: {character.originalMember}
                    </span>
                    <h3 className="font-extrabold text-slate-800 text-sm group-hover:text-amber-600 transition-colors mt-1 font-sans tracking-wide">
                      {character.name}
                    </h3>
                    <p className="text-[10px] text-slate-400 mt-1 truncate font-sans">
                      {character.characterType}
                    </p>
                  </div>

                  {/* Hover subtle animated underline styled border glows */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-500 scale-x-0 group-hover:scale-x-100" 
                    style={{ backgroundColor: character.colorHex }}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-slate-50 border border-slate-100 rounded-3xl">
              <Smile size={32} className="mx-auto text-slate-350 mb-3" />
              <p className="text-slate-500 text-xs">沒有找到符合條件的寵物夥伴。試試其他搜尋關鍵詞吧！</p>
            </div>
          )}
        </div>
      </section>

      {/* Discography - Premium dark concert layout */}
      <section id="discography" className="py-24 sm:py-32 bg-[#15111D] text-white overflow-hidden relative border-b border-slate-900">
        
        {/* Subtle decorative vinyl glow circle on deep background */}
        <div className="absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5 opacity-5 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          
          {/* Header titles */}
          <div className="max-w-3xl mb-8">
            <span className="text-[10px] font-extrabold tracking-[0.3em] text-[#92A8D1] uppercase block mb-1">Official Discography</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ fontFamily: 'var(--font-serif)' }}>
              經典回顧 Vinyl Discography
            </h2>
            <p className="text-slate-400 text-xs mt-2 leading-relaxed">
              每一張心血編織的經典大碟皆是一段璀璨鑽石回憶，滑鼠懸停即可滑出黑膠光碟，點擊開啟專輯詳細歌單，或直接在右側即時搜尋查找你最愛的歌曲！
            </p>
          </div>

          {/* Controls Row: Category buttons + Song Search Input */}
          <div className="flex flex-row flex-wrap items-center justify-between gap-4 mb-16 pb-6 border-b border-white/5 w-full">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-1.5 p-1 bg-white/5 rounded-xl border border-white/10 justify-start font-mono">
              {[
                { filter: 'all', label: '全體作品' },
                { filter: 'unit', label: '小分隊作品' },
                { filter: 'solo', label: '個人作品' },
                { filter: 'collab', label: '合作歌曲' },
                { filter: 'ost', label: 'OST' },
                { filter: 'cover', label: '翻唱' },
                { filter: 'Unreleased songs', label: '未發行歌曲' }
              ].map(item => (
                <button
                  key={item.filter}
                  onClick={() => {
                    setAlbumFilter(item.filter);
                    setActiveAlbumTracks(null);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    albumFilter === item.filter
                      ? 'bg-gradient-to-r from-[#F7CAC9] to-[#92A8D1] text-slate-950 font-bold shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Special Song Search Input */}
            <div className="relative w-full sm:w-72 md:w-80 lg:w-72 flex-grow sm:flex-grow-0">
              <input
                type="text"
                placeholder="即時尋找全專歌曲..."
                value={trackSearchQuery}
                onChange={(e) => {
                  setTrackSearchQuery(e.target.value);
                }}
                className="w-full pl-9 pr-8 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-semibold text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#92A8D1]/50 focus:border-[#F7CAC9] transition-all"
              />
                <div className="absolute left-3 top-2.5 text-slate-400 pointer-events-none">
                  <Search size={14} className="text-slate-400" />
                </div>
                {trackSearchQuery && (
                  <button 
                    onClick={() => setTrackSearchQuery('')}
                    className="absolute right-2.5 top-2.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
            </div>

          {/* Albums display layout OR Track Search Results */}
          {trackSearchQuery.trim() ? (
            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-6 sm:p-10 animate-in fade-in duration-500 text-left">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-white/10 pb-6 mb-8 gap-4">
                <div>
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Music className="text-[#F7CAC9] w-5 h-5 animate-pulse" />
                    <span>即時單曲搜尋結果 Track Search Results</span>
                  </h3>
                  <p className="text-slate-400 text-xs mt-1">
                    尋找到 {allMatchingTracks.length} 首符合 &ldquo;{trackSearchQuery}&rdquo; 的歌曲 💎
                  </p>
                </div>
                <button
                  onClick={() => setTrackSearchQuery('')}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <X size={14} />
                  <span>清除搜尋條件</span>
                </button>
              </div>

              {allMatchingTracks.length === 0 ? (
                <div className="text-center py-16">
                  <p className="text-slate-400 text-sm">找不到相符的歌曲，請嘗試其他關鍵字（如：Maestro, Hot, Super...）</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {allMatchingTracks.map((item, idx) => (
                    <div 
                      key={`${item.name}-${idx}`}
                      className="p-4 rounded-2xl bg-[#201C2B]/60 border border-white/5 hover:border-pink-300/30 flex flex-col justify-between hover:bg-slate-900/80 hover:shadow-lg transition-all duration-300 group/search-tk"
                    >
                      <div>
                        {/* Tags / Album Info */}
                        <div className="flex justify-between items-center mb-3">
                          <button
                            onClick={() => {
                              setActiveAlbumTracks(item.albumObj);
                              // Smooth scroll to activeAlbumTracks
                              setTimeout(() => {
                                document.getElementById('album-tracks-overlay')?.scrollIntoView({ behavior: 'smooth' });
                              }, 150);
                            }}
                            className="text-[9px] font-extrabold text-[#92A8D1] group-hover/search-tk:text-[#F7CAC9] tracking-widest uppercase bg-white/5 border border-white/10 px-2 py-0.5 rounded transition-all hover:bg-white/10 cursor-pointer text-left truncate max-w-[70%]"
                            title={`檢視《${item.album}》專輯全部歌單`}
                          >
                            💿 {item.album}
                          </button>
                          <span className="text-[10px] font-mono text-white/50">{item.albumYear}</span>
                        </div>

                        {/* Track Name */}
                        <h4 className="text-sm font-bold text-white mb-4 line-clamp-2">
                          {item.name}
                        </h4>
                      </div>

                      {/* Interactive Buttons footer */}
                      <div className="flex items-center gap-2 border-t border-white/5 pt-3 mt-2">
                        {/* YouTube on-site video player directly */}
                        <button
                          onClick={() => setActiveVideo({ url: item.directLink || getSongYouTubeUrl(item.cleanName) || "", title: item.name })}
                          className="flex-1 py-2 rounded-xl bg-gradient-to-r from-[#F7CAC9]/25 to-[#92A8D1]/25 hover:from-[#F7CAC9] hover:to-[#92A8D1] hover:text-slate-950 text-[#F7CAC9] text-[10px] font-extrabold tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                          title="在網頁內直接播放官方歌曲/MV"
                        >
                          <Youtube size={12} className="text-red-500 animate-pulse" fill="currentColor" />
                          <span>在線放映 (高清MV/歌曲)</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAlbums.map((album, index) => (
                <div 
                  key={`${album.title}-${album.year}-${album.type}`}
                  onClick={() => setActiveAlbumTracks(album)}
                  className="group relative p-6 bg-white/5 border border-white/10 hover:border-pink-300/30 rounded-[2rem] transition-all cursor-pointer flex flex-col justify-between hover:bg-white/10"
                >
                  <div>
                    {/* Top album info heading */}
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-[10px] font-extrabold text-white/40 tracking-[0.3em] uppercase">
                        {album.type}
                      </span>
                      <span className="text-[11px] font-mono font-bold text-[#F7CAC9]">
                        {album.year}
                      </span>
                    </div>

                    {/* Simulated Album Cover */}
                    <div className="relative aspect-square w-full rounded-2xl mb-6 overflow-hidden bg-slate-900 border border-white/10 flex items-center justify-center">
                      {/* True Jacket Cover with specific official photo cover */}
                      <div 
                        className="absolute inset-0 w-full h-full rounded-2xl flex flex-col justify-between overflow-hidden z-10 transition-transform duration-500 group-hover:scale-95 shadow-lg select-none bg-slate-900 border border-white/10"
                      >
                        <img 
                          src={getAlbumCoverUrl(album.title)} 
                          alt={album.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-slate-950/20 z-10 p-6 flex flex-col justify-between h-full">
                          <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center text-xl shadow border border-white/20 select-none">
                            💿
                          </div>
                          <div>
                            <span className="text-[8px] font-bold text-white/50 tracking-widest uppercase block mb-1">Pledis Official</span>
                            <h4 className="text-sm font-extrabold text-white leading-tight drop-shadow-sm truncate">
                              {album.title.split('(')[0]}
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-pink-300 transition-colors line-clamp-1 mb-2">
                      {album.title}
                    </h3>

                    <p className="text-xs text-slate-400 leading-relaxed font-normal mb-6 line-clamp-3">
                      {album.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-[10px] font-extrabold tracking-widest text-[#92A8D1] uppercase group-hover:translate-x-1.5 transition-transform mt-auto">
                    <span>查看全數曲目 Tracks</span>
                    <ChevronRight size={11} />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Interactive Album Tracks details overlay drawer */}
          {activeAlbumTracks && (
            <div id="album-tracks-overlay" className="mt-12 p-8 rounded-[2rem] bg-white/5 border border-white/10 animate-in fade-in duration-300 text-left scroll-mt-24">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-[9px] font-extrabold text-[#F7CAC9] tracking-widest uppercase bg-pink-100/10 px-2.5 py-0.5 rounded-md">
                    Album playlist lookup
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1.5">{activeAlbumTracks.title} — 完整收錄曲目</h3>
                </div>
                <button 
                  onClick={() => setActiveAlbumTracks(null)}
                  className="bg-white/10 hover:bg-white/20 text-white rounded-full p-1.5 transition-colors cursor-pointer"
                  title="隱藏曲目"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {activeAlbumTracks.tracks.map((track, trackIdx) => {
                  const isObj = typeof track === 'object' && track !== null;
                  const rawName = isObj ? track.name : String(track);
                  const directLink = isObj ? track.mvLink || track.mv : undefined;

                  const titleClean = rawName
                    .replace(/^\d+\.\s*/, '')
                    .replace(/\s*-\s*\[主打歌\]/, '')
                    .replace(/\s*-\s*\[雙主打歌\]/, '');

                  const destinationUrl = directLink || getSongYouTubeUrl(titleClean);

                  return (
                    <button 
                      key={isObj ? `${rawName}-${trackIdx}` : rawName}
                      onClick={() => setActiveVideo({ url: destinationUrl, title: titleClean })}
                      className="p-4 rounded-xl bg-slate-900/45 border border-white/5 hover:border-pink-300/20 flex items-center justify-between group/tk w-full transition-all duration-300 hover:bg-slate-900/85 hover:shadow-md cursor-pointer text-left"
                      title={`在網頁內直接播放 ${titleClean}`}
                    >
                      <div className="flex-1 min-w-0">
                        <span className="text-xs text-white/90 group-hover/tk:text-[#F7CAC9] font-medium transition-colors block truncate font-sans">
                          {rawName}
                        </span>
                        <span className="text-[10px] text-[#92A8D1] opacity-70 group-hover/tk:opacity-100 transition-opacity flex items-center gap-1.5 mt-1 font-sans font-medium">
                          <Youtube size={11} className="text-red-500" fill="currentColor" />
                          <span>此網頁內直接播放 ▶</span>
                        </span>
                      </div>
                      <div className="p-1 px-1.5 rounded bg-white/5 group-hover/tk:bg-[#92A8D1]/20 text-[#92A8D1] opacity-0 group-hover/tk:opacity-100 transition-opacity flex items-center gap-0.5 text-[9px] font-semibold flex-shrink-0">
                        <span>線上播放 ▶</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Bottom section margin gap */}
          <div className="mt-8" />

        </div>
      </section>

      {/* Variety Shows Highlights Grid Section */}
      <section id="variety" className="py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Title details */}
        <div className="text-center mb-16">
          <span className="text-[10px] font-extrabold tracking-[0.3em] text-[#92A8D1] uppercase block mb-2">SVT HILARIOUS SHOWS</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D1B3D] tracking-tight" style={{ fontFamily: 'var(--font-serif)' }}>
            自主製作綜藝與節目合輯 Variety Shows
          </h2>
          <div className="w-16 h-1 bg-[#92A8D1] mt-4 mx-auto" />
          <p className="text-slate-500 text-sm max-w-xl mx-auto mt-4 leading-relaxed">
            「不要小看歌手的搞笑天分！」SEVENTEEN的綜藝被譽為下飯神器，在YouTube上多次創造單集千萬次的觀看狂潮，也是讓路人火速入坑的最佳窗口！
          </p>
        </div>

        {/* Variety Tab Filters & Search bar */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-11 max-w-4xl mx-auto">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: '全部綜藝 (All)' },
              { id: 'official', label: '官方系列 (GoingSV/17TV)' },
              { id: 'special', label: '特別出演 (Special)' },
              { id: 'challenge', label: '個人挑戰 (Challenge)' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setVarietyTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  varietyTab === tab.id
                    ? 'bg-gradient-to-r from-[#F7CAC9] to-[#92A8D1] text-slate-950 font-bold shadow-md'
                    : 'bg-white text-slate-500 hover:text-slate-800 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search tool */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="搜尋節目或曲目名稱..."
              value={varietySearch}
              onChange={(e) => setVarietySearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white/80 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#92A8D1]/50 focus:border-[#92A8D1] transition-all"
            />
            <div className="absolute left-3 top-2.5 text-slate-400 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Variety Shows list display */}
        {(() => {
          const rawFiltered = VARIETY_SHOWS.filter(v => {
            const categoryMatch = varietyTab === 'all' || v.category === varietyTab;
            const searchMatch = !varietySearch.trim() || 
              v.title.toLowerCase().includes(varietySearch.toLowerCase()) || 
              (v.desc && v.desc.toLowerCase().includes(varietySearch.toLowerCase())) ||
              v.tracks.some(t => t.name.toLowerCase().includes(varietySearch.toLowerCase()));
            return categoryMatch && searchMatch;
          });

          // Dynamic Grouping Definitions for Carat Hub
          const groupingDefs = [
            {
              key: 'knowing-bros',
              name: '아는형님 (Knowing Bros) 系列合集',
              year: '2019 - 2022',
              desc: '經典綜藝《認識的哥哥》精選熱門出演集錦',
              category: 'special',
              match: (v: VarietyShow) => v.title.includes('아는형님') || (v.desc && v.desc.includes('아는형님'))
            },
            {
              key: 'weekly-idol',
              name: '週刊偶像 (Weekly Idol) 系列合集',
              year: '2015 - 2018',
              desc: '經典一週偶像 / 週刊偶像熱門出演合集',
              category: 'special',
              match: (v: VarietyShow) => v.title.toLowerCase().includes('weekly idol') || v.title.includes('週刊偶像') || (v.desc && v.desc.includes('Weekly Idol'))
            },
            {
              key: 'mmtg',
              name: '文明特急 (MMTG) 經典特輯系列',
              year: '2020 - 2022',
              desc: '文明特急 MMTG 熱門出演集錦',
              category: 'special',
              match: (v: VarietyShow) => v.title.includes('文明特急') || (v.desc && v.desc.includes('文明特急'))
            },
            {
              key: 'icloud',
              name: '아이클라우드 (Baby Cloud) 寶寶育兒挑戰',
              year: '2022 - 2023',
              desc: 'SEVENTEEN 叔叔們的寶貝育兒特別系列挑戰 (淨漢、THE 8、知秀、俊)',
              category: 'special',
              match: (v: VarietyShow) => v.title.includes('아이클라우드') || v.title.includes('카일로') || (v.desc && v.desc.includes('아이☁️클라우드'))
            },
            {
              key: 'waggle',
              name: '羅PD的哇喔哇喔 (Waggle Waggle) 系列',
              year: '2023',
              desc: '頻道十五夜 ＆ 羅PD 的音樂之神熱門出演特別版',
              category: 'special',
              match: (v: VarietyShow) => v.title.includes('와글와글') || (v.desc && v.desc.includes('나영석의 와글와글'))
            },
            {
              key: 'bibidi',
              name: '부승관的 비비디바비디부 (Bibi-Di-Babi-Di-Boo)',
              year: '2025 - 2026',
              desc: '夫勝寬主持挑戰專欄 - K-Pop 互動綜合脫口秀與各式嘉賓互動',
              category: 'challenge',
              match: (v: VarietyShow) => v.title.includes('비비디바비디부') || (v.desc && v.desc.includes('비비디바비디부')) || (v.desc && v.desc.includes('부승관의 비비디바비디부'))
            },
            {
              key: 'limousine',
              name: '리무진서비스 (Limousine Service) 音樂合集',
              year: '2022 - 2026',
              desc: 'SEVENTEEN 成員(勝寬、Hoshi、Jun、Dino、DK)登上 Limousine 現場演唱合作',
              category: 'special',
              match: (v: VarietyShow) => v.title.includes('리무진서비스') || (v.desc && v.desc.includes('리무진서비스'))
            },
            {
              key: 'salon-drip',
              name: 'TEO 살롱드립2 (Salon Drip 2)',
              year: '2023 - 2025',
              desc: '度妍主持 ＆ SEVENTEEN 成員(Hoshi、BSS、S.coups、MinGyu)人氣特輯訪談',
              category: 'special',
              match: (v: VarietyShow) => v.title.includes('살롱드립') || (v.desc && v.desc.includes('살롱드립'))
            },
            {
              key: 'cell-kode',
              name: '셀폰KODE (Cell KODE) 盲選配對挑戰系列',
              year: '2023 - 2026',
              desc: '驚喜趣味聯動！SEVENTEEN 成員與神祕嘉賓的盲選聊天尋友挑戰',
              category: 'special',
              match: (v: VarietyShow) => v.title.includes('셀폰KODE') || (v.desc && v.desc.includes('셀폰KODE'))
            },
            {
              key: 'hyeri-club',
              name: '惠利 혤\'s club 綜藝作客',
              year: '2024 - 2026',
              desc: '惠利的深夜酒吧 ＆ SEVENTEEN 隊員(勝寬、Joshua、DK)心靈與爆笑談話特輯',
              category: 'special',
              match: (v: VarietyShow) => v.title.includes('혤\'s club') || (v.desc && v.desc.includes('혤\'s club'))
            },
            {
              key: 'spotify-party',
              name: 'Spotify K-Pop ON! 趣味大玩特玩派對',
              year: '2024',
              desc: 'Spotify 官方專輯特別企劃、互動遊戲、讀推特文與專訪合集',
              category: 'special',
              match: (v: VarietyShow) => v.title.toLowerCase().includes('spotify') || v.title.toLowerCase().includes('k-pop on!') || v.title.toLowerCase().includes('liar interview') || v.title.includes('Thirst Tweets')
            },
            {
              key: 'seventeen-tv',
              name: 'SEVENTEEN TV (17TV) 前期成長紀錄',
              year: '2012 - 2015',
              desc: '綠色地下室時期 Pre-debut 經典生活紀錄與訓練日常特別放送',
              category: 'official',
              match: (v: VarietyShow) => v.title.includes('17TV') || v.title.toUpperCase().includes('SEVENTEEN TV') || (v.desc && v.desc.includes('17TV'))
            }
          ];

          const filteredVariety: VarietyShow[] = [];
          const groupMap: Record<string, VarietyShow> = {};
          const groupAdded = new Set<string>();

          rawFiltered.forEach(v => {
            let matchedDef = null;
            for (const def of groupingDefs) {
              if (def.match(v)) {
                matchedDef = def;
                break;
              }
            }

            if (matchedDef) {
              const key = matchedDef.key;
              if (!groupMap[key]) {
                groupMap[key] = {
                  title: matchedDef.name,
                  year: matchedDef.year,
                  desc: matchedDef.desc,
                  category: matchedDef.category as any,
                  tracks: []
                };
              }

              v.tracks.forEach(t => {
                const alreadyExists = groupMap[key].tracks.some(existing => existing.mvLink === t.mvLink || existing.name === t.name);
                if (!alreadyExists) {
                  groupMap[key].tracks.push(t);
                }
              });

              if (!groupAdded.has(key)) {
                filteredVariety.push(groupMap[key]);
                groupAdded.add(key);
              }
            } else {
              filteredVariety.push(v);
            }
          });

          if (filteredVariety.length === 0) {
            return (
              <div className="text-center py-16 bg-slate-50 rounded-[2rem] border border-slate-100 max-w-xl mx-auto">
                <p className="text-slate-400 text-xs">沒有找到相符的綜藝合輯 💎</p>
                <button 
                  onClick={() => { setVarietyTab('all'); setVarietySearch(''); }} 
                  className="mt-3 text-xs font-semibold text-rose-500 hover:underline cursor-pointer"
                >
                  重設搜尋條件
                </button>
              </div>
            );
          }

          return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVariety.map((vShow, idx) => (
                <div 
                  key={`${vShow.title}-${idx}`}
                  className="bg-white border border-slate-100 shadow-md hover:shadow-xl rounded-[2rem] p-6 hover:border-pink-200/50 transition-all flex flex-col justify-between"
                >
                  <div 
                    onClick={() => {
                      if (vShow.tracks && vShow.tracks.length > 0) {
                        setActiveVideo({
                          url: vShow.tracks[0].mvLink || vShow.tracks[0].mv || "",
                          title: vShow.tracks[0].name,
                          playlist: vShow.tracks,
                          currentTrackIndex: 0
                        });
                      }
                    }}
                    className="cursor-pointer group/poster select-none"
                    title="點擊直接放映此綜藝合集"
                  >
                    {/* Header line */}
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[9px] font-extrabold px-2.5 py-0.5 rounded-full bg-slate-50 border border-slate-200 text-slate-400 uppercase tracking-wider">
                        {vShow.category === 'official' ? '官方系列' : vShow.category === 'special' ? '特別合作' : '個人挑戰'}
                      </span>
                      <span className="text-[10px] font-mono text-[#92A8D1] font-bold">
                        {vShow.year}
                      </span>
                    </div>

                    {/* Compact visual poster */}
                    <div className="w-full aspect-video rounded-2xl overflow-hidden mb-4 relative border border-slate-100 bg-slate-50">
                      {(() => {
                        const isNeedZoom = getVarietyCoverUrl(vShow.title).includes('hqdefault.jpg');
                        return (
                          <img 
                            src={getVarietyCoverUrl(vShow.title)} 
                            alt={vShow.title}
                            referrerPolicy="no-referrer"
                            className={`w-full h-full object-cover transition-transform duration-500 ${
                              isNeedZoom 
                                ? 'scale-[1.35] group-hover/poster:scale-[1.42]' 
                                : 'group-hover/poster:scale-105'
                            }`}
                          />
                        );
                      })()}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 to-transparent flex items-end justify-between p-3">
                        <span className="text-[9px] font-extrabold text-white bg-rose-450/90 px-2 py-0.5 rounded shadow">
                          SVT VARIETY SHOW
                        </span>
                        {vShow.tracks.length > 1 && (
                          <span className="text-[9px] font-extrabold text-slate-950 bg-gradient-to-r from-amber-300 to-yellow-400 px-2.5 py-0.5 rounded shadow flex items-center gap-1">
                            <span>✨ EP合集 ({vShow.tracks.length}集)</span>
                          </span>
                        )}
                      </div>
                      <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover/poster:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="p-3 rounded-full bg-pink-100 text-rose-500 shadow-xl scale-90 group-hover/poster:scale-100 transition-transform">
                          <Play size={20} fill="currentColor" />
                        </span>
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-[#2D1B3D] mb-1 line-clamp-1 group-hover/poster:text-rose-400 transition-colors">
                      {vShow.title}
                    </h3>
                    
                    <p className="text-[11px] text-slate-400 mb-5 font-normal">
                      主題 / 參演: {vShow.desc || 'SEVENTEEN'}
                    </p>
                  </div>

                  {/* Playlist tracks container */}
                  <div className="mt-auto space-y-2.5 border-t border-slate-100 pt-4">
                    <span className="text-[9px] font-extrabold text-slate-400 uppercase block tracking-widest mb-1.5">
                      收錄集數 PLAYLIST ({vShow.tracks.length})
                    </span>
                    
                    <div className="max-h-56 overflow-y-auto pr-1 space-y-1.5 scrollbar-thin">
                      {vShow.tracks.map((track, tIdx) => (
                        <button
                          key={`${track.name}-${tIdx}`}
                          onClick={() => setActiveVideo({ 
                            url: track.mvLink || track.mv || "", 
                            title: track.name,
                            playlist: vShow.tracks,
                            currentTrackIndex: tIdx
                          })}
                          className="w-full text-left p-3 rounded-xl bg-slate-50 hover:bg-[#F7CAC9]/10 border border-slate-100 hover:border-[#F7CAC9]/30 flex items-center justify-between transition-all group/vitem cursor-pointer"
                          title={`在網頁內直接播放 ${track.name}`}
                        >
                          <div className="flex items-center gap-2 max-w-[80%]">
                            <Youtube size={13} className="text-red-500 flex-shrink-0" fill="currentColor" />
                            <span className="text-xs text-slate-700 font-medium truncate group-hover/vitem:text-[#2D1B3D] transition-colors">
                              {track.name}
                            </span>
                          </div>
                          <span className="text-[10px] font-bold text-[#92A8D1] opacity-0 group-hover/vitem:opacity-100 transition-opacity flex items-center gap-0.5 whitespace-nowrap">
                            線上播放 ▶
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          );
        })()}

      </section>

      {/* Official Merchandise Goods Section */}
      <section id="merchandise" className="py-24 sm:py-32 bg-gradient-to-br from-white/40 via-purple-50/20 to-[#92A8D1]/10 border-t border-slate-200/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-[10px] font-extrabold tracking-[0.3em] text-[#92A8D1] uppercase block mb-2">OFFICIAL MERCHANDISE</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D1B3D] tracking-tight" style={{ fontFamily: 'var(--font-serif)' }}>
              官方周邊商品 Official Goods
            </h2>
            <div className="w-16 h-1 bg-[#F7CAC9] mt-4 mx-auto" />
            <p className="text-slate-500 text-sm max-w-xl mx-auto mt-4 leading-relaxed">
              克拉專屬的璀璨收藏！在這裡挑選最新的官方演唱會應援周邊、限定小卡與聯名單品。所有商品皆連結至官方認證渠道。
            </p>
          </div>

          {/* Tab Filters for Merchandise Category */}
          <div className="flex flex-wrap justify-center gap-2 mb-11">
            {[
              { id: 'all', label: '全部周邊 (All)' },
              { id: '應援手燈 (Lightstick)', label: '應援物件' },
              { id: '粉絲會籍 (Membership)', label: '粉絲會籍' },
              { id: '官方服飾 (Apparel)', label: '流行服飾' },
              { id: '官方影音 (Media)', label: '官方影音' },
              { id: '萌趣玩偶 (Plush)', label: '萌趣玩偶' },
              { id: '唱片專輯 (Album)', label: '實體唱片' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setMerchCategory(tab.id)}
                className={`px-4.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  merchCategory === tab.id
                    ? 'bg-[#2D1B3D] text-white shadow-md'
                    : 'bg-white/80 text-slate-500 border border-slate-200/60 hover:text-slate-800 hover:bg-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Merchandise Goods Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {merchandiseList.filter(item => merchCategory === 'all' || item.category.includes(merchCategory) || item.category === merchCategory)
              .map(item => (
                <div 
                  key={item.id}
                  className="bg-white/70 backdrop-blur-md rounded-[2rem] border border-white/80 p-6 flex flex-col justify-between shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 text-left"
                >
                  <div>
                    {/* Item Image area */}
                    <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-slate-50 via-slate-100 to-purple-50/30 flex items-center justify-center text-5xl mb-5 relative border border-slate-100 overflow-hidden group">
                      {item.imageUrl ? (
                        <img 
                          src={item.imageUrl} 
                          alt={item.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <span className="transform transition-transform duration-500 group-hover:scale-105">
                          {item.emoji}
                        </span>
                      )}
                      
                      {/* Availability status badge */}
                      <div className="absolute top-4 right-4">
                        {item.status === 'available' && (
                          <span className="px-3 py-1 rounded-full text-[9px] font-extrabold bg-emerald-50 text-emerald-600 border border-emerald-200 uppercase tracking-widest">
                            有現貨
                          </span>
                        )}
                        {item.status === 'preorder' && (
                          <span className="px-3 py-1 rounded-full text-[9px] font-extrabold bg-amber-50 text-amber-600 border border-amber-200 uppercase tracking-widest">
                            開放預購
                          </span>
                        )}
                        {item.status === 'soldout' && (
                          <span className="px-3 py-1 rounded-full text-[9px] font-extrabold bg-rose-50 text-rose-600 border border-rose-200 uppercase tracking-widest">
                            已售罄
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Metadata Category tag */}
                    <span className="text-[10px] font-extrabold tracking-widest text-[#92A8D1] uppercase block mb-1.5">
                      {item.category}
                    </span>

                    {/* Name */}
                    <h3 className="text-base font-bold text-[#2D1B3D] leading-snug mb-2 line-clamp-1">
                      {item.name}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Pricing and Action button footer */}
                  <div className="border-t border-slate-100/80 pt-4 mt-2 flex items-center justify-between gap-1.5">
                    <div>
                      <span className="text-[9px] text-slate-400 font-bold uppercase block tracking-wider">官方網店售價</span>
                      <span className="text-lg font-mono font-extrabold text-[#2D1B3D]">
                        {item.price}
                      </span>
                    </div>

                     <div className="flex items-center gap-1.5">
                      {item.status !== 'soldout' && (
                        <button
                          onClick={() => handleAddToCart(item)}
                          className="px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 h-9 bg-[#F7CAC9]/20 text-[#2D1B3D] border border-[#F7CAC9]/30 hover:bg-[#F7CAC9]/40 hover:border-[#F7CAC9]/60 shadow-sm"
                          title="將此周邊商品加入您的數位購物籃"
                        >
                          <ShoppingCart size={11} />
                          <span className="text-[11px] font-extrabold">加入購物車</span>
                        </button>
                      )}

                      {item.status === 'preorder' && (
                        <button
                          onClick={() => handleNotifyMeClick(item)}
                          className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1 h-9 border ${
                            isSubscribed(item.id)
                              ? 'bg-[#F7CAC9] text-slate-950 border-[#F7CAC9] shadow-sm'
                              : 'bg-pink-50/70 text-pink-500 border-pink-100/60 hover:bg-pink-100/80 hover:border-pink-200 hover:text-pink-600'
                          }`}
                          title={isSubscribed(item.id) ? "點擊取消到貨提醒通知" : "當預售結束、有現貨時自動發送通知我"}
                        >
                          <Bell size={11} className={isSubscribed(item.id) ? "fill-current text-purple-950 animate-pulse" : ""} />
                          <span className="text-[10px] font-extrabold">{isSubscribed(item.id) ? '已設提醒' : '提醒我'}</span>
                        </button>
                      )}

                      <a
                        href={item.officialLink || "https://weverseshop.io/"}
                        target="_blank"
                        rel="noreferrer"
                        className={`px-3 py-2 rounded-xl text-xs font-bold tracking-wider transition-all cursor-pointer flex items-center gap-0.5 h-9 ${
                          item.status === 'soldout'
                            ? 'bg-slate-100 text-slate-400 cursor-not-allowed pointer-events-none'
                            : 'bg-[#2D1B3D] text-white hover:bg-[#3d2a52] shadow'
                        }`}
                      >
                        <span>{item.status === 'preorder' ? '預購' : '專屬購買'}</span>
                        <ExternalLink size={9} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Interactive Inventory Simulation Panel Toggle */}
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAdminPanel(!showAdminPanel)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-[#2D1B3D] rounded-xl text-xs font-bold transition-all cursor-pointer border border-slate-200"
            >
              <span>{showAdminPanel ? '🔒 隱藏庫存控制器 (Hide Controller)' : '⚙️ 開啟克拉商城庫存模擬器 (Merchant Simulator Portal)'}</span>
              <span className="px-1.5 py-0.5 rounded text-[9px] bg-sky-100 text-sky-700 font-extrabold">測試用</span>
            </button>
          </div>

          {/* Simulated Staff Controller Panel */}
          {showAdminPanel && (
            <div className="mt-6 p-6 rounded-[2rem] bg-white border border-slate-150 shadow-md animate-in slide-in-from-bottom duration-300 text-left max-w-4xl mx-auto">
              <div className="border-b border-slate-100 pb-3 mb-4">
                <h4 className="text-xs font-extrabold text-[#2D1B3D] uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>⚙️ Pledis 官網物流庫存虛擬中控台 (Staff Inventory Room)</span>
                </h4>
                <p className="text-[10px] text-slate-400 mt-1">
                  這裡代表後台物流。你可以將<b>開放預購(Preorder)</b>的商品切換成<b>有現貨(Available)</b>，藉此即刻測試並觸發瀏覽器通知與克拉到貨提醒！
                </p>
              </div>

              <div className="space-y-4 max-h-72 overflow-y-auto pr-1">
                {merchandiseList.map(item => {
                  const subscribedCount = merchSubscriptions.filter(sub => sub.id === item.id).length;
                  return (
                    <div 
                      key={`admin-${item.id}`}
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{item.emoji}</span>
                        <div>
                          <h5 className="text-xs font-bold text-slate-800 line-clamp-1">{item.name}</h5>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-[9px] text-[#92A8D1] font-bold">{item.category}</span>
                            <span className="text-[9px] bg-[#92A8D1]/10 text-[#4d5c7c] px-1.5 py-0.5 rounded font-mono font-semibold">
                              ID: {item.id}
                            </span>
                            {subscribedCount > 0 && (
                              <span className="text-[9px] bg-pink-100 text-pink-600 px-1.5 py-0.5 rounded font-extrabold flex items-center gap-0.5 animate-pulse">
                                🔔 {subscribedCount} 名克拉訂閱提醒
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Status selectors */}
                      <div className="flex items-center gap-1.5 self-end sm:self-auto font-sans">
                        <span className="text-[10px] text-slate-400 font-bold mr-2 hidden sm:inline">虛擬調配狀態：</span>
                        {[
                          { status: 'available', label: '有現貨', color: 'border-emerald-200 text-emerald-700 bg-emerald-50' },
                          { status: 'preorder', label: '預購中', color: 'border-amber-200 text-amber-700 bg-amber-50' },
                          { status: 'soldout', label: '已售罄', color: 'border-rose-200 text-rose-700 bg-rose-50' }
                        ].map(stopt => (
                          <button
                            key={stopt.status}
                            onClick={() => simulateStatusChange(item.id, stopt.status as any)}
                            className={`px-2.5 py-1.5 rounded-lg text-[10px] font-bold transition-all cursor-pointer border ${
                              item.status === stopt.status
                                ? `${stopt.color} ring-2 ring-slate-400/20`
                                : 'bg-white border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-50'
                            }`}
                          >
                            {stopt.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Subscriptions overview list */}
              {merchSubscriptions.length > 0 && (
                <div className="mt-4 border-t border-slate-100 pt-4">
                  <h5 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mb-2">
                    📋 目前已設定提醒的克拉訂閱紀錄 ({merchSubscriptions.length})
                  </h5>
                  <div className="max-h-36 overflow-y-auto space-y-1.5 font-sans">
                    {merchSubscriptions.map((sub, sIdx) => (
                      <div 
                        key={`${sub.id}-${sub.email}-${sIdx}`}
                        className="text-[10px] bg-slate-50 p-2 rounded border border-slate-150 flex justify-between items-center"
                      >
                        <span className="font-semibold text-slate-600 truncate max-w-[80%]">
                          📧 {sub.email} &rarr; <b>{sub.itemName}</b>
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-[8px] text-slate-450 font-mono">
                            {new Date(sub.createdAt).toLocaleTimeString()}
                          </span>
                          <button
                            onClick={() => handleUnsubscribe(sub.id, sub.itemName)}
                            className="text-[9px] hover:text-red-500 text-slate-400 underline cursor-pointer"
                          >
                            移出訂閱
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Weverse official notice stamp */}
          <div className="mt-14 p-5 rounded-2xl bg-white/45 backdrop-blur-sm border border-slate-100 max-w-2xl mx-auto flex items-center gap-4 text-left">
            <span className="text-3xl select-none flex-shrink-0">📦</span>
            <div>
              <h4 className="text-xs font-extrabold text-slate-700 tracking-wider">官方正品購買須知 (Weverse Shop Certified)</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">
                以上列出的周邊商品售價均取自官方網店 & Weverse Shop。請克拉在選購時務必認准官方認證正品，保障售後權益。
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Styled Footer */}
      <footer className="bg-white border-t border-slate-100 pt-20 pb-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          
          {/* Social icons */}
          <div className="flex justify-center gap-8 mb-10 text-slate-400">
            <a href="https://www.youtube.com/@pledis17" target="_blank" rel="noreferrer" className="hover:text-pink-400 hover:scale-110 transition-all" title="Youtube">
              <Youtube size={22} />
            </a>
            <a href="https://www.instagram.com/saythename_17" target="_blank" rel="noreferrer" className="hover:text-pink-400 hover:scale-110 transition-all" title="Instagram">
              <Instagram size={21} />
            </a>
            <a href="https://twitter.com/pledis_17" target="_blank" rel="noreferrer" className="hover:text-blue-400 hover:scale-110 transition-all" title="Twitter/X">
              <Twitter size={21} />
            </a>
            <a href="https://weverse.io/seventeen/highlight" target="_blank" rel="noreferrer" className="group hover:text-[#00cbb4] hover:scale-110 transition-all -ml-2" title="Weverse">
              <Weverse size={26} /> {/*https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Weverse_logo.svg/250px-Weverse_logo.svg.png*/}
            </a>
             <a href="https://www.facebook.com/seventeennews/?locale=zh_TW" target="_blank" rel="noreferrer" className="hover:text-blue-400 hover:scale-110 transition-all -ml-2" title="Facebook">
              <Facebook size={21} />
            </a>
          </div>

          {/* Huge Bebas styled SVT text */}
          <p 
            className="text-4xl tracking-tighter hover:scale-105 transition-transform inline-block mb-3" 
            style={{ fontFamily: 'var(--font-bebas)', color: 'var(--color-darkpurple)' }}
          >
            SEVENTEEN
          </p>

          <p className="text-[10px] text-slate-400 uppercase tracking-[0.3em] font-medium leading-relaxed mb-6">
            © 2026 Pledis Entertainment & Hybe Labels | CARAT Official Fan Site Hub
          </p>

          {/* Developer/Fan signatures */}
          <div className="flex justify-center items-center gap-2.5 text-[9px] font-bold text-slate-300 tracking-widest uppercase">
            <span>CRAFTED BY CARAT</span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            <span>FOR CARAT LOVE UNIVERSE</span>
          </div>
        </div>
      </footer>

      {/* Reactive Member Details pop modal */}
      <MemberModal 
        member={selectedMember} 
        onClose={() => setSelectedMember(null)} 
      />

      {/* Reactive MINITEEN Details pop modal */}
      <MiniteenModal 
        character={selectedMiniteen} 
        onClose={() => setSelectedMiniteen(null)} 
      />

      {/* Merchandise Notification subscription Modal */}
      {notifyTargetItem && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-in fade-in duration-300 font-sans">
          <div className="bg-white rounded-[2.5rem] border border-slate-100 p-8 w-full max-w-md shadow-2xl relative text-left overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#F7CAC9] to-[#92A8D1]" />
            
            <button 
              onClick={() => setNotifyTargetItem(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-full transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl select-none">{notifyTargetItem.emoji}</span>
              <div>
                <span className="text-[10px] uppercase font-extrabold tracking-widest text-[#92A8D1]">設定商品到貨提醒 Notification</span>
                <h3 className="text-base font-bold text-[#2D1B3D] leading-tight mt-1 line-clamp-1">{notifyTargetItem.name}</h3>
              </div>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed mb-6 font-normal">
              目前此商品為<b>開放預購中(Preorder)</b>。當商品到貨、狀態變更為<b>有現貨(Available)</b>時，系統將即刻發送通知與克拉到貨專屬電郵提醒。
            </p>

            <form onSubmit={(e) => {
              e.preventDefault();
              handleSubscribe(notifyEmail);
            }} className="space-y-4">
              <div>
                <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-450 block mb-1.5">
                  輸入您的克拉電子郵件 Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="例如: carat@seventeen.com"
                    value={notifyEmail}
                    onChange={(e) => setNotifyEmail(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#92A8D1]/40 focus:border-[#92A8D1] transition-all"
                  />
                  <div className="absolute left-3 top-3.5 text-slate-400 pointer-events-none">
                    <Mail size={14} className="text-slate-400" />
                  </div>
                </div>
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={() => setNotifyTargetItem(null)}
                  className="flex-1 py-3 border border-slate-200 text-slate-550 hover:text-slate-800 rounded-xl text-xs font-bold transition-all hover:bg-slate-50 cursor-pointer text-center"
                >
                  取消
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 bg-[#2D1B3D] hover:bg-[#3d2a52] text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Bell size={13} fill="currentColor" />
                  <span>送出訂閱</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Persistent Beautiful In-App Notification Toast Overlay */}
      {inAppToasts.length > 0 && (
        <div className="fixed bottom-6 left-6 right-6 sm:left-auto sm:right-6 sm:w-[26rem] space-y-3 z-50 pointer-events-none font-sans">
          {inAppToasts.map(toast => (
            <div 
              key={toast.id}
              className="p-4 rounded-2xl bg-slate-950/90 text-white border border-white/10 shadow-2xl backdrop-blur-md flex items-start gap-3.5 pointer-events-auto animate-in slide-in-from-right duration-350"
            >
              <div className="mt-0.5 flex-shrink-0">
                {toast.type === 'success' && (
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center text-xs font-extrabold">✓</span>
                )}
                {toast.type === 'bell' && (
                  <span className="w-6 h-6 rounded-full bg-pink-500/20 text-pink-300 border border-pink-550/30 flex items-center justify-center text-xs animate-bounce">🔔</span>
                )}
                {toast.type === 'info' && (
                  <span className="w-6 h-6 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30 flex items-center justify-center text-xs font-bold">i</span>
                )}
              </div>

              <div className="flex-1 min-w-0 text-left">
                <h5 className="text-xs font-extrabold text-[#92A8D1] tracking-wider uppercase mb-0.5">
                  {toast.title}
                </h5>
                <p className="text-[11px] text-slate-300 leading-relaxed font-normal">
                  {toast.message}
                </p>
              </div>

              <button 
                onClick={() => setInAppToasts(prev => prev.filter(t => t.id !== toast.id))}
                className="text-slate-450 hover:text-white p-1 rounded transition-colors cursor-pointer self-start"
              >
                <X size={12} />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* 1. Inline Video Player Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className={`relative w-full ${activeVideo.playlist && activeVideo.playlist.length > 1 ? 'max-w-5xl' : 'max-w-4xl'} bg-slate-900 border border-white/10 rounded-3xl md:overflow-hidden overflow-y-auto shadow-2xl flex flex-col max-h-[96vh] md:max-h-[88vh] my-auto`}>
            
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-slate-950 border-b border-white/5">
              <div className="flex items-center gap-2">
                <Youtube size={16} className="text-red-500 animate-pulse" fill="currentColor" />
                <span className="text-xs sm:text-sm font-extrabold text-white tracking-wide truncate max-w-xs sm:max-w-md md:max-w-lg">
                  {activeVideo.title} — 在線放映室
                </span>
                {activeVideo.playlist && activeVideo.playlist.length > 1 && (
                  <span className="hidden sm:inline-block text-[9px] font-extrabold px-2 py-0.5 rounded bg-pink-500/10 text-pink-300 border border-pink-400/20 animate-pulse">
                    ✨ 合集播放中 ({activeVideo.playlist.length}集)
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setIsVideoLoopEnabled(prev => !prev);
                    addToast(
                      !isVideoLoopEnabled ? "已開啟循環播放" : "已關閉循環播放",
                      !isVideoLoopEnabled 
                        ? "💎 放映室將為您持續循環播放當前影片！" 
                        : "💎 已恢復單次正常播放。",
                      "info"
                    );
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-black transition-all cursor-pointer select-none active:scale-95 ${
                    isVideoLoopEnabled
                      ? 'bg-gradient-to-r from-[#F7CAC9] to-[#92A8D1] text-slate-900 shadow-md shadow-pink-900/10'
                      : 'bg-white/10 hover:bg-white/20 text-slate-300 border border-white/5'
                  }`}
                  title={isVideoLoopEnabled ? "正在自動重播。點擊以關閉" : "點擊開啟自動重播"}
                >
                  <Repeat size={12} className={isVideoLoopEnabled ? "animate-spin" : ""} style={{ animationDuration: '4s' }} />
                  <span className="text-[10px]">
                    {isVideoLoopEnabled ? "重播中 (Loop ON)" : "單次播放 (Loop OFF)"}
                  </span>
                </button>
                <span className="text-white/20">|</span>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="text-slate-400 hover:text-white p-2 rounded-full hover:bg-white/5 transition-all cursor-pointer"
                  title="關閉放映室"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Video Box and Playlist Split Grid */}
            <div className={activeVideo.playlist && activeVideo.playlist.length > 1 ? "grid grid-cols-1 md:grid-cols-3 bg-black relative min-h-0" : "relative min-h-0"}>
              
              {/* Left Iframe Area */}
              <div className={activeVideo.playlist && activeVideo.playlist.length > 1 ? "md:col-span-2 relative aspect-video bg-black" : "relative w-full aspect-video bg-black"}>
                {getYoutubeEmbedUrl(activeVideo.url, !!activeVideo.forceSingleVideo, isVideoLoopEnabled) ? (
                  <iframe
                    src={getYoutubeEmbedUrl(activeVideo.url, !!activeVideo.forceSingleVideo, isVideoLoopEnabled)}
                    title={activeVideo.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 p-6 text-center">
                    <span className="text-4xl mb-3">🎬</span>
                    <p className="text-xs">無法生成嵌入流。您可以直接前往 YouTube 觀看：</p>
                    <a
                      href={activeVideo.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 px-4 py-2 rounded-xl bg-pink-500 hover:bg-pink-600 text-white font-bold text-xs transition-colors"
                    >
                      在 YouTube 開啟新分頁
                    </a>
                  </div>
                )}
              </div>

              {/* Right Playlist Selector sidebar (only visible for playlists) */}
              {activeVideo.playlist && activeVideo.playlist.length > 1 && (
                <div className="md:col-span-1 bg-[#0b0c16] border-t md:border-t-0 md:border-l border-white/10 flex flex-col h-[260px] md:h-auto md:absolute md:top-0 md:bottom-0 md:right-0 md:w-1/3">
                  <div className="p-3 bg-white/5 border-b border-white/5 flex items-center justify-between flex-shrink-0">
                    <span className="text-[10px] font-bold text-[#92A8D1] uppercase tracking-wider flex items-center gap-1 text-left">
                      <Music size={11} className="text-red-400" />
                      集數選擇 PICK EPISODE
                    </span>
                    <span className="text-[9px] text-slate-400 font-bold bg-white/10 px-1.5 py-0.5 rounded">
                      EP {typeof activeVideo.currentTrackIndex === 'number' ? activeVideo.currentTrackIndex + 1 : 1}/{activeVideo.playlist.length}
                    </span>
                  </div>
                  <div className="flex-1 overflow-y-auto p-2.5 space-y-1.5 scrollbar-thin">
                    {activeVideo.playlist.map((track, tIdx) => {
                      const isCurrent = tIdx === activeVideo.currentTrackIndex || track.name === activeVideo.title;
                      return (
                        <button
                          key={`${track.name}-${tIdx}`}
                          onClick={() => setActiveVideo({
                            url: track.mvLink || track.mv || "",
                            title: track.name,
                            playlist: activeVideo.playlist,
                            currentTrackIndex: tIdx,
                            forceSingleVideo: activeVideo.forceSingleVideo
                          })}
                          className={`w-full text-left p-2.5 rounded-2xl border transition-all flex items-center gap-2 cursor-pointer ${
                            isCurrent
                              ? 'bg-gradient-to-r from-pink-500/20 to-indigo-500/20 border-pink-400/40 text-pink-200 font-semibold shadow-inner'
                              : 'bg-white/[0.02] hover:bg-white/[0.08] border-white/5 text-slate-300 hover:text-white'
                          }`}
                        >
                          <span className={`text-[9px] w-5 h-5 rounded-full flex items-center justify-center font-bold flex-shrink-0 ${
                            isCurrent ? 'bg-[#F7CAC9] text-slate-900 shadow' : 'bg-white/5 text-slate-400'
                          }`}>
                            {tIdx + 1}
                          </span>
                          <span className="text-xs truncate flex-1 leading-tight">
                            {track.name}
                          </span>
                          {isCurrent && (
                            <span className="text-[8px] font-extrabold text-[#F7CAC9] bg-pink-500/25 px-1.5 py-0.5 rounded animate-pulse select-none">
                              PLAYING
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

            </div>

            {/* Subfooter */}
            <div className="p-4 bg-slate-950 text-xs text-slate-300 text-center border-t border-white/5 font-sans flex flex-col md:flex-row items-center justify-between gap-3 px-6">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-2 text-left">
                <span className="text-[#F7CAC9] font-black tracking-wider text-xs flex-shrink-0">💎 CARAT HUB 放映室</span>
                <span className="hidden md:inline text-white/20">|</span>
                <p className="text-[10px] md:text-xs text-slate-400 leading-relaxed font-normal">
                  現在您可以點擊右側或下方清單切換合集影片。{activeVideo.title.includes("혤") || activeVideo.title.toLowerCase().includes("hyeri") ? (
                    <span className="text-amber-300 font-semibold bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">⚠️ <b>《혤's club (惠利俱樂部)》</b> 因官方頻道設有嵌入播放限制，部分影片可能無法直接在網頁播放。如果看到黑畫面或播放限制錯誤，請點右方按鈕「前往 YouTube 觀看」直接開啟原站影片喔！</span>
                  ) : activeVideo.title.toLowerCase().includes("going") ? (
                    <span className="text-pink-300 font-semibold bg-pink-500/10 px-2 py-0.5 rounded border border-pink-500/20">💡 <b>《Going Seventeen》</b> 官方合輯為 YouTube 播放清單，若遇到播放錯誤、黑畫面、或無法載入，請點右邊按鈕「前往 YouTube 觀看」直接在 YouTube 觀看！</span>
                  ) : (
                    <span className="text-slate-450">⚠️ 提示：若部分官方綜藝或特別合作影片因 YouTube 版權/頻道主禁用網頁嵌入導致此處無法播放，請直接點擊右下方「前往 YouTube 觀看」按鈕直接開啟原網頁播放觀看。</span>
                  )}
                </p>
              </div>
              <a
                href={activeVideo.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs transition-all hover:scale-105 shadow-sm shadow-red-950/20 whitespace-nowrap"
              >
                <ExternalLink size={12} />
                <span>前往 YouTube 觀看 ➔</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 2. Slideout Shopping Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/45 backdrop-blur-xs flex justify-end">
          {/* Backdrop click closer */}
          <div className="absolute inset-0 -z-10" onClick={() => setIsCartOpen(false)} />

          <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-slate-100 bg-[#2D1B3D]/5">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#F7CAC9]/40 text-[#2D1B3D] flex items-center justify-center">
                  <ShoppingCart size={15} />
                </div>
                <div>
                  <h3 className="font-extrabold text-[#2D1B3D] text-sm tracking-tight font-sans">我的應援購物袋</h3>
                  <p className="text-[10px] text-slate-500 font-medium font-sans">CARAT OFFICIAL BASKET</p>
                </div>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-1 px-1.5 hover:bg-slate-200/50 text-[#475569] rounded-full transition-all cursor-pointer"
                title="關閉購物車"
              >
                <X size={16} />
              </button>
            </div>

            {/* Cart list body */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                  <div className="text-5xl animate-bounce">🛒</div>
                  <div>
                    <h4 className="font-bold text-slate-700 text-sm font-sans">購物袋是空的 💎</h4>
                    <p className="text-xs text-slate-400 mt-1 max-w-[250px] mx-auto font-sans">
                      去官方周邊特區挑選限時應援手燈、THIS MAN 鑰匙圈或 RIGHT HERE 帽T吧！
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setIsCartOpen(false);
                      const el = document.getElementById('merchandise');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#F7CAC9] to-[#92A8D1] text-xs font-bold text-slate-800 shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    前往精選周邊
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  {cart.map((cartItem) => {
                    const getNumericPrice = (p: string) => parseInt(p.replace(/[^\d]/g, ''), 10) || 0;
                    const priceVal = getNumericPrice(cartItem.item.price);
                    const itemTotal = priceVal * cartItem.quantity;
                    return (
                      <div 
                        key={cartItem.item.id}
                        className="p-3.5 rounded-2xl border border-slate-100 bg-white shadow-xs flex gap-3.5 items-center group/cart-item hover:shadow-sm hover:border-pink-200/40 transition-all font-sans"
                      >
                        {/* Emoji visual badge */}
                        <div className="w-11 h-11 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                          {cartItem.item.emoji || '🎁'}
                        </div>

                        {/* Middle info */}
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs font-bold text-slate-800 truncate leading-snug">
                            {cartItem.item.name}
                          </h4>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-[10px] text-[#92A8D1] font-extrabold">
                              {cartItem.item.price}
                            </span>
                          </div>

                          {/* Quantifier widget */}
                          <div className="flex items-center gap-2 mt-2">
                            <button
                              onClick={() => handleUpdateQuantity(cartItem.item.id, -1)}
                              className="w-5 h-5 rounded-md bg-slate-100 hover:bg-slate-200 text-xs font-bold flex items-center justify-center cursor-pointer transition-colors"
                            >
                              -
                            </button>
                            <span className="text-xs font-bold w-4 text-center text-slate-700">
                              {cartItem.quantity}
                            </span>
                            <button
                              onClick={() => handleUpdateQuantity(cartItem.item.id, 1)}
                              className="w-5 h-5 rounded-md bg-slate-100 hover:bg-slate-200 text-xs font-bold flex items-center justify-center cursor-pointer transition-colors"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        {/* Right Total and Delete button */}
                        <div className="flex flex-col items-end justify-between self-stretch flex-shrink-0">
                          <button
                            onClick={() => handleRemoveFromCart(cartItem.item.id)}
                            className="p-1 text-slate-300 hover:text-red-500 rounded transition-colors cursor-pointer"
                            title="移除此商品"
                          >
                            <X size={12} />
                          </button>
                          <span className="text-[11px] font-mono font-extrabold text-[#2D1B3D]">
                            NT$ {itemTotal.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Footer and Checkout processing */}
            {cart.length > 0 && (
              <div className="border-t border-slate-100 p-5 bg-[#F7CAC9]/5 space-y-4 font-sans">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-slate-500">品項總數</span>
                  <span className="text-xs font-mono text-slate-800">
                    {cart.reduce((sum, item) => sum + item.quantity, 0)} 件
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-extrabold text-[#2D1B3D]">模擬結帳總額</span>
                  <span className="text-lg font-mono font-extrabold text-[#2D1B3D]">
                    NT$ {cart.reduce((sum, cartItem) => {
                      const getNumericPrice = (p: string) => parseInt(p.replace(/[^\d]/g, ''), 10) || 0;
                      return sum + (getNumericPrice(cartItem.item.price) * cartItem.quantity);
                    }, 0).toLocaleString()}
                  </span>
                </div>

                <button
                  onClick={() => {
                    cart.forEach((cartItem, idx) => {
                      if (cartItem.item.officialLink) {
                        setTimeout(() => {
                          window.open(cartItem.item.officialLink, '_blank');
                        }, idx * 250);
                      }
                    });
                    addToast(
                      "正在開啟官網商品頁面",
                      "💎 已為您陸續在新分頁中打開購物車內所有商品的 Weverse Shop 購買連結！",
                      'success'
                    );
                  }}
                  className="w-full py-3 mb-2 rounded-2xl bg-[#00cbb4]/10 border border-[#00cbb4]/30 text-[#00cbb4] hover:bg-[#00cbb4]/20 font-black text-xs transition-all shadow-xs cursor-pointer text-center flex items-center justify-center gap-1.5"
                >
                  🛍️ 一鍵前往 Weverse Shop 購買 ↗
                </button>

                <button
                  onClick={() => {
                    handleClearCart();
                    addToast(
                      "購物籃已清空",
                      "💎 您的克拉購物籃已清空完畢，可以隨時重新挑選喜愛的周邊喔！",
                      "info"
                    );
                  }}
                  className="w-full py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer border border-slate-200/30 text-center"
                >
                  清空商品
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 3. Checkout completed feedback pop-up */}
      {isCheckingOut && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/80 backdrop-blur-sm animate-fade-in text-center p-6">
          <div className="p-8 rounded-[2rem] bg-white max-w-sm w-full border border-slate-100 shadow-2xl flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-pink-105/60 text-pink-500 flex items-center justify-center mb-5 animate-spin text-2xl">
              💎
            </div>
            <h4 className="font-extrabold text-slate-850 text-sm font-sans">正在送出模擬訂單...</h4>
            <p className="text-xs text-slate-400 mt-2 font-sans leading-relaxed">
              克拉中控與 Weverse Pay 正在鏈接並辦理模擬安全付款程序，請稍候。
            </p>
          </div>
        </div>
      )}

      {isCheckoutCompleted && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/80 backdrop-blur-xs animate-fade-in text-center p-6">
          <div className="p-8 rounded-[2rem] bg-white max-w-md w-full border border-slate-100 shadow-2xl flex flex-col items-center animate-in scale-in duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-500 flex items-center justify-center text-3xl mb-5 animate-bounce">
              🎉
            </div>
            <h4 className="text-lg font-extrabold text-slate-800 font-sans">應援商品模擬購買成功！</h4>
            <p className="text-xs text-[#92A8D1] font-extrabold mt-1 uppercase tracking-wider font-sans">
              ORDER SIMULATION SUCCESS!
            </p>
            <p className="text-xs text-slate-500 leading-relaxed max-w-md mt-4 font-sans">
              太棒了！您所選購的應援精品已通過 **Carat Pay** 虛擬模擬安全付款程序。<br />
              雖然這是為演示而設計的趣味模擬購物，但您的熱愛與支持，能讓 SEVENTEEN 在璀璨巡演舞台上綻放無窮光彩！💎
            </p>
            <button
              onClick={() => setIsCheckoutCompleted(false)}
              className="mt-6 px-8 py-3 rounded-full bg-[#2D1B3D] hover:bg-[#3c2950] text-[#F7CAC9] font-extrabold text-xs tracking-wider transition-all cursor-pointer shadow-md font-sans"
            >
              太棒了，繼續逛逛！
            </button>
          </div>
        </div>
      )}

      {/* Back to top button triggers cleanly */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center text-slate-800 hover:bg-slate-50 transition-all duration-300 z-30 cursor-pointer border border-slate-200/50 ${
          showScrollTop ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-90 pointer-events-none'
        }`}
        title="返回頂部"
      >
        <ArrowUp size={18} />
      </button>

    </div>
  );
}
