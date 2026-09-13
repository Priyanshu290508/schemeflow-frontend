// SchemeFlow Scheme-Level Multilingual Localization (Hindi & Bengali)
// Translates Scheme Names, Summaries, Categories, Benefits, Documents, Steps, Tracker Milestones & Criteria

export const SCHEME_TRANSLATIONS = {
  pmegp_001: {
    hi: {
      name: "प्रधानमंत्री रोजगार सृजन कार्यक्रम (PMEGP)",
      summary: "नए विनिर्माण और सेवा सूक्ष्म उद्यमों के लिए 15% से 35% मार्जिन मनी सब्सिडी प्रदान करने वाला क्रेडिट-लिंक्ड सब्सिडी कार्यक्रम।",
      description: "PMEGP एक प्रमुख क्रेडिट-लिंक्ड सब्सिडी कार्यक्रम है जिसका उद्देश्य गैर-कृषि क्षेत्र में सूक्ष्म उद्यमों की स्थापना के माध्यम से स्व-रोजगार के अवसर पैदा करना है।",
      category: "व्यवसाय और MSME",
      max_benefit: "₹50,00,000 (विनिर्माण) / ₹20,00,000 (सेवा)",
      benefit_type: "सब्सिडी + बैंक ऋण",
      department: "खादी और ग्रामोद्योग आयोग (KVIC)",
      ministry: "सूक्ष्म, लघु और मध्यम उद्यम मंत्रालय",
      deadline: "31 मार्च, 2027 (वित्त वर्ष 2026-27 सक्रिय)",
      processing_timeline: "21–30 दिन",
      benefits: [
        { title: "मार्जिन मनी सब्सिडी (ग्रामीण)", description: "ग्रामीण क्षेत्रों में सामान्य वर्ग के लिए 25% और विशेष श्रेणियों (SC/ST/महिला/दिव्यांग) के लिए 35% सब्सिडी।", amount_or_percentage: "25% - 35%" },
        { title: "मार्जिन मनी सब्सिडी (शहरी)", description: "शहरी क्षेत्रों में सामान्य वर्ग के लिए 15% और विशेष श्रेणियों के लिए 25% सब्सिडी।", amount_or_percentage: "15% - 25%" },
        { title: "बैंक ऋण सहायता", description: "कुल परियोजना लागत का 90% से 95% बैंक ऋण और कार्यशील पूंजी के रूप में।", amount_or_percentage: "95% तक परियोजना लागत" }
      ],
      documents: [
        { name: "आधार कार्ड", description: "पहचान और UIDAI सत्यापन प्रमाण", is_mandatory: true },
        { name: "विस्तृत परियोजना रिपोर्ट (DPR)", description: "परियोजना लागत, अनुमानित आय और मशीनरी विवरण", is_mandatory: true },
        { name: "शैक्षणिक प्रमाण पत्र (8वीं पास+)", description: "विनिर्माण में ₹10 लाख और सेवा में ₹5 लाख से अधिक की परियोजनाओं के लिए आवश्यक", is_mandatory: true },
        { name: "जाति / विशेष श्रेणी प्रमाण पत्र", description: "25-35% उच्च सब्सिडी प्राप्त करने हेतु", is_mandatory: false },
        { name: "बैंक खाता विवरण और रद्द चेक", description: "सब्सिडी जमा करने हेतु लिंक किया गया बैंक खाता", is_mandatory: true }
      ],
      why_this_scheme: [
        "आपकी आयु (18+) PMEGP पात्रता नियमों को पूरा करती है।",
        "नया प्रस्तावित उद्यम 35% ग्रामीण मार्जिन सब्सिडी के लिए पात्र है।",
        "बैंक ऋण और पूंजी सहायता आपके चयनित क्षेत्र के अनुकूल है।"
      ]
    },
    bn: {
      name: "প্রধানমন্ত্রীর কর্মসংস্থান সৃষ্টি কর্মসূচি (PMEGP)",
      summary: "নতুন উৎপাদন ও সেবা ক্ষুদ্র উদ্যোগের জন্য ১৫% থেকে ৩৫% মার্জিন মানি ভর্তুকি প্রদানকারী ক্রেডিট-সংযুক্ত প্রকল্প।",
      description: "PMEGP একটি ক্রেডিট-সংযুক্ত ভর্তুকি কর্মসূচি যার লক্ষ্য অ-কৃষি খাতে ক্ষুদ্র উদ্যোগ প্রতিষ্ঠার মাধ্যমে স্ব-কর্মসংস্থানের সুযোগ তৈরি করা।",
      category: "ব্যবসা ও MSME",
      max_benefit: "₹৫০,০০,০০০ (উৎপাদন) / ₹২০,০০,০০০ (সেবা)",
      benefit_type: "ভর্তুকি + ব্যাংক ঋণ",
      department: "খাদি ও গ্রামীণ শিল্প কমিশন (KVIC)",
      ministry: "ক্ষুদ্র, ছোট ও মাঝারি উদ্যোগ মন্ত্রণালয়",
      deadline: "৩১ মার্চ, ২০২৭ (সক্রিয়)",
      processing_timeline: "২১–৩০ দিন",
      benefits: [
        { title: "মার্জিন মানি ভর্তুকি (গ্রামীণ)", description: "গ্রামীণ এলাকায় সাধারণ শ্রেণীর জন্য ২৫% এবং বিশেষ শ্রেণীর (SC/ST/মহিলা/প্রতিবন্ধী) জন্য ৩৫% ভর্তুকি।", amount_or_percentage: "২৫% - ৩৫%" },
        { title: "মার্জিন মানি ভর্তুকি (শহরাঞ্চল)", description: "শহরাঞ্চলে সাধারণ শ্রেণীর জন্য ১৫% এবং বিশেষ শ্রেণীর জন্য ২৫% ভর্তুকি।", amount_or_percentage: "১৫% - ২৫%" },
        { title: "ব্যাংক ঋণ সুবিধা", description: "মোট প্রকল্প ব্যয়ের ৯০% থেকে ৯৫% ব্যাংক ঋণ ও চলতি মূলধন হিসেবে প্রদান।", amount_or_percentage: "৯৫% পর্যন্ত প্রকল্প ব্যয়" }
      ],
      documents: [
        { name: "আধার কার্ড", description: "পরিচয় ও UIDAI প্রমাণ", is_mandatory: true },
        { name: "বিস্তারিত প্রকল্প প্রতিবেদন (DPR)", description: "প্রকল্প ব্যয়, আনুমানিক আয় ও যন্ত্রপাতির বিবরণ", is_mandatory: true },
        { name: "শিক্ষাগত যোগ্যতার শংসাপত্র (অষ্টম শ্রেণী+)", description: "উৎপাদনে ₹১০ লাখ ও সেবায় ₹৫ লাখের বেশি প্রকল্পের জন্য প্রয়োজনীয়", is_mandatory: true },
        { name: "জাতিগত / বিশেষ শ্রেণীর শংসাপত্র", description: "উচ্চতর ২৫-৩৫% ভর্তুকির জন্য প্রযোজ্য", is_mandatory: false },
        { name: "ব্যাংক পাসবুক ও বাতিল চেক", description: "ভর্তুকি জমার জন্য ব্যাংক হিসাব", is_mandatory: true }
      ],
      why_this_scheme: [
        "আপনার বয়স (১৮+) PMEGP-এর শর্ত পূরণ করে।",
        "প্রস্তাবিত নতুন ব্যবসা ৩৫% গ্রামীণ ভর্তুকির জন্য যোগ্য।",
        "ব্যাংক ঋণ এবং মূলধন সহায়তা আপনার নির্বাচিত খাতের সাথে মানানসই।"
      ]
    }
  },

  mudra_kishore_002: {
    hi: {
      name: "पीएम मुद्रा योजना (किशोर श्रेणी)",
      summary: "मौजूदा छोटे व्यवसायों के विस्तार के लिए ₹50,000 से ₹5,00,000 तक का बिना गारंटी (Collateral-Free) संस्थागत ऋण।",
      description: "प्रधानमंत्री मुद्रा योजना (PMMY) गैर-कॉर्पोरेट, गैर-कृषि छोटे/सूक्ष्म उद्यमों को ऋण सुविधा प्रदान करती है।",
      category: "ऋण और सूक्ष्म-वित्त",
      max_benefit: "₹5,00,000 तक बिना गारंटी ऋण",
      benefit_type: "बैंक टर्म लोन और ओवरड्राफ्ट",
      department: "वित्तीय सेवा विभाग",
      ministry: "वित्त मंत्रालय",
      deadline: "निरंतर खुला (वर्ष भर)",
      processing_timeline: "7–14 दिन",
      benefits: [
        { title: "शून्य गारंटी सुरक्षा", description: "किसी तीसरे पक्ष की गारंटी या बंधक संपत्ति की आवश्यकता नहीं।", amount_or_percentage: "100% बिना गारंटी" },
        { title: "सस्ती ब्याज दरें", description: "आरबीआई रेपो रेट से जुड़ी न्यूनतम ब्याज दरें।", amount_or_percentage: "8.5% - 11.5% वार्षिक" }
      ],
      documents: [
        { name: "आधार कार्ड / वोटर आईडी", description: "पहचान और पते का वैध प्रमाण", is_mandatory: true },
        { name: "व्यापार स्थापना प्रमाण", description: "उद्यम पंजीकरण या दुकान स्थापना लाइसेंस", is_mandatory: true },
        { name: "खरीदी जाने वाली मशीनरी का कोटेशन", description: "मशीनरी या कच्चे माल का मूल्य अनुमान", is_mandatory: true },
        { name: "पिछले 6 महीने का बैंक स्टेटमेंट", description: "व्यापारिक लेन-देन और टर्नओवर का प्रमाण", is_mandatory: true }
      ],
      why_this_scheme: [
        "आपकी ऋण आवश्यकता (₹50,000 से ₹5 लाख) किशोर श्रेणी में पूरी तरह फिट बैठती है।",
        "बिना किसी गिरवी संपत्ति के सीधा बैंक ऋण उपलब्ध है।"
      ]
    },
    bn: {
      name: "পিএম মুদ্রা যোজনা (কিশোর বিভাগ)",
      summary: "বিদ্যমান ক্ষুদ্র ব্যবসার সম্প্রসারণের জন্য ₹৫০,০০০ থেকে ₹৫,০০,০০০ পর্যন্ত জামানতহীন প্রাতিষ্ঠানিক ঋণ।",
      description: "প্রধানমন্ত্রী মুদ্রা যোজনা (PMMY) অ-কর্পোরেট, অ-কৃষি ক্ষুদ্র উদ্যোগগুলিকে ঋণ সুবিধা প্রদান করে।",
      category: "ঋণ ও ক্ষুদ্র অর্থায়ন",
      max_benefit: "₹৫,০০,০০০ পর্যন্ত জামানতহীন ঋণ",
      benefit_type: "টার্ম লোন ও ওভারড্রাফ্ট",
      department: "আর্থিক পরিষেবা বিভাগ",
      ministry: "অর্থ মন্ত্রণালয়",
      deadline: "সারা বছর উন্মুক্ত",
      processing_timeline: "৭–১৪ দিন",
      benefits: [
        { title: "কোনো জামানত লাগবে না", description: "কোনো বন্ধকী সম্পত্তি বা তৃতীয় পক্ষের গ্যারান্টির প্রয়োজন নেই।", amount_or_percentage: "১০০% জামানতহীন" },
        { title: "সহজ সুদের হার", description: "কম সুদের হারে ব্যাংক মেয়াদী ঋণ।", amount_or_percentage: "৮.৫% - ১১.৫% বার্ষিক" }
      ],
      documents: [
        { name: "আধার কার্ড / ভোটার আইডি", description: "পরিচয়ের প্রমাণ", is_mandatory: true },
        { name: "ব্যবসার নিবন্ধন প্রমাণ", description: "উদ্যম নিবন্ধন বা ট্রেড লাইসেন্স", is_mandatory: true },
        { name: "যন্ত্রপাতির কোটেশন", description: "ক্রয়যোগ্য পণ্যের মূল্য তালিকা", is_mandatory: true },
        { name: "৬ মাসের ব্যাংক স্টেটমেন্ট", description: "লেনদেনের বিবরণ", is_mandatory: true }
      ],
      why_this_scheme: [
        "আপনার ঋণের প্রয়োজনীয়তা (₹৫০,০০০ থেকে ₹৫ লাখ) কিশোর বিভাগের সাথে সম্পূর্ণ মিলে যায়।",
        "কোনো সম্পত্তি বন্ধক ছাড়াই সরাসরি ব্যাংক ঋণ পাওয়া যায়।"
      ]
    }
  },

  stand_up_india_003: {
    hi: {
      name: "स्टैंड-अप इंडिया योजना (महिला एवं SC/ST)",
      summary: "महिला और SC/ST उद्यमियों को विनिर्माण, सेवा, कृषि-संबद्ध या व्यापार क्षेत्र में ग्रीनफील्ड उद्यम स्थापित करने हेतु ₹10 लाख से ₹1 करोड़ का बैंक ऋण।",
      description: "स्टैंड-अप इंडिया योजना अनुसूचित जाति, अनुसूचित जनजाति और महिला उद्यमियों को नया व्यवसाय शुरू करने के लिए प्रोत्साहित करती है।",
      category: "महिला और आजीविका",
      max_benefit: "₹1,00,00,000 (1 करोड़) बैंक ऋण",
      benefit_type: "संमिश्र ऋण (टर्म लोन + कार्यशील पूंजी)",
      department: "वित्तीय सेवा विभाग (DFS)",
      ministry: "वित्त मंत्रालय",
      deadline: "सक्रिय (2027 तक विस्तारित)",
      processing_timeline: "15–30 दिन",
      benefits: [
        { title: "परियोजना लागत का 85% वित्तपोषण", description: "परियोजना लागत का 85% तक समग्र ऋण प्रदान किया जाता है।", amount_or_percentage: "85% परियोजना लागत" },
        { title: "क्रेडिट गारंटी कवरेज", description: "स्टैंड अप इंडिया के लिए क्रेडिट गारंटी फंड (CGFSI) के माध्यम से गारंटी।", amount_or_percentage: "100% गारंटी कवरेज" }
      ],
      documents: [
        { name: "पहचान प्रमाण (आधार / पैन)", description: "आवेदक का आधार और पैन कार्ड", is_mandatory: true },
        { name: "जाति प्रमाण पत्र (SC/ST हेतु)", description: "सक्षम प्राधिकारी द्वारा जारी प्रमाण पत्र", is_mandatory: true },
        { name: "परियोजना रिपोर्ट (DPR)", description: "ग्रीनफील्ड परियोजना का विस्तृत विवरण", is_mandatory: true },
        { name: "कार्यालय/इकाई का पता प्रमाण", description: "किरायानामा या बिजली का बिल", is_mandatory: true }
      ],
      why_this_scheme: [
        "महिला या SC/ST उद्यमी श्रेणी के लिए विशेष प्राथमिकता और 85% वित्तपोषण।",
        "ग्रीनफील्ड विनिर्माण या सेवा इकाई हेतु ₹10 लाख से ₹1 करोड़ तक की वित्तीय सहायता।"
      ]
    },
    bn: {
      name: "স্ট্যান্ড-আপ ইন্ডিয়া প্রকল্প (মহিলা ও SC/ST)",
      summary: "মহিলা এবং SC/ST উদ্যোক্তাদের নতুন ব্যবসা (Greenfield) শুরু করতে ₹১০ লাখ থেকে ₹১ কোটি পর্যন্ত ব্যাংক ঋণ।",
      description: "স্ট্যান্ড-আপ ইন্ডিয়া প্রকল্প তফসিলি জাতি, উপজাতি এবং মহিলা উদ্যোক্তাদের উৎপাদন, সেবা বা বাণিজ্য ক্ষেত্রে নতুন উদ্যোগ তৈরিতে সহায়তা করে।",
      category: "মহিলা ও জীবিকা",
      max_benefit: "₹১,০০,০০,০০০ (১ কোটি) ব্যাংক ঋণ",
      benefit_type: "সংমিশ্রিত ঋণ (টার্ম লোন + চলতি মূলধন)",
      department: "আর্থিক পরিষেবা বিভাগ (DFS)",
      ministry: "অর্থ মন্ত্রণালয়",
      deadline: "২০২৭ পর্যন্ত সক্রিয়",
      processing_timeline: "১৫–৩০ দিন",
      benefits: [
        { title: "প্রকল্প ব্যয়ের ৮৫% অর্থায়ন", description: "প্রকল্প ব্যয়ের ৮৫% পর্যন্ত সংমিশ্রিত ঋণ সুবিধা।", amount_or_percentage: "৮৫% প্রকল্প ব্যয়" },
        { title: "পরিশোধের সময়সীমা", description: "১৮ মাসের মোরেটোরিয়াম সহ ৭ বছর পর্যন্ত পরিশোধের সুযোগ।", amount_or_percentage: "৭ বছর মেয়াদ" }
      ],
      documents: [
        { name: "আধার কার্ড ও প্যান কার্ড", description: "পরিচয়পত্র", is_mandatory: true },
        { name: "SC/ST বা মহিলা মালিকানা প্রমাণ", description: "জাতি শংসাপত্র বা মালিকানার নথি", is_mandatory: true },
        { name: "বিস্তারিত প্রকল্প প্রতিবেদন (DPR)", description: "প্রকল্পের আর্থিক ও প্রযুক্তিগত সম্ভাব্যতা", is_mandatory: true },
        { name: "জায়গা বা অফিসের নথি", description: "লিজ চুক্তিপত্র বা দলিলের কপি", is_mandatory: true }
      ],
      why_this_scheme: [
        "মহিলা বা SC/ST উদ্যোক্তাদের জন্য বিশেষ অগ্রাধিকার ও ৮৫% অর্থায়ন।",
        "নতুন উৎপাদন বা পরিষেবা প্রকল্পের জন্য ₹১০ লাখ থেকে ₹১ কোটি পর্যন্ত আর্থিক সহায়তা।"
      ]
    }
  },

  pm_vishwakarma_005: {
    hi: {
      name: "पीएम विश्वकर्मा योजना (पारंपरिक कारीगर एवं शिल्पकार)",
      summary: "18 पारंपरिक व्यवसायों के कारीगरों को PM विश्वकर्मा प्रमाण पत्र, ₹15,00,0 टूलकिट अनुदान और 5% रियायती ब्याज पर ₹3 लाख तक का कोलैटरल-फ्री ऋण।",
      description: "पारंपरिक कारीगरों और शिल्पकारों को उनके उत्पादों और सेवाओं की गुणवत्ता, पैमाने और पहुंच में सुधार करने के लिए समग्र सहायता।",
      category: "कारीगर और शिल्पकार",
      max_benefit: "₹3,00,000 ऋण @ 5% + ₹15,000 टूलकिट प्रोत्साहन",
      benefit_type: "कौशल प्रशिक्षण + टूलकिट अनुदान + सस्ता ऋण",
      department: "सूक्ष्म, लघु और मध्यम उद्यम मंत्रालय",
      ministry: "सूक्ष्म, लघु और मध्यम उद्यम मंत्रालय",
      deadline: "सक्रिय और वर्ष भर खुला",
      processing_timeline: "14–21 दिन",
      benefits: [
        { title: "टूलकिट प्रोत्साहन अनुदान", description: "आधुनिक उपकरण खरीदने हेतु ₹15,000 का ई-वाउचर/अनुदान।", amount_or_percentage: "₹15,000 प्रत्यक्ष अनुदान" },
        { title: "रियायती ऋण (चरण 1 और 2)", description: "पहले चरण में ₹1 लाख और दूसरे चरण में ₹2 लाख का ऋण मात्र 5% ब्याज पर।", amount_or_percentage: "₹3,00,000 @ 5% ब्याज" },
        { title: "दैनिक वजीफा सहित कौशल प्रशिक्षण", description: "प्रशिक्षण अवधि के दौरान ₹500 प्रति दिन का वजीफा।", amount_or_percentage: "₹500 / दिन" }
      ],
      documents: [
        { name: "आधार कार्ड", description: "बायोमेट्रिक प्रमाणीकरण हेतु", is_mandatory: true },
        { name: "राशन कार्ड / पारिवारिक विवरण", description: "पारिवारिक पात्रता सत्यापन", is_mandatory: true },
        { name: "बैंक खाता पासबुक", description: "टूलकिट अनुदान और ऋण राशि प्राप्त करने हेतु", is_mandatory: true },
        { name: "कारीगर व्यवसाय घोषणा", description: "18 पारंपरिक व्यवसायों में से एक में कार्य करने का प्रमाण", is_mandatory: true }
      ],
      why_this_scheme: [
        "पारंपरिक शिल्प और कारीगरी क्षेत्र के लिए ₹15,000 टूलकिट सहायता और 5% पर सस्ता ऋण।",
        "बिना किसी गारंटी के आसान सरकारी लोन।"
      ]
    },
    bn: {
      name: "পিএম বিশ্বকর্মা যোজনা (ঐতিহ্যবাহী কারিগর ও শিল্পী)",
      summary: "১৮টি ঐতিহ্যবাহী পেশার কারিগরদের জন্য ₹১৫,০০০ আধুনিক টুলকিট অনুদান এবং মাত্র ৫% সুদে ₹৩ লাখ পর্যন্ত জামানতহীন ঋণ।",
      description: "ঐতিহ্যবাহী কারিগর ও হস্তশিল্পীদের দক্ষতা বৃদ্ধি, আধুনিক যন্ত্রপাতি এবং কম সুদে ঋণ প্রদানের মাধ্যমে সামগ্রিক সহায়তা।",
      category: "কারিগর ও হস্তশিল্প",
      max_benefit: "₹৩,০০,০০০ ঋণ @ ৫% + ₹১৫,০০০ টুলকিট অনুদান",
      benefit_type: "টুলকিট অনুদান + ৫% সুদে ঋণ + উপবৃত্তি",
      department: "ক্ষুদ্র, ছোট ও মাঝারি উদ্যোগ মন্ত্রণালয়",
      ministry: "MSME মন্ত্রণালয়",
      deadline: "সারা বছর সক্রিয়",
      processing_timeline: "১০–২০ দিন",
      benefits: [
        { title: "আধুনিক টুলকিট অনুদান", description: "উন্নত যন্ত্রপাতি কেনার জন্য ₹১৫,০০০ ডিজিটাল ই-রুপি ভাউচার।", amount_or_percentage: "₹১৫,০০০ অনুদান" },
        { title: "৫% সুদে সহজ ঋণ", description: "১ম ধাপে ₹১ লাখ ও ২য় ধাপে ₹২ লাখ ঋণ মাত্র ৫% সুদে।", amount_or_percentage: "₹৩,০০,০০০ @ ৫% সুদ" },
        { title: "প্রশিক্ষণ ও দৈনিক ভাতা", description: "দক্ষতা বৃদ্ধির প্রশিক্ষণ চলাকালীন প্রতিদিন ₹৫০০ উপবৃত্তি।", amount_or_percentage: "₹৫০০ / দিন" }
      ],
      documents: [
        { name: "আধার কার্ড ও মোবাইল নম্বর", description: "বায়োমেট্রিক যাচাইকরণ", is_mandatory: true },
        { name: "ব্যাংক পাসবুক", description: "ভাতা ও ঋণ জমার জন্য", is_mandatory: true },
        { name: "পারিবারিক রেশন কার্ড", description: "পরিবার প্রতি এক সদস্যের যোগ্যতার প্রমাণ", is_mandatory: true }
      ],
      why_this_scheme: [
        "ঐতিহ্যবাহী কারিগরদের জন্য ₹১৫,০০০ সরাসরি টুলকিট অনুদান ও ৫% সুদে সহজ ঋণ।",
        "কোনো জমি বা বাড়ি বন্ধক রাখার প্রয়োজন নেই।"
      ]
    }
  },

  nlm_dairy_poultry_008: {
    hi: {
      name: "राष्ट्रीय पशुधन मिशन (NLM) - उद्यमिता विकास",
      summary: "डेयरी, पोल्ट्री, भेड़-बकरी और चारा प्रसंस्करण उद्यम स्थापित करने के लिए पूंजीगत लागत पर 50% तक (अधिकतम ₹50 लाख) प्रत्यक्ष सब्सिडी।",
      description: "पशुधन क्षेत्र में उद्यमिता विकास और नस्ल सुधार के लिए केंद्र सरकार की प्रमुख योजना।",
      category: "कृषि और पशुपालन",
      max_benefit: "₹50,00,000 तक 50% पूंजीगत सब्सिडी",
      benefit_type: "50% प्रत्यक्ष पूंजीगत बैक-एंडेड सब्सिडी",
      department: "पशुपालन और डेयरी विभाग (DAHD)",
      ministry: "मत्स्य पालन, पशुपालन और डेयरी मंत्रालय",
      deadline: "31 मार्च, 2027",
      processing_timeline: "30–45 दिन",
      benefits: [
        { title: "50% प्रत्यक्ष पूंजी सब्सिडी", description: "इकाई स्थापना और बुनियादी ढांचे पर 50% गैर-वापसी योग्य सब्सिडी।", amount_or_percentage: "50% पूंजी सब्सिडी" },
        { title: "बैंक ऋण समन्वय", description: "शेष 40-50% राशि बैंक ऋण या स्व-वित्तपोषण के माध्यम से।", amount_or_percentage: "40%-50% ऋण" }
      ],
      documents: [
        { name: "भूमि स्वामित्व / 15-वर्षीय पंजीकृत लीज डीड", description: "इकाई स्थापना हेतु उपयुक्त भूमि का प्रमाण", is_mandatory: true },
        { name: "विस्तृत परियोजना रिपोर्ट (DPR)", description: "पशुधन संख्या, शेड निर्माण और वित्तीय व्यवहार्यता रिपोर्ट", is_mandatory: true },
        { name: "बैंक सैंक्शन लेटर / सैद्धांतिक सहमति", description: "ऋण देने वाले बैंक से स्वीकृति पत्र", is_mandatory: true },
        { name: "प्रशिक्षण प्रमाण पत्र", description: "पशुपालन या डेयरी प्रबंधन में न्यूनतम 10 दिन का प्रशिक्षण", is_mandatory: false }
      ],
      why_this_scheme: [
        "डेयरी एवं पशुधन क्षेत्र में 50% तक सीधी सरकारी सब्सिडी (₹50 लाख तक)।",
        "ग्रामीण एवं अर्ध-शहरी क्षेत्रों में सबसे लोकप्रिय योजना।"
      ]
    },
    bn: {
      name: "জাতীয় প্রাণিসম্পদ মিশন (NLM) - উদ্যোক্তা স্কিম",
      summary: "দুগ্ধ, হাঁস-মুরগি, ছাগল-ভেড়া ও পশুখাদ্য উৎপাদনের নতুন খামার তৈরিতে ৫০% মূলধন ভর্তুকি (সর্বোচ্চ ₹৫০ লাখ)।",
      description: "প্রাণিসম্পদ খাতে উদ্যোক্তা উন্নয়ন ও আধুনিক বাণিজ্যিক খামার তৈরিতে কেন্দ্রীয় সরকারের সরাসরি ৫০% ভর্তুকি প্রকল্প।",
      category: "কৃষি ও পশুপালন",
      max_benefit: "৫০% মূলধন ভর্তুকি (সর্বোচ্চ ₹৫০,০০,০০০)",
      benefit_type: "সরাসরি ৫০% মূলধন ভর্তুকি",
      department: "প্রাণিসম্পদ ও দুগ্ধ বিভাগ (DAHD)",
      ministry: "মৎস্য, প্রাণিসম্পদ ও দুগ্ধ মন্ত্রণালয়",
      deadline: "৩১ মার্চ, ২০২৭",
      processing_timeline: "৩০–৪৫ দিন",
      benefits: [
        { title: "৫০% সরাসরি মূলধন ভর্তুকি", description: "খামার নির্মাণ ও প্রাণিসম্পদ ক্রয়ে ৫০% সরকারি অনুদান।", amount_or_percentage: "৫০% ভর্তুকি" },
        { title: "ব্যাংক ঋণ সুবিধা", description: "বাকি ৫০% নিজস্ব তহবিল বা ব্যাংক ঋণের মাধ্যমে অর্থায়ন।", amount_or_percentage: "৫০% ঋণ সমন্বয়" }
      ],
      documents: [
        { name: "জমির মালিকানা বা ১৫ বছরের রেজিস্টার্ড লিজ", description: "খামারের জায়গার বৈধ প্রমাণ", is_mandatory: true },
        { name: "বিস্তারিত প্রকল্প প্রতিবেদন (DPR)", description: "খামার নকশা ও আর্থিক সম্ভাব্যতা", is_mandatory: true },
        { name: "পশুপালন প্রশিক্ষণ শংসাপত্র", description: "প্রশিক্ষণের প্রমাণপত্র", is_mandatory: false }
      ],
      why_this_scheme: [
        "দুগ্ধ ও প্রাণিসম্পদ খামারের জন্য ৫০% পর্যন্ত সরাসরি সরকারি ভর্তুকি (₹৫০ লাখ পর্যন্ত)।",
        "গ্রামীণ ও মফস্বল এলাকার জন্য অত্যন্ত লাভজনক প্রকল্প।"
      ]
    }
  },

  pm_svanidhi_004: {
    hi: {
      name: "पीएम स्वनिधि (स्ट्रीट वेंडर्स आत्मनिर्भर निधि)",
      summary: "शहरी एवं ग्रामीण पथ विक्रेताओं (स्ट्रीट वेंडर्स) के लिए ₹10,000 से ₹50,000 तक का सस्ता कार्यशील पूंजी ऋण और समय पर भुगतान पर 7% ब्याज सब्सिडी।",
      description: "स्ट्रीट वेंडर्स को अपने व्यवसाय को फिर से शुरू करने और आगे बढ़ाने के लिए किफायती कार्यशील पूंजी ऋण प्रदान करने वाली योजना।",
      category: "ऋण और सूक्ष्म-वित्त",
      max_benefit: "₹50,000 तक क्रमिक ऋण + 7% ब्याज सब्सिडी",
      benefit_type: "कार्यशील पूंजी ऋण + डिजिटल कैशबैक",
      department: "आवास और शहरी कार्य मंत्रालय",
      ministry: "आवास और शहरी कार्य मंत्रालय",
      deadline: "दिसंबर 2026 तक सक्रिय",
      processing_timeline: "3–7 दिन",
      benefits: [
        { title: "क्रमिक ऋण वृद्धि (₹10k -> ₹20k -> ₹50k)", description: "समय पर पुनर्भुगतान करने पर अगली बार दोगुनी ऋण सीमा।", amount_or_percentage: "₹50,000 तक" },
        { title: "7% ब्याज सब्सिडी", description: "नियमित भुगतान पर 7% वार्षिक ब्याज सब्सिडी सीधे बैंक खाते में।", amount_or_percentage: "7% ब्याज अनुदान" },
        { title: "डिजिटल लेनदेन कैशबैक", description: "डिजिटल क्यूआर कोड लेनदेन पर प्रति वर्ष ₹1,200 तक कैशबैक।", amount_or_percentage: "₹1,200 कैशबैक" }
      ],
      documents: [
        { name: "आधार कार्ड", description: "मोबाइल नंबर से लिंक पहचान प्रमाण", is_mandatory: true },
        { name: "वेंडिंग प्रमाण पत्र / पहचान पत्र (CoVs / LoR)", description: "नगर पालिका या स्थानीय निकाय द्वारा जारी वेंडिंग पत्र", is_mandatory: true },
        { name: "बैंक खाता पासबुक", description: "सब्सिडी और ऋण वितरण हेतु बैंक खाता", is_mandatory: true }
      ],
      why_this_scheme: [
        "छोटे विक्रेताओं और दुकानदारों के लिए 7% ब्याज छूट के साथ तुरंत बिना गारंटी ऋण।",
        "डिजिटल लेनदेन पर अतिरिक्त कैशबैक।"
      ]
    },
    bn: {
      name: "পিএম স্বনিধি (রাস্তার হকারদের আত্মনির্ভর তহবিল)",
      summary: "রাস্তার হকার ও ক্ষুদ্র বিক্রেতাদের জন্য ₹১০,০০০ থেকে ₹৫০,০০০ পর্যন্ত সহজ চলতি মূলধন ঋণ ও ৭% সুদের ভর্তুকি।",
      description: "ক্ষুদ্র বিক্রেতা ও হকারদের আর্থিক স্বাবলম্বী করতে জামানতহীন সহজ ঋণ ও ক্যাশব্যাক সুবিধা।",
      category: "ঋণ ও ক্ষুদ্র অর্থায়ন",
      max_benefit: "₹৫০,০০০ পর্যন্ত সহজ ঋণ + ৭% সুদ ভর্তুকি",
      benefit_type: "চলতি মূলধন ঋণ + ক্যাশব্যাক",
      department: "আবাসন ও নগর বিষয়ক মন্ত্রণালয়",
      ministry: "আবাসন ও নগর বিষয়ক মন্ত্রণালয়",
      deadline: "সক্রিয় কেন্দ্রীয় স্কিম",
      processing_timeline: "৩–৭ দিন",
      benefits: [
        { title: "ধাপে ধাপে ঋণের বৃদ্ধি", description: "যথাসময়ে পরিশোধে ₹১০,০০০ থেকে ₹২০,০০০ এবং ₹৫০,০০০ পর্যন্ত বৃদ্ধি।", amount_or_percentage: "₹৫০,০০০ পর্যন্ত" },
        { title: "৭% বার্ষিক সুদ ভর্তুকি", description: "নিয়মিত কিস্তি পরিশোধে সরাসরি ব্যাংক হিসাবে ৭% সুদ ফেরত।", amount_or_percentage: "৭% সুদ ভর্তুকি" },
        { title: "ডিজিটাল ক্যাশব্যাক", description: "ইউপিআই লেনদেনে বছরে ₹১,২০০ পর্যন্ত ক্যাশব্যাক।", amount_or_percentage: "₹১,২০০ ক্যাশব্যাক" }
      ],
      documents: [
        { name: "আধার কার্ড", description: "পরিচয় প্রমাণ", is_mandatory: true },
        { name: "হকার প্রমাণপত্র / পুরসভার পরিচয়পত্র (LoR)", description: "স্থানীয় পুরসভা কর্তৃক প্রদত্ত ভেন্ডিং কার্ড", is_mandatory: true },
        { name: "সক্রিয় ব্যাংক পাসবুক", description: "ঋণ জমার ব্যাংক হিসাব", is_mandatory: true }
      ],
      why_this_scheme: [
        "ক্ষুদ্র বিক্রেতাদের জন্য কোনো জামানত ছাড়াই ৭% সুদ ছাড়ে দ্রুত ঋণ।",
        "ডিজিটাল পেমেন্টে নিয়মিত ক্যাশব্যাক সুবিধা।"
      ]
    }
  },

  pm_kisan_credit_007: {
    hi: {
      name: "किसान क्रेडिट कार्ड (KCC) योजना",
      summary: "किसानों, पशुपालकों और मत्स्य पालकों को फसल और पशुपालन आवश्यकताओं हेतु मात्र 4% प्रभावी ब्याज दर पर ₹3 लाख तक का अल्पकालिक ऋण।",
      description: "किसानों को उनकी खेती, बीज, खाद और पशुपालन की आकस्मिक खर्चों के लिए समय पर ऋण उपलब्ध कराना।",
      category: "कृषि और पशुपालन",
      max_benefit: "₹3,00,000 तक ऋण @ 4% प्रभावी ब्याज दर",
      benefit_type: "अल्पकालिक फसली ऋण / कार्यशील पूंजी",
      department: "कृषि एवं किसान कल्याण विभाग",
      ministry: "कृषि एवं किसान कल्याण मंत्रालय",
      deadline: "वर्ष भर खुला",
      processing_timeline: "14 दिन",
      benefits: [
        { title: "3% शीघ्र भुगतान प्रोत्साहन (PRI)", description: "समय पर ऋण चुकाने पर प्रभावी ब्याज दर घटकर मात्र 4% रह जाती है।", amount_or_percentage: "4% शुद्ध ब्याज" },
        { title: "₹1.6 लाख तक बिना बंधक ऋण", description: "₹1,60,000 तक के ऋण के लिए कोई भूमि या संपत्ति गिरवी रखने की आवश्यकता नहीं।", amount_or_percentage: "₹1.6 लाख बंधक-मुक्त" }
      ],
      documents: [
        { name: "भूमि रिकॉर्ड (खतौनी / पट्टा / बटाईदार अनुबंध)", description: "खेती योग्य भूमि या पशुधन का स्वामित्व प्रमाण", is_mandatory: true },
        { name: "आधार कार्ड एवं पैन कार्ड", description: "आवेदक की पहचान", is_mandatory: true },
        { name: "पासपोर्ट साइज फोटो और बैंक फॉर्म", description: "संबंधित बैंक शाखा में प्रस्तुत करने हेतु", is_mandatory: true }
      ],
      why_this_scheme: [
        "खेती और पशुपालन के लिए 4% की न्यूनतम ब्याज दर पर ₹3 लाख तक का आसान ऋण।",
        "₹1.6 लाख तक किसी गारंटी या भूमि बंधक की आवश्यकता नहीं।"
      ]
    },
    bn: {
      name: "কিষাণ ক্রেডিট কার্ড (KCC) স্কিম",
      summary: "কৃষক ও পশুপালকদের মাত্র ৪% কার্যকর সুদে ₹৩ লাখ পর্যন্ত স্বল্পমেয়াদী ফসল ও চলতি মূলধন ঋণ।",
      description: "বীজ, সার ও পশুপালন খরচের জন্য কৃষকদের সময়মতো সাশ্রয়ী ঋণ প্রদানের সরকারি প্রকল্প।",
      category: "কৃষি ও পশুপালন",
      max_benefit: "₹৩,০০,০০০ ঋণ @ ৪% কার্যকর সুদ",
      benefit_type: "স্বল্পমেয়াদী কৃষি ঋণ",
      department: "কৃষি ও কৃষক কল্যাণ বিভাগ",
      ministry: "কৃষি ও কৃষক কল্যাণ মন্ত্রণালয়",
      deadline: "সারা বছর খোলা",
      processing_timeline: "১৪ দিন",
      benefits: [
        { title: "৩% সময়মতো পরিশোধের ছাড়", description: "সময়মতো ঋণ পরিশোধে কার্যকর সুদের হার মাত্র ৪%।", amount_or_percentage: "৪% কার্যকরী সুদ" },
        { title: "₹১.৬ লাখ পর্যন্ত জামানতহীন", description: "কোনো জমি বন্ধক রাখা ছাড়াই ₹১.৬ লাখ পর্যন্ত ঋণ।", amount_or_percentage: "₹১.৬ লাখ জামানতহীন" }
      ],
      documents: [
        { name: "জমির রেকর্ড (পর্চা / খতিয়ান / লিজ চুক্তি)", description: "চাষযোগ্য জমির মালিকানার প্রমাণ", is_mandatory: true },
        { name: "আধার কার্ড ও প্যান কার্ড", description: "পরিচয় প্রমাণপত্র", is_mandatory: true },
        { name: "ব্যাংক আবেদন পত্র ও ছবি", description: "আবেদন ফর্ম", is_mandatory: true }
      ],
      why_this_scheme: [
        "চাষাবাদ ও পশুপালনের জন্য মাত্র ৪% সুদে ₹৩ লাখ পর্যন্ত সহজ ঋণ।",
        "₹১.৬ লাখ পর্যন্ত কোনো জমি বা সম্পত্তি বন্ধক দিতে হয় না।"
      ]
    }
  },

  pmfme_005: {
    hi: {
      name: "पीएम सूक्ष्म खाद्य प्रसंस्करण उद्यम औपचारिकीकरण (PMFME)",
      summary: "खाद्य प्रसंस्करण, बेकरी, मसाला, अचार, डेयरी या स्नैक्स इकाइयों के उन्नयन हेतु 35% पूंजीगत सब्सिडी (अधिकतम ₹10 लाख) और ब्रांडिंग सहायता।",
      description: "असंगठित सूक्ष्म खाद्य प्रसंस्करण इकाइयों की प्रतिस्पर्धात्मकता को बढ़ाने और 'एक जिला एक उत्पाद' (ODOP) को बढ़ावा देने की योजना।",
      category: "व्यवसाय और MSME",
      max_benefit: "₹10,00,000 तक 35% क्रेडिट-लिंक्ड पूंजी सब्सिडी",
      benefit_type: "35% पूंजीगत सब्सिडी + तकनीकी सहायता",
      department: "खाद्य प्रसंस्करण उद्योग मंत्रालय (MoFPI)",
      ministry: "खाद्य प्रसंस्करण उद्योग मंत्रालय",
      deadline: "31 मार्च, 2027",
      processing_timeline: "20–30 दिन",
      benefits: [
        { title: "35% क्रेडिट लिंक्ड सब्सिडी", description: "पात्र परियोजना लागत पर 35% बैक-एंडेड पूंजी सब्सिडी (अधिकतम ₹10 लाख)।", amount_or_percentage: "35% (अधिकतम ₹10 लाख)" },
        { title: "ODOP ब्रांडिंग और पैकेजिंग अनुदान", description: "मार्केटिंग और FSSAI प्रमाणीकरण के लिए 50% तक वित्तीय सहायता।", amount_or_percentage: "50% सहायता" }
      ],
      documents: [
        { name: "आधार और पैन कार्ड", description: "पहचान प्रमाण", is_mandatory: true },
        { name: "विस्तृत परियोजना रिपोर्ट (DPR)", description: "खाद्य प्रसंस्करण मशीनरी और लागत विवरण", is_mandatory: true },
        { name: "उद्यम पंजीकरण और FSSAI लाइसेंस (यदि उपलब्ध हो)", description: "इकाई पंजीकरण", is_mandatory: false },
        { name: "बिजली बिल / परिसर स्वामित्व या किरायानामा", description: "इकाई स्थान का प्रमाण", is_mandatory: true }
      ],
      why_this_scheme: [
        "खाद्य प्रसंस्करण और बेकरी उद्योग के लिए 35% तक सीधी सब्सिडी।",
        "मशीनरी खरीद और FSSAI प्रमाणीकरण में सरकारी मदद।"
      ]
    },
    bn: {
      name: "পিএম ক্ষুদ্র খাদ্য প্রক্রিয়াকরণ উদ্যোগ প্রকল্প (PMFME)",
      summary: "খাদ্য প্রক্রিয়াকরণ, বেকারি, মসলা, মিষ্টি বা আচার তৈরির ইউনিটের জন্য ৩৫% মূলধন ভর্তুকি (সর্বোচ্চ ₹১০ লাখ)।",
      description: "ক্ষুদ্র খাদ্য প্রক্রিয়াকরণ ইউনিটগুলির আধুনিকীকরণ এবং ওডিওপি (ODOP) ব্র্যান্ডিংয়ে সরকারি সহায়তা।",
      category: "ব্যবসা ও MSME",
      max_benefit: "₹১০,০০,০০০ পর্যন্ত ৩৫% মূলধন ভর্তুকি",
      benefit_type: "৩৫% ভর্তুকি + প্রযুক্তিগত সহায়তা",
      department: "খাদ্য প্রক্রিয়াকরণ শিল্প মন্ত্রণালয়",
      ministry: "খাদ্য প্রক্রিয়াকরণ শিল্প মন্ত্রণালয়",
      deadline: "৩১ মার্চ, ২০২৭",
      processing_timeline: "২০–৩০ দিন",
      benefits: [
        { title: "৩৫% মূলধন ভর্তুকি", description: "যন্ত্রপাতি ক্রয়ে ৩৫% সরাসরি সরকারি ভর্তুকি (সর্বোচ্চ ₹১০ লাখ)।", amount_or_percentage: "৩৫% ভর্তুকি" },
        { title: "ব্র্যান্ডিং ও প্যাকেজিং অনুদান", description: "মার্কেটিং ও FSSAI সার্টিফিকেশনে ৫০% পর্যন্ত সহায়তা।", amount_or_percentage: "৫০% অনুদান" }
      ],
      documents: [
        { name: "আধার ও প্যান কার্ড", description: "পরিচয় প্রমাণ", is_mandatory: true },
        { name: "প্রকল্পের ডিপিআর (DPR)", description: "মেশিনারি ও ব্যয়ের হিসাব", is_mandatory: true },
        { name: "বিদ্যুৎ বিল বা ভাড়ার চুক্তিপত্র", description: "স্থানের প্রমাণ", is_mandatory: true }
      ],
      why_this_scheme: [
        "খাদ্য প্রক্রিয়াকরণ ও বেকারির জন্য ৩৫% পর্যন্ত সরাসরি সরকারি ভর্তুকি।",
        "নতুন মেশিন কেনা ও প্যাকেজিংয়ে আর্থিক সহায়তা।"
      ]
    }
  },

  cgtsme_credit_011: {
    hi: {
      name: "सूक्ष्म और लघु उद्यमों के लिए क्रेडिट गारंटी योजना (CGTMSE)",
      summary: "नए और मौजूदा MSME उद्यमों को बैंकों और NBFC से ₹5 करोड़ तक का बिना किसी संपत्ति बंधक (Collateral-Free) ऋण दिलाने की गारंटी योजना।",
      description: "बिना किसी तीसरे पक्ष की गारंटी या संपत्ति बंधक के प्रथम पीढ़ी के उद्यमियों को बैंक ऋण प्राप्त करने में सक्षम बनाना।",
      category: "ऋण और सूक्ष्म-वित्त",
      max_benefit: "₹5,00,00,000 (5 करोड़) तक 85% गारंटी कवरेज",
      benefit_type: "क्रेडिट गारंटी ट्रस्ट कवरेज",
      department: "सूक्ष्म, लघु और मध्यम उद्यम मंत्रालय",
      ministry: "MSME मंत्रालय और SIDBI",
      deadline: "सक्रिय और वर्ष भर उपलब्ध",
      processing_timeline: "15–25 दिन",
      benefits: [
        { title: "85% तक गारंटी कवरेज", description: "महिला, SC/ST और सूक्ष्म उद्यमों के लिए ऋण राशि का 85% तक ट्रस्ट द्वारा सुरक्षित।", amount_or_percentage: "75% - 85% गारंटी" },
        { title: "₹5 करोड़ तक ऋण सीमा", description: "टर्म लोन और कार्यशील पूंजी दोनों के लिए उच्च ऋण सीमा।", amount_or_percentage: "₹5 करोड़" }
      ],
      documents: [
        { name: "उद्यम पंजीकरण प्रमाण पत्र", description: "MSME मंत्रालय पोर्टल से Udyam प्रमाण पत्र", is_mandatory: true },
        { name: "विस्तृत व्यापार योजना और DPR", description: "वित्तीय अनुमान और लाभप्रदता विवरण", is_mandatory: true },
        { name: "आयकर रिटर्न (ITR) और ऑडिटेड बैलेंस शीट", description: "पिछले 2 वर्षों का वित्तीय विवरण (विद्यमान इकाइयों हेतु)", is_mandatory: false }
      ],
      why_this_scheme: [
        "बिना किसी जमीन या मकान को गिरवी रखे ₹5 करोड़ तक का बड़ा व्यापारिक ऋण।",
        "महिला और सूक्ष्म उद्यमियों के लिए 85% सरकारी गारंटी।"
      ]
    },
    bn: {
      name: "ক্ষুদ্র ও ছোট উদ্যোগের জন্য ক্রেডিট গ্যারান্টি প্রকল্প (CGTMSE)",
      summary: "নতুন ও বিদ্যমান MSME-কে কোনো সম্পত্তি বন্ধক ছাড়াই ₹৫ কোটি পর্যন্ত ব্যাংক ঋণের সরকারি গ্যারান্টি।",
      description: "কোনো তৃতীয় পক্ষের গ্যারান্টি বা বন্ধকী সম্পত্তি ছাড়াই ব্যবসায়ীদের ব্যাংক ঋণ পাওয়ার সুবিধা।",
      category: "ঋণ ও ক্ষুদ্র অর্থায়ন",
      max_benefit: "₹৫,০০,০০,০০০ (৫ কোটি) পর্যন্ত ৮৫% গ্যারান্টি",
      benefit_type: "ক্রেডিট গ্যারান্টি ট্রাস্ট কভারেজ",
      department: "MSME মন্ত্রণালয়",
      ministry: "MSME মন্ত্রণালয় ও SIDBI",
      deadline: "সারা বছর উন্মুক্ত",
      processing_timeline: "১৫–২৫ দিন",
      benefits: [
        { title: "৮৫% পর্যন্ত সরকারি গ্যারান্টি", description: "ব্যাংক ঋণকে ট্রাস্টের মাধ্যমে ৮৫% পর্যন্ত সুরক্ষিত করা হয়।", amount_or_percentage: "৮৫% গ্যারান্টি" },
        { title: "₹৫ কোটি পর্যন্ত ঋণের সীমা", description: "টার্ম লোন ও চলতি মূলধন উভয়ের জন্য প্রযোজ্য।", amount_or_percentage: "₹৫ কোটি সীমা" }
      ],
      documents: [
        { name: "উদ্যম নিবন্ধন শংসাপত্র", description: "MSME সার্টিফিকেট", is_mandatory: true },
        { name: "বিস্তারিত ব্যবসায়িক পরিকল্পনা (DPR)", description: "ব্যবসায়ের হিসাব ও আয়ের বিবরণ", is_mandatory: true }
      ],
      why_this_scheme: [
        "কোনো সম্পত্তি বন্ধক ছাড়াই ₹৫ কোটি পর্যন্ত বড় অঙ্কের ব্যবসায়িক ঋণ।",
        "মহিলা ও ক্ষুদ্র উদ্যোক্তাদের জন্য ৮৫% পর্যন্ত সরকারি গ্যারান্টি কভারেজ।"
      ]
    }
  }
};

