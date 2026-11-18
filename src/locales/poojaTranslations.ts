import { PoojaCategory, SectionItem, MantraItem } from '../types';
import { transliterateTelugu } from '../utils/transliterate';

export interface CategoryTranslation {
  titleEnglish: string;
  subtitleEnglish: string;
}

export interface SectionTranslation {
  titleEnglish: string;
  descriptionEnglish?: string;
}

export const POOJA_CATEGORY_TRANSLATIONS: Record<string, CategoryTranslation> = {
  'guru-vandanam': {
    titleEnglish: 'Guru Vandanam',
    subtitleEnglish: 'Devotion, prayers & divine blessings of Deeksha Gurus',
  },
  'ganapathi-pooja': {
    titleEnglish: 'Ganapathi Pooja',
    subtitleEnglish: 'Deeparadhana, Ganesha Dhyanam, Anga Pooja & 108 Ashtottaram',
  },
  'subrahmanya-pooja': {
    titleEnglish: 'Subrahmanya Swamy Pooja',
    subtitleEnglish: 'Shanmukha Dhyanam, Anga Pooja & 108 Ashtottara Shatanamavali',
  },
  'ayyappa-pooja': {
    titleEnglish: 'Ayyappa Nitya Pooja',
    subtitleEnglish: 'Shodashopachara Pooja (16 Divine Sacred Offerings)',
  },
  'anga-pooja': {
    titleEnglish: 'Ayyappa Anga Pooja',
    subtitleEnglish: 'Sacred flower worship of the 18 Divine Limbs of Lord Ayyappa',
  },
  'sharanu-gosha': {
    titleEnglish: '108 Sharanu Gosha',
    subtitleEnglish: 'Swamiye Saranam Ayyappa - Complete 108 Sharanu Chants',
  },
  'ashtottaram': {
    titleEnglish: 'Ayyappa Ashtottaram',
    subtitleEnglish: 'Sacred Flower Archana with 108 Divine Holy Names of Sri Ayyappa Swamy',
  },
  'bhuthanatha-pancharatnam': {
    titleEnglish: 'Bhoothanatha Pancharatnam',
    subtitleEnglish: 'Bhoothanatha Pancharatnam & Namaskara Slokas (13 Sacred Verses)',
  },
  'mangala-harathi': {
    titleEnglish: 'Mangala Harathi',
    subtitleEnglish: 'Divine Camphor Neerajanam for Sri Ayyappa Swamy',
  },
  'mantrapushpam': {
    titleEnglish: 'Mantrapushpam',
    subtitleEnglish: 'Vedic Devotional Mantrapushpam Offering',
  },
  'atma-pradakshina': {
    titleEnglish: 'Atma Pradakshina',
    subtitleEnglish: 'Circumambulation & Prostration Verses for Removal of All Sins',
  },
  'kshamapana-mantram': {
    titleEnglish: 'Kshamapana Mantram',
    subtitleEnglish: 'Prayer for Forgiveness of Pooja Lapses & Special Ayyappa Sharanu Appeal',
  },
  'harivarasanam': {
    titleEnglish: 'Harivarasanam',
    subtitleEnglish: 'Sabarimala Sacred Night Lullaby & Mangala Harathi',
  },
  'padi-paatalu': {
    titleEnglish: 'Padinettampadi Songs',
    subtitleEnglish: 'Swami Saranam Ayyan Saranam • Praise of the 18 Holy Steps',
  },
  'lakshmi-ashtottaram': {
    titleEnglish: 'Sri Mahalakshmi Ashtottaram',
    subtitleEnglish: '108 Divine Names of Goddess Sri Mahalakshmi Devi',
  },
  'mahalakshmi-ashtakam': {
    titleEnglish: 'Sri Mahalakshmi Ashtakam',
    subtitleEnglish: '"Namasthesthu Mahamaye..." Complete Ashtaka Stotram',
  },
  'malikapurathamma-pooja': {
    titleEnglish: 'Malikapurathamma Pooja',
    subtitleEnglish: 'Sabarimala Manjamma Devi Dhyanam, Ashtottaram & Praise',
  },
  'ammavari-harathi': {
    titleEnglish: 'Ammavari Mangala Harathi',
    subtitleEnglish: 'Sacred Mangala Harathis for Sri Lakshmi Devi & Durga Bhavani',
  },
  'kanakadhara-stotram': {
    titleEnglish: 'Sri Kanakadhara Stotram',
    subtitleEnglish: 'Sacred Golden Shower Stotram composed by Sri Adi Shankaracharya',
  },
  'durga-ashtottaram': {
    titleEnglish: 'Sri Durga Ashtottaram',
    subtitleEnglish: '108 Divine Names of Goddess Sri Durga Devi',
  },
  'saraswati-ashtottaram': {
    titleEnglish: 'Sri Saraswati Ashtottaram',
    subtitleEnglish: '108 Divine Names of Goddess Sri Saraswati Devi',
  },
  'shiva-ashtottaram': {
    titleEnglish: 'Sri Shiva Ashtottaram',
    subtitleEnglish: '108 Divine Sacred Names for Shiva Linga Archana',
  },
};

