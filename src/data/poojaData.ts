import { PoojaCategory, GuruInfo } from '../types';
import { PADI_SONG } from './songsData';

export const GURU_SWAMI_DETAILS: GuruInfo = {
  name: 'శ్రీ శ్రీ శ్రీ ఆడేపు బ్రహ్మం గురుస్వామి',
  nameEnglish: 'Sri Sri Sri Adepu Brahmam Guruswami',
  title: 'అయ్యప్ప దీక్షా గురువులు & మండల దీక్షా మార్గదర్శకులు',
  titleEnglish: 'Ayyappa Deeksha Guru & Mandala Deeksha Spiritual Guide',
  location: 'రాంనగర్, హైదరాబాద్',
  locationEnglish: 'Ramnagar, Hyderabad',
  description: 'గురు ముఖతః దీక్షను స్వీకరించి, భక్తి శ్రద్ధలతో 41 రోజుల మండల దీక్షను ఆచరించడం ద్వారా పరమేశ్వరుడైన అయ్యప్ప స్వామి అనుగ్రహం కలుగుతుంది. గురువే దైవం, గురు వాక్యమే వేదం.',
  descriptionEnglish: 'By receiving sacred Deeksha through the Guru and observing the 41-day Mandala Deeksha with sincere devotion, one attains the divine grace of Lord Ayyappa Swamy. The Guru is God, and the Guru’s word is sacred truth.',
  mantram: 'గురుర్బ్రహ్మ గురుర్విష్ణుః గురుర్దేవో మహేశ్వరః |\nగురుః సాక్షాత్ పరబ్రహ్మ తస్మై శ్రీ గురవే నమః ||',
  mantramEnglish: 'Gurur Brahma Gurur Vishnuh Gurur Devo Maheshwarah |\nGuruh Sakshat Parabrahma Tasmai Shri Gurave Namah ||',
  teachings: [
    'తత్త్వమసి - "నీవే ఆ పరబ్రహ్మవు" అనే పరమ సత్యాన్ని అనుభవపూర్వకంగా గ్రహించు.',
    'ప్రతి ప్రాణిని అయ్యప్ప స్వరూపంగా భావించి సాటి భక్తులను "స్వామి" అని పిలువు.',
    'సత్యం, ధర్మం, అహింస, భూతదయ, ఇంద్రియ నిగ్రహం తప్పక పాటించు.',
    'శరణు ఘోషతో మనస్సును సదా పవిత్రంగా, భక్తి భావంతో నింపుకో.',
    'ఇరుముడి మోసేటప్పుడు ఆత్మ సమర్పణ భావంతో స్వామి సన్నిధానాన్ని చేరుకో.'
  ],
  teachingsEnglish: [
    'Tatvamasi - Realize through direct experience the supreme truth that "Thou Art That" (You are that Divine Supreme Self).',
    'See the divine form of Lord Ayyappa in every living being and respectfully address fellow devotees as "Swami".',
    'Steadfastly practice truth, righteousness (dharma), non-violence, compassion to all beings, and control of the senses.',
    'Keep the mind continuously pure and filled with deep devotional surrender through the chanting of Sharanu Ghosha.',
    'When carrying the sacred Irumudi, approach Lord Ayyappa’s holy Sannidhanam with complete self-surrender.'
  ],
  deekshaRules: [
    'నిత్యం సూర్యోదయానికి ముందు, సూర్యాస్తమయం తర్వాత చన్నీటి స్నానం చేయాలి.',
    'శ్రీ గురుస్వామి పాద నమస్కారం & అయ్యప్ప నిత్య పూజ తప్పనిసరిగా ఆచరించాలి.',
    'నల్లని, నీలి లేదా కాషాయ వస్త్రాలు మాత్రమే ధరించాలి (తులసి లేదా రుద్రాక్ష మాల ధారణ).',
    'ఏకభుక్తం (సాత్విక ఆహారం) స్వీకరించాలి. ఉల్లి, వెల్లుల్లి, మద్య, మాంస, ధూమపానాలు నిషిద్ధం.',
    'పాదరక్షలు ధరించరాదు. కేవలం నేలమీద చాపపై మాత్రమే శయనించాలి (భూశయనం).',
    'ఎవరినీ దూషించరాదు, అబద్ధం చెప్పరాదు, క్రోధాన్ని పూర్తిగా జయించాలి.'
  ],
  deekshaRulesEnglish: [
    'Take a cold water bath twice daily, once before sunrise and once after sunset.',
    'Mandatory prostration at the holy feet of Sri Guruswami and daily performance of Sri Ayyappa Nithya Pooja.',
    'Wear only black, dark blue, or saffron clothing, along with a sacred Tulasi or Rudraksha mala.',
    'Eat only once a day (pure satvic food). Onion, garlic, alcohol, non-vegetarian food, and smoking are strictly forbidden.',
    'Do not wear footwear. Sleep strictly on a simple mat on the floor (Bhoosayanam).',
    'Do not criticize anyone, do not speak untruth, and completely conquer anger.'
  ]
};

