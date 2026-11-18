// Devotional Telugu to English Phonetic Transliteration Engine
// Provides faithful, natural, standard Roman transliteration for Sanskrit and Telugu stotras, mantras, and ashtottarams.

const VOWELS: Record<string, string> = {
  'అ': 'a',
  'ఆ': 'aa',
  'ఇ': 'i',
  'ఈ': 'ee',
  'ఉ': 'u',
  'ఊ': 'oo',
  'ఋ': 'ru',
  'ౠ': 'roo',
  'ఌ': 'lu',
  'ౡ': 'loo',
  'ఎ': 'e',
  'ఏ': 'e',
  'ఐ': 'ai',
  'ఒ': 'o',
  'ఓ': 'o',
  'ఔ': 'au',
};

const MATRAS: Record<string, string> = {
  'ా': 'aa',
  'ి': 'i',
  'ీ': 'ee',
  'ు': 'u',
  'ూ': 'oo',
  'ృ': 'ru',
  'ౄ': 'roo',
  'ె': 'e',
  'ే': 'e',
  'ై': 'ai',
  'ొ': 'o',
  'ో': 'o',
  'ౌ': 'au',
};

const CONSONANTS: Record<string, string> = {
  'క': 'k',
  'ఖ': 'kh',
  'గ': 'g',
  'ఘ': 'gh',
  'ఙ': 'ng',
  'చ': 'ch',
  'ఛ': 'chh',
  'జ': 'j',
  'ఝ': 'jh',
  'ఞ': 'ny',
  'ట': 't',
  'ఠ': 'th',
  'డ': 'd',
  'ఢ': 'dh',
  'ణ': 'n',
  'త': 't',
  'థ': 'th',
  'ద': 'd',
  'ధ': 'dh',
  'న': 'n',
  'ప': 'p',
  'ఫ': 'ph',
  'బ': 'b',
  'భ': 'bh',
  'మ': 'm',
  'య': 'y',
  'ర': 'r',
  'ఱ': 'r',
  'ల': 'l',
  'ళ': 'l',
  'వ': 'v',
  'శ': 'sh',
  'ష': 'sh',
  'స': 's',
  'హ': 'h',
};

const DEVOTIONAL_PHRASES: Record<string, string> = {
  'స్వామియే శరణం అయ్యప్ప': 'Swamiye Saranam Ayyappa',
  'శ్రీ అయ్యప్ప స్వామి': 'Sri Ayyappa Swamy',
  'ఓం స్వామ్యే నమః': 'Om Swamye Namaha',
  'ఓం నమః శివాయ': 'Om Namah Shivaya',
  'ఓం గం గణపతయే నమః': 'Om Gam Ganapataye Namaha',
  'ఓం శరవణభవాయ నమః': 'Om Saravanabhavaya Namaha',
  'ఓం నమో నారాయణాయ': 'Om Namo Narayanaya',
};

export function transliterateTelugu(text: string): string {
  if (!text) return '';

  // Check known whole phrases
  const trimmed = text.trim();
  if (DEVOTIONAL_PHRASES[trimmed]) {
    return DEVOTIONAL_PHRASES[trimmed];
  }

  // Preserve line breaks
  const lines = text.split('\n');
  const transliteratedLines = lines.map(line => transliterateLine(line));
  return transliteratedLines.join('\n');
}

function transliterateLine(line: string): string {
  // If line contains no Telugu characters, return as is
  if (!/[\u0C00-\u0C7F]/.test(line)) {
    return line;
  }

  // Split tokens by space while preserving punctuation
  const words = line.split(/(\s+|[.,|/:;!?()[\]{}—–"-]+)/);

  return words.map(token => {
    if (!token || !/[\u0C00-\u0C7F]/.test(token)) {
      return token;
    }
    return transliterateWord(token);
  }).join('');
}

function transliterateWord(word: string): string {
  if (word === 'ఓం') return 'Om';
  if (word === 'నమః') return 'Namaha';
  if (word === 'స్వాహా') return 'Swaha';
  if (word === 'నమః||') return 'Namaha ||';

  const res: string[] = [];
  const n = word.length;
  let i = 0;

  while (i < n) {
    const char = word[i];

    // Sacred Om (ఓ + ం)
    if (char === 'ఓ' && i + 1 < n && word[i + 1] === 'ం') {
      res.push('Om');
      i += 2;
      continue;
    }

    if (char in VOWELS) {
      res.push(VOWELS[char]);
      i += 1;
    } else if (char in CONSONANTS) {
      const cons = CONSONANTS[char];
      if (i + 1 < n) {
        const nextChar = word[i + 1];
        if (nextChar === '్') {
          // Virama (halant) - no inherent vowel
          res.push(cons);
          i += 2;
        } else if (nextChar in MATRAS) {
          // Dependent vowel sign
          res.push(cons + MATRAS[nextChar]);
          i += 2;
        } else {
          // Inherent 'a'
          res.push(cons + 'a');
          i += 1;
        }
      } else {
        // Last char consonant with inherent 'a'
        res.push(cons + 'a');
        i += 1;
      }
    } else if (char in MATRAS) {
      res.push(MATRAS[char]);
      i += 1;
    } else if (char === 'ం') {
      // Anusvara
      res.push('m');
      i += 1;
    } else if (char === 'ః') {
      // Visarga
      res.push('ha');
      i += 1;
    } else if (char === '్') {
      // Isolated virama
      i += 1;
    } else if (char === 'ఽ') {
      // Avagraha
      res.push("'");
      i += 1;
    } else {
      res.push(char);
      i += 1;
    }
  }

  const raw = res.join('');
  if (raw.length === 0) return '';

  // Clean common word-initial or casing styles
  return cleanPhonetics(raw);
}

function cleanPhonetics(str: string): string {
  let s = str;
  // Replace double 'aa' at end of words with 'a' for clean Sanskrit names
  // e.g. "poojayaami" -> "poojayami", "shastre" -> "shastre"
  s = s.replace(/aa/g, 'a');
  // Capitalize first letter of word
  s = s.charAt(0).toUpperCase() + s.slice(1);
  return s;
}

export function getMantraDisplay(mantra: { telugu: string; transliteration?: string }, isEnglish: boolean): string {
  if (!isEnglish) {
    return mantra.telugu;
  }
  if (mantra.transliteration && mantra.transliteration.trim().length > 0) {
    return mantra.transliteration;
  }
  return transliterateTelugu(mantra.telugu);
}
