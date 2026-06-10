export interface Member {
  name: string;
  realName: string;
  koreanName: string;
  role: string;
  birthDate: string;
  unit: 'Vocal' | 'Hip-Hop' | 'Performance';
  avatarEmoji: string;
  photoGradient: string;
  photoUrl?: string;
  description: string;
  facts: string[];
  colorHex: string;
  zodiac: string;
  instagram?: string;
}

export interface WebsiteTrack {
  name: string;
  mv?: string;
  mvLink?: string;
}

export interface Album {
  title: string;
  year: string;
  type: string;
  category: string;
  tracks: WebsiteTrack[];
  coverGradient?: string;
  coverEmoji?: string;
  description?: string;
}

export interface WebsiteVarietyTrack {
  name: string;
  mv?: string;
  mvLink?: string;
}

export interface VarietyShow {
  title: string;
  year: string;
  desc: string;
  category: string;
  tracks: WebsiteVarietyTrack[];
}

export interface Merchandise {
  id: string;
  name: string;
  category: string;
  price: string;
  description: string;
  status: 'available' | 'preorder' | 'soldout';
  emoji: string;
  officialLink?: string;
  imageUrl?: string;
}

export interface Miniteen {
  name: string;
  originalMember: string;
  avatarEmoji: string;
  photoGradient: string;
  photoUrl?: string;
  colorHex: string;
  characterType: string; // e.g. "Cat", "Tiger"
  personality: string;
  features: string[]; // cute features / details
  facts: string[]; // cute/funny facts
  residence?: string;
  favoriteFood?: string;
  favoriteSong?: string;
  hobbies?: string;
  mbti?: string;
  specialNotes?: string;
  personalityDetail?: string;
  favoriteThings?: string;
  dislikedThings?: string;
}