export const POOJA_SECTION_TRANSLATIONS: Record<string, SectionTranslation> = {
  'గురు ధ్యానం & ప్రార్థన': {
    titleEnglish: 'Guru Dhyanam & Prayer',
    descriptionEnglish: 'Before commencing the pooja, one must meditate on the holy lotus feet of Guruswami',
  },
  'దీపారాధన & ఆచమనం': {
    titleEnglish: 'Deeparadhana & Achamanam',
    descriptionEnglish: 'Lighting the sacred lamp and sipping holy water for internal purification',
  },
  'సంకల్పం & గణపతి ధ్యానం': {
    titleEnglish: 'Sankalpam & Ganapathi Dhyanam',
    descriptionEnglish: 'Sacred resolution and meditation on Lord Sri Ganesha',
  },
  'వినాయక అంగపూజ': {
    titleEnglish: 'Vinayaka Anga Pooja',
    descriptionEnglish: 'Worship of the divine limbs of Lord Ganesha with holy flowers',
  },
  'శ్రీ వినాయక అష్టోత్తర శత నామావళి (108)': {
    titleEnglish: 'Sri Vinayaka Ashtottara Shatanamavali (108)',
    descriptionEnglish: 'Offer holy flowers or sacred akshatas for each divine name',
  },
  'అష్టోత్తర పుష్ప సమర్పణ': {
    titleEnglish: 'Ashtottara Pushpa Samarpanam',
    descriptionEnglish: 'Offering of final sacred flowers upon completing the 108 holy names',
  },
  'షణ్ముఖ ధ్యాన శ్లోకం': {
    titleEnglish: 'Shanmukha Dhyana Slokam',
    descriptionEnglish: 'Devout prayer to Lord Subrahmanya, bearer of the divine Vel',
  },
  'సుబ్రహ్మణ్య స్వామి అంగపూజ': {
    titleEnglish: 'Subrahmanya Swamy Anga Pooja',
    descriptionEnglish: 'Worship of the divine limbs of Lord Subrahmanya with holy flowers',
  },
  'శ్రీ సుబ్రహ్మణ్య అష్టోత్తర శత నామావళి (108)': {
    titleEnglish: 'Sri Subrahmanya Ashtottara Shatanamavali (108)',
    descriptionEnglish: 'Om Sri Subrahmanyaya Namaha - Offer sacred flowers for each holy name',
  },
  'అయ్యప్ప ధ్యాన శ్లోకం': {
    titleEnglish: 'Ayyappa Dhyana Slokam',
    descriptionEnglish: 'Divine meditation verse on Lord Sri Dharmashastha Ayyappa Swamy',
  },
  'షోడశోపచార పూజ (16 ఉపచారములు)': {
    titleEnglish: 'Shodashopachara Pooja (16 Offerings)',
    descriptionEnglish: 'Offer sacred flowers or holy akshatas for each of the 16 offerings',
  },
  'శ్రీ ధర్మశాస్తా అంగ పూజ': {
    titleEnglish: 'Sri Dharmashastha Anga Pooja',
    descriptionEnglish: 'Worship of Lord Ayyappa’s sacred body from holy feet to crown with flowers',
  },
  'సంపూర్ణ 108 శరణు ఘోష': {
    titleEnglish: 'Complete 108 Sharanu Ghosha',
    descriptionEnglish: 'Chanting the Sharanu Ghosha with deep devotion bestows Lord Ayyappa’s divine grace',
  },
  'శరణుఘోష ముగింపు ప్రార్థన': {
    titleEnglish: 'Sharanu Ghosha Concluding Prayer',
    descriptionEnglish: 'Concluding devotional prayer and surrender to Lord Ayyappa',
  },
  'శ్రీ అయ్యప్ప అష్టోత్తర శత నామావళి (108)': {
    titleEnglish: 'Sri Ayyappa Ashtottara Shatanamavali (108)',
    descriptionEnglish: 'Om Sri Swamyne Namaha - Offer sacred flowers or akshatas for each holy name',
  },
  'అయ్యప్ప స్వామి వందనం': {
    titleEnglish: 'Sri Ayyappa Swamy Vandanam',
    descriptionEnglish: 'Reverential prostrations and salutations to Lord Ayyappa Swamy',
  },
  'శ్రీ భూతనాథ పంచరత్నం': {
    titleEnglish: 'Sri Bhoothanatha Pancharatnam',
    descriptionEnglish: 'The 5 divine jewel stanzas of Lord Sri Ayyappa Swamy',
  },
  'భూతనాథ అష్టక శ్లోకములు': {
    titleEnglish: 'Bhoothanatha Ashtaka Verses',
    descriptionEnglish: 'Sacred verses praising Lord Bhoothanatha',
  },
  'శ్రీ అయ్యప్ప మంగళ హారతి పాట': {
    titleEnglish: 'Sri Ayyappa Mangala Harathi Song',
    descriptionEnglish: 'Sri Dharmashastha Mangalam - Devotional camphor flame song',
  },
  'వేద మంత్రపుష్పం': {
    titleEnglish: 'Vedic Mantrapushpam',
    descriptionEnglish: 'Vedic Mantrapushpam chant and offering of sacred flowers',
  },
  'ప్రదక్షిణ మంత్రం': {
    titleEnglish: 'Pradakshina Mantram',
    descriptionEnglish: 'Sacred verses chanted during circumambulation (Atma Pradakshina)',
  },
  'శ్రీ అయ్యప్ప విశేష క్షమాపణ ప్రార్థన (అత్యంత పవిత్రమైనది)': {
    titleEnglish: 'Sri Ayyappa Special Forgiveness Prayer (Most Sacred)',
    descriptionEnglish: 'Sacred prayer seeking forgiveness for any unintended lapses in worship',
  },
  'శ్రీ అయ్యప్ప నమస్కార మంత్రములు': {
    titleEnglish: 'Sri Ayyappa Namaskara Mantras',
    descriptionEnglish: 'Salutation and prostration verses to Lord Shastha',
  },
  'సర్వదేవతా క్షమాపణ మంత్రములు': {
    titleEnglish: 'Universal Devata Kshamapana Mantras',
    descriptionEnglish: 'Seeking forgiveness from all celestial deities and completing the worship',
  },
  'హరివరాసనం అష్టకం': {
    titleEnglish: 'Harivarasanam Ashtakam',
    descriptionEnglish: 'Lord Sri Ayyappa Swamy’s sacred nightly lullaby at Sabarimala',
  },
  'శ్రీ మహాలక్ష్మి అష్టోత్తర శత నామావళి (108)': {
    titleEnglish: 'Sri Mahalakshmi Ashtottara Shatanamavali (108)',
    descriptionEnglish: 'Om Sri Mahalakshmyai Namaha - Sacred flower archana for all prosperity',
  },
  'శ్రీ మహాలక్ష్మ్యష్టకమ్': {
    titleEnglish: 'Sri Mahalakshmyashtakam',
    descriptionEnglish: 'Indra-composed Mahalakshmi hymn - Dispeller of sins and bestower of all boons',
  },
  'మాళికాపురత్తమ్మ ధ్యానం & స్తుతి': {
    titleEnglish: 'Malikapurathamma Dhyanam & Praise',
    descriptionEnglish: 'Meditation and sacred praise to Goddess Malikapurathamma of Sabarimala',
  },
  'శ్రీ మహాలక్ష్మి మంగళ హారతి': {
    titleEnglish: 'Sri Mahalakshmi Mangala Harathi',
    descriptionEnglish: 'Sacred camphor harathi for Goddess Mahalakshmi',
  },
  'కనకధారా స్తోత్ర శ్లోకములు': {
    titleEnglish: 'Kanakadhara Stotra Verses',
    descriptionEnglish: 'The immortal verses of Kanakadhara Stotram by Adi Shankaracharya',
  },
  'శ్రీ దుర్గాష్టోత్తర శత నామావళి (108)': {
    titleEnglish: 'Sri Durgashtottara Shatanamavali (108)',
    descriptionEnglish: 'Sacred flower archana to Durga Devi for overcoming obstacles and fears',
  },
  'శ్రీ సరస్వతీ అష్టోత్తర శత నామావళి (108)': {
    titleEnglish: 'Sri Saraswati Ashtottara Shatanamavali (108)',
    descriptionEnglish: 'Sacred flower archana to Saraswati Devi for wisdom, knowledge and eloquence',
  },
  'శ్రీ శివ అష్టోత్తర శత నామావళి (108)': {
    titleEnglish: 'Sri Shiva Ashtottara Shatanamavali (108)',
    descriptionEnglish: 'Om Namah Shivaya - Bilva leaf and holy flower archana to Supreme Lord Shiva',
  },
};

