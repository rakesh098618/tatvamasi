import { PoojaCategory, GuruInfo } from '../types';

export const GURU_SWAMI_DETAILS: GuruInfo = {
  name: 'శ్రీ శ్రీ శ్రీ ఆడేపు బ్రహ్మం గురుస్వామి',
  title: 'అయ్యప్ప దీక్షా గురువులు & మండల దీక్షా మార్గదర్శకులు',
  location: 'రాంనగర్, హైదరాబాద్',
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
                    "telugu": "ఓం గణేశాయ నమః - పాదౌ పూజయామి (పాదములు)",
                    "transliteration": "Om Ganeshay Namah - Padau Poojayami"
          },
          {
                    "id": "gp-ang-2",
                    "telugu": "ఓం విఘ్నరాజాయ నమః - గుల్ఫౌ పూజయామి (మడమలు)",
                    "transliteration": "Om Vighnarajaya Namah - Gulphau Poojayami"
          },
          {
                    "id": "gp-ang-3",
                    "telugu": "ఓం ఆఖువాహనాయ నమః - జానునీ పూజయామి (మోకాళ్ళు)",
                    "transliteration": "Om Aakhu Vahanaya Namah - Januni Poojayami"
          },
          {
                    "id": "gp-ang-4",
                    "telugu": "ఓం హేరంబాయ నమః - ఊరూ పూజయామి (తొడలు)",
                    "transliteration": "Om Herambaya Namah - Ooroo Poojayami"
          },
          {
                    "id": "gp-ang-5",
                    "telugu": "ఓం లంబోదరాయ నమః - ఉదరం పూజయామి (పొట్ట)",
                    "transliteration": "Om Lambodaraya Namah - Udaram Poojayami"
          },
          {
                    "id": "gp-ang-6",
                    "telugu": "ఓం గౌరీసుతాయ నమః - నాభిం పూజయామి (నాభి)",
                    "transliteration": "Om Gourisutaya Namah - Nabhim Poojayami"
          },
          {
                    "id": "gp-ang-7",
                    "telugu": "ఓం గణాధిపాయ నమః - హృదయం పూజయామి (వక్షఃస్థలం)",
                    "transliteration": "Om Ganadhipaya Namah - Hridayam Poojayami"
          },
          {
                    "id": "gp-ang-8",
                    "telugu": "ఓం స్థూలకంఠాయ నమః - కంఠం పూజయామి (కంఠం)",
                    "transliteration": "Om Sthulakanthaya Namah - Kantham Poojayami"
          },
          {
                    "id": "gp-ang-9",
                    "telugu": "ఓం గజవక్త్రాయ నమః - వక్త్రం పూజయామి (ముఖం)",
                    "transliteration": "Om Gajavaktraya Namah - Vaktram Poojayami"
          },
          {
                    "id": "gp-ang-10",
                    "telugu": "ఓం విఘ్నహర్త్రే నమః - నేత్రే పూజయామి (కన్నులు)",
                    "transliteration": "Om Vighnahartre Namah - Netre Poojayami"
          },
          {
                    "id": "gp-ang-11",
                    "telugu": "ఓం సర్వేశ్వరాయ నమః - శిరః పూజయామి (శిరస్సు)",
                    "transliteration": "Om Sarveshwaraya Namah - Shirah Poojayami"
          },
          {
                    "id": "gp-ang-12",
                    "telugu": "ఓం శ్రీ వరసిద్ధి వినాయక స్వామినే నమః - సర్వాణ్యంగాని పూజయామి (సమస్త అంగములు)",
                    "transliteration": "Om Shri Varasiddhi Vinayaka Swamine Namah - Sarvanyangani Poojayami"
          }
]
      },
      {
        title: 'శ్రీ వినాయక అష్టోత్తర శత నామావళి (108)',
        description: 'ఓం శ్రీ వినాయకాయ నమః - ప్రతి నామానికి పుష్పము లేదా అక్షతలను సమర్పించవలెను',
        mantras: [
          {
                    "id": "gp-ash-1",
                    "telugu": "1. ఓం గజాననాయ నమః",
                    "transliteration": "1. Om Gajanana Namah"
          },
          {
                    "id": "gp-ash-2",
                    "telugu": "2. ఓం గణాధ్యక్షాయ నమః",
                    "transliteration": "2. Om Ganadhyaksha Namah"
          },
          {
                    "id": "gp-ash-3",
                    "telugu": "3. ఓం విఘ్నరాజాయ నమః",
                    "transliteration": "3. Om Vighnaraja Namah"
          },
          {
                    "id": "gp-ash-4",
                    "telugu": "4. ఓం వినాయకాయ నమః",
                    "transliteration": "4. Om Vinayaka Namah"
          },
          {
                    "id": "gp-ash-5",
                    "telugu": "5. ఓం ద్వైమాతురాయ నమః",
                    "transliteration": "5. Om Dwaimatura Namah"
          },
          {
                    "id": "gp-ash-6",
                    "telugu": "6. ఓం ద్విముఖాయ నమః",
                    "transliteration": "6. Om Dvimukha Namah"
          },
          {
                    "id": "gp-ash-7",
                    "telugu": "7. ఓం ప్రముఖాయ నమః",
                    "transliteration": "7. Om Pramukha Namah"
          },
          {
                    "id": "gp-ash-8",
                    "telugu": "8. ఓం సుముఖాయ నమః",
                    "transliteration": "8. Om Sumukha Namah"
          },
          {
                    "id": "gp-ash-9",
                    "telugu": "9. ఓం కృతినే నమః",
                    "transliteration": "9. Om Kritine Namah"
          },
          {
                    "id": "gp-ash-10",
                    "telugu": "10. ఓం సుప్రదీపాయ నమః",
                    "transliteration": "10. Om Supradeepa Namah"
          },
          {
                    "id": "gp-ash-11",
                    "telugu": "11. ఓం సుఖనిధయే నమః",
                    "transliteration": "11. Om Sukhanidhi Namah"
          },
          {
                    "id": "gp-ash-12",
                    "telugu": "12. ఓం సురాధ్యక్షాయ నమః",
                    "transliteration": "12. Om Suradhyaksha Namah"
          },
          {
                    "id": "gp-ash-13",
                    "telugu": "13. ఓం సురారిఘ్నాయ నమః",
                    "transliteration": "13. Om Surarighna Namah"
          },
          {
                    "id": "gp-ash-14",
                    "telugu": "14. ఓం మహాగణపతయే నమః",
                    "transliteration": "14. Om Mahaganapati Namah"
          },
          {
                    "id": "gp-ash-15",
                    "telugu": "15. ఓం మాన్యాయ నమః",
                    "transliteration": "15. Om Manya Namah"
          },
          {
                    "id": "gp-ash-16",
                    "telugu": "16. ఓం మహాకాలాయ నమః",
                    "transliteration": "16. Om Mahakala Namah"
          },
          {
                    "id": "gp-ash-17",
                    "telugu": "17. ఓం మహాబలాయ నమః",
                    "transliteration": "17. Om Mahabala Namah"
          },
          {
                    "id": "gp-ash-18",
                    "telugu": "18. ఓం హేరంబాయ నమః",
                    "transliteration": "18. Om Heramba Namah"
          },
          {
                    "id": "gp-ash-19",
                    "telugu": "19. ఓం లంబజఠరాయ నమః",
                    "transliteration": "19. Om Lambajathara Namah"
          },
          {
                    "id": "gp-ash-20",
                    "telugu": "20. ఓం హ్రస్వగ్రీవాయ నమః",
                    "transliteration": "20. Om Hraswagreeva Namah"
          },
          {
                    "id": "gp-ash-21",
                    "telugu": "21. ఓం మహోదరాయ నమః",
                    "transliteration": "21. Om Mahodara Namah"
          },
          {
                    "id": "gp-ash-22",
                    "telugu": "22. ఓం మదోత్కటాయ నమః",
                    "transliteration": "22. Om Madotkata Namah"
          },
          {
                    "id": "gp-ash-23",
                    "telugu": "23. ఓం మహావీరాయ నమః",
                    "transliteration": "23. Om Mahaveera Namah"
          },
          {
                    "id": "gp-ash-24",
                    "telugu": "24. ఓం మంత్రిణే నమః",
                    "transliteration": "24. Om Mantrine Namah"
          },
          {
                    "id": "gp-ash-25",
                    "telugu": "25. ఓం మంగళస్వరూపాయ నమః",
                    "transliteration": "25. Om Mangalaswaroopa Namah"
          },
          {
                    "id": "gp-ash-26",
                    "telugu": "26. ఓం ప్రమథాయ నమః",
                    "transliteration": "26. Om Pramatha Namah"
          },
          {
                    "id": "gp-ash-27",
                    "telugu": "27. ఓం ప్రథమాయ నమః",
                    "transliteration": "27. Om Prathama Namah"
          },
          {
                    "id": "gp-ash-28",
                    "telugu": "28. ఓం ప్రాజ్ఞాయ నమః",
                    "transliteration": "28. Om Prajna Namah"
          },
          {
                    "id": "gp-ash-29",
                    "telugu": "29. ఓం విఘ్నహర్త్రే నమః",
                    "transliteration": "29. Om Vighnahartre Namah"
          },
          {
                    "id": "gp-ash-30",
                    "telugu": "30. ఓం విద్యాధరాయ నమః",
                    "transliteration": "30. Om Vidyadhara Namah"
          },
          {
                    "id": "gp-ash-31",
                    "telugu": "31. ఓం విఘ్నకర్త్రే నమః",
                    "transliteration": "31. Om Vighnakartre Namah"
          },
          {
                    "id": "gp-ash-32",
                    "telugu": "32. ఓం విశ్వవక్త్రాయ నమః",
                    "transliteration": "32. Om Vishwavaktra Namah"
          },
          {
                    "id": "gp-ash-33",
                    "telugu": "33. ఓం శర్వతనయాయ నమః",
                    "transliteration": "33. Om Sharvatanaya Namah"
          },
          {
                    "id": "gp-ash-34",
                    "telugu": "34. ఓం శర్వరీప్రియాయ నమః",
                    "transliteration": "34. Om Sharvareepriya Namah"
          },
          {
                    "id": "gp-ash-35",
                    "telugu": "35. ఓం సర్వాత్మకాయ నమః",
                    "transliteration": "35. Om Sarvatmaka Namah"
          },
          {
                    "id": "gp-ash-36",
                    "telugu": "36. ఓం సృష్టికర్త్రే నమః",
                    "transliteration": "36. Om Srishtikartre Namah"
          },
          {
                    "id": "gp-ash-37",
                    "telugu": "37. ఓం దివ్యాయ నమః",
                    "transliteration": "37. Om Divya Namah"
          },
          {
                    "id": "gp-ash-38",
                    "telugu": "38. ఓం భక్తానుకూలాయ నమః",
                    "transliteration": "38. Om Bhaktanukoola Namah"
          },
          {
                    "id": "gp-ash-39",
                    "telugu": "39. ఓం వికటాయ నమః",
                    "transliteration": "39. Om Vikata Namah"
          },
          {
                    "id": "gp-ash-40",
                    "telugu": "40. ఓం కపిలాయ నమః",
                    "transliteration": "40. Om Kapila Namah"
          },
          {
                    "id": "gp-ash-41",
                    "telugu": "41. ఓం కపీశ్వరాయ నమః",
                    "transliteration": "41. Om Kapeeshwara Namah"
          },
          {
                    "id": "gp-ash-42",
                    "telugu": "42. ఓం దుర్మిత్రాయ నమః",
                    "transliteration": "42. Om Durmitra Namah"
          },
          {
                    "id": "gp-ash-43",
                    "telugu": "43. ఓం దుర్జయాగ్ర్యాయ నమః",
                    "transliteration": "43. Om Durjayagrya Namah"
          },
          {
                    "id": "gp-ash-44",
                    "telugu": "44. ఓం దృప్తాయ నమః",
                    "transliteration": "44. Om Dripta Namah"
          },
          {
                    "id": "gp-ash-45",
                    "telugu": "45. ఓం భీమాయ నమః",
                    "transliteration": "45. Om Bheema Namah"
          },
          {
                    "id": "gp-ash-46",
                    "telugu": "46. ఓం భవ్యాయ నమః",
                    "transliteration": "46. Om Bhavya Namah"
          },
          {
                    "id": "gp-ash-47",
                    "telugu": "47. ఓం లోకపాలాయ నమః",
                    "transliteration": "47. Om Lokapala Namah"
          },
          {
                    "id": "gp-ash-48",
                    "telugu": "48. ఓం శాంతాయ నమః",
                    "transliteration": "48. Om Shanta Namah"
          },
          {
                    "id": "gp-ash-49",
                    "telugu": "49. ఓం శుభప్రదాయ నమః",
                    "transliteration": "49. Om Shubhaprada Namah"
          },
          {
                    "id": "gp-ash-50",
                    "telugu": "50. ఓం వరదాయ నమః",
                    "transliteration": "50. Om Varada Namah"
          },
          {
                    "id": "gp-ash-51",
                    "telugu": "51. ఓం వరేణ్యాయ నమః",
                    "transliteration": "51. Om Varenya Namah"
          },
          {
                    "id": "gp-ash-52",
                    "telugu": "52. ఓం కాలాయ నమః",
                    "transliteration": "52. Om Kala Namah"
          },
          {
                    "id": "gp-ash-53",
                    "telugu": "53. ఓం కమలాసనాయ నమః",
                    "transliteration": "53. Om Kamalasana Namah"
          },
          {
                    "id": "gp-ash-54",
                    "telugu": "54. ఓం రమాప్రియాయ నమః",
                    "transliteration": "54. Om Ramapriya Namah"
          },
          {
                    "id": "gp-ash-55",
                    "telugu": "55. ఓం రమానందాయ నమః",
                    "transliteration": "55. Om Ramananda Namah"
          },
          {
                    "id": "gp-ash-56",
                    "telugu": "56. ఓం జ్ఞానప్రియాయ నమః",
                    "transliteration": "56. Om Jnanapriya Namah"
          },
          {
                    "id": "gp-ash-57",
                    "telugu": "57. ఓం జ్ఞానదాయకాయ నమః",
                    "transliteration": "57. Om Jnanadayaka Namah"
          },
          {
                    "id": "gp-ash-58",
                    "telugu": "58. ఓం కాలకల్పాయ నమః",
                    "transliteration": "58. Om Kalakalpa Namah"
          },
          {
                    "id": "gp-ash-59",
                    "telugu": "59. ఓం క్షమాయుతాయ నమః",
                    "transliteration": "59. Om Kshamayuta Namah"
          },
          {
                    "id": "gp-ash-60",
                    "telugu": "60. ఓం సమాహితాయ నమః",
                    "transliteration": "60. Om Samahita Namah"
          },
          {
                    "id": "gp-ash-61",
                    "telugu": "61. ఓం సమగ్రాయ నమః",
                    "transliteration": "61. Om Samagra Namah"
          },
          {
                    "id": "gp-ash-62",
                    "telugu": "62. ఓం సుభగాయ నమః",
                    "transliteration": "62. Om Subhaga Namah"
          },
          {
                    "id": "gp-ash-63",
                    "telugu": "63. ఓం శుభాయ నమః",
                    "transliteration": "63. Om Shubha Namah"
          },
          {
                    "id": "gp-ash-64",
                    "telugu": "64. ఓం తేజస్వినే నమః",
                    "transliteration": "64. Om Tejaswine Namah"
          },
          {
                    "id": "gp-ash-65",
                    "telugu": "65. ఓం తుల్యాయ నమః",
                    "transliteration": "65. Om Tulyaya Namah"
          },
          {
                    "id": "gp-ash-66",
                    "telugu": "66. ఓం తరుణాయ నమః",
                    "transliteration": "66. Om Taruna Namah"
          },
          {
                    "id": "gp-ash-67",
                    "telugu": "67. ఓం శుద్ధాయ నమః",
                    "transliteration": "67. Om Shuddha Namah"
          },
          {
                    "id": "gp-ash-68",
                    "telugu": "68. ఓం శివప్రియాయ నమః",
                    "transliteration": "68. Om Shivapriya Namah"
          },
          {
                    "id": "gp-ash-69",
                    "telugu": "69. ఓం పాశాంకుశధరాయ నమః",
                    "transliteration": "69. Om Pashankushadhara Namah"
          },
          {
                    "id": "gp-ash-70",
                    "telugu": "70. ఓం భవ్యరూపాయ నమః",
                    "transliteration": "70. Om Bhavyaroopa Namah"
          },
          {
                    "id": "gp-ash-71",
                    "telugu": "71. ఓం భీమతేజసే నమః",
                    "transliteration": "71. Om Bheematejase Namah"
          },
          {
                    "id": "gp-ash-72",
                    "telugu": "72. ఓం కల్పాంతకారిణే నమః",
                    "transliteration": "72. Om Kalpantakarine Namah"
          },
          {
                    "id": "gp-ash-73",
                    "telugu": "73. ఓం కామదాయకాయ నమః",
                    "transliteration": "73. Om Kamadayaka Namah"
          },
          {
                    "id": "gp-ash-74",
                    "telugu": "74. ఓం కమలాక్షాయ నమః",
                    "transliteration": "74. Om Kamalaksha Namah"
          },
          {
                    "id": "gp-ash-75",
                    "telugu": "75. ఓం కర్మసాక్షిణే నమః",
                    "transliteration": "75. Om Karmasakshine Namah"
          },
          {
                    "id": "gp-ash-76",
                    "telugu": "76. ఓం అనేకశృంగాయ నమః",
                    "transliteration": "76. Om Anekashringa Namah"
          },
          {
                    "id": "gp-ash-77",
                    "telugu": "77. ఓం అక్షోభ్యాయ నమః",
                    "transliteration": "77. Om Akshobhya Namah"
          },
          {
                    "id": "gp-ash-78",
                    "telugu": "78. ఓం అనంతాయ నమః",
                    "transliteration": "78. Om Ananta Namah"
          },
          {
                    "id": "gp-ash-79",
                    "telugu": "79. ఓం అమితాయ నమః",
                    "transliteration": "79. Om Amita Namah"
          },
          {
                    "id": "gp-ash-80",
                    "telugu": "80. ఓం అప్రమేయాయ నమః",
                    "transliteration": "80. Om Aprameya Namah"
          },
          {
                    "id": "gp-ash-81",
                    "telugu": "81. ఓం ఆత్మరూపాయ నమః",
                    "transliteration": "81. Om Aatmaroopa Namah"
          },
          {
                    "id": "gp-ash-82",
                    "telugu": "82. ఓం ఆదిత్యసన్నిభాయ నమః",
                    "transliteration": "82. Om Aadityasannibha Namah"
          },
          {
                    "id": "gp-ash-83",
                    "telugu": "83. ఓం ఇంద్రాదిపూజితాయ నమః",
                    "transliteration": "83. Om Indradipoojita Namah"
          },
          {
                    "id": "gp-ash-84",
                    "telugu": "84. ఓం ఈశ్వరసూనవే నమః",
                    "transliteration": "84. Om Eshwarasoonave Namah"
          },
          {
                    "id": "gp-ash-85",
                    "telugu": "85. ఓం ఉత్తమాయ నమః",
                    "transliteration": "85. Om Uttama Namah"
          },
          {
                    "id": "gp-ash-86",
                    "telugu": "86. ఓం ఉత్కృష్టాయ నమః",
                    "transliteration": "86. Om Utkrishta Namah"
          },
          {
                    "id": "gp-ash-87",
                    "telugu": "87. ఓం ఋభుక్షాయ నమః",
                    "transliteration": "87. Om Ribhuksha Namah"
          },
          {
                    "id": "gp-ash-88",
                    "telugu": "88. ఓం ఏకదంతాయ నమః",
                    "transliteration": "88. Om Ekadanta Namah"
          },
          {
                    "id": "gp-ash-89",
                    "telugu": "89. ఓం ఓంకారరూపిణే నమః",
                    "transliteration": "89. Om Omkararoopine Namah"
          },
          {
                    "id": "gp-ash-90",
                    "telugu": "90. ఓం కౌతుకాయ నమః",
                    "transliteration": "90. Om Kautuka Namah"
          },
          {
                    "id": "gp-ash-91",
                    "telugu": "91. ఓం గౌరీసుతాయ నమః",
                    "transliteration": "91. Om Gourisuta Namah"
          },
          {
                    "id": "gp-ash-92",
                    "telugu": "92. ఓం చతుర్భుజాయ నమః",
                    "transliteration": "92. Om Chaturbhuja Namah"
          },
          {
                    "id": "gp-ash-93",
                    "telugu": "93. ఓం ఛత్రధారిణే నమః",
                    "transliteration": "93. Om Chhatradharine Namah"
          },
          {
                    "id": "gp-ash-94",
                    "telugu": "94. ఓం జగత్కర్త్రే నమః",
                    "transliteration": "94. Om Jagatkartre Namah"
          },
          {
                    "id": "gp-ash-95",
                    "telugu": "95. ఓం జ్ఞానమూర్తయే నమః",
                    "transliteration": "95. Om Jnanamurtaye Namah"
          },
          {
                    "id": "gp-ash-96",
                    "telugu": "96. ఓం తత్త్వరూపాయ నమః",
                    "transliteration": "96. Om Tatwaroopa Namah"
          },
          {
                    "id": "gp-ash-97",
                    "telugu": "97. ఓం దంష్ట్రాయుతాయ నమః",
                    "transliteration": "97. Om Damshtrayuta Namah"
          },
          {
                    "id": "gp-ash-98",
                    "telugu": "98. ఓం ధర్మజ్ఞాయ నమః",
                    "transliteration": "98. Om Dharmajnya Namah"
          },
          {
                    "id": "gp-ash-99",
                    "telugu": "99. ఓం నాగాభరణాయ నమః",
                    "transliteration": "99. Om Nagabharana Namah"
          },
          {
                    "id": "gp-ash-100",
                    "telugu": "100. ఓం పరశుహస్తాయ నమః",
                    "transliteration": "100. Om Parashuhasta Namah"
          },
          {
                    "id": "gp-ash-101",
                    "telugu": "101. ఓం ఫాలనేత్రప్రియాయ నమః",
                    "transliteration": "101. Om Phalanetrapriya Namah"
          },
          {
                    "id": "gp-ash-102",
                    "telugu": "102. ఓం బాహులతేయాయ నమః",
                    "transliteration": "102. Om Bahulateya Namah"
          },
          {
                    "id": "gp-ash-103",
                    "telugu": "103. ఓం భక్తవత్సలాయ నమః",
                    "transliteration": "103. Om Bhaktavatsala Namah"
          },
          {
                    "id": "gp-ash-104",
                    "telugu": "104. ఓం మహేశ్వరప్రియాయ నమః",
                    "transliteration": "104. Om Maheshwarapriya Namah"
          },
          {
                    "id": "gp-ash-105",
                    "telugu": "105. ఓం యజ్ఞేశ్వరాయ నమః",
                    "transliteration": "105. Om Yajneshwara Namah"
          },
          {
                    "id": "gp-ash-106",
                    "telugu": "106. ఓం లంబోదరాయ నమః",
                    "transliteration": "106. Om Lambodara Namah"
          },
          {
                    "id": "gp-ash-107",
                    "telugu": "107. ఓం సర్వసిద్ధిప్రదాయకాయ నమః",
                    "transliteration": "107. Om Sarvasiddhipradayaka Namah"
          },
          {
                    "id": "gp-ash-108",
                    "telugu": "108. ఓం శ్రీ వరసిద్ధి వినాయక స్వామినే నమః",
                    "transliteration": "108. Om Shri Varasiddhi Vinayaka Swamine Namah"
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
                    "telugu": "ఓం స్కందాయ నమః - పాదౌ పూజయామి (పాదములు)",
                    "transliteration": "Om Skandaya Namah - Padau Poojayami"
          },
          {
                    "id": "sp-ang-2",
                    "telugu": "ఓం కుమారాయ నమః - గుల్ఫౌ పూజయామి (మడమలు)",
                    "transliteration": "Om Kumaraya Namah - Gulphau Poojayami"
          },
          {
                    "id": "sp-ang-3",
                    "telugu": "ఓం శక్తిధరాయ నమః - జానునీ పూజయామి (మోకాళ్ళు)",
                    "transliteration": "Om Shaktidharaya Namah - Januni Poojayami"
          },
          {
                    "id": "sp-ang-4",
                    "telugu": "ఓం శరవణభవాయ నమః - ఊరూ పూజయామి (తొడలు)",
                    "transliteration": "Om Saravanabhavaya Namah - Ooroo Poojayami"
          },
          {
                    "id": "sp-ang-5",
                    "telugu": "ఓం గుహాయ నమః - కటిం పూజయామి (నడుము)",
                    "transliteration": "Om Guhaya Namah - Katim Poojayami"
          },
          {
                    "id": "sp-ang-6",
                    "telugu": "ఓం దేవసేనాపతయే నమః - నాభిం పూజయామి (నాభి)",
                    "transliteration": "Om Devasenapataye Namah - Nabhim Poojayami"
          },
          {
                    "id": "sp-ang-7",
                    "telugu": "ఓం మహాసేనాయ నమః - ఉదరం పూజయామి (ఉదరము)",
                    "transliteration": "Om Mahasenaya Namah - Udaram Poojayami"
          },
          {
                    "id": "sp-ang-8",
                    "telugu": "ఓం కార్తికేయాయ నమః - హృదయం పూజయామి (హృదయము)",
                    "transliteration": "Om Kartikeyaya Namah - Hridayam Poojayami"
          },
          {
                    "id": "sp-ang-9",
                    "telugu": "ఓం షణ్ముఖాయ నమః - కంఠం పూజయామి (కంఠము)",
                    "transliteration": "Om Shanmukhaya Namah - Kantham Poojayami"
          },
          {
                    "id": "sp-ang-10",
                    "telugu": "ఓం శివపుత్రాయ నమః - బాహూన్ పూజయామి (భుజములు)",
                    "transliteration": "Om Shivaputraya Namah - Bahoon Poojayami"
          },
          {
                    "id": "sp-ang-11",
                    "telugu": "ఓం ద్విషణ్ణేత్రాయ నమః - నేత్రే పూజయామి (కన్నులు)",
                    "transliteration": "Om Dwishannetraya Namah - Netre Poojayami"
          },
          {
                    "id": "sp-ang-12",
                    "telugu": "ఓం శరజన్మనే నమః - లలాటం పూజయామి (నుదురు)",
                    "transliteration": "Om Sharajanmane Namah - Lalatam Poojayami"
          },
          {
                    "id": "sp-ang-13",
                    "telugu": "ఓం శిఖివాహనాయ నమః - శిరః పూజయామి (శిరస్సు)",
                    "transliteration": "Om Shikhivahanaya Namah - Shirah Poojayami"
          },
          {
                    "id": "sp-ang-14",
                    "telugu": "ఓం శ్రీ వల్లీదేవసేనా సమేత శ్రీ సుబ్రహ్మణ్యేశ్వర స్వామినే నమః - సర్వాణ్యంగాని పూజయామి",
                    "transliteration": "Om Shri Valli Devasena Sameta Shri Subrahmanyeshwara Swamine Namah - Sarvanyangani Poojayami"
          }
]
      },
      {
        title: 'శ్రీ సుబ్రహ్మణ్య అష్టోత్తర శత నామావళి (108)',
        description: 'ఓం శ్రీ సుబ్రహ్మణ్యాయ నమః - ప్రతి నామానికి పుష్పము సమర్పించవలెను',
        mantras: [
          {
                    "id": "sp-ash-1",
                    "telugu": "1. ఓం స్కందాయ నమః",
                    "transliteration": "1. Om Skanda Namah"
          },
          {
                    "id": "sp-ash-2",
                    "telugu": "2. ఓం గుహాయ నమః",
                    "transliteration": "2. Om Guha Namah"
          },
          {
                    "id": "sp-ash-3",
                    "telugu": "3. ఓం షణ్ముఖాయ నమః",
                    "transliteration": "3. Om Shanmukha Namah"
          },
          {
                    "id": "sp-ash-4",
                    "telugu": "4. ఓం ఫాలనేత్రసుతాయ నమః",
                    "transliteration": "4. Om Phalanetrasuta Namah"
          },
          {
                    "id": "sp-ash-5",
                    "telugu": "5. ఓం ప్రభవే నమః",
                    "transliteration": "5. Om Prabhave Namah"
          },
          {
                    "id": "sp-ash-6",
                    "telugu": "6. ఓం పింగళాయ నమః",
                    "transliteration": "6. Om Pingala Namah"
          },
          {
                    "id": "sp-ash-7",
                    "telugu": "7. ఓం కృత్తికాసూనవే నమః",
                    "transliteration": "7. Om Krittikasoonave Namah"
          },
          {
                    "id": "sp-ash-8",
                    "telugu": "8. ఓం శిఖివాహనాయ నమః",
                    "transliteration": "8. Om Shikhivahana Namah"
          },
          {
                    "id": "sp-ash-9",
                    "telugu": "9. ఓం ద్విషణ్ణేత్రాయ నమః",
                    "transliteration": "9. Om Dwishannetra Namah"
          },
          {
                    "id": "sp-ash-10",
                    "telugu": "10. ఓం శక్తిధరాయ నమః",
                    "transliteration": "10. Om Shaktidhara Namah"
          },
          {
                    "id": "sp-ash-11",
                    "telugu": "11. ఓం పిశితాశప్రభంజనాయ నమః",
                    "transliteration": "11. Om Pishitashaprabhanjana Namah"
          },
          {
                    "id": "sp-ash-12",
                    "telugu": "12. ఓం తారకాసురసంహర్త్రే నమః",
                    "transliteration": "12. Om Tarakasurasamhartre Namah"
          },
          {
                    "id": "sp-ash-13",
                    "telugu": "13. ఓం రక్షోబలవిమర్దనాయ నమః",
                    "transliteration": "13. Om Rakshobalavimardana Namah"
          },
          {
                    "id": "sp-ash-14",
                    "telugu": "14. ఓం మత్తాయ నమః",
                    "transliteration": "14. Om Matta Namah"
          },
          {
                    "id": "sp-ash-15",
                    "telugu": "15. ఓం ప్రమత్తాయ నమః",
                    "transliteration": "15. Om Pramatta Namah"
          },
          {
                    "id": "sp-ash-16",
                    "telugu": "16. ఓం ఉన్మత్తాయ నమః",
                    "transliteration": "16. Om Unmatta Namah"
          },
          {
                    "id": "sp-ash-17",
                    "telugu": "17. ఓం సురసైన్యసురక్షకాయ నమః",
                    "transliteration": "17. Om Surasainyasurakshaka Namah"
          },
          {
                    "id": "sp-ash-18",
                    "telugu": "18. ఓం దేవసేనాపతయే నమః",
                    "transliteration": "18. Om Devasenapataye Namah"
          },
          {
                    "id": "sp-ash-19",
                    "telugu": "19. ఓం ప్రాజ్ఞాయ నమః",
                    "transliteration": "19. Om Prajna Namah"
          },
          {
                    "id": "sp-ash-20",
                    "telugu": "20. ఓం కృపాళవే నమః",
                    "transliteration": "20. Om Kripalave Namah"
          },
          {
                    "id": "sp-ash-21",
                    "telugu": "21. ఓం భక్తవత్సలాయ నమః",
                    "transliteration": "21. Om Bhaktavatsala Namah"
          },
          {
                    "id": "sp-ash-22",
                    "telugu": "22. ఓం ఉమాసుతాయ నమః",
                    "transliteration": "22. Om Umasuta Namah"
          },
          {
                    "id": "sp-ash-23",
                    "telugu": "23. ఓం కుమారాయ నమః",
                    "transliteration": "23. Om Kumara Namah"
          },
          {
                    "id": "sp-ash-24",
                    "telugu": "24. ఓం క్రౌంచదారణాయ నమః",
                    "transliteration": "24. Om Krounchadarana Namah"
          },
          {
                    "id": "sp-ash-25",
                    "telugu": "25. ఓం సేనాన్యే నమః",
                    "transliteration": "25. Om Senanye Namah"
          },
          {
                    "id": "sp-ash-26",
                    "telugu": "26. ఓం అగ్నిజన్మనే నమః",
                    "transliteration": "26. Om Agnijanmane Namah"
          },
          {
                    "id": "sp-ash-27",
                    "telugu": "27. ఓం చేకితానాయ నమః",
                    "transliteration": "27. Om Chekitana Namah"
          },
          {
                    "id": "sp-ash-28",
                    "telugu": "28. ఓం శివప్రభవే నమః",
                    "transliteration": "28. Om Shivaprabhave Namah"
          },
          {
                    "id": "sp-ash-29",
                    "telugu": "29. ఓం శరవణభవాయ నమః",
                    "transliteration": "29. Om Saravanabhava Namah"
          },
          {
                    "id": "sp-ash-30",
                    "telugu": "30. ఓం శాంతాయ నమః",
                    "transliteration": "30. Om Shanta Namah"
          },
          {
                    "id": "sp-ash-31",
                    "telugu": "31. ఓం శక్తిహస్తాయ నమః",
                    "transliteration": "31. Om Shaktihasta Namah"
          },
          {
                    "id": "sp-ash-32",
                    "telugu": "32. ఓం గంగాసుతాయ నమః",
                    "transliteration": "32. Om Gangasuta Namah"
          },
          {
                    "id": "sp-ash-33",
                    "telugu": "33. ఓం శరజన్మనే నమః",
                    "transliteration": "33. Om Sharajanmane Namah"
          },
          {
                    "id": "sp-ash-34",
                    "telugu": "34. ఓం జితకామాయ నమః",
                    "transliteration": "34. Om Jitakama Namah"
          },
          {
                    "id": "sp-ash-35",
                    "telugu": "35. ఓం అమోఘాయ నమః",
                    "transliteration": "35. Om Amogha Namah"
          },
          {
                    "id": "sp-ash-36",
                    "telugu": "36. ఓం అమృతాయ నమః",
                    "transliteration": "36. Om Amrita Namah"
          },
          {
                    "id": "sp-ash-37",
                    "telugu": "37. ఓం వరదాయ నమః",
                    "transliteration": "37. Om Varada Namah"
          },
          {
                    "id": "sp-ash-38",
                    "telugu": "38. ఓం పుత్రదాయకాయ నమః",
                    "transliteration": "38. Om Putradayaka Namah"
          },
          {
                    "id": "sp-ash-39",
                    "telugu": "39. ఓం శూరపద్మవిమర్దనాయ నమః",
                    "transliteration": "39. Om Shoorapadmavimardana Namah"
          },
          {
                    "id": "sp-ash-40",
                    "telugu": "40. ఓం శ్రీమతే నమః",
                    "transliteration": "40. Om Shrimate Namah"
          },
          {
                    "id": "sp-ash-41",
                    "telugu": "41. ఓం సుబ్రహ్మణ్యాయ నమః",
                    "transliteration": "41. Om Subrahmanya Namah"
          },
          {
                    "id": "sp-ash-42",
                    "telugu": "42. ఓం గుహప్రియాయ నమః",
                    "transliteration": "42. Om Guhapriya Namah"
          },
          {
                    "id": "sp-ash-43",
                    "telugu": "43. ఓం బ్రహ్మణ్యాయ నమః",
                    "transliteration": "43. Om Brahmanya Namah"
          },
          {
                    "id": "sp-ash-44",
                    "telugu": "44. ఓం విష్ణుభాగినేయాయ నమః",
                    "transliteration": "44. Om Vishnubhagineya Namah"
          },
          {
                    "id": "sp-ash-45",
                    "telugu": "45. ఓం ఇంద్రసుతాపతయే నమః",
                    "transliteration": "45. Om Indrasutapataye Namah"
          },
          {
                    "id": "sp-ash-46",
                    "telugu": "46. ఓం వల్లీకల్యాణసుందరాయ నమః",
                    "transliteration": "46. Om Valli Kalyanasundara Namah"
          },
          {
                    "id": "sp-ash-47",
                    "telugu": "47. ఓం కార్తికేయాయ నమః",
                    "transliteration": "47. Om Kartikeya Namah"
          },
          {
                    "id": "sp-ash-48",
                    "telugu": "48. ఓం భక్తమోక్షదాయ నమః",
                    "transliteration": "48. Om Bhaktamokshada Namah"
          },
          {
                    "id": "sp-ash-49",
                    "telugu": "49. ఓం అనంతాయ నమః",
                    "transliteration": "49. Om Ananta Namah"
          },
          {
                    "id": "sp-ash-50",
                    "telugu": "50. ఓం అక్షోభ్యాయ నమః",
                    "transliteration": "50. Om Akshobhya Namah"
          },
          {
                    "id": "sp-ash-51",
                    "telugu": "51. ఓం గజారూఢాయ నమః",
                    "transliteration": "51. Om Gajaroodha Namah"
          },
          {
                    "id": "sp-ash-52",
                    "telugu": "52. ఓం మయూరవాహనాయ నమః",
                    "transliteration": "52. Om Mayuravahana Namah"
          },
          {
                    "id": "sp-ash-53",
                    "telugu": "53. ఓం నానాశాస్త్రార్థతత్త్వజ్ఞాయ నమః",
                    "transliteration": "53. Om Nanashastrarthatatwajnya Namah"
          },
          {
                    "id": "sp-ash-54",
                    "telugu": "54. ఓం వేదవేదాంగపారగాయ నమః",
                    "transliteration": "54. Om Vedavedangaparaga Namah"
          },
          {
                    "id": "sp-ash-55",
                    "telugu": "55. ఓం పుణ్యకీర్తయే నమః",
                    "transliteration": "55. Om Punyakirtaye Namah"
          },
          {
                    "id": "sp-ash-56",
                    "telugu": "56. ఓం మహాసేనాయ నమః",
                    "transliteration": "56. Om Mahasena Namah"
          },
          {
                    "id": "sp-ash-57",
                    "telugu": "57. ఓం దీనబంధవే నమః",
                    "transliteration": "57. Om Deenabandhave Namah"
          },
          {
                    "id": "sp-ash-58",
                    "telugu": "58. ఓం మనోహరాయ నమః",
                    "transliteration": "58. Om Manohara Namah"
          },
          {
                    "id": "sp-ash-59",
                    "telugu": "59. ఓం మహాబలాయ నమః",
                    "transliteration": "59. Om Mahabala Namah"
          },
          {
                    "id": "sp-ash-60",
                    "telugu": "60. ఓం మహాభాగ్యాయ నమః",
                    "transliteration": "60. Om Mahabhagya Namah"
          },
          {
                    "id": "sp-ash-61",
                    "telugu": "61. ఓం మహాబుద్ధయే నమః",
                    "transliteration": "61. Om Mahabuddhaye Namah"
          },
          {
                    "id": "sp-ash-62",
                    "telugu": "62. ఓం సురవందితాయ నమః",
                    "transliteration": "62. Om Suravandita Namah"
          },
          {
                    "id": "sp-ash-63",
                    "telugu": "63. ఓం తేజస్వినే నమః",
                    "transliteration": "63. Om Tejaswine Namah"
          },
          {
                    "id": "sp-ash-64",
                    "telugu": "64. ఓం మంగళప్రదాయ నమః",
                    "transliteration": "64. Om Mangalaprada Namah"
          },
          {
                    "id": "sp-ash-65",
                    "telugu": "65. ఓం దండధరాయ నమః",
                    "transliteration": "65. Om Dandadhara Namah"
          },
          {
                    "id": "sp-ash-66",
                    "telugu": "66. ఓం శూలహస్తాయ నమః",
                    "transliteration": "66. Om Shoolahasta Namah"
          },
          {
                    "id": "sp-ash-67",
                    "telugu": "67. ఓం సర్వశత్రువినాశనాయ నమః",
                    "transliteration": "67. Om Sarvashatruvinashana Namah"
          },
          {
                    "id": "sp-ash-68",
                    "telugu": "68. ఓం అనఘాయ నమః",
                    "transliteration": "68. Om Anagha Namah"
          },
          {
                    "id": "sp-ash-69",
                    "telugu": "69. ఓం జ్ఞానశక్తయే నమః",
                    "transliteration": "69. Om Jnanashaktaye Namah"
          },
          {
                    "id": "sp-ash-70",
                    "telugu": "70. ఓం ఇచ్ఛాశక్తయే నమః",
                    "transliteration": "70. Om Ichhashaktaye Namah"
          },
          {
                    "id": "sp-ash-71",
                    "telugu": "71. ఓం క్రియాశక్తయే నమః",
                    "transliteration": "71. Om Kriyashaktaye Namah"
          },
          {
                    "id": "sp-ash-72",
                    "telugu": "72. ఓం మహాదేవప్రియాయ నమః",
                    "transliteration": "72. Om Mahadevapriya Namah"
          },
          {
                    "id": "sp-ash-73",
                    "telugu": "73. ఓం విభూతిధరాయ నమః",
                    "transliteration": "73. Om Vibhootidhara Namah"
          },
          {
                    "id": "sp-ash-74",
                    "telugu": "74. ఓం రుద్రాక్షమాలాధరాయ నమః",
                    "transliteration": "74. Om Rudrakshamaladhara Namah"
          },
          {
                    "id": "sp-ash-75",
                    "telugu": "75. ఓం సురసేనానాయకాయ నమః",
                    "transliteration": "75. Om Surasenananyaka Namah"
          },
          {
                    "id": "sp-ash-76",
                    "telugu": "76. ఓం తారకారిణే నమః",
                    "transliteration": "76. Om Tarakarine Namah"
          },
          {
                    "id": "sp-ash-77",
                    "telugu": "77. ఓం అభయప్రదాయ నమః",
                    "transliteration": "77. Om Abhayaprada Namah"
          },
          {
                    "id": "sp-ash-78",
                    "telugu": "78. ఓం విజయప్రదాయ నమః",
                    "transliteration": "78. Om Vijayaprada Namah"
          },
          {
                    "id": "sp-ash-79",
                    "telugu": "79. ఓం సర్వరోగహరాయ నమః",
                    "transliteration": "79. Om Sarvarogahara Namah"
          },
          {
                    "id": "sp-ash-80",
                    "telugu": "80. ఓం సర్వాభీష్టప్రదాయకాయ నమః",
                    "transliteration": "80. Om Sarvabhishtapradayaka Namah"
          },
          {
                    "id": "sp-ash-81",
                    "telugu": "81. ఓం ద్విషడ్భుజాయ నమః",
                    "transliteration": "81. Om Dwishadbhuja Namah"
          },
          {
                    "id": "sp-ash-82",
                    "telugu": "82. ఓం దివ్యరూపాయ నమః",
                    "transliteration": "82. Om Divyaroopa Namah"
          },
          {
                    "id": "sp-ash-83",
                    "telugu": "83. ఓం ఆదిత్యతేజసే నమః",
                    "transliteration": "83. Om Aadityatejase Namah"
          },
          {
                    "id": "sp-ash-84",
                    "telugu": "84. ఓం కౌమారాయ నమః",
                    "transliteration": "84. Om Koumara Namah"
          },
          {
                    "id": "sp-ash-85",
                    "telugu": "85. ఓం యోగీశ్వరాయ నమః",
                    "transliteration": "85. Om Yogeeshwara Namah"
          },
          {
                    "id": "sp-ash-86",
                    "telugu": "86. ఓం పరమహంసాయ నమః",
                    "transliteration": "86. Om Paramahamsa Namah"
          },
          {
                    "id": "sp-ash-87",
                    "telugu": "87. ఓం భక్తపోషకాయ నమః",
                    "transliteration": "87. Om Bhaktaposhaka Namah"
          },
          {
                    "id": "sp-ash-88",
                    "telugu": "88. ఓం కారుణ్యసాగరాయ నమః",
                    "transliteration": "88. Om Karunyasagara Namah"
          },
          {
                    "id": "sp-ash-89",
                    "telugu": "89. ఓం పరబ్రహ్మరూపాయ నమః",
                    "transliteration": "89. Om Parabrahmaroopa Namah"
          },
          {
                    "id": "sp-ash-90",
                    "telugu": "90. ఓం నిర్మలాయ నమః",
                    "transliteration": "90. Om Nirmala Namah"
          },
          {
                    "id": "sp-ash-91",
                    "telugu": "91. ఓం నిష్కళంకాయ నమః",
                    "transliteration": "91. Om Nishkalanka Namah"
          },
          {
                    "id": "sp-ash-92",
                    "telugu": "92. ఓం నిత్యాయ నమః",
                    "transliteration": "92. Om Nitya Namah"
          },
          {
                    "id": "sp-ash-93",
                    "telugu": "93. ఓం సత్యసంధాయ నమః",
                    "transliteration": "93. Om Satyasandha Namah"
          },
          {
                    "id": "sp-ash-94",
                    "telugu": "94. ఓం శరణాగతరక్షకాయ నమః",
                    "transliteration": "94. Om Saranagatarakshaka Namah"
          },
          {
                    "id": "sp-ash-95",
                    "telugu": "95. ఓం ద్వాదశాక్షాయ నమః",
                    "transliteration": "95. Om Dwadashaksha Namah"
          },
          {
                    "id": "sp-ash-96",
                    "telugu": "96. ఓం ద్వాదశబాహవే నమః",
                    "transliteration": "96. Om Dwadashabahave Namah"
          },
          {
                    "id": "sp-ash-97",
                    "telugu": "97. ఓం శరవణసముద్భవాయ నమః",
                    "transliteration": "97. Om Saravanasamudbhava Namah"
          },
          {
                    "id": "sp-ash-98",
                    "telugu": "98. ఓం దేవదేవాయ నమః",
                    "transliteration": "98. Om Devadeva Namah"
          },
          {
                    "id": "sp-ash-99",
                    "telugu": "99. ఓం సర్వలోకపూజితాయ నమః",
                    "transliteration": "99. Om Sarvalokapoojita Namah"
          },
          {
                    "id": "sp-ash-100",
                    "telugu": "100. ఓం వరప్రదాయ నమః",
                    "transliteration": "100. Om Varaprada Namah"
          },
          {
                    "id": "sp-ash-101",
                    "telugu": "101. ఓం జ్ఞానపండితాయ నమః",
                    "transliteration": "101. Om Jnanapandita Namah"
          },
          {
                    "id": "sp-ash-102",
                    "telugu": "102. ఓం కలియుగవరదాయ నమః",
                    "transliteration": "102. Om Kaliyugavarada Namah"
          },
          {
                    "id": "sp-ash-103",
                    "telugu": "103. ఓం సురలోకరక్షకాయ నమః",
                    "transliteration": "103. Om Suralokarakshaka Namah"
          },
          {
                    "id": "sp-ash-104",
                    "telugu": "104. ఓం శ్రీమంగళమూర్తయే నమః",
                    "transliteration": "104. Om Shrimangalamurtaye Namah"
          },
          {
                    "id": "sp-ash-105",
                    "telugu": "105. ఓం భక్తసంరక్షకాయ నమః",
                    "transliteration": "105. Om Bhaktasamrakshaka Namah"
          },
          {
                    "id": "sp-ash-106",
                    "telugu": "106. ఓం శ్రీవల్లీదేవసేనా సమేత శ్రీ సుబ్రహ్మణ్యేశ్వర స్వామినే నమః",
                    "transliteration": "106. Om Shri Valli Devasena Sameta Shri Subrahmanyeshwara Swamine Namah"
          },
          {
                    "id": "sp-ash-107",
                    "telugu": "107. ఓం స్వామినాథాయ నమః",
                    "transliteration": "107. Om Swaminatha Namah"
          },
          {
                    "id": "sp-ash-108",
                    "telugu": "108. ఓం శ్రీ సుబ్రహ్మణ్య స్వామినే నమః",
                    "transliteration": "108. Om Shri Subrahmanya Swamine Namah"
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
                    "telugu": "1. స్వామియే శరణం అయ్యప్ప",
                    "transliteration": "1. స్వామియే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-2",
                    "telugu": "2. హరిహర సుతనే శరణం అయ్యప్ప",
                    "transliteration": "2. హరిహర సుతనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-3",
                    "telugu": "3. కన్నిమూల గణపతి భగవానే శరణం అయ్యప్ప",
                    "transliteration": "3. కన్నిమూల గణపతి భగవానే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-4",
                    "telugu": "4. శక్తి వడివేలన్ సోదరనే శరణం అయ్యప్ప",
                    "transliteration": "4. శక్తి వడివేలన్ సోదరనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-5",
                    "telugu": "5. మాళికాపురత్తు మంజమ్మ దేవియే శరణం అయ్యప్ప",
                    "transliteration": "5. మాళికాపురత్తు మంజమ్మ దేవియే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-6",
                    "telugu": "6. వావరు స్వామియే శరణం అయ్యప్ప",
                    "transliteration": "6. వావరు స్వామియే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-7",
                    "telugu": "7. కడుత్త స్వామియే శరణం అయ్యప్ప",
                    "transliteration": "7. కడుత్త స్వామియే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-8",
                    "telugu": "8. పెరియ కడుత్త స్వామియే శరణం అయ్యప్ప",
                    "transliteration": "8. పెరియ కడుత్త స్వామియే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-9",
                    "telugu": "9. సిరియ కడుత్త స్వామియే శరణం అయ్యప్ప",
                    "transliteration": "9. సిరియ కడుత్త స్వామియే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-10",
                    "telugu": "10. పంబానది తీర విహారియే శరణం అయ్యప్ప",
                    "transliteration": "10. పంబానది తీర విహారియే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-11",
                    "telugu": "11. పందళ రాజకుమారనే శరణం అయ్యప్ప",
                    "transliteration": "11. పందళ రాజకుమారనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-12",
                    "telugu": "12. పులివాహననే శరణం అయ్యప్ప",
                    "transliteration": "12. పులివాహననే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-13",
                    "telugu": "13. విల్లిన్ వీరనే శరణం అయ్యప్ప",
                    "transliteration": "13. విల్లిన్ వీరనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-14",
                    "telugu": "14. వీరమణికంఠనే శరణం అయ్యప్ప",
                    "transliteration": "14. వీరమణికంఠనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-15",
                    "telugu": "15. శబరీగిరీశనే శరణం అయ్యప్ప",
                    "transliteration": "15. శబరీగిరీశనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-16",
                    "telugu": "16. ఇరుముడి ప్రియనే శరణం అయ్యప్ప",
                    "transliteration": "16. ఇరుముడి ప్రియనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-17",
                    "telugu": "17. అభిషేక ప్రియనే శరణం అయ్యప్ప",
                    "transliteration": "17. అభిషేక ప్రియనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-18",
                    "telugu": "18. నేతి అభిషేక ప్రియనే శరణం అయ్యప్ప",
                    "transliteration": "18. నేతి అభిషేక ప్రియనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-19",
                    "telugu": "19. భస్మ అభిషేక ప్రియనే శరణం అయ్యప్ప",
                    "transliteration": "19. భస్మ అభిషేక ప్రియనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-20",
                    "telugu": "20. చందన ప్రియనే శరణం అయ్యప్ప",
                    "transliteration": "20. చందన ప్రియనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-21",
                    "telugu": "21. పుష్ప ప్రియనే శరణం అయ్యప్ప",
                    "transliteration": "21. పుష్ప ప్రియనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-22",
                    "telugu": "22. పన్నీరు అభిషేక ప్రియనే శరణం అయ్యప్ప",
                    "transliteration": "22. పన్నీరు అభిషేక ప్రియనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-23",
                    "telugu": "23. కర్పూర ప్రియనే శరణం అయ్యప్ప",
                    "transliteration": "23. కర్పూర ప్రియనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-24",
                    "telugu": "24. జ్యోతి స్వరూపనే శరణం అయ్యప్ప",
                    "transliteration": "24. జ్యోతి స్వరూపనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-25",
                    "telugu": "25. మకర జ్యోతియే శరణం అయ్యప్ప",
                    "transliteration": "25. మకర జ్యోతియే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-26",
                    "telugu": "26. కాంతమలై వాసనే శరణం అయ్యప్ప",
                    "transliteration": "26. కాంతమలై వాసనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-27",
                    "telugu": "27. పదునెట్టాంబడి ఒడయోనే శరణం అయ్యప్ప",
                    "transliteration": "27. పదునెట్టాంబడి ఒడయోనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-28",
                    "telugu": "28. ఆనంద జ్యోతియే శరణం అయ్యప్ప",
                    "transliteration": "28. ఆనంద జ్యోతియే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-29",
                    "telugu": "29. మోహినీ సుతనే శరణం అయ్యప్ప",
                    "transliteration": "29. మోహినీ సుతనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-30",
                    "telugu": "30. పరమేశ్వర పుత్రనే శరణం అయ్యప్ప",
                    "transliteration": "30. పరమేశ్వర పుత్రనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-31",
                    "telugu": "31. భూతనాథనే శరణం అయ్యప్ప",
                    "transliteration": "31. భూతనాథనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-32",
                    "telugu": "32. లోక రక్షకనే శరణం అయ్యప్ప",
                    "transliteration": "32. లోక రక్షకనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-33",
                    "telugu": "33. ఆపద్బాంధవనే శరణం అయ్యప్ప",
                    "transliteration": "33. ఆపద్బాంధవనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-34",
                    "telugu": "34. అనాథ రక్షకనే శరణం అయ్యప్ప",
                    "transliteration": "34. అనాథ రక్షకనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-35",
                    "telugu": "35. భక్త వత్సలనే శరణం అయ్యప్ప",
                    "transliteration": "35. భక్త వత్సలనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-36",
                    "telugu": "36. శాస్తావే శరణం అయ్యప్ప",
                    "transliteration": "36. శాస్తావే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-37",
                    "telugu": "37. ధర్మ శాస్తావే శరణం అయ్యప్ప",
                    "transliteration": "37. ధర్మ శాస్తావే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-38",
                    "telugu": "38. మహా శాస్తావే శరణం అయ్యప్ప",
                    "transliteration": "38. మహా శాస్తావే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-39",
                    "telugu": "39. కులత్తూపుళై బాలకనే శరణం అయ్యప్ప",
                    "transliteration": "39. కులత్తూపుళై బాలకనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-40",
                    "telugu": "40. ఆర్యంగావు అయ్యనే శరణం అయ్యప్ప",
                    "transliteration": "40. ఆర్యంగావు అయ్యనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-41",
                    "telugu": "41. అచ్చన్ కోవిల్ అరసే శరణం అయ్యప్ప",
                    "transliteration": "41. అచ్చన్ కోవిల్ అరసే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-42",
                    "telugu": "42. ఎరుమేలి శాస్తావే శరణం అయ్యప్ప",
                    "transliteration": "42. ఎరుమేలి శాస్తావే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-43",
                    "telugu": "43. వావరు తోళనే శరణం అయ్యప్ప",
                    "transliteration": "43. వావరు తోళనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-44",
                    "telugu": "44. పేటతుళ్ళల్ నాథనే శరణం అయ్యప్ప",
                    "transliteration": "44. పేటతుళ్ళల్ నాథనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-45",
                    "telugu": "45. కొట్టేపడి కావలనే శరణం అయ్యప్ప",
                    "transliteration": "45. కొట్టేపడి కావలనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-46",
                    "telugu": "46. కాళైకట్టి ఆశ్రమం ఒడయోనే శరణం అయ్యప్ప",
                    "transliteration": "46. కాళైకట్టి ఆశ్రమం ఒడయోనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-47",
                    "telugu": "47. అళుదా నదియే శరణం అయ్యప్ప",
                    "transliteration": "47. అళుదా నదియే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-48",
                    "telugu": "48. అళుదా మేడే శరణం అయ్యప్ప",
                    "transliteration": "48. అళుదా మేడే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-49",
                    "telugu": "49. కల్లురుండ్ర కుళం ఒడయోనే శరణం అయ్యప్ప",
                    "transliteration": "49. కల్లురుండ్ర కుళం ఒడయోనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-50",
                    "telugu": "50. ఇంచిప్పారకోట్టైయే శరణం అయ్యప్ప",
                    "transliteration": "50. ఇంచిప్పారకోట్టైయే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-51",
                    "telugu": "51. కరిమల వాసనే శరణం అయ్యప్ప",
                    "transliteration": "51. కరిమల వాసనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-52",
                    "telugu": "52. కరిమల ఏట్రమే శరణం అయ్యప్ప",
                    "transliteration": "52. కరిమల ఏట్రమే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-53",
                    "telugu": "53. కరిమల ఎరక్కమే శరణం అయ్యప్ప",
                    "transliteration": "53. కరిమల ఎరక్కమే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-54",
                    "telugu": "54. పెరియానవట్టమే శరణం అయ్యప్ప",
                    "transliteration": "54. పెరియానవట్టమే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-55",
                    "telugu": "55. సిరియానవట్టమే శరణం అయ్యప్ప",
                    "transliteration": "55. సిరియానవట్టమే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-56",
                    "telugu": "56. పంబానది విహారియే శరణం అయ్యప్ప",
                    "transliteration": "56. పంబానది విహారియే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-57",
                    "telugu": "57. పంబై విళక్కే శరణం అయ్యప్ప",
                    "transliteration": "57. పంబై విళక్కే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-58",
                    "telugu": "58. పంబై సద్యయే శరణం అయ్యప్ప",
                    "transliteration": "58. పంబై సద్యయే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-59",
                    "telugu": "59. నీలిమలై ఏట్రమే శరణం అయ్యప్ప",
                    "transliteration": "59. నీలిమలై ఏట్రమే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-60",
                    "telugu": "60. అప్పాచిమేడే శరణం అయ్యప్ప",
                    "transliteration": "60. అప్పాచిమేడే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-61",
                    "telugu": "61. ఇప్పాచికుళమే శరణం అయ్యప్ప",
                    "transliteration": "61. ఇప్పాచికుళమే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-62",
                    "telugu": "62. శబరి పీఠమే శరణం అయ్యప్ప",
                    "transliteration": "62. శబరి పీఠమే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-63",
                    "telugu": "63. శరంగుత్తి ఆలే శరణం అయ్యప్ప",
                    "transliteration": "63. శరంగుత్తి ఆలే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-64",
                    "telugu": "64. పదునెట్టాంబడియే శరణం అయ్యప్ప",
                    "transliteration": "64. పదునెట్టాంబడియే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-65",
                    "telugu": "65. తంగ అంగి ఒడయోనే శరణం అయ్యప్ప",
                    "transliteration": "65. తంగ అంగి ఒడయోనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-66",
                    "telugu": "66. మణికంఠ స్వామియే శరణం అయ్యప్ప",
                    "transliteration": "66. మణికంఠ స్వామియే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-67",
                    "telugu": "67. ఓంకార రూపనే శరణం అయ్యప్ప",
                    "transliteration": "67. ఓంకార రూపనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-68",
                    "telugu": "68. ప్రణవ స్వరూపనే శరణం అయ్యప్ప",
                    "transliteration": "68. ప్రణవ స్వరూపనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-69",
                    "telugu": "69. సచ్చిదానందనే శరణం అయ్యప్ప",
                    "transliteration": "69. సచ్చిదానందనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-70",
                    "telugu": "70. సత్య స్వరూపనే శరణం అయ్యప్ప",
                    "transliteration": "70. సత్య స్వరూపనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-71",
                    "telugu": "71. శాంతి దాతావే శరణం అయ్యప్ప",
                    "transliteration": "71. శాంతి దాతావే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-72",
                    "telugu": "72. ముక్తి ప్రదాతావే శరణం అయ్యప్ప",
                    "transliteration": "72. ముక్తి ప్రదాతావే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-73",
                    "telugu": "73. కలియుగ వరదనే శరణం అయ్యప్ప",
                    "transliteration": "73. కలియుగ వరదనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-74",
                    "telugu": "74. సర్వ విఘ్న నివారకనే శరణం అయ్యప్ప",
                    "transliteration": "74. సర్వ విఘ్న నివారకనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-75",
                    "telugu": "75. భయ నివారకనే శరణం అయ్యప్ప",
                    "transliteration": "75. భయ నివారకనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-76",
                    "telugu": "76. రోగ హరనే శరణం అయ్యప్ప",
                    "transliteration": "76. రోగ హరనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-77",
                    "telugu": "77. పాప వినాశకనే శరణం అయ్యప్ప",
                    "transliteration": "77. పాప వినాశకనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-78",
                    "telugu": "78. శత్రు సంహారకనే శరణం అయ్యప్ప",
                    "transliteration": "78. శత్రు సంహారకనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-79",
                    "telugu": "79. సర్వార్థ సాధకనే శరణం అయ్యప్ప",
                    "transliteration": "79. సర్వార్థ సాధకనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-80",
                    "telugu": "80. సుగుణ నిలయనే శరణం అయ్యప్ప",
                    "transliteration": "80. సుగుణ నిలయనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-81",
                    "telugu": "81. కరుణా సాగరనే శరణం అయ్యప్ప",
                    "transliteration": "81. కరుణా సాగరనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-82",
                    "telugu": "82. జ్ఞాన స్వరూపనే శరణం అయ్యప్ప",
                    "transliteration": "82. జ్ఞాన స్వరూపనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-83",
                    "telugu": "83. వేద నిలయనే శరణం అయ్యప్ప",
                    "transliteration": "83. వేద నిలయనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-84",
                    "telugu": "84. నాద బిందు స్వరూపనే శరణం అయ్యప్ప",
                    "transliteration": "84. నాద బిందు స్వరూపనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-85",
                    "telugu": "85. యోగ పట్టధరనే శరణం అయ్యప్ప",
                    "transliteration": "85. యోగ పట్టధరనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-86",
                    "telugu": "86. చిన్ముద్రాలంకృతనే శరణం అయ్యప్ప",
                    "transliteration": "86. చిన్ముద్రాలంకృతనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-87",
                    "telugu": "87. రుద్రాక్షధారియే శరణం అయ్యప్ప",
                    "transliteration": "87. రుద్రాక్షధారియే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-88",
                    "telugu": "88. తులసీమాలాలంకృతనే శరణం అయ్యప్ప",
                    "transliteration": "88. తులసీమాలాలంకృతనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-89",
                    "telugu": "89. నీలాంబరధారియే శరణం అయ్యప్ప",
                    "transliteration": "89. నీలాంబరధారియే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-90",
                    "telugu": "90. కాషాయ వస్త్రధారియే శరణం అయ్యప్ప",
                    "transliteration": "90. కాషాయ వస్త్రధారియే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-91",
                    "telugu": "91. వ్రత రక్షకనే శరణం అయ్యప్ప",
                    "transliteration": "91. వ్రత రక్షకనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-92",
                    "telugu": "92. మండల దీక్షా ప్రియనే శరణం అయ్యప్ప",
                    "transliteration": "92. మండల దీక్షా ప్రియనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-93",
                    "telugu": "93. శరణు ఘోష ప్రియనే శరణం అయ్యప్ప",
                    "transliteration": "93. శరణు ఘోష ప్రియనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-94",
                    "telugu": "94. హరివరాసన ప్రియనే శరణం అయ్యప్ప",
                    "transliteration": "94. హరివరాసన ప్రియనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-95",
                    "telugu": "95. పల్లెకట్టు ప్రియనే శరణం అయ్యప్ప",
                    "transliteration": "95. పల్లెకట్టు ప్రియనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-96",
                    "telugu": "96. కర్పూర ఆరతి ప్రియనే శరణం అయ్యప్ప",
                    "transliteration": "96. కర్పూర ఆరతి ప్రియనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-97",
                    "telugu": "97. నైవేద్య ప్రియనే శరణం అయ్యప్ప",
                    "transliteration": "97. నైవేద్య ప్రియనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-98",
                    "telugu": "98. అరవణ పాయస ప్రియనే శరణం అయ్యప్ప",
                    "transliteration": "98. అరవణ పాయస ప్రియనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-99",
                    "telugu": "99. అప్పం ప్రియనే శరణం అయ్యప్ప",
                    "transliteration": "99. అప్పం ప్రియనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-100",
                    "telugu": "100. తిరువాభరణ భూషితనే శరణం అయ్యప్ప",
                    "transliteration": "100. తిరువాభరణ భూషితనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-101",
                    "telugu": "101. శబరిమలై వాసనే శరణం అయ్యప్ప",
                    "transliteration": "101. శబరిమలై వాసనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-102",
                    "telugu": "102. తత్త్వమసి స్వరూపనే శరణం అయ్యప్ప",
                    "transliteration": "102. తత్త్వమసి స్వరూపనే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-103",
                    "telugu": "103. అయ్యప్ప స్వామియే శరణం అయ్యప్ప",
                    "transliteration": "103. అయ్యప్ప స్వామియే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-104",
                    "telugu": "104. స్వామి పాదం శరణం అయ్యప్ప",
                    "transliteration": "104. స్వామి పాదం శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-105",
                    "telugu": "105. దేవన్ పాదం శరణం అయ్యప్ప",
                    "transliteration": "105. దేవన్ పాదం శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-106",
                    "telugu": "106. స్వామియే శరణం అయ్యప్ప",
                    "transliteration": "106. స్వామియే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-107",
                    "telugu": "107. భగవానే శరణం అయ్యప్ప",
                    "transliteration": "107. భగవానే శరణం అయ్యప్ప"
          },
          {
                    "id": "sg-108",
                    "telugu": "108. శ్రీ పూర్ణా పుష్కలాంబ సమేత హరిహరపుత్ర శ్రీ ధర్మశాస్తావే శరణం అయ్యప్ప",
                    "transliteration": "108. శ్రీ పూర్ణా పుష్కలాంబ సమేత హరిహరపుత్ర శ్రీ ధర్మశాస్తావే శరణం అయ్యప్ప"
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
        mantras: [
          {
                    "id": "as-1",
                    "telugu": "1. ఓం మహాశాస్త్రే నమః",
                    "transliteration": "1. Om Mahashastre Namah"
          },
          {
                    "id": "as-2",
                    "telugu": "2. ఓం విశ్వశాస్త్రే నమః",
                    "transliteration": "2. Om Vishwashastre Namah"
          },
          {
                    "id": "as-3",
                    "telugu": "3. ఓం లోకశాస్త్రే నమః",
                    "transliteration": "3. Om Lokashastre Namah"
          },
          {
                    "id": "as-4",
                    "telugu": "4. ఓం ధర్మశాస్త్రే నమః",
                    "transliteration": "4. Om Dharmashastre Namah"
          },
          {
                    "id": "as-5",
                    "telugu": "5. ఓం వేదశాస్త్రే నమః",
                    "transliteration": "5. Om Vedashastre Namah"
          },
          {
                    "id": "as-6",
                    "telugu": "6. ఓం కాలశాస్త్రే నమః",
                    "transliteration": "6. Om Kalashastre Namah"
          },
          {
                    "id": "as-7",
                    "telugu": "7. ఓం గజాధిపాయ నమః",
                    "transliteration": "7. Om Gajadhipaya Namah"
          },
          {
                    "id": "as-8",
                    "telugu": "8. ఓం అంగారకాయ నమః",
                    "transliteration": "8. Om Angarakaya Namah"
          },
          {
                    "id": "as-9",
                    "telugu": "9. ఓం అమృతేశాయ నమః",
                    "transliteration": "9. Om Amriteshaya Namah"
          },
          {
                    "id": "as-10",
                    "telugu": "10. ఓం సూర్యతేజసే నమః",
                    "transliteration": "10. Om Suryatejase Namah"
          },
          {
                    "id": "as-11",
                    "telugu": "11. ఓం సురేశ్వరాయ నమః",
                    "transliteration": "11. Om Sureshwaraya Namah"
          },
          {
                    "id": "as-12",
                    "telugu": "12. ఓం జగద్గురవే నమః",
                    "transliteration": "12. Om Jagadgurave Namah"
          },
          {
                    "id": "as-13",
                    "telugu": "13. ఓం సర్వలోకహితాయ నమః",
                    "transliteration": "13. Om Sarvalokahitaya Namah"
          },
          {
                    "id": "as-14",
                    "telugu": "14. ఓం తత్త్వమసి స్వరూపాయ నమః",
                    "transliteration": "14. Om Tatwamasi Swaroopaya Namah"
          },
          {
                    "id": "as-15",
                    "telugu": "15. ఓం మణికంఠాయ నమః",
                    "transliteration": "15. Om Manikantaya Namah"
          },
          {
                    "id": "as-16",
                    "telugu": "16. ఓం మోహినీపుత్రాయ నమః",
                    "transliteration": "16. Om Mohiniputraya Namah"
          },
          {
                    "id": "as-17",
                    "telugu": "17. ఓం శాంతాయ నమః",
                    "transliteration": "17. Om Shantaya Namah"
          },
          {
                    "id": "as-18",
                    "telugu": "18. ఓం వరదాయ నమః",
                    "transliteration": "18. Om Varadaya Namah"
          },
          {
                    "id": "as-19",
                    "telugu": "19. ఓం భక్తవత్సలాయ నమః",
                    "transliteration": "19. Om Bhaktavatsalaya Namah"
          },
          {
                    "id": "as-20",
                    "telugu": "20. ఓం శబరీగిరీశాయ నమః",
                    "transliteration": "20. Om Sabarigireeshaya Namah"
          },
          {
                    "id": "as-21",
                    "telugu": "21. ఓం ఈశపుత్రాయ నమః",
                    "transliteration": "21. Om Eeshaputraya Namah"
          },
          {
                    "id": "as-22",
                    "telugu": "22. ఓం ఇడావాసాయ నమః",
                    "transliteration": "22. Om Idavasaya Namah"
          },
          {
                    "id": "as-23",
                    "telugu": "23. ఓం హరిహరపుత్రాయ నమః",
                    "transliteration": "23. Om Hariharaputraya Namah"
          },
          {
                    "id": "as-24",
                    "telugu": "24. ఓం హరిద్రాచలవాసాయ నమః",
                    "transliteration": "24. Om Haridrachalavasaya Namah"
          },
          {
                    "id": "as-25",
                    "telugu": "25. ఓం సింహవాహనాయ నమః",
                    "transliteration": "25. Om Simhavahanaya Namah"
          },
          {
                    "id": "as-26",
                    "telugu": "26. ఓం వ్యాఘ్రవాహనాయ నమః",
                    "transliteration": "26. Om Vyaghravahanaya Namah"
          },
          {
                    "id": "as-27",
                    "telugu": "27. ఓం మాయాధరాయ నమః",
                    "transliteration": "27. Om Mayadharaya Namah"
          },
          {
                    "id": "as-28",
                    "telugu": "28. ఓం ముక్తిదాయకాయ నమః",
                    "transliteration": "28. Om Muktidayakaya Namah"
          },
          {
                    "id": "as-29",
                    "telugu": "29. ఓం మునిసేవితాయ నమః",
                    "transliteration": "29. Om Munisevitaya Namah"
          },
          {
                    "id": "as-30",
                    "telugu": "30. ఓం మదనమోహనాయ నమః",
                    "transliteration": "30. Om Madanamohanaya Namah"
          },
          {
                    "id": "as-31",
                    "telugu": "31. ఓం దేవరాజస్తుతాయ నమః",
                    "transliteration": "31. Om Devarajastutaya Namah"
          },
          {
                    "id": "as-32",
                    "telugu": "32. ఓం దివ్యతేజసే నమః",
                    "transliteration": "32. Om Divyatejase Namah"
          },
          {
                    "id": "as-33",
                    "telugu": "33. ఓం కలియుగవరదాయ నమః",
                    "transliteration": "33. Om Kaliyugavaradaya Namah"
          },
          {
                    "id": "as-34",
                    "telugu": "34. ఓం కళ్యాణప్రదాయకాయ నమః",
                    "transliteration": "34. Om Kalyanapradayakaya Namah"
          },
          {
                    "id": "as-35",
                    "telugu": "35. ఓం కామితార్థప్రదాయకాయ నమః",
                    "transliteration": "35. Om Kamitarthapradayakaya Namah"
          },
          {
                    "id": "as-36",
                    "telugu": "36. ఓం కార్తికేయసహోదరాయ నమః",
                    "transliteration": "36. Om Kartikeyasahodaraya Namah"
          },
          {
                    "id": "as-37",
                    "telugu": "37. ఓం గణపతిప్రియాయ నమః",
                    "transliteration": "37. Om Ganapatipriyaya Namah"
          },
          {
                    "id": "as-38",
                    "telugu": "38. ఓం గజముఖానుజాయ నమః",
                    "transliteration": "38. Om Gajamukhanujaya Namah"
          },
          {
                    "id": "as-39",
                    "telugu": "39. ఓం గుహప్రియాయ నమః",
                    "transliteration": "39. Om Guhapriyaya Namah"
          },
          {
                    "id": "as-40",
                    "telugu": "40. ఓం గిరివాసాయ నమః",
                    "transliteration": "40. Om Girivasaya Namah"
          },
          {
                    "id": "as-41",
                    "telugu": "41. ఓం భూతనాథాయ నమః",
                    "transliteration": "41. Om Bhootanathaya Namah"
          },
          {
                    "id": "as-42",
                    "telugu": "42. ఓం భూతపతయే నమః",
                    "transliteration": "42. Om Bhootapataye Namah"
          },
          {
                    "id": "as-43",
                    "telugu": "43. ఓం భవనాశనాయ నమః",
                    "transliteration": "43. Om Bhavanashanaya Namah"
          },
          {
                    "id": "as-44",
                    "telugu": "44. ఓం భస్మధారిణే నమః",
                    "transliteration": "44. Om Bhasmadharine Namah"
          },
          {
                    "id": "as-45",
                    "telugu": "45. ఓం భక్తపరాయణాయ నమః",
                    "transliteration": "45. Om Bhaktaparayanaya Namah"
          },
          {
                    "id": "as-46",
                    "telugu": "46. ఓం యోగాధీశాయ నమః",
                    "transliteration": "46. Om Yogadhishaya Namah"
          },
          {
                    "id": "as-47",
                    "telugu": "47. ఓం యోగపట్టధరాయ నమః",
                    "transliteration": "47. Om Yogapattadharaya Namah"
          },
          {
                    "id": "as-48",
                    "telugu": "48. ఓం రుద్రాక్షధారిణే నమః",
                    "transliteration": "48. Om Rudrakshadharine Namah"
          },
          {
                    "id": "as-49",
                    "telugu": "49. ఓం తులసీమాలాధరాయ నమః",
                    "transliteration": "49. Om Tulasimaladharaya Namah"
          },
          {
                    "id": "as-50",
                    "telugu": "50. ఓం విష్ణురూపాయ నమః",
                    "transliteration": "50. Om Vishnuroopaya Namah"
          },
          {
                    "id": "as-51",
                    "telugu": "51. ఓం శివరూపాయ నమః",
                    "transliteration": "51. Om Shivaroopaya Namah"
          },
          {
                    "id": "as-52",
                    "telugu": "52. ఓం ఓంకారస్వరూపాయ నమః",
                    "transliteration": "52. Om Omkaraswaroopaya Namah"
          },
          {
                    "id": "as-53",
                    "telugu": "53. ఓం పరబ్రహ్మణే నమః",
                    "transliteration": "53. Om Parabrahmane Namah"
          },
          {
                    "id": "as-54",
                    "telugu": "54. ఓం పరమపురుషాయ నమః",
                    "transliteration": "54. Om Paramapurushaya Namah"
          },
          {
                    "id": "as-55",
                    "telugu": "55. ఓం పావనాయ నమః",
                    "transliteration": "55. Om Pavanaya Namah"
          },
          {
                    "id": "as-56",
                    "telugu": "56. ఓం పంబాతీరవాసాయ నమః",
                    "transliteration": "56. Om Pambateeravasaya Namah"
          },
          {
                    "id": "as-57",
                    "telugu": "57. ఓం పందళరాజకుమారాయ నమః",
                    "transliteration": "57. Om Pandalarajakumaraya Namah"
          },
          {
                    "id": "as-58",
                    "telugu": "58. ఓం పులివాహనాయ నమః",
                    "transliteration": "58. Om Pulivahanaya Namah"
          },
          {
                    "id": "as-59",
                    "telugu": "59. ఓం పదునెట్టాంబడివాసాయ నమః",
                    "transliteration": "59. Om Padunettambadivasaya Namah"
          },
          {
                    "id": "as-60",
                    "telugu": "60. ఓం సచ్చిదానందాయ నమః",
                    "transliteration": "60. Om Sachidanandaya Namah"
          },
          {
                    "id": "as-61",
                    "telugu": "61. ఓం సత్యస్వరూపాయ నమః",
                    "transliteration": "61. Om Satyaswaroopaya Namah"
          },
          {
                    "id": "as-62",
                    "telugu": "62. ఓం నిత్యతృప్తాయ నమః",
                    "transliteration": "62. Om Nityatriptaya Namah"
          },
          {
                    "id": "as-63",
                    "telugu": "63. ఓం నిరంజనాయ నమః",
                    "transliteration": "63. Om Niranjanaya Namah"
          },
          {
                    "id": "as-64",
                    "telugu": "64. ఓం నిర్గుణాయ నమః",
                    "transliteration": "64. Om Nirgunaya Namah"
          },
          {
                    "id": "as-65",
                    "telugu": "65. ఓం నిర్మలాయ నమః",
                    "transliteration": "65. Om Nirmalaya Namah"
          },
          {
                    "id": "as-66",
                    "telugu": "66. ఓం తేజోమయాయ నమః",
                    "transliteration": "66. Om Tejomayaya Namah"
          },
          {
                    "id": "as-67",
                    "telugu": "67. ఓం ద్యుతిమతే నమః",
                    "transliteration": "67. Om Dyutimate Namah"
          },
          {
                    "id": "as-68",
                    "telugu": "68. ఓం విద్యావతే నమః",
                    "transliteration": "68. Om Vidyavate Namah"
          },
          {
                    "id": "as-69",
                    "telugu": "69. ఓం సర్వజ్ఞాయ నమః",
                    "transliteration": "69. Om Sarvajnyaya Namah"
          },
          {
                    "id": "as-70",
                    "telugu": "70. ఓం సర్వశక్తిమతే నమః",
                    "transliteration": "70. Om Sarvashaktimate Namah"
          },
          {
                    "id": "as-71",
                    "telugu": "71. ఓం అనాథరక్షకాయ నమః",
                    "transliteration": "71. Om Anatharakshakaya Namah"
          },
          {
                    "id": "as-72",
                    "telugu": "72. ఓం ఆపద్బాంధవాయ నమః",
                    "transliteration": "72. Om Aapadbandhavaya Namah"
          },
          {
                    "id": "as-73",
                    "telugu": "73. ఓం ఆనందరూపాయ నమః",
                    "transliteration": "73. Om Aanandaroopaya Namah"
          },
          {
                    "id": "as-74",
                    "telugu": "74. ఓం ఇరుముడిప్రియాయ నమః",
                    "transliteration": "74. Om Irumudipriyaya Namah"
          },
          {
                    "id": "as-75",
                    "telugu": "75. ఓం అమితవిక్రమాయ నమః",
                    "transliteration": "75. Om Amitavikramaya Namah"
          },
          {
                    "id": "as-76",
                    "telugu": "76. ఓం దండధరాయ నమః",
                    "transliteration": "76. Om Dandadharaya Namah"
          },
          {
                    "id": "as-77",
                    "telugu": "77. ఓం ధనుర్ధరాయ నమః",
                    "transliteration": "77. Om Dhanurdharaya Namah"
          },
          {
                    "id": "as-78",
                    "telugu": "78. ఓం బాణహస్తాయ నమః",
                    "transliteration": "78. Om Banahastaya Namah"
          },
          {
                    "id": "as-79",
                    "telugu": "79. ఓం సర్వవ్యాపినే నమః",
                    "transliteration": "79. Om Sarvavyapine Namah"
          },
          {
                    "id": "as-80",
                    "telugu": "80. ఓం లోకపూజ్యాయ నమః",
                    "transliteration": "80. Om Lokapoojyaya Namah"
          },
          {
                    "id": "as-81",
                    "telugu": "81. ఓం శరణాగతరక్షకాయ నమః",
                    "transliteration": "81. Om Saranagatarakshaka Namah"
          },
          {
                    "id": "as-82",
                    "telugu": "82. ఓం శ్రీమంగళప్రదాయ నమః",
                    "transliteration": "82. Om Shrimangalapradaya Namah"
          },
          {
                    "id": "as-83",
                    "telugu": "83. ఓం చందనప్రియాయ నమః",
                    "transliteration": "83. Om Chandanapriyaya Namah"
          },
          {
                    "id": "as-84",
                    "telugu": "84. ఓం విభూతిభూషితాయ నమః",
                    "transliteration": "84. Om Vibhootibhooshitaya Namah"
          },
          {
                    "id": "as-85",
                    "telugu": "85. ఓం కమలాక్షాయ నమః",
                    "transliteration": "85. Om Kamalakshaya Namah"
          },
          {
                    "id": "as-86",
                    "telugu": "86. ఓం కారుణ్యసింధవే నమః",
                    "transliteration": "86. Om Karunyasindhave Namah"
          },
          {
                    "id": "as-87",
                    "telugu": "87. ఓం కృతజ్ఞాయ నమః",
                    "transliteration": "87. Om Kritajnyaya Namah"
          },
          {
                    "id": "as-88",
                    "telugu": "88. ఓం సుగుణాయ నమః",
                    "transliteration": "88. Om Sugunaya Namah"
          },
          {
                    "id": "as-89",
                    "telugu": "89. ఓం సుందరాయ నమః",
                    "transliteration": "89. Om Sundaraya Namah"
          },
          {
                    "id": "as-90",
                    "telugu": "90. ఓం సుముఖాయ నమః",
                    "transliteration": "90. Om Sumukhaya Namah"
          },
          {
                    "id": "as-91",
                    "telugu": "91. ఓం వీరమణికంఠాయ నమః",
                    "transliteration": "91. Om Veeramanikantaya Namah"
          },
          {
                    "id": "as-92",
                    "telugu": "92. ఓం వైద్యనాథాయ నమః",
                    "transliteration": "92. Om Vaidyanathaya Namah"
          },
          {
                    "id": "as-93",
                    "telugu": "93. ఓం వనదేవతాసేవితాయ నమః",
                    "transliteration": "93. Om Vanadevatasevitaya Namah"
          },
          {
                    "id": "as-94",
                    "telugu": "94. ఓం శబరీపీఠప్రియాయ నమః",
                    "transliteration": "94. Om Sabaripeethapriyaya Namah"
          },
          {
                    "id": "as-95",
                    "telugu": "95. ఓం మకరజ్యోతిస్వరూపాయ నమః",
                    "transliteration": "95. Om Makarajyotiswaroopaya Namah"
          },
          {
                    "id": "as-96",
                    "telugu": "96. ఓం ఆర్యకేరళేశ్వరాయ నమః",
                    "transliteration": "96. Om Aaryakeraleshwaraya Namah"
          },
          {
                    "id": "as-97",
                    "telugu": "97. ఓం ఉలగరక్షకాయ నమః",
                    "transliteration": "97. Om Ulagarakshakaya Namah"
          },
          {
                    "id": "as-98",
                    "telugu": "98. ఓం ఎంగళ్ కులదైవమే నమః",
                    "transliteration": "98. Om Engal Kuladaivame Namah"
          },
          {
                    "id": "as-99",
                    "telugu": "99. ఓం స్వామినే నమః",
                    "transliteration": "99. Om Swamine Namah"
          },
          {
                    "id": "as-100",
                    "telugu": "100. ఓం హరిహరసుతాయ నమః",
                    "transliteration": "100. Om Hariharasutaya Namah"
          },
          {
                    "id": "as-101",
                    "telugu": "101. ఓం అయ్యప్పాయ నమః",
                    "transliteration": "101. Om Ayyappaya Namah"
          },
          {
                    "id": "as-102",
                    "telugu": "102. ఓం ధర్మపాలకాయ నమః",
                    "transliteration": "102. Om Dharmapalakaya Namah"
          },
          {
                    "id": "as-103",
                    "telugu": "103. ఓం సమస్తభక్తపాలకాయ నమః",
                    "transliteration": "103. Om Samastabhaktapalakaya Namah"
          },
          {
                    "id": "as-104",
                    "telugu": "104. ఓం నిత్యానందాయ నమః",
                    "transliteration": "104. Om Nityanandaya Namah"
          },
          {
                    "id": "as-105",
                    "telugu": "105. ఓం దివ్యరూపాయ నమః",
                    "transliteration": "105. Om Divyaroopaya Namah"
          },
          {
                    "id": "as-106",
                    "telugu": "106. ఓం భక్తసంరక్షకాయ నమః",
                    "transliteration": "106. Om Bhaktasamrakshakaya Namah"
          },
          {
                    "id": "as-107",
                    "telugu": "107. ఓం సర్వాభీష్టప్రదాయకాయ నమః",
                    "transliteration": "107. Om Sarvabhishtapradayakaya Namah"
          },
          {
                    "id": "as-108",
                    "telugu": "108. ఓం శ్రీ పూర్ణా పుష్కలా సమేత శ్రీ హరిహరపుత్ర శ్రీ ధర్మశాస్త్రే నమః",
                    "transliteration": "108. Om Shri Poorna Pushkala Sameta Shri Hariharaputra Shri Dharmashastre Namah"
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
    subtitle: 'శబరిమల పవిత్ర 18 మెట్ల దివ్య ప్రాశస్త్యం & పాటలు',
    icon: 'Music',
    durationMinutes: 10,
    featured: false,
    category: 'ayyappa',
    sections: [
      {
        title: 'పదునెట్టాంపడి ప్రాశస్త్యం & మంత్రములు',
        mantras: [
          {
            id: 'pp-1',
            telugu: 'ఒకటవ మెట్టు: కన్నిమూల గణపతి భగవానే శరణం అయ్యప్ప (విఘ్న నివారణ)\nరెండవ మెట్టు: శక్తి వడివేలన్ మురుగన్ భగవానే శరణం అయ్యప్ప (జ్ఞాన ప్రాప్తి)\nమూడవ మెట్టు: శివదేవుని కృపాకటాక్షమే శరణం అయ్యప్ప (మనో నిగ్రహం)\nనాల్గవ మెట్టు: విష్ణు దేవుని రక్షణాకవచమే శరణం అయ్యప్ప (స్థితి రక్షణ)',
            transliteration: '1st Padi: Ganapathi Saranam | 2nd Padi: Murugan Saranam | 3rd Padi: Shiva Kripa | 4th Padi: Vishnu Kripa'
          },
          {
            id: 'pp-2',
            telugu: 'ఐదవ మెట్టు నుండి ఎనిమిదవ మెట్టు: కామ, క్రోధ, లోభ, మోహ నివారణా మెట్లు\nతొమ్మిదవ మెట్టు నుండి పన్నెండవ మెట్టు: మద, మాత్సర్య, అహంకార, రాగ నివారణా మెట్లు\nపదమూడవ మెట్టు నుండి పదిహేడవ మెట్టు: పంచేంద్రియ నిగ్రహ దివ్య పవిత్ర మెట్లు\nపదునెనిమిదవ మెట్టు: తత్త్వమసి - సాక్షాత్ అయ్యప్ప దివ్య దర్శనం శరణం అయ్యప్ప!',
            transliteration: '5-8: Kama Krodha Lobha Moha Jayam | 9-12: Mada Matsarya Jayam | 13-17: Panchendriya Nigraham | 18th Padi: Tatvamasi Sannidhanam!'
          }
        ]
      }
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
                    "telugu": "1. ఓం ప్రకృత్యై నమః",
                    "transliteration": "1. Om Prakrityai Namah"
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
                    "telugu": "17. ఓం హిరణ్మయై నమః",
                    "transliteration": "17. Om Hiranmayai Namah"
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
                    "telugu": "29. ఓం క్షీరోదసంభవాయై నమః",
                    "transliteration": "29. Om Ksheerodasambhavayai Namah"
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
                    "telugu": "75. ఓం శుక్లమాల్యాంబరధరాయై నమః",
                    "transliteration": "75. Om Shuklamalyambaradharayai Namah"
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
                    "telugu": "102. ఓం సర్వోపద్రవవారిణ్యై నమః",
                    "transliteration": "102. Om Sarvopadravavarinyai Namah"
          },
          {
                    "id": "la-ash-103",
                    "telugu": "103. ఓం నవదుర్గాయై నమః",
                    "transliteration": "103. Om Navadurgayai Namah"
          },
          {
                    "id": "la-ash-104",
                    "telugu": "104. ఓం మహాకాళ్యై నమః",
                    "transliteration": "104. Om Mahakalyai Namah"
          },
          {
                    "id": "la-ash-105",
                    "telugu": "105. ఓం బ్రహ్మవిష్ణుశివాత్మికాయై నమః",
                    "transliteration": "105. Om Brahmavishnushivatmikayai Namah"
          },
          {
                    "id": "la-ash-106",
                    "telugu": "106. ఓం త్రికాలజ్ఞానసంపన్నాయై నమః",
                    "transliteration": "106. Om Trikalajnanasampannayai Namah"
          },
          {
                    "id": "la-ash-107",
                    "telugu": "107. ఓం భువనేశ్వర్యై నమః",
                    "transliteration": "107. Om Bhuwaneshwaryai Namah"
          },
          {
                    "id": "la-ash-108",
                    "telugu": "108. ఓం శ్రీ మహాలక్ష్మీ స్వామిన్యై నమః",
                    "transliteration": "108. Om Shri Mahalakshmi Swaminyai Namah"
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