// Aliases for scheme IDs
SCHEME_TRANSLATIONS.standup_india_003 = SCHEME_TRANSLATIONS.stand_up_india_003;
SCHEME_TRANSLATIONS.pm_vishwakarma_004 = SCHEME_TRANSLATIONS.pm_vishwakarma_005;
SCHEME_TRANSLATIONS.pm_svanidhi_006 = SCHEME_TRANSLATIONS.pm_svanidhi_004;

// Find translation matching scheme id, slug, or title keywords
export function findTranslation(scheme, lang) {
  if (!scheme) return null;
  const sid = (scheme.scheme_id || scheme.id || '').toLowerCase();
  const slug = (scheme.slug || '').toLowerCase();
  const name = (scheme.name || scheme.scheme_name || '').toLowerCase();

  // 1. Direct ID match
  if (SCHEME_TRANSLATIONS[scheme.scheme_id]?.[lang]) return SCHEME_TRANSLATIONS[scheme.scheme_id][lang];
  if (SCHEME_TRANSLATIONS[scheme.id]?.[lang]) return SCHEME_TRANSLATIONS[scheme.id][lang];

  // 2. Fuzzy / Keyword Name & Slug Matching
  if (sid.includes('stand') || slug.includes('stand') || name.includes('stand')) {
    return SCHEME_TRANSLATIONS.stand_up_india_003?.[lang];
  }
  if (sid.includes('vishwakarma') || slug.includes('vishwakarma') || name.includes('vishwakarma')) {
    return SCHEME_TRANSLATIONS.pm_vishwakarma_005?.[lang];
  }
  if (sid.includes('svanidhi') || slug.includes('svanidhi') || name.includes('svanidhi') || name.includes('street vendor')) {
    return SCHEME_TRANSLATIONS.pm_svanidhi_004?.[lang];
  }
  if (sid.includes('livestock') || sid.includes('nlm') || slug.includes('livestock') || name.includes('livestock') || name.includes('nlm') || name.includes('पशुधन') || name.includes('প্রাণিসম্পদ')) {
    return SCHEME_TRANSLATIONS.nlm_dairy_poultry_008?.[lang];
  }
  if (sid.includes('pmegp') || slug.includes('pmegp') || name.includes('pmegp') || name.includes('employment generation') || name.includes('रोजगार सृजन') || name.includes('কর্মসংস্থান')) {
    return SCHEME_TRANSLATIONS.pmegp_001?.[lang];
  }
  if (sid.includes('mudra') || slug.includes('mudra') || name.includes('mudra') || name.includes('मुद्रा') || name.includes('মুদ্রা')) {
    return SCHEME_TRANSLATIONS.mudra_kishore_002?.[lang];
  }
  if (sid.includes('pmfme') || slug.includes('pmfme') || name.includes('pmfme') || name.includes('food processing') || name.includes('खाद्य प्रसंस्करण') || name.includes('খাদ্য প্রক্রিয়াকরণ')) {
    return SCHEME_TRANSLATIONS.pmfme_005?.[lang];
  }
  if (sid.includes('kisan') || sid.includes('kcc') || slug.includes('kisan') || name.includes('kisan') || name.includes('kcc') || name.includes('किसान क्रेडिट') || name.includes('কিষাণ ক্রেডিট')) {
    return SCHEME_TRANSLATIONS.pm_kisan_credit_007?.[lang];
  }
  if (sid.includes('cgtmse') || sid.includes('cgtsme') || slug.includes('cgtsme') || name.includes('cgtmse') || name.includes('credit guarantee')) {
    return SCHEME_TRANSLATIONS.cgtsme_credit_011?.[lang];
  }

  return null;
}