export const POOJA_CATEGORIES: PoojaCategory[] = [
  // 1. GURU VANDANAM
  {
    id: 'guru-vandanam',
    titleTelugu: 'గురు వందనం',
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
            transliteration: 'Gurur Brahma Gurur Vishnuh Gurur Devo Maheshwarah |\nGuruh Sakshat Parabrahma Tasmai Shri Gurave Namah ||',
            meaning: 'గురువే సృష్టికర్తయైన బ్రహ్మ, స్థితికారుడైన విష్ణువు, లయకారుడైన మహేశ్వరుడు. సాక్షాత్తూ పరబ్రహ్మ స్వరూపుడైన ఆ శ్రీ గురువునకు నమస్కారములు.'
          },
          {
            id: 'gv-2',
            telugu: 'అఖండ మండలాకారం వ్యాప్తం యేన చరాచరమ్ |\nతత్పదం దర్శితం యేన తస్మై శ్రీ గురవే నమః ||',
            transliteration: 'Akhanda Mandalakaram Vyaptam Yena Characharam |\nTatpadam Darshitam Yena Tasmai Shri Gurave Namah ||',
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
    titleTelugu: 'గణపతి పూజ',
    titleEnglish: 'Ganapathi Pooja',
    subtitle: 'దీపారాధన, వినాయక ధ్యానం, అంగపూజ & 108 అష్టోత్తరం',
    icon: 'Sun',
    durationMinutes: 15,
    featured: true,
    category: 'ayyappa',
    sections: [
      {
        title: 'దీపారాధన & ఆచమనం',
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
          }
        ]
      },
      {
        title: 'వినాయక అంగపూజ',
        description: 'పుష్పములతో వినాయకుని దివ్య అంగములను పూజించుట',
        mantras: [
          {
            "id": "gp-ang-1",
            "telugu": "ఓం గణేశాయ నమః\n- పాదౌ పూజయామి",
            "transliteration": "Om Ganeshaya Namah - Padau Pujayami"
          },
          {
            "id": "gp-ang-2",
            "telugu": "ఓం ఏకదంతాయ నమః\n- గుల్ఫౌ పూజయామి",
            "transliteration": "Om Ekadantaya Namah - Gulphau Pujayami"
          },
          {
            "id": "gp-ang-3",
            "telugu": "ఓం శూర్పకర్ణాయ నమః\n- జానునీ పూజయామి",
            "transliteration": "Om Shurpakarnaya Namah - Januni Pujayami"
          },
          {
            "id": "gp-ang-4",
            "telugu": "ఓం విఘ్నరాజాయ నమః\n- జంఘే పూజయామి",
            "transliteration": "Om Vighnarajaya Namah - Janghe Pujayami"
          },
          {
            "id": "gp-ang-5",
            "telugu": "ఓం ఆఖువాహనాయ నమః\n- ఊరూ పూజయామి",
            "transliteration": "Om Akhuvahanaya Namah - Uru Pujayami"
          },
          {
            "id": "gp-ang-6",
            "telugu": "ఓం హేరంబాయ నమః\n- కటిం పూజయామి",
            "transliteration": "Om Herambaya Namah - Katim Pujayami"
          },
          {
            "id": "gp-ang-7",
            "telugu": "ఓం లంబోదరాయ నమః\n- ఉదరం పూజయామి",
            "transliteration": "Om Lambodaraya Namah - Udaram Pujayami"
          },
          {
            "id": "gp-ang-8",
            "telugu": "ఓం గణనాథాయ నమః\n- నాభిం పూజయామి",
            "transliteration": "Om Gananathaya Namah - Nabhim Pujayami"
          },
          {
            "id": "gp-ang-9",
            "telugu": "ఓం గణేశాయ నమః\n- హృదయం పూజయామి",
            "transliteration": "Om Ganeshaya Namah - Hridayam Pujayami"
          },
          {
            "id": "gp-ang-10",
            "telugu": "ఓం స్థూలకంఠాయ నమః\n- కంఠం పూజయామి",
            "transliteration": "Om Sthulakanthaya Namah - Kantham Pujayami"
          },
          {
            "id": "gp-ang-11",
            "telugu": "ఓం గజవక్త్రాయ నమః\n- వక్త్రం పూజయామి",
            "transliteration": "Om Gajavaktraya Namah - Vaktram Pujayami"
          },
          {
            "id": "gp-ang-12",
            "telugu": "ఓం విఘ్నహంత్రే నమః\n- నేత్రం పూజయామి",
            "transliteration": "Om Vighnahantre Namah - Netram Pujayami"
          },
          {
            "id": "gp-ang-13",
            "telugu": "ఓం శూర్పకర్ణాయ నమః\n- కర్ణౌ పూజయామి",
            "transliteration": "Om Shurpakarnaya Namah - Karnau Pujayami"
          },
          {
            "id": "gp-ang-14",
            "telugu": "ఓం ఫాలచంద్రాయ నమః\n- లలాటం పూజయామి",
            "transliteration": "Om Phalachandraya Namah - Lalatam Pujayami"
          },
          {
            "id": "gp-ang-15",
            "telugu": "ఓం సర్వేశ్వరాయ నమః\n- శిరః పూజయామి",
            "transliteration": "Om Sarveshvaraya Namah - Shirah Pujayami"
          },
          {
            "id": "gp-ang-16",
            "telugu": "ఓం విఘ్నరాజాయ నమః\n- సర్వాణ్యంగాని పూజయామి",
            "transliteration": "Om Vighnarajaya Namah - Sarvanyangani Pujayami"
          }
        ]
      },
      {
        // Names 94–108 added at the user's request to complete the 108-name selection.
        // Source: https://siddhivinayakdevsthan.org/108NameOfGanesha.aspx
        title: 'శ్రీ వినాయక అష్టోత్తర శత నామావళి (108)',
        description: 'ప్రతి నామానికి పుష్పము లేదా అక్షతలను సమర్పించవలెను',
        mantras: [
          {
            "id": "gp-ash-1",
            "telugu": "1. ఓం గజాననాయ నమః",
            "transliteration": "1. Om Gajananaya Namah"
          },
          {
            "id": "gp-ash-2",
            "telugu": "2. ఓం విఘ్నరాజాయ నమః",
            "transliteration": "2. Om Vighnarajaya Namah"
          },
          {
            "id": "gp-ash-3",
            "telugu": "3. ఓం గణాధ్యక్షాయ నమః",
            "transliteration": "3. Om Ganadhyakshaya Namah"
          },
          {
            "id": "gp-ash-4",
            "telugu": "4. ఓం వినాయకాయ నమః",
            "transliteration": "4. Om Vinayakaya Namah"
          },
          {
            "id": "gp-ash-5",
            "telugu": "5. ఓం ద్వైమాతురాయ నమః",
            "transliteration": "5. Om Dvaimaturaya Namah"
          },
          {
            "id": "gp-ash-6",
            "telugu": "6. ఓం ద్విముఖాయ నమః",
            "transliteration": "6. Om Dvimukhaya Namah"
          },
          {
            "id": "gp-ash-7",
            "telugu": "7. ఓం ప్రముఖాయ నమః",
            "transliteration": "7. Om Pramukhaya Namah"
          },
          {
            "id": "gp-ash-8",
            "telugu": "8. ఓం సుప్రదీపాయ నమః",
            "transliteration": "8. Om Supradipaya Namah"
          },
          {
            "id": "gp-ash-9",
            "telugu": "9. ఓం సుముఖాయ నమః",
            "transliteration": "9. Om Sumukhaya Namah"
          },
          {
            "id": "gp-ash-10",
            "telugu": "10. ఓం సుఖ నిధయే నమః",
            "transliteration": "10. Om Sukha Nidhaye Namah"
          },
          {
            "id": "gp-ash-11",
            "telugu": "11. ఓం సురాధ్యక్షాయ నమః",
            "transliteration": "11. Om Suradhyakshaya Namah"
          },
          {
            "id": "gp-ash-12",
            "telugu": "12. ఓం సురారిఘ్నాయ నమః",
            "transliteration": "12. Om Surarighnaya Namah"
          },
          {
            "id": "gp-ash-13",
            "telugu": "13. ఓం మహా కాలాయ నమః",
            "transliteration": "13. Om Maha Kalaya Namah"
          },
          {
            "id": "gp-ash-14",
            "telugu": "14. ఓం మహా బలాయ నమః",
            "transliteration": "14. Om Maha Balaya Namah"
          },
          {
            "id": "gp-ash-15",
            "telugu": "15. ఓం హేరంబాయ నమః",
            "transliteration": "15. Om Herambaya Namah"
          },
          {
            "id": "gp-ash-16",
            "telugu": "16. ఓం లంబ జఠరాయ నమః",
            "transliteration": "16. Om Lamba Jatharaya Namah"
          },
          {
            "id": "gp-ash-17",
            "telugu": "17. ఓం హ్రస్వ గ్రీవాయ నమః",
            "transliteration": "17. Om Hrasva Greevaya Namah"
          },
          {
            "id": "gp-ash-18",
            "telugu": "18. ఓం మహోదరాయ నమః",
            "transliteration": "18. Om Mahodaraya Namah"
          },
          {
            "id": "gp-ash-19",
            "telugu": "19. ఓం మదోత్కటాయ నమః",
            "transliteration": "19. Om Madotkataya Namah"
          },
          {
            "id": "gp-ash-20",
            "telugu": "20. ఓం మంత్రిణే నమః",
            "transliteration": "20. Om Mantrine Namah"
          },
          {
            "id": "gp-ash-21",
            "telugu": "21. ఓం మహావీరాయ నమః",
            "transliteration": "21. Om Mahaveeraya Namah"
          },
          {
            "id": "gp-ash-22",
            "telugu": "22. ఓం మంగళ స్వరాయ నమః",
            "transliteration": "22. Om Mangala Svaraya Namah"
          },
          {
            "id": "gp-ash-23",
            "telugu": "23. ఓం ప్రమథాయ నమః",
            "transliteration": "23. Om Pramathaya Namah"
          },
          {
            "id": "gp-ash-24",
            "telugu": "24. ఓం ప్రథమాయ నమః",
            "transliteration": "24. Om Prathamaya Namah"
          },
          {
            "id": "gp-ash-25",
            "telugu": "25. ఓం ప్రాజ్ఞాయ నమః",
            "transliteration": "25. Om Prajnaya Namah"
          },
          {
            "id": "gp-ash-26",
            "telugu": "26. ఓం విఘ్నకర్త్రే నమః",
            "transliteration": "26. Om Vighnakartre Namah"
          },
          {
            "id": "gp-ash-27",
            "telugu": "27. ఓం విఘ్నహంత్రే నమః",
            "transliteration": "27. Om Vighnahantre Namah"
          },
          {
            "id": "gp-ash-28",
            "telugu": "28. ఓం విశ్వ నేత్రే నమః",
            "transliteration": "28. Om Vishva Netre Namah"
          },
          {
            "id": "gp-ash-29",
            "telugu": "29. ఓం విరాట్పతయే నమః",
            "transliteration": "29. Om Viratpataye Namah"
          },
          {
            "id": "gp-ash-30",
            "telugu": "30. ఓం శ్రీపతయే నమః",
            "transliteration": "30. Om Sreepataye Namah"
          },
          {
            "id": "gp-ash-31",
            "telugu": "31. ఓం కృతినే నమః",
            "transliteration": "31. Om Kritine Namah"
          },
          {
            "id": "gp-ash-32",
            "telugu": "32. ఓం వాక్పతయే నమః",
            "transliteration": "32. Om Vakpataye Namah"
          },
          {
            "id": "gp-ash-33",
            "telugu": "33. ఓం శృంగారిణే నమః",
            "transliteration": "33. Om Shringarine Namah"
          },
          {
            "id": "gp-ash-34",
            "telugu": "34. ఓం ఆశ్రిత వత్సలాయ నమః",
            "transliteration": "34. Om Ashrita Vatsalaya Namah"
          },
          {
            "id": "gp-ash-35",
            "telugu": "35. ఓం శివప్రియాయ నమః",
            "transliteration": "35. Om Shivapriyaya Namah"
          },
          {
            "id": "gp-ash-36",
            "telugu": "36. ఓం శీఘ్రకారిణే నమః",
            "transliteration": "36. Om Sheeghrakarine Namah"
          },
          {
            "id": "gp-ash-37",
            "telugu": "37. ఓం శాశ్వతాయ నమః",
            "transliteration": "37. Om Shashvataya Namah"
          },
          {
            "id": "gp-ash-38",
            "telugu": "38. ఓం భవాయ నమః",
            "transliteration": "38. Om Bhavaya Namah"
          },
          {
            "id": "gp-ash-39",
            "telugu": "39. ఓం బలోత్థితాయ నమః",
            "transliteration": "39. Om Balotthitaya Namah"
          },
          {
            "id": "gp-ash-40",
            "telugu": "40. ఓం భవాత్మజాయ నమః",
            "transliteration": "40. Om Bhavatmajaya Namah"
          },
          {
            "id": "gp-ash-41",
            "telugu": "41. ఓం పురాణ పురుషాయ నమః",
            "transliteration": "41. Om Purana Purushaya Namah"
          },
          {
            "id": "gp-ash-42",
            "telugu": "42. ఓం పూష్ణే నమః",
            "transliteration": "42. Om Pushne Namah"
          },
          {
            "id": "gp-ash-43",
            "telugu": "43. ఓం ప్రభవే నమః",
            "transliteration": "43. Om Prabhave Namah"
          },
          {
            "id": "gp-ash-44",
            "telugu": "44. ఓం పుష్కరోత్క్షిప్తాయ నమః",
            "transliteration": "44. Om Pushkarotkshiptaya Namah"
          },
          {
            "id": "gp-ash-45",
            "telugu": "45. ఓం అగ్రగణ్యాయ నమః",
            "transliteration": "45. Om Agraganyaya Namah"
          },
          {
            "id": "gp-ash-46",
            "telugu": "46. ఓం అగ్రపూజ్యాయ నమః",
            "transliteration": "46. Om Agrapujyaya Namah"
          },
          {
            "id": "gp-ash-47",
            "telugu": "47. ఓం అగ్రగామినే నమః",
            "transliteration": "47. Om Agragamine Namah"
          },
          {
            "id": "gp-ash-48",
            "telugu": "48. ఓం నేత్ర కృతే నమః",
            "transliteration": "48. Om Netra Krite Namah"
          },
          {
            "id": "gp-ash-49",
            "telugu": "49. ఓం చామీకర ప్రభాయ నమః",
            "transliteration": "49. Om Chamikara Prabhaya Namah"
          },
          {
            "id": "gp-ash-50",
            "telugu": "50. ఓం సర్వాయ నమః",
            "transliteration": "50. Om Sarvaya Namah"
          },
          {
            "id": "gp-ash-51",
            "telugu": "51. ఓం సర్వోపన్యాసాయ నమః",
            "transliteration": "51. Om Sarvopanyasaya Namah"
          },
          {
            "id": "gp-ash-52",
            "telugu": "52. ఓం సర్వ కర్త్రే నమః",
            "transliteration": "52. Om Sarva Kartre Namah"
          },
          {
            "id": "gp-ash-53",
            "telugu": "53. ఓం సర్వనేత్రే నమః",
            "transliteration": "53. Om Sarvanetre Namah"
          },
          {
            "id": "gp-ash-54",
            "telugu": "54. ఓం సర్వసిద్ధి ప్రదాయ నమః",
            "transliteration": "54. Om Sarvasiddhi Pradaya Namah"
          },
          {
            "id": "gp-ash-55",
            "telugu": "55. ఓం పంచహస్తాయ నమః",
            "transliteration": "55. Om Panchahastaya Namah"
          },
          {
            "id": "gp-ash-56",
            "telugu": "56. ఓం సర్వ నిధయే నమః",
            "transliteration": "56. Om Sarva Nidhaye Namah"
          },
          {
            "id": "gp-ash-57",
            "telugu": "57. ఓం పార్వతీనందనాయ నమః",
            "transliteration": "57. Om Parvatinandanaya Namah"
          },
          {
            "id": "gp-ash-58",
            "telugu": "58. ఓం కుమార గురవే నమః",
            "transliteration": "58. Om Kumara Gurave Namah"
          },
          {
            "id": "gp-ash-59",
            "telugu": "59. ఓం అక్షోభ్యాయ నమః",
            "transliteration": "59. Om Akshobhyaya Namah"
          },
          {
            "id": "gp-ash-60",
            "telugu": "60. ఓం కుంజరాసుర భంజనాయ నమః",
            "transliteration": "60. Om Kunjarasura Bhanjanaya Namah"
          },
          {
            "id": "gp-ash-61",
            "telugu": "61. ఓం ప్రమోదాయ నమః",
            "transliteration": "61. Om Pramodaya Namah"
          },
          {
            "id": "gp-ash-62",
            "telugu": "62. ఓం మోదకప్రియాయ నమః",
            "transliteration": "62. Om Modakapriyaya Namah"
          },
          {
            "id": "gp-ash-63",
            "telugu": "63. ఓం కాంతిమతే నమః",
            "transliteration": "63. Om Kantimate Namah"
          },
          {
            "id": "gp-ash-64",
            "telugu": "64. ఓం ధృతిమతే నమః",
            "transliteration": "64. Om Dhritimate Namah"
          },
          {
            "id": "gp-ash-65",
            "telugu": "65. ఓం కామినే నమః",
            "transliteration": "65. Om Kamine Namah"
          },
          {
            "id": "gp-ash-66",
            "telugu": "66. ఓం కపిత్థఫల ప్రియాయ నమః",
            "transliteration": "66. Om Kapitthaphala Priyaya Namah"
          },
          {
            "id": "gp-ash-67",
            "telugu": "67. ఓం బ్రహ్మచారిణే నమః",
            "transliteration": "67. Om Brahmacharine Namah"
          },
          {
            "id": "gp-ash-68",
            "telugu": "68. ఓం బ్రహ్మవిద్యావిభవే నమః",
            "transliteration": "68. Om Brahmavidyavibhave Namah"
          },
          {
            "id": "gp-ash-69",
            "telugu": "69. ఓం జిష్ణవే నమః",
            "transliteration": "69. Om Jishnave Namah"
          },
          {
            "id": "gp-ash-70",
            "telugu": "70. ఓం విష్ణుప్రియాయ నమః",
            "transliteration": "70. Om Vishnupriyaya Namah"
          },
          {
            "id": "gp-ash-71",
            "telugu": "71. ఓం భక్త జీవితాయ నమః",
            "transliteration": "71. Om Bhakta Jivitaya Namah"
          },
          {
            "id": "gp-ash-72",
            "telugu": "72. ఓం జితి మన్మథాయ నమః",
            "transliteration": "72. Om Jiti Manmathaya Namah"
          },
          {
            "id": "gp-ash-73",
            "telugu": "73. ఓం ఐశ్వర్య కారణాయ నమః",
            "transliteration": "73. Om Aishvarya Karanaya Namah"
          },
          {
            "id": "gp-ash-74",
            "telugu": "74. ఓం జ్యాయసే నమః",
            "transliteration": "74. Om Jyayase Namah"
          },
          {
            "id": "gp-ash-75",
            "telugu": "75. ఓం యక్షకిన్నర సేవితాయ నమః",
            "transliteration": "75. Om Yakshakinnara Sevitaya Namah"
          },
          {
            "id": "gp-ash-76",
            "telugu": "76. ఓం గంగా సుతాయ నమః",
            "transliteration": "76. Om Ganga Sutaya Namah"
          },
          {
            "id": "gp-ash-77",
            "telugu": "77. ఓం గణాధీశాయ నమః",
            "transliteration": "77. Om Ganadhishaya Namah"
          },
          {
            "id": "gp-ash-78",
            "telugu": "78. ఓం గంభీర నినదాయ నమః",
            "transliteration": "78. Om Gambhira Ninadaya Namah"
          },
          {
            "id": "gp-ash-79",
            "telugu": "79. ఓం వటవే నమః",
            "transliteration": "79. Om Vatave Namah"
          },
          {
            "id": "gp-ash-80",
            "telugu": "80. ఓం అభీష్ట వరదాయినే నమః",
            "transliteration": "80. Om Abhishta Varadayine Namah"
          },
          {
            "id": "gp-ash-81",
            "telugu": "81. ఓం జ్యోతిషే నమః",
            "transliteration": "81. Om Jyotishe Namah"
          },
          {
            "id": "gp-ash-82",
            "telugu": "82. ఓం భక్త నిధయే నమః",
            "transliteration": "82. Om Bhakta Nidhaye Namah"
          },
          {
            "id": "gp-ash-83",
            "telugu": "83. ఓం భావ గమ్యాయ నమః",
            "transliteration": "83. Om Bhava Gamyaya Namah"
          },
          {
            "id": "gp-ash-84",
            "telugu": "84. ఓం మంగళ ప్రదాయ నమః",
            "transliteration": "84. Om Mangala Pradaya Namah"
          },
          {
            "id": "gp-ash-85",
            "telugu": "85. ఓం విశ్వరక్షాకృతే నమః",
            "transliteration": "85. Om Vishvarakshakrite Namah"
          },
          {
            "id": "gp-ash-86",
            "telugu": "86. ఓం కళ్యాణ గురవే నమః",
            "transliteration": "86. Om Kalyana Gurave Namah"
          },
          {
            "id": "gp-ash-87",
            "telugu": "87. ఓం ఉన్మత్త వేషాయ నమః",
            "transliteration": "87. Om Unmatta Veshaya Namah"
          },
          {
            "id": "gp-ash-88",
            "telugu": "88. ఓం అపరాజితే నమః",
            "transliteration": "88. Om Aparajite Namah"
          },
          {
            "id": "gp-ash-89",
            "telugu": "89. ఓం సమస్త జగదాధారాయ నమః",
            "transliteration": "89. Om Samasta Jagadadharaya Namah"
          },
          {
            "id": "gp-ash-90",
            "telugu": "90. ఓం సర్వైశ్వర్య ప్రదాయ నమః",
            "transliteration": "90. Om Sarvaishvarya Pradaya Namah"
          },
          {
            "id": "gp-ash-91",
            "telugu": "91. ఓం ఏకదంతాయ నమః",
            "transliteration": "91. Om Ekadantaya Namah"
          },
          {
            "id": "gp-ash-92",
            "telugu": "92. ఓం శ్రీ విఘ్నేశ్వరాయ నమః",
            "transliteration": "92. Om Shri Vighneshvaraya Namah"
          },
          {
            "id": "gp-ash-93",
            "telugu": "93. ఓం శ్రీ హారిద్రాగణపతయే నమః",
            "transliteration": "93. Om Shri Haridraganapataye Namah"
          },
          {
            "id": "gp-ash-94",
            "telugu": "94. ఓం వక్రతుండాయ నమః",
            "transliteration": "94. Om Vakratundaya Namah"
          },
          {
            "id": "gp-ash-95",
            "telugu": "95. ఓం లంబోదరాయ నమః",
            "transliteration": "95. Om Lambodaraya Namah"
          },
          {
            "id": "gp-ash-96",
            "telugu": "96. ఓం గజవక్త్రాయ నమః",
            "transliteration": "96. Om Gajavaktraya Namah"
          },
          {
            "id": "gp-ash-97",
            "telugu": "97. ఓం శూర్పకర్ణాయ నమః",
            "transliteration": "97. Om Shurpakarnaya Namah"
          },
          {
            "id": "gp-ash-98",
            "telugu": "98. ఓం గౌరీసుతాయ నమః",
            "transliteration": "98. Om Gaurisutaya Namah"
          },
          {
            "id": "gp-ash-99",
            "telugu": "99. ఓం ఉమాపుత్రాయ నమః",
            "transliteration": "99. Om Umaputraya Namah"
          },
          {
            "id": "gp-ash-100",
            "telugu": "100. ఓం గణపతయే నమః",
            "transliteration": "100. Om Ganapataye Namah"
          },
          {
            "id": "gp-ash-101",
            "telugu": "101. ఓం బాలగణపతయే నమః",
            "transliteration": "101. Om Balaganapataye Namah"
          },
          {
            "id": "gp-ash-102",
            "telugu": "102. ఓం మహాగణపతయే నమః",
            "transliteration": "102. Om Mahaganapataye Namah"
          },
          {
            "id": "gp-ash-103",
            "telugu": "103. ఓం సిద్ధివినాయకాయ నమః",
            "transliteration": "103. Om Siddhivinayakaya Namah"
          },
          {
            "id": "gp-ash-104",
            "telugu": "104. ఓం కపిలాయ నమః",
            "transliteration": "104. Om Kapilaya Namah"
          },
          {
            "id": "gp-ash-105",
            "telugu": "105. ఓం బుద్ధిప్రియాయ నమః",
            "transliteration": "105. Om Buddhipriyaya Namah"
          },
          {
            "id": "gp-ash-106",
            "telugu": "106. ఓం చతుర్భుజాయ నమః",
            "transliteration": "106. Om Chaturbhujaya Namah"
          },
          {
            "id": "gp-ash-107",
            "telugu": "107. ఓం వికటాయ నమః",
            "transliteration": "107. Om Vikataya Namah"
          },
          {
            "id": "gp-ash-108",
            "telugu": "108. ఓం స్కందపూర్వజాయ నమః",
            "transliteration": "108. Om Skandapurvajaya Namah"
          }
        ]
      },
      {
        title: 'అష్టోత్తర పుష్ప సమర్పణ',
        mantras: [
          {
            "id": "gp-ash-offering",
            "telugu": "ఓం మహాగణపతి పాదారవిందాయోః\nఅష్టోత్తర శతనామావళి నానావిధ\nపరిమళ పుష్ప సమర్పయామి"
          }
        ]
      }
    ]
  },
  // 3. SUBRAMANYA SWAMI POOJA
  {
    id: 'subrahmanya-pooja',
    titleTelugu: 'సుబ్రహ్మణ్య స్వామి పూజ',
    titleEnglish: 'Subrahmanya Swamy Pooja',
    subtitle: 'షణ్ముఖ ధ్యానం, అంగపూజ & 108 అష్టోత్తర శత నామావళి',
    icon: 'Flame',
    durationMinutes: 15,
    featured: true,
    category: 'ayyappa',
    sections: [
      {
        title: 'షణ్ముఖ ధ్యాన శ్లోకం',
        description: 'శక్తిధరుడైన సుబ్రహ్మణ్యుని ప్రార్థన',
        mantras: [
          {
            id: 'sp-1',
            telugu: 'షడాననం చందన లేపితాంగం మహోరసం దివ్యమయూర వాహనమ్ |\nరుద్రస్య సూనుం సురలోకనాథం బ్రహ్మణ్యదేవం శరణం ప్రపద్యే ||',
            transliteration: 'Shadananam Chandana Lepitangam Mahorasam Divya Mayura Vahanam |\nRudrasya Soonum Suralokanatham Brahmanyadevam Saranam Prapadye ||',
            meaning: 'ఆరు ముఖములు కలవాడు, సుగంధ చందనము అలదిన దేహము కలవాడు, మయూర వాహనుడు, శివ కుమారుడైన శ్రీ సుబ్రహ్మణ్య స్వామిని శరణు వేడుతున్నాను.'
          },
          {
            id: 'sp-2',
            telugu: 'ఓం శరవణభవాయ నమః | ఓం కార్తికేయాయ నమః | ఓం స్కందాయ నమః | ఓం గుహాయ నమః | ఓం శక్తిధరాయ నమః ||',
            transliteration: 'Om Saravanabhavaya Namah | Om Kartikeyaya Namah | Om Skandaya Namah | Om Guhaya Namah | Om Shaktidharaya Namah ||'
          }
        ]
      },
      {
        title: 'సుబ్రహ్మణ్య స్వామి అంగపూజ',
        description: 'పుష్పములతో సుబ్రహ్మణ్యుని దివ్య అంగములను పూజించుట',
        mantras: [
          {
            "id": "sp-ang-1",
            "telugu": "ఓం అమరస్తుతపాదయుగళాయ నమః\n- పాదౌ పూజయామి",
            "transliteration": "Om Amarastutapadayugalaya Namah - Padau Pujayami"
          },
          {
            "id": "sp-ang-2",
            "telugu": "ఓం ద్విషడ్బాహవే నమః\n- బాహూన్ పూజయామి",
            "transliteration": "Om Dvishadbahave Namah - Bahun Pujayami"
          },
          {
            "id": "sp-ang-3",
            "telugu": "ఓం ద్విషణ్ణేత్రాయ నమః\n- నేత్రే పూజయామి",
            "transliteration": "Om Dvishannetraya Namah - Netre Pujayami"
          },
          {
            "id": "sp-ang-4",
            "telugu": "ఓం ద్విషణ్ముఖాయ నమః\n- ముఖాన్ పూజయామి",
            "transliteration": "Om Dvishanmukhaya Namah - Mukhan Pujayami"
          },
          {
            "id": "sp-ang-5",
            "telugu": "ఓం ద్విషట్కర్ణాయ నమః\n- కర్ణాన్ పూజయామి",
            "transliteration": "Om Dvishatkarnaya Namah - Karnan Pujayami"
          },
          {
            "id": "sp-ang-6",
            "telugu": "ఓం దయాహృదయాయ నమః\n- హృదయం పూజయామి",
            "transliteration": "Om Dayahridayaya Namah - Hridayam Pujayami"
          },
          {
            "id": "sp-ang-7",
            "telugu": "ఓం గుహ్యాయ నమః\n- గుహ్యం పూజయామి",
            "transliteration": "Om Guhyaya Namah - Guhyam Pujayami"
          },
          {
            "id": "sp-ang-8",
            "telugu": "ఓం సునాసాయ నమః\n- నాసికాం పూజయామి",
            "transliteration": "Om Sunasaya Namah - Nasikam Pujayami"
          },
          {
            "id": "sp-ang-9",
            "telugu": "ఓం ఫాలనేత్రసుతాయ నమః\n- ఫాలం పూజయామి",
            "transliteration": "Om Phalanetrasutaya Namah - Phalam Pujayami"
          },
          {
            "id": "sp-ang-10",
            "telugu": "ఓం జ్ఞానశక్తికరాయ నమః\n- హస్తాన్ పూజయామి",
            "transliteration": "Om Jnanashaktikaraya Namah - Hastan Pujayami"
          },
          {
            "id": "sp-ang-11",
            "telugu": "ఓం కటిన్యస్తపాణయే నమః\n- కటిం పూజయామి",
            "transliteration": "Om Katinyastapanaye Namah - Katim Pujayami"
          },
          {
            "id": "sp-ang-12",
            "telugu": "ఓం లంబోదరానుజాయ నమః\n- ఉదరం పూజయామి",
            "transliteration": "Om Lambodaranujaya Namah - Udaram Pujayami"
          },
          {
            "id": "sp-ang-13",
            "telugu": "ఓం సువిశాల వక్షసే నమః\n- వక్షస్థలం పూజయామి",
            "transliteration": "Om Suvishala Vakshase Namah - Vakshasthalam Pujayami"
          },
          {
            "id": "sp-ang-14",
            "telugu": "ఓం శితికంఠసుతాయ నమః\n- కంఠం పూజయామి",
            "transliteration": "Om Shitikanthasutaya Namah - Kantham Pujayami"
          },
          {
            "id": "sp-ang-15",
            "telugu": "ఓం సర్వసేనాపతయే నమః\n- సర్వాణ్యంగాని పూజయామి",
            "transliteration": "Om Sarvasenapataye Namah - Sarvanyangani Pujayami"
          }
        ]
      },
      {
        title: 'శ్రీ సుబ్రహ్మణ్య అష్టోత్తర శత నామావళి (108)',
        description: 'ఓం శ్రీ సుబ్రహ్మణ్యాయ నమః - ప్రతి నామానికి పుష్పము సమర్పించవలెను',
        mantras: [
          {
            "id": "sp-ash-1",
            "telugu": "1. ఓం శ్రీ సుబ్రహ్మణ్య స్వామినే నమః",
            "transliteration": "1. Om Shri Subrahmanya Swamine Namah"
          },
          {
            "id": "sp-ash-2",
            "telugu": "2. ఓం స్కందాయ నమః",
            "transliteration": "2. Om Skandaya Namah"
          },
          {
            "id": "sp-ash-3",
            "telugu": "3. ఓం గుహాయ నమః",
            "transliteration": "3. Om Guhaya Namah"
          },
          {
            "id": "sp-ash-4",
            "telugu": "4. ఓం షణ్ముఖాయ నమః",
            "transliteration": "4. Om Shanmukhaya Namah"
          },
          {
            "id": "sp-ash-5",
            "telugu": "5. ఓం ఫాలనేత్ర సుతాయ నమః",
            "transliteration": "5. Om Phalanetra Sutaya Namah"
          },
          {
            "id": "sp-ash-6",
            "telugu": "6. ఓం ప్రభవే నమః",
            "transliteration": "6. Om Prabhave Namah"
          },
          {
            "id": "sp-ash-7",
            "telugu": "7. ఓం పింగళాయ నమః",
            "transliteration": "7. Om Pingalaya Namah"
          },
          {
            "id": "sp-ash-8",
            "telugu": "8. ఓం కృత్తికాసూనవే నమః",
            "transliteration": "8. Om Krittikasunave Namah"
          },
          {
            "id": "sp-ash-9",
            "telugu": "9. ఓం శిఖివాహాయ నమః",
            "transliteration": "9. Om Shikhivahaya Namah"
          },
          {
            "id": "sp-ash-10",
            "telugu": "10. ఓం ద్విషడ్భుజాయ నమః",
            "transliteration": "10. Om Dvishadbhujaya Namah"
          },
          {
            "id": "sp-ash-11",
            "telugu": "11. ఓం ద్విషణ్ణేత్రాయ నమః",
            "transliteration": "11. Om Dvishannetraya Namah"
          },
          {
            "id": "sp-ash-12",
            "telugu": "12. ఓం శక్తిధరాయ నమః",
            "transliteration": "12. Om Shaktidharaya Namah"
          },
          {
            "id": "sp-ash-13",
            "telugu": "13. ఓం పిశితాశ ప్రభంజనాయ నమః",
            "transliteration": "13. Om Pishitasha Prabhanjanaya Namah"
          },
          {
            "id": "sp-ash-14",
            "telugu": "14. ఓం తారకాసుర సంహర్త్రే నమః",
            "transliteration": "14. Om Tarakasura Samhartre Namah"
          },
          {
            "id": "sp-ash-15",
            "telugu": "15. ఓం రక్షోబలవిమర్దనాయ నమః",
            "transliteration": "15. Om Rakshobalavimardanaya Namah"
          },
          {
            "id": "sp-ash-16",
            "telugu": "16. ఓం మత్తాయ నమః",
            "transliteration": "16. Om Mattaya Namah"
          },
          {
            "id": "sp-ash-17",
            "telugu": "17. ఓం ప్రమత్తాయ నమః",
            "transliteration": "17. Om Pramattaya Namah"
          },
          {
            "id": "sp-ash-18",
            "telugu": "18. ఓం ఉన్మత్తాయ నమః",
            "transliteration": "18. Om Unmattaya Namah"
          },
          {
            "id": "sp-ash-19",
            "telugu": "19. ఓం సురసైన్య సురక్షకాయ నమః",
            "transliteration": "19. Om Surasainya Surakshakaya Namah"
          },
          {
            "id": "sp-ash-20",
            "telugu": "20. ఓం దేవసేనాపతయే నమః",
            "transliteration": "20. Om Devasenapataye Namah"
          },
          {
            "id": "sp-ash-21",
            "telugu": "21. ఓం ప్రాజ్ఞాయ నమః",
            "transliteration": "21. Om Prajnaya Namah"
          },
          {
            "id": "sp-ash-22",
            "telugu": "22. ఓం కృపాళవే నమః",
            "transliteration": "22. Om Kripalave Namah"
          },
          {
            "id": "sp-ash-23",
            "telugu": "23. ఓం భక్తవత్సలాయ నమః",
            "transliteration": "23. Om Bhaktavatsalaya Namah"
          },
          {
            "id": "sp-ash-24",
            "telugu": "24. ఓం ఉమాసుతాయ నమః",
            "transliteration": "24. Om Umasutaya Namah"
          },
          {
            "id": "sp-ash-25",
            "telugu": "25. ఓం శక్తిధరాయ నమః",
            "transliteration": "25. Om Shaktidharaya Namah"
          },
          {
            "id": "sp-ash-26",
            "telugu": "26. ఓం కుమారాయ నమః",
            "transliteration": "26. Om Kumaraya Namah"
          },
          {
            "id": "sp-ash-27",
            "telugu": "27. ఓం క్రౌంచ దారణాయ నమః",
            "transliteration": "27. Om Krauncha Daranaya Namah"
          },
          {
            "id": "sp-ash-28",
            "telugu": "28. ఓం సేనానియే నమః",
            "transliteration": "28. Om Senaniye Namah"
          },
          {
            "id": "sp-ash-29",
            "telugu": "29. ఓం అగ్నిజన్మనే నమః",
            "transliteration": "29. Om Agnijanmane Namah"
          },
          {
            "id": "sp-ash-30",
            "telugu": "30. ఓం విశాఖాయ నమః",
            "transliteration": "30. Om Vishakhaya Namah"
          },
          {
            "id": "sp-ash-31",
            "telugu": "31. ఓం శంకరాత్మజాయ నమః",
            "transliteration": "31. Om Shankaratmajaya Namah"
          },
          {
            "id": "sp-ash-32",
            "telugu": "32. ఓం శివస్వామినే నమః",
            "transliteration": "32. Om Shivaswamine Namah"
          },
          {
            "id": "sp-ash-33",
            "telugu": "33. ఓం గణ స్వామినే నమః",
            "transliteration": "33. Om Gana Swamine Namah"
          },
          {
            "id": "sp-ash-34",
            "telugu": "34. ఓం సర్వస్వామినే నమః",
            "transliteration": "34. Om Sarvaswamine Namah"
          },
          {
            "id": "sp-ash-35",
            "telugu": "35. ఓం సనాతనాయ నమః",
            "transliteration": "35. Om Sanatanaya Namah"
          },
          {
            "id": "sp-ash-36",
            "telugu": "36. ఓం అనంత శక్తయే నమః",
            "transliteration": "36. Om Ananta Shaktaye Namah"
          },
          {
            "id": "sp-ash-37",
            "telugu": "37. ఓం అక్షోభ్యాయ నమః",
            "transliteration": "37. Om Akshobhyaya Namah"
          },
          {
            "id": "sp-ash-38",
            "telugu": "38. ఓం పార్వతిప్రియనందనాయ నమః",
            "transliteration": "38. Om Parvatipriyanandanaya Namah"
          },
          {
            "id": "sp-ash-39",
            "telugu": "39. ఓం గంగాసుతాయ నమః",
            "transliteration": "39. Om Gangasutaya Namah"
          },
          {
            "id": "sp-ash-40",
            "telugu": "40. ఓం శరోద్భూతాయ నమః",
            "transliteration": "40. Om Sharodbhutaya Namah"
          },
          {
            "id": "sp-ash-41",
            "telugu": "41. ఓం ఆహూతాయ నమః",
            "transliteration": "41. Om Ahutaya Namah"
          },
          {
            "id": "sp-ash-42",
            "telugu": "42. ఓం పావకాత్మజాయ నమః",
            "transliteration": "42. Om Pavakatmajaya Namah"
          },
          {
            "id": "sp-ash-43",
            "telugu": "43. ఓం జృంభాయ నమః",
            "transliteration": "43. Om Jrimbhaya Namah"
          },
          {
            "id": "sp-ash-44",
            "telugu": "44. ఓం ప్రజృంభాయ నమః",
            "transliteration": "44. Om Prajrimbhaya Namah"
          },
          {
            "id": "sp-ash-45",
            "telugu": "45. ఓం ఉజ్జృంభాయ నమః",
            "transliteration": "45. Om Ujjrimbhaya Namah"
          },
          {
            "id": "sp-ash-46",
            "telugu": "46. ఓం కమలాసన సంస్తుతాయ నమః",
            "transliteration": "46. Om Kamalasana Samstutaya Namah"
          },
          {
            "id": "sp-ash-47",
            "telugu": "47. ఓం ఏకవర్ణాయ నమః",
            "transliteration": "47. Om Ekavarnaya Namah"
          },
          {
            "id": "sp-ash-48",
            "telugu": "48. ఓం ద్వివర్ణాయ నమః",
            "transliteration": "48. Om Dvivarnaya Namah"
          },
          {
            "id": "sp-ash-49",
            "telugu": "49. ఓం త్రివర్ణాయ నమః",
            "transliteration": "49. Om Trivarnaya Namah"
          },
          {
            "id": "sp-ash-50",
            "telugu": "50. ఓం సుమనోహరాయ నమః",
            "transliteration": "50. Om Sumanoharaya Namah"
          },
          {
            "id": "sp-ash-51",
            "telugu": "51. ఓం చతుర్వర్ణాయ నమః",
            "transliteration": "51. Om Chaturvarnaya Namah"
          },
          {
            "id": "sp-ash-52",
            "telugu": "52. ఓం పంచ వర్ణాయ నమః",
            "transliteration": "52. Om Pancha Varnaya Namah"
          },
          {
            "id": "sp-ash-53",
            "telugu": "53. ఓం ప్రజాపతయే నమః",
            "transliteration": "53. Om Prajapataye Namah"
          },
          {
            "id": "sp-ash-54",
            "telugu": "54. ఓం అహఃపతయే నమః",
            "transliteration": "54. Om Ahahpataye Namah"
          },
          {
            "id": "sp-ash-55",
            "telugu": "55. ఓం అగ్నిగర్భాయ నమః",
            "transliteration": "55. Om Agnigarbhaya Namah"
          },
          {
            "id": "sp-ash-56",
            "telugu": "56. ఓం శమిగర్భాయ నమః",
            "transliteration": "56. Om Shamigarbhaya Namah"
          },
          {
            "id": "sp-ash-57",
            "telugu": "57. ఓం విశ్వరేతసే నమః",
            "transliteration": "57. Om Vishvaretase Namah"
          },
          {
            "id": "sp-ash-58",
            "telugu": "58. ఓం సురారిఘ్నే నమః",
            "transliteration": "58. Om Surarighne Namah"
          },
          {
            "id": "sp-ash-59",
            "telugu": "59. ఓం హరిద్వర్ణాయ నమః",
            "transliteration": "59. Om Haridvarnaya Namah"
          },
          {
            "id": "sp-ash-60",
            "telugu": "60. ఓం వటవే నమః",
            "transliteration": "60. Om Vatave Namah"
          },
          {
            "id": "sp-ash-61",
            "telugu": "61. ఓం వటవేష భృతే నమః",
            "transliteration": "61. Om Vatavesha Bhrite Namah"
          },
          {
            "id": "sp-ash-62",
            "telugu": "62. ఓం పూష్ణే నమః",
            "transliteration": "62. Om Pushne Namah"
          },
          {
            "id": "sp-ash-63",
            "telugu": "63. ఓం గభస్తయే నమః",
            "transliteration": "63. Om Gabhastaye Namah"
          },
          {
            "id": "sp-ash-64",
            "telugu": "64. ఓం గహనాయ నమః",
            "transliteration": "64. Om Gahanaya Namah"
          },
          {
            "id": "sp-ash-65",
            "telugu": "65. ఓం చంద్రవర్ణాయ నమః",
            "transliteration": "65. Om Chandravarnaya Namah"
          },
          {
            "id": "sp-ash-66",
            "telugu": "66. ఓం కళాధరాయ నమః",
            "transliteration": "66. Om Kaladharaya Namah"
          },
          {
            "id": "sp-ash-67",
            "telugu": "67. ఓం మాయాధరాయ నమః",
            "transliteration": "67. Om Mayadharaya Namah"
          },
          {
            "id": "sp-ash-68",
            "telugu": "68. ఓం మహామాయినే నమః",
            "transliteration": "68. Om Mahamayine Namah"
          },
          {
            "id": "sp-ash-69",
            "telugu": "69. ఓం కైవల్యాయ నమః",
            "transliteration": "69. Om Kaivalyaya Namah"
          },
          {
            "id": "sp-ash-70",
            "telugu": "70. ఓం శంకరాత్మజాయ నమః",
            "transliteration": "70. Om Shankaratmajaya Namah"
          },
          {
            "id": "sp-ash-71",
            "telugu": "71. ఓం విశ్వయోనయే నమః",
            "transliteration": "71. Om Vishvayonaye Namah"
          },
          {
            "id": "sp-ash-72",
            "telugu": "72. ఓం అమేయాత్మనే నమః",
            "transliteration": "72. Om Ameyatmane Namah"
          },
          {
            "id": "sp-ash-73",
            "telugu": "73. ఓం తేజోనిధయే నమః",
            "transliteration": "73. Om Tejonidhaye Namah"
          },
          {
            "id": "sp-ash-74",
            "telugu": "74. ఓం అనామయాయ నమః",
            "transliteration": "74. Om Anamayaya Namah"
          },
          {
            "id": "sp-ash-75",
            "telugu": "75. ఓం పరమేష్ఠినే నమః",
            "transliteration": "75. Om Parameshthine Namah"
          },
          {
            "id": "sp-ash-76",
            "telugu": "76. ఓం పరబ్రహ్మణే నమః",
            "transliteration": "76. Om Parabrahmane Namah"
          },
          {
            "id": "sp-ash-77",
            "telugu": "77. ఓం వేదగర్భాయ నమః",
            "transliteration": "77. Om Vedagarbhaya Namah"
          },
          {
            "id": "sp-ash-78",
            "telugu": "78. ఓం విరాట్సుతాయ నమః",
            "transliteration": "78. Om Viratsutaya Namah"
          },
          {
            "id": "sp-ash-79",
            "telugu": "79. ఓం పుళిందకన్యాభర్త్రాయ నమః",
            "transliteration": "79. Om Pulindakanyabhartraya Namah"
          },
          {
            "id": "sp-ash-80",
            "telugu": "80. ఓం మహాసారస్వతావృతాయ నమః",
            "transliteration": "80. Om Mahasarasvatavritaya Namah"
          },
          {
            "id": "sp-ash-81",
            "telugu": "81. ఓం ఆశ్రితాఖిలదాత్రే నమః",
            "transliteration": "81. Om Ashritakhiladatre Namah"
          },
          {
            "id": "sp-ash-82",
            "telugu": "82. ఓం చోరఘ్నాయ నమః",
            "transliteration": "82. Om Choraghnaya Namah"
          },
          {
            "id": "sp-ash-83",
            "telugu": "83. ఓం రోగనాశనాయ నమః",
            "transliteration": "83. Om Roganashanaya Namah"
          },
          {
            "id": "sp-ash-84",
            "telugu": "84. ఓం అనంత మూర్తయే నమః",
            "transliteration": "84. Om Ananta Murtaye Namah"
          },
          {
            "id": "sp-ash-85",
            "telugu": "85. ఓం ఆనందాయ నమః",
            "transliteration": "85. Om Anandaya Namah"
          },
          {
            "id": "sp-ash-86",
            "telugu": "86. ఓం శిఖండికృత కేతనాయ నమః",
            "transliteration": "86. Om Shikhandikrita Ketanaya Namah"
          },
          {
            "id": "sp-ash-87",
            "telugu": "87. ఓం డంభాయ నమః",
            "transliteration": "87. Om Dambhaya Namah"
          },
          {
            "id": "sp-ash-88",
            "telugu": "88. ఓం పరమ డంభాయ నమః",
            "transliteration": "88. Om Parama Dambhaya Namah"
          },
          {
            "id": "sp-ash-89",
            "telugu": "89. ఓం మహా డంభాయ నమః",
            "transliteration": "89. Om Maha Dambhaya Namah"
          },
          {
            "id": "sp-ash-90",
            "telugu": "90. ఓం వృషాకపయే నమః",
            "transliteration": "90. Om Vrishakapaye Namah"
          },
          {
            "id": "sp-ash-91",
            "telugu": "91. ఓం కారణోపాత్త దేహాయ నమః",
            "transliteration": "91. Om Karanopatta Dehaya Namah"
          },
          {
            "id": "sp-ash-92",
            "telugu": "92. ఓం కారణాతీత విగ్రహాయ నమః",
            "transliteration": "92. Om Karanatita Vigrahaya Namah"
          },
          {
            "id": "sp-ash-93",
            "telugu": "93. ఓం అనీశ్వరాయ నమః",
            "transliteration": "93. Om Anishvaraya Namah"
          },
          {
            "id": "sp-ash-94",
            "telugu": "94. ఓం అమృతాయ నమః",
            "transliteration": "94. Om Amritaya Namah"
          },
          {
            "id": "sp-ash-95",
            "telugu": "95. ఓం ప్రాణాయ నమః",
            "transliteration": "95. Om Pranaya Namah"
          },
          {
            "id": "sp-ash-96",
            "telugu": "96. ఓం ప్రాణాయామ పరాయణాయ నమః",
            "transliteration": "96. Om Pranayama Parayanaya Namah"
          },
          {
            "id": "sp-ash-97",
            "telugu": "97. ఓం విరుద్ధహంత్రే నమః",
            "transliteration": "97. Om Viruddhahantre Namah"
          },
          {
            "id": "sp-ash-98",
            "telugu": "98. ఓం వీరఘ్నాయ నమః",
            "transliteration": "98. Om Viraghnaya Namah"
          },
          {
            "id": "sp-ash-99",
            "telugu": "99. ఓం రక్తాస్యాయ నమః",
            "transliteration": "99. Om Raktasyaya Namah"
          },
          {
            "id": "sp-ash-100",
            "telugu": "100. ఓం సుబ్రహ్మణ్యాయ నమః",
            "transliteration": "100. Om Subrahmanyaya Namah"
          },
          {
            "id": "sp-ash-101",
            "telugu": "101. ఓం గుహాయ నమః",
            "transliteration": "101. Om Guhaya Namah"
          },
          {
            "id": "sp-ash-102",
            "telugu": "102. ఓం ప్రీతాయ నమః",
            "transliteration": "102. Om Pritaya Namah"
          },
          {
            "id": "sp-ash-103",
            "telugu": "103. ఓం బ్రాహ్మణ్యాయ నమః",
            "transliteration": "103. Om Brahmanyaya Namah"
          },
          {
            "id": "sp-ash-104",
            "telugu": "104. ఓం బ్రాహ్మణ ప్రియాయ నమః",
            "transliteration": "104. Om Brahmana Priyaya Namah"
          },
          {
            "id": "sp-ash-105",
            "telugu": "105. ఓం వంశవృద్ధికరాయ నమః",
            "transliteration": "105. Om Vamshavriddhikaraya Namah"
          },
          {
            "id": "sp-ash-106",
            "telugu": "106. ఓం వేదవేద్యాయ నమః",
            "transliteration": "106. Om Vedavedyaya Namah"
          },
          {
            "id": "sp-ash-107",
            "telugu": "107. ఓం అక్షయ ఫలదాయ నమః",
            "transliteration": "107. Om Akshaya Phaladaya Namah"
          },
          {
            "id": "sp-ash-108",
            "telugu": "108. ఓం శాశ్వతాయ నమః",
            "transliteration": "108. Om Shashvataya Namah"
          }
        ]
      },
      {
        title: 'అష్టోత్తర పుష్ప సమర్పణ',
        mantras: [
          {
            "id": "sp-ash-offering",
            "telugu": "ఓం సుబ్రహ్మణ్య స్వామి పాదారవిందాయోః\nఅష్టోత్తర శతనామావళి నానావిధ పరిమళ పుష్ప సమర్పయామి"
          }
        ]
      }
    ]
  },
  // 4. AYYAPPA POOJA VIDHANAM (Shodashopachara)
  {
    id: 'ayyappa-pooja',
    titleTelugu: 'అయ్యప్ప నిత్య పూజా విధానం',
    titleEnglish: 'Ayyappa Nitya Pooja',
    subtitle: 'షోడశోపచార పూజ (16 దివ్య పూజా విధానాలు)',
    icon: 'Crown',
    durationMinutes: 15,
    featured: true,
    category: 'ayyappa',
    sections: [
      {
        title: 'అయ్యప్ప ధ్యాన శ్లోకం',
        mantras: [
          {
            id: 'ap-dhyan',
            telugu: 'ధ్యాయేత్ చతుర్భుజం రక్తం పద్మాసన సమన్వితమ్ |\nజ్ఞానముద్రాం చ దండం చ పుష్పబాణం చ బిభ్రతమ్ ||\nకిరీటహారకేయూర రత్నకుండల శోభితమ్ |\nసర్వాలంకార సంయుక్తం శాస్తారం ప్రణమామ్యహమ్ ||',
            transliteration: 'Dhyayet Chaturbhujam Raktam Padmasana Samanwitam |\nJnanamudram Cha Dandam Cha Pushpabanam Cha Bibhratam ||\nKireetaharakeyura Ratnakundala Shobhitam |\nSarvalankara Samyuktam Shastaram Pranamamyaham ||',
            meaning: 'జ్ఞానముద్ర, దండము, పుష్పబాణము ధరించినవాడు, రత్న కిరీట కుండలాది ఆభరణములతో ప్రకాశించు శ్రీ ధర్మశాస్తా అయ్యప్ప స్వామిని సదా భక్తితో ధ్యానిస్తున్నాను.'
          }
        ]
      },
      {
        title: 'షోడశోపచార పూజ (16 ఉపచారములు)',
        description: 'ప్రతి ఉపచారానికి పుష్పము లేదా అక్షతలను సమర్పించవలెను',
        mantras: [
          {
                    "id": "sh-1",
                    "telugu": "ఓం శ్రీ హరిహరపుత్రాయ నమః - ధ్యాయామి (ధ్యానం)",
                    "transliteration": "Om Shri Hariharaputraya Namah - Dhyayami"
          },
          {
                    "id": "sh-2",
                    "telugu": "ఓం శ్రీ మణికంఠాయ నమః - ఆవాహయామి (ఆవాహన)",
                    "transliteration": "Om Shri Manikantaya Namah - Aavahayami"
          },
          {
                    "id": "sh-3",
                    "telugu": "ఓం శ్రీ ధర్మశాస్త్రే నమః - రత్న సింహాసనం సమర్పయామి (ఆసనం)",
                    "transliteration": "Om Shri Dharmashastre Namah - Ratna Simhasanam Samarpayami"
          },
          {
                    "id": "sh-4",
                    "telugu": "ఓం శ్రీ శబరీగిరీశాయ నమః - పాద్యం సమర్పయామి (పాదములు కడుగుటకు నీరు)",
                    "transliteration": "Om Shri Sabarigireeshaya Namah - Padyam Samarpayami"
          },
          {
                    "id": "sh-5",
                    "telugu": "ఓం శ్రీ లోకపూజ్యాయ నమః - అర్ఘ్యం సమర్పయామి (చేతులు కడుగుటకు జలము)",
                    "transliteration": "Om Shri Lokapoojyaya Namah - Arghyam Samarpayami"
          },
          {
                    "id": "sh-6",
                    "telugu": "ఓం శ్రీ పరమాత్మనే నమః - ఆచమనీయం సమర్పయామి (ఆచమనం)",
                    "transliteration": "Om Shri Paramatmane Namah - Aachamaneeyam Samarpayami"
          },
          {
                    "id": "sh-7",
                    "telugu": "ఓం శ్రీ పులివాహనాయ నమః - శుద్ధోదక స్నానం సమర్పయామి (స్నానము)",
                    "transliteration": "Om Shri Pulivahanaya Namah - Shuddhodaka Snanam Samarpayami"
          },
          {
                    "id": "sh-8",
                    "telugu": "ఓం శ్రీ మహాశాస్త్రే నమః - వస్త్ర యుగ్మం సమర్పయామి (వస్త్రములు)",
                    "transliteration": "Om Shri Mahashastre Namah - Vastra Yugmam Samarpayami"
          },
          {
                    "id": "sh-9",
                    "telugu": "ఓం శ్రీ మోహినీసుతాయ నమః - యజ్ఞోపవీతం సమర్పయామి (యజ్ఞోపవీతము)",
                    "transliteration": "Om Shri Mohinisutaya Namah - Yajnopaveetam Samarpayami"
          },
          {
                    "id": "sh-10",
                    "telugu": "ఓం శ్రీ చందనప్రియాయ నమః - దివ్య శ్రీగంధం సమర్పయామి (గంధము)",
                    "transliteration": "Om Shri Chandanapriyaya Namah - Divya Shrigandham Samarpayami"
          },
          {
                    "id": "sh-11",
                    "telugu": "ఓం శ్రీ పుష్పప్రియాయ నమః - నానావిధ పరిమళ పత్ర పుష్పాణి సమర్పయామి (పుష్పములు)",
                    "transliteration": "Om Shri Pushpapriyaya Namah - Pushpani Samarpayami"
          },
          {
                    "id": "sh-12",
                    "telugu": "ఓం శ్రీ ధూపప్రియాయ నమః - దశాంగం గుగ్గులోపేతం ధూపం సమర్పయామి (ధూపము)",
                    "transliteration": "Om Shri Dhoopapriyaya Namah - Dhoopam Samarpayami"
          },
          {
                    "id": "sh-13",
                    "telugu": "ఓం శ్రీ దీపప్రియాయ నమః - సాక్షాత్ ప్రత్యక్ష దీపం దర్శయామి (దీపము)",
                    "transliteration": "Om Shri Deepapriyaya Namah - Deepam Samarpayami"
          },
          {
                    "id": "sh-14",
                    "telugu": "ఓం శ్రీ నైవేద్యప్రియాయ నమః - మహానైవేద్యం (పాలు, పండ్లు, బెల్లం) సమర్పయామి (నైవేద్యము)",
                    "transliteration": "Om Shri Naivedyapriyaya Namah - Maha Naivedyam Samarpayami"
          },
          {
                    "id": "sh-15",
                    "telugu": "ఓం శ్రీ తాంబూలప్రియాయ నమః - తాంబూలం సమర్పయామి (తాంబూలము)",
                    "transliteration": "Om Shri Tamboolapriyaya Namah - Tamboolam Samarpayami"
          },
          {
                    "id": "sh-16",
                    "telugu": "ఓం శ్రీ ఆనందచిత్తాయ నమః - ఆనంద కర్పూర నీరాజనం సమర్పయామి (నీరాజనము)",
                    "transliteration": "Om Shri Anandachittaya Namah - Neerajanam Samarpayami"
          }
]
      }
    ]
  },
  // 5. AYYAPPA ANGA POOJA
  {
    id: 'anga-pooja',
    titleTelugu: 'అయ్యప్ప అంగ పూజ',
    titleEnglish: 'Ayyappa Anga Pooja',
    subtitle: 'స్వామి దివ్య 18 అంగముల పవిత్ర పుష్పార్చన',
    icon: 'Sparkles',
    durationMinutes: 8,
    featured: false,
    category: 'ayyappa',
    sections: [
      {
        title: 'శ్రీ ధర్మశాస్తా అంగ పూజ',
        description: 'పాదాల నుండి శిరస్సు వరకు పుష్పములతో అయ్యప్ప స్వామి దివ్య శరీరమును పూజించుట',
        mantras: [
          {
                    "id": "ang-1",
                    "telugu": "ఓం స్వామినే నమః - పాదౌ పూజయామి (పాదములు)",
                    "transliteration": "Om Swamine Namah - Padau Poojayami"
          },
          {
                    "id": "ang-2",
                    "telugu": "ఓం మహాశాస్త్రే నమః - గుల్ఫౌ పూజయామి (మడమలు)",
                    "transliteration": "Om Mahashastre Namah - Gulphau Poojayami"
          },
          {
                    "id": "ang-3",
                    "telugu": "ఓం వీరమణికంఠాయ నమః - జానునీ పూజయామి (మోకాళ్ళు)",
                    "transliteration": "Om Veeramanikantaya Namah - Januni Poojayami"
          },
          {
                    "id": "ang-4",
                    "telugu": "ఓం మోహినీపుత్రాయ నమః - ఊరూ పూజయామి (తొడలు)",
                    "transliteration": "Om Mohiniputraya Namah - Ooroo Poojayami"
          },
          {
                    "id": "ang-5",
                    "telugu": "ఓం ధర్మశాస్త్రే నమః - కటిం పూజయామి (నడుము)",
                    "transliteration": "Om Dharmashastre Namah - Katim Poojayami"
          },
          {
                    "id": "ang-6",
                    "telugu": "ఓం పంబాతీరవాసాయ నమః - నాభిం పూజయామి (నాభి)",
                    "transliteration": "Om Pambateeravasaya Namah - Nabhim Poojayami"
          },
          {
                    "id": "ang-7",
                    "telugu": "ఓం భూతనాథాయ నమః - ఉదరం పూజయామి (ఉదరము)",
                    "transliteration": "Om Bhootanathaya Namah - Udaram Poojayami"
          },
          {
                    "id": "ang-8",
                    "telugu": "ఓం హరిహరపుత్రాయ నమః - హృదయం పూజయామి (వక్షఃస్థలము)",
                    "transliteration": "Om Hariharaputraya Namah - Hridayam Poojayami"
          },
          {
                    "id": "ang-9",
                    "telugu": "ఓం తులసీమాలాధరాయ నమః - స్తనౌ పూజయామి (వక్షోజములు)",
                    "transliteration": "Om Tulasimaladharaya Namah - Stanau Poojayami"
          },
          {
                    "id": "ang-10",
                    "telugu": "ఓం పరమపురుషాయ నమః - కంఠం పూజయామి (కంఠము)",
                    "transliteration": "Om Paramapurushaya Namah - Kantham Poojayami"
          },
          {
                    "id": "ang-11",
                    "telugu": "ఓం బాణహస్తాయ నమః - భుజౌ పూజయామి (భుజములు)",
                    "transliteration": "Om Banahastaya Namah - Bhujau Poojayami"
          },
          {
                    "id": "ang-12",
                    "telugu": "ఓం ధనుర్ధరాయ నమః - హస్తౌ పూజయామి (చేతులు)",
                    "transliteration": "Om Dhanurdharaya Namah - Hastau Poojayami"
          },
          {
                    "id": "ang-13",
                    "telugu": "ఓం మధురభాషిణే నమః - ముఖం పూజయామి (ముఖము)",
                    "transliteration": "Om Madhurabhashine Namah - Mukham Poojayami"
          },
          {
                    "id": "ang-14",
                    "telugu": "ఓం దివ్యతేజసే నమః - నాసికాం పూజయామి (నాసిక/ముక్కు)",
                    "transliteration": "Om Divyatejase Namah - Nasikam Poojayami"
          },
          {
                    "id": "ang-15",
                    "telugu": "ఓం సూర్యప్రభాయ నమః - నేత్రే పూజయామి (నేత్రములు)",
                    "transliteration": "Om Suryaprabhaya Namah - Netre Poojayami"
          },
          {
                    "id": "ang-16",
                    "telugu": "ఓం సర్వజ్ఞాయ నమః - కర్ణౌ పూజయామి (చెవులు)",
                    "transliteration": "Om Sarvajnyaya Namah - Karnau Poojayami"
          },
          {
                    "id": "ang-17",
                    "telugu": "ఓం రత్నకిరీటధారిణే నమః - లలాటం పూజయామి (లలాటము/నుదురు)",
                    "transliteration": "Om Ratnakireetadharine Namah - Lalatam Poojayami"
          },
          {
                    "id": "ang-18",
                    "telugu": "ఓం శబరీగిరీశాయ నమః - శిరః పూజయామి (శిరస్సు)",
                    "transliteration": "Om Sabarigireeshaya Namah - Shirah Poojayami"
          },
          {
                    "id": "ang-19",
                    "telugu": "ఓం శ్రీ పూర్ణా పుష్కలా సమేత శ్రీ హరిహరపుత్ర స్వామినే నమః - సర్వాణ్యంగాని పూజయామి",
                    "transliteration": "Om Shri Poorna Pushkala Sameta Shri Hariharaputra Swamine Namah - Sarvanyangani Poojayami"
          }
]
      }
    ]
  },
  // 6. SHARANU GOSHA (108 Complete)
  {
    id: 'sharanu-gosha',
    titleTelugu: '108 శరణు ఘోష',
    titleEnglish: '108 Sharanu Gosha',
    subtitle: 'స్వామియే శరణం అయ్యప్ప - సంపూర్ణ 108 శరణు నామాలు',
    icon: 'HeartHandshake',
    durationMinutes: 10,
    featured: true,
    category: 'ayyappa',
    sections: [
      {
        title: 'సంపూర్ణ 108 శరణు ఘోష',
        description: 'భక్తి ప్రపత్తులతో శరణు ఘోషించినచో స్వామి అనుగ్రహం తప్పక లభించును',
        mantras: [
          {
            "id": "sg-1",
            "telugu": "1. ఓం స్వామియే శరణమయ్యప్ప"
          },
          {
            "id": "sg-2",
            "telugu": "2. ఓం అయ్యప్ప దైవమే శరణమయ్యప్ప"
          },
          {
            "id": "sg-3",
            "telugu": "3. ఓం అఖిలలోక నాయకనే శరణమయ్యప్ప"
          },
          {
            "id": "sg-4",
            "telugu": "4. ఓం అఖిలాండకోటి బ్రహ్మాండ నాయకనే శరణమయ్యప్ప"
          },
          {
            "id": "sg-5",
            "telugu": "5. ఓం అచ్చన్ కోవిల్ అరసే శరణమయ్యప్ప"
          },
          {
            "id": "sg-6",
            "telugu": "6. ఓం అన్నదాన ప్రభువే శరణమయ్యప్ప"
          },
          {
            "id": "sg-7",
            "telugu": "7. ఓం అంజక సుతవే శరణమయ్యప్ప"
          },
          {
            "id": "sg-8",
            "telugu": "8. ఓం అభిషేక ప్రియనే శరణమయ్యప్ప"
          },
          {
            "id": "sg-9",
            "telugu": "9. ఓం అలుదా మేడే శరణమయ్యప్ప"
          },
          {
            "id": "sg-10",
            "telugu": "10. ఓం అనాథ నాథనే శరణమయ్యప్ప"
          },
          {
            "id": "sg-11",
            "telugu": "11. ఓం ఆదిమూల మహాగణపతి భగవానే శరణమయ్యప్ప"
          },
          {
            "id": "sg-12",
            "telugu": "12. ఓం ఓంకార మూర్తియే (జ్యోతియే) శరణమయ్యప్ప"
          },
          {
            "id": "sg-13",
            "telugu": "13. ఓం ఔదార్య మూర్తియే శరణమయ్యప్ప"
          },
          {
            "id": "sg-14",
            "telugu": "14. ఓం నెయ్యభిషేక ప్రియనే శరణమయ్యప్ప"
          },
          {
            "id": "sg-15",
            "telugu": "15. ఓం కర్పూర పరిమళ శోభిత ప్రియనే శరణమయ్యప్ప"
          },
          {
            "id": "sg-16",
            "telugu": "16. ఓం కరిమల వాసనే శరణమయ్యప్ప"
          },
          {
            "id": "sg-17",
            "telugu": "17. ఓం కరిమల ఏట్రమే శరణమయ్యప్ప"
          },
          {
            "id": "sg-18",
            "telugu": "18. ఓం కరిమల ఇరక్కమే శరణమయ్యప్ప"
          },
          {
            "id": "sg-19",
            "telugu": "19. ఓం కరుణా మూర్తియే శరణమయ్యప్ప"
          },
          {
            "id": "sg-20",
            "telugu": "20. ఓం కలియుగ వరదనే శరణమయ్యప్ప"
          },
          {
            "id": "sg-21",
            "telugu": "21. ఓం కరుప్పు స్వామియే శరణమయ్యప్ప"
          },
          {
            "id": "sg-22",
            "telugu": "22. ఓం కళిడం కుండ్రమే శరణమయ్యప్ప"
          },
          {
            "id": "sg-23",
            "telugu": "23. ఓం కాంతామలై జ్యోతియే శరణమయ్యప్ప"
          },
          {
            "id": "sg-24",
            "telugu": "24. ఓం కానన వాసవే శరణమయ్యప్ప"
          },
          {
            "id": "sg-25",
            "telugu": "25. ఓం కుళత్తుపుళై బాలకనే శరణమయ్యప్ప"
          },
          {
            "id": "sg-26",
            "telugu": "26. ఓం ఆర్యంగావయ్యనే శరణమయ్యప్ప"
          },
          {
            "id": "sg-27",
            "telugu": "27. ఓం ఆశ్రిత రక్షకనే శరణమయ్యప్ప"
          },
          {
            "id": "sg-28",
            "telugu": "28. ఓం ఇరుముడి ప్రియనే (వాంఛనే) శరణమయ్యప్ప"
          },
          {
            "id": "sg-29",
            "telugu": "29. ఓం ఇష్ట ప్రదాయకనే శరణమయ్యప్ప"
          },
          {
            "id": "sg-30",
            "telugu": "30. ఓం ఇందిరా రమణ ప్రియనే శరణమయ్యప్ప"
          },
          {
            "id": "sg-31",
            "telugu": "31. ఓం ఇంద్ర గర్వ భంగనే శరణమయ్యప్ప"
          },
          {
            "id": "sg-32",
            "telugu": "32. ఓం ఈశ్వర తనయనే శరణమయ్యప్ప"
          },
          {
            "id": "sg-33",
            "telugu": "33. ఓం ఉమా సుతనే శరణమయ్యప్ప"
          },
          {
            "id": "sg-34",
            "telugu": "34. ఓం ఊర్ధ్వ రేతనే శరణమయ్యప్ప"
          },
          {
            "id": "sg-35",
            "telugu": "35. ఓం ఎరిమేలి ధర్మశాస్తావే శరణమయ్యప్ప"
          },
          {
            "id": "sg-36",
            "telugu": "36. ఓం ఎన్‌కుల దైవమే శరణమయ్యప్ప"
          },
          {
            "id": "sg-37",
            "telugu": "37. ఓం ఏకాంత మూర్తియే శరణమయ్యప్ప"
          },
          {
            "id": "sg-38",
            "telugu": "38. ఓం ఐందుమలై వాసనే శరణమయ్యప్ప"
          },
          {
            "id": "sg-39",
            "telugu": "39. ఓం ఐశ్వర్య మూర్తియే శరణమయ్యప్ప"
          },
          {
            "id": "sg-40",
            "telugu": "40. ఓం గణపతి సోదరనే శరణమయ్యప్ప"
          },
          {
            "id": "sg-41",
            "telugu": "41. ఓం గంధాభిషేక ప్రియనే శరణమయ్యప్ప"
          },
          {
            "id": "sg-42",
            "telugu": "42. ఓం ఘంటా నాద ప్రియనే శరణమయ్యప్ప"
          },
          {
            "id": "sg-43",
            "telugu": "43. ఓం జ్ఞాన సంపద మూర్తియే శరణమయ్యప్ప"
          },
          {
            "id": "sg-44",
            "telugu": "44. ఓం చల్లని దైవమే శరణమయ్యప్ప"
          },
          {
            "id": "sg-45",
            "telugu": "45. ఓం ఛాయా రూపమే శరణమయ్యప్ప"
          },
          {
            "id": "sg-46",
            "telugu": "46. ఓం జగద్ధరనే శరణమయ్యప్ప"
          },
          {
            "id": "sg-47",
            "telugu": "47. ఓం జగదానంద దాయకనే శరణమయ్యప్ప"
          },
          {
            "id": "sg-48",
            "telugu": "48. ఓం జగత్ పోషక మూర్తియే శరణమయ్యప్ప"
          },
          {
            "id": "sg-49",
            "telugu": "49. ఓం టెంకాయ నీరభిషేక ప్రియనే శరణమయ్యప్ప"
          },
          {
            "id": "sg-50",
            "telugu": "50. ఓం నాగరాజనే శరణమయ్యప్ప"
          },
          {
            "id": "sg-51",
            "telugu": "51. ఓం ఢంకా నాద ప్రియనే శరణమయ్యప్ప"
          },
          {
            "id": "sg-52",
            "telugu": "52. ఓం తంజం అలిప్పవనే శరణమయ్యప్ప"
          },
          {
            "id": "sg-53",
            "telugu": "53. ఓం తారకబ్రహ్మ మూర్తియే (స్వరూప) శరణమయ్యప్ప"
          },
          {
            "id": "sg-54",
            "telugu": "54. ఓం త్రిమూర్తి ప్రియనే శరణమయ్యప్ప"
          },
          {
            "id": "sg-55",
            "telugu": "55. ఓం నవరత్న కిరీట ధారనే శరణమయ్యప్ప"
          },
          {
            "id": "sg-56",
            "telugu": "56. ఓం నవనీత శక్తనే శరణమయ్యప్ప"
          },
          {
            "id": "sg-57",
            "telugu": "57. ఓం నారాయణ సుతవే శరణమయ్యప్ప"
          },
          {
            "id": "sg-58",
            "telugu": "58. ఓం ధమరుక ప్రియ సుతనే (తనయనే) శరణమయ్యప్ప"
          },
          {
            "id": "sg-59",
            "telugu": "59. ఓం నిత్య బ్రహ్మచారియే శరణమయ్యప్ప"
          },
          {
            "id": "sg-60",
            "telugu": "60. ఓం నీలిమలై ఏట్రమే (వాసనే) శరణమయ్యప్ప"
          },
          {
            "id": "sg-61",
            "telugu": "61. ఓం పంపా వాసనే శరణమయ్యప్ప"
          },
          {
            "id": "sg-62",
            "telugu": "62. ఓం పంచామృతాభిషేక ప్రియనే శరణమయ్యప్ప"
          },
          {
            "id": "sg-63",
            "telugu": "63. ఓం పందళ రాజ కుమారనే శరణమయ్యప్ప"
          },
          {
            "id": "sg-64",
            "telugu": "64. ఓం పంబయిల్ బిరక్కే శరణమయ్యప్ప"
          },
          {
            "id": "sg-65",
            "telugu": "65. ఓం పరబ్రహ్మజ్యోతియే శరణమయ్యప్ప"
          },
          {
            "id": "sg-66",
            "telugu": "66. ఓం పరాక్రమ శాలియే శరణమయ్యప్ప"
          },
          {
            "id": "sg-67",
            "telugu": "67. ఓం పంబాప్పునలమే శరణమయ్యప్ప"
          },
          {
            "id": "sg-68",
            "telugu": "68. ఓం పదునెనిమిది సోపానాధిపతియే శరణమయ్యప్ప"
          },
          {
            "id": "sg-69",
            "telugu": "69. ఓం పాప సంహారనే (వినాశకనే) శరణమయ్యప్ప"
          },
          {
            "id": "sg-70",
            "telugu": "70. ఓం పుణ్యమూర్తియే శరణమయ్యప్ప"
          },
          {
            "id": "sg-71",
            "telugu": "71. ఓం పొన్నప్ప స్వామియే శరణమయ్యప్ప"
          },
          {
            "id": "sg-72",
            "telugu": "72. ఓం పొన్నంబల వాసవే శరణమయ్యప్ప"
          },
          {
            "id": "sg-73",
            "telugu": "73. ఓం పెరియాన వట్టమే శరణమయ్యప్ప"
          },
          {
            "id": "sg-74",
            "telugu": "74. ఓం పౌరుష శక్తి మూర్తియే శరణమయ్యప్ప"
          },
          {
            "id": "sg-75",
            "telugu": "75. ఓం బంధవిముక్తనే శరణమయ్యప్ప"
          },
          {
            "id": "sg-76",
            "telugu": "76. ఓం భక్తవత్సలనే శరణమయ్యప్ప"
          },
          {
            "id": "sg-77",
            "telugu": "77. ఓం భస్మాభిషేక ప్రియనే శరణమయ్యప్ప"
          },
          {
            "id": "sg-78",
            "telugu": "78. ఓం భూత నాథనే శరణమయ్యప్ప"
          },
          {
            "id": "sg-79",
            "telugu": "79. ఓం మణికంఠ దైవమే శరణమయ్యప్ప"
          },
          {
            "id": "sg-80",
            "telugu": "80. ఓం మదగజ వాహననే శరణమయ్యప్ప"
          },
          {
            "id": "sg-81",
            "telugu": "81. ఓం మహిషి మర్దననే శరణమయ్యప్ప"
          },
          {
            "id": "sg-82",
            "telugu": "82. ఓం మకర జ్యోతియే శరణమయ్యప్ప"
          },
          {
            "id": "sg-83",
            "telugu": "83. ఓం మాళికాపురోత్తము మంజమాతాయే శరణమయ్యప్ప"
          },
          {
            "id": "sg-84",
            "telugu": "84. ఓం మోహిని సుతనే శరణమయ్యప్ప"
          },
          {
            "id": "sg-85",
            "telugu": "85. ఓం మురళీలోల గాన ప్రియనే శరణమయ్యప్ప"
          },
          {
            "id": "sg-86",
            "telugu": "86. ఓం మోహన రూపమే (మోహవినాశకనే) శరణమయ్యప్ప"
          },
          {
            "id": "sg-87",
            "telugu": "87. ఓం యాదవ ప్రియనే శరణమయ్యప్ప"
          },
          {
            "id": "sg-88",
            "telugu": "88. ఓం యజ్ఞ ప్రియనే శరణమయ్యప్ప"
          },
          {
            "id": "sg-89",
            "telugu": "89. ఓం యోగ మూర్తియే శరణమయ్యప్ప"
          },
          {
            "id": "sg-90",
            "telugu": "90. ఓం రక్షణ మూర్తియే శరణమయ్యప్ప"
          },
          {
            "id": "sg-91",
            "telugu": "91. ఓం రుద్రాంశ మూర్తియే శరణమయ్యప్ప"
          },
          {
            "id": "sg-92",
            "telugu": "92. ఓం లంబోదర ప్రియనే శరణమయ్యప్ప"
          },
          {
            "id": "sg-93",
            "telugu": "93. ఓం లక్ష్మీ వల్లభ ప్రియనే శరణమయ్యప్ప"
          },
          {
            "id": "sg-94",
            "telugu": "94. ఓం వన్‌పులి వాహననే శరణమయ్యప్ప"
          },
          {
            "id": "sg-95",
            "telugu": "95. ఓం వావరు స్వామియే శరణమయ్యప్ప"
          },
          {
            "id": "sg-96",
            "telugu": "96. ఓం విల్లాలి వీరనే శరణమయ్యప్ప"
          },
          {
            "id": "sg-97",
            "telugu": "97. ఓం వీరమణి గండనే శరణమయ్యప్ప"
          },
          {
            "id": "sg-98",
            "telugu": "98. ఓం శక్తిదేవ కుమారనే శరణమయ్యప్ప"
          },
          {
            "id": "sg-99",
            "telugu": "99. ఓం శరణాగత వత్సలనే శరణమయ్యప్ప"
          },
          {
            "id": "sg-100",
            "telugu": "100. ఓం శరణుఘోష ప్రియనే శరణమయ్యప్ప"
          },
          {
            "id": "sg-101",
            "telugu": "101. ఓం శబరి వీరమే శరణమయ్యప్ప"
          },
          {
            "id": "sg-102",
            "telugu": "102. ఓం శత్రు సంహార మూర్తియే శరణమయ్యప్ప"
          },
          {
            "id": "sg-103",
            "telugu": "103. ఓం షణ్ముఖ సోదరనే శరణమయ్యప్ప"
          },
          {
            "id": "sg-104",
            "telugu": "104. ఓం సకల రోగ నివారణ ధన్వంతర మూర్తియే శరణమయ్యప్ప"
          },
          {
            "id": "sg-105",
            "telugu": "105. ఓం సచ్చిదానంద స్వరూపనే శరణమయ్యప్ప"
          },
          {
            "id": "sg-106",
            "telugu": "106. ఓం సకల కళా రూపనే శరణమయ్యప్ప"
          },
          {
            "id": "sg-107",
            "telugu": "107. ఓం సంకట హారనే శరణమయ్యప్ప"
          },
          {
            "id": "sg-108",
            "telugu": "108. ఓం సద్గురునాథ మూర్తియే శరణమయ్యప్ప"
          }
        ]
      },
      {
        title: 'శరణుఘోష ముగింపు ప్రార్థన',
        mantras: [
          {
            "id": "sg-closing",
            "telugu": "తెలిసి తెలియక చేసిన తప్పులను మన్నించి\nహరిహర సుతన్ ఆనందచిత్తన్ అయ్యప్ప\nస్వామియే శరణమయ్యప్ప"
          }
        ]
      }
    ]
  },
  // 7. AYYAPPA ASHTOTTARAM (108 Complete)
  {
    id: 'ashtottaram',
    titleTelugu: 'అయ్యప్ప అష్టోత్తర శత నామావళి',
    titleEnglish: 'Ayyappa Ashtottaram',
    subtitle: 'శ్రీ అయ్యప్ప స్వామి వారి 108 దివ్య నామావళి పుష్పార్చన',
    icon: 'BookOpen',
    durationMinutes: 12,
    featured: true,
    category: 'ayyappa',
    sections: [
      {
        title: 'శ్రీ అయ్యప్ప అష్టోత్తర శత నామావళి (108)',
        description: 'ఓం శ్రీ స్వామినే నమః - ప్రతి నామానికి పుష్పము లేదా అక్షతలు సమర్పించవలెను',
        // Book-photo transcription, pages 12–19. Spellings at 29, 82, 85,
        // and 86 are provisional because those words are blurred in the source.
        mantras: [
          {
            "id": "as-1",
            "telugu": "1. ఓం మహాశాస్త్రే నమః"
          },
          {
            "id": "as-2",
            "telugu": "2. ఓం శిల్పశాస్త్రే నమః"
          },
          {
            "id": "as-3",
            "telugu": "3. ఓం లోకశాస్త్రే నమః"
          },
          {
            "id": "as-4",
            "telugu": "4. ఓం మహాబలాయ నమః"
          },
          {
            "id": "as-5",
            "telugu": "5. ఓం ధర్మశాస్త్రే నమః"
          },
          {
            "id": "as-6",
            "telugu": "6. ఓం వీరశాస్త్రే నమః"
          },
          {
            "id": "as-7",
            "telugu": "7. ఓం కాలశాస్త్రే నమః"
          },
          {
            "id": "as-8",
            "telugu": "8. ఓం మహౌజసే నమః"
          },
          {
            "id": "as-9",
            "telugu": "9. ఓం గజాధిపాయ నమః"
          },
          {
            "id": "as-10",
            "telugu": "10. ఓం అంగపతయే నమః"
          },
          {
            "id": "as-11",
            "telugu": "11. ఓం వ్యాఘ్రపతయే నమః"
          },
          {
            "id": "as-12",
            "telugu": "12. ఓం మహాద్యుతయే నమః"
          },
          {
            "id": "as-13",
            "telugu": "13. ఓం గణాధ్యక్షాయ నమః"
          },
          {
            "id": "as-14",
            "telugu": "14. ఓం మహాగుణగణాయ నమః"
          },
          {
            "id": "as-15",
            "telugu": "15. ఓం అగ్రగణ్యాయ నమః"
          },
          {
            "id": "as-16",
            "telugu": "16. ఓం ఋగ్వేదరూపాయ నమః"
          },
          {
            "id": "as-17",
            "telugu": "17. ఓం నక్షత్రాయ నమః"
          },
          {
            "id": "as-18",
            "telugu": "18. ఓం చంద్రరూపాయ నమః"
          },
          {
            "id": "as-19",
            "telugu": "19. ఓం వలాహకాయ నమః"
          },
          {
            "id": "as-20",
            "telugu": "20. ఓం దూర్వాయ నమః"
          },
          {
            "id": "as-21",
            "telugu": "21. ఓం శ్యామాయ నమః"
          },
          {
            "id": "as-22",
            "telugu": "22. ఓం మహారూపాయ నమః"
          },
          {
            "id": "as-23",
            "telugu": "23. ఓం క్రూరదృష్టయే నమః"
          },
          {
            "id": "as-24",
            "telugu": "24. ఓం అనామయాయ నమః"
          },
          {
            "id": "as-25",
            "telugu": "25. ఓం త్రినేత్రాయ నమః"
          },
          {
            "id": "as-26",
            "telugu": "26. ఓం ఉత్పలాకారాయ నమః"
          },
          {
            "id": "as-27",
            "telugu": "27. ఓం కాలాంతకాయ నమః"
          },
          {
            "id": "as-28",
            "telugu": "28. ఓం నరాధిపాయ నమః"
          },
          {
            "id": "as-29",
            "telugu": "29. ఓం దక్షమఖాంతకాయ నమః"
          },
          {
            "id": "as-30",
            "telugu": "30. ఓం కల్హారకుసుమప్రియాయ నమః"
          },
          {
            "id": "as-31",
            "telugu": "31. ఓం మదనాయ నమః"
          },
          {
            "id": "as-32",
            "telugu": "32. ఓం మాధవసుతాయ నమః"
          },
          {
            "id": "as-33",
            "telugu": "33. ఓం మందారకుసుమప్రియాయ నమః"
          },
          {
            "id": "as-34",
            "telugu": "34. ఓం మదాలసాయ నమః"
          },
          {
            "id": "as-35",
            "telugu": "35. ఓం వీరశాస్త్రే నమః"
          },
          {
            "id": "as-36",
            "telugu": "36. ఓం మహాసర్పవిభూషణాయ నమః"
          },
          {
            "id": "as-37",
            "telugu": "37. ఓం మహాసురాయ నమః"
          },
          {
            "id": "as-38",
            "telugu": "38. ఓం మహాధీరాయ నమః"
          },
          {
            "id": "as-39",
            "telugu": "39. ఓం మహాపాపవినాశకాయ నమః"
          },
          {
            "id": "as-40",
            "telugu": "40. ఓం అసిహస్తాయ నమః"
          },
          {
            "id": "as-41",
            "telugu": "41. ఓం శరధరాయ నమః"
          },
          {
            "id": "as-42",
            "telugu": "42. ఓం హాలాహలధరసుతాయ నమః"
          },
          {
            "id": "as-43",
            "telugu": "43. ఓం అగ్నినయనాయ నమః"
          },
          {
            "id": "as-44",
            "telugu": "44. ఓం అర్జునపతయే నమః"
          },
          {
            "id": "as-45",
            "telugu": "45. ఓం అనంగమదనాతురాయ నమః"
          },
          {
            "id": "as-46",
            "telugu": "46. ఓం దుష్టగ్రహాధిపాయ నమః"
          },
          {
            "id": "as-47",
            "telugu": "47. ఓం శాస్త్రే నమః"
          },
          {
            "id": "as-48",
            "telugu": "48. ఓం శిష్టరక్షణదీక్షితాయ నమః"
          },
          {
            "id": "as-49",
            "telugu": "49. ఓం రాజరాజార్చితాయ నమః"
          },
          {
            "id": "as-50",
            "telugu": "50. ఓం రాజశేఖరాయ నమః"
          },
          {
            "id": "as-51",
            "telugu": "51. ఓం రాజసత్తమాయ నమః"
          },
          {
            "id": "as-52",
            "telugu": "52. ఓం మంజులకేశాయ నమః"
          },
          {
            "id": "as-53",
            "telugu": "53. ఓం వరరుచయే నమః"
          },
          {
            "id": "as-54",
            "telugu": "54. ఓం వరదాయ నమః"
          },
          {
            "id": "as-55",
            "telugu": "55. ఓం వాయువాహనాయ నమః"
          },
          {
            "id": "as-56",
            "telugu": "56. ఓం వజ్రాంగాయ నమః"
          },
          {
            "id": "as-57",
            "telugu": "57. ఓం విష్ణుపుత్రాయ నమః"
          },
          {
            "id": "as-58",
            "telugu": "58. ఓం ఖడ్గపాణయే నమః"
          },
          {
            "id": "as-59",
            "telugu": "59. ఓం బలోద్ధతాయ నమః"
          },
          {
            "id": "as-60",
            "telugu": "60. ఓం త్రిలోకజ్ఞానాయ నమః"
          },
          {
            "id": "as-61",
            "telugu": "61. ఓం అతిబలాయ నమః"
          },
          {
            "id": "as-62",
            "telugu": "62. ఓం కస్తూరితిలకాంచితాయ నమః"
          },
          {
            "id": "as-63",
            "telugu": "63. ఓం పుష్కరాయ నమః"
          },
          {
            "id": "as-64",
            "telugu": "64. ఓం పూర్ణధవళాయ నమః"
          },
          {
            "id": "as-65",
            "telugu": "65. ఓం పూర్ణేశాయ నమః"
          },
          {
            "id": "as-66",
            "telugu": "66. ఓం కృపాలయాయ నమః"
          },
          {
            "id": "as-67",
            "telugu": "67. ఓం మదనాధిపాయ నమః"
          },
          {
            "id": "as-68",
            "telugu": "68. ఓం పాశహస్తాయ నమః"
          },
          {
            "id": "as-69",
            "telugu": "69. ఓం భయాపహాయ నమః"
          },
          {
            "id": "as-70",
            "telugu": "70. ఓం భీకరరూపాయ నమః"
          },
          {
            "id": "as-71",
            "telugu": "71. ఓం పాపఘ్నాయ నమః"
          },
          {
            "id": "as-72",
            "telugu": "72. ఓం పాషండరుధిరాశనాయ నమః"
          },
          {
            "id": "as-73",
            "telugu": "73. ఓం పంచపాండవసంరక్షకాయ నమః"
          },
          {
            "id": "as-74",
            "telugu": "74. ఓం పరపాపవినాశకాయ నమః"
          },
          {
            "id": "as-75",
            "telugu": "75. ఓం పంచవక్త్రకుమారాయ నమః"
          },
          {
            "id": "as-76",
            "telugu": "76. ఓం పంచాక్షరపరాయణాయ నమః"
          },
          {
            "id": "as-77",
            "telugu": "77. ఓం పండితాయ నమః"
          },
          {
            "id": "as-78",
            "telugu": "78. ఓం శ్రీధరసుతాయ నమః"
          },
          {
            "id": "as-79",
            "telugu": "79. ఓం న్యాయాయ నమః"
          },
          {
            "id": "as-80",
            "telugu": "80. ఓం కపర్దినే నమః"
          },
          {
            "id": "as-81",
            "telugu": "81. ఓం కవీనామధిపాయ నమః"
          },
          {
            "id": "as-82",
            "telugu": "82. ఓం కాండయజుషే నమః"
          },
          {
            "id": "as-83",
            "telugu": "83. ఓం తర్పణప్రియాయ నమః"
          },
          {
            "id": "as-84",
            "telugu": "84. ఓం శ్యామరూపాయ నమః"
          },
          {
            "id": "as-85",
            "telugu": "85. ఓం నవ్యధన్యాయ నమః"
          },
          {
            "id": "as-86",
            "telugu": "86. ఓం సత్త్వతాపవినాశకాయ నమః"
          },
          {
            "id": "as-87",
            "telugu": "87. ఓం వ్యాఘ్రచర్మధరాయ నమః"
          },
          {
            "id": "as-88",
            "telugu": "88. ఓం శూలినే నమః"
          },
          {
            "id": "as-89",
            "telugu": "89. ఓం కృపాళవే నమః"
          },
          {
            "id": "as-90",
            "telugu": "90. ఓం వేణువదనాయ నమః"
          },
          {
            "id": "as-91",
            "telugu": "91. ఓం కంబుకంఠాయ నమః"
          },
          {
            "id": "as-92",
            "telugu": "92. ఓం కళరవాయ నమః"
          },
          {
            "id": "as-93",
            "telugu": "93. ఓం కిరీటాదివిభూషితాయ నమః"
          },
          {
            "id": "as-94",
            "telugu": "94. ఓం ధూర్జటినే నమః"
          },
          {
            "id": "as-95",
            "telugu": "95. ఓం వీరనిలయాయ నమః"
          },
          {
            "id": "as-96",
            "telugu": "96. ఓం వీరాయ నమః"
          },
          {
            "id": "as-97",
            "telugu": "97. ఓం వీరేంద్రవందితాయ నమః"
          },
          {
            "id": "as-98",
            "telugu": "98. ఓం విశ్వరూపాయ నమః"
          },
          {
            "id": "as-99",
            "telugu": "99. ఓం వీరపతయే నమః"
          },
          {
            "id": "as-100",
            "telugu": "100. ఓం వివిధార్థఫలప్రదాయ నమః"
          },
          {
            "id": "as-101",
            "telugu": "101. ఓం మహారూపాయ నమః"
          },
          {
            "id": "as-102",
            "telugu": "102. ఓం చతుర్బాహవే నమః"
          },
          {
            "id": "as-103",
            "telugu": "103. ఓం పరపాశవిమోచకాయ నమః"
          },
          {
            "id": "as-104",
            "telugu": "104. ఓం నాగకుండలధరాయ నమః"
          },
          {
            "id": "as-105",
            "telugu": "105. ఓం కిరీటాయ నమః"
          },
          {
            "id": "as-106",
            "telugu": "106. ఓం జటాధరాయ నమః"
          },
          {
            "id": "as-107",
            "telugu": "107. ఓం నాగాలంకారసంయుక్తాయ నమః"
          },
          {
            "id": "as-108",
            "telugu": "108. ఓం నానారత్నవిభూషితదేహాయ నమః"
          }
        ]
      },
      {
        title: 'అయ్యప్ప స్వామి వందనం',
        mantras: [
          {
            "id": "as-closing",
            "telugu": "ఓం శ్రీ పూర్ణ పుష్కలాంబ సమేత\nశ్రీ హరిహరపుత్ర అయ్యప్ప స్వామినే నమః"
          }
        ]
      }
    ]
  },
    // 8. BHUTHANATHA PANCHARATNAM
  {
    id: 'bhuthanatha-pancharatnam',
    titleTelugu: 'భూతనాథ పంచరత్నం (లోకవీరం మహాపూజ్యం)',
    titleEnglish: 'Bhoothanatha Pancharatnam',
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
            telugu: '1. లోకవీరం మహాపూజ్యం సర్వరక్షాకరం విభుమ్ |\nపార్వతీ హృదయానందం శాస్తారం ప్రణమామ్యహమ్ ||',
            meaning: 'లోకములోని సమస్త వీరులకు అధిపతియైనవాడు, పూజింపదగినవాడు, సమస్త ప్రాణులను రక్షించు విభుడు, జగన్మాత పార్వతీదేవికి హృదయానందాన్ని కలిగించే ఆ శ్రీ ధర్మశాస్తా అయ్యప్ప స్వామికి నా నమస్కారములు.'
          },
          {
            id: 'bp-2',
            telugu: '2. విప్రపూజ్యం విశ్వవంద్యం విష్ణుశంభోః ప్రియం సుతమ్ |\nక్షిప్రప్రసాదనిరతం శాస్తారం ప్రణమామ్యహమ్ ||',
            meaning: 'పండితులచే ఆరాధింపబడువాడు, సమస్త విశ్వముచే నమస్కరింపబడువాడు, శ్రీహరి మరియు పరమేశ్వరుల ప్రియపుత్రుడు, భక్తులు స్మరించిన వెంటనే అనుగ్రహించే ఆ శ్రీ ధర్మశాస్తా అయ్యప్ప స్వామికి నా నమస్కారములు.'
          },
          {
            id: 'bp-3',
            telugu: '3. మత్తమాతంగ గమనం కారుణ్యామృతపూరితమ్ |\nసర్వవిఘ్నహరం దేవం శాస్తారం ప్రణమామ్యహమ్ ||',
            meaning: 'మదపుటేనుగు వంటి గంభీరమైన దివ్య గమనము కలవాడు, కారుణ్యామృతంతో నిండినవాడు, భక్తుల సమస్త విఘ్నాలను, ఆపదలను హరించే దైవమైన ఆ శ్రీ ధర్మశాస్తా అయ్యప్ప స్వామికి నా నమస్కారములు.'
          },
          {
            id: 'bp-4',
            telugu: '4. అస్మత్కులేశ్వరం దేవం శత్రుచ్ఛేదననాశనమ్ |\nఅస్మదిష్ట ప్రదాతారం శాస్తారం ప్రణమామ్యహమ్ ||',
            meaning: 'మా కులదైవము, శత్రువుల భయాలను సమూలంగా నాశనం చేయువాడు, భక్తులు కోరిన సమస్త శుభాలను, అభీష్టాలను నెరవేర్చే దాత అయిన ఆ శ్రీ ధర్మశాస్తా అయ్యప్ప స్వామికి నా నమస్కారములు.'
          },
          {
            id: 'bp-5',
            telugu: '5. పాండ్యేశవంశ తిలకం కేరళే కేళివిగ్రహమ్ |\nఆర్తత్రాణపరం దేవం శాస్తారం ప్రణమామ్యహమ్ ||',
            meaning: 'పాండ్య రాజవంశమునకు తిలకము వంటివాడు, కేరళ దివ్యభూమిలో అవతరించి దివ్య లీలలు చూపినవాడు, ఆపదలలో ఉన్న దీనులను రక్షించు పరమ దయాళువైన ఆ శ్రీ ధర్మశాస్తా అయ్యప్ప స్వామికి నా నమస్కారములు.'
          },
          {
            id: 'bp-6',
            telugu: '6. పంచరత్నాఖ్యమేతద్యో నిత్యం శుద్ధః పఠేన్నరః |\nతస్య ప్రసన్నో భగవాన్ శాస్తా వసతి మానసే ||',
            meaning: 'పవిత్రమైన ఈ "పంచరత్న స్తోత్రము"ను నిత్యం శుచియై భక్తిశ్రద్ధలతో పఠించే మానవునిపై భగవంతుడైన శ్రీ ధర్మశాస్తా ప్రసన్నుడై అతని హృదయమునందే నిత్య నివాసము చేయును.'
          },
          {
            id: 'bp-7',
            telugu: '7. అరుణోదయ సంకాశం నీలకుండల ధారిణం |\nనీలాంబర ధరం దేవం వందేహం శంకరాత్మజం ||',
            meaning: 'ఉదయభానుని వంటి అరుణ కాంతితో ప్రకాశించువాడు, నీలపు కుండలములను, నీలాంబరాలను ధరించిన పరమశివుని కుమారుడైన శ్రీ అయ్యప్ప స్వామికి నేను నమస్కరిస్తున్నాను.'
          },
          {
            id: 'bp-8',
            telugu: '8. చాప బాణం వామహస్తే, రౌప్య వేత్రంచ దక్షిణే |\nవిలసత్ కుండలధరం దేవం, వందేహం విష్ణు నందనం ||',
            meaning: 'ఎడమ చేతిలో విల్లంబులను, కుడి చేతిలో వెండి బెత్తమును ధరించి, చెవులలో మెరిసే దివ్య కుండలములతో శోభిల్లే శ్రీమహావిష్ణువు కుమారుడైన శ్రీ అయ్యప్ప స్వామికి నా నమస్కారములు.'
          },
          {
            id: 'bp-9',
            telugu: '9. వ్యాఘ్రారూఢం రక్తనేత్రం స్వర్ణమాలా విభూషణం |\nవీరపట్టధరం ఘోరం వందేహం శంభు నందనం ||',
            meaning: 'పులిపై అధిరోహించినవాడు, ఎర్రటి దివ్య నేత్రములు కలవాడు, బంగారు మాలలతో అలంకరింపబడినవాడు, నుదుట వీరపట్టమును ధరించి శంభు కుమారుడైన శ్రీ అయ్యప్ప స్వామికి నా నమస్కారములు.'
          },
          {
            id: 'bp-10',
            telugu: '10. కింకిణ్యోడ్డాణ భూషితం, పూర్ణచంద్ర నిభాననం |\nకిరాత రూప శాస్తారం, వందేహం పాండ్యనందనం ||',
            meaning: 'చిరుగంటల మొలత్రాడుతో శోభిల్లువాడు, పూర్ణచంద్రుని వంటి ప్రసన్న ముఖారవిందం కలవాడు, కిరాత రూపమును ధరించిన శాస్తా మరియు పాండ్యరాజు పుత్రుడైన శ్రీ అయ్యప్ప స్వామికి నా నమస్కారములు.'
          },
          {
            id: 'bp-11',
            telugu: '11. భూతబేతాళ సం సేవ్యం కాంచనాద్రి నివాసినం |\nమణికంఠ మితిఖ్యాతం వందేహం శక్తి నందనం ||',
            meaning: 'భూత, బేతాళ గణములచే సేవింపబడువాడు, కాంచనాద్రి (పవిత్ర శబరిమల పొన్నంబలమేడు) పై నివసించువాడు, మణికంఠుడిగా ప్రసిద్ధి చెందిన జగన్మాత శక్తి కుమారుడైన శ్రీ అయ్యప్ప స్వామికి నా నమస్కారములు.'
          },
          {
            id: 'bp-12',
            telugu: '12. భూత నాథ సదానందా, సర్వభూతా దయాపరా |\nరక్షరక్ష మహా బాహో, శాస్త్రేతుభ్యం నమోనమః ||\n(3 సార్లు పఠించవలెను)',
            meaning: 'ఓ భూతనాథా! సదానంద స్వరూపా! సమస్త ప్రాణులపై దయ గల కరుణామయుడా! మహా బాహువులు గల ఓ ధర్మశాస్తా! మమ్ములను సదా రక్షించుము, రక్షించుము. నీకు మాటిమాటికి నమస్కారములు.'
          },
          {
            id: 'bp-13',
            telugu: '13. శబరి పర్వతే పూజ్యం శాంతమానస సంస్థితం |\nభక్తాఘ పాపహంతారం అయ్యప్పన్ ప్రణమామ్యహమ్ ||',
            meaning: 'పవిత్ర శబరి గిరులపై పూజింపబడువాడు, ప్రశాంతమైన చిత్తముతో కొలువై ఉన్నవాడు, భక్తుల సమస్త పాపములను హరించే కరుణామయుడైన శ్రీ అయ్యప్ప స్వామికి నా భక్తిపూర్వక ప్రణామములు.'
          }
        ]
      }
    ]
  },
  // 9. MANGALA HARATHI
  {
    id: 'mangala-harathi',
    titleTelugu: 'మంగళ హారతి',
    titleEnglish: 'Mangala Harathi',
    subtitle: 'శ్రీ అయ్యప్ప స్వామి దివ్య కర్పూర నీరాజనం',
    icon: 'Flame',
    durationMinutes: 4,
    featured: false,
    category: 'ayyappa',
    sections: [
      {
        title: 'స్వామి మంగళ హారతి',
        mantras: [
          {
            id: 'mh-1',
            telugu: 'జయ మంగళం నిత్య శుభ మంగళం |\nశబరీగిరీశాయ శుభ మంగళం ||\nహరిహర సుతాయ ఆనంద మంగళం |\nమణికంఠ స్వామినే దివ్య మంగళం ||',
            transliteration: 'Jaya Mangalam Nitya Shubha Mangalam |\nSabarigireeshaya Shubha Mangalam ||\nHarihara Sutaya Aananda Mangalam |\nManikanta Swamine Divya Mangalam ||'
          },
          {
            id: 'mh-2',
            telugu: 'కర్పూర గౌరం కరుణావతారం సంసారసారం భుజగేంద్రహారమ్ |\nసదావసంతం హృదయారవిందే భవం భవానీసహితం నమామి ||',
            transliteration: 'Karpura Gauram Karunavataram Sansarasaram Bhujagendrahāram |\nSada Vasantam Hridayaravinde Bhavam Bhavani Sahitam Namami ||'
          }
        ]
      }
    ]
  },
  // 10. MANTRAPUSHPAM
  {
    id: 'mantrapushpam',
    titleTelugu: 'మంత్రపుష్పం',
    titleEnglish: 'Mantrapushpam',
    subtitle: 'వేదోక్త దివ్య మంత్రపుష్ప సమర్పణ',
    icon: 'Sparkles',
    durationMinutes: 5,
    featured: false,
    category: 'ayyappa',
    sections: [
      {
        title: 'వేద మంత్రపుష్పం',
        mantras: [
          {
            id: 'mp-1',
            telugu: 'యోఽపాం పుష్పం వేద | పుష్పవాన్ ప్రజావాన్ పశుమాన్ భవతి |\nచంద్రమా వా అపాం పుష్పమ్ | పుష్పవాన్ ప్రజావాన్ పశుమాన్ భవతి |\nయ ఏవం వేద | యోఽపామాయతనం వేద | ఆయతనవాన్ భవతి ||',
            transliteration: 'Yopaam Pushpam Veda | Pushpavan Prajavan Pashuman Bhavati |\nChandrama Va Apaam Pushpam | Pushpavan Prajavan Pashuman Bhavati |\nYa Evam Veda | Yopamayatanam Veda | Aayatanavan Bhavati ||'
          },
          {
            id: 'mp-2',
            telugu: 'ఓం రాజాధిరాజాయ ప్రసహ్యసాహినే | నమో వయం వైశ్రవణాయ కుర్మహే |\nస మే కామాన్ కామకామాయ మహ్యం | కామేశ్వరో వైశ్రవణో దధాతు |\nకుబేరాయ వైశ్రవణాయ | మహారాజాయ నమః ||',
            transliteration: 'Om Rajadhirajaya Prasahyasahine | Namo Vayam Vaishravanaya Kurmahe |\nSa Me Kaman Kamakamaya Mahyam | Kameshwaro Vaishravano Dadhatu |\nKuberaya Vaishravanaya | Maharajaya Namah ||'
          }
        ]
      }
    ]
  },
  // 11. ATMA PRADAKSHINA
  {
    id: 'atma-pradakshina',
    titleTelugu: 'ఆత్మ ప్రదక్షిణ నమస్కారం',
    titleEnglish: 'Atma Pradakshina',
    subtitle: 'సమస్త పాప నివారణ ప్రదక్షిణ శ్లోకం',
    icon: 'RotateCcw',
    durationMinutes: 3,
    featured: false,
    category: 'ayyappa',
    sections: [
      {
        title: 'ప్రదక్షిణ మంత్రం',
        mantras: [
          {
            id: 'ap-1',
            telugu: 'యానికాని చ పాపాని జన్మాంతరకృతాని చ |\nతాని తాని ప్రణశ్యంతి ప్రదక్షిణ పదే పదే ||\nపాపోఽహం పాపకర్మాఽహం పాపాత్మా పాపసంభవః |\nత్రాహి మాం కృపయా దేవ శరణాగతవత్సల ||',
            transliteration: 'Yanikani Cha Papani Janmantarakritani Cha |\nTani Tani Pranashyanti Pradakshina Pade Pade ||\nPapoham Papakarmaham Papatma Papasambhavah |\nTrahi Mam Kripaya Deva Saranagatavatsala ||'
          },
          {
            id: 'ap-2',
            telugu: 'అన్యథా శరణం నాస్తి త్వమేవ శరణం మమ |\nతస్మాత్కారుణ్య భావేన రక్ష రక్ష శబరీగిరీశ్వర ||',
            transliteration: 'Anyatha Saranam Nasti Tvameva Saranam Mama |\nTasmad Karunya Bhavena Raksha Raksha Sabarigireeshwara ||'
          }
        ]
      }
    ]
  },
    // 12. KSHAMAPANA MANTRAM
  {
    id: 'kshamapana-mantram',
    titleTelugu: 'క్షమాపణ మంత్రం (పూజా సమాప్తి)',
    titleEnglish: 'Kshamapana Mantram',
    subtitle: 'పూజా లోప నివారణ క్షమా ప్రార్థన & అయ్యప్ప ప్రత్యేక శరణు వేడుకోలు',
    icon: 'HeartHandshake',
    durationMinutes: 4,
    featured: true,
    category: 'ayyappa',
    sections: [
      {
        title: 'శ్రీ అయ్యప్ప విశేష క్షమాపణ ప్రార్థన (అత్యంత పవిత్రమైనది)',
        description: 'పూజ చివరలో స్వామి సన్నిధిలో భక్తితో సమర్పించవలసిన దివ్య క్షమా ప్రార్థన',
        mantras: [
          {
            id: 'km-ayyappa-special',
            telugu: 'జ్ఞానము తోనూ అజ్ఞానముతో ను మేము తెలిసీ తెలియక చేసిన సకల తప్పులను క్షమించి కాపాడవలెను.\n\nసత్య మగు అష్టాదశ సోపానములపై చిన్ముద్ర దారిగా అమరి యుండి సమస్త భూమండలాన్ని ఏకఛత్రాధిపత్యంగా పరిపాలించు ఓం శ్రీ హరిహరసుతుడు ఆనంద చిత్తుడైన అయ్యా.....\n\nఅయ్యప్ప స్వామి మీ దివ్య పాదారవిందములే మాకు శరణం శరణం శరణం అయ్యప్ప.\n\nస్వామియే శరణం అయ్యప్ప ......'
          }
        ]
      },
      {
        title: 'శ్రీ అయ్యప్ప నమస్కార మంత్రములు',
        description: 'శాస్తార ప్రణామ శ్లోకములు',
        mantras: [
          {
            id: 'km-namaskara-1',
            telugu: 'లోకవీరం మహాపూజ్యం సర్వరక్షాకరం విభుమ్ |\nమనోహరం సురారాధ్యం శాస్తారం ప్రణమామ్యహమ్ || 1 ||\nస్వామియే శరణం అయ్యప్ప'
          },
          {
            id: 'km-namaskara-2',
            telugu: 'విప్రపూజ్యం విశ్వవంద్యం విష్ణుశంభ్వోః ప్రియం సుతమ్ |\nప్రక్షిప్తభక్తలోకార్తిం శాస్తారం ప్రణమామ్యహమ్ || 2 ||\nస్వామియే శరణం అయ్యప్ప'
          },
          {
            id: 'km-namaskara-3',
            telugu: 'మత్తమాతంగగమనం కారుణ్యామృతపూరితమ్ |\nసర్వవిఘ్నహరం దేవం శాస్తారం ప్రణమామ్యహమ్ || 3 ||\nస్వామియే శరణం అయ్యప్ప'
          },
          {
            id: 'km-namaskara-4',
            telugu: 'అస్మత్ కులేశ్వరం దేవం అస్మచ్ఛత్రువినాశనమ్ |\nఅస్మదిష్టప్రదాతారం శాస్తారం ప్రణమామ్యహమ్ || 4 ||\nస్వామియే శరణం అయ్యప్ప'
          },
          {
            id: 'km-namaskara-5',
            telugu: 'పాండ్యేశవంశతిలకం కేరళే కేళివిగ్రహమ్ |\nఆర్తత్రాణపరం దేవం శాస్తారం ప్రణమామ్యహమ్ || 5 ||\nస్వామియే శరణం అయ్యప్ప'
          }
        ]
      },
      {
        title: 'సర్వదేవతా క్షమాపణ మంత్రములు',
        mantras: [
          {
            id: 'km-1',
            telugu: 'అపరాధ సహస్రాణి క్రియంతేఽహర్నిశం మయా |\nదాసోఽయమితి మాం మత్వా క్షమస్వ శబరీగిరీశ్వర ||'
          },
          {
            id: 'km-2',
            telugu: 'కరచరణ కృతం వా కాయజం కర్మజం వా |\nశ్రవణ నయనజం వా మానసం వాఽపరాధమ్ |\nవిహితమవిహితం వా సర్వమేతత్ క్షమస్వ |\nజయ జయ కరుణాబ్ధే శ్రీ శబరీగిరీశ్వర ||'
          },
          {
            id: 'km-3',
            telugu: 'కాయేన వాచా మనసేంద్రియైర్వా బుద్ధ్యాత్మనా వా ప్రకృతేః స్వభావాత్ |\nకరోమి యద్యత్ సకలం పరస్మై నారాయణాయేతి సమర్పయామి ||'
          }
        ]
      }
    ]
  },
  // 13. HARIVARASANAM
  {
    id: 'harivarasanam',
    titleTelugu: 'హరివరాసనం (విశ్వమోహనం)',
    titleEnglish: 'Harivarasanam',
    subtitle: 'శబరిమల రాత్రి నిద్ర పూజ & మంగళ హారతి గీతం',
    icon: 'Music',
    durationMinutes: 8,
    featured: true,
    category: 'ayyappa',
    sections: [
      {
        title: 'హరివరాసనం అష్టకం',
        description: 'శ్రీ అయ్యప్ప స్వామి వారి నిత్య పవళింపు సేవ (లాలీ పాట)',
        mantras: [
          {
            id: 'hv-1',
            telugu: 'హరివరాసనం విశ్వమోహనం\nహరిదధీశ్వరం ఆరాధ్యపాదుకమ్ |\nఅరివిమర్దనం నిత్యనర్తనమ్\nహరిహరాత్మజం దేవమాశ్రయే ||\n(శరణం అయ్యప్పా స్వామి శరణం అయ్యప్పా)',
            transliteration: 'Harivarasanam Vishwamohanam Haridadheeshwaram Aaradhyapadukam |\nArivimardanam Nityanartanam Hariharatmajam Devamashraye ||'
          },
          {
            id: 'hv-2',
            telugu: 'శరణకీర్తనం శక్తమానసం\nభరణలోలుపం నర్తనాలసమ్ |\nఅరుణభాసురం భూతనాయకం\nహరిహరాత్మజం దేవమాశ్రయే ||\n(శరణం అయ్యప్పా స్వామి శరణం అయ్యప్పా)',
            transliteration: 'Saranakeertanam Shaktamanasam Bharanalolupam Nartanālasam |\nArunabhasuram Bhootanayakam Hariharatmajam Devamashraye ||'
          },
          {
            id: 'hv-3',
            telugu: 'ప్రణయసత్యకం ప్రాణనాయకం\nప్రణతకల్పకం సుప్రభాంచితమ్ |\nప్రణవమందిరం కీర్తనప్రియం\nహరిహరాత్మజం దేవమాశ్రయే ||\n(శరణం అయ్యప్పా స్వామి శరణం అయ్యప్పా)',
            transliteration: 'Pranayasatyakam Prananayakam Pranatakalpakam Suprabhanchitam |\nPranavamandiram Keertanapriyam Hariharatmajam Devamashraye ||'
          },
          {
            id: 'hv-4',
            telugu: 'తురగవాహనం సుందరాననం\nవరగదాయుధం వేదవర్ణితమ్ |\nగురుకృపాకరం కీర్తనప్రియం\nహరిహరాత్మజం దేవమాశ్రయే ||\n(శరణం అయ్యప్పా స్వామి శరణం అయ్యప్పా)',
            transliteration: 'Turagavahanam Sundarananam Varagadayudham Vedavarnitam |\nGurukripakaram Keertanapriyam Hariharatmajam Devamashraye ||'
          },
          {
            id: 'hv-5',
            telugu: 'త్రిభువనార్చితం దేవతాత్మకం\nత్రినయనప్రభోః దివ్యబాలకమ్ |\nత్రిదశపూజితం చింతిప్రదం\nహరిహరాత్మజం దేవమాశ్రయే ||\n(శరణం అయ్యప్పా స్వామి శరణం అయ్యప్పా)',
            transliteration: 'Tribhuvanarchitam Devatatmakam Trinayanaprabhoh Divyabalakam |\nTridashapoojitam Chintipradam Hariharatmajam Devamashraye ||'
          },
          {
            id: 'hv-6',
            telugu: 'భవభయాపహం భావుకావహం\nభువనమోహనం భూతిభూషణమ్ |\nధవళవాహనం దివ్యవారణం\nహరిహరాత్మజం దేవమాశ్రయే ||\n(శరణం అయ్యప్పా స్వామి శరణం అయ్యప్పా)',
            transliteration: 'Bhavabhayapaham Bhavukavaham Bhuwanamohanam Bhootibhooshanam |\nDhavalavahanam Divyavaranam Hariharatmajam Devamashraye ||'
          },
          {
            id: 'hv-7',
            telugu: 'కలమృదుస్మితం సుందరాననం\nకలభకోమలం గాత్రమోహనమ్ |\nకళభకేసరీ కంఠమాలికం\nహరిహరాత్మజం దేవమాశ్రయే ||\n(శరణం అయ్యప్పా స్వామి శరణం అయ్యప్పా)',
            transliteration: 'Kalamridusmitam Sundarananam Kalabhakomalam Gatramohanam |\nKalabhakesari Kanthamalikam Hariharatmajam Devamashraye ||'
          },
          {
            id: 'hv-8',
            telugu: 'శ్రితజనప్రియం చింతితప్రదం\nశృతివిభూషణం సాధుజీవనమ్ |\nశృతిమనోహరం గీతలాలసం\nహరిహరాత్మజం దేవమాశ్రయే ||\n(శరణం అయ్యప్పా స్వామి శరణం అయ్యప్పా)',
            transliteration: 'Shritajanapriyam Chintitapradam Shrutivibhooshanam Sadhujeevanam |\nShrutimanoharam Geetalalasam Hariharatmajam Devamashraye ||'
          }
        ]
      }
    ]
  },
  // 14. PADI PAATALU
  {
    id: 'padi-paatalu',
    titleTelugu: 'పదునెట్టాంపడి (18 మెట్ల పాటలు)',
    titleEnglish: 'Padinettampadi Songs',
    subtitle: 'స్వామి శరణం అయ్యన్ శరణం • పదునెనిమిది మెట్ల స్తుతి',
    icon: 'Music',
    durationMinutes: 10,
    featured: false,
    category: 'ayyappa',
    sections: [
      {
        title: PADI_SONG.title,
        mantras: [
          {
            id: 'pp-1',
            telugu: PADI_SONG.lyrics,
          },
        ],
      },
    ]
  },
  // 15. LAKSHMI ASHTOTTARAM (108 Complete)
  {
    id: 'lakshmi-ashtottaram',
    titleTelugu: 'శ్రీ మహాలక్ష్మి అష్టోత్తర శత నామావళి',
    titleEnglish: 'Sri Mahalakshmi Ashtottaram',
    subtitle: 'అష్టలక్ష్మీ స్వరూపిణి శ్రీ లక్ష్మీదేవి 108 దివ్య నామావళి',
    icon: 'Sparkles',
    durationMinutes: 12,
    featured: true,
    category: 'ammavaru',
    sections: [
      {
        title: 'శ్రీ మహాలక్ష్మి అష్టోత్తర శత నామావళి (108)',
        description: 'ఓం శ్రీ మహాలక్ష్మ్యై నమః - సకల ఐశ్వర్య సిద్ధి కొరకు పుష్పార్చన',
        mantras: [
          {
            "id": "la-ash-1",
            "telugu": "1. ఓం శ్రీ ప్రకృత్యై నమః",
            "transliteration": "1. Om Shri Prakrityai Namah"
          },
          {
            "id": "la-ash-2",
            "telugu": "2. ఓం వికృత్యై నమః",
            "transliteration": "2. Om Vikrityai Namah"
          },
          {
            "id": "la-ash-3",
            "telugu": "3. ఓం విద్యాయై నమః",
            "transliteration": "3. Om Vidyayai Namah"
          },
          {
            "id": "la-ash-4",
            "telugu": "4. ఓం సర్వభూతహితప్రదాయై నమః",
            "transliteration": "4. Om Sarvabhootahitapradayai Namah"
          },
          {
            "id": "la-ash-5",
            "telugu": "5. ఓం శ్రద్ధాయై నమః",
            "transliteration": "5. Om Shraddhayai Namah"
          },
          {
            "id": "la-ash-6",
            "telugu": "6. ఓం విభూత్యై నమః",
            "transliteration": "6. Om Vibhootyai Namah"
          },
          {
            "id": "la-ash-7",
            "telugu": "7. ఓం సురభ్యై నమః",
            "transliteration": "7. Om Surabhyai Namah"
          },
          {
            "id": "la-ash-8",
            "telugu": "8. ఓం పరమాత్మికాయై నమః",
            "transliteration": "8. Om Paramatmikayai Namah"
          },
          {
            "id": "la-ash-9",
            "telugu": "9. ఓం వాచే నమః",
            "transliteration": "9. Om Vaache Namah"
          },
          {
            "id": "la-ash-10",
            "telugu": "10. ఓం పద్మాలయాయై నమః",
            "transliteration": "10. Om Padmalayayai Namah"
          },
          {
            "id": "la-ash-11",
            "telugu": "11. ఓం పద్మాయై నమః",
            "transliteration": "11. Om Padmayai Namah"
          },
          {
            "id": "la-ash-12",
            "telugu": "12. ఓం శుచయే నమః",
            "transliteration": "12. Om Shuchaye Namah"
          },
          {
            "id": "la-ash-13",
            "telugu": "13. ఓం స్వాహాయై నమః",
            "transliteration": "13. Om Swahayai Namah"
          },
          {
            "id": "la-ash-14",
            "telugu": "14. ఓం స్వధాయై నమః",
            "transliteration": "14. Om Swadhayai Namah"
          },
          {
            "id": "la-ash-15",
            "telugu": "15. ఓం సుధాయై నమః",
            "transliteration": "15. Om Sudhayai Namah"
          },
          {
            "id": "la-ash-16",
            "telugu": "16. ఓం ధన్యాయై నమః",
            "transliteration": "16. Om Dhanyayai Namah"
          },
          {
            "id": "la-ash-17",
            "telugu": "17. ఓం హిరణ్మయ్యై నమః",
            "transliteration": "17. Om Hiranmayyai Namah"
          },
          {
            "id": "la-ash-18",
            "telugu": "18. ఓం లక్ష్మ్యై నమః",
            "transliteration": "18. Om Lakshmyai Namah"
          },
          {
            "id": "la-ash-19",
            "telugu": "19. ఓం నిత్యపుష్టాయై నమః",
            "transliteration": "19. Om Nityapushtayai Namah"
          },
          {
            "id": "la-ash-20",
            "telugu": "20. ఓం విభావర్యై నమః",
            "transliteration": "20. Om Vibhavaryai Namah"
          },
          {
            "id": "la-ash-21",
            "telugu": "21. ఓం అదిత్యై నమః",
            "transliteration": "21. Om Adityai Namah"
          },
          {
            "id": "la-ash-22",
            "telugu": "22. ఓం దిత్యై నమః",
            "transliteration": "22. Om Dityai Namah"
          },
          {
            "id": "la-ash-23",
            "telugu": "23. ఓం దీప్తాయై నమః",
            "transliteration": "23. Om Deeptayai Namah"
          },
          {
            "id": "la-ash-24",
            "telugu": "24. ఓం వసుధాయై నమః",
            "transliteration": "24. Om Vasudhayai Namah"
          },
          {
            "id": "la-ash-25",
            "telugu": "25. ఓం వసుధారిణ్యై నమః",
            "transliteration": "25. Om Vasudharinyai Namah"
          },
          {
            "id": "la-ash-26",
            "telugu": "26. ఓం కమలాయై నమః",
            "transliteration": "26. Om Kamalayai Namah"
          },
          {
            "id": "la-ash-27",
            "telugu": "27. ఓం కాంతాయై నమః",
            "transliteration": "27. Om Kantayai Namah"
          },
          {
            "id": "la-ash-28",
            "telugu": "28. ఓం కామాక్ష్యై నమః",
            "transliteration": "28. Om Kamakshyai Namah"
          },
          {
            "id": "la-ash-29",
            "telugu": "29. ఓం క్రోధసంభవాయై నమః",
            "transliteration": "29. Om Krodhasambhavayai Namah"
          },
          {
            "id": "la-ash-30",
            "telugu": "30. ఓం అనుగ్రహప్రదాయై నమః",
            "transliteration": "30. Om Anugrahapradayai Namah"
          },
          {
            "id": "la-ash-31",
            "telugu": "31. ఓం బుద్ధయే నమః",
            "transliteration": "31. Om Buddhaye Namah"
          },
          {
            "id": "la-ash-32",
            "telugu": "32. ఓం అనఘాయై నమః",
            "transliteration": "32. Om Anaghayai Namah"
          },
          {
            "id": "la-ash-33",
            "telugu": "33. ఓం హరివల్లభాయై నమః",
            "transliteration": "33. Om Harivallabhayai Namah"
          },
          {
            "id": "la-ash-34",
            "telugu": "34. ఓం అశోకాయై నమః",
            "transliteration": "34. Om Ashokayai Namah"
          },
          {
            "id": "la-ash-35",
            "telugu": "35. ఓం అమృతాయై నమః",
            "transliteration": "35. Om Amritayai Namah"
          },
          {
            "id": "la-ash-36",
            "telugu": "36. ఓం దీప్తాయై నమః",
            "transliteration": "36. Om Deeptayai Namah"
          },
          {
            "id": "la-ash-37",
            "telugu": "37. ఓం లోకశోకవినాశిన్యై నమః",
            "transliteration": "37. Om Lokashokavinashinyai Namah"
          },
          {
            "id": "la-ash-38",
            "telugu": "38. ఓం ధర్మనిలయాయై నమః",
            "transliteration": "38. Om Dharmanilayayai Namah"
          },
          {
            "id": "la-ash-39",
            "telugu": "39. ఓం కరుణాయై నమః",
            "transliteration": "39. Om Karunayai Namah"
          },
          {
            "id": "la-ash-40",
            "telugu": "40. ఓం లోకమాత్రే నమః",
            "transliteration": "40. Om Lokamatre Namah"
          },
          {
            "id": "la-ash-41",
            "telugu": "41. ఓం పద్మప్రియాయై నమః",
            "transliteration": "41. Om Padmapriyayai Namah"
          },
          {
            "id": "la-ash-42",
            "telugu": "42. ఓం పద్మహస్తాయై నమః",
            "transliteration": "42. Om Padmahastayai Namah"
          },
          {
            "id": "la-ash-43",
            "telugu": "43. ఓం పద్మాక్ష్యై నమః",
            "transliteration": "43. Om Padmakshyai Namah"
          },
          {
            "id": "la-ash-44",
            "telugu": "44. ఓం పద్మసుందర్యై నమః",
            "transliteration": "44. Om Padmasundaryai Namah"
          },
          {
            "id": "la-ash-45",
            "telugu": "45. ఓం పద్మోద్భవాయై నమః",
            "transliteration": "45. Om Padmodbhavayai Namah"
          },
          {
            "id": "la-ash-46",
            "telugu": "46. ఓం పద్మముఖ్యై నమః",
            "transliteration": "46. Om Padmamukhyai Namah"
          },
          {
            "id": "la-ash-47",
            "telugu": "47. ఓం పద్మనాభప్రియాయై నమః",
            "transliteration": "47. Om Padmanabhapriyayai Namah"
          },
          {
            "id": "la-ash-48",
            "telugu": "48. ఓం రమాయై నమః",
            "transliteration": "48. Om Ramayai Namah"
          },
          {
            "id": "la-ash-49",
            "telugu": "49. ఓం పద్మమాలాధరాయై నమః",
            "transliteration": "49. Om Padmamaladharayai Namah"
          },
          {
            "id": "la-ash-50",
            "telugu": "50. ఓం దేవ్యై నమః",
            "transliteration": "50. Om Devyai Namah"
          },
          {
            "id": "la-ash-51",
            "telugu": "51. ఓం పద్మిన్యై నమః",
            "transliteration": "51. Om Padminyai Namah"
          },
          {
            "id": "la-ash-52",
            "telugu": "52. ఓం పద్మగంధిన్యై నమః",
            "transliteration": "52. Om Padmagandhinyai Namah"
          },
          {
            "id": "la-ash-53",
            "telugu": "53. ఓం పుణ్యగంధాయై నమః",
            "transliteration": "53. Om Punyagandhayai Namah"
          },
          {
            "id": "la-ash-54",
            "telugu": "54. ఓం సుప్రసన్నాయై నమః",
            "transliteration": "54. Om Suprasannayai Namah"
          },
          {
            "id": "la-ash-55",
            "telugu": "55. ఓం ప్రసాదాభిముఖ్యై నమః",
            "transliteration": "55. Om Prasadabhimukhyai Namah"
          },
          {
            "id": "la-ash-56",
            "telugu": "56. ఓం ప్రభాయై నమః",
            "transliteration": "56. Om Prabhayai Namah"
          },
          {
            "id": "la-ash-57",
            "telugu": "57. ఓం చంద్రవదనాయై నమః",
            "transliteration": "57. Om Chandravadanayai Namah"
          },
          {
            "id": "la-ash-58",
            "telugu": "58. ఓం చంద్రాయై నమః",
            "transliteration": "58. Om Chandrayai Namah"
          },
          {
            "id": "la-ash-59",
            "telugu": "59. ఓం చంద్రసహోదర్యై నమః",
            "transliteration": "59. Om Chandrasahodaryai Namah"
          },
          {
            "id": "la-ash-60",
            "telugu": "60. ఓం చతుర్భుజాయై నమః",
            "transliteration": "60. Om Chaturbhujayai Namah"
          },
          {
            "id": "la-ash-61",
            "telugu": "61. ఓం చంద్రరూపాయై నమః",
            "transliteration": "61. Om Chandraroopayai Namah"
          },
          {
            "id": "la-ash-62",
            "telugu": "62. ఓం ఇందిరాయై నమః",
            "transliteration": "62. Om Indirayai Namah"
          },
          {
            "id": "la-ash-63",
            "telugu": "63. ఓం ఇందుశీతలాయై నమః",
            "transliteration": "63. Om Indusheetalayai Namah"
          },
          {
            "id": "la-ash-64",
            "telugu": "64. ఓం ఆహ్లాదజనన్యై నమః",
            "transliteration": "64. Om Aahladajananyai Namah"
          },
          {
            "id": "la-ash-65",
            "telugu": "65. ఓం పుష్ట్యై నమః",
            "transliteration": "65. Om Pushtyai Namah"
          },
          {
            "id": "la-ash-66",
            "telugu": "66. ఓం శివాయై నమః",
            "transliteration": "66. Om Shivayai Namah"
          },
          {
            "id": "la-ash-67",
            "telugu": "67. ఓం శివకర్యై నమః",
            "transliteration": "67. Om Shivakaryai Namah"
          },
          {
            "id": "la-ash-68",
            "telugu": "68. ఓం సత్యై నమః",
            "transliteration": "68. Om Satyai Namah"
          },
          {
            "id": "la-ash-69",
            "telugu": "69. ఓం విమలాయై నమః",
            "transliteration": "69. Om Vimalayai Namah"
          },
          {
            "id": "la-ash-70",
            "telugu": "70. ఓం విశ్వజనన్యై నమః",
            "transliteration": "70. Om Vishwajananyai Namah"
          },
          {
            "id": "la-ash-71",
            "telugu": "71. ఓం తుష్ట్యై నమః",
            "transliteration": "71. Om Tushtyai Namah"
          },
          {
            "id": "la-ash-72",
            "telugu": "72. ఓం దారిద్ర్యనాశిన్యై నమః",
            "transliteration": "72. Om Daridryanashinyai Namah"
          },
          {
            "id": "la-ash-73",
            "telugu": "73. ఓం ప్రీతిపుష్కరిణ్యై నమః",
            "transliteration": "73. Om Preetipushkarinyai Namah"
          },
          {
            "id": "la-ash-74",
            "telugu": "74. ఓం శాంతాయై నమః",
            "transliteration": "74. Om Shantayai Namah"
          },
          {
            "id": "la-ash-75",
            "telugu": "75. ఓం శుక్లమాల్యాంబరాయై నమః",
            "transliteration": "75. Om Shuklamalyambarayai Namah"
          },
          {
            "id": "la-ash-76",
            "telugu": "76. ఓం శ్రియై నమః",
            "transliteration": "76. Om Shriyai Namah"
          },
          {
            "id": "la-ash-77",
            "telugu": "77. ఓం భాస్కర్యై నమః",
            "transliteration": "77. Om Bhaskaryai Namah"
          },
          {
            "id": "la-ash-78",
            "telugu": "78. ఓం బిల్వనిలయాయై నమః",
            "transliteration": "78. Om Bilvanilayayai Namah"
          },
          {
            "id": "la-ash-79",
            "telugu": "79. ఓం వరారోహాయై నమః",
            "transliteration": "79. Om Vararohayai Namah"
          },
          {
            "id": "la-ash-80",
            "telugu": "80. ఓం యశస్విన్యై నమః",
            "transliteration": "80. Om Yashaswinyai Namah"
          },
          {
            "id": "la-ash-81",
            "telugu": "81. ఓం వసుంధరాయై నమః",
            "transliteration": "81. Om Vasundharayai Namah"
          },
          {
            "id": "la-ash-82",
            "telugu": "82. ఓం ఉదారాంగాయై నమః",
            "transliteration": "82. Om Udarangayai Namah"
          },
          {
            "id": "la-ash-83",
            "telugu": "83. ఓం హరిణ్యై నమః",
            "transliteration": "83. Om Harinyai Namah"
          },
          {
            "id": "la-ash-84",
            "telugu": "84. ఓం హేమమాలిన్యై నమః",
            "transliteration": "84. Om Hemamalinyai Namah"
          },
          {
            "id": "la-ash-85",
            "telugu": "85. ఓం ధనధాన్యకర్యై నమః",
            "transliteration": "85. Om Dhanadhanyakaryai Namah"
          },
          {
            "id": "la-ash-86",
            "telugu": "86. ఓం సిద్ధయే నమః",
            "transliteration": "86. Om Siddhaye Namah"
          },
          {
            "id": "la-ash-87",
            "telugu": "87. ఓం స్త్రైణసౌమ్యాయై నమః",
            "transliteration": "87. Om Strainasaumyayai Namah"
          },
          {
            "id": "la-ash-88",
            "telugu": "88. ఓం శుభప్రదాయై నమః",
            "transliteration": "88. Om Shubhapradayai Namah"
          },
          {
            "id": "la-ash-89",
            "telugu": "89. ఓం నృపవేశ్మగతానందాయై నమః",
            "transliteration": "89. Om Nripaveshmagatanandayai Namah"
          },
          {
            "id": "la-ash-90",
            "telugu": "90. ఓం వరలక్ష్మ్యై నమః",
            "transliteration": "90. Om Varalakshmyai Namah"
          },
          {
            "id": "la-ash-91",
            "telugu": "91. ఓం వసుప్రదాయై నమః",
            "transliteration": "91. Om Vasupradayai Namah"
          },
          {
            "id": "la-ash-92",
            "telugu": "92. ఓం శుభాయై నమః",
            "transliteration": "92. Om Shubhayai Namah"
          },
          {
            "id": "la-ash-93",
            "telugu": "93. ఓం హిరణ్యప్రాకారాయై నమః",
            "transliteration": "93. Om Hiranyaprakarayai Namah"
          },
          {
            "id": "la-ash-94",
            "telugu": "94. ఓం సముద్రతనయాయై నమః",
            "transliteration": "94. Om Samudratanayayai Namah"
          },
          {
            "id": "la-ash-95",
            "telugu": "95. ఓం జయాయై నమః",
            "transliteration": "95. Om Jayayai Namah"
          },
          {
            "id": "la-ash-96",
            "telugu": "96. ఓం మంగళాదేవ్యై నమః",
            "transliteration": "96. Om Mangaladevyai Namah"
          },
          {
            "id": "la-ash-97",
            "telugu": "97. ఓం విష్ణువక్షఃస్థలస్థితాయై నమః",
            "transliteration": "97. Om Vishnuvakshassthalasthitayai Namah"
          },
          {
            "id": "la-ash-98",
            "telugu": "98. ఓం విష్ణుపత్న్యై నమః",
            "transliteration": "98. Om Vishnupatnyai Namah"
          },
          {
            "id": "la-ash-99",
            "telugu": "99. ఓం ప్రసన్నాక్ష్యై నమః",
            "transliteration": "99. Om Prasannakshyai Namah"
          },
          {
            "id": "la-ash-100",
            "telugu": "100. ఓం నారాయణసమాశ్రితాయై నమః",
            "transliteration": "100. Om Narayanasamashritayai Namah"
          },
          {
            "id": "la-ash-101",
            "telugu": "101. ఓం దారిద్ర్యధ్వంసిన్యై నమః",
            "transliteration": "101. Om Daridryadhwansinyai Namah"
          },
          {
            "id": "la-ash-102",
            "telugu": "102. ఓం దేవ్యై నమః",
            "transliteration": "102. Om Devyai Namah"
          },
          {
            "id": "la-ash-103",
            "telugu": "103. ఓం సర్వోపద్రవవారిణ్యై నమః",
            "transliteration": "103. Om Sarvopadravavarinyai Namah"
          },
          {
            "id": "la-ash-104",
            "telugu": "104. ఓం నవదుర్గాయై నమః",
            "transliteration": "104. Om Navadurgayai Namah"
          },
          {
            "id": "la-ash-105",
            "telugu": "105. ఓం మహాకాళ్యై నమః",
            "transliteration": "105. Om Mahakalyai Namah"
          },
          {
            "id": "la-ash-106",
            "telugu": "106. ఓం బ్రహ్మవిష్ణుశివాత్మికాయై నమః",
            "transliteration": "106. Om Brahmavishnushivatmikayai Namah"
          },
          {
            "id": "la-ash-107",
            "telugu": "107. ఓం త్రికాలజ్ఞానసంపన్నాయై నమః",
            "transliteration": "107. Om Trikalajnanasampannayai Namah"
          },
          {
            "id": "la-ash-108",
            "telugu": "108. ఓం భువనేశ్వర్యై నమః",
            "transliteration": "108. Om Bhuvaneshvaryai Namah"
          }
        ]
      }
    ]
  },
  // 16. MAHALAKSHMI ASHTAKAM
  {
    id: 'mahalakshmi-ashtakam',
    titleTelugu: 'శ్రీ మహాలక్ష్మి అష్టకం',
    titleEnglish: 'Sri Mahalakshmi Ashtakam',
    subtitle: '"నమస్తేస్తు మహామాయే..." సంపూర్ణ అష్టక స్తోత్రం',
    icon: 'Crown',
    durationMinutes: 8,
    featured: false,
    category: 'ammavaru',
    sections: [
      {
        title: 'శ్రీ మహాలక్ష్మ్యష్టకమ్',
        description: 'ఇంద్రకృత మహాలక్ష్మి అష్టక స్తోత్రం - సర్వపాపహరం & సర్వసిద్ధిప్రదం',
        mantras: [
          {
            id: 'la-ash-1',
            telugu: 'నమస్తేఽస్తు మహామాయే శ్రీపీఠే సురపూజితే |\nశంఖచక్రగదాహస్తే మహాలక్ష్మి నమోఽస్తు తే || 1 ||',
            transliteration: 'Namastestu Mahamaye Shreepeethe Surapoojite |\nShankhachakragadahaste Mahalakshmi Namostute || 1 ||',
            meaning: 'శ్రీపీఠమునందు కొలువుతీరి, దేవతలచే పూజింపబడు ఓ మహామాయా స్వరూపిణీ! శంఖ, చక్ర, గదాధారిణి అయిన ఓ శ్రీ మహాలక్ష్మీ దేవీ! నీకు నమస్కారములు.'
          },
          {
            id: 'la-ash-2',
            telugu: 'నమస్తే గరుడారూఢే కోలాసురభయంకరి |\nసర్వపాపహరే దేవి మహాలక్ష్మి నమోఽస్తు తే || 2 ||',
            transliteration: 'Namaste Garudaroodhe Kolasurabhayankari |\nSarvapapahare Devi Mahalakshmi Namostute || 2 ||',
            meaning: 'గరుడ వాహనాన్ని అధిరోహించినదానా, కోలాసురుడనే రాక్షసుడిని సంహరించినదానా, సమస్త పాపములను హరించే ఓ మహాలక్ష్మీ దేవీ! నీకు నమస్కారములు.'
          },
          {
            id: 'la-ash-3',
            telugu: 'సర్వజ్ఞే సర్వవరదే సర్వదుష్టభయంకరి |\nసర్వదుఃఖహరే దేవి మహాలక్ష్మి నమోఽస్తు తే || 3 ||',
            transliteration: 'Sarvajne Sarvavarade Sarvadushtabhayankari |\nSarvadukhahare Devi Mahalakshmi Namostute || 3 ||',
            meaning: 'సర్వమూ తెలిసినదానా, సమస్త వరములను ఇచ్చుదానా, దుష్టులను భయపెట్టుదానా, సమస్త దుఃఖములను నశింపజేయు ఓ మహాలక్ష్మీ! నీకు ప్రణామములు.'
          },
          {
            id: 'la-ash-4',
            telugu: 'సిద్ధిబుద్ధిప్రదే దేవి భుక్తిముక్తిప్రదాయిని |\nమంత్రమూర్తే సదా దేవి మహాలక్ష్మి నమోఽస్తు తే || 4 ||',
            transliteration: 'Siddhi Buddhiprade Devi Bhuktimuktipradayini |\nMantramurte Sada Devi Mahalakshmi Namostute || 4 ||'
          },
          {
            id: 'la-ash-5',
            telugu: 'ఆద్యంతరహితే దేవి ఆద్యశక్తి మహేశ్వరి |\nయోగజే యోగసంభూతే మహాలక్ష్మి నమోఽస్తు తే || 5 ||',
            transliteration: 'Aadyantarahite Devi Aadyashakti Maheshwari |\nYogaje Yogasambhoote Mahalakshmi Namostute || 5 ||'
          },
          {
            id: 'la-ash-6',
            telugu: 'స్థూలసూక్ష్మమహారౌద్రే మహాశక్తి మహోదరే |\nమహాపాపహరే దేవి మహాలక్ష్మి నమోఽస్తు తే || 6 ||',
            transliteration: 'Sthoolasookshmamahaaraudre Mahashakti Mahodare |\nMahapapahare Devi Mahalakshmi Namostute || 6 ||'
          },
          {
            id: 'la-ash-7',
            telugu: 'పద్మాసనస్థితే దేవి పరబ్రహ్మస్వరూపిణి |\nపరమేశి జగన్మాతః మహాలక్ష్మి నమోఽస్తు తే || 7 ||',
            transliteration: 'Padmasanasthite Devi Parabrahmaswaroopini |\nParameshi Jaganmatah Mahalakshmi Namostute || 7 ||'
          },
          {
            id: 'la-ash-8',
            telugu: 'శ్వేతాంబరధరే దేవి నానాలంకారభూషితే |\nజగత్స్థితే జగన్మాతః మహాలక్ష్మి నమోఽస్తు తే || 8 ||',
            transliteration: 'Shwetambaradhare Devi Nanalankarabhooshite |\nJagatsthite Jaganmatah Mahalakshmi Namostute || 8 ||'
          },
          {
            id: 'la-ash-9',
            telugu: 'మహాలక్ష్మ్యష్టకం స్తోత్రం యః పఠేద్భక్తిమాన్నరః |\nసర్వసిద్ధిమవాప్నోతి రాజ్యం ప్రాప్నోతి సర్వదా ||\nఏకకాలే పఠేన్నిత్యం మహాపాపవినాశనమ్ |\nద్వికాలం యః పఠేన్నిత్యం ధనధాన్యసమన్వితః ||\nత్రికాలం యః పఠేన్నిత్యం మహాశత్రువినాశనమ్ |\nమహాలక్ష్మీర్భవేన్నిత్యం ప్రసన్నా వరదా శుభా ||',
            transliteration: 'Mahalakshmyashtakam Stotram Yah Pathedbhaktiman Narah | Sarvasiddhim Avapnoti Rajyam Prapnoti Sarvada ||',
            meaning: 'ఈ మహాలక్ష్మి అష్టకాన్ని నిత్యం భక్తితో పఠించే భక్తులకు సకల సిద్ధులు, ధనధాన్య సమృద్ధి, శత్రు జయం లభించును.'
          }
        ]
      }
    ]
  },
  // 17. MALIKAPURATHAMMA POOJA
  {
    id: 'malikapurathamma-pooja',
    titleTelugu: 'మాళికాపురత్తమ్మ దేవి పూజ',
    titleEnglish: 'Malikapurathamma Pooja',
    subtitle: 'శబరిమల మంజమ్మ దేవి ధ్యానం, అష్టోత్తరం & స్తుతి',
    icon: 'Sparkles',
    durationMinutes: 7,
    featured: false,
    category: 'ammavaru',
    sections: [
      {
        title: 'మాళికాపురత్తమ్మ ధ్యానం & స్తుతి',
        mantras: [
          {
            id: 'ma-1',
            telugu: 'మాళికాపురత్తమ్మే మహాదేవి శరణం |\nశబరీగిరి వాసిని మంజమ్మే శరణం |\nఅయ్యప్ప సోదరి ఆదిపరాశక్తి |\nభక్తుల బ్రోచే భవభయహారిణి శరణం ||',
            transliteration: 'Malikapurathamme Mahadevi Saranam |\nSabarigiri Vasini Manjamme Saranam |\nAyyappa Sodari Aadiparashakti |\nBhaktula Broche Bhavabhayaharini Saranam ||'
          },
          {
            id: 'ma-2',
            telugu: 'ఓం శ్రీ మాళికాపురత్తు మంజమ్మ దేవ్యై నమః |\nఓం సర్వమంగళ ప్రదాయిన్యై నమః |\nఓం భక్తసంరక్షణ తత్పరాయై నమః |\nఓం శబరిమల వాసిన్యై నమః ||',
            transliteration: 'Om Shri Malikapurathu Manjamma Devyai Namah | Om Sarvamangala Pradayinyai Namah ||'
          }
        ]
      }
    ]
  },
  // 18. AMMAVARI HARATHI
  {
    id: 'ammavari-harathi',
    titleTelugu: 'అమ్మవారి మంగళ హారతులు',
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
            telugu: 'జయ మంగళం జగన్మాతకు మంగళం |\nశ్రీ మహాలక్ష్మి అమ్మవారికి దివ్య మంగళం |\nభక్త రక్షణ భవభయ నాశిని |\nముక్తి ప్రదాయిని మంగళ హారతి ||',
            transliteration: 'Jaya Mangalam Jaganmataku Mangalam | Shri Mahalakshmi Ammavariki Divya Mangalam ||'
          },
          {
            id: 'amh-2',
            telugu: 'సర్వమంగళ మాంగళ్యే శివే సర్వార్థ సాధికే |\nశరణ్యే త్ర్యంబకే గౌరి నారాయణి నమోఽస్తు తే ||',
            transliteration: 'Sarvamangala Mangalye Shive Sarvartha Sadhike |\nSharanye Tryambake Gauri Narayani Namostute ||'
          }
        ]
      }
    ]
  },
  // 19. KANAKADHARA STOTRAM
  {
    id: 'kanakadhara-stotram',
    titleTelugu: 'శ్రీ కనకధారా స్తోత్రం',
    titleEnglish: 'Sri Kanakadhara Stotram',
    subtitle: 'శ్రీ ఆదిశంకరాచార్య విరచిత స్వర్ణవృష్టి దివ్య స్తోత్రం',
    icon: 'Sparkles',
    durationMinutes: 10,
    featured: false,
    category: 'ammavaru',
    sections: [
      {
        title: 'కనకధారా స్తోత్ర శ్లోకములు',
        mantras: [
          {
            id: 'kd-1',
            telugu: 'అంగం హరేః పులకభూషణమాశ్రయంతీ\nభృంగాంగనేవ ముకుళాభరణం తమాలమ్ |\nఅంగీకృతాఖిల విభూతిరపాంగలీలా\nమాంగళ్యదాస్తు మమ మంగళదేవతాయాః || 1 ||',
            transliteration: 'Angam Hareh Pulakabhooshanam Aashrayanti Bhringanganeva Mukulabharanam Tamalam |\nAngeekritakhila Vibhootirapangaleela Mangalyadastu Mama Mangaladevataayah || 1 ||'
          },
          {
            id: 'kd-2',
            telugu: 'ముగ్ధా ముహుర్విదధతీ వదనే మురారేః\nప్రేమత్రపాప్రణిహితాని గతాగతాని |\nమాలా దృశోర్మధుకరీవ మహోత్పలే యా\nసా మే శ్రియం దిశతు సాగరసంభవాయాః || 2 ||',
            transliteration: 'Mugdha Muhurvidadhati Vadane Murareh Prematrapapranihitani Gatagatani |\nMala Drishormadhukareeva Mahotpale Ya Sa Me Shriyam Dishatu Sagarasambhavayah || 2 ||'
          },
          {
            id: 'kd-3',
            telugu: 'విశ్వామరేంద్ర పదవిభ్రమ దానదక్షం\nఆనందహేతురధికం మురవిద్విషోఽపి |\nఈషన్నిషీదతు మయి క్షణమీక్షణార్థం\nఇందీవరోదర సహోదరమిందిరాయాః || 3 ||',
            transliteration: 'Vishwamarendra Pada Vibhrama Danadaksham Ananda Hetur Adhikam Muravidvishopi |\nEeshannasheedatu Mayi Kshanameekshanartham Indeevarodara Sahodaram Indirayah || 3 ||'
          }
        ]
      }
    ]
  },
  // 20. DURGA ASHTOTTARAM (108 Complete)
  {
    id: 'durga-ashtottaram',
    titleTelugu: 'శ్రీ దుర్గా అష్టోత్తర శత నామావళి',
    titleEnglish: 'Sri Durga Ashtottaram',
    subtitle: 'దుర్గతి నాశిని శ్రీ దుర్గాదేవి 108 దివ్య నామావళి',
    icon: 'ShieldCheck',
    durationMinutes: 12,
    featured: false,
    category: 'ammavaru',
    sections: [
      {
        title: 'శ్రీ దుర్గాష్టోత్తర శత నామావళి (108)',
        description: 'సకల శత్రు, రోగ, భయ నివారణకై దుర్గా నామస్మరణ పుష్పార్చన',
        mantras: [
          {
                    "id": "da-1",
                    "telugu": "1. ఓం దుర్గాయై నమః",
                    "transliteration": "1. Om Durgayai Namah"
          },
          {
                    "id": "da-2",
                    "telugu": "2. ఓం శివాయై నమః",
                    "transliteration": "2. Om Shivayai Namah"
          },
          {
                    "id": "da-3",
                    "telugu": "3. ఓం మహాలక్ష్మ్యై నమః",
                    "transliteration": "3. Om Mahalakshmyai Namah"
          },
          {
                    "id": "da-4",
                    "telugu": "4. ఓం మహావిద్యాయై నమః",
                    "transliteration": "4. Om Mahavidyayai Namah"
          },
          {
                    "id": "da-5",
                    "telugu": "5. ఓం భవాన్యై నమః",
                    "transliteration": "5. Om Bhavanyai Namah"
          },
          {
                    "id": "da-6",
                    "telugu": "6. ఓం చండికాయై నమః",
                    "transliteration": "6. Om Chandikayai Namah"
          },
          {
                    "id": "da-7",
                    "telugu": "7. ఓం కాళ్యై నమః",
                    "transliteration": "7. Om Kalyai Namah"
          },
          {
                    "id": "da-8",
                    "telugu": "8. ఓం భద్రకాళ్యై నమః",
                    "transliteration": "8. Om Bhadrakalyai Namah"
          },
          {
                    "id": "da-9",
                    "telugu": "9. ఓం జగన్మాత్రే నమః",
                    "transliteration": "9. Om Jaganmatre Namah"
          },
          {
                    "id": "da-10",
                    "telugu": "10. ఓం సర్వమంగళాయై నమః",
                    "transliteration": "10. Om Sarvamangalayai Namah"
          },
          {
                    "id": "da-11",
                    "telugu": "11. ఓం కాత్యాయన్యై నమః",
                    "transliteration": "11. Om Katyayanyai Namah"
          },
          {
                    "id": "da-12",
                    "telugu": "12. ఓం మహాగాయత్ర్యై నమః",
                    "transliteration": "12. Om Mahagayatryai Namah"
          },
          {
                    "id": "da-13",
                    "telugu": "13. ఓం కల్యాణ్యై నమః",
                    "transliteration": "13. Om Kalyanyai Namah"
          },
          {
                    "id": "da-14",
                    "telugu": "14. ఓం కమలాక్ష్యై నమః",
                    "transliteration": "14. Om Kamalakshyai Namah"
          },
          {
                    "id": "da-15",
                    "telugu": "15. ఓం శాంతాయై నమః",
                    "transliteration": "15. Om Shantayai Namah"
          },
          {
                    "id": "da-16",
                    "telugu": "16. ఓం బ్రాహ్మ్యై నమః",
                    "transliteration": "16. Om Brahmyai Namah"
          },
          {
                    "id": "da-17",
                    "telugu": "17. ఓం మాహేశ్వర్యై నమః",
                    "transliteration": "17. Om Maheshwaryai Namah"
          },
          {
                    "id": "da-18",
                    "telugu": "18. ఓం కౌమార్యై నమః",
                    "transliteration": "18. Om Koumaryai Namah"
          },
          {
                    "id": "da-19",
                    "telugu": "19. ఓం వైష్ణవ్యై నమః",
                    "transliteration": "19. Om Vaishnavyai Namah"
          },
          {
                    "id": "da-20",
                    "telugu": "20. ఓం వారాహ్యై నమః",
                    "transliteration": "20. Om Varahyai Namah"
          },
          {
                    "id": "da-21",
                    "telugu": "21. ఓం మాహేంద్రయై నమః",
                    "transliteration": "21. Om Mahendryai Namah"
          },
          {
                    "id": "da-22",
                    "telugu": "22. ఓం చాముండాయై నమః",
                    "transliteration": "22. Om Chamundayai Namah"
          },
          {
                    "id": "da-23",
                    "telugu": "23. ఓం అపర్ణాయై నమః",
                    "transliteration": "23. Om Aparnayai Namah"
          },
          {
                    "id": "da-24",
                    "telugu": "24. ఓం పాటలాయై నమః",
                    "transliteration": "24. Om Patalayai Namah"
          },
          {
                    "id": "da-25",
                    "telugu": "25. ఓం ఉమాయై నమః",
                    "transliteration": "25. Om Umayai Namah"
          },
          {
                    "id": "da-26",
                    "telugu": "26. ఓం సర్వజ్ఞాయై నమః",
                    "transliteration": "26. Om Sarvajnyayai Namah"
          },
          {
                    "id": "da-27",
                    "telugu": "27. ఓం సర్వలోకేశ్వర్యై నమః",
                    "transliteration": "27. Om Sarvalokeshwaryai Namah"
          },
          {
                    "id": "da-28",
                    "telugu": "28. ఓం సర్వశాస్త్రమయ్యై నమః",
                    "transliteration": "28. Om Sarvashastramayyai Namah"
          },
          {
                    "id": "da-29",
                    "telugu": "29. ఓం నిత్యానందాయై నమః",
                    "transliteration": "29. Om Nityanandayai Namah"
          },
          {
                    "id": "da-30",
                    "telugu": "30. ఓం భక్తవత్సలాయై నమః",
                    "transliteration": "30. Om Bhaktavatsalayai Namah"
          },
          {
                    "id": "da-31",
                    "telugu": "31. ఓం కపాలమాలికాయై నమః",
                    "transliteration": "31. Om Kapalamalikayai Namah"
          },
          {
                    "id": "da-32",
                    "telugu": "32. ఓం త్రిపురసుందర్యై నమః",
                    "transliteration": "32. Om Tripurasundaryai Namah"
          },
          {
                    "id": "da-33",
                    "telugu": "33. ఓం రాజరాజేశ్వర్యై నమః",
                    "transliteration": "33. Om Rajarajeshwaryai Namah"
          },
          {
                    "id": "da-34",
                    "telugu": "34. ఓం లలితాయై నమః",
                    "transliteration": "34. Om Lalitayai Namah"
          },
          {
                    "id": "da-35",
                    "telugu": "35. ఓం మంగళప్రదాయై నమః",
                    "transliteration": "35. Om Mangalaprada Namah"
          },
          {
                    "id": "da-36",
                    "telugu": "36. ఓం సర్వపాపహరాయై నమః",
                    "transliteration": "36. Om Sarvapapaharayai Namah"
          },
          {
                    "id": "da-37",
                    "telugu": "37. ఓం సర్వదుఃఖప్రశమన్యై నమః",
                    "transliteration": "37. Om Sarvadukhaprashamanyai Namah"
          },
          {
                    "id": "da-38",
                    "telugu": "38. ఓం సర్వశత్రువినాశిన్యై నమః",
                    "transliteration": "38. Om Sarvashatruvinashinyai Namah"
          },
          {
                    "id": "da-39",
                    "telugu": "39. ఓం మహిషాసురమర్దిన్యై నమః",
                    "transliteration": "39. Om Mahishasuramardinyai Namah"
          },
          {
                    "id": "da-40",
                    "telugu": "40. ఓం శుంభనిశుంభహంత్య్రై నమః",
                    "transliteration": "40. Om Shumbhanishumbhahantryai Namah"
          },
          {
                    "id": "da-41",
                    "telugu": "41. ఓం రక్తబీజవధోద్యుక్తాయై నమః",
                    "transliteration": "41. Om Raktabeejavadhodyuktayai Namah"
          },
          {
                    "id": "da-42",
                    "telugu": "42. ఓం మధుకైటభఘాతిన్యై నమః",
                    "transliteration": "42. Om Madhukaitabhaghatinyai Namah"
          },
          {
                    "id": "da-43",
                    "telugu": "43. ఓం సింహవాహిన్యై నమః",
                    "transliteration": "43. Om Simhavahinyai Namah"
          },
          {
                    "id": "da-44",
                    "telugu": "44. ఓం త్రిశూలధారిణ్యై నమః",
                    "transliteration": "44. Om Trishooladharinyai Namah"
          },
          {
                    "id": "da-45",
                    "telugu": "45. ఓం ఖడ్గహస్తాయై నమః",
                    "transliteration": "45. Om Khadgahastayai Namah"
          },
          {
                    "id": "da-46",
                    "telugu": "46. ఓం చక్రహస్తాయై నమః",
                    "transliteration": "46. Om Chakrahastayai Namah"
          },
          {
                    "id": "da-47",
                    "telugu": "47. ఓం గదాధారిణ్యై నమః",
                    "transliteration": "47. Om Gadadharinyai Namah"
          },
          {
                    "id": "da-48",
                    "telugu": "48. ఓం ధనుర్బాణధరాయై నమః",
                    "transliteration": "48. Om Dhanurbanadharayai Namah"
          },
          {
                    "id": "da-49",
                    "telugu": "49. ఓం వరదాభయహస్తాయై నమః",
                    "transliteration": "49. Om Varadabhayahastayai Namah"
          },
          {
                    "id": "da-50",
                    "telugu": "50. ఓం జగద్ధాత్రిణ్యై నమః",
                    "transliteration": "50. Om Jagaddhatrinyai Namah"
          },
          {
                    "id": "da-51",
                    "telugu": "51. ఓం పరమేశ్వర్యై నమః",
                    "transliteration": "51. Om Parameshwaaryai Namah"
          },
          {
                    "id": "da-52",
                    "telugu": "52. ఓం నిరంజనాయై నమః",
                    "transliteration": "52. Om Niranjanai Namah"
          },
          {
                    "id": "da-53",
                    "telugu": "53. ఓం నిష్కళంకాయై నమః",
                    "transliteration": "53. Om Nishkalankayai Namah"
          },
          {
                    "id": "da-54",
                    "telugu": "54. ఓం నిత్యాయై నమః",
                    "transliteration": "54. Om Nityayai Namah"
          },
          {
                    "id": "da-55",
                    "telugu": "55. ఓం సత్యాయై నమః",
                    "transliteration": "55. Om Satyai Namah"
          },
          {
                    "id": "da-56",
                    "telugu": "56. ఓం జ్ఞానగమ్యాయై నమః",
                    "transliteration": "56. Om Jnanagamyayai Namah"
          },
          {
                    "id": "da-57",
                    "telugu": "57. ఓం ఆనందరూపిణ్యై నమః",
                    "transliteration": "57. Om Aanandaroopinyai Namah"
          },
          {
                    "id": "da-58",
                    "telugu": "58. ఓం ఆదిశక్తయే నమః",
                    "transliteration": "58. Om Aadishaktaye Namah"
          },
          {
                    "id": "da-59",
                    "telugu": "59. ఓం పరాశక్తయే నమః",
                    "transliteration": "59. Om Parashaktaye Namah"
          },
          {
                    "id": "da-60",
                    "telugu": "60. ఓం మాయాదేవ్యై నమః",
                    "transliteration": "60. Om Mayadevyai Namah"
          },
          {
                    "id": "da-61",
                    "telugu": "61. ఓం విష్ణుమాయాయై నమః",
                    "transliteration": "61. Om Vishnumayayai Namah"
          },
          {
                    "id": "da-62",
                    "telugu": "62. ఓం చేతనాయై నమః",
                    "transliteration": "62. Om Chetanayai Namah"
          },
          {
                    "id": "da-63",
                    "telugu": "63. ఓం బుద్ధిరూపాయై నమః",
                    "transliteration": "63. Om Buddhiroopayai Namah"
          },
          {
                    "id": "da-64",
                    "telugu": "64. ఓం ధృతిరూపాయై నమః",
                    "transliteration": "64. Om Dhritiroopayai Namah"
          },
          {
                    "id": "da-65",
                    "telugu": "65. ఓం స్మృతిరూపాయై నమః",
                    "transliteration": "65. Om Smritiroopayai Namah"
          },
          {
                    "id": "da-66",
                    "telugu": "66. ఓం శ్రద్ధారూపాయై నమః",
                    "transliteration": "66. Om Shraddharoopayai Namah"
          },
          {
                    "id": "da-67",
                    "telugu": "67. ఓం కాంతిరూపాయై నమః",
                    "transliteration": "67. Om Kantiroopayai Namah"
          },
          {
                    "id": "da-68",
                    "telugu": "68. ఓం శాంతిరూపాయై నమః",
                    "transliteration": "68. Om Shantiroopayai Namah"
          },
          {
                    "id": "da-69",
                    "telugu": "69. ఓం తుష్టిరూపాయై నమః",
                    "transliteration": "69. Om Tushthiroopayai Namah"
          },
          {
                    "id": "da-70",
                    "telugu": "70. ఓం పుష్టిరూపాయై నమః",
                    "transliteration": "70. Om Pushtiroopayai Namah"
          },
          {
                    "id": "da-71",
                    "telugu": "71. ఓం దయారూపాయై నమః",
                    "transliteration": "71. Om Dayaroopayai Namah"
          },
          {
                    "id": "da-72",
                    "telugu": "72. ఓం లజ్జారూపాయై నమః",
                    "transliteration": "72. Om Lajjaroopayai Namah"
          },
          {
                    "id": "da-73",
                    "telugu": "73. ఓం క్షాంతిరూపాయై నమః",
                    "transliteration": "73. Om Kshantiroopayai Namah"
          },
          {
                    "id": "da-74",
                    "telugu": "74. ఓం జాతిరూపాయై నమః",
                    "transliteration": "74. Om Jaatiroopayai Namah"
          },
          {
                    "id": "da-75",
                    "telugu": "75. ఓం వ్యాప్తిరూపాయై నమః",
                    "transliteration": "75. Om Vyaptiroopayai Namah"
          },
          {
                    "id": "da-76",
                    "telugu": "76. ఓం చేతనాత్మికాయై నమః",
                    "transliteration": "76. Om Chetanatmikayai Namah"
          },
          {
                    "id": "da-77",
                    "telugu": "77. ఓం సర్వసౌభాగ్యదాయై నమః",
                    "transliteration": "77. Om Sarvasoubhagyadayai Namah"
          },
          {
                    "id": "da-78",
                    "telugu": "78. ఓం ధనధాన్యసమృద్ధిదాయై నమః",
                    "transliteration": "78. Om Dhanadhanyasamriddhidayai Namah"
          },
          {
                    "id": "da-79",
                    "telugu": "79. ఓం ఆయురారోగ్యదాయై నమః",
                    "transliteration": "79. Om Aayurarogyadayai Namah"
          },
          {
                    "id": "da-80",
                    "telugu": "80. ఓం మోక్షప్రదాయై నమః",
                    "transliteration": "80. Om Mokshapradayai Namah"
          },
          {
                    "id": "da-81",
                    "telugu": "81. ఓం ధర్మనిష్ఠాయై నమః",
                    "transliteration": "81. Om Dharmanishthayai Namah"
          },
          {
                    "id": "da-82",
                    "telugu": "82. ఓం వేదమాత్రే నమః",
                    "transliteration": "82. Om Vedamatre Namah"
          },
          {
                    "id": "da-83",
                    "telugu": "83. ఓం యజ్ఞరూపాయై నమః",
                    "transliteration": "83. Om Yajnaroopayai Namah"
          },
          {
                    "id": "da-84",
                    "telugu": "84. ఓం స్వర్గద్వారాయై నమః",
                    "transliteration": "84. Om Swargadwarayai Namah"
          },
          {
                    "id": "da-85",
                    "telugu": "85. ఓం అమృతవర్షిణ్యై నమః",
                    "transliteration": "85. Om Amritavarshinyai Namah"
          },
          {
                    "id": "da-86",
                    "telugu": "86. ఓం పుణ్యవర్ధన్యై నమః",
                    "transliteration": "86. Om Punyavardhanyai Namah"
          },
          {
                    "id": "da-87",
                    "telugu": "87. ఓం శోకనాశిన్యై నమః",
                    "transliteration": "87. Om Shokanashinyai Namah"
          },
          {
                    "id": "da-88",
                    "telugu": "88. ఓం తాపత్రయనివారిణ్యై నమః",
                    "transliteration": "88. Om Tapatrayanivarinyai Namah"
          },
          {
                    "id": "da-89",
                    "telugu": "89. ఓం సకలమనోరథసిద్ధిదాయై నమః",
                    "transliteration": "89. Om Sakalamanorithasiddhidayai Namah"
          },
          {
                    "id": "da-90",
                    "telugu": "90. ఓం అష్టైశ్వర్యప్రదాయిన్యై నమః",
                    "transliteration": "90. Om Ashtaishwaryapradayinyai Namah"
          },
          {
                    "id": "da-91",
                    "telugu": "91. ఓం కలికల్మషనాశిన్యై నమః",
                    "transliteration": "91. Om Kalikalmashanashinyai Namah"
          },
          {
                    "id": "da-92",
                    "telugu": "92. ఓం భవానీశంకరీప్రియాయై నమః",
                    "transliteration": "92. Om Bhavaneeshankaripriyayai Namah"
          },
          {
                    "id": "da-93",
                    "telugu": "93. ఓం పార్వత్యై నమః",
                    "transliteration": "93. Om Parvatyai Namah"
          },
          {
                    "id": "da-94",
                    "telugu": "94. ఓం హిమవత్పుత్ర్యై నమః",
                    "transliteration": "94. Om Himavatputryai Namah"
          },
          {
                    "id": "da-95",
                    "telugu": "95. ఓం మేనకాత్మజాయై నమః",
                    "transliteration": "95. Om Menakatmajayai Namah"
          },
          {
                    "id": "da-96",
                    "telugu": "96. ఓం రుద్రాణ్యై నమః",
                    "transliteration": "96. Om Rudranyai Namah"
          },
          {
                    "id": "da-97",
                    "telugu": "97. ఓం శర్వాణ్యై నమః",
                    "transliteration": "97. Om Sharvanyai Namah"
          },
          {
                    "id": "da-98",
                    "telugu": "98. ఓం మంగళకారిణ్యై నమః",
                    "transliteration": "98. Om Mangalakarinyai Namah"
          },
          {
                    "id": "da-99",
                    "telugu": "99. ఓం సర్వమంగళమాంగళ్యాయై నమః",
                    "transliteration": "99. Om Sarvamangalamangalyayai Namah"
          },
          {
                    "id": "da-100",
                    "telugu": "100. ఓం శివే సర్వార్థసాధికాయై నమః",
                    "transliteration": "100. Om Shive Sarwarthasadhikayai Namah"
          },
          {
                    "id": "da-101",
                    "telugu": "101. ఓం శరణ్యాయై త్ర్యంబకాయై గౌర్యై నమః",
                    "transliteration": "101. Om Sharanyayai Tryambakayai Gouryai Namah"
          },
          {
                    "id": "da-102",
                    "telugu": "102. ఓం నారాయణ్యై నమోఽస్తుతే నమః",
                    "transliteration": "102. Om Narayanayai Namostute Namah"
          },
          {
                    "id": "da-103",
                    "telugu": "103. ఓం దుర్గతిప్రశమన్యై నమః",
                    "transliteration": "103. Om Durgatiprashamanyai Namah"
          },
          {
                    "id": "da-104",
                    "telugu": "104. ఓం ఆపదుద్ధారిణ్యై నమః",
                    "transliteration": "104. Om Aapaduddharinyai Namah"
          },
          {
                    "id": "da-105",
                    "telugu": "105. ఓం సకలభయనాశిన్యై నమః",
                    "transliteration": "105. Om Sakalabhayanashinyai Namah"
          },
          {
                    "id": "da-106",
                    "telugu": "106. ఓం జయదుర్గాయై నమః",
                    "transliteration": "106. Om Jayadurgayai Namah"
          },
          {
                    "id": "da-107",
                    "telugu": "107. ఓం కనకదుర్గాయై నమః",
                    "transliteration": "107. Om Kanakadurgayai Namah"
          },
          {
                    "id": "da-108",
                    "telugu": "108. ఓం శ్రీ దుర్గా పరమేశ్వర్యై నమః నమః",
                    "transliteration": "108. Om Shri Durga Parameshwaryai Namah Namah"
          }
]
      }
    ]
  },
  // 21. SARASWATI ASHTOTTARAM (108 Complete)
  {
    id: 'saraswati-ashtottaram',
    titleTelugu: 'శ్రీ సరస్వతీ అష్టోత్తర శత నామావళి',
    titleEnglish: 'Sri Saraswati Ashtottaram',
    subtitle: 'విద్యాబుద్ధి ప్రదాయిని శ్రీ సరస్వతీ దేవి 108 దివ్య నామావళి',
    icon: 'BookOpen',
    durationMinutes: 12,
    featured: false,
    category: 'ammavaru',
    sections: [
      {
        title: 'శ్రీ సరస్వతీ అష్టోత్తర శత నామావళి (108)',
        description: 'జ్ఞాన, విద్యా, వాక్ సిద్ధి ప్రదాయిని పుష్పార్చన',
        mantras: [
          {
                    "id": "sa-1",
                    "telugu": "1. ఓం సరస్వత్యై నమః",
                    "transliteration": "1. Om Saraswatyai Namah"
          },
          {
                    "id": "sa-2",
                    "telugu": "2. ఓం మహాభద్రాయై నమః",
                    "transliteration": "2. Om Mahabhadrayai Namah"
          },
          {
                    "id": "sa-3",
                    "telugu": "3. ఓం మహామాయాయై నమః",
                    "transliteration": "3. Om Mahamayayai Namah"
          },
          {
                    "id": "sa-4",
                    "telugu": "4. ఓం వరప్రదాయై నమః",
                    "transliteration": "4. Om Varapradayai Namah"
          },
          {
                    "id": "sa-5",
                    "telugu": "5. ఓం శ్రీప్రదాయై నమః",
                    "transliteration": "5. Om Shripradayai Namah"
          },
          {
                    "id": "sa-6",
                    "telugu": "6. ఓం పద్మనిలయాయై నమః",
                    "transliteration": "6. Om Padmanilayayai Namah"
          },
          {
                    "id": "sa-7",
                    "telugu": "7. ఓం పద్మాక్ష్యై నమః",
                    "transliteration": "7. Om Padmakshyai Namah"
          },
          {
                    "id": "sa-8",
                    "telugu": "8. ఓం పద్మవక్త్రాయై నమః",
                    "transliteration": "8. Om Padmavaktrayai Namah"
          },
          {
                    "id": "sa-9",
                    "telugu": "9. ఓం శివానుజాయై నమః",
                    "transliteration": "9. Om Shivanujayai Namah"
          },
          {
                    "id": "sa-10",
                    "telugu": "10. ఓం పుస్తకభృతే నమః",
                    "transliteration": "10. Om Pustakabhrite Namah"
          },
          {
                    "id": "sa-11",
                    "telugu": "11. ఓం జ్ఞానముద్రాయై నమః",
                    "transliteration": "11. Om Jnanamudrayai Namah"
          },
          {
                    "id": "sa-12",
                    "telugu": "12. ఓం రమాయై నమః",
                    "transliteration": "12. Om Ramayai Namah"
          },
          {
                    "id": "sa-13",
                    "telugu": "13. ఓం కామరూపాయై నమః",
                    "transliteration": "13. Om Kamarupayai Namah"
          },
          {
                    "id": "sa-14",
                    "telugu": "14. ఓం మహావిద్యాయై నమః",
                    "transliteration": "14. Om Mahavidyayai Namah"
          },
          {
                    "id": "sa-15",
                    "telugu": "15. ఓం మహాభోగాయై నమః",
                    "transliteration": "15. Om Mahabhogayai Namah"
          },
          {
                    "id": "sa-16",
                    "telugu": "16. ఓం మహాభుజాయై నమః",
                    "transliteration": "16. Om Mahabhujayai Namah"
          },
          {
                    "id": "sa-17",
                    "telugu": "17. ఓం మహాభాగ్యాయై నమః",
                    "transliteration": "17. Om Mahabhagyayai Namah"
          },
          {
                    "id": "sa-18",
                    "telugu": "18. ఓం పుష్కరాక్ష్యై నమః",
                    "transliteration": "18. Om Pushkarakshyai Namah"
          },
          {
                    "id": "sa-19",
                    "telugu": "19. ఓం హంసవాహనాయై నమః",
                    "transliteration": "19. Om Hamsavahanayai Namah"
          },
          {
                    "id": "sa-20",
                    "telugu": "20. ఓం దివ్యాంగాయై నమః",
                    "transliteration": "20. Om Divyangayai Namah"
          },
          {
                    "id": "sa-21",
                    "telugu": "21. ఓం సురవందితాయై నమః",
                    "transliteration": "21. Om Suravanditayai Namah"
          },
          {
                    "id": "sa-22",
                    "telugu": "22. ఓం కాంతాయై నమః",
                    "transliteration": "22. Om Kantayai Namah"
          },
          {
                    "id": "sa-23",
                    "telugu": "23. ఓం భారత్యై నమః",
                    "transliteration": "23. Om Bharatyai Namah"
          },
          {
                    "id": "sa-24",
                    "telugu": "24. ఓం వాగ్దేవ్యై నమః",
                    "transliteration": "24. Om Vagdevyai Namah"
          },
          {
                    "id": "sa-25",
                    "telugu": "25. ఓం శారదాయై నమః",
                    "transliteration": "25. Om Sharadayai Namah"
          },
          {
                    "id": "sa-26",
                    "telugu": "26. ఓం వాణ్యై నమః",
                    "transliteration": "26. Om Vanyai Namah"
          },
          {
                    "id": "sa-27",
                    "telugu": "27. ఓం వీణాధారిణ్యై నమః",
                    "transliteration": "27. Om Veenadharinyai Namah"
          },
          {
                    "id": "sa-28",
                    "telugu": "28. ఓం శుభదాయై నమః",
                    "transliteration": "28. Om Shubhadayai Namah"
          },
          {
                    "id": "sa-29",
                    "telugu": "29. ఓం బ్రాహ్మ్యై నమః",
                    "transliteration": "29. Om Brahmyai Namah"
          },
          {
                    "id": "sa-30",
                    "telugu": "30. ఓం బ్రహ్మపత్న్యై నమః",
                    "transliteration": "30. Om Brahmapatnyai Namah"
          },
          {
                    "id": "sa-31",
                    "telugu": "31. ఓం విష్ణుప్రియాయై నమః",
                    "transliteration": "31. Om Vishnupriyayai Namah"
          },
          {
                    "id": "sa-32",
                    "telugu": "32. ఓం గాయత్ర్యై నమః",
                    "transliteration": "32. Om Gayatryai Namah"
          },
          {
                    "id": "sa-33",
                    "telugu": "33. ఓం సావిత్ర్యై నమః",
                    "transliteration": "33. Om Savitryai Namah"
          },
          {
                    "id": "sa-34",
                    "telugu": "34. ఓం జ్ఞానరూపాయై నమః",
                    "transliteration": "34. Om Jnanarupayai Namah"
          },
          {
                    "id": "sa-35",
                    "telugu": "35. ఓం సర్వదేవనమస్కృతాయై నమః",
                    "transliteration": "35. Om Sarvadevanamaskritayai Namah"
          },
          {
                    "id": "sa-36",
                    "telugu": "36. ఓం అక్షరాయై నమః",
                    "transliteration": "36. Om Aksharayai Namah"
          },
          {
                    "id": "sa-37",
                    "telugu": "37. ఓం మాతృకాయై నమః",
                    "transliteration": "37. Om Matrikayai Namah"
          },
          {
                    "id": "sa-38",
                    "telugu": "38. ఓం శ్రుతిరూపాయై నమః",
                    "transliteration": "38. Om Shrutirupayai Namah"
          },
          {
                    "id": "sa-39",
                    "telugu": "39. ఓం స్మృతిరూపాయై నమః",
                    "transliteration": "39. Om Smritirupayai Namah"
          },
          {
                    "id": "sa-40",
                    "telugu": "40. ఓం వేదగర్భాయై నమః",
                    "transliteration": "40. Om Vedagarbhayai Namah"
          },
          {
                    "id": "sa-41",
                    "telugu": "41. ఓం సుందర్యై నమః",
                    "transliteration": "41. Om Sundaryai Namah"
          },
          {
                    "id": "sa-42",
                    "telugu": "42. ఓం విద్యాధర్యై నమః",
                    "transliteration": "42. Om Vidyadharyai Namah"
          },
          {
                    "id": "sa-43",
                    "telugu": "43. ఓం మేధాయై నమః",
                    "transliteration": "43. Om Medhayai Namah"
          },
          {
                    "id": "sa-44",
                    "telugu": "44. ఓం బుద్ధ్యై నమః",
                    "transliteration": "44. Om Buddhyai Namah"
          },
          {
                    "id": "sa-45",
                    "telugu": "45. ఓం ప్రజ్ఞాయై నమః",
                    "transliteration": "45. Om Prajnyayai Namah"
          },
          {
                    "id": "sa-46",
                    "telugu": "46. ఓం శాంతాయై నమః",
                    "transliteration": "46. Om Shantayai Namah"
          },
          {
                    "id": "sa-47",
                    "telugu": "47. ఓం సౌమ్యాయై నమః",
                    "transliteration": "47. Om Saumyayai Namah"
          },
          {
                    "id": "sa-48",
                    "telugu": "48. ఓం వరారోహాయై నమః",
                    "transliteration": "48. Om Vararohayai Namah"
          },
          {
                    "id": "sa-49",
                    "telugu": "49. ఓం శ్రుతిధరాయై నమః",
                    "transliteration": "49. Om Shrutidharayai Namah"
          },
          {
                    "id": "sa-50",
                    "telugu": "50. ఓం సంగీతశాస్త్రజ్ఞాయై నమః",
                    "transliteration": "50. Om Sangeetashastrajnyayai Namah"
          },
          {
                    "id": "sa-51",
                    "telugu": "51. ఓం కళారూపిణ్యై నమః",
                    "transliteration": "51. Om Kalaroopinyai Namah"
          },
          {
                    "id": "sa-52",
                    "telugu": "52. ఓం మోక్షదాయై నమః",
                    "transliteration": "52. Om Mokshadayai Namah"
          },
          {
                    "id": "sa-53",
                    "telugu": "53. ఓం పాపనాశిన్యై నమః",
                    "transliteration": "53. Om Papanaashinyai Namah"
          },
          {
                    "id": "sa-54",
                    "telugu": "54. ఓం శుక్లవస్త్రాయై నమః",
                    "transliteration": "54. Om Shuklavastrayai Namah"
          },
          {
                    "id": "sa-55",
                    "telugu": "55. ఓం స్ఫటికమాలాధారిణ్యై నమః",
                    "transliteration": "55. Om Sphatikamaladharinyai Namah"
          },
          {
                    "id": "sa-56",
                    "telugu": "56. ఓం పరమానందాయై నమః",
                    "transliteration": "56. Om Paramanandayai Namah"
          },
          {
                    "id": "sa-57",
                    "telugu": "57. ఓం సర్వార్థసాధికాయై నమః",
                    "transliteration": "57. Om Sarwarthasadhikayai Namah"
          },
          {
                    "id": "sa-58",
                    "telugu": "58. ఓం సకలవిద్యాప్రదాయై నమః",
                    "transliteration": "58. Om Sakalavidyapradayai Namah"
          },
          {
                    "id": "sa-59",
                    "telugu": "59. ఓం భక్తవత్సలాయై నమః",
                    "transliteration": "59. Om Bhaktavatsalayai Namah"
          },
          {
                    "id": "sa-60",
                    "telugu": "60. ఓం కరుణామయై నమః",
                    "transliteration": "60. Om Karunamayai Namah"
          },
          {
                    "id": "sa-61",
                    "telugu": "61. ఓం నిత్యాయై నమః",
                    "transliteration": "61. Om Nityayai Namah"
          },
          {
                    "id": "sa-62",
                    "telugu": "62. ఓం నిరంజనాయై నమః",
                    "transliteration": "62. Om Niranjanayai Namah"
          },
          {
                    "id": "sa-63",
                    "telugu": "63. ఓం నిష్కళంకాయై నమః",
                    "transliteration": "63. Om Nishkalankayai Namah"
          },
          {
                    "id": "sa-64",
                    "telugu": "64. ఓం సర్వలోకపూజితాయై నమః",
                    "transliteration": "64. Om Sarvalokapoojitayai Namah"
          },
          {
                    "id": "sa-65",
                    "telugu": "65. ఓం మహాదేవ్యై నమః",
                    "transliteration": "65. Om Mahadevyai Namah"
          },
          {
                    "id": "sa-66",
                    "telugu": "66. ఓం విశాలాక్ష్యై నమః",
                    "transliteration": "66. Om Vishalakshyai Namah"
          },
          {
                    "id": "sa-67",
                    "telugu": "67. ఓం చంద్రకాంతాయై నమః",
                    "transliteration": "67. Om Chandrakantayai Namah"
          },
          {
                    "id": "sa-68",
                    "telugu": "68. ఓం సుధామయై నమః",
                    "transliteration": "68. Om Sudhamayai Namah"
          },
          {
                    "id": "sa-69",
                    "telugu": "69. ఓం ఆద్యంతరహితాయై నమః",
                    "transliteration": "69. Om Aadyantarahitayai Namah"
          },
          {
                    "id": "sa-70",
                    "telugu": "70. ఓం సర్వజ్ఞానమూర్తయే నమః",
                    "transliteration": "70. Om Sarvajnanamurtaye Namah"
          },
          {
                    "id": "sa-71",
                    "telugu": "71. ఓం వేదవేదాంగపారగాయై నమః",
                    "transliteration": "71. Om Vedavedangaparagayai Namah"
          },
          {
                    "id": "sa-72",
                    "telugu": "72. ఓం సరస్వతీ దేవియే నమః",
                    "transliteration": "72. Om Saraswati Deviye Namah"
          },
          {
                    "id": "sa-73",
                    "telugu": "73. ఓం సాహిత్యప్రియాయై నమః",
                    "transliteration": "73. Om Sahityapriyayai Namah"
          },
          {
                    "id": "sa-74",
                    "telugu": "74. ఓం సంగీతరసికాయై నమః",
                    "transliteration": "74. Om Sangeetarasikayai Namah"
          },
          {
                    "id": "sa-75",
                    "telugu": "75. ఓం నాదరూపిణ్యై నమః",
                    "transliteration": "75. Om Naadaroopinyai Namah"
          },
          {
                    "id": "sa-76",
                    "telugu": "76. ఓం ఓంకారరూపిణ్యై నమః",
                    "transliteration": "76. Om Omkararoopinyai Namah"
          },
          {
                    "id": "sa-77",
                    "telugu": "77. ఓం మహామంత్రస్వరూపాయై నమః",
                    "transliteration": "77. Om Mahamantraswaroopayai Namah"
          },
          {
                    "id": "sa-78",
                    "telugu": "78. ఓం కలియుగవరదాయై నమః",
                    "transliteration": "78. Om Kaliyugavaradayai Namah"
          },
          {
                    "id": "sa-79",
                    "telugu": "79. ఓం అక్షరజ్ఞానప్రదాయై నమః",
                    "transliteration": "79. Om Aksharajnanapradayai Namah"
          },
          {
                    "id": "sa-80",
                    "telugu": "80. ఓం మేధాశక్తిప్రదాయై నమః",
                    "transliteration": "80. Om Medhashaktipradayai Namah"
          },
          {
                    "id": "sa-81",
                    "telugu": "81. ఓం వాక్ప్రదాయై నమః",
                    "transliteration": "81. Om Vaakpradayai Namah"
          },
          {
                    "id": "sa-82",
                    "telugu": "82. ఓం చతుర్వేదస్వరూపాయై నమః",
                    "transliteration": "82. Om Chaturvedaswaroopayai Namah"
          },
          {
                    "id": "sa-83",
                    "telugu": "83. ఓం అమృతవాణ్యై నమః",
                    "transliteration": "83. Om Amritavanyai Namah"
          },
          {
                    "id": "sa-84",
                    "telugu": "84. ఓం శ్రుతిసంపన్నాయై నమః",
                    "transliteration": "84. Om Shrutisampannayai Namah"
          },
          {
                    "id": "sa-85",
                    "telugu": "85. ఓం రత్నసింహాసనస్థితాయై నమః",
                    "transliteration": "85. Om Ratnasimhasanasthitayai Namah"
          },
          {
                    "id": "sa-86",
                    "telugu": "86. ఓం శ్రీశైలశారదాయై నమః",
                    "transliteration": "86. Om Shrishailasharadayai Namah"
          },
          {
                    "id": "sa-87",
                    "telugu": "87. ఓం శృంగేరీశారదాయై నమః",
                    "transliteration": "87. Om Shringereeshadaayai Namah"
          },
          {
                    "id": "sa-88",
                    "telugu": "88. ఓం బాసరజ్ఞానసరస్వత్యై నమః",
                    "transliteration": "88. Om Basara Jnaana Saraswatyai Namah"
          },
          {
                    "id": "sa-89",
                    "telugu": "89. ఓం జ్ఞానధాత్రిణ్యై నమః",
                    "transliteration": "89. Om Jnanadhatrinyai Namah"
          },
          {
                    "id": "sa-90",
                    "telugu": "90. ఓం మోక్షలక్ష్మ్యై నమః",
                    "transliteration": "90. Om Mokshalakshmyai Namah"
          },
          {
                    "id": "sa-91",
                    "telugu": "91. ఓం సమస్తభీతిహరాయై నమః",
                    "transliteration": "91. Om Samastabheetiharayai Namah"
          },
          {
                    "id": "sa-92",
                    "telugu": "92. ఓం శుభంకార్యై నమః",
                    "transliteration": "92. Om Shubhamkaryai Namah"
          },
          {
                    "id": "sa-93",
                    "telugu": "93. ఓం ధర్మనిలయాయై నమః",
                    "transliteration": "93. Om Dharmanilayayai Namah"
          },
          {
                    "id": "sa-94",
                    "telugu": "94. ఓం అభయప్రదాయై నమః",
                    "transliteration": "94. Om Abhayapradayai Namah"
          },
          {
                    "id": "sa-95",
                    "telugu": "95. ఓం మంత్రరూపాయై నమః",
                    "transliteration": "95. Om Mantraroopayai Namah"
          },
          {
                    "id": "sa-96",
                    "telugu": "96. ఓం తంత్రరూపాయై నమః",
                    "transliteration": "96. Om Tantraroopayai Namah"
          },
          {
                    "id": "sa-97",
                    "telugu": "97. ఓం యంత్రపూజితాయై నమః",
                    "transliteration": "97. Om Yantrapoojitayai Namah"
          },
          {
                    "id": "sa-98",
                    "telugu": "98. ఓం కమలవాసిన్యై నమః",
                    "transliteration": "98. Om Kamalavasinyai Namah"
          },
          {
                    "id": "sa-99",
                    "telugu": "99. ఓం హంసాసనాయై నమః",
                    "transliteration": "99. Om Hamsasanayai Namah"
          },
          {
                    "id": "sa-100",
                    "telugu": "100. ఓం దేవమాత్రే నమః",
                    "transliteration": "100. Om Devamatre Namah"
          },
          {
                    "id": "sa-101",
                    "telugu": "101. ఓం అఖిలాండేశ్వర్యై నమః",
                    "transliteration": "101. Om Akhilandeshwaryai Namah"
          },
          {
                    "id": "sa-102",
                    "telugu": "102. ఓం సర్వమంగళాత్మికాయై నమః",
                    "transliteration": "102. Om Sarvamangalatmikayai Namah"
          },
          {
                    "id": "sa-103",
                    "telugu": "103. ఓం పరబ్రహ్మస్వరూపిణ్యై నమః",
                    "transliteration": "103. Om Parabrahmaswaroopinyai Namah"
          },
          {
                    "id": "sa-104",
                    "telugu": "104. ఓం నిత్యముక్తాయై నమః",
                    "transliteration": "104. Om Nityamuktayai Namah"
          },
          {
                    "id": "sa-105",
                    "telugu": "105. ఓం సర్వలోకనమస్కృతాయై నమః",
                    "transliteration": "105. Om Sarvalokanamaskritayai Namah"
          },
          {
                    "id": "sa-106",
                    "telugu": "106. ఓం శ్రీ విద్యాదేవ్యై నమః",
                    "transliteration": "106. Om Shri Vidyadevyai Namah"
          },
          {
                    "id": "sa-107",
                    "telugu": "107. ఓం శ్రీ మహాసరస్వతీ దేవ్యై నమః",
                    "transliteration": "107. Om Shri Mahasaraswati Devyai Namah"
          },
          {
                    "id": "sa-108",
                    "telugu": "108. ఓం శ్రీ శారదాంబికాయై నమః",
                    "transliteration": "108. Om Shri Sharadambikayai Namah"
          }
]
      }
    ]
  },
  // 22. SHIVA ASHTOTTARAM (108 Complete)
  {
    id: 'shiva-ashtottaram',
    titleTelugu: 'శ్రీ శివ అష్టోత్తర శత నామావళి',
    titleEnglish: 'Sri Shiva Ashtottaram',
    subtitle: 'పరమశివుని 108 దివ్య లింగార్చన నామావళి',
    icon: 'Sun',
    durationMinutes: 12,
    featured: false,
    category: 'ayyappa',
    sections: [
      {
        title: 'శ్రీ శివ అష్టోత్తర శత నామావళి (108)',
        description: 'ఓం నమః శివాయ - బిల్వపత్రార్చన & పుష్పార్చన',
        mantras: [
          {
                    "id": "shiva-1",
                    "telugu": "1. ఓం శివాయ నమః",
                    "transliteration": "1. Om Shiva Namah"
          },
          {
                    "id": "shiva-2",
                    "telugu": "2. ఓం మహేశ్వరాయ నమః",
                    "transliteration": "2. Om Maheshwara Namah"
          },
          {
                    "id": "shiva-3",
                    "telugu": "3. ఓం శంభవే నమః",
                    "transliteration": "3. Om Shambhu Namah"
          },
          {
                    "id": "shiva-4",
                    "telugu": "4. ఓం పినాకినే నమః",
                    "transliteration": "4. Om Pinakine Namah"
          },
          {
                    "id": "shiva-5",
                    "telugu": "5. ఓం శశిశేఖరాయ నమః",
                    "transliteration": "5. Om Shashishekhara Namah"
          },
          {
                    "id": "shiva-6",
                    "telugu": "6. ఓం వామదేవాయ నమః",
                    "transliteration": "6. Om Vamadeva Namah"
          },
          {
                    "id": "shiva-7",
                    "telugu": "7. ఓం విరూపాక్షాయ నమః",
                    "transliteration": "7. Om Virupaksha Namah"
          },
          {
                    "id": "shiva-8",
                    "telugu": "8. ఓం కపర్దినే నమః",
                    "transliteration": "8. Om Kapardine Namah"
          },
          {
                    "id": "shiva-9",
                    "telugu": "9. ఓం నీలలోహితాయ నమః",
                    "transliteration": "9. Om Neelalohita Namah"
          },
          {
                    "id": "shiva-10",
                    "telugu": "10. ఓం శంకరాయ నమః",
                    "transliteration": "10. Om Shankara Namah"
          },
          {
                    "id": "shiva-11",
                    "telugu": "11. ఓం శూలపాణయే నమః",
                    "transliteration": "11. Om Shulapanaye Namah"
          },
          {
                    "id": "shiva-12",
                    "telugu": "12. ఓం ఖట్వాంగినే నమః",
                    "transliteration": "12. Om Khatwangine Namah"
          },
          {
                    "id": "shiva-13",
                    "telugu": "13. ఓం విష్ణువల్లభాయ నమః",
                    "transliteration": "13. Om Vishnuvallabha Namah"
          },
          {
                    "id": "shiva-14",
                    "telugu": "14. ఓం శిపివిష్టాయ నమః",
                    "transliteration": "14. Om Shipivishta Namah"
          },
          {
                    "id": "shiva-15",
                    "telugu": "15. ఓం అంబికానాథాయ నమః",
                    "transliteration": "15. Om Ambikanatha Namah"
          },
          {
                    "id": "shiva-16",
                    "telugu": "16. ఓం శ్రీకంఠాయ నమః",
                    "transliteration": "16. Om Shrikantha Namah"
          },
          {
                    "id": "shiva-17",
                    "telugu": "17. ఓం భక్తవత్సలాయ నమః",
                    "transliteration": "17. Om Bhaktavatsala Namah"
          },
          {
                    "id": "shiva-18",
                    "telugu": "18. ఓం భవాయ నమః",
                    "transliteration": "18. Om Bhava Namah"
          },
          {
                    "id": "shiva-19",
                    "telugu": "19. ఓం శర్వాయ నమః",
                    "transliteration": "19. Om Sharva Namah"
          },
          {
                    "id": "shiva-20",
                    "telugu": "20. ఓం త్రిలోకేశాయ నమః",
                    "transliteration": "20. Om Trilokesha Namah"
          },
          {
                    "id": "shiva-21",
                    "telugu": "21. ఓం శితికంఠాయ నమః",
                    "transliteration": "21. Om Shitikantha Namah"
          },
          {
                    "id": "shiva-22",
                    "telugu": "22. ఓం శివాప్రియాయ నమః",
                    "transliteration": "22. Om Shivapriya Namah"
          },
          {
                    "id": "shiva-23",
                    "telugu": "23. ఓం ఉగ్రాయ నమః",
                    "transliteration": "23. Om Ugra Namah"
          },
          {
                    "id": "shiva-24",
                    "telugu": "24. ఓం కపాలినే నమః",
                    "transliteration": "24. Om Kapaline Namah"
          },
          {
                    "id": "shiva-25",
                    "telugu": "25. ఓం కామారయే నమః",
                    "transliteration": "25. Om Kamaraye Namah"
          },
          {
                    "id": "shiva-26",
                    "telugu": "26. ఓం అంధకాసురసూదనాయ నమః",
                    "transliteration": "26. Om Andhakasurasoodana Namah"
          },
          {
                    "id": "shiva-27",
                    "telugu": "27. ఓం గంగాధరాయ నమః",
                    "transliteration": "27. Om Gangadhara Namah"
          },
          {
                    "id": "shiva-28",
                    "telugu": "28. ఓం లలాటాక్షాయ నమః",
                    "transliteration": "28. Om Lalataksha Namah"
          },
          {
                    "id": "shiva-29",
                    "telugu": "29. ఓం కాలకాలాయ నమః",
                    "transliteration": "29. Om Kalakala Namah"
          },
          {
                    "id": "shiva-30",
                    "telugu": "30. ఓం కృపానిధయే నమః",
                    "transliteration": "30. Om Kripanidhi Namah"
          },
          {
                    "id": "shiva-31",
                    "telugu": "31. ఓం భీమాయ నమః",
                    "transliteration": "31. Om Bheema Namah"
          },
          {
                    "id": "shiva-32",
                    "telugu": "32. ఓం పరశుహస్తాయ నమః",
                    "transliteration": "32. Om Parashuhasta Namah"
          },
          {
                    "id": "shiva-33",
                    "telugu": "33. ఓం మృగపాణయే నమః",
                    "transliteration": "33. Om Mrigapanaye Namah"
          },
          {
                    "id": "shiva-34",
                    "telugu": "34. ఓం జటాధరాయ నమః",
                    "transliteration": "34. Om Jatadhara Namah"
          },
          {
                    "id": "shiva-35",
                    "telugu": "35. ఓం కైలాసవాసినే నమః",
                    "transliteration": "35. Om Kailasavasine Namah"
          },
          {
                    "id": "shiva-36",
                    "telugu": "36. ఓం కవచినే నమః",
                    "transliteration": "36. Om Kavachine Namah"
          },
          {
                    "id": "shiva-37",
                    "telugu": "37. ఓం కఠోరాయ నమః",
                    "transliteration": "37. Om Kathora Namah"
          },
          {
                    "id": "shiva-38",
                    "telugu": "38. ఓం త్రిపురాంతకాయ నమః",
                    "transliteration": "38. Om Tripurantaka Namah"
          },
          {
                    "id": "shiva-39",
                    "telugu": "39. ఓం వృషాంకాయ నమః",
                    "transliteration": "39. Om Vrishanka Namah"
          },
          {
                    "id": "shiva-40",
                    "telugu": "40. ఓం వృషభారూఢాయ నమః",
                    "transliteration": "40. Om Vrishabharoodha Namah"
          },
          {
                    "id": "shiva-41",
                    "telugu": "41. ఓం భస్మోద్ధూళితవిగ్రహాయ నమః",
                    "transliteration": "41. Om Bhasmoddhoolitavigraha Namah"
          },
          {
                    "id": "shiva-42",
                    "telugu": "42. ఓం సామప్రియాయ నమః",
                    "transliteration": "42. Om Samapriya Namah"
          },
          {
                    "id": "shiva-43",
                    "telugu": "43. ఓం స్వరమయాయ నమః",
                    "transliteration": "43. Om Swaramaya Namah"
          },
          {
                    "id": "shiva-44",
                    "telugu": "44. ఓం త్రయీమూర్తయే నమః",
                    "transliteration": "44. Om Trayeemurtaye Namah"
          },
          {
                    "id": "shiva-45",
                    "telugu": "45. ఓం అనీశ్వరాయ నమః",
                    "transliteration": "45. Om Aneeshwara Namah"
          },
          {
                    "id": "shiva-46",
                    "telugu": "46. ఓం సర్వజ్ఞాయ నమః",
                    "transliteration": "46. Om Sarvajnya Namah"
          },
          {
                    "id": "shiva-47",
                    "telugu": "47. ఓం పరమాత్మనే నమః",
                    "transliteration": "47. Om Paramatmane Namah"
          },
          {
                    "id": "shiva-48",
                    "telugu": "48. ఓం సోమసూర్యాగ్నిలోచనాయ నమః",
                    "transliteration": "48. Om Somasooryagnilochana Namah"
          },
          {
                    "id": "shiva-49",
                    "telugu": "49. ఓం హవిషే నమః",
                    "transliteration": "49. Om Havishe Namah"
          },
          {
                    "id": "shiva-50",
                    "telugu": "50. ఓం యజ్ఞమయాయ నమః",
                    "transliteration": "50. Om Yajnamaya Namah"
          },
          {
                    "id": "shiva-51",
                    "telugu": "51. ఓం సోమాయ నమః",
                    "transliteration": "51. Om Soma Namah"
          },
          {
                    "id": "shiva-52",
                    "telugu": "52. ఓం పంచవక్త్రాయ నమః",
                    "transliteration": "52. Om Panchavaktra Namah"
          },
          {
                    "id": "shiva-53",
                    "telugu": "53. ఓం సదాశివాయ నమః",
                    "transliteration": "53. Om Sadashiva Namah"
          },
          {
                    "id": "shiva-54",
                    "telugu": "54. ఓం విశ్వేశ్వరాయ నమః",
                    "transliteration": "54. Om Vishweshwara Namah"
          },
          {
                    "id": "shiva-55",
                    "telugu": "55. ఓం వీరభద్రాయ నమః",
                    "transliteration": "55. Om Veerabhadra Namah"
          },
          {
                    "id": "shiva-56",
                    "telugu": "56. ఓం గణనాథాయ నమః",
                    "transliteration": "56. Om Gananatha Namah"
          },
          {
                    "id": "shiva-57",
                    "telugu": "57. ఓం ప్రజాపతయే నమః",
                    "transliteration": "57. Om Prajapataye Namah"
          },
          {
                    "id": "shiva-58",
                    "telugu": "58. ఓం హిరణ్యరేతసే నమః",
                    "transliteration": "58. Om Hiranyaretase Namah"
          },
          {
                    "id": "shiva-59",
                    "telugu": "59. ఓం దుర్ధర్షాయ నమః",
                    "transliteration": "59. Om Durdharsha Namah"
          },
          {
                    "id": "shiva-60",
                    "telugu": "60. ఓం గిరీశాయ నమః",
                    "transliteration": "60. Om Gireesha Namah"
          },
          {
                    "id": "shiva-61",
                    "telugu": "61. ఓం గిరిశాయ నమః",
                    "transliteration": "61. Om Girisha Namah"
          },
          {
                    "id": "shiva-62",
                    "telugu": "62. ఓం అనఘాయ నమః",
                    "transliteration": "62. Om Anagha Namah"
          },
          {
                    "id": "shiva-63",
                    "telugu": "63. ఓం భుజంగభూషణాయ నమః",
                    "transliteration": "63. Om Bhujangabhooshana Namah"
          },
          {
                    "id": "shiva-64",
                    "telugu": "64. ఓం భర్గాయ నమః",
                    "transliteration": "64. Om Bharga Namah"
          },
          {
                    "id": "shiva-65",
                    "telugu": "65. ఓం గిరిధన్వినే నమః",
                    "transliteration": "65. Om Giridhanwine Namah"
          },
          {
                    "id": "shiva-66",
                    "telugu": "66. ఓం గిరిప్రియాయ నమః",
                    "transliteration": "66. Om Giripriya Namah"
          },
          {
                    "id": "shiva-67",
                    "telugu": "67. ఓం కృత్తివాససే నమః",
                    "transliteration": "67. Om Krittivasase Namah"
          },
          {
                    "id": "shiva-68",
                    "telugu": "68. ఓం పురారాతయే నమః",
                    "transliteration": "68. Om Purarataye Namah"
          },
          {
                    "id": "shiva-69",
                    "telugu": "69. ఓం భగవతే నమః",
                    "transliteration": "69. Om Bhagavate Namah"
          },
          {
                    "id": "shiva-70",
                    "telugu": "70. ఓం ప్రమథాధిపాయ నమః",
                    "transliteration": "70. Om Pramathadhipa Namah"
          },
          {
                    "id": "shiva-71",
                    "telugu": "71. ఓం మృత్యుంజయాయ నమః",
                    "transliteration": "71. Om Mrityunjaya Namah"
          },
          {
                    "id": "shiva-72",
                    "telugu": "72. ఓం సూక్ష్మతనవే నమః",
                    "transliteration": "72. Om Sookshmatanave Namah"
          },
          {
                    "id": "shiva-73",
                    "telugu": "73. ఓం జగద్వ్యాపినే నమః",
                    "transliteration": "73. Om Jagadvyapine Namah"
          },
          {
                    "id": "shiva-74",
                    "telugu": "74. ఓం జగద్గురవే నమః",
                    "transliteration": "74. Om Jagadgurave Namah"
          },
          {
                    "id": "shiva-75",
                    "telugu": "75. ఓం వ్యోమకేశాయ నమః",
                    "transliteration": "75. Om Vyomakesha Namah"
          },
          {
                    "id": "shiva-76",
                    "telugu": "76. ఓం మహాసేనజనకాయ నమః",
                    "transliteration": "76. Om Mahasenajanakaya Namah"
          },
          {
                    "id": "shiva-77",
                    "telugu": "77. ఓం చారువిక్రమాయ నమః",
                    "transliteration": "77. Om Charuvikrama Namah"
          },
          {
                    "id": "shiva-78",
                    "telugu": "78. ఓం రుద్రాయ నమః",
                    "transliteration": "78. Om Rudra Namah"
          },
          {
                    "id": "shiva-79",
                    "telugu": "79. ఓం భూతపతయే నమః",
                    "transliteration": "79. Om Bhootapataye Namah"
          },
          {
                    "id": "shiva-80",
                    "telugu": "80. ఓం స్థాణవే నమః",
                    "transliteration": "80. Om Sthanave Namah"
          },
          {
                    "id": "shiva-81",
                    "telugu": "81. ఓం అహిర్భుధ్న్యాయ నమః",
                    "transliteration": "81. Om Ahirbudhnyaya Namah"
          },
          {
                    "id": "shiva-82",
                    "telugu": "82. ఓం దిగంబరాయ నమః",
                    "transliteration": "82. Om Digambara Namah"
          },
          {
                    "id": "shiva-83",
                    "telugu": "83. ఓం అష్టమూర్తయే నమః",
                    "transliteration": "83. Om Ashtamurtaye Namah"
          },
          {
                    "id": "shiva-84",
                    "telugu": "84. ఓం అనేకాత్మనే నమః",
                    "transliteration": "84. Om Anekatmane Namah"
          },
          {
                    "id": "shiva-85",
                    "telugu": "85. ఓం సాత్త్వికాయ నమః",
                    "transliteration": "85. Om Sattwikaya Namah"
          },
          {
                    "id": "shiva-86",
                    "telugu": "86. ఓం శుద్ధవిగ్రహాయ నమః",
                    "transliteration": "86. Om Shuddhavigraha Namah"
          },
          {
                    "id": "shiva-87",
                    "telugu": "87. ఓం శాశ్వతాయ నమః",
                    "transliteration": "87. Om Shashwata Namah"
          },
          {
                    "id": "shiva-88",
                    "telugu": "88. ఓం ఖండపరశవే నమః",
                    "transliteration": "88. Om Khandaparashave Namah"
          },
          {
                    "id": "shiva-89",
                    "telugu": "89. ఓం అజాయ నమః",
                    "transliteration": "89. Om Ajaya Namah"
          },
          {
                    "id": "shiva-90",
                    "telugu": "90. ఓం పాశవిమోచకాయ నమః",
                    "transliteration": "90. Om Pashavimochaka Namah"
          },
          {
                    "id": "shiva-91",
                    "telugu": "91. ఓం మృడాయ నమః",
                    "transliteration": "91. Om Mrida Namah"
          },
          {
                    "id": "shiva-92",
                    "telugu": "92. ఓం పశుపతయే నమః",
                    "transliteration": "92. Om Pashupataye Namah"
          },
          {
                    "id": "shiva-93",
                    "telugu": "93. ఓం దేవాయ నమః",
                    "transliteration": "93. Om Devaya Namah"
          },
          {
                    "id": "shiva-94",
                    "telugu": "94. ఓం మహాదేవాయ నమః",
                    "transliteration": "94. Om Mahadeva Namah"
          },
          {
                    "id": "shiva-95",
                    "telugu": "95. ఓం అవ్యయాయ నమః",
                    "transliteration": "95. Om Avyayaya Namah"
          },
          {
                    "id": "shiva-96",
                    "telugu": "96. ఓం హరయే నమః",
                    "transliteration": "96. Om Haraye Namah"
          },
          {
                    "id": "shiva-97",
                    "telugu": "97. ఓం పూషదంతభిదే నమః",
                    "transliteration": "97. Om Pooshadantabhide Namah"
          },
          {
                    "id": "shiva-98",
                    "telugu": "98. ఓం అవ్యగ్రాయ నమః",
                    "transliteration": "98. Om Avyagraya Namah"
          },
          {
                    "id": "shiva-99",
                    "telugu": "99. ఓం దక్షాధ్వరహరాయ నమః",
                    "transliteration": "99. Om Dakshadhwarahara Namah"
          },
          {
                    "id": "shiva-100",
                    "telugu": "100. ఓం హరాయ నమః",
                    "transliteration": "100. Om Haraya Namah"
          },
          {
                    "id": "shiva-101",
                    "telugu": "101. ఓం భగనేత్రభిదే నమః",
                    "transliteration": "101. Om Bhaganetrabhide Namah"
          },
          {
                    "id": "shiva-102",
                    "telugu": "102. ఓం అవ్యక్తాయ నమః",
                    "transliteration": "102. Om Avyaktaya Namah"
          },
          {
                    "id": "shiva-103",
                    "telugu": "103. ఓం సహస్రాక్షాయ నమః",
                    "transliteration": "103. Om Sahasraksha Namah"
          },
          {
                    "id": "shiva-104",
                    "telugu": "104. ఓం సహస్రపదే నమః",
                    "transliteration": "104. Om Sahasrapade Namah"
          },
          {
                    "id": "shiva-105",
                    "telugu": "105. ఓం అపవర్గప్రదాయ నమః",
                    "transliteration": "105. Om Apavargaprada Namah"
          },
          {
                    "id": "shiva-106",
                    "telugu": "106. ఓం అనంతాయ నమః",
                    "transliteration": "106. Om Ananta Namah"
          },
          {
                    "id": "shiva-107",
                    "telugu": "107. ఓం తారకాయ నమః",
                    "transliteration": "107. Om Tarakaya Namah"
          },
          {
                    "id": "shiva-108",
                    "telugu": "108. ఓం పరమేశ్వరాయ నమః",
                    "transliteration": "108. Om Parameshwara Namah"
          }
]
      }
    ]
  }
];
