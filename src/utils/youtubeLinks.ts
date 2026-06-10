/**
 * SEVENTEEN YouTube Linking Helper Utilities
 */

// Mapping of song titles to their precise YouTube music video or stage video URLs
const SONG_YOUTUBE_MAP: Record<string, string> = {
  'LOVE, MONEY, FAME': 'https://www.youtube.com/watch?v=H74S9mXgV7c',
  'LOVE, MONEY, FAME (feat. DJ Khaled)': 'https://www.youtube.com/watch?v=H74S9mXgV7c',
  'MAESTRO': 'https://www.youtube.com/watch?v=gRnuFC4UalA',
  'Super': 'https://www.youtube.com/watch?v=-GQg25oP0S4',
  'Super (孫悟空)': 'https://www.youtube.com/watch?v=-GQg25oP0S4',
  'HOT': 'https://www.youtube.com/watch?v=g87Ugu2fQyY',
  'Fighting': 'https://www.youtube.com/watch?v=mBXBOLG06Wc',
  'Fighting (파이팅 해야지) - BSS': 'https://www.youtube.com/watch?v=mBXBOLG06Wc',
  'Very Nice (아주 NICE)': 'https://www.youtube.com/watch?v=J-wFp43XOrA',
  '아주 NICE': 'https://www.youtube.com/watch?v=J-wFp43XOrA',
  'Left & Right': 'https://www.youtube.com/watch?v=Db38vU8S1J8',
  'Don\'t Wanna Cry': 'https://www.youtube.com/watch?v=zEkg4GBTumc',
  'Don\'t Wanna Cry (울고 싶지 않아)': 'https://www.youtube.com/watch?v=zEkg4GBTumc',
  'Clap (박수)': 'https://www.youtube.com/watch?v=CyzEtbG-sxY',
  'Pretty U (예쁘다)': 'https://www.youtube.com/watch?v=J5juKw-nN5Y',
  'Adore U (아낀다)': 'https://www.youtube.com/watch?v=9rUFQJrCt7M',
  'Ready to love': 'https://www.youtube.com/watch?v=yCv_278g0hY',
  'Home': 'https://www.youtube.com/watch?v=R9XcopT7fXg',
  'Oh My! (어쩌나)': 'https://www.youtube.com/watch?v=r_bFkioC-Qk',
  'Thanks (고맙다)': 'https://www.youtube.com/watch?v=gZItyr1SNjU',
  'Fear (독)': 'https://www.youtube.com/watch?v=ap1g_VvYgHA',
  '어젯밤 (Last Night)': 'https://www.youtube.com/watch?v=pDofBsk9L1Y',
  '孫悟空': 'https://www.youtube.com/watch?v=-GQg25oP0S4'
};

// Mapping of specific episodes or shows to official YouTube video/playlist URLs
const VARIETY_YOUTUBE_MAP: Record<string, string> = {
  // Going Seventeen
  '《SVT 恐怖捕手 (The Tag)》': 'https://www.youtube.com/watch?v=d_kR331bWFA',
  '《돈\'t Lie (Don\'t Lie) 系列》': 'https://www.youtube.com/watch?v=mIDfF19XQ1I',
  '《EGO (自我精神病院)》': 'https://www.youtube.com/watch?v=gT5c45P_Yw8',
  '《合作不愉快大作戰 (Ad-lib Semi-formal)》': 'https://www.youtube.com/watch?v=g7E7M-P6UIs',
  '《高空彈跳 (Bungee Jump)》': 'https://www.youtube.com/watch?v=N4tLh3pXId4',
  
  // Nana Tour
  '《深夜宿醉突襲綁架實錄》': 'https://www.youtube.com/watch?v=0hO1G7nI8a4',
  '《托斯卡尼達人才藝表演大賞》': 'https://www.youtube.com/watch?v=U-45W9S5Vsc',
  '《熱氣球初體驗與真摯告白》': 'https://www.youtube.com/watch?v=T_79e2O6nks',
  
  //美好的一天 / 13少年漂流記 (One Fine Day)
  '《初入秋島！大驚失色》': 'https://www.youtube.com/watch?v=_Sj2PkygAtI',
  '《金敏主廚與捕魚戰隊》': 'https://www.youtube.com/watch?v=E7y80Bclv94',
  
  // In the SOOP
  '《大型鐵板烤五花肉狂歡派對》': 'https://www.youtube.com/watch?v=vV_fAmsvR50',
  '《足網球大亂鬥與卡丁極速》': 'https://www.youtube.com/watch?v=S0uA2u-Q9P0'
};

/**
 * Gets a direct YouTube watch URL for a song.
 * Fallbacks to search query results if the direct map misses.
 */
export function getSongYouTubeUrl(trackName: string): string {
  // Normalize the name
  const cleanName = trackName
    .replace(/^\d+\.\s*/, '')
    .replace(/\s*-\s*\[主打歌\]/, '')
    .replace(/\s*-\s*\[雙主打歌\]/, '')
    .trim();

  if (SONG_YOUTUBE_MAP[cleanName]) {
    return SONG_YOUTUBE_MAP[cleanName];
  }

  // Look for partial matches
  for (const key of Object.keys(SONG_YOUTUBE_MAP)) {
    if (cleanName.toLowerCase().includes(key.toLowerCase()) || key.toLowerCase().includes(cleanName.toLowerCase())) {
      return SONG_YOUTUBE_MAP[key];
    }
  }

  // Safe fallback to search results
  return `https://www.youtube.com/results?search_query=SEVENTEEN+${encodeURIComponent(cleanName)}`;
}

/**
 * Gets a direct YouTube watch URL for a variety episode.
 * Fallbacks to search query results if the direct map misses.
 */
export function getVarietyYouTubeUrl(title: string, showName?: string): string {
  if (VARIETY_YOUTUBE_MAP[title]) {
    return VARIETY_YOUTUBE_MAP[title];
  }

  // Look for partial matches
  for (const key of Object.keys(VARIETY_YOUTUBE_MAP)) {
    if (title.toLowerCase().includes(key.toLowerCase()) || key.toLowerCase().includes(title.toLowerCase())) {
      return VARIETY_YOUTUBE_MAP[key];
    }
  }

  // Safe fallback search query
  const searchQuery = showName 
    ? `SEVENTEEN+${encodeURIComponent(showName)}+${encodeURIComponent(title)}`
    : `SEVENTEEN+${encodeURIComponent(title)}`;
    
  return `https://www.youtube.com/results?search_query=${searchQuery}`;
}