// Localize dynamic scheme object based on active language
export function localizeScheme(scheme, lang = 'en') {
  if (!scheme) return scheme;
  if (lang === 'en' || !lang) return scheme;

  const translation = findTranslation(scheme, lang);

  if (!translation) {
    return {
      ...scheme,
      category: localizeCategory(scheme.category, lang),
      why_this_scheme: Array.isArray(scheme.why_this_scheme) ? scheme.why_this_scheme.map(w => localizeReason(w, lang)) : scheme.why_this_scheme,
      missing_conditions: Array.isArray(scheme.missing_conditions) ? scheme.missing_conditions.map(m => localizeReason(m, lang)) : scheme.missing_conditions,
      near_miss_tips: Array.isArray(scheme.near_miss_tips) ? scheme.near_miss_tips.map(t => localizeReason(t, lang)) : scheme.near_miss_tips
    };
  }

  return {
    ...scheme,
    name: translation.name || scheme.name,
    scheme_name: translation.name || scheme.scheme_name || scheme.name,
    summary: translation.summary || scheme.summary,
    description: translation.description || scheme.description,
    category: translation.category || localizeCategory(scheme.category, lang),
    max_benefit: translation.max_benefit || scheme.max_benefit,
    benefit_type: translation.benefit_type || scheme.benefit_type,
    department: translation.department || scheme.department,
    ministry: translation.ministry || scheme.ministry,
    deadline: translation.deadline || scheme.deadline,
    processing_timeline: translation.processing_timeline || scheme.processing_timeline,
    benefits: translation.benefits || scheme.benefits,
    documents: translation.documents || scheme.documents,
    why_this_scheme: translation.why_this_scheme || (Array.isArray(scheme.why_this_scheme) ? scheme.why_this_scheme.map(w => localizeReason(w, lang)) : scheme.why_this_scheme),
    missing_conditions: Array.isArray(scheme.missing_conditions) ? scheme.missing_conditions.map(m => localizeReason(m, lang)) : scheme.missing_conditions,
    near_miss_tips: Array.isArray(scheme.near_miss_tips) ? scheme.near_miss_tips.map(t => localizeReason(t, lang)) : scheme.near_miss_tips
  };
}

