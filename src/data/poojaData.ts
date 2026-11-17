import { PoojaCategory, GuruInfo } from '../types';

export const GURU_SWAMI_DETAILS: GuruInfo = {
  name: 'శ్రీ గురుస్వామి వారి దివ్య సన్నిధి',
  title: 'అయ్యప్ప దీక్షా గురువులు & మండల దీక్షా మార్గదర్శకులు',
  description: 'గురు ముఖతః దీక్షను స్వీకరించి, భక్తి శ్రద్ధలతో 41 రోజుల మండల దీక్షను ఆచరించడం ద్వారా పరమేశ్వరుడైన అయ్యప్ప స్వామి అనుగ్రహం కలుగుతుంది. గురువే దైవం, గురు వాక్యమే వేదం.',
  mantram: 'గురుర్బ్రహ్మ గురుర్విష్ణుః గురుర్దేవో మహేశ్వరః |\nగురుః సాక్షాత్ పరబ్రహ్మ తస్మై శ్రీ గురవే నమః ||',
  teachings: [
    'తత్త్వమసి - "నీవే ఆ పరబ్రహ్మవు" అనే పరమ సత్యాన్ని అనుభవపూర్వకంగా గ్రహించు.',
    'ప్రతి ప్రాణిని అయ్యప్ప స్వరూపంగా భావించి సాటి భక్తులను "స్వామి" అని పిలువు.',
    'సత్యం, ధర్మం, అహింస, భూతదయ, ఇంద్రియ నిగ్రహం తప్పక పాటించు.',
    'శరణు ఘోషతో మనస్సును సదా పవిత్రంగా, భక్తి భావంతో నింపుకో.',
    'ఇరుముడి మోసేటప్పుడు ఆత్మ సమర్పణ భావంతో స్వామి సన్నిధానాన్ని చేరుకో.'
  ],
  deekshaRules: [
    'నిత్యం సూర్యోదయానికి ముందు, సూర్యాస్తమయం తర్వాత చన్నీటి స్నానం చేయాలి.',
    'శ్రీ గురుస్వామి పాద నమస్కారం & అయ్యప్ప నిత్య పూజ తప్పనిసరిగా ఆచరించాలి.',
    'నల్లని, నీలి లేదా కాషాయ వస్త్రాలు మాత్రమే ధరించాలి (తులసి లేదా రుద్రాక్ష మాల ధారణ).',
    'ఏకభుక్తం (సాత్విక ఆహారం) స్వీకరించాలి. ఉల్లి, వెల్లుల్లి, మద్య, మాంస, ధూమపానాలు నిషిద్ధం.',
    'పాదరక్షలు ధరించరాదు. కేవలం నేలమీద చాపపై మాత్రమే శయనించాలి (భూశయనం).',
    'ఎవరినీ దూషించరాదు, అబద్ధం చెప్పరాదు, క్రోధాన్ని పూర్తిగా జయించాలి.'
  ]
};

