export type SourceCitation = {
  id: string;
  url: string;
  publisher: string;
  publisherUrl: string;
  pageTitleEn: string;
  pageTitleZh?: string;
  publishedDate?: string;
  verifiedDate: string;
  domain: string;
  community?: boolean;
};

const TODAY = "2026-05-12";

const make = (record: Omit<SourceCitation, "domain">): SourceCitation => ({
  ...record,
  domain: new URL(record.url).hostname
});

const list: SourceCitation[] = [
  make({
    id: "nia-unilateral-list",
    url: "https://en.nia.gov.cn/n147418/n147463/c183390/content.html",
    publisher: "NIA",
    publisherUrl: "https://en.nia.gov.cn",
    pageTitleEn: "List of Countries Covered by Unilateral Visa Exemption Policies",
    publishedDate: "2026-02-17",
    verifiedDate: TODAY
  }),
  make({
    id: "nia-transit-list",
    url: "https://en.nia.gov.cn/n147418/n147463/c156094/content.html",
    publisher: "NIA",
    publisherUrl: "https://en.nia.gov.cn",
    pageTitleEn: "Transit Visa-Free Policy",
    publishedDate: "2023-10-19",
    verifiedDate: TODAY
  }),
  make({
    id: "state-council-240h",
    url: "https://english.www.gov.cn/news/202511/04/content_WS69094ae0c6d00ca5f9a07472.html",
    publisher: "State Council",
    publisherUrl: "https://english.www.gov.cn",
    pageTitleEn: "China expands 240-hour visa-free transit to 65 ports",
    publishedDate: "2025-11-04",
    verifiedDate: TODAY
  }),
  make({
    id: "nia-online-entry-card",
    url: "https://en.nia.gov.cn/n147418/n147468/c187308/content.html",
    publisher: "NIA",
    publisherUrl: "https://en.nia.gov.cn",
    pageTitleEn: "Online Foreigner Entry/Exit Card pre-filling service",
    publishedDate: "2025-11-20",
    verifiedDate: TODAY
  }),
  make({
    id: "nia-card-fraud-warning",
    url: "https://en.nia.gov.cn/n147418/n147463/c191530/content.html",
    publisher: "NIA",
    publisherUrl: "https://en.nia.gov.cn",
    pageTitleEn: "Warning on counterfeit entry-card websites",
    verifiedDate: TODAY
  }),
  make({
    id: "mfa-consular-directory",
    url: "https://www.fmprc.gov.cn/web/fw_673051/lbfw_673061/fgzl_673083/",
    publisher: "MFA",
    publisherUrl: "https://www.fmprc.gov.cn",
    pageTitleEn: "Foreign Consular Missions in China",
    verifiedDate: TODAY
  }),
  make({
    id: "visa-application-center",
    url: "https://www.visaforchina.cn",
    publisher: "Chinese Visa Application Service Center",
    publisherUrl: "https://www.visaforchina.cn",
    pageTitleEn: "Chinese Visa Application Service Center",
    verifiedDate: TODAY
  }),
  make({
    id: "beijing-airport-services",
    url: "https://english.beijing.gov.cn/livinginbeijing/transportation/airport/202501/t20250108_3984022.html",
    publisher: "Beijing Government",
    publisherUrl: "https://english.beijing.gov.cn",
    pageTitleEn: "Beijing Service counters at Capital and Daxing airports",
    publishedDate: "2025-01-08",
    verifiedDate: TODAY
  }),
  make({
    id: "beijing-subway-foreign-card",
    url: "https://english.beijing.gov.cn/travellinginbeijing/essentials/inboundtourismfacilitationmeasures/202603/t20260326_4566767.html",
    publisher: "Beijing Government",
    publisherUrl: "https://english.beijing.gov.cn",
    pageTitleEn: "Beijing subway accepts UnionPay/Visa/Mastercard/JCB/Amex tap-to-ride",
    publishedDate: "2026-03-26",
    verifiedDate: TODAY
  }),
  make({
    id: "beijing-medical-guide",
    url: "https://english.beijing.gov.cn/latest/news/202511/t20251110_4267485.html",
    publisher: "Beijing Government",
    publisherUrl: "https://english.beijing.gov.cn",
    pageTitleEn: "Foreigner medical service guide for Beijing (17 international hospitals)",
    publishedDate: "2025-11-10",
    verifiedDate: TODAY
  }),
  make({
    id: "beijing-12345-hotline",
    url: "https://english.beijing.gov.cn/12345hotline/index.html?src=4",
    publisher: "Beijing Government",
    publisherUrl: "https://english.beijing.gov.cn",
    pageTitleEn: "Beijing 12345 multilingual hotline (10 languages)",
    verifiedDate: TODAY
  }),
  make({
    id: "shanghai-customs-immigration",
    url: "https://english.shanghai.gov.cn/en-CustomsImmigration/20251112/c90227e252884a949f2091c37a0818ac.html",
    publisher: "Shanghai Government",
    publisherUrl: "https://english.shanghai.gov.cn",
    pageTitleEn: "Shanghai online entry card and Hongqiao e-filing service",
    publishedDate: "2025-11-12",
    verifiedDate: TODAY
  }),
  make({
    id: "shanghai-maglev-foreign-card",
    url: "https://english.shanghai.gov.cn/en-Latest-WhatsNew/20250614/a5c7bac93f024324ace770d3275d28b6.html",
    publisher: "Shanghai Government",
    publisherUrl: "https://english.shanghai.gov.cn",
    pageTitleEn: "Maglev accepts foreign cards",
    publishedDate: "2025-06-14",
    verifiedDate: TODAY
  }),
  make({
    id: "shanghai-public-transport",
    url: "https://english.shanghai.gov.cn/en-Latest-WhatsNew/20240422/5251c321845b4a488723bb51dd23adc2.html",
    publisher: "Shanghai Government",
    publisherUrl: "https://english.shanghai.gov.cn",
    pageTitleEn: "Shanghai metro / bus / ferry payment options",
    publishedDate: "2024-04-22",
    verifiedDate: TODAY
  }),
  make({
    id: "shanghai-healthcare-foreign",
    url: "https://english.shanghai.gov.cn/en-Healthcare/20250227/54af530f3bd4400da6a6fa8111bd308f.html",
    publisher: "Shanghai Government",
    publisherUrl: "https://english.shanghai.gov.cn",
    pageTitleEn: "Shanghai foreigner-friendly hospitals (Huashan international etc.)",
    publishedDate: "2025-02-27",
    verifiedDate: TODAY
  }),
  make({
    id: "gz-baiyun-t3",
    url: "https://www.gz.gov.cn/zwfw/zxfw/jtfw/content/post_10658828.html",
    publisher: "Guangzhou Government",
    publisherUrl: "https://www.gz.gov.cn",
    pageTitleEn: "Baiyun Airport T3 international/regional flights",
    verifiedDate: TODAY
  }),
  make({
    id: "gz-metro-foreign-card",
    url: "https://www.gz.gov.cn/guangzhouinternational/138/content/post_10480554.html",
    publisher: "Guangzhou Government",
    publisherUrl: "https://www.gz.gov.cn",
    pageTitleEn: "Guangzhou metro accepts UnionPay/Mastercard/Visa/JCB/Amex (since 2025-10-12)",
    publishedDate: "2025-10-12",
    verifiedDate: TODAY
  }),
  make({
    id: "gz-payment-acceptance",
    url: "https://www.gz.gov.cn/zt/qltjygadwqjsxsdzgzlfzdf/gzzxd/content/post_9577269.html",
    publisher: "Guangzhou Government",
    publisherUrl: "https://www.gz.gov.cn",
    pageTitleEn: "Guangzhou foreign-card acceptance program",
    verifiedDate: TODAY
  }),
  make({
    id: "sz-airport-gtc",
    url: "https://jtys.sz.gov.cn/ydmh/jtcx/sjcx/jcgk/content/post_8527201.html",
    publisher: "Shenzhen Transport Bureau",
    publisherUrl: "https://jtys.sz.gov.cn",
    pageTitleEn: "Bao'an Airport ground transport center (GTC)",
    verifiedDate: TODAY
  }),
  make({
    id: "sz-metro-foreign-card",
    url: "https://jtys.sz.gov.cn/ydmh/jtzx/zyhy_1510/content/post_11264754.html",
    publisher: "Shenzhen Transport Bureau",
    publisherUrl: "https://jtys.sz.gov.cn",
    pageTitleEn: "Shenzhen metro foreign-card POS at 8 hubs + cash retained",
    verifiedDate: TODAY
  }),
  make({
    id: "sz-cross-border-payment",
    url: "https://www.sz.gov.cn/cn/xxgk/zfxxgj/zwdt/content/post_12305039.html",
    publisher: "Shenzhen Government",
    publisherUrl: "https://www.sz.gov.cn",
    pageTitleEn: "Shenzhen cross-border payment program (AlipayHK)",
    verifiedDate: TODAY
  }),
  make({
    id: "sz-line11-airport",
    url: "https://jtys.sz.gov.cn/ydmh/jtcx/sjcx/jcgk/content/post_8527070.html",
    publisher: "Shenzhen Transport Bureau",
    publisherUrl: "https://jtys.sz.gov.cn",
    pageTitleEn: "Metro Line 11 airport route to Qianhai/Nanshan/Futian/Gangshabei",
    verifiedDate: TODAY
  }),
  make({
    id: "sz-night-bus",
    url: "https://jtys.sz.gov.cn/zwgk/jtzx/cxtx/content/post_10939875.html",
    publisher: "Shenzhen Transport Bureau",
    publisherUrl: "https://jtys.sz.gov.cn",
    pageTitleEn: "Shenzhen Zero Hour Express (overnight airport bus)",
    verifiedDate: TODAY
  }),
  make({
    id: "rail-12306-en",
    url: "https://www.12306.cn/en/index.html",
    publisher: "China Railway",
    publisherUrl: "https://www.12306.cn",
    pageTitleEn: "12306 international ticket platform",
    verifiedDate: TODAY
  }),
  make({
    id: "rail-12306-faq",
    url: "https://www.12306.cn/en/faq.html",
    publisher: "China Railway",
    publisherUrl: "https://www.12306.cn",
    pageTitleEn: "12306 FAQ — registration / payment / refund",
    verifiedDate: TODAY
  }),
  make({
    id: "beijing-train-id-verify",
    url: "https://wb.beijing.gov.cn/home/index/wsjx/202401/t20240115_3535596.html",
    publisher: "Beijing Foreign Affairs Office",
    publisherUrl: "https://wb.beijing.gov.cn",
    pageTitleEn: "Identity verification for buying train tickets in China",
    publishedDate: "2024-01-15",
    verifiedDate: TODAY
  }),
  make({
    id: "beijing-subway-five-cards",
    url: "https://wb.beijing.gov.cn/en/express/202508/t20250828_4186027.html",
    publisher: "Beijing Foreign Affairs Office",
    publisherUrl: "https://wb.beijing.gov.cn",
    pageTitleEn: "Beijing Subway: tap-to-go with all 5 international card brands",
    publishedDate: "2025-08-28",
    verifiedDate: TODAY
  }),
  make({
    id: "beijing-airport-express",
    url: "https://english.beijing.gov.cn/travellinginbeijing/transportation/airport/202005/t20200516_1899219.html",
    publisher: "Beijing Government",
    publisherUrl: "https://english.beijing.gov.cn",
    pageTitleEn: "Beijing Capital International Airport — Airport Express info",
    verifiedDate: TODAY
  }),
  make({
    id: "beijing-daxing-final-train",
    url: "https://english.beijing.gov.cn/livinginbeijing/transportation/beijingsubway/202411/t20241110_3937243.html",
    publisher: "Beijing Government",
    publisherUrl: "https://english.beijing.gov.cn",
    pageTitleEn: "Daxing Airport Express — operating hours",
    publishedDate: "2024-11-10",
    verifiedDate: TODAY
  }),
  make({
    id: "shanghai-metro-five-cards",
    url: "https://english.shanghai.gov.cn/en-Latest-WhatsNew/20250627/d8f21f2e7d3b45a5b03757e35039b806.html",
    publisher: "Shanghai Government",
    publisherUrl: "https://english.shanghai.gov.cn",
    pageTitleEn: "Shanghai Metro full-network tap-to-ride (5 networks + e-CNY)",
    publishedDate: "2025-06-27",
    verifiedDate: TODAY
  }),
  make({
    id: "shanghai-maglev-bank-cards",
    url: "https://english.pudong.gov.cn/2025-06/16/c_1100880.htm",
    publisher: "Pudong Government",
    publisherUrl: "https://english.pudong.gov.cn",
    pageTitleEn: "Shanghai Maglev accepts foreign bank cards (since 2025-06-14)",
    publishedDate: "2025-06-16",
    verifiedDate: TODAY
  }),
  make({
    id: "shanghai-maglev-fare",
    url: "https://english.pudong.gov.cn/chinashftz/2018-09/01/c_262635.htm",
    publisher: "Pudong Government",
    publisherUrl: "https://english.pudong.gov.cn",
    pageTitleEn: "Shanghai Maglev — fare and operating hours",
    verifiedDate: TODAY
  }),
  make({
    id: "shanghai-airport-link",
    url: "https://english.shanghai.gov.cn/en-Transportation/20241231/f66f14bbd4b549ab88e6f3aec375790c.html",
    publisher: "Shanghai Government",
    publisherUrl: "https://english.shanghai.gov.cn",
    pageTitleEn: "How to take Airport Link Line (PVG ↔ SHA)",
    publishedDate: "2024-12-31",
    verifiedDate: TODAY
  }),
  make({
    id: "gz-metro-tap-to-ride",
    url: "http://www.eguangzhou.gov.cn/gzservice/content/post_39343.html",
    publisher: "Guangzhou Government",
    publisherUrl: "http://www.eguangzhou.gov.cn",
    pageTitleEn: "Guangzhou Metro tap-to-ride foreign cards (since 2025-10-12)",
    publishedDate: "2025-10-12",
    verifiedDate: TODAY
  }),
  make({
    id: "gz-baiyun-t3-airport",
    url: "http://www.eguangzhou.gov.cn/gzservice/content/post_39620.html",
    publisher: "Guangzhou Government",
    publisherUrl: "http://www.eguangzhou.gov.cn",
    pageTitleEn: "Baiyun Airport T3 transport guide",
    verifiedDate: TODAY
  }),
  make({
    id: "gz-alipayhk-transit",
    url: "https://www.gz.gov.cn/guangzhouinternational/home/citynews/content/post_9529430.html",
    publisher: "Guangzhou Government",
    publisherUrl: "https://www.gz.gov.cn",
    pageTitleEn: "AlipayHK accepted on Guangzhou metro/bus (since 2024-03-04)",
    publishedDate: "2024-03-04",
    verifiedDate: TODAY
  }),
  make({
    id: "sz-baoan-airport-plan",
    url: "https://www.sz.gov.cn/en_szgov/news/infocus/SZCitywalk/Explore/Plan/content/post_11908152.html",
    publisher: "Shenzhen Government",
    publisherUrl: "https://www.sz.gov.cn",
    pageTitleEn: "Bao'an Airport — full ground transport map",
    verifiedDate: TODAY
  }),
  make({
    id: "sz-metro-pos",
    url: "https://www.sz.gov.cn/en_szgov/news/latest/content/post_11628100.html",
    publisher: "Shenzhen Government",
    publisherUrl: "https://www.sz.gov.cn",
    pageTitleEn: "Shenzhen Metro POS terminals at 391 service centres (6 networks)",
    publishedDate: "2024-10-14",
    verifiedDate: TODAY
  }),
  make({
    id: "sz-hk-cross-border-qr",
    url: "https://www.sz.gov.cn/en_szgov/news/infocus/block/news/travel/content/post_10622813.html",
    publisher: "Shenzhen Government",
    publisherUrl: "https://www.sz.gov.cn",
    pageTitleEn: "SZ-HK cross-border single QR (since 2023-06-01)",
    publishedDate: "2023-06-01",
    verifiedDate: TODAY
  }),
  make({
    id: "sz-tax-refund-alipayhk",
    url: "https://www.sz.gov.cn/en_szgov/news/latest/content/post_12373687.html",
    publisher: "Shenzhen Government",
    publisherUrl: "https://www.sz.gov.cn",
    pageTitleEn: "Shenzhen instant tax refund via AlipayHK (up to 11%)",
    publishedDate: "2025-09-08",
    verifiedDate: TODAY
  }),
  make({
    id: "pboc-payment-uplift",
    url: "https://english.www.gov.cn/news/202404/11/content_WS6617c858c6d0868f4e8e5f4d.html",
    publisher: "State Council",
    publisherUrl: "https://english.www.gov.cn",
    pageTitleEn: "PBOC payment service guide for overseas visitors (USD 5K / 50K limits)",
    publishedDate: "2024-04-11",
    verifiedDate: TODAY
  }),
  make({
    id: "customs-clearance-guide",
    url: "http://english.customs.gov.cn/statics/88707c1e-aa4e-40ca-a968-bdbdbb565e4f.html",
    publisher: "China Customs (GACC)",
    publisherUrl: "http://english.customs.gov.cn",
    pageTitleEn: "Customs Clearance Guide for International Passengers",
    verifiedDate: TODAY
  }),
  make({
    id: "boc-atm-en",
    url: "https://www.boc.cn/english/individuals/pbk/sch/202601/t20260105_25639179.html",
    publisher: "Bank of China",
    publisherUrl: "https://www.boc.cn",
    pageTitleEn: "BOC ATM — accepts Visa/MC/JCB/Amex/UnionPay; CNY 3,000/tx",
    publishedDate: "2026-01-05",
    verifiedDate: TODAY
  }),
  make({
    id: "unionpay-intl-tips",
    url: "https://m.unionpayintl.com/wap/en/serviceCenter/cardUsingInstructions/1435.shtml",
    publisher: "UnionPay International",
    publisherUrl: "https://m.unionpayintl.com",
    pageTitleEn: "UnionPay overseas-card usage in China",
    verifiedDate: TODAY
  }),
  make({
    id: "shanghai-emergency-numbers",
    url: "https://english.shanghai.gov.cn/en-EmergencyNumbers/20241210/cbc5280b9f96440a93234bfc5e0c1023.html",
    publisher: "Shanghai Government",
    publisherUrl: "https://english.shanghai.gov.cn",
    pageTitleEn: "What to do in an emergency — Shanghai 110 in 8 languages",
    publishedDate: "2024-12-10",
    verifiedDate: TODAY
  }),
  make({
    id: "beijing-emergency-numbers",
    url: "https://english.beijing.gov.cn/travellinginbeijing/quickguideontravelservices/traveltips/202108/t20210811_2466839.html",
    publisher: "Beijing Government",
    publisherUrl: "https://english.beijing.gov.cn",
    pageTitleEn: "Beijing emergency numbers (110/119/120/122)",
    publishedDate: "2021-08-11",
    verifiedDate: TODAY
  }),
  make({
    id: "pumch-foreign-care",
    url: "https://www.pumch.cn/en/medical_care.html",
    publisher: "Peking Union Medical College Hospital",
    publisherUrl: "https://www.pumch.cn",
    pageTitleEn: "PUMCH international medical services",
    verifiedDate: TODAY
  }),
  make({
    id: "ufh-beijing",
    url: "https://beijing.ufh.com.cn/locations/main-campus?lang=en",
    publisher: "United Family Healthcare",
    publisherUrl: "https://beijing.ufh.com.cn",
    pageTitleEn: "Beijing United Family Hospital — main campus",
    verifiedDate: TODAY
  }),
  make({
    id: "huashan-shanghai",
    url: "https://english.shanghai.gov.cn/en-Hospitals/20241014/e3bebde56c344efcbc3ca57e3a50e55a.html",
    publisher: "Shanghai Government",
    publisherUrl: "https://english.shanghai.gov.cn",
    pageTitleEn: "Huashan Hospital — World Health Clinic",
    publishedDate: "2024-10-14",
    verifiedDate: TODAY
  }),
  make({
    id: "ufh-shanghai",
    url: "https://shanghai.ufh.com.cn/locations/puxi-main-hospital/?lang=en",
    publisher: "United Family Healthcare",
    publisherUrl: "https://shanghai.ufh.com.cn",
    pageTitleEn: "Shanghai United Family Hospital — Puxi",
    verifiedDate: TODAY
  }),
  make({
    id: "fahsysu-gz",
    url: "https://www.fahsysu.org.cn/en/basic/5855",
    publisher: "First Affiliated Hospital, Sun Yat-sen University",
    publisherUrl: "https://www.fahsysu.org.cn",
    pageTitleEn: "International Medicine — FAH-SYSU Guangzhou",
    verifiedDate: TODAY
  }),
  make({
    id: "ufh-guangzhou",
    url: "https://guangzhou.ufh.com.cn/locations/guangzhou-united-family-hospital?lang=en",
    publisher: "United Family Healthcare",
    publisherUrl: "https://guangzhou.ufh.com.cn",
    pageTitleEn: "Guangzhou United Family Hospital",
    verifiedDate: TODAY
  }),
  make({
    id: "hku-szh",
    url: "https://www.hku-szh.org/en/imc/index.html",
    publisher: "HKU-Shenzhen Hospital",
    publisherUrl: "https://www.hku-szh.org",
    pageTitleEn: "International Medical Center — HKU-Shenzhen Hospital",
    verifiedDate: TODAY
  }),
  make({
    id: "sz-hospitals-municipal",
    url: "https://www.sz.gov.cn/en_szgov/life/hospitals/municipal/content/post_11220998.html",
    publisher: "Shenzhen Government",
    publisherUrl: "https://www.sz.gov.cn",
    pageTitleEn: "Shenzhen municipal hospitals directory",
    verifiedDate: TODAY
  }),
  make({
    id: "shanghai-12345",
    url: "https://english.shanghai.gov.cn/en/20231223/7b8359d283634bd99b4e7a2c5a89314c.html",
    publisher: "Shanghai Government",
    publisherUrl: "https://english.shanghai.gov.cn",
    pageTitleEn: "Shanghai 12345 (18 languages, press 7 for foreign)",
    publishedDate: "2023-12-23",
    verifiedDate: TODAY
  }),
  make({
    id: "gz-960169-bridge",
    url: "https://www.gz.gov.cn/guangzhouinternational/pageelements/bottom/contactus/",
    publisher: "Guangzhou Government",
    publisherUrl: "https://www.gz.gov.cn",
    pageTitleEn: "Guangzhou 960169 multilingual interpretation bridge",
    verifiedDate: TODAY
  }),
  make({
    id: "sz-12345-pingshan",
    url: "https://www.szpsq.gov.cn/English/SERVICES/Hotlines/content/post_11567594.html",
    publisher: "Shenzhen Pingshan District",
    publisherUrl: "https://www.szpsq.gov.cn",
    pageTitleEn: "Shenzhen 12345 + iShenzhen multilingual app",
    verifiedDate: TODAY
  }),
  make({
    id: "us-embassy-china",
    url: "https://china.usembassy-china.org.cn/embassy-consulates/beijing/",
    publisher: "U.S. Embassy Beijing",
    publisherUrl: "https://china.usembassy-china.org.cn",
    pageTitleEn: "U.S. Embassy Beijing contact",
    verifiedDate: TODAY
  }),
  make({
    id: "uk-embassy-china",
    url: "https://www.gov.uk/world/organisations/british-embassy-beijing",
    publisher: "FCDO (UK)",
    publisherUrl: "https://www.gov.uk",
    pageTitleEn: "British Embassy Beijing",
    verifiedDate: TODAY
  }),
  make({
    id: "ca-embassy-china",
    url: "https://www.international.gc.ca/country-pays/china-chine/beijing.aspx?lang=eng",
    publisher: "Global Affairs Canada",
    publisherUrl: "https://www.international.gc.ca",
    pageTitleEn: "Embassy of Canada to China",
    verifiedDate: TODAY
  }),
  make({
    id: "au-embassy-china",
    url: "https://china.embassy.gov.au/bjng/contact-us.html",
    publisher: "Australian Embassy Beijing",
    publisherUrl: "https://china.embassy.gov.au",
    pageTitleEn: "Australian Embassy Beijing",
    verifiedDate: TODAY
  }),
  make({
    id: "jp-embassy-china",
    url: "https://www.cn.emb-japan.go.jp/",
    publisher: "Embassy of Japan in China",
    publisherUrl: "https://www.cn.emb-japan.go.jp",
    pageTitleEn: "Embassy of Japan in China",
    verifiedDate: TODAY
  }),
  make({
    id: "beijing-roast-duck",
    url: "https://english.beijing.gov.cn/livinginbeijing/dining/202005/t20200513_1896788.html",
    publisher: "Beijing Government",
    publisherUrl: "https://english.beijing.gov.cn",
    pageTitleEn: "Beijing roast duck — official dining guide",
    verifiedDate: TODAY
  }),
  make({
    id: "beijing-axis-snacks",
    url: "https://english.beijing.gov.cn/specials/centralaxis/sightseeingalongthecentralaxis/202206/t20220602_2728696.html",
    publisher: "Beijing Government",
    publisherUrl: "https://english.beijing.gov.cn",
    pageTitleEn: "Beijing central-axis old-Beijing snacks",
    verifiedDate: TODAY
  }),
  make({
    id: "shanghai-xiaolongbao",
    url: "https://english.shanghai.gov.cn/en-ExpressNewsClips-Videos-WhatsNew/20250217/9795ba943afe49f8992604bf20d5ae08.html",
    publisher: "Shanghai Government",
    publisherUrl: "https://english.shanghai.gov.cn",
    pageTitleEn: "Shanghai xiaolongbao — official dining feature",
    publishedDate: "2025-02-17",
    verifiedDate: TODAY
  }),
  make({
    id: "gz-foreigner-guide-pdf",
    url: "https://www.gz.gov.cn/attachment/7/7792/7792046/10199330.pdf",
    publisher: "Guangzhou Government",
    publisherUrl: "https://www.gz.gov.cn",
    pageTitleEn: "Guangzhou foreigner travel and dining guide (PDF)",
    verifiedDate: TODAY
  }),
  make({
    id: "blog-wanderinchina-alipay",
    url: "https://www.wanderinchina.com/survival-guide/useful-mobile-apps/alipay/",
    publisher: "WanderinChina",
    publisherUrl: "https://www.wanderinchina.com",
    pageTitleEn: "Alipay survival guide for foreign tourists",
    publishedDate: "2026-03",
    verifiedDate: TODAY,
    community: true
  }),
  make({
    id: "blog-chinaguidelines-tourcard",
    url: "https://chinaguidelines.com/en/posts/tour-card",
    publisher: "ChinaGuidelines",
    publisherUrl: "https://chinaguidelines.com",
    pageTitleEn: "Tour Card shutdown timeline",
    publishedDate: "2026",
    verifiedDate: TODAY,
    community: true
  }),
  make({
    id: "blog-hiddenchina-payments",
    url: "https://hiddenchinatravel.com/digital-survival-china-payment-guide/",
    publisher: "Hidden China Travel",
    publisherUrl: "https://hiddenchinatravel.com",
    pageTitleEn: "Digital survival — China payment guide",
    publishedDate: "2026",
    verifiedDate: TODAY,
    community: true
  }),
  make({
    id: "blog-hiddenchina-kyc",
    url: "https://hiddenchinatravel.com/alipay-wechat-pay-verification-failed/",
    publisher: "Hidden China Travel",
    publisherUrl: "https://hiddenchinatravel.com",
    pageTitleEn: "Alipay / WeChat verification failed — diagnosis",
    publishedDate: "2025-2026",
    verifiedDate: TODAY,
    community: true
  }),
  make({
    id: "blog-letstravel-alipay",
    url: "https://letstraveltochina.com/how-to-use-alipay-in-china/",
    publisher: "LetsTravelToChina",
    publisherUrl: "https://letstraveltochina.com",
    pageTitleEn: "How to use Alipay in China",
    publishedDate: "2026",
    verifiedDate: TODAY,
    community: true
  }),
  make({
    id: "blog-baoziinchina-wechat",
    url: "https://baoziinchina.com/how-to-set-up-wechat/",
    publisher: "Baozi in China",
    publisherUrl: "https://baoziinchina.com",
    pageTitleEn: "How to set up WeChat as a foreigner",
    publishedDate: "2026",
    verifiedDate: TODAY,
    community: true
  }),
  make({
    id: "blog-wildchina-alipay",
    url: "https://wildchina.com/2025/10/guide-to-using-alipay-2025/",
    publisher: "WildChina",
    publisherUrl: "https://wildchina.com",
    pageTitleEn: "Guide to using Alipay 2025",
    publishedDate: "2025-10",
    verifiedDate: TODAY,
    community: true
  }),
  make({
    id: "blog-wildchina-wechat",
    url: "https://wildchina.com/2025/05/wechat-pay-in-2025/",
    publisher: "WildChina",
    publisherUrl: "https://wildchina.com",
    pageTitleEn: "WeChat Pay in 2025",
    publishedDate: "2025-05",
    verifiedDate: TODAY,
    community: true
  }),
  make({
    id: "blog-travelchinawith-alipay",
    url: "https://travelchinawith.me/china-travel-how-tos/how-to-use-alipay-in-china/",
    publisher: "TravelChinaWith.Me",
    publisherUrl: "https://travelchinawith.me",
    pageTitleEn: "How to use Alipay in China — practical guide",
    publishedDate: "2026-03-11",
    verifiedDate: TODAY,
    community: true
  }),
  make({
    id: "blog-realchinatrip-wechat",
    url: "https://realchinatrip.com/blogs/tips/wechat-setup-guide-tourists",
    publisher: "RealChinaTrip",
    publisherUrl: "https://realchinatrip.com",
    pageTitleEn: "WeChat setup guide for tourists",
    publishedDate: "2026-03-24",
    verifiedDate: TODAY,
    community: true
  }),
  make({
    id: "blog-expatden-wechat",
    url: "https://www.expatden.com/china/wechat-pay/",
    publisher: "ExpatDen",
    publisherUrl: "https://www.expatden.com",
    pageTitleEn: "WeChat Pay — expat community guide",
    publishedDate: "2026-03-10",
    verifiedDate: TODAY,
    community: true
  }),
  make({
    id: "blog-fanketravel-payments",
    url: "https://fanketravel.com/blogs/blog/how-to-use-alipay-and-wechat-pay-as-a-tourist-in-china-2025-guide",
    publisher: "Fanke Travel",
    publisherUrl: "https://fanketravel.com",
    pageTitleEn: "Alipay & WeChat Pay tourist guide 2025",
    publishedDate: "2025",
    verifiedDate: TODAY,
    community: true
  }),
  make({
    id: "blog-ltl-alipay",
    url: "https://ltl-school.com/alipay-for-foreigners/",
    publisher: "LTL Mandarin School",
    publisherUrl: "https://ltl-school.com",
    pageTitleEn: "Alipay for foreigners",
    publishedDate: "2026",
    verifiedDate: TODAY,
    community: true
  }),
  make({
    id: "blog-ltl-wechat",
    url: "https://ltl-school.com/wechat-pay-for-foreigners/",
    publisher: "LTL Mandarin School",
    publisherUrl: "https://ltl-school.com",
    pageTitleEn: "WeChat Pay for foreigners",
    publishedDate: "2026",
    verifiedDate: TODAY,
    community: true
  }),
  make({
    id: "blog-travelofchina-alipay",
    url: "https://www.travelofchina.com/alipay-for-foreigners-china-2025-guide/",
    publisher: "TravelOfChina",
    publisherUrl: "https://www.travelofchina.com",
    pageTitleEn: "Alipay for foreigners — China 2025 guide",
    publishedDate: "2025",
    verifiedDate: TODAY,
    community: true
  }),
  make({
    id: "blog-cft-transit",
    url: "https://chinafortravelers.com/guides/china-visa-free-transit/",
    publisher: "ChinaForTravelers",
    publisherUrl: "https://chinafortravelers.com",
    pageTitleEn: "China visa-free transit — practitioner guide",
    publishedDate: "2025",
    verifiedDate: TODAY,
    community: true
  }),
  make({
    id: "blog-smartsh-faq",
    url: "https://www.smartshanghai.com/articles/shanghai-life/the-faq-china-visa-on-arrivals-need-to-know",
    publisher: "SmartShanghai",
    publisherUrl: "https://www.smartshanghai.com",
    pageTitleEn: "Visa on arrival — what to know",
    publishedDate: "2025",
    verifiedDate: TODAY,
    community: true
  }),
  make({
    id: "blog-thechinajourney",
    url: "https://www.thechinajourney.com/china-travel-tips/",
    publisher: "TheChinaJourney",
    publisherUrl: "https://www.thechinajourney.com",
    pageTitleEn: "China travel tips — accommodation, water, prescriptions, registration",
    publishedDate: "2025-2026",
    verifiedDate: TODAY,
    community: true
  }),
  make({
    id: "blog-rachelmeetschina",
    url: "https://rachelmeetschina.com/2024/10/29/traveling-to-china-how-to-connect-your-foreign-bank-card-to-the-alipay-and-wechat/",
    publisher: "Rachel Meets China",
    publisherUrl: "https://rachelmeetschina.com",
    pageTitleEn: "Connecting foreign bank cards to Alipay / WeChat",
    publishedDate: "2024-10-29",
    verifiedDate: TODAY,
    community: true
  }),
  make({
    id: "blog-cgl-publictransport",
    url: "https://chinaguidelines.com/en/posts/public-transport",
    publisher: "ChinaGuidelines",
    publisherUrl: "https://chinaguidelines.com",
    pageTitleEn: "Public transport for foreign tourists",
    publishedDate: "2026",
    verifiedDate: TODAY,
    community: true
  }),
  make({
    id: "blog-cgl-train",
    url: "https://chinaguidelines.com/en/posts/high-speed-train",
    publisher: "ChinaGuidelines",
    publisherUrl: "https://chinaguidelines.com",
    pageTitleEn: "High-speed train booking with foreign passport",
    publishedDate: "2026",
    verifiedDate: TODAY,
    community: true
  }),
  make({
    id: "blog-flyertalk-bjtaxi",
    url: "https://www.flyertalk.com/forum/china/1897228-beijing-airport-taxi-scam-attempt-taxi-information-desk.html",
    publisher: "FlyerTalk forum",
    publisherUrl: "https://www.flyertalk.com",
    pageTitleEn: "Beijing airport taxi scam reports",
    publishedDate: "ongoing",
    verifiedDate: TODAY,
    community: true
  }),
  make({
    id: "blog-beforeyougo-gz",
    url: "https://beforeyougotravels.com/destinations/guangzhou",
    publisher: "BeforeYouGoTravels",
    publisherUrl: "https://beforeyougotravels.com",
    pageTitleEn: "Guangzhou — taxi touts, QR fraud, Canton Fair impact",
    publishedDate: "2025-2026",
    verifiedDate: TODAY,
    community: true
  }),
  make({
    id: "blog-wise-didi",
    url: "https://wise.com/sg/blog/how-to-use-didi-china",
    publisher: "Wise",
    publisherUrl: "https://wise.com",
    pageTitleEn: "How to use DiDi in China",
    publishedDate: "2025-2026",
    verifiedDate: TODAY,
    community: true
  }),
  make({
    id: "blog-travelchinatips-shmetro",
    url: "https://travelchina.tips/blogs/practical-guides/shanghai-metro-faq-for-tourists",
    publisher: "TravelChina.tips",
    publisherUrl: "https://travelchina.tips",
    pageTitleEn: "Shanghai metro FAQ for tourists",
    publishedDate: "2025",
    verifiedDate: TODAY,
    community: true
  }),
  make({
    id: "blog-travelchinawith-taxi",
    url: "https://travelchinawith.me/china-travel-blog/taxi-and-didi-scams-in-china/",
    publisher: "TravelChinaWith.Me",
    publisherUrl: "https://travelchinawith.me",
    pageTitleEn: "Taxi and DiDi scams in China",
    publishedDate: "2025-2026",
    verifiedDate: TODAY,
    community: true
  }),
  make({
    id: "blog-alittleadrift-veg",
    url: "https://alittleadrift.com/vegetarian-food-in-china/",
    publisher: "A Little Adrift",
    publisherUrl: "https://alittleadrift.com",
    pageTitleEn: "Vegetarian food in China",
    publishedDate: "2024",
    verifiedDate: TODAY,
    community: true
  }),
  make({
    id: "blog-sinotales-allergies",
    url: "https://sinotales.com/interests/food-drink/first-time-travel-china-food-allergies/",
    publisher: "Sinotales",
    publisherUrl: "https://sinotales.com",
    pageTitleEn: "First-time travel — food allergies in China",
    publishedDate: "2025",
    verifiedDate: TODAY,
    community: true
  }),
  make({
    id: "blog-travelchinawith-allergies",
    url: "https://travelchinawith.me/china-travel-blog/survival-guide-for-food-allergies-in-china/",
    publisher: "TravelChinaWith.Me",
    publisherUrl: "https://travelchinawith.me",
    pageTitleEn: "Survival guide for food allergies in China",
    publishedDate: "2025-2026",
    verifiedDate: TODAY,
    community: true
  }),
  make({
    id: "blog-chinamike",
    url: "https://www.china-mike.com/china-travel-tips/avoiding-scams/",
    publisher: "China Mike",
    publisherUrl: "https://www.china-mike.com",
    pageTitleEn: "Avoiding scams — tea house and tourist traps",
    publishedDate: "2024-2025",
    verifiedDate: TODAY,
    community: true
  }),
  make({
    id: "blog-thechinaguide-medical",
    url: "https://www.thechinaguide.com/blog/healthcare-and-insurance",
    publisher: "TheChinaGuide",
    publisherUrl: "https://www.thechinaguide.com",
    pageTitleEn: "Healthcare and insurance in China",
    publishedDate: "2024",
    verifiedDate: TODAY,
    community: true
  }),
  make({
    id: "blog-expatden-shhospital",
    url: "https://www.expatden.com/china/hospital-in-shanghai/",
    publisher: "ExpatDen",
    publisherUrl: "https://www.expatden.com",
    pageTitleEn: "Hospitals in Shanghai — practical guide",
    publishedDate: "2024",
    verifiedDate: TODAY,
    community: true
  }),
  make({
    id: "blog-internationalinsurance",
    url: "https://www.internationalinsurance.com/countries/china/hospitals/",
    publisher: "International Insurance",
    publisherUrl: "https://www.internationalinsurance.com",
    pageTitleEn: "China hospitals — international department pricing",
    publishedDate: "2024",
    verifiedDate: TODAY,
    community: true
  }),
  make({
    id: "bj-subway-tap-2024",
    url: "https://english.beijing.gov.cn/livinginbeijing/transportation/beijingsubway/202409/t20240914_3891497.html",
    publisher: "Beijing Government",
    publisherUrl: "https://english.beijing.gov.cn",
    pageTitleEn: "Beijing subway contactless Visa/Mastercard tap (Sept 2024)",
    publishedDate: "2024-09-14",
    verifiedDate: TODAY
  }),
  make({
    id: "eyeshenzhen-octopus-interop",
    url: "https://www.eyeshenzhen.com/content/2024-04/01/content_30840321.htm",
    publisher: "EyeShenzhen",
    publisherUrl: "https://www.eyeshenzhen.com",
    pageTitleEn: "Shenzhen Tong / Octopus / Hu Tong Xing card interoperability",
    publishedDate: "2024-04",
    verifiedDate: TODAY
  }),
  make({
    id: "bj-medical-guide-quickservices",
    url: "https://english.beijing.gov.cn/quickguideservices/medicalguide/index.html",
    publisher: "Beijing Government",
    publisherUrl: "https://english.beijing.gov.cn",
    pageTitleEn: "Beijing emergency numbers (120 / 999 / 110)",
    publishedDate: "2024",
    verifiedDate: TODAY
  }),
  make({
    id: "noaa-wmo-beijing-54511",
    url: "https://www.ncei.noaa.gov/archive/accession/0253808/data/0-data/Region-2-WMO-Normals-9120/China/CSV/BEIJING_54511.csv",
    publisher: "NOAA NCEI",
    publisherUrl: "https://www.ncei.noaa.gov",
    pageTitleEn: "WMO Climate Normals 1991-2020 - Beijing 54511 station CSV",
    publishedDate: "2023-02-13",
    verifiedDate: TODAY
  }),
  make({
    id: "noaa-wmo-shanghai-baoshan-58362",
    url: "https://www.ncei.noaa.gov/archive/accession/0253808/data/0-data/Region-2-WMO-Normals-9120/China/CSV/SHANGHAI__BAOSHAN_58362.csv",
    publisher: "NOAA NCEI",
    publisherUrl: "https://www.ncei.noaa.gov",
    pageTitleEn: "WMO Climate Normals 1991-2020 - Shanghai Baoshan 58362 station CSV",
    publishedDate: "2023-02-13",
    verifiedDate: TODAY
  }),
  make({
    id: "noaa-wmo-guangzhou-59287",
    url: "https://www.ncei.noaa.gov/archive/accession/0253808/data/0-data/Region-2-WMO-Normals-9120/China/CSV/GUANGZHOU_59287.csv",
    publisher: "NOAA NCEI",
    publisherUrl: "https://www.ncei.noaa.gov",
    pageTitleEn: "WMO Climate Normals 1991-2020 - Guangzhou 59287 station CSV",
    publishedDate: "2023-02-13",
    verifiedDate: TODAY
  }),
  make({
    id: "beijing-climate-geography",
    url: "https://english.beijing.gov.cn/beijinginfo/facts/demographicgeography/202005/t20200518_1900888.html",
    publisher: "Beijing Government",
    publisherUrl: "https://english.beijing.gov.cn",
    pageTitleEn: "Beijing demographic geography and climate facts",
    publishedDate: "2020-05-18",
    verifiedDate: TODAY
  }),
  make({
    id: "beijing-spring-dust",
    url: "https://english.beijing.gov.cn/latest/news/202604/t20260402_4573114.html",
    publisher: "Beijing Government",
    publisherUrl: "https://english.beijing.gov.cn",
    pageTitleEn: "Rain before Qingming followed by Beijing spring blowing sand",
    publishedDate: "2026-04-02",
    verifiedDate: TODAY
  }),
  make({
    id: "beijing-heavy-air-pollution-plan",
    url: "https://english.beijing.gov.cn/latest/lawsandpolicies/202007/t20200723_1957677.html",
    publisher: "Beijing Government",
    publisherUrl: "https://english.beijing.gov.cn",
    pageTitleEn: "Heavy Air Pollution Contingency Plan of Beijing Municipality",
    publishedDate: "2020-07-23",
    verifiedDate: TODAY
  }),
  make({
    id: "shanghai-plum-rain",
    url: "https://english.shanghai.gov.cn/en-Latest-WhatsNew/20240618/571c88c3fab1486db0e94acd8fe91c31.html",
    publisher: "Shanghai Government",
    publisherUrl: "https://english.shanghai.gov.cn",
    pageTitleEn: "Shanghai braces for humid rainy season",
    publishedDate: "2024-06-18",
    verifiedDate: TODAY
  }),
  make({
    id: "shanghai-meteorological-regulations",
    url: "https://english.shanghai.gov.cn/en-LocalRules/20241219/22ad9440df404a4999d56a070667c26b.html",
    publisher: "Shanghai Government",
    publisherUrl: "https://english.shanghai.gov.cn",
    pageTitleEn: "Meteorological Regulations of Shanghai Municipality",
    publishedDate: "2024-12-19",
    verifiedDate: TODAY
  }),
  make({
    id: "guangzhou-climate-geography",
    url: "https://www.gz.gov.cn/zlgz/gzgk/zrdl/content/post_5725003.html",
    publisher: "Guangzhou Government",
    publisherUrl: "https://www.gz.gov.cn",
    pageTitleEn: "Guangzhou natural geography and climate characteristics",
    publishedDate: "2020-03-10",
    verifiedDate: TODAY
  }),
  make({
    id: "shenzhen-climate-seasons",
    url: "https://weather.sz.gov.cn/mobile/qixiangfuwu/qihoufuwu/qihouguanceyupinggu/qihougaikuang/content/mpost_3575919.html",
    publisher: "Shenzhen Meteorological Bureau",
    publisherUrl: "https://weather.sz.gov.cn",
    pageTitleEn: "Shenzhen climate overview and seasonal characteristics",
    publishedDate: "2024-05-15",
    verifiedDate: TODAY
  }),
  make({
    id: "shenzhen-back-south",
    url: "https://weather.sz.gov.cn/szsqxjwzgkml/szsqxjwzgkml/ywzsk/qxfwl/content/post_5613756.html",
    publisher: "Shenzhen Meteorological Bureau",
    publisherUrl: "https://weather.sz.gov.cn",
    pageTitleEn: "How return-south damp weather forms",
    publishedDate: "2015-11-17",
    verifiedDate: TODAY
  })
];

export const sources: Record<string, SourceCitation> = Object.fromEntries(
  list.map((s) => [s.id, s])
);

export const getSource = (id: string): SourceCitation | undefined => sources[id];