// Localize category string
export function localizeCategory(category, lang = 'en') {
  if (!category || lang === 'en') return category;
  const map = {
    hi: {
      'All': 'सभी श्रेणियां',
      'Business & Entrepreneurship': 'व्यवसाय और MSME',
      'Business & MSME': 'व्यवसाय और MSME',
      'Credit & Micro-Finance': 'ऋण और सूक्ष्म-वित्त',
      'Women & SC/ST Entrepreneurship': 'महिला और आजीविका',
      'Women & Livelihoods': 'महिला और आजीविका',
      'Artisans & Traditional Crafts': 'कारीगर और शिल्पकार',
      'Artisans & Crafts': 'कारीगर और शिल्पकार',
      'Animal Husbandry & Dairy': 'कृषि और पशुपालन',
      'Agriculture & Livestock': 'कृषि और पशुपालन',
      'Agriculture & Direct Income Support': 'कृषि और आय सहायता',
      'Urban Livelihoods & Micro-Credit': 'शहरी आजीविका एवं सूक्ष्म-ऋण',
      'Street Vendors & Urban Livelihoods': 'शहरी आजीविका एवं वेंडर्स'
    },
    bn: {
      'All': 'সমস্ত বিভাগ',
      'Business & Entrepreneurship': 'ব্যবসা ও MSME',
      'Business & MSME': 'ব্যবসা ও MSME',
      'Credit & Micro-Finance': 'ঋণ ও ক্ষুদ্র অর্থায়ন',
      'Women & SC/ST Entrepreneurship': 'মহিলা ও জীবিকা',
      'Women & Livelihoods': 'মহিলা ও জীবিকা',
      'Artisans & Traditional Crafts': 'কারিগর ও হস্তশিল্প',
      'Artisans & Crafts': 'কারিগর ও হস্তশিল্প',
      'Animal Husbandry & Dairy': 'কৃষি ও পশুপালন',
      'Agriculture & Livestock': 'কৃষি ও পশুপালন',
      'Agriculture & Direct Income Support': 'কৃষি ও সহায়তা',
      'Urban Livelihoods & Micro-Credit': 'শহুরে জীবিকা ও ক্ষুদ্র ঋণ',
      'Street Vendors & Urban Livelihoods': 'শহুরে হকার ও জীবিকা'
    }
  };
  return map[lang]?.[category] || category;
}