export const POOJA_CATEGORIES: PoojaCategory[] = [
  // 1. GURU VANDANAM
  {
    id: 'guru-vandanam',
    titleTelugu: '1. గురు వందనం',
    titleEnglish: 'Guru Vandanam',
    subtitle: 'దీక్షా గురువుల ఆరాధన, ప్రార్థన & ఆశీర్వాదం',
    icon: 'Sparkles',
    durationMinutes: 5,
    featured: true,
    category: 'guru',
    sections: [
      {
        title: 'గురు ధ్యానం & ప్రార్థన',
        description: 'పూజ ప్రారంభించే ముందు గురుస్వామి పాదపద్మములను స్మరించుకోవాలి',
        mantras: [
          {
            id: 'gv-1',
            telugu: 'గురుర్బ్రహ్మ గురుర్విష్ణుః గురుర్దేవో మహేశ్వరః |\nగురుః సాక్షాత్ పరబ్రహ్మ తస్మై శ్రీ గురవే నమః ||',
            transliteration: 'Gurur Brahma Gurur Vishnuh Gurur Devo Maheshwarah | Guruh Sakshat Parabrahma Tasmai Shri Gurave Namah ||',
            meaning: 'గురువే సృష్టికర్తయైన బ్రహ్మ, స్థితికారుడైన విష్ణువు, లయకారుడైన మహేశ్వరుడు. సాక్షాత్తు పరబ్రహ్మ స్వరూపుడైన ఆ శ్రీ గురువునకు నమస్కారములు.'
          },
          {
            id: 'gv-2',
            telugu: 'అఖండ మండలాకారం వ్యాప్తం యేన చరాచరమ్ |\nతత్పదం దర్శితం యేన తస్మై శ్రీ గురవే నమః ||',
            transliteration: 'Akhanda Mandalakaram Vyaptam Yena Characharam | Tatpadam Darshitam Yena Tasmai Shri Gurave Namah ||',
            meaning: 'అనంత విశ్వమంతటా వ్యాపించి ఉన్న ఆ పరమాత్మ తత్త్వాన్ని ఎవరైతే మనకు దర్శింపజేస్తారో, ఆ సద్గురుస్వామి పాదాలకు శరణు.'
          },
          {
            id: 'gv-3',
            telugu: 'స్వామియే శరణం అయ్యప్ప | మా గురుస్వామి పాదారవిందములకు నమస్కారములు ||',
            transliteration: 'Swamiye Saranam Ayyappa | Maa Guruswami Padaravindamulaku Namaskaramulu ||'
          }
        ]
      }
    ]
  },

  // 2. GANAPATHI POOJA
  {
    id: 'ganapathi-pooja',
    titleTelugu: '2. గణపతి పూజ',
    titleEnglish: 'Ganapathi Pooja',
    subtitle: 'విఘ్న నివారణార్థం వినాయక షోడశోపచార పూజ',
    icon: 'Sun',
    durationMinutes: 10,
    featured: true,
    category: 'ayyappa',
    sections: [
      {
        title: 'దీపారాధన & ఆచమనం',
        description: 'దీపం వెలిగించి, మూడుసార్లు ఆచమనీయం చేయవలెను',
        mantras: [
          {
            id: 'gp-deep',
            telugu: 'దీపజ్యోతిః పరబ్రహ్మ దీపజ్యోతిర్-జనార్దనః |\nదీపో హరతు మే పాపం దీపజ్యోతిర్-నమోఽస్తు తే ||\nఓం కేశవాయ స్వాహా | ఓం నారాయణాయ స్వాహా | ఓం మాధవాయ స్వాహా |',
            transliteration: 'Deepajyotih Parabrahma Deepajyotir Janardanah | Deepo Haratu Me Papam Deepajyotir Namostute || Om Keshavaya Swaha | Om Narayanaya Swaha | Om Madhavaya Swaha |'
          }
        ]
      },
      {
        title: 'సంకల్పం & గణపతి ధ్యానం',
        mantras: [
          {
            id: 'gp-1',
            telugu: 'శుక్లాంబరధరం విష్ణుం శశివర్ణం చతుర్భుజమ్ |\nప్రసన్నవదనం ధ్యాయేత్ సర్వవిఘ్నోపశాంతయే ||',
            transliteration: 'Shuklambaradharam Vishnum Shashivarnam Chaturbhujam | Prasanna Vadanam Dhyayet Sarva Vighnopa Shantaye ||',
            meaning: 'తెల్లని వస్త్రములు ధరించినవాడు, చంద్రుని వంటి కాంతి కలవాడు, నాలుగు భుజములు, ప్రసన్నమైన ముఖము గల వినాయకుడిని సమస్త విఘ్నములు తొలగుటకై ధ్యానిస్తున్నాను.'
          },
          {
            id: 'gp-2',
            telugu: 'అగజానన పద్మార్కం గజానన మహర్నిశమ్ |\nఅనేకదంతం భక్తానాం ఏకదంతముపాస్మహే ||',
            transliteration: 'Agajanana Padmarkam Gajanana Maharnisham | Anekadantam Bhaktanam Ekadantam Upasmahe ||'
          },
          {
            id: 'gp-3',
            telugu: 'ఓం సుముఖాయ నమః | ఓం ఏకదంతాయ నమః | ఓం కపిలాయ నమః | ఓం గజకర్ణకాయ నమః | ఓం లంబోదరాయ నమః | ఓం వికటాయ నమః | ఓం విఘ్నరాజాయ నమః | ఓం గణాధిపాయ నమః ||',
            transliteration: 'Om Sumukhaya Namah | Om Ekadantaya Namah | Om Kapilaya Namah | Om Gajakarnakaya Namah | Om Lambodaraya Namah | Om Vikataya Namah | Om Vighnarajaya Namah | Om Ganadhipaya Namah ||'
          },
          {
            id: 'gp-4',
            telugu: 'శ్రీ వరసిద్ధి వినాయక స్వామినే నమః | నానావిధ పరిమళ పత్ర పుష్ప పూజాం సమర్పయామి || ధూపం, దీపం, నైవేద్యం, తాంబూలం సమర్పయామి ||',
            transliteration: 'Shri Varasiddhi Vinayaka Swamine Namah | Nanavidha Parimala Patra Pushpa Poojam Samarpayami || Dhoopam, Deepam, Naivedyam, Tamboolam Samarpayami ||'
          }
        ]
      }
    ]
  },

  // 3. SUBRAMANYA SWAMI POOJA
  {
    id: 'subrahmanya-pooja',
    titleTelugu: '3. సుబ్రహ్మణ్య స్వామి పూజ',
    titleEnglish: 'Subrahmanya Swamy Pooja',
    subtitle: 'షణ్ముఖుని ఆరాధన, ధ్యానం & మూల మంత్రములు',
    icon: 'Flame',
    durationMinutes: 7,
    featured: false,
    category: 'ayyappa',
    sections: [
      {
        title: 'షణ్ముఖ ధ్యాన శ్లోకం',
        description: 'శక్తిధరుడైన సుబ్రహ్మణ్యుని ప్రార్థన',
        mantras: [
          {
            id: 'sp-1',
            telugu: 'షడాననం చందన లేపితాంగం మహోరసం దివ్యమయూర వాహనమ్ |\nరుద్రస్య సూనుం సురలోకనాథం బ్రహ్మణ్యదేవం శరణం ప్రపద్యే ||',
            transliteration: 'Shadananam Chandana Lepitangam Mahorasam Divya Mayura Vahanam | Rudrasya Soonum Suralokanatham Brahmanyadevam Saranam Prapadye ||',
            meaning: 'ఆరు ముఖములు కలవాడు, సుగంధ చందనము అలదిన దేహము కలవాడు, మయూర వాహనుడు, శివ కుమారుడైన శ్రీ సుబ్రహ్మణ్య స్వామిని శరణు వేడుతున్నాను.'
          },
          {
            id: 'sp-2',
            telugu: 'ఓం శరవణభవాయ నమః | ఓం కార్తికేయాయ నమః | ఓం స్కందాయ నమః | ఓం గుహాయ నమః | ఓం శక్తిధరాయ నమః ||',
            transliteration: 'Om Saravanabhavaya Namah | Om Kartikeyaya Namah | Om Skandaya Namah | Om Guhaya Namah | Om Shaktidharaya Namah ||'
          },
          {
            id: 'sp-3',
            telugu: 'శ్రీ సుబ్రహ్మణ్య స్వామినే నమః | ధ్యాన, ఆవాహన, సర్వోపచార పూజాం సమర్పయామి ||',
            transliteration: 'Shri Subrahmanya Swamine Namah | Dhyana, Aavahana, Sarvopachara Poojam Samarpayami ||'
          }
        ]
      }
    ]
  },

  // 4. AYYAPPA NITYA POOJA (SHODASHOPACHARA)
  {
    id: 'ayyappa-pooja',
    titleTelugu: '4. అయ్యప్ప నిత్య పూజా విధానం',
    titleEnglish: 'Ayyappa Nitya Pooja',
    subtitle: 'ఆవాహన, ఆసన, పాద్య, స్నాన, షోడశోపచార నిత్య పూజ',
    icon: 'Crown',
    durationMinutes: 18,
    featured: true,
    category: 'ayyappa',
    sections: [
      {
        title: 'అయ్యప్ప మూల ధ్యానం',
        mantras: [
          {
            id: 'ap-dhyan',
            telugu: 'ధ్యాయేత్ కోమల గాత్రం మోహనరూపం హరిహరాత్మజమ్ |\nహరిద్వర్ణ ధరం దేవం శాస్తారం ప్రణమామ్యహమ్ ||\nత్రినేత్రం చతుర్భుజం శాంతం సర్వాభరణ భూషితమ్ |\nయోగాసన సమారూఢం అయ్యప్పం ప్రణమామ్యహమ్ ||',
            transliteration: 'Dhyayet Komala Gatram Mohana Roopam Hariharatmajam | Haridvarna Dharam Devam Shastaram Pranamamyaham || Trinetram Chaturbhujam Shantam Sarvabharana Bhooshitam | Yogasana Samaarudham Ayyappam Pranamamyaham ||',
            meaning: 'కోమల శరీర కాంతి కలవాడు, మోహన రూపుడు, హరిహర పుత్రుడు, సమస్త ఆభరణ విభూషితుడు, యోగాసనంలో కూర్చున్న శ్రీ అయ్యప్ప స్వామికి ప్రణామములు.'
          }
        ]
      },
      {
        title: 'షోడశోపచార పూజ',
        description: 'స్వామివారికి భక్తితో సమర్పించవలసిన 16 ఉపచారములు',
        mantras: [
          { id: 'sh-1', telugu: 'ఓం శ్రీ హరిహరపుత్రాయ నమః - ధ్యాయామి', transliteration: 'Om Shri Hariharaputraya Namah - Dhyayami' },
          { id: 'sh-2', telugu: 'ఓం శ్రీ మణికంఠాయ నమః - ఆవాహయామి', transliteration: 'Om Shri Manikantaya Namah - Aavahayami' },
          { id: 'sh-3', telugu: 'ఓం శ్రీ ధర్మశాస్త్రే నమః - రత్న సింహాసనం సమర్పయామి', transliteration: 'Om Shri Dharmashastre Namah - Ratna Simhasanam Samarpayami' },
          { id: 'sh-4', telugu: 'ఓం శ్రీ శబరీగిరీశాయ నమః - పాద్యం సమర్పయామి (పాదములను కడుగుట)', transliteration: 'Om Shri Sabarigireeshaya Namah - Padyam Samarpayami' },
          { id: 'sh-5', telugu: 'ఓం శ్రీ లోకపూజ్యాయ నమః - అర్ఘ్యం సమర్పయామి (చేతులు కడుగుట)', transliteration: 'Om Shri Lokapoojyaya Namah - Arghyam Samarpayami' },
          { id: 'sh-6', telugu: 'ఓం శ్రీ పరమాత్మనే నమః - ఆచమనీయం సమర్పయామి', transliteration: 'Om Shri Paramatmane Namah - Aachamaneeyam Samarpayami' },
          { id: 'sh-7', telugu: 'ఓం శ్రీ పులివాహనాయ నమః - శుద్ధోదక స్నానం సమర్పయామి', transliteration: 'Om Shri Pulivahanaya Namah - Shuddhodaka Snanam Samarpayami' },
          { id: 'sh-8', telugu: 'ఓం శ్రీ మహాశాస్త్రే నమః - వస్త్ర యుగ్మం సమర్పయామి', transliteration: 'Om Shri Mahashastre Namah - Vastra Yugmam Samarpayami' },
          { id: 'sh-9', telugu: 'ఓం శ్రీ మోహినీసుతాయ నమః - యజ్ఞోపవీతం సమర్పయామి', transliteration: 'Om Shri Mohinisutaya Namah - Yajnopaveetam Samarpayami' },
          { id: 'sh-10', telugu: 'ఓం శ్రీ చందనప్రియాయ నమః - దివ్య శ్రీగంధం సమర్పయామి', transliteration: 'Om Shri Chandanapriyaya Namah - Divya Shrigandham Samarpayami' },
          { id: 'sh-11', telugu: 'ఓం శ్రీ పుష్పప్రియాయ నమః - నానావిధ పరిమళ పత్ర పుష్పాణి సమర్పయామి', transliteration: 'Om Shri Pushpapriyaya Namah - Pushpani Samarpayami' },
          { id: 'sh-12', telugu: 'ఓం శ్రీ ధూపప్రియాయ నమః - దశాంగం గుగ్గులోపేతం ధూపం సమర్పయామి', transliteration: 'Om Shri Dhoopapriyaya Namah - Dhoopam Samarpayami' },
          { id: 'sh-13', telugu: 'ఓం శ్రీ దీపప్రియాయ నమః - సాక్షాత్ ప్రత్యక్ష దీపం సమర్పయామి', transliteration: 'Om Shri Deepapriyaya Namah - Deepam Samarpayami' },
          { id: 'sh-14', telugu: 'ఓం శ్రీ నైవేద్యప్రియాయ నమః - మహానైవేద్యం (పాలు, పండ్లు, బెల్లం) సమర్పయామి', transliteration: 'Om Shri Naivedyapriyaya Namah - Maha Naivedyam Samarpayami' },
          { id: 'sh-15', telugu: 'ఓం శ్రీ తాంబూలప్రియాయ నమః - తాంబూలం సమర్పయామి', transliteration: 'Om Shri Tamboolapriyaya Namah - Tamboolam Samarpayami' },
          { id: 'sh-16', telugu: 'ఓం శ్రీ ఆనందచిత్తాయ నమః - ఆనంద కర్పూర నీరాజనం సమర్పయామి', transliteration: 'Om Shri Anandachittaya Namah - Neerajanam Samarpayami' }
        ]
      }
    ]
  },

  // 5. AYYAPPA ANGA POOJA
  {
    id: 'anga-pooja',
    titleTelugu: '5. అయ్యప్ప అంగ పూజ',
    titleEnglish: 'Ayyappa Anga Pooja',
    subtitle: 'స్వామివారి ప్రతి దివ్య అంగానికి పుష్పార్చన',
    icon: 'Sparkle',
    durationMinutes: 8,
    featured: true,
    category: 'ayyappa',
    sections: [
      {
        title: 'అంగ పూజా విధానం',
        description: 'పువ్వులు లేదా అక్షతలను చేతిలోకి తీసుకుని స్వామి అంగములను పూజించుట',
        mantras: [
          { id: 'ang-1', telugu: 'ఓం స్వామినే నమః - పాదౌ పూజయామి (పాదములు)', transliteration: 'Om Swamine Namah - Padau Poojayami' },
          { id: 'ang-2', telugu: 'ఓం మహాశాస్త్రే నమః - గుల్ఫౌ పూజయామి (మడమలు)', transliteration: 'Om Mahashastre Namah - Gulphau Poojayami' },
          { id: 'ang-3', telugu: 'ఓం శబరీగిరీశాయ నమః - జానునీ పూజయామి (మోకాళ్ళు)', transliteration: 'Om Sabarigireeshaya Namah - Januni Poojayami' },
          { id: 'ang-4', telugu: 'ఓం హరిహరపుత్రాయ నమః - ఊరూ పూజయామి (తొడలు)', transliteration: 'Om Hariharaputraya Namah - Ooroo Poojayami' },
          { id: 'ang-5', telugu: 'ఓం మణికంఠాయ నమః - కటిం పూజయామి (నడుము)', transliteration: 'Om Manikantaya Namah - Katim Poojayami' },
          { id: 'ang-6', telugu: 'ఓం పరమాత్మనే నమః - నాభిం పూజయామి (బొడ్డు/నాభి)', transliteration: 'Om Paramatmane Namah - Nabhim Poojayami' },
          { id: 'ang-7', telugu: 'ఓం లోకపూజ్యాయ నమః - ఉదరం పూజయామి (పొట్ట)', transliteration: 'Om Lokapoojyaya Namah - Udaram Poojayami' },
          { id: 'ang-8', telugu: 'ఓం ధర్మశాస్త్రే నమః - హృదయం పూజయామి (వక్షఃస్థలం)', transliteration: 'Om Dharmashastre Namah - Hridayam Poojayami' },
          { id: 'ang-9', telugu: 'ఓం కారుణ్యసింధవే నమః - బాహూన్ పూజయామి (చేతులు)', transliteration: 'Om Karunyasindhave Namah - Bahun Poojayami' },
          { id: 'ang-10', telugu: 'ఓం వీరమణిగ్రీవాయ నమః - కంఠం పూజయామి (మెడ)', transliteration: 'Om Veeramanigreevaya Namah - Kantham Poojayami' },
          { id: 'ang-11', telugu: 'ఓం విశ్వరూపాయ నమః - ముఖం పూజయామి (ముఖారవిందం)', transliteration: 'Om Vishwaroopaya Namah - Mukham Poojayami' },
          { id: 'ang-12', telugu: 'ఓం సర్వజ్ఞాయ నమః - నేత్రౌ పూజయామి (కన్నులు)', transliteration: 'Om Sarvajnaya Namah - Netrau Poojayami' },
          { id: 'ang-13', telugu: 'ఓం సర్వేశ్వరాయ నమః - శిరః పూజయామి (శిరస్సు)', transliteration: 'Om Sarveshwaraya Namah - Shirah Poojayami' },
          { id: 'ang-14', telugu: 'ఓం శ్రీ అయ్యప్ప స్వామినే నమః - సర్వాణ్యంగాని పూజయామి (సమస్త శరీరము)', transliteration: 'Om Shri Ayyappa Swamine Namah - Sarvanyangani Poojayami' }
        ]
      }
    ]
  },

  // 6. 108 SHARANU GOSHA
  {
    id: 'sharanu-gosha',
    titleTelugu: '6. 108 శరణు ఘోష',
    titleEnglish: '108 Sharanu Gosha',
    subtitle: 'స్వామియే శరణం అయ్యప్ప - పవిత్ర శరణు ఘోషావళి',
    icon: 'HeartHandshake',
    durationMinutes: 15,
    featured: true,
    category: 'ayyappa',
    sections: [
      {
        title: 'శరణు ఘోషావళి',
        description: 'ప్రతి శరణు పఠించిన తర్వాత "స్వామియే శరణం అయ్యప్ప" అని గంభీరంగా పలుకవలెను',
        mantras: [
          { id: 'sg-1', telugu: '1. స్వామియే శరణం అయ్యప్ప', transliteration: 'Swamiye Saranam Ayyappa' },
          { id: 'sg-2', telugu: '2. హరిహర సుతనే శరణం అయ్యప్ప', transliteration: 'Harihara Suthane Saranam Ayyappa' },
          { id: 'sg-3', telugu: '3. కన్నిమూల గణపతి భగవానే శరణం అయ్యప్ప', transliteration: 'Kannimoola Ganapathi Bhagawane Saranam Ayyappa' },
          { id: 'sg-4', telugu: '4. శక్తి వడివేలన్ సోదరనే శరణం అయ్యప్ప', transliteration: 'Shakthi Vadivelan Sodharane Saranam Ayyappa' },
          { id: 'sg-5', telugu: '5. మాళికాపురత్తు మంజమ్మ దేవి లోకమాతావే శరణం అయ్యప్ప', transliteration: 'Malikapurathu Manjamma Devi Lokamathave Saranam Ayyappa' },
          { id: 'sg-6', telugu: '6. వవర స్వామియే శరణం అయ్యప్ప', transliteration: 'Vavaru Swamiye Saranam Ayyappa' },
          { id: 'sg-7', telugu: '7. కరుప్పన్న స్వామియే శరణం అయ్యప్ప', transliteration: 'Karuppanna Swamiye Saranam Ayyappa' },
          { id: 'sg-8', telugu: '8. పెరియ కడుత్త స్వామియే శరణం అయ్యప్ప', transliteration: 'Periya Kadutha Swamiye Saranam Ayyappa' },
          { id: 'sg-9', telugu: '9. సిరియ కడుత్త స్వామియే శరణం అయ్యప్ప', transliteration: 'Siriya Kadutha Swamiye Saranam Ayyappa' },
          { id: 'sg-10', telugu: '10. వనదేవతా మారే శరణం అయ్యప్ప', transliteration: 'Vanadevatha Mare Saranam Ayyappa' },
          { id: 'sg-11', telugu: '11. దుర్గా భగవతియే శరణం అయ్యప్ప', transliteration: 'Durga Bhagavathiye Saranam Ayyappa' },
          { id: 'sg-12', telugu: '12. అచ్చన్ కోవిల్ అరసే శరణం అయ్యప్ప', transliteration: 'Achankovil Arase Saranam Ayyappa' },
          { id: 'sg-13', telugu: '13. అనంత రక్షకనే శరణం అయ్యప్ప', transliteration: 'Anantha Rakshakane Saranam Ayyappa' },
          { id: 'sg-14', telugu: '14. ఆపద్బాంధవనే శరణం అయ్యప్ప', transliteration: 'Aapadbandhavane Saranam Ayyappa' },
          { id: 'sg-15', telugu: '15. అనాథ రక్షకనే శరణం అయ్యప్ప', transliteration: 'Anatha Rakshakane Saranam Ayyappa' },
          { id: 'sg-16', telugu: '16. అన్నదాన ప్రభువే శరణం అయ్యప్ప', transliteration: 'Annadana Prabhuve Saranam Ayyappa' },
          { id: 'sg-17', telugu: '17. అచ్చం తవిర్ప్పవనే శరణం అయ్యప్ప', transliteration: 'Acham Thavirppavane Saranam Ayyappa' },
          { id: 'sg-18', telugu: '18. అంబలత్తు అరసే శరణం అయ్యప్ప', transliteration: 'Ambalathu Arase Saranam Ayyappa' },
          { id: 'sg-19', telugu: '19. అభయ ప్రదాయకనే శరణం అయ్యప్ప', transliteration: 'Abhaya Pradayakane Saranam Ayyappa' },
          { id: 'sg-20', telugu: '20. అహంతై అళిప్పవనే శరణం అయ్యప్ప', transliteration: 'Ahanthai Azippavane Saranam Ayyappa' },
          { id: 'sg-21', telugu: '21. అష్టసిద్ధి దాయకనే శరణం అయ్యప్ప', transliteration: 'Ashtasiddhi Dayakane Saranam Ayyappa' },
          { id: 'sg-22', telugu: '22. ఆనంద రూపనే శరణం అయ్యప్ప', transliteration: 'Ananda Roopane Saranam Ayyappa' },
          { id: 'sg-23', telugu: '23. ఇరుముడి ప్రియనే శరణం అయ్యప్ప', transliteration: 'Irumudi Priyane Saranam Ayyappa' },
          { id: 'sg-24', telugu: '24. ఇన్నిసై ప్రియనే శరణం అయ్యప్ప', transliteration: 'Innisai Priyane Saranam Ayyappa' },
          { id: 'sg-25', telugu: '25. ఇల్లర జ్యోతియే శరణం అయ్యప్ప', transliteration: 'Illara Jyothiye Saranam Ayyappa' },
          { id: 'sg-26', telugu: '26. ఈశ్వరున్ తిరుమగనే శరణం అయ్యప్ప', transliteration: 'Eshwaran Thirumagane Saranam Ayyappa' },
          { id: 'sg-27', telugu: '27. ఉలగ రక్షకనే శరణం అయ్యప్ప', transliteration: 'Ulaga Rakshakane Saranam Ayyappa' },
          { id: 'sg-28', telugu: '28. ఎరుమేలి శాస్తావే శరణం అయ్యప్ప', transliteration: 'Erumeli Sasthaave Saranam Ayyappa' },
          { id: 'sg-29', telugu: '29. ఎంగల్ కులదైవమే శరణం అయ్యప్ప', transliteration: 'Engal Kuladaivame Saranam Ayyappa' },
          { id: 'sg-30', telugu: '30. కాంతమలై జ్యోతియే శరణం అయ్యప్ప', transliteration: 'Kanthamalai Jyothiye Saranam Ayyappa' },
          { id: 'sg-31', telugu: '31. పంబానది తీరవాసనే శరణం అయ్యప్ప', transliteration: 'Pamba Nadhi Theeravasane Saranam Ayyappa' },
          { id: 'sg-32', telugu: '32. పందళ రాజకుమారనే శరణం అయ్యప్ప', transliteration: 'Pandala Rajakumarane Saranam Ayyappa' },
          { id: 'sg-33', telugu: '33. శబరి పీఠ ప్రియనే శరణం అయ్యప్ప', transliteration: 'Sabari Peetha Priyane Saranam Ayyappa' },
          { id: 'sg-34', telugu: '34. పదునెట్టాంపడి అధిపతియే శరణం అయ్యప్ప', transliteration: 'Padinettampadi Adhipathiye Saranam Ayyappa' },
          { id: 'sg-35', telugu: '35. తత్త్వమసి స్వరూపనే శరణం అయ్యప్ప', transliteration: 'Tatvamasi Swaroopane Saranam Ayyappa' },
          { id: 'sg-36', telugu: '36. మోహిని బాలకనే శరణం అయ్యప్ప', transliteration: 'Mohini Balakane Saranam Ayyappa' },
          { id: 'sg-37', telugu: '37. విలిపురత్తు వీరనే శరణం అయ్యప్ప', transliteration: 'Vilipurathu Veerane Saranam Ayyappa' },
          { id: 'sg-38', telugu: '38. ఘోర వనవాసనే శరణం అయ్యప్ప', transliteration: 'Ghora Vanavasane Saranam Ayyappa' },
          { id: 'sg-39', telugu: '39. పులివాహననే శరణం అయ్యప్ప', transliteration: 'Pulivahanane Saranam Ayyappa' },
          { id: 'sg-40', telugu: '40. భక్తవత్సలనే శరణం అయ్యప్ప', transliteration: 'Bhaktavatsalane Saranam Ayyappa' },
          { id: 'sg-41', telugu: '41. మకరజ్యోతి స్వరూపనే శరణం అయ్యప్ప', transliteration: 'Makarajyothi Swaroopane Saranam Ayyappa' },
          { id: 'sg-42', telugu: '42. కలియుగ వరదనే శరణం అయ్యప్ప', transliteration: 'Kaliyuga Varadane Saranam Ayyappa' },
          { id: 'sg-43', telugu: '43. ఓంకార స్వరూపనే శరణం అయ్యప్ప', transliteration: 'Omkara Swaroopane Saranam Ayyappa' },
          { id: 'sg-44', telugu: '44. స్వామియే శరణం అయ్యప్ప', transliteration: 'Swamiye Saranam Ayyappa' }
        ]
      }
    ]
  },

  // 7. AYYAPPA ASHTOTTARAM
  {
    id: 'ashtottaram',
    titleTelugu: '7. అయ్యప్ప అష్టోత్తర శత నామావళి',
    titleEnglish: 'Ayyappa Ashtottaram',
    subtitle: 'శ్రీ అయ్యప్ప స్వామి వారి 108 దివ్య నామావళి పుష్పార్చన',
    icon: 'BookOpen',
    durationMinutes: 12,
    featured: true,
    category: 'ayyappa',
    sections: [
      {
        title: 'శ్రీ అయ్యప్ప అష్టోత్తర శత నామావళి',
        description: 'ఓం శ్రీ స్వామినే నమః - ప్రతి నామానికి పుష్పము లేదా అక్షతలు సమర్పించవలెను',
        mantras: [
          { id: 'as-1', telugu: 'ఓం మహాశాస్త్రే నమః', transliteration: 'Om Mahashastre Namah' },
          { id: 'as-2', telugu: 'ఓం విశ్వశాస్త్రే నమః', transliteration: 'Om Vishwashastre Namah' },
          { id: 'as-3', telugu: 'ఓం లోకశాస్త్రే నమః', transliteration: 'Om Lokashastre Namah' },
          { id: 'as-4', telugu: 'ఓం ధర్మశాస్త్రే నమః', transliteration: 'Om Dharmashastre Namah' },
          { id: 'as-5', telugu: 'ఓం వేదశాస్త్రే నమః', transliteration: 'Om Vedashastre Namah' },
          { id: 'as-6', telugu: 'ఓం కాలశాస్త్రే నమః', transliteration: 'Om Kalashastre Namah' },
          { id: 'as-7', telugu: 'ఓం గజాధిపాయ నమః', transliteration: 'Om Gajadhipaya Namah' },
          { id: 'as-8', telugu: 'ఓం అంగారకాయ నమః', transliteration: 'Om Angarakaya Namah' },
          { id: 'as-9', telugu: 'ఓం అమృతేశాయ నమః', transliteration: 'Om Amriteshaya Namah' },
          { id: 'as-10', telugu: 'ఓం సూర్యతేజసే నమః', transliteration: 'Om Suryatejase Namah' },
          { id: 'as-11', telugu: 'ఓం సురేశ్వరాయ నమః', transliteration: 'Om Sureshwaraya Namah' },
          { id: 'as-12', telugu: 'ఓం జగద్గురవే నమః', transliteration: 'Om Jagadgurave Namah' },
          { id: 'as-13', telugu: 'ఓం సర్వలోకహితాయ నమః', transliteration: 'Om Sarvalokahitaya Namah' },
          { id: 'as-14', telugu: 'ఓం తత్త్వమసి స్వరూపాయ నమః', transliteration: 'Om Tatvamasi Swaroopaya Namah' },
          { id: 'as-15', telugu: 'ఓం మణికంఠాయ నమః', transliteration: 'Om Manikantaya Namah' },
          { id: 'as-16', telugu: 'ఓం మోహినీపుత్రాయ నమః', transliteration: 'Om Mohiniputraya Namah' },
          { id: 'as-17', telugu: 'ఓం శాంతాయ నమః', transliteration: 'Om Shantaya Namah' },
          { id: 'as-18', telugu: 'ఓం వరదాయ నమః', transliteration: 'Om Varadaya Namah' },
          { id: 'as-19', telugu: 'ఓం భక్తవత్సలాయ నమః', transliteration: 'Om Bhaktavatsalaya Namah' },
          { id: 'as-20', telugu: 'ఓం శబరీగిరీశాయ నమః', transliteration: 'Om Sabarigireeshaya Namah' },
          { id: 'as-21', telugu: 'ఓం స్వామినే నమః', transliteration: 'Om Swamine Namah' }
        ]
      }
    ]
  },

  // 8. BHUTHANATHA PANCHARATNAM
  {
    id: 'bhuthanatha-pancharatnam',
    titleTelugu: '8. భూతనాథ పంచరత్నం (లోకవీరం మహాపూజ్యం)',
    titleEnglish: 'Bhuthanatha Pancharatnam',
    subtitle: 'భూతనాథ పంచ రత్నం, నమస్కార శ్లోకం (13 శ్లోకాలు)',
    icon: 'Crown',
    durationMinutes: 6,
    featured: true,
    category: 'ayyappa',
    sections: [
      {
        title: 'భూతనాథ పంచ రత్నం, నమస్కార శ్లోకం',
        description: 'లోక వీరం మహా పూజ్యం - సంపూర్ణ 13 నమస్కార శ్లోకములు',
        mantras: [
          {
            id: 'bp-1',
            telugu: '1. లోకవీరం మహాపూజ్యం సర్వరక్షాకరం విభుమ్ |\nపార్వతీ హృదయానందం శాస్తారం ప్రణమామ్యహమ్ ||'
          },
          {
            id: 'bp-2',
            telugu: '2. విప్రపూజ్యం విశ్వవంద్యం విష్ణుశంభోః ప్రియం సుతమ్ |\nక్షిప్రప్రసాదనిరతం శాస్తారం ప్రణమామ్యహమ్ ||'
          },
          {
            id: 'bp-3',
            telugu: '3. మత్తమాతంగ గమనం కారుణ్యామృతపూరితమ్ |\nసర్వవిఘ్నహరం దేవం శాస్తారం ప్రణమామ్యహమ్ ||'
          },
          {
            id: 'bp-4',
            telugu: '4. అస్మత్కులేశ్వరం దేవం శత్రుచ్ఛేదననాశనమ్ |\nఅస్మదిష్ట ప్రదాతారం శాస్తారం ప్రణమామ్యహమ్ ||'
          },
          {
            id: 'bp-5',
            telugu: '5. పాండ్యేశవంశ తిలకం కేరళే కేళివిగ్రహమ్ |\nఆర్తత్రాణపరం దేవం శాస్తారం ప్రణమామ్యహమ్ ||'
          },
          {
            id: 'bp-6',
            telugu: '6. పంచరత్నాఖ్యమేతద్యో నిత్యం శుద్ధః పఠేన్నరః |\nతస్య ప్రసన్నో భగవాన్ శాస్తా వసతి మానసే ||'
          },
          {
            id: 'bp-7',
            telugu: '7. అరుణోదయ సంకాశం నీలకుండల ధారిణం |\nనీలాంబర ధరం దేవం వందేహం శంకరాత్మజం ||'
          },
          {
            id: 'bp-8',
            telugu: '8. చాప బాణం వామహస్తే, రౌప్య వేత్రంచ దక్షిణే |\nవిలసత్ కుండలధరం దేవం, వందేహం విష్ణు నందనం ||'
          },
          {
            id: 'bp-9',
            telugu: '9. వ్యాఘ్రారూఢం రక్తనేత్రం స్వర్ణమాలా విభూషణం |\nవీరపట్టధరం ఘోరం వందేహం శంభు నందనం ||'
          },
          {
            id: 'bp-10',
            telugu: '10. కింకిణ్యోడ్డాణ భూషితం, పూర్ణచంద్ర నిభాననం |\nకిరాత రూప శాస్తారం, వందేహం పాండ్యనందనం ||'
          },
          {
            id: 'bp-11',
            telugu: '11. భూతబేతాళ సం సేవ్యం కాంచనాద్రి నివాసినం |\nమణికంఠ మితిఖ్యాతం వందేహం శక్తి నందనం ||'
          },
          {
            id: 'bp-12',
            telugu: '12. భూత నాథ సదానందా, సర్వభూతా దయాపరా |\nరక్షరక్ష మహా బాహో, శాస్త్రేతుభ్యం నమోనమః ||\n(3 సార్లు పఠించవలెను)'
          },
          {
            id: 'bp-13',
            telugu: '13. శబరి పర్వతే పూజ్యం శాంతమానస సంస్థితం |\nభక్తాఘ పాపహంతారం అయ్యప్పన్ ప్రణమామ్యహమ్ ||'
          }
        ]
      }
    ]
  },

  // 9. MANGALA HARATHI
  {
    id: 'mangala-harathi',
    titleTelugu: '9. మంగళ హారతి',
    titleEnglish: 'Mangala Harathi',
    subtitle: 'స్వామివారికి కర్పూర మంగళ హారతి & నీరాజనం',
    icon: 'Flame',
    durationMinutes: 7,
    featured: true,
    category: 'ayyappa',
    sections: [
      {
        title: 'మంగళ హారతి స్తుతి',
        mantras: [
          {
            id: 'mh-1',
            telugu: 'ఆర్యవంశ సుజాతాయ సచ్చిదానంద మూర్తయే |\nసర్వలోక శరణ్యాయ శ్రీ అయ్యప్పాయ మంగళమ్ ||',
            transliteration: 'Aryavamsa Sujataya Satchidananda Moorthaye | Sarvaloka Sharanyaya Shri Ayyappaya Mangalam ||',
            meaning: 'ఉత్తమ ఆర్యవంశంలో అవతరించినవాడు, సచ్చిదానంద స్వరూపుడు, లోకములకు శరణ్యుడైన అయ్యప్ప స్వామికి మంగళం.'
          },
          {
            id: 'mh-2',
            telugu: 'మణికంఠాయ మహాతేజః శాస్త్రే శబరివాసినే |\nహరిహరపుత్రాయ భక్తానాం పాలకాయాస్తు మంగళమ్ ||',
            transliteration: 'Manikantaya Mahatejah Shastre Sabarivasine | Hariharaputraya Bhaktanam Palakayastu Mangalam ||'
          },
          {
            id: 'mh-3',
            telugu: 'కర్పూర గౌరం కరుణావతారం సంసారసారం భుజగేంద్రహారమ్ |\nసదావసంతం హృదయారవిందే భవం భవానీసహితం నమామి ||',
            transliteration: 'Karpura Gauram Karunavataram Samsarasaram Bhujagendraharam | Sadavasantam Hridayaravinde Bhavam Bhavanisahitam Namami ||'
          }
        ]
      }
    ]
  },

  // 10. MANTRAPUSHPAM
  {
    id: 'mantrapushpam',
    titleTelugu: '10. మంత్రపుష్పం',
    titleEnglish: 'Mantrapushpam',
    subtitle: 'వేదోక్త మంత్రపుష్ప సమర్పణ',
    icon: 'BookOpen',
    durationMinutes: 6,
    featured: false,
    category: 'ayyappa',
    sections: [
      {
        title: 'వేద మంత్రపుష్పం',
        mantras: [
          {
            id: 'mp-1',
            telugu: 'ఓం యోఽపాం పుష్పం వేద పుష్పవాన్ ప్రజావాన్ పశుమాన్ భవతి |\nచంద్రమా వా అపాం పుష్పమ్ పుష్పవాన్ ప్రజావాన్ పశుమాన్ భవతి |\nయ ఏవం వేద ||',
            transliteration: 'Om Yopam Pushpam Veda Pushpavan Prajavan Pashuman Bhavati | Chandrama Va Apam Pushpam Pushpavan Prajavan Pashuman Bhavati | Ya Evam Veda ||'
          },
          {
            id: 'mp-2',
            telugu: 'ఓం రాజాధిరాజాయ ప్రసహ్యసాహినే నమో వయం వైశ్రవణాయ కుర్మహే |\nస మే కామాన్ కామకామాయ మహ్యం కామేశ్వరో వైశ్రవణో దదాతు |\nకుబేరాయ వైశ్రవణాయ మహారాజాయ నమః ||',
            transliteration: 'Om Rajadhirajaya Prasahyasahine Namo Vayam Vaishravanaya Kurmahe | Sa Me Kaman Kamakamaya Mahyam Kameshwaro Vaishravano Dadatu | Kuberaya Vaishravanaya Maharajaya Namah ||'
          },
          {
            id: 'mp-3',
            telugu: 'శ్రీ హరిహరపుత్ర అయ్యప్ప స్వామినే నమః | సువర్ణ దివ్య మంత్రపుష్పం సమర్పయామి ||',
            transliteration: 'Shri Hariharaputra Ayyappa Swamine Namah | Suvarna Divya Mantrapushpam Samarpayami ||'
          }
        ]
      }
    ]
  },

  // 11. ATMA PRADAKSHINA
  {
    id: 'atma-pradakshina',
    titleTelugu: '11. ఆత్మ ప్రదక్షిణ నమస్కారం',
    titleEnglish: 'Atma Pradakshina',
    subtitle: 'సమస్త పాప నివారణార్థం ఆత్మ ప్రదక్షిణ శ్లోకములు',
    icon: 'RotateCcw',
    durationMinutes: 4,
    featured: false,
    category: 'ayyappa',
    sections: [
      {
        title: 'ఆత్మ ప్రదక్షిణ శ్లోకం',
        description: 'నిలబడి కుడివైపునకు మూడుసార్లు తిరుగుతూ ప్రదక్షిణ చేయవలెను',
        mantras: [
          {
            id: 'ap-rad-1',
            telugu: 'యానికానిచ పాపాని జన్మాంతరకృతాని చ |\nతాని తాని ప్రణశ్యంతి ప్రదక్షిణ పదే పదే ||',
            transliteration: 'Yani Kanicha Papani Janmantarakritani Cha | Tani Tani Pranashyanti Pradakshina Pade Pade ||',
            meaning: 'పూర్వ జన్మలలో గాని, ఈ జన్మలో గాని చేసిన సమస్త పాపములు ఈ ప్రదక్షిణము వలన అడుగడుగునా నశించుగాక.'
          },
          {
            id: 'ap-rad-2',
            telugu: 'పాపోఽహం పాపకర్మాఽహం పాపాత్మా పాపసంభవః |\nత్రాహి మాం కృపయా దేవ శరణాగతవత్సల ||\nఅన్యథా శరణం నాస్తి త్వమేవ శరణం మమ |\nతస్మాత్కారుణ్య భావేన రక్ష రక్ష శబరీగిరీశ్వర ||',
            transliteration: 'Papoham Papakarmaham Papatma Papasambhavah | Trahi Mam Kripaya Deva Saranagatavatsala || Anyatha Saranam Nasti Tvameva Saranam Mama | Tasmaatkarunya Bhavena Raksha Raksha Sabarigireeshwara ||',
            meaning: 'స్వామీ! నాకు నీవు తప్ప వేరే శరణు లేదు. నీ కారుణ్యంతో నన్ను రక్షించు శబరీగిరీశా!'
          }
        ]
      }
    ]
  },

  // 12. KSHAMAPANA MANTRAM
  {
    id: 'kshamapana-mantram',
    titleTelugu: '12. క్షమాపణ మంత్రం (పూజా సమాప్తి)',
    titleEnglish: 'Kshamapana Mantram',
    subtitle: 'తెలిసి తెలియక చేసిన దోషముల మన్నింపు ప్రార్థన',
    icon: 'ShieldCheck',
    durationMinutes: 4,
    featured: true,
    category: 'ayyappa',
    sections: [
      {
        title: 'క్షమాపణ ప్రార్థన',
        mantras: [
          {
            id: 'km-1',
            telugu: 'అపరాధ సహస్రాణి క్రియంతేఽహర్నిశం మయా |\nదాసోఽయమితి మాం మత్వా క్షమస్వ పరమేశ్వర ||',
            transliteration: 'Aparadha Sahasrani Kriyanteharnisham Maya | Dasoyamiti Mam Matwa Kshamaswa Parameshwara ||',
            meaning: 'స్వామీ, రాత్రింబవళ్ళు నాచేత వేలాది అపరాధములు జరుగుతుంటాయి. నన్ను నీ దాసునిగా భావించి క్షమించు.'
          },
          {
            id: 'km-2',
            telugu: 'కరచరణ కృతం వా కాయజం కర్మజం వా |\nశ్రవణ నయనజం వా మానసం వాపరాధమ్ |\nవిహితమవిహితం వా సర్వమేతత్ క్షమస్వ |\nజయ జయ కరుణాబ్ధే శ్రీ శబరీగిరీశ్వర ||\nస్వామియే శరణం అయ్యప్ప!',
            transliteration: 'Karacharana Kritam Va Kayajam Karmajam Va | Sravana Nayanajam Va Manasam Vaparadham | Vihitamavihitam Va Sarvametat Kshamaswa | Jaya Jaya Karunabdhe Shri Sabarigireeshwara || Swamiye Saranam Ayyappa!'
          }
        ]
      }
    ]
  },

  // 13. HARIVARASANAM
  {
    id: 'harivarasanam',
    titleTelugu: '13. హరివరాసనం (విశ్వమోహనం)',
    titleEnglish: 'Harivarasanam',
    subtitle: 'సన్నిధానం రాత్రి నిద్రోత్సవ గీతం - అత్యంత పవిత్ర స్తోత్రం',
    icon: 'Music',
    durationMinutes: 9,
    featured: true,
    category: 'ayyappa',
    sections: [
      {
        title: 'హరివరాసన స్తోత్రం (సంపూర్ణ అష్టకం)',
        description: 'రాత్రి వేళ స్వామికి హారతి అనంతరం పఠించే పరమ పవిత్ర స్తోత్రం',
        mantras: [
          {
            id: 'hv-1',
            telugu: 'హరివరాసనం విశ్వమోహనం |\nహరిదధీశ్వరం ఆరాధ్యపాదుకమ్ |\nఅరివిమర్దనం నిత్యనర్తనమ్ |\nహరిహరాత్మజం దేవమాశ్రయే || 1 ||\n(శరణం అయ్యప్ప స్వామి శరణం అయ్యప్ప)',
            transliteration: 'Harivarasanam Viswamohanam | Haridadhiswaram Aaradhyapadukam | Arivimardanam Nityanarthanam | Hariharatmajam Devamasraye || 1 ||',
            meaning: 'హరితో కూడిన ఆసనము కలవాడు, లోకములను మోహింపజేయువాడు, సకల దిక్కులకు అధీశ్వరుడు, నిత్య నర్తనుడైన హరిహరాత్మజుని ఆశ్రయిస్తున్నాను.'
          },
          {
            id: 'hv-2',
            telugu: 'శరణకీర్తనం శక్తమానసమ్ |\nభరణలోలుపం నర్తనాలసమ్ |\nఅరుణభాసురం భూతనాయకమ్ |\nహరిహరాత్మజం దేవమాశ్రయే || 2 ||\n(శరణం అయ్యప్ప స్వామి శరణం అయ్యప్ప)',
            transliteration: 'Saranakeerthanam Sakthamanasam | Bharanalolupam Narthanalasam | Arunabhasuram Bhoothanayakam | Hariharatmajam Devamasraye || 2 ||'
          },
          {
            id: 'hv-3',
            telugu: 'కలమృదుస్మితం సుందరాననమ్ |\nకలభకోమలం గాత్రమోహనమ్ |\nకలభకేసరీ వాజివాహనమ్ |\nహరిహరాత్మజం దేవమాశ్రయే || 3 ||\n(శరణం అయ్యప్ప స్వామి శరణం అయ్యప్ప)',
            transliteration: 'Kalamridusmitham Sundarananam | Kalabhakomalam Gaathramohanam | Kalabhakesaree Vaajivaahanam | Hariharatmajam Devamasraye || 3 ||'
          },
          {
            id: 'hv-4',
            telugu: 'శ్రితజనప్రియం చింతితప్రదమ్ |\nశృతివిభూషణం సాధుజీవనమ్ |\nశృతిమనోహరం గీతలాలసమ్ |\nహరిహరాత్మజం దేవమాశ్రయే || 4 ||\n(శరణం అయ్యప్ప స్వామి శరణం అయ్యప్ప)',
            transliteration: 'Srithajanapriyam Chinthithapradham | Sruthivibhooshanam Saadhujeevanam | Sruthimanoharam Geethalaalasam | Hariharatmajam Devamasraye || 4 ||'
          },
          {
            id: 'hv-5',
            telugu: 'ప్రణవసత్యకం ప్రౌఢకీర్తనమ్ |\nప్రణతపాలకం సుప్రభాంచితమ్ |\nత్రిభువనార్చితం దేవతాత్మకమ్ |\nహరిహరాత్మజం దేవమాశ్రయే || 5 ||\n(శరణం అయ్యప్ప స్వామి శరణం అయ్యప్ప)',
            transliteration: 'Pranavasatyakam Proudhakeerthanam | Pranatapalakam Suprabhanchitam | Tribhuvanarchitam Devatmakam | Hariharatmajam Devamasraye || 5 ||'
          },
          {
            id: 'hv-6',
            telugu: 'భవభయాపహం భావుకావహమ్ |\nభువనమోహనం భూతిభూషణమ్ |\nధవళవాహనం దివ్యవారణమ్ |\nహరిహరాత్మజం దేవమాశ్రయే || 6 ||\n(శరణం అయ్యప్ప స్వామి శరణం అయ్యప్ప)',
            transliteration: 'Bhavabhayapaham Bhavukavaham | Bhuvanamohanam Bhootibhooshanam | Dhavalavahanam Divyavaranam | Hariharatmajam Devamasraye || 6 ||'
          },
          {
            id: 'hv-7',
            telugu: 'కలమృదుధ్వనిం సుస్వరస్థితమ్ |\nవిమలపూజితం మోహనావహమ్ |\nత్రిదశవందితం వేదగౌరవమ్ |\nహరిహరాత్మజం దేవమాశ్రయే || 7 ||\n(శరణం అయ్యప్ప స్వామి శరణం అయ్యప్ప)',
            transliteration: 'Kalamridudhvanim Suswarasthitam | Vimalapoojitam Mohanavaham | Tridashavanditam Vedagauravam | Hariharatmajam Devamasraye || 7 ||'
          },
          {
            id: 'hv-8',
            telugu: 'త్రిభువనేశ్వరం దేవతాత్మకమ్ |\nనవమణిప్రభం వేదభాషితమ్ |\nవరదహస్తకం దివ్యభూషణమ్ |\nహరిహరాత్మజం దేవమాశ్రయే || 8 ||\n(శరణం అయ్యప్ప స్వామి శరణం అయ్యప్ప)',
            transliteration: 'Tribhuvaneshwaram Devatmakam | Navamaniprabham Vedabhaashitam | Varadahastakam Divyabhooshanam | Hariharatmajam Devamasraye || 8 ||'
          }
        ]
      }
    ]
  },

  // 14. 18 PADI PAATALU
  {
    id: 'padi-paatalu',
    titleTelugu: '14. పదునెట్టాంపడి (18 మెట్ల పాటలు)',
    titleEnglish: '18 Padi Paatalu',
    subtitle: 'సన్నిధానం 18 బంగారు మెట్ల ప్రాశస్త్యం & పాటలు',
    icon: 'Crown',
    durationMinutes: 10,
    featured: false,
    category: 'ayyappa',
    sections: [
      {
        title: '18 మెట్ల తత్వము & శరణు',
        description: 'ప్రతి మెట్టు ఒక్కో ఇంద్రియాన్ని, భావాన్ని దాటి మోక్షాన్ని పొందే మార్గాన్ని సూచిస్తుంది',
        mantras: [
          {
            id: 'padi-1',
            telugu: 'ఒకటవ మెట్టు: కంటి ఇంద్రియ నిగ్రహం - స్వామియే శరణం అయ్యప్ప\nరెండవ మెట్టు: చెవుల శ్రవణ నిగ్రహం - స్వామియే శరణం అయ్యప్ప\nమూడవ మెట్టు: జిహ్వ రుచి నిగ్రహం - స్వామియే శరణం అయ్యప్ప\nనాల్గవ మెట్టు: ఘ్రాణ ఇంద్రియ నిగ్రహం - స్వామియే శరణం అయ్యప్ప\nఐదవ మెట్టు: స్పర్శ ఇంద్రియ నిగ్రహం - స్వామియే శరణం అయ్యప్ప',
            transliteration: 'Padi 1 to 5: Panchendriya Nigraham - Swamiye Saranam Ayyappa'
          },
          {
            id: 'padi-2',
            telugu: 'ఆరవ నుండి పదకొండవ మెట్టు (అరిషడ్వర్గాలు): కామ, క్రోధ, లోభ, మోహ, మద, మాత్సర్యాల త్యాగం.\nపన్నెండవ నుండి పద్నాలుగవ మెట్టు (త్రిగుణాలు): సత్త్వ, రజో, తమో గుణాల సమన్వయం.\nపదిహేను & పదిహారవ మెట్టు: విద్యా, అవిద్యల జ్ఞానం.\nపదిహేడవ మెట్టు: అహంకార విసర్జన.\nపద్దెనిమిదవ మెట్టు: ఆత్మ సాక్షాత్కారం - తత్త్వమసి!',
            transliteration: 'Padi 6 to 18: Arishadvarga, Triguna and Atma Sakshatkaram - Tatvamasi!'
          }
        ]
      }
    ]
  },

  // 15. SRI MAHALAKSHMI ASHTOTTARAM (అమ్మవారి అష్టోత్తరం)
  {
    id: 'lakshmi-ashtottaram',
    titleTelugu: '15. శ్రీ మహాలక్ష్మి అష్టోత్తర శత నామావళి',
    titleEnglish: 'Sri Mahalakshmi Ashtottaram',
    subtitle: 'అష్టలక్ష్మి స్వరూపిణి శ్రీ లక్ష్మీదేవి 108 దివ్య నామావళి',
    icon: 'Sparkles',
    durationMinutes: 12,
    featured: true,
    category: 'ammavaru',
    sections: [
      {
        title: 'శ్రీ లక్ష్మీ అష్టోత్తర శత నామావళి',
        description: 'కుంకుమార్చన లేదా పుష్పార్చనతో అమ్మవారిని ఆరాధించుట',
        mantras: [
          { id: 'la-1', telugu: 'ఓం ప్రకృత్యై నమః', transliteration: 'Om Prakrityai Namah' },
          { id: 'la-2', telugu: 'ఓం వికృత్యై నమః', transliteration: 'Om Vikrityai Namah' },
          { id: 'la-3', telugu: 'ఓం విద్యాయై నమః', transliteration: 'Om Vidyayai Namah' },
          { id: 'la-4', telugu: 'ఓం సర్వభూతహితప్రదాయై నమః', transliteration: 'Om Sarvabhootahitapradayai Namah' },
          { id: 'la-5', telugu: 'ఓం శ్రద్ధాయై నమః', transliteration: 'Om Shraddhayai Namah' },
          { id: 'la-6', telugu: 'ఓం విభూత్యై నమః', transliteration: 'Om Vibhootyai Namah' },
          { id: 'la-7', telugu: 'ఓం సురభ్యై నమః', transliteration: 'Om Surabhyai Namah' },
          { id: 'la-8', telugu: 'ఓం పరమాత్మికాయై నమః', transliteration: 'Om Paramatmikayai Namah' },
          { id: 'la-9', telugu: 'ఓం వాచే నమః', transliteration: 'Om Vaache Namah' },
          { id: 'la-10', telugu: 'ఓం పద్మాలయాయై నమః', transliteration: 'Om Padmalayayai Namah' },
          { id: 'la-11', telugu: 'ఓం పద్మాయై నమః', transliteration: 'Om Padmayai Namah' },
          { id: 'la-12', telugu: 'ఓం శుచయే నమః', transliteration: 'Om Shuchaye Namah' },
          { id: 'la-13', telugu: 'ఓం స్వాహాయై నమః', transliteration: 'Om Swahayai Namah' },
          { id: 'la-14', telugu: 'ఓం స్వధాయై నమః', transliteration: 'Om Swadhayai Namah' },
          { id: 'la-15', telugu: 'ఓం సుధాయై నమః', transliteration: 'Om Sudhayai Namah' },
          { id: 'la-16', telugu: 'ఓం ధన్యాయై నమః', transliteration: 'Om Dhanyayai Namah' },
          { id: 'la-17', telugu: 'ఓం హిరణ్మయై నమః', transliteration: 'Om Hiranmayai Namah' },
          { id: 'la-18', telugu: 'ఓం లక్ష్మ్యై నమః', transliteration: 'Om Lakshmyai Namah' },
          { id: 'la-19', telugu: 'ఓం నిత్యపుష్టాయై నమః', transliteration: 'Om Nityapushtayai Namah' },
          { id: 'la-20', telugu: 'ఓం విభావర్యై నమః', transliteration: 'Om Vibhavaryai Namah' },
          { id: 'la-21', telugu: 'ఓం అదిత్యై నమః', transliteration: 'Om Adityai Namah' },
          { id: 'la-22', telugu: 'ఓం దిత్యై నమః', transliteration: 'Om Dityai Namah' },
          { id: 'la-23', telugu: 'ఓం దీప్తాయై నమః', transliteration: 'Om Deeptayai Namah' },
          { id: 'la-24', telugu: 'ఓం వసుధాయై నమః', transliteration: 'Om Vasudhayai Namah' },
          { id: 'la-25', telugu: 'ఓం వసుధారిణ్యై నమః', transliteration: 'Om Vasudharinyai Namah' },
          { id: 'la-26', telugu: 'ఓం కమలాయై నమః', transliteration: 'Om Kamalayai Namah' },
          { id: 'la-27', telugu: 'ఓం కాంతాయై నమః', transliteration: 'Om Kantayai Namah' },
          { id: 'la-28', telugu: 'ఓం కామాక్ష్యై నమః', transliteration: 'Om Kamakshyai Namah' },
          { id: 'la-29', telugu: 'ఓం క్షీరోదసంభవాయై నమః', transliteration: 'Om Ksheerodasambhavayai Namah' },
          { id: 'la-30', telugu: 'ఓం శ్రీ మహాలక్ష్మ్యై నమః', transliteration: 'Om Shri Mahalakshmyai Namah' }
        ]
      }
    ]
  },

  // 16. SRI MAHALAKSHMI ASHTAKAM
  {
    id: 'mahalakshmi-ashtakam',
    titleTelugu: '16. శ్రీ మహాలక్ష్మి అష్టకం',
    titleEnglish: 'Sri Mahalakshmi Ashtakam',
    subtitle: '"నమస్తేస్తు మహామాయే..." సంపూర్ణ అష్టక స్తోత్రం',
    icon: 'Crown',
    durationMinutes: 8,
    featured: true,
    category: 'ammavaru',
    sections: [
      {
        title: 'శ్రీ మహాలక్ష్మ్యష్టక స్తోత్రం (సంపూర్ణం)',
        description: 'నిత్యం సంధ్యా సమయంలో ఈ అష్టకాన్ని పఠించిన వారికి సకల సంపదలు కలుగును',
        mantras: [
          {
            id: 'la-ash-1',
            telugu: 'నమస్తేఽస్తు మహామాయే శ్రీపీఠే సురపూజితే |\nశంఖచక్ర గదాహస్తే మహాలక్ష్మి నమోఽస్తు తే || 1 ||',
            transliteration: 'Namastestu Mahamaye Shreepeethe Surapoojite | Shankhachakra Gadahaste Mahalakshmi Namostute || 1 ||',
            meaning: 'మహామాయా స్వరూపిణి, శ్రీపీఠంపై సురలచే పూజింపబడుదానా, శంఖ, చక్ర, గదలను ధరించిన ఓ శ్రీ మహాలక్ష్మీ దేవీ! నీకు నమస్కారములు.'
          },
          {
            id: 'la-ash-2',
            telugu: 'నమస్తే గరుడారూఢే కోలాసుర భయంకరి |\nసర్వపాపహరే దేవి మహాలక్ష్మి నమోఽస్తు తే || 2 ||',
            transliteration: 'Namaste Garudarudhe Kolasura Bhayankari | Sarvapapahare Devi Mahalakshmi Namostute || 2 ||',
            meaning: 'గరుడ వాహనాన్ని అధిరోహించినదానా, కోలాసురుడికి భయంకరిగా నిలిచినదానా, సమస్త పాపాలను హరించే ఓ మహాలక్ష్మీ దేవీ! నీకు నమస్కారములు.'
          },
          {
            id: 'la-ash-3',
            telugu: 'సర్వజ్ఞే సర్వవరదే సర్వదుష్ట భయంకరి |\nసర్వదుఃఖహరే దేవి మహాలక్ష్మి నమోఽస్తు తే || 3 ||',
            transliteration: 'Sarvajne Sarvavarade Sarvadushta Bhayankari | Sarvadukhhahare Devi Mahalakshmi Namostute || 3 ||',
            meaning: 'సమస్తం తెలిసిన సర్వజ్ఞురాలా, సర్వ వరాలను అనుగ్రహించుదానా, దుష్టులను దండించుదానా, సకల దుఃఖాలను తొలగించే ఓ మహాలక్ష్మీ దేవీ! నీకు ప్రణామములు.'
          },
          {
            id: 'la-ash-4',
            telugu: 'సిద్ధిబుద్ధిప్రదే దేవి భుక్తిముక్తి ప్రదాయిని |\nమంత్రమూర్తే సదా దేవి మహాలక్ష్మి నమోఽస్తు తే || 4 ||',
            transliteration: 'Siddhibuddhiprade Devi Bhuktimukti Pradayini | Mantramoorte Sada Devi Mahalakshmi Namostute || 4 ||',
            meaning: 'సిద్ధి, బుద్ధులను, భుక్తి, ముక్తులను ప్రసాదించుదానా, సాక్షాత్తు మంత్ర స్వరూపిణివైన ఓ మహాలక్ష్మీ! నీకు సదా ప్రణామములు.'
          },
          {
            id: 'la-ash-5',
            telugu: 'ఆద్యంతరహితే దేవి ఆద్యశక్తి మహేశ్వరి |\nయోగజ్ఞే యోగసంభూతే మహాలక్ష్మి నమోఽస్తు తే || 5 ||',
            transliteration: 'Aadyantarahite Devi Aadyashakti Maheshwari | Yogajne Yogasambhoote Mahalakshmi Namostute || 5 ||',
            meaning: 'ఆది అంతము లేనిదానా, ఆదిశక్తి స్వరూపిణివైన మహేశ్వరీ, యోగము తెలిసిన ఓ మహాలక్ష్మీ! నీకు నమస్కారములు.'
          },
          {
            id: 'la-ash-6',
            telugu: 'స్థూలసూక్ష్మ మహారౌద్రే మహాశక్తి మహోదరే |\nమహాపాపహరే దేవి మహాలక్ష్మి నమోఽస్తు తే || 6 ||',
            transliteration: 'Sthoolasookshma Maharaudre Mahashakti Mahodare | Mahapapahare Devi Mahalakshmi Namostute || 6 ||',
            meaning: 'స్థూల, సూక్ష్మ రూపములు కలదానా, మహాశక్తిమంతురాలా, మహాపాపాలను నశింపజేయు ఓ మహాలక్ష్మీ! నీకు ప్రణామములు.'
          },
          {
            id: 'la-ash-7',
            telugu: 'పద్మాసనస్థితే దేవి పరబ్రహ్మ స్వరూపిణి |\nపరమేశి జగన్మాతః మహాలక్ష్మి నమోఽస్తు తే || 7 ||',
            transliteration: 'Padmasanasthite Devi Parabrahma Swaroopini | Parameshi Jaganmatah Mahalakshmi Namostute || 7 ||',
            meaning: 'కమలాసనమునందు ఆసీనురాలైనదానా, పరబ్రహ్మ స్వరూపిణి, సకల జగన్మాతవైన ఓ మహాలక్ష్మీ! నీకు నమస్కారములు.'
          },
          {
            id: 'la-ash-8',
            telugu: 'శ్వేతాంబరధరే దేవి నానాలంకార భూషితే |\nజగత్స్థితే జగన్మాతః మహాలక్ష్మి నమోఽస్తు తే || 8 ||',
            transliteration: 'Shwetambaradhare Devi Nanalankara Bhooshite | Jagatsthite Jaganmatah Mahalakshmi Namostute || 8 ||',
            meaning: 'శ్వేత వస్త్రములను ధరించినదానా, సమస్త ఆభరణాలచే అలంకరింపబడిన జగన్మాతవైన ఓ మహాలక్ష్మీ! నీకు సదా నమస్కారములు.'
          },
          {
            id: 'la-ash-9',
            telugu: 'ఫలశ్రుతి:\nమహాలక్ష్మ్యష్టకం స్తోత్రం యః పఠేద్భక్తిమాన్నరః |\nసర్వసిద్ధిమవాప్నోతి రాజ్యం ప్రాప్నోతి సర్వదా ||\nఏకకాలే పఠేన్నిత్యం మహాపాపవినాశనమ్ |\nద్వికాలం యః పఠేన్నిత్యం ధనధాన్యసమన్వితః |\nత్రికాలం యః పఠేన్నిత్యం మహాశత్రువినాశనమ్ |\nమహాలక్ష్మీర్భవేన్నిత్యం ప్రసన్నా వరదా శుభా ||',
            transliteration: 'Phalashruti: Mahalakshmyashtakam Stotram Yah Pathedbhaktiman Narah | Sarvasiddhim Avapnoti Rajyam Prapnoti Sarvada ||',
            meaning: 'ఈ మహాలక్ష్మ్యష్టకాన్ని భక్తితో పఠించినవారికి సమస్త సిద్ధులు, ధనధాన్యాలు, సంపూర్ణ అమ్మవారి కటాక్షం కలుగును.'
          }
        ]
      }
    ]
  },

  // 17. MALIKAPURATHAMMA POOJA (శబరిమల అమ్మవారు)
  {
    id: 'malikapurathamma-pooja',
    titleTelugu: '17. మాళికాపురత్తమ్మ దేవి పూజ',
    titleEnglish: 'Malikapurathamma Devi Pooja',
    subtitle: 'శబరిమల మంజమ్మ దేవి ధ్యానం, అష్టోత్తరం & స్తుతి',
    icon: 'Sparkle',
    durationMinutes: 7,
    featured: true,
    category: 'ammavaru',
    sections: [
      {
        title: 'మాళికాపురత్తు మంజమ్మ దేవి ధ్యానం',
        description: 'అయ్యప్ప స్వామి సన్నిధానం చెంత కొలువై ఉన్న మాతృమూర్తి ఆరాధన',
        mantras: [
          {
            id: 'ma-1',
            telugu: 'మాళికాపురత్తు మంజమ్మ దేవి లోకమాతావే శరణం అయ్యప్ప |\nశ్రీ రాజరాజేశ్వరి స్వరూపిణ్యై నమః |\nసర్వమంగళ మాంగల్యే శివే సర్వార్థ సాధికే |\nశరణ్యే త్ర్యంబకే గౌరి నారాయణి నమోఽస్తు తే ||',
            transliteration: 'Malikapurathu Manjamma Devi Lokamathave Saranam Ayyappa | Shri Rajarajeshwari Swaroopinyai Namah | Sarvamangala Mangalye Shive Sarvartha Sadhike | Sharanye Tryambake Gauri Narayani Namostute ||',
            meaning: 'సకల లోకములకు మాతృమూర్తియైన మాళికాపురత్తమ్మ దేవికి నమస్కారములు. సమస్త మంగళములను కూర్చు శుభకారిణివైన గౌరీ దేవికి ప్రణామములు.'
          },
          {
            id: 'ma-2',
            telugu: 'ఓం మంగళరూపిణ్యై నమః | ఓం శబరిపీఠవాసిన్యై నమః | ఓం భక్తసౌభాగ్యదాయై నమః | ఓం మంజమ్మ దేవ్యై నమః ||',
            transliteration: 'Om Mangalaroopinyai Namah | Om Sabaripeethavasinyai Namah | Om Bhaktasaubhagyadayai Namah | Om Manjamma Devyai Namah ||'
          }
        ]
      }
    ]
  },

  // 18. AMMAVARI MANGALA HARATHI
  {
    id: 'ammavari-harathi',
    titleTelugu: '18. అమ్మవారి మంగళ హారతులు',
    titleEnglish: 'Ammavari Mangala Harathi',
    subtitle: 'శ్రీ లక్ష్మీదేవి & దుర్గా భవాని దివ్య మంగళ హారతులు',
    icon: 'Flame',
    durationMinutes: 6,
    featured: false,
    category: 'ammavaru',
    sections: [
      {
        title: 'శ్రీ మహాలక్ష్మి మంగళ హారతి',
        mantras: [
          {
            id: 'amh-1',
            telugu: 'జయ జయ దేవి మహాలక్ష్మి మంగళ హారతి గైకొనుమా |\nకమలవాసిని కరుణామయి మా ఇంట సిరులు నింపుమమ్మా ||\nరత్న ఖచిత కిరీటధారిణి శంఖ చక్ర హస్తములా |\nభక్త జనార్తి నివారిణి మంగళ హారతి గైకొనుమా ||\n|| జయ మంగళం నిత్య శుభ మంగళం ||',
            transliteration: 'Jaya Jaya Devi Mahalakshmi Mangala Harathi Gaikonuma | Kamalavasini Karunamayi Maa Inta Sirulu Nimpumamma ||'
          },
          {
            id: 'amh-2',
            telugu: 'భాగ్యద లక్ష్మి బారమ్మ నమ్మమ్మ నీ సౌభాగ్యద లక్ష్మి బారమ్మ |\nహెజ్జెయ మేలే హెజ్జెయనిక్కుత గజ్జెయ కాల్గల ధ్వనియను మాడుత |\nభాగ్యద లక్ష్మి బారమ్మ ||',
            transliteration: 'Bhagyada Lakshmi Baramma Nammamma Nee Saubhagyada Lakshmi Baramma | Hejjeya Mele Hejjeyanikkuta Gajjeya Kaalgala Dhvaniyanu Maduta | Bhagyada Lakshmi Baramma ||',
            meaning: 'సౌభాగ్యాన్ని ప్రసాదించే ఓ లక్ష్మీ దేవీ, నీ చిరుగజ్జెల సవ్వడులతో మా గృహమునకు విజయము చేయుమమ్మా.'
          }
        ]
      }
    ]
  },

  // 19. KANAKADHARA STOTRAM
  {
    id: 'kanakadhara-stotram',
    titleTelugu: '19. శ్రీ కనకధారా స్తోత్రం',
    titleEnglish: 'Sri Kanakadhara Stotram',
    subtitle: 'శ్రీ ఆదిశంకరాచార్య విరచిత స్వర్ణవృష్టి దివ్య స్తోత్రం',
    icon: 'Sparkles',
    durationMinutes: 10,
    featured: true,
    category: 'ammavaru',
    sections: [
      {
        title: 'కనకధారా స్తోత్ర శ్లోకములు',
        description: 'దారిద్ర్య నివారణార్థం శ్రీ మహాలక్ష్మి కటాక్ష సిద్ధి స్తోత్రం',
        mantras: [
          {
            id: 'kd-1',
            telugu: 'అంగం హరేః పులకభూషణమాశ్రయంతీ\nభృంగాంగనేవ ముకులాభరణం తమాలమ్ |\nఅంగీకృతాఖిల విభూతిరపాంగలీలా\nమాంగళ్యదాస్తు మమ మంగళదేవతాయాః || 1 ||',
            transliteration: 'Angam Hareh Pulakabhooshanam Aasrayantee Bhringanganeva Mukulabharanam Tamalam | Angeekritaakhila Vibhootir Apaangaleela Maangalyadaastu Mama Mangaladevataayaah || 1 ||',
            meaning: 'తమాలా వృక్షాన్ని ఆశ్రయించిన భ్రమరం వలె శ్రీహరి వక్షఃస్థలాన్ని ఆశ్రయించి ఉన్న లక్ష్మీదేవి కటాక్షం నాకు సమస్త మంగళములను ప్రసాదించుగాక.'
          },
          {
            id: 'kd-2',
            telugu: 'ముగ్ధా ముహుర్విదధతీ వదనే మురారేః\nప్రేమత్రపాప్రణిహితాని గతాగతాని |\nమాలా దృశోర్మధుకరీవ మహోత్పలే యా\nసా మే శ్రియం దిశతు సాగరసంభవాయాః || 2 ||',
            transliteration: 'Mugdha Muhur Vidadhati Vadane Murareh Prematrapapranihitani Gatagatani | Mala Drishor Madhukareeva Mahotpale Ya Sa Me Shriyam Dishatu Sagarasambhavayah || 2 ||',
            meaning: 'మురారి ముఖారవిందంపై ప్రేమతో, సిగ్గుతో కదలాడే సముద్రరాజ తనయ లక్ష్మీదేవి చూపులు నాకు సకల సంపదలను అనుగ్రహించుగాక.'
          },
          {
            id: 'kd-3',
            telugu: 'విశ్వామరేంద్ర పదవిభ్రమ దానదక్షం\nఆనందహేతురధికం మురవిద్విషోఽపి |\nఈషన్నిషీదతు మయి క్షణమీక్షణార్థం\nఇందీవరోదర సహోదరమిందిరాయాః || 3 ||',
            transliteration: 'Vishwamarendra Pada Vibhrama Danadaksham Ananda Hetur Adhikam Muravidvishopi | Eeshannasheedatu Mayi Kshanameekshanartham Indeevarodara Sahodaram Indirayah || 3 ||',
            meaning: 'దేవేంద్ర పదవినైనా ఇవ్వగల సామర్థ్యం గల ఇందిరాదేవి కరుణాకటాక్ష వీక్షణం నాపై ప్రసరించుగాక.'
          }
        ]
      }
    ]
  },

  // 20. DURGA ASHTOTTARAM
  {
    id: 'durga-ashtottaram',
    titleTelugu: '20. శ్రీ దుర్గా అష్టోత్తర శత నామావళి',
    titleEnglish: 'Sri Durga Ashtottaram',
    subtitle: 'దుర్గతి నాశిని శ్రీ దుర్గాదేవి 108 దివ్య నామావళి',
    icon: 'ShieldCheck',
    durationMinutes: 10,
    featured: false,
    category: 'ammavaru',
    sections: [
      {
        title: 'శ్రీ దుర్గాష్టోత్తర శత నామావళి',
        description: 'సకల శత్రు, రోగ, భయ నివారణకై దుర్గా నామస్మరణ',
        mantras: [
          { id: 'da-1', telugu: 'ఓం దుర్గాయై నమః', transliteration: 'Om Durgayai Namah' },
          { id: 'da-2', telugu: 'ఓం శివాయై నమః', transliteration: 'Om Shivayai Namah' },
          { id: 'da-3', telugu: 'ఓం మహాలక్ష్మ్యై నమః', transliteration: 'Om Mahalakshmyai Namah' },
          { id: 'da-4', telugu: 'ఓం మహావిద్యాయై నమః', transliteration: 'Om Mahavidyayai Namah' },
          { id: 'da-5', telugu: 'ఓం భవాన్యై నమః', transliteration: 'Om Bhavanyai Namah' },
          { id: 'da-6', telugu: 'ఓం చండికాయై నమః', transliteration: 'Om Chandikayai Namah' },
          { id: 'da-7', telugu: 'ఓం కాళ్యై నమః', transliteration: 'Om Kalyai Namah' },
          { id: 'da-8', telugu: 'ఓం భద్రకాళ్యై నమః', transliteration: 'Om Bhadrakalyai Namah' },
          { id: 'da-9', telugu: 'ఓం జగన్మాత్రే నమః', transliteration: 'Om Jaganmatre Namah' },
          { id: 'da-10', telugu: 'ఓం సర్వమంగళాయై నమః', transliteration: 'Om Sarvamangalayai Namah' }
        ]
      }
    ]
  }
];
