export type Phrase = { en: string; zh: string; pinyin: string };

export type PhraseCategory = {
  key: string;
  titleEn: string;
  titleZh: string;
  iconHint?: string;
  phrases: Phrase[];
};

export const phraseCategories: PhraseCategory[] = [
  {
    key: "basics",
    titleEn: "Basics",
    titleZh: "基础用语",
    iconHint: "hello",
    phrases: [
      { en: "Hello.", zh: "你好。", pinyin: "Nǐ hǎo." },
      { en: "Thank you.", zh: "谢谢。", pinyin: "Xièxie." },
      { en: "Sorry.", zh: "对不起。", pinyin: "Duìbuqǐ." },
      { en: "I don't understand.", zh: "我听不懂。", pinyin: "Wǒ tīng bù dǒng." },
      { en: "Please say that again.", zh: "请再说一遍。", pinyin: "Qǐng zài shuō yí biàn." },
      { en: "Please help me.", zh: "请帮我一下。", pinyin: "Qǐng bāng wǒ yí xià." }
    ]
  },
  {
    key: "transport",
    titleEn: "Transport",
    titleZh: "交通",
    iconHint: "route",
    phrases: [
      { en: "How much to X?", zh: "去 X 多少钱？", pinyin: "Qù X duōshǎo qián?" },
      {
        en: "How do I get to metro station X?",
        zh: "地铁 X 站怎么走？",
        pinyin: "Dìtiě X zhàn zěnme zǒu?"
      },
      { en: "I want to take a taxi.", zh: "我要打车。", pinyin: "Wǒ yào dǎchē." },
      { en: "Driver, please stop here.", zh: "师傅，请停一下。", pinyin: "Shīfu, qǐng tíng yí xià." },
      { en: "How do I get to the high-speed rail station?", zh: "高铁站怎么走？", pinyin: "Gāotiě zhàn zěnme zǒu?" },
      { en: "How do I get to the airport?", zh: "机场怎么走？", pinyin: "Jīchǎng zěnme zǒu?" },
      { en: "Please tell me when we arrive.", zh: "到了麻烦说一声。", pinyin: "Dào le máfan shuō yì shēng." }
    ]
  },
  {
    key: "payments",
    titleEn: "Payments",
    titleZh: "支付",
    iconHint: "wallet",
    phrases: [
      { en: "Don't you accept foreign cards?", zh: "不收外卡吗？", pinyin: "Bù shōu wàikǎ ma?" },
      { en: "Is cash okay?", zh: "现金可以吗？", pinyin: "Xiànjīn kěyǐ ma?" },
      { en: "That's too expensive.", zh: "太贵了。", pinyin: "Tài guì le." },
      { en: "Can it be cheaper?", zh: "便宜点。", pinyin: "Piányi diǎn." },
      { en: "I'll pay cash.", zh: "我付现金。", pinyin: "Wǒ fù xiànjīn." },
      { en: "The QR code payment failed.", zh: "扫码失败了。", pinyin: "Sǎomǎ shībài le." },
      { en: "Do you need the receipt?", zh: "收据要不要？", pinyin: "Shōujù yào bu yào?" }
    ]
  },
  {
    key: "food",
    titleEn: "Food",
    titleZh: "餐饮",
    iconHint: "bowl",
    phrases: [
      { en: "Please make it not spicy.", zh: "不要辣。", pinyin: "Bú yào là." },
      { en: "No X, I'm allergic.", zh: "不要 X，我过敏。", pinyin: "Bú yào X, wǒ guòmǐn." },
      { en: "I am vegetarian.", zh: "我吃素。", pinyin: "Wǒ chī sù." },
      { en: "What is this?", zh: "这是什么？", pinyin: "Zhè shì shénme?" },
      { en: "What do you recommend?", zh: "推荐什么？", pinyin: "Tuījiàn shénme?" },
      { en: "Extra rice, please.", zh: "加饭。", pinyin: "Jiā fàn." },
      { en: "Please pack this to go.", zh: "打包。", pinyin: "Dǎbāo." },
      { en: "Check, please.", zh: "结账。", pinyin: "Jiézhàng." }
    ]
  },
  {
    key: "accommodation",
    titleEn: "Accommodation",
    titleZh: "住宿",
    iconHint: "hotel",
    phrases: [
      { en: "I want to check in.", zh: "我要办理入住。", pinyin: "Wǒ yào bànlǐ rùzhù." },
      { en: "What time is check-out?", zh: "几点退房？", pinyin: "Jǐ diǎn tuìfáng?" },
      { en: "What is the Wi-Fi password?", zh: "Wi-Fi 密码是多少？", pinyin: "Wi-Fi mìmǎ shì duōshǎo?" },
      { en: "What time is breakfast?", zh: "早餐几点？", pinyin: "Zǎocān jǐ diǎn?" },
      { en: "Can I store my luggage?", zh: "可以寄存行李吗？", pinyin: "Kěyǐ jìcún xíngli ma?" },
      { en: "Can we add an extra bed?", zh: "可以加张床吗？", pinyin: "Kěyǐ jiā zhāng chuáng ma?" }
    ]
  },
  {
    key: "emergency",
    titleEn: "Emergency",
    titleZh: "应急",
    iconHint: "sos",
    phrases: [
      { en: "Help me!", zh: "救救我！", pinyin: "Jiùjiu wǒ!" },
      { en: "I am sick.", zh: "我生病了。", pinyin: "Wǒ shēngbìng le." },
      { en: "My passport is lost.", zh: "我的护照丢了。", pinyin: "Wǒ de hùzhào diū le." },
      { en: "Call an ambulance.", zh: "叫救护车。", pinyin: "Jiào jiùhùchē." },
      { en: "Call the police.", zh: "报警。", pinyin: "Bàojǐng." },
      { en: "My wallet was stolen.", zh: "我的钱包被偷了。", pinyin: "Wǒ de qiánbāo bèi tōu le." },
      { en: "Give me some water, please.", zh: "给我点水。", pinyin: "Gěi wǒ diǎn shuǐ." }
    ]
  },
  {
    key: "shopping",
    titleEn: "Shopping",
    titleZh: "购物",
    iconHint: "bag",
    phrases: [
      { en: "How much is it?", zh: "多少钱？", pinyin: "Duōshǎo qián?" },
      { en: "Can I try it on?", zh: "可以试穿吗？", pinyin: "Kěyǐ shìchuān ma?" },
      { en: "I don't want it.", zh: "不要。", pinyin: "Bú yào." },
      { en: "I'm just looking.", zh: "我看看。", pinyin: "Wǒ kànkan." },
      { en: "Can I return it?", zh: "可以退货吗？", pinyin: "Kěyǐ tuìhuò ma?" },
      { en: "Can I use a credit card?", zh: "信用卡能用吗？", pinyin: "Xìnyòngkǎ néng yòng ma?" },
      { en: "Please wrap it up.", zh: "包起来。", pinyin: "Bāo qǐlai." }
    ]
  }
];

export const phrasebookTotal = phraseCategories.reduce((total, category) => total + category.phrases.length, 0);