// Localize match label badges
export function localizeMatchLabel(label, lang = 'en') {
  if (!label || lang === 'en') return label;
  if (lang === 'hi') {
    if (label.includes('Excellent Match')) return 'उत्कृष्ट मिलान (Excellent Match)';
    if (label.includes('Good Match')) return 'अच्छा मिलान (Good Match)';
    if (label.includes('Moderate')) return 'मध्यम मिलान (Moderate Match)';
    if (label.includes('Ineligible') || label.includes('Mandatory')) return 'अपात्र (अनिवार्य नियम असफल)';
    if (label.includes('Eligible')) return 'पात्र (Eligible)';
  }
  if (lang === 'bn') {
    if (label.includes('Excellent Match')) return 'সেরা মিল (Excellent Match)';
    if (label.includes('Good Match')) return 'ভাল মিল (Good Match)';
    if (label.includes('Ineligible') || label.includes('Mandatory')) return 'অযোগ্য (বাধ্যতামূলক নিয়ম মেলেনি)';
    if (label.includes('Eligible')) return 'উপযুক্ত (Eligible)';
  }
  return label;
}

// Localize rule evaluation reasons, missing conditions, near-miss tips
export function localizeReason(text, lang = 'en') {
  if (!text || lang === 'en') return text;
  
  if (lang === 'hi') {
    let clean = text.trim();
    if (/Age Criterion|Minimum Age/i.test(clean)) {
      const match = clean.match(/(\d+)/g);
      const userAge = match && match[0] ? match[0] : '28';
      const minAge = match && match[1] ? match[1] : '18';
      return `आयु पात्रता: आपकी आयु (${userAge} वर्ष) न्यूनतम आवश्यकता (${minAge}+ वर्ष) को पूरा करती है।`;
    }
    if (/Enterprise Stage|Project Stage/i.test(clean)) {
      return 'उद्यम स्थिति: आवश्यक मानदंड (नया / प्रस्तावित उद्यम) से पूर्णतः मेल खाता है।';
    }
    if (/Gender Preference/i.test(clean)) {
      return 'महिला उद्यमी प्राथमिकता: आपका चयन (महिला) इस योजना के तहत 100% पात्र है।';
    }
    if (/Location.*active/i.test(clean)) {
      return 'स्थान: यह योजना आपके राज्य (पश्चिम बंगाल) में पूर्ण रूप से सक्रिय है।';
    }
    if (/Disqualifier on Trade Category/i.test(clean)) {
      return 'अपात्रता (व्यवसाय क्षेत्र): केवल पारंपरिक कारीगर, हस्तशिल्प, वस्त्र एवं विनिर्माण श्रेणी पात्र हैं।';
    }
    if (/Disqualifier on Vending Sector/i.test(clean)) {
      return 'अपात्रता (वेंडिंग क्षेत्र): यह योजना विशेष रूप से पथ विक्रेताओं (वेंडर्स) एवं दुकानदारों के लिए है।';
    }
    if (/Family Allocation Tip/i.test(clean)) {
      return 'पारिवारिक नियम: इस योजना का लाभ प्रति परिवार केवल एक सदस्य को प्राप्त हो सकता है।';
    }
    if (/Annual Income Ceiling/i.test(clean)) {
      return 'वार्षिक आय: आपकी पारिवारिक आय निर्धारित आय सीमा के अनुकूल है।';
    }
    if (/Loan Amount/i.test(clean)) {
      return 'ऋण राशि: आपकी आवश्यक ऋण राशि योजना के वित्तीय दायरे में है।';
    }
  }

  if (lang === 'bn') {
    let clean = text.trim();
    if (/Age Criterion|Minimum Age/i.test(clean)) {
      return 'বয়সের যোগ্যতা: আপনার বয়স ন্যূনতম প্রয়োজনীয় শর্ত পূরণ করে।';
    }
    if (/Enterprise Stage|Project Stage/i.test(clean)) {
      return 'উদ্যোগের পর্যায়: প্রস্তাবিত নতুন ব্যবসা এই স্কিমের শর্তের সাথে মিলেছে।';
    }
    if (/Gender Preference/i.test(clean)) {
      return 'মহিলা উদ্যোক্তা অগ্রাধিকার: আপনার নির্বাচন এই স্কিমের আওতায় যোগ্য।';
    }
    if (/Location.*active/i.test(clean)) {
      return 'অবস্থান: এই স্কিমটি আপনার রাজ্যে সম্পূর্ণ সক্রিয়।';
    }
    if (/Disqualifier on Trade Category/i.test(clean)) {
      return 'অযোগ্যতা (ব্যবসার ধরন): শুধুমাত্র কারিগর, হস্তশিল্প এবং উৎপাদন খাত যোগ্য।';
    }
    if (/Disqualifier on Vending Sector/i.test(clean)) {
      return 'অযোগ্যতা (হকার খাত): এই স্কিমটি মূলত রাস্তার হকার ও ক্ষুদ্র বিক্রেতাদের জন্য।';
    }
    if (/Family Allocation Tip/i.test(clean)) {
      return 'পারিবারিক নিয়ম: পরিবার প্রতি কেবল একজন সদস্য এই সুবিধা পাবেন।';
    }
    if (/Annual Income Ceiling/i.test(clean)) {
      return 'বার্ষিক আয়: আপনার পারিবারিক আয় নির্ধারিত সীমার মধ্যে রয়েছে।';
    }
    if (/Loan Amount/i.test(clean)) {
      return 'ঋণের পরিমাণ: আপনার চাওয়া ঋণের পরিমাণ স্কিমের আর্থিক সীমার মধ্যে রয়েছে।';
    }
  }

  return text;
}