export const DEVOTIONAL_MEANINGS_ENGLISH: Record<string, string> = {
  'gv-1':
    'The Guru is Brahma the Creator, Vishnu the Preserver, and Maheshwara the Destroyer. The Guru is verily the Supreme Absolute Reality (Parabrahma). Salutations to that holy Guru.',
  'gv-2':
    'Salutations to that Sadguru who reveals to us that Supreme State which pervades the entire universe of animate and inanimate beings.',
  'gp-1':
    'I meditate upon Lord Ganesha, who is dressed in pure white garments, radiant as the moon, endowed with four arms and a serene, auspicious face, for the peaceful removal of all obstacles.',
  'sp-1':
    'I meditate upon Lord Subrahmanya, who possesses six divine faces, whose body is anointed with fragrant sandalwood paste, who is mounted on the divine peacock, and who is the beloved son of Lord Shiva.',
  'ap-dhyan':
    'I meditate upon Lord Dharmashastha, who holds the Jnana Mudra, the divine staff, and flower-arrow, shining resplendent with jeweled crown and divine ornaments, surrounded by sages and celestial beings.',
  'bp-1':
    'Lord of all the heroes in the universe, worthy of supreme adoration, the protector of all beings, the cosmic master, eternal refuge of all devotees - Salutations to that Lord Bhoothanatha.',
  'bp-2':
    'Adored by wise scholars, revered by the entire cosmos, the beloved divine son of Lord Vishnu and Lord Shiva, born to eliminate darkness - Salutations to that Lord Bhoothanatha.',
  'bp-3':
    'Whose majestic gait resembles that of a royal divine elephant, whose heart is filled with the divine nectar of compassion, who destroys all obstacles of his devotees - Salutations to that Lord Bhoothanatha.',
  'bp-4':
    'Our family deity, the total destroyer of all fears from enemies, who fulfills all auspicious wishes and righteous desires of devotees - Salutations to that Lord Bhoothanatha.',
  'bp-5':
    'The crowning ornament of the Pandya royal dynasty, who incarnated on the sacred soil of Kerala and manifested divine leelas, who protects devotees in distress - Salutations to that Lord Bhoothanatha.',
  'bp-6':
    'Whoever reads this sacred "Pancharatna Stotram" daily with purity and devotion, upon them Lord Sastha bestows happiness, longevity, progeny, health, and supreme peace.',
  'bp-7':
    'Shining with the radiant crimson glow of the rising sun, adorned with sapphire ear-studs and blue silk garments, beloved child of Lord Shiva and Vishnu - Salutations to Lord Sastha.',
  'bp-8':
    'Holding bow and arrows in the left hand and a silver cane in the right hand, with shining celestial earrings, riding on the back of a lion or horse - Salutations to Lord Sastha.',
  'bp-9':
    'Riding upon a royal tiger, endowed with glowing crimson eyes, adorned with brilliant golden necklaces and a sacred mark on the forehead - Salutations to Lord Sastha.',
  'bp-10':
    'Shining with a waist ornament adorned with tiny bells, endowed with an auspicious face pleasant as the full moon, appearing in the divine form of a celestial forest hunter - Salutations to Lord Sastha.',
  'bp-11':
    'Attended by the Bhootha and Vetala celestial attendants, residing on the sacred golden mountain Ponnambalamedu at holy Sabarimala - Salutations to Lord Sastha.',
  'bp-12':
    'O Lord of all beings! Embodiment of eternal bliss! Merciful one full of compassion for all living beings! O mighty-armed Dharmashastha! Protect us always.',
  'bp-13':
    'Worshipped upon the holy Sabari hills, established in serene peace, dispelling all sins of devotees, bestower of boons - Salutations to Lord Sastha.',
  'la-ash-1':
    'Salutations to You, O Mahamaya, who abides in the holy Sri Peetha, worshipped by all the celestials! Bearer of the divine conch, discus, and mace, salutations to You, O Mahalakshmi!',
  'la-ash-2':
    'Mounted on Garuda the eagle king, destroyer of the demon Kolasura, remover of all sins, divine Goddess, salutations to You, O Mahalakshmi!',
  'la-ash-3':
    'All-knowing Goddess, giver of all boons, terror to the wicked, dispeller of all sorrow, salutations to You, O Mahalakshmi!',
  'la-ash-9':
    'Devotees who recite this Mahalakshmi Ashtakam daily with heartfelt devotion attain all accomplishments, wealth and abundance, and are freed from all obstacles.',
};

