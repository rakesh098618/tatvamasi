export interface MantraItem {
  id: string;
  telugu: string;
  transliteration?: string;
  meaning?: string;
}

export interface PoojaCategory {
  id: string;
  titleTelugu: string;
  titleEnglish: string;
  subtitle: string;
  icon: string;
  durationMinutes: number;
  featured?: boolean;
  category?: 'ayyappa' | 'ammavaru' | 'guru' | 'general';
  sections: {
    title: string;
    description?: string;
    mantras: MantraItem[];
  }[];
}

export interface GuruInfo {
  name: string;
  title: string;
  location?: string;
  description: string;
  mantram: string;
  teachings: string[];
  deekshaRules: string[];
}