// Localize Business Sector
export function localizeSector(sector, lang = 'en') {
  if (!sector || lang === 'en') return sector;
  const map = {
    hi: {
      "Manufacturing": "विनिर्माण (Manufacturing)",
      "Service & Hospitality": "सेवा एवं आतिथ्य (Service & Hospitality)",
      "Retail & Trading": "खुदरा व्यापार एवं दुकान (Retail & Trading)",
      "Agriculture & Farming": "कृषि एवं खेती (Agriculture & Farming)",
      "Dairy & Animal Husbandry": "डेयरी एवं पशुपालन (Dairy & Animal Husbandry)",
      "Poultry & Livestock": "पोल्ट्री एवं मवेशी पालन (Poultry & Livestock)",
      "Food Processing & Bakery": "खाद्य प्रसंस्करण एवं बेकरी (Food Processing & Bakery)",
      "Handicrafts & Traditional Artisan": "हस्तशिल्प एवं पारंपरिक कारीगरी (Handicrafts)",
      "Traditional Crafts (Vishwakarma)": "पारंपरिक शिल्प (PM विश्वकर्मा)",
      "Garment & Textile": "वस्त्र एवं परिधान निर्माण (Garments & Textile)",
      "Technology & Innovation": "प्रौद्योगिकी एवं नवाचार (Technology & IT)",
      "Renewable Energy & Solar": "नवीकरणीय ऊर्जा एवं सौर ऊर्जा (Solar Energy)",
      "Fisheries & Aquaculture": "मत्स्य पालन (Fisheries & Aquaculture)",
      "Other": "अन्य क्षेत्र (Other)"
    },
    bn: {
      "Manufacturing": "উৎপাদন শিল্প (Manufacturing)",
      "Service & Hospitality": "পরিষেবা ও আতিথেয়তা (Service & Hospitality)",
      "Retail & Trading": "খুচরা ব্যবসা ও দোকান (Retail & Trading)",
      "Agriculture & Farming": "কৃষি ও চাষাবাদ (Agriculture & Farming)",
      "Dairy & Animal Husbandry": "দুগ্ধ ও পশুপালন (Dairy & Animal Husbandry)",
      "Poultry & Livestock": "হাঁস-মুরগি ও গবাদিপশু (Poultry & Livestock)",
      "Food Processing & Bakery": "খাদ্য প্রক্রিয়াকরণ ও বেকারি (Food Processing)",
      "Handicrafts & Traditional Artisan": "হস্তশিল্প ও ঐতিহ্যবাহী কারুশিল্প (Handicrafts)",
      "Traditional Crafts (Vishwakarma)": "ঐতিহ্যবাহী কারুশিল্প (PM বিশ্বকর্মা)",
      "Garment & Textile": "পোশাক ও টেক্সটাইল (Garments & Textile)",
      "Technology & Innovation": "প্রযুক্তি ও উদ্ভাবন (Technology & IT)",
      "Renewable Energy & Solar": "নবায়নযোগ্য শক্তি ও সৌরশক্তি (Solar Energy)",
      "Fisheries & Aquaculture": "মৎস্য চাষ (Fisheries & Aquaculture)",
      "Other": "অন্যান্য (Other)"
    }
  };
  return map[lang]?.[sector] || sector;
}

// Localize Employment Status
export function localizeEmployment(status, lang = 'en') {
  if (!status || lang === 'en') return status;
  const map = {
    hi: {
      "Self-employed": "स्व-रोजगार / उद्यमी",
      "Unemployed": "बेरोजगार युवा",
      "Farmer": "किसान / कृषक",
      "Business Owner": "मौजूदा व्यवसाय मालिक",
      "Student": "छात्र / शोधकर्ता",
      "Salaried": "वेतनभोगी कर्मचारी"
    },
    bn: {
      "Self-employed": "স্ব-কর্মসংস্থান / উদ্যোক্তা",
      "Unemployed": "বেকার যুব",
      "Farmer": "কৃষক / চাষী",
      "Business Owner": "বিদ্যমান ব্যবসায়ী",
      "Student": "ছাত্র / গবেষক",
      "Salaried": "বেতনভোগী কর্মী"
    }
  };
  return map[lang]?.[status] || status;
}

// Localize Business Stage / Status
export function localizeBusinessStatus(status, lang = 'en') {
  if (!status || lang === 'en') return status;
  const map = {
    hi: {
      "New / Proposed": "नया / प्रस्तावित प्रोजेक्ट (Greenfield)",
      "Existing": "मौजूदा व्यवसाय (विस्तार / अपग्रेड)",
      "New / Proposed Enterprise": "नया / प्रस्तावित उद्यम",
      "Existing / Operating Enterprise": "मौजूदा / सक्रिय व्यवसाय"
    },
    bn: {
      "New / Proposed": "নতুন / প্রস্তাবিত প্রকল্প (Greenfield)",
      "Existing": "বিদ্যমান ব্যবসা (সম্প্রসারণ / আপগ্রেড)",
      "New / Proposed Enterprise": "নতুন / প্রস্তাবিত উদ্যোগ",
      "Existing / Operating Enterprise": "বিদ্যমান / সক্রিয় ব্যবসা"
    }
  };
  return map[lang]?.[status] || status;
}

// Localize Social Category
export function localizeSocialCategory(cat, lang = 'en') {
  if (!cat || lang === 'en') return cat;
  const map = {
    hi: {
      "General": "सामान्य वर्ग (General)",
      "OBC": "अन्य पिछड़ा वर्ग (OBC)",
      "SC": "अनुसूचित जाति (SC)",
      "ST": "अनुसूचित जनजाति (ST)",
      "Minority": "अल्पसंख्यक समुदाय (Minority)",
      "EWS": "आर्थिक रूप से कमजोर वर्ग (EWS)"
    },
    bn: {
      "General": "সাধারণ শ্রেণী (General)",
      "OBC": "অন্যান্য অনগ্রসর শ্রেণী (OBC)",
      "SC": "তফসিলি জাতি (SC)",
      "ST": "তফসিলি উপজাতি (ST)",
      "Minority": "সংখ্যালঘু সম্প্রদায় (Minority)",
      "EWS": "অর্থনৈতিকভাবে দুর্বল (EWS)"
    }
  };
  return map[lang]?.[cat] || cat;
}