export function getPoojaTitle(pooja: PoojaCategory, isEnglish: boolean): string {
  if (isEnglish) {
    return pooja.titleEnglish || POOJA_CATEGORY_TRANSLATIONS[pooja.id]?.titleEnglish || pooja.titleTelugu;
  }
  return pooja.titleTelugu;
}

export function getPoojaSubtitle(pooja: PoojaCategory, isEnglish: boolean): string {
  if (isEnglish) {
    return pooja.subtitleEnglish || POOJA_CATEGORY_TRANSLATIONS[pooja.id]?.subtitleEnglish || pooja.subtitle;
  }
  return pooja.subtitle;
}

export function getSectionTitle(section: SectionItem, isEnglish: boolean): string {
  if (isEnglish) {
    return section.titleEnglish || POOJA_SECTION_TRANSLATIONS[section.title]?.titleEnglish || section.title;
  }
  return section.title;
}

export function getSectionDescription(section: SectionItem, isEnglish: boolean): string | undefined {
  if (isEnglish) {
    return section.descriptionEnglish || POOJA_SECTION_TRANSLATIONS[section.title]?.descriptionEnglish || section.description;
  }
  return section.description;
}

export function getMantraMeaning(mantra: MantraItem, isEnglish: boolean): string | undefined {
  if (!mantra.meaning) return undefined;
  if (isEnglish) {
    return mantra.meaningEnglish || DEVOTIONAL_MEANINGS_ENGLISH[mantra.id] || mantra.meaning;
  }
  return mantra.meaning;
}

export function getMantraDisplay(mantra: MantraItem, isEnglish: boolean): string {
  if (!isEnglish) {
    return mantra.telugu;
  }
  if (mantra.transliteration && mantra.transliteration.trim().length > 0) {
    return mantra.transliteration;
  }
  return transliterateTelugu(mantra.telugu);
}
