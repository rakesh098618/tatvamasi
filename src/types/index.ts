export type AppLanguage = 'te' | 'en';

export interface MantraItem {
  id: string;
  telugu: string;
  transliteration?: string;
  meaning?: string;
  meaningEnglish?: string;
}

export interface SectionItem {
  title: string;
  titleEnglish?: string;
  description?: string;
  descriptionEnglish?: string;
  mantras: MantraItem[];
}

export interface PoojaCategory {
  id: string;
  titleTelugu: string;
  titleEnglish: string;
  subtitle: string;
  subtitleEnglish?: string;
  icon: string;
  durationMinutes?: number;
  featured?: boolean;
  category?: 'ayyappa' | 'ammavaru' | 'guru' | 'general';
  sections: SectionItem[];
}

export interface GuruInfo {
  name: string;
  nameEnglish?: string;
  title: string;
  titleEnglish?: string;
  location?: string;
  locationEnglish?: string;
  description: string;
  descriptionEnglish?: string;
  mantram: string;
  mantramEnglish?: string;
  teachings: string[];
  teachingsEnglish?: string[];
  deekshaRules: string[];
  deekshaRulesEnglish?: string[];
}