// Localize Case Study
export function localizeCaseStudy(cs, lang = 'en') {
  if (!cs || lang === 'en') return cs;
  if (lang === 'hi') {
    if (cs.id === 'cs-01') {
      return {
        ...cs,
        tag: "सूक्ष्म उद्यम • महिला उद्यमिता",
        title: "इको-पैकेजिंग और सुपारी पत्ता उत्पाद इकाई",
        beneficiary: "सुनीता रॉय",
        location: "नादिया, पश्चिम बंगाल",
        scheme: "प्रधानमंत्री रोजगार सृजन कार्यक्रम (PMEGP)",
        problem: "बिना पूंजी के बेरोजगार; बिना किसी संपत्ति बंधक के वाणिज्यिक बैंक ऋण प्राप्त करने में असमर्थ।",
        solution: "स्कीमफ्लो मिलान ने ग्रामीण विशेष श्रेणी महिला उद्यमी के लिए PMEGP के तहत 35% मार्जिन सब्सिडी की पहचान की।",
        result: "₹5.25 लाख की सब्सिडी प्राप्त हुई, 12 ग्रामीण महिलाओं को रोजगार मिला और ₹4.8 लाख मासिक कारोबार स्थापित हुआ।",
        quote: "PMEGP ने मुझे इको-पैकेजिंग इकाई शुरू करने हेतु पूंजी दी। KVIC के माध्यम से 35% सब्सिडी आसानी से मिल गई।",
        badgeText: "35% ग्रामीण सब्सिडी स्वीकृत"
      };
    }
    if (cs.id === 'cs-02') {
      return {
        ...cs,
        tag: "MSME विस्तार • बिना गारंटी ऋण",
        title: "प्रिसिजन ऑटो पार्ट्स एवं खराद कार्यशाला",
        beneficiary: "रमेश पटेल",
        location: "अहमदाबाद, गुजरात",
        scheme: "पीएम मुद्रा योजना (किशोर श्रेणी)",
        problem: "मैनुअल मशीन तक सीमित; ₹4.5 लाख की CNC मशीनरी अपग्रेड के लिए बंधक संपत्ति का अभाव।",
        solution: "एल्गोरिदम ने विस्तार पूंजी चाहने वाले मौजूदा सूक्ष्म उद्यमों के लिए मुद्रा किशोर संस्थागत टियर से मिलान किया।",
        result: "9.5% ब्याज पर 10 दिनों में बिना किसी गारंटी के ₹4.5 लाख स्वीकृत; मासिक कारोबार बढ़कर ₹3.8 लाख हुआ।",
        quote: "मुद्रा किशोर में जमीन गिरवी रखने की मांग नहीं की गई। 10 दिनों के भीतर बैंक ने मशीन लोन मंजूर कर दिया।",
        badgeText: "₹4.5 लाख बिना गारंटी ऋण"
      };
    }
    if (cs.id === 'cs-03') {
      return {
        ...cs,
        tag: "पारंपरिक कारीगर • टूलकिट और सस्ता ऋण",
        title: "विरासत लकड़ी के खिलौने एवं काष्ठशिल्प",
        beneficiary: "मोहन लाल",
        location: "वाराणसी, उत्तर प्रदेश",
        scheme: "पीएम विश्वकर्मा योजना",
        problem: "पुराने औजारों से सीमित उत्पादन और त्योहारों के सीजन से पहले कार्यशील पूंजी का अभाव।",
        solution: "त्वरित नियम सत्यापन ने ₹15,000 डिजिटल टूलकिट अनुदान और मात्र 5% ब्याज पर कोलैटरल-फ्री ऋण अनलॉक किया।",
        result: "₹15,000 का डिजिटल टूलकिट ई-वाउचर और ₹1 लाख कार्यशील पूंजी प्राप्त हुई, जिससे उत्पादन 3 गुना बढ़ा।",
        quote: "₹15,000 का आधुनिक टूलकिट ई-वाउचर मोबाइल पर आया। 5% सस्ते लोन से अच्छी लकड़ी का स्टॉक जमा कर सका।",
        badgeText: "₹15,000 टूलकिट + 5% रियायती ऋण"
      };
    }
  }

  if (lang === 'bn') {
    if (cs.id === 'cs-01') {
      return {
        ...cs,
        tag: "ক্ষুদ্র উদ্যোগ • মহিলা উদ্যোক্তা",
        title: "পরিবেশ-বান্ধব প্যাকেজিং ও সুপারি পাতার পণ্য",
        beneficiary: "সুনীতা রায়",
        location: "নদিয়া, পশ্চিমবঙ্গ",
        scheme: "প্রধানমন্ত্রীর কর্মসংস্থান সৃষ্টি কর্মসূচি (PMEGP)",
        problem: "পুঁজি ছাড়া বেকার; কোনো বন্ধকী সম্পত্তি ছাড়া বাণিজ্যিক ব্যাংকের ঋণ পেতে অক্ষম।",
        solution: "স্কিমফ্লো গ্রামীণ বিশেষ শ্রেণীর মহিলা উদ্যোক্তা হিসেবে PMEGP-র আওতায় ৩৫% মার্জিন মানি ভর্তুকি চিহ্নিত করেছে।",
        result: "₹৫.২৫ লাখ ভর্তুকি লাভ, ১২ জন গ্রামীণ মহিলার কর্মসংস্থান ও মাসে ₹৪.৮ লাখ টার্নওভার তৈরি হয়েছে।",
        quote: "PMEGP আমাকে ব্যবসা শুরুর মূলধন দিয়েছে। KVIC-এর মাধ্যমে ৩৫% সরকারি ভর্তুকি সহজেই অনুমোদন পেয়েছিল।",
        badgeText: "৩৫% গ্রামীণ ভর্তুকি অনুমোদিত"
      };
    }
    if (cs.id === 'cs-02') {
      return {
        ...cs,
        tag: "MSME সম্প্রসারণ • জামানতহীন ঋণ",
        title: "অটো পার্টস ও নির্ভুল লেদ ওয়ার্কশপ",
        beneficiary: "রমেশ প্যাটেল",
        location: "আহমেদাবাদ, গুজরাট",
        scheme: "পিএম মুদ্রা যোজনা (কিশোর বিভাগ)",
        problem: "একটি ম্যানুয়াল মেশিনে সীমাবদ্ধ; ₹৪.৫ লাখের CNC মেশিনারির জন্য কোনো জামানত ছিল না।",
        solution: "অ্যালগরিদম বিদ্যমান ব্যবসার সম্প্রসারণের জন্য মুদ্রা কিশোর বিভাগের সাথে মিলিয়ে দিয়েছে।",
        result: "৯.৫% সুদে ১০ দিনে কোনো গ্যারান্টি ছাড়াই ₹৪.৫ লাখ ঋণ মঞ্জুর; মাসিক আয় ₹৩.৮ লাখে উন্নীত।",
        quote: "মুদ্রা কিশোর স্কিমে কোনো জমি বন্ধক রাখতে হয়নি। আবেদন করার ১০ দিনের মধ্যে ব্যাংক লোন পাস করেছিল।",
        badgeText: "₹৪.৫ লাখ জামানতহীন ঋণ"
      };
    }
    if (cs.id === 'cs-03') {
      return {
        ...cs,
        tag: "ঐতিহ্যবাহী কারিগর • টুলকিট ও স্বল্প সুদে ঋণ",
        title: "ঐতিহ্যবাহী কাঠের খেলনা ও শিল্পকর্ম",
        beneficiary: "মোহন লাল",
        location: "বারাণসী, উত্তরপ্রদেশ",
        scheme: "পিএম বিশ্বকর্মা যোজনা",
        problem: "হাতে তৈরি ঔজারের কারণে কম উৎপাদন এবং উৎসবের আগে চলতি মূলধনের অভাব।",
        solution: "তাত্ক্ষণিক নিয়ম যাচাইকরণে ₹১৫,০০০ ডিজিটাল টুলকিট অনুদান এবং মাত্র ৫% সুদে ঋণ আনলক হয়েছে।",
        result: "₹১৫,০০০ ডিজিটাল টুলকিট ই-ভাউচার এবং ₹১ লাখ চলতি মূলধন লাভ, যার ফলে উৎপাদন ৩ গুণ বেড়েছে।",
        quote: "মোবাইলে ₹১৫,০০০ টুলকিট ই-ভাউচার এসেছে। ৫% কম সুদের ঋণে উন্নতমানের কাঁচামাল কিনতে পেরেছি।",
        badgeText: "₹১৫,০০০ টুলকিট + ৫% সুদে ঋণ"
      };
    }
  }

  return cs;
}

// -------------------------------------------------------------
// APPLICATION TRACKER LOCALIZATION HELPERS
// -------------------------------------------------------------

export function localizeTrackerStatus(status, lang = 'en') {
  if (!status || lang === 'en') {
    return status ? status.replace(/_/g, ' ') : status;
  }
  const statusClean = String(status).toUpperCase().trim();
  if (lang === 'hi') {
    const map = {
      'UNDER_REVIEW': 'समीक्षाधीन (Under Review)',
      'UNDER REVIEW': 'समीक्षाधीन (Under Review)',
      'APPROVED': 'स्वीकृत (Approved)',
      'REJECTED': 'अस्वीकृत (Rejected)',
      'IN_PROGRESS': 'प्रक्रियाधीन (In Progress)',
      'COMPLETED': 'पूर्ण (Completed)',
      'PENDING': 'लंबित (Pending)'
    };
    return map[statusClean] || status;
  }
  if (lang === 'bn') {
    const map = {
      'UNDER_REVIEW': 'পর্যালোচনাধীন (Under Review)',
      'UNDER REVIEW': 'পর্যালোচনাধীন (Under Review)',
      'APPROVED': 'অনুমোদিত (Approved)',
      'REJECTED': 'প্রত্যাখ্যাত (Rejected)',
      'IN_PROGRESS': 'প্রক্রিয়াধীন (In Progress)',
      'COMPLETED': 'সম্পূর্ণ (Completed)',
      'PENDING': 'মুলতুবি (Pending)'
    };
    return map[statusClean] || status;
  }
  return status;
}

export function localizeNextAction(action, lang = 'en') {
  if (!action || lang === 'en') return action;

  if (lang === 'hi') {
    if (/Attend 5-day EDP Training Module/i.test(action)) {
      return 'आरसेटी (RSETI) हब पर 5-दिवसीय अनिवार्य EDP प्रशिक्षण मॉड्यूल में भाग लें';
    }
    if (/Sign loan agreement and activate MUDRA RuPay/i.test(action)) {
      return 'ऋण समझौते पर हस्ताक्षर करें और मुद्रा रुपे (RuPay) डेबिट कार्ड सक्रिय करें';
    }
    if (/Apply for 1st Tranche Loan/i.test(action)) {
      return 'प्रथम किस्त ऋण (₹1,00,000 @ 5%) के लिए आवेदन करें';
    }
    if (/District verification officer will schedule on-site verification/i.test(action)) {
      return 'जिला सत्यापन अधिकारी 3 कार्य दिवसों के भीतर ऑन-साइट सत्यापन निर्धारित करेंगे';
    }
    return action;
  }

  if (lang === 'bn') {
    if (/Attend 5-day EDP Training Module/i.test(action)) {
      return 'আরএসইটিআই (RSETI) হাবে ৫ দিনের বাধ্যতামূলক ইডিপি প্রশিক্ষণ মডিউলে অংশ নিন';
    }
    if (/Sign loan agreement and activate MUDRA RuPay/i.test(action)) {
      return 'ঋণ চুক্তিতে স্বাক্ষর করুন এবং মুদ্রা রুপে ডেবিট কার্ড সক্রিয় করুন';
    }
    if (/Apply for 1st Tranche Loan/i.test(action)) {
      return 'প্রথম কিস্তির ঋণের (₹১,০০,০০০ @ ৫%) জন্য আবেদন করুন';
    }
    if (/District verification officer will schedule on-site verification/i.test(action)) {
      return 'জেলা যাচাইকরণ কর্মকর্তা ৩ কার্যদিবসের মধ্যে সরেজমিন পরিদর্শন করবেন';
    }
    return action;
  }

  return action;
}

const STEP_TRANSLATIONS = {
  // PMEGP steps
  "Application & DPR Submitted on e-Portal": {
    hi: {
      title: "ई-पोर्टल पर आवेदन एवं डीपीआर (DPR) जमा",
      remark: "परियोजना लागत ₹12.5 लाख और आधार ई-केवाईसी के साथ ऑनलाइन आवेदन प्राप्त हुआ।"
    },
    bn: {
      title: "ই-পোর্টালে আবেদন ও ডিপিআর (DPR) জমা",
      remark: "প্রকল্প ব্যয় ₹১২.৫ লাখ এবং আধার ই-কেওয়াইসি সহ অনলাইন আবেদন জমা হয়েছে।"
    }
  },
  "District Level Task Force (DLTFC) Scrutiny": {
    hi: {
      title: "जिला स्तरीय टास्क फोर्स (DLTFC) संवीक्षा",
      remark: "परियोजना डीपीआर की जांच पूरी हुई और 35% ग्रामीण विशेष श्रेणी सब्सिडी के लिए मंजूरी दी गई।"
    },
    bn: {
      title: "জেলা স্তরের টাস্ক ফোর্স (DLTFC) যাচাইকরণ",
      remark: "প্রকল্পের ডিপিআর যাচাই সম্পন্ন এবং ৩৫% গ্রামীণ বিশেষ ভর্তুকির অনুমোদন দেওয়া হয়েছে।"
    }
  },
  "Financing Bank Appraisal & Field Inspection": {
    hi: {
      title: "ऋणदाता बैंक मूल्यांकन एवं स्थल निरीक्षण",
      remark: "शाखा प्रबंधक द्वारा डेयरी शेड स्थल का भौतिक सत्यापन पूर्ण। ऋण स्वीकृति पत्र तैयार किया जा रहा है।"
    },
    bn: {
      title: "অর্থায়নকারী ব্যাংক মূল্যায়ন ও সরেজমিন পরিদর্শন",
      remark: "শাখা ব্যবস্থাপক দ্বারা দুগ্ধ শেড সাইট পরিদর্শন সম্পন্ন। ঋণ অনুমোদন পত্র তৈরি হচ্ছে।"
    }
  },
  "Entrepreneurship Development Programme (EDP)": {
    hi: {
      title: "उद्यमिता विकास कार्यक्रम (EDP) प्रशिक्षण",
      remark: "जिला आरसेटी (RSETI) केंद्र में अनिवार्य 5-दिवसीय प्रशिक्षण अनुसूची आवंटित।"
    },
    bn: {
      title: "উদ্যোক্তা উন্নয়ন কর্মসূচি (EDP) প্রশিক্ষণ",
      remark: "জেলা আরএসইটিআই (RSETI) কেন্দ্রে বাধ্যতামূলক ৫ দিনের প্রশিক্ষণ বরাদ্দ করা হয়েছে।"
    }
  },
  "Loan Disbursement & Margin Money Escrow Credit": {
    hi: {
      title: "ऋण वितरण एवं मार्जिन मनी एस्क्रो क्रेडिट",
      remark: "95% समग्र ऋण वितरण और 35% मार्जिन मनी सब्सिडी लॉक-इन।"
    },
    bn: {
      title: "ঋণ বিতরণ ও মার্জিন মানি এসক্রো ক্রেডিট",
      remark: "৯৫% সংমিশ্রিত ঋণ বিতরণ এবং ৩৫% মার্জিন মানি ভর্তুকি লক-ইন।"
    }
  },

  // MUDRA steps
  "Application Submitted via Udyamimitra": {
    hi: {
      title: "उद्यमीमित्र के माध्यम से आवेदन जमा",
      remark: "उद्यम प्रमाण पत्र के साथ ₹3.5 लाख सावधि ऋण + इन्वेंट्री क्रेडिट हेतु आवेदन।"
    },
    bn: {
      title: "উদ্যমমিত্রের মাধ্যমে আবেদন জমা",
      remark: "উদ্যম শংসাপত্র সহ ₹৩.৫ লাখ টার্ম লোন ও স্টক ক্রেডিটের জন্য আবেদন।"
    }
  },
  "CIBIL / Credit Scoring & Business Verification": {
    hi: {
      title: "सिबिल / क्रेडिट स्कोरिंग एवं व्यवसाय सत्यापन",
      remark: "क्रेडिट स्कोर 740 सत्यापित। फील्ड ऑफिसर द्वारा दुकान परिसर का निरीक्षण किया गया।"
    },
    bn: {
      title: "সিআইবিআইএল / ক্রেডিট স্কোরিং ও ব্যবসা যাচাই",
      remark: "ক্রেডিট স্কোর ৭৪০ যাচাই করা হয়েছে। ফিল্ড অফিসার দোকান প্রাঙ্গণ পরিদর্শন করেছেন।"
    }
  },
  "Credit Facility Sanctioned": {
    hi: {
      title: "ऋण सुविधा स्वीकृत",
      remark: "बिना किसी गारंटी के 9.25% वार्षिक ब्याज पर ₹3,50,000 स्वीकृत।"
    },
    bn: {
      title: "ঋণ সুবিধা অনুমোদিত",
      remark: "কোনো জামানত ছাড়াই বার্ষিক ৯.২৫% সুদে ₹৩,৫০,০০০ অনুমোদিত।"
    }
  },
  "Fund Disbursement & MUDRA Card Activation": {
    hi: {
      title: "धनराशि वितरण एवं मुद्रा कार्ड सक्रियण",
      remark: "वितरण आदेश जारी। मुद्रा रुपे (RuPay) कार्ड भेज दिया गया है।"
    },
    bn: {
      title: "তহবিল বিতরণ ও মুদ্রা কার্ড সক্রিয়করণ",
      remark: "বিতরণ আদেশ তৈরি হয়েছে। মুদ্রা রুপে কার্ড পাঠানো হয়েছে।"
    }
  },

  // PM Vishwakarma steps
  "CSC Biometric Registration": {
    hi: {
      title: "सीएससी (CSC) बायोमेट्रिक पंजीकरण",
      remark: "आधार बायोमेट्रिक्स और ट्रेड प्रमाणन (लोहार / बढ़ईगीरी) पंजीकृत।"
    },
    bn: {
      title: "সিএসসি বায়োমেট্রিক নিবন্ধন",
      remark: "আধার বায়োমেট্রিক্স এবং ট্রেড সার্টিফিকেশন নিবন্ধিত।"
    }
  },
  "Gram Panchayat Level-1 Vetting": {
    hi: {
      title: "ग्राम पंचायत स्तर-1 जांच एवं पुष्टि",
      remark: "स्थानीय पारंपरिक व्यापार कार्यप्रणाली की पुष्टि हुई।"
    },
    bn: {
      title: "গ্রাম পঞ্চায়েত স্তর-১ যাচাই",
      remark: "স্থানীয় ট্রেড কার্যক্রম নিশ্চিত করা হয়েছে।"
    }
  },
  "5-Day Basic Skill Training & Stipend": {
    hi: {
      title: "5-दिवसीय बुनियादी कौशल प्रशिक्षण एवं वजीफा",
      remark: "बुनियादी कौशल प्रमाण पत्र प्रदान किया गया। ₹2,500 दैनिक वजीफा खाते में जमा।"
    },
    bn: {
      title: "৫-দিনের প্রাথমিক দক্ষতা প্রশিক্ষণ ও উপবৃত্তি",
      remark: "দক্ষতা শংসাপত্র প্রদান এবং ₹২,৫০০ উপবৃত্তি অ্যাকাউন্টে জমা।"
    }
  },
  "₹15,000 Digital Toolkit e-RUPI Voucher Issued": {
    hi: {
      title: "₹15,000 डिजिटल टूलकिट ई-रूपी (e-RUPI) वाउचर जारी",
      remark: "उपकरण खरीदने हेतु पंजीकृत मोबाइल नंबर पर डिजिटल वाउचर भेजा गया।"
    },
    bn: {
      title: "₹১৫,০০০ ডিজিটাল টুলকিট ই-রুপি ভাউচার প্রদান",
      remark: "সরঞ্জাম কেনার জন্য নিবন্ধিত মোবাইল নম্বরে ডিজিটাল ভাউচার পাঠানো হয়েছে।"
    }
  },

  // Generic fallback steps
  "Online Application Submitted": {
    hi: {
      title: "ऑनलाइन आवेदन जमा किया गया",
      remark: "राष्ट्रीय डेटाबेस में आवेदन सफलतापूर्वक दर्ज।"
    },
    bn: {
      title: "অনলাইন আবেদন জমা দেওয়া হয়েছে",
      remark: "জাতীয় ডেটাবেসে আবেদন সফলভাবে নথিভুক্ত।"
    }
  },
  "Aadhaar & KYC Authentication": {
    hi: {
      title: "आधार एवं केवाईसी (KYC) प्रमाणीकरण",
      remark: "यूआईडीएआई (UIDAI) प्रमाणीकरण सफलतापूर्वक सत्यापित।"
    },
    bn: {
      title: "আধার ও কেওয়াইসি প্রমাণীকরণ",
      remark: "ইউআইডিএআই প্রমাণীকরণ সফলভাবে সম্পন্ন।"
    }
  },
  "District Screening & Field Appraisal": {
    hi: {
      title: "जिला स्क्रीनिंग एवं फील्ड मूल्यांकन",
      remark: "आवेदन वर्तमान में जिला टास्क फोर्स द्वारा समीक्षाधीन है।"
    },
    bn: {
      title: "জেলা স্ক্রীনিং ও ফিল্ড মূল্যায়ন",
      remark: "আবেদনটি বর্তমানে জেলা টাস্ক ফোর্সের অধীনে পর্যালোচনাধীন।"
    }
  },
  "Bank Credit Sanction & Subsidy Disbursal": {
    hi: {
      title: "बैंक ऋण स्वीकृति एवं सब्सिडी वितरण",
      remark: "फील्ड सत्यापन पूरा होने की प्रतीक्षा में।"
    },
    bn: {
      title: "ব্যাংক ঋণ অনুমোদন ও ভর্তুকি বিতরণ",
      remark: "সরেজমিন যাচাই শেষ হওয়ার অপেক্ষায়।"
    }
  }
};

export function localizeTrackerStep(step, lang = 'en') {
  if (!step || lang === 'en') return step;
  const match = STEP_TRANSLATIONS[step.title]?.[lang];
  if (match) {
    return {
      ...step,
      title: match.title,
      officer_remark: match.remark
    };
  }

  // Fuzzy check
  for (const [key, val] of Object.entries(STEP_TRANSLATIONS)) {
    if (step.title && step.title.toLowerCase().includes(key.toLowerCase())) {
      if (val[lang]) {
        return {
          ...step,
          title: val[lang].title,
          officer_remark: val[lang].remark
        };
      }
    }
  }

  return step;
}

export function localizeDateString(dateStr, lang = 'en') {
  if (!dateStr || lang === 'en') return dateStr;

  let localized = String(dateStr);

  const months = {
    hi: {
      'Jan': 'जनवरी', 'January': 'जनवरी',
      'Feb': 'फ़रवरी', 'February': 'फ़रवरी',
      'Mar': 'मार्च', 'March': 'मार्च',
      'Apr': 'अप्रैल', 'April': 'अप्रैल',
      'May': 'मई',
      'Jun': 'जून', 'June': 'जून',
      'Jul': 'जुलाई', 'July': 'जुलाई',
      'Aug': 'अगस्त', 'August': 'अगस्त',
      'Sep': 'सितंबर', 'September': 'सितंबर',
      'Oct': 'अक्टूबर', 'October': 'अक्टूबर',
      'Nov': 'नवंबर', 'November': 'नवंबर',
      'Dec': 'दिसंबर', 'December': 'दिसंबर',
      'Estimated:': 'अनुमानित:',
      'Estimated in': 'अनुमानित:',
      'AM': 'पूर्वाह्न',
      'PM': 'अपराह्न'
    },
    bn: {
      'Jan': 'জানুয়ারি', 'January': 'জানুয়ারি',
      'Feb': 'ফেব্রুয়ারি', 'February': 'ফেব্রুয়ারি',
      'Mar': 'মার্চ', 'March': 'মার্চ',
      'Apr': 'এপ্রিল', 'April': 'এপ্রিল',
      'May': 'মে',
      'Jun': 'জুন', 'June': 'জুন',
      'Jul': 'জুলাই', 'July': 'জুলাই',
      'Aug': 'আগস্ট', 'August': 'আগস্ট',
      'Sep': 'সেপ্টেম্বর', 'September': 'সেপ্টেম্বর',
      'Oct': 'অক্টোবর', 'October': 'অক্টোবর',
      'Nov': 'নভেম্বর', 'November': 'নভেম্বর',
      'Dec': 'ডিসেম্বর', 'December': 'ডিসেম্বর',
      'Estimated:': 'আনুমানিক:',
      'Estimated in': 'আনুমানিক:',
      'AM': 'পূর্বাহ্ন',
      'PM': 'অপরাহ্ন'
    }
  };

  const currentMap = months[lang];
  if (currentMap) {
    for (const [enKey, targetVal] of Object.entries(currentMap)) {
      localized = localized.replace(new RegExp(`\\b${enKey}\\b`, 'g'), targetVal);
    }
  }

  return localized;
}
