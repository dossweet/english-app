export interface Expression {
  id: number;
  english: string;
  ipa: string;
  chinese: string;
  category: "smalltalk" | "business" | "slang" | "travel";
  tags: string[];
  examples: { english: string; chinese: string }[];
  pronunciationTips: string;
}

export const expressions: Expression[] = [
  // Small Talk
  {
    id: 1,
    english: "How's it going?",
    ipa: "/haʊz ɪt ˈɡoʊɪŋ/",
    chinese: "最近怎么样？",
    category: "smalltalk",
    tags: ["寒暄", "日常"],
    examples: [
      { english: "Hey Mike! How's it going?", chinese: "嘿 Mike！最近怎么样？" },
      { english: "Pretty good, thanks for asking!", chinese: "挺好的，谢谢关心！" }
    ],
    pronunciationTips: "'How's' 连读成 /haʊz/，it弱读为 /ɪt/"
  },
  {
    id: 2,
    english: "Long time no see!",
    ipa: "/lɒŋ taɪm nuː siː/",
    chinese: "好久不见！",
    category: "smalltalk",
    tags: ["重逢", "日常"],
    examples: [
      { english: "Long time no see! How have you been?", chinese: "好久不见！最近怎么样？" },
      { english: "Too long! We should catch up soon.", chinese: "太久了！我们该聚聚了。" }
    ],
    pronunciationTips: "'Long time' 要连读，no弱读为 /nuː/"
  },
  {
    id: 3,
    english: "What's up?",
    ipa: "/wɒts ʌp/",
    chinese: "咋样？/ 有啥新鲜的？",
    category: "smalltalk",
    tags: ["随意", "朋友"],
    examples: [
      { english: "Hey, what's up?", chinese: "嘿，咋样？" },
      { english: "Not much. You?", chinese: "没啥。你呢？" }
    ],
    pronunciationTips: "'What's' 弱读为 /wɒts/，非常口语化"
  },
  {
    id: 4,
    english: "Same old, same old.",
    ipa: "/seɪm oʊld ˌseɪm oʊld/",
    chinese: "老样子呗。",
    category: "smalltalk",
    tags: ["日常", "回应"],
    examples: [
      { english: "How's everything? Same old, same old.", chinese: "一切都好？老样子呗。" },
      { english: "Can't complain, same old here.", chinese: "没什么可抱怨的，老样子。" }
    ],
    pronunciationTips: "重复表示强调，语调平稳"
  },
  {
    id: 5,
    english: "How have you been?",
    ipa: "/haʊ hæv juː biːn/",
    chinese: "你最近还好吗？",
    category: "smalltalk",
    tags: ["关心", "正式"],
    examples: [
      { english: "Hey! How have you been?", chinese: "嘿！你最近还好吗？" },
      { english: "Pretty busy lately, but good overall.", chinese: "最近挺忙的，但整体还好。" }
    ],
    pronunciationTips: "'have' 弱读为 /hæv/，been /biːn/ 要拖长"
  },
  // Business
  {
    id: 6,
    english: "Let's touch base.",
    ipa: "/lets tʌtʃ beɪs/",
    chinese: "我们碰一下。",
    category: "business",
    tags: ["会议", "沟通"],
    examples: [
      { english: "Can we touch base next week?", chinese: "我们下周碰一下？" },
      { english: "Sure, let's touch base on the project.", chinese: "好的，我们碰下项目。" }
    ],
    pronunciationTips: "'touch base' 是固定表达，意思是简短沟通"
  },
  {
    id: 7,
    english: "Get the ball rolling.",
    ipa: "/ɡet ðə bɔːl ˈrəʊlɪŋ/",
    chinese: "启动项目/开始行动",
    category: "business",
    tags: ["启动", "行动"],
    examples: [
      { english: "We need to get the ball rolling on this.", chinese: "我们需要开始推进这个了。" },
      { english: "Let's get the ball rolling!", chinese: "让我们开始吧！" }
    ],
    pronunciationTips: "比喻开始一个过程，ball要轻读"
  },
  {
    id: 8,
    english: "Circle back to this.",
    ipa: "/ˈsɜːrkl bæk tuː ðɪs/",
    chinese: "回头再聊这个。",
    category: "business",
    tags: ["讨论", "延期"],
    examples: [
      { english: "Let's circle back to this later.", chinese: "我们回头再聊这个。" },
      { english: "Good point, let's circle back.", chinese: "好观点，回头再说。" }
    ],
    pronunciationTips: "'circle back' 意思是回到某个话题"
  },
  {
    id: 9,
    english: "Take this offline.",
    ipa: "/teɪk ðɪs ˈɒflaɪn/",
    chinese: "线下再说。",
    category: "business",
    tags: ["沟通", "私聊"],
    examples: [
      { english: "This is getting detailed, let's take it offline.", chinese: "这个越来越复杂了，我们线下再说。" },
      { english: "Good idea. Take it offline.", chinese: "好主意，线下聊。" }
    ],
    pronunciationTips: "'offline' 不是技术术语，意思是私下一对一聊"
  },
  {
    id: 10,
    english: "Can I pick your brain?",
    ipa: "/kæn aɪ pɪk jɔːr breɪn/",
    chinese: "能请教你一下吗？",
    category: "business",
    tags: ["请教", "咨询"],
    examples: [
      { english: "I have a quick question, can I pick your brain?", chinese: "有个小问题，能请教你一下吗？" },
      { english: "Sure, what's on your mind?", chinese: "当然，想问什么？" }
    ],
    pronunciationTips: "'pick your brain' 比喻请教别人的想法"
  },
  // Slang
  {
    id: 11,
    english: "No worries.",
    ipa: "/noʊ ˈwɜːriz/",
    chinese: "没关系。/ 没事。",
    category: "slang",
    tags: ["回应", "随意"],
    examples: [
      { english: "Sorry for being late! No worries.", chinese: "抱歉迟到了！没关系。" },
      { english: "No worries at all, take your time.", chinese: "完全不介意，慢慢来。" }
    ],
    pronunciationTips: "澳洲和英美都很常用，比 'It's OK' 更地道"
  },
  {
    id: 12,
    english: "I'm gonna pass on that.",
    ipa: "/aɪm ˈɡɒnə pæs ɒn ðæt/",
    chinese: "算了，我不去了。",
    category: "slang",
    tags: ["拒绝", "委婉"],
    examples: [
      { english: "Want to grab drinks after work? I'm gonna pass.", chinese: "下班喝一杯？算了不去。" },
      { english: "Thanks for the invite, but I'll pass this time.", chinese: "谢谢邀请，但这次算了。" }
    ],
    pronunciationTips: "'gonna' = going to，pass表示拒绝"
  },
  {
    id: 13,
    english: "That's a no-go.",
    ipa: "/ðæts ə ˈnoʊ ɡoʊ/",
    chinese: "这不行/这不可行。",
    category: "slang",
    tags: ["拒绝", "否定"],
    examples: [
      { english: "Launching tomorrow? That's a no-go.", chinese: "明天上线？这不行。" },
      { english: "The plan is a no-go without more budget.", chinese: "没有更多预算的话，这个计划不可行。" }
    ],
    pronunciationTips: "'no-go' 是固定搭配，表示不可行"
  },
  {
    id: 14,
    english: "I'm kinda busy.",
    ipa: "/aɪm ˈkaɪndə ˈbɪzi/",
    chinese: "我有点忙。",
    category: "slang",
    tags: ["委婉", "忙碌"],
    examples: [
      { english: "Wanna hang out tonight? I'm kinda busy.", chinese: "今晚出去玩吗？我有点忙。" },
      { english: "I'm kinda tied up at the moment.", chinese: "我这会儿有点脱不开身。" }
    ],
    pronunciationTips: "'kinda' = kind of，'busy' 要读成 /ˈbɪzi/"
  },
  {
    id: 15,
    english: "Sounds good to me.",
    ipa: "/saʊndz ɡʊd tuː miː/",
    chinese: "我觉得OK。",
    category: "slang",
    tags: ["同意", "日常"],
    examples: [
      { english: "Pizza for dinner? Sounds good to me!", chinese: "晚饭吃披萨？我觉得OK！" },
      { english: "Let's meet at 7. Sounds good to me.", chinese: "我们7点见吧。没问题。" }
    ],
    pronunciationTips: "'sounds' 弱读为 /saʊndz/，非常口语"
  },
  // Travel
  {
    id: 16,
    english: "I'm a bit lost.",
    ipa: "/aɪm ə bɪt lɒst/",
    chinese: "我有点迷路了。",
    category: "travel",
    tags: ["问路", "困境"],
    examples: [
      { english: "Excuse me, I'm a bit lost. Where is the station?", chinese: "打扰一下，我有点迷路。火车站在哪？" },
      { english: "Can you help me? I'm completely lost.", chinese: "你能帮帮我吗？我完全迷路了。" }
    ],
    pronunciationTips: "'lost' 尾音 /lɒst/ 要到位"
  },
  {
    id: 17,
    english: "Can you recommend a good place?",
    ipa: "/kæn juː ˌrekəˈmend ə ɡʊd pleɪs/",
    chinese: "你能推荐个好地方吗？",
    category: "travel",
    tags: ["推荐", "询问"],
    examples: [
      { english: "Any good restaurants? Can you recommend?", chinese: "有什么好吃的餐厅吗？能推荐一下吗？" },
      { english: "What do you recommend for sightseeing?", chinese: "你觉得有什么值得一看的？" }
    ],
    pronunciationTips: "'recommend' 读 /ˌrekəˈmend/，重音在第二音节"
  },
  {
    id: 18,
    english: "I'll take the check, please.",
    ipa: "/aɪl teɪk ðə tʃek pliːz/",
    chinese: "买单！",
    category: "travel",
    tags: ["餐厅", "付账"],
    examples: [
      { english: "Server! I'll take the check, please.", chinese: "服务员！买单！" },
      { english: "We'd like to pay the bill, please.", chinese: "我们想结账。" }
    ],
    pronunciationTips: "'check' 在这里是账单，不是检查"
  },
  {
    id: 19,
    english: "Is this seat taken?",
    ipa: "/ɪz ðɪs siːt ˈteɪkən/",
    chinese: "这个座位有人吗？",
    category: "travel",
    tags: ["询问", "公共场所"],
    examples: [
      { english: "Is this seat taken? Oh sorry, didn't see you there.", chinese: "这个座位有人吗？哦抱歉，没看到你。" },
      { english: "I think this seat is free.", chinese: "我觉得这个座位是空的。" }
    ],
    pronunciationTips: "'taken' = 被占用，'Is this' 连读为 /ɪzðɪs/"
  },
  {
    id: 20,
    english: "Where can I find a taxi?",
    ipa: "/wer kæn aɪ faɪnd ə ˈtæksi/",
    chinese: "哪里能打到车？",
    category: "travel",
    tags: ["交通", "问路"],
    examples: [
      { english: "Excuse me, where can I find a taxi?", chinese: "打扰一下，哪里能打到车？" },
      { english: "Is there a taxi stand nearby?", chinese: "附近有出租车停靠点吗？" }
    ],
    pronunciationTips: "'taxi' 在英美口音中发音略有不同，美音 /ˈtæksi/"
  },
  // More Small Talk
  {
    id: 21,
    english: "How do you do?",
    ipa: "/haʊ duː juː duː/",
    chinese: "您好。（正式问候）",
    category: "smalltalk",
    tags: ["正式", "寒暄"],
    examples: [
      { english: "How do you do? Nice to meet you.", chinese: "您好！很高兴认识您。" },
      { english: "Pleased to meet you, how do you do?", chinese: "很高兴认识您，您好！" }
    ],
    pronunciationTips: "这是正式问候，答句也说 'How do you do?'"
  },
  {
    id: 22,
    english: "Fancy meeting you here!",
    ipa: "/ˈfænsi ˈmiːtɪŋ juː hɪr/",
    chinese: "竟然在这儿遇到你！",
    category: "smalltalk",
    tags: ["惊喜", "重逢"],
    examples: [
      { english: "Fancy meeting you here! What a surprise!", chinese: "竟然在这儿遇到你！太惊喜了！" },
      { english: "Small world! Fancy meeting you here.", chinese: "这世界真小！竟然遇到你。" }
    ],
    pronunciationTips: "'Fancy' 重读，表达惊喜语气"
  },
  {
    id: 23,
    english: "What's new with you?",
    ipa: "/wɒts njuː wɪð juː/",
    chinese: "你最近有什么新鲜事吗？",
    category: "smalltalk",
    tags: ["询问", "日常"],
    examples: [
      { english: "Hey! What's new with you?", chinese: "嘿！最近有什么新鲜事？" },
      { english: "Nothing much, what's new with you?", chinese: "没什么，你呢？" }
    ],
    pronunciationTips: "'What's new' 语调上扬，new要清晰"
  },
  {
    id: 24,
    english: "It's a pleasure to meet you.",
    ipa: "/ɪts ə ˈpleʒər tuː miːt juː/",
    chinese: "很荣幸认识您。",
    category: "smalltalk",
    tags: ["正式", "礼貌"],
    examples: [
      { english: "It's a pleasure to meet you, Mr. Chen.", chinese: "很荣幸认识您，陈先生。" },
      { english: "The pleasure is all mine.", chinese: "我才是荣幸。" }
    ],
    pronunciationTips: "注意 'pleasure' 的 /ˈpleʒər/ 发音"
  },
  {
    id: 25,
    english: "I gotta run.",
    ipa: "/aɪ ˈɡɒtə rʌn/",
    chinese: "我得走了。",
    category: "smalltalk",
    tags: ["告别", "匆忙"],
    examples: [
      { english: "It's getting late, I gotta run!", chinese: "天不早了，我得走了！" },
      { english: "I gotta run, see you tomorrow!", chinese: "我得走了，明天见！" }
    ],
    pronunciationTips: "'gotta' = got to = 必须，run 表示离开"
  },
  // More Business
  {
    id: 26,
    english: "Let's take this offline.",
    ipa: "/lets teɪk ðɪs ˈɒflaɪn/",
    chinese: "我们线下讨论。",
    category: "business",
    tags: ["沟通", "私聊"],
    examples: [
      { english: "This topic is complex, let's take it offline.", chinese: "这个话题比较复杂，我们线下讨论。" },
      { english: "Good point. Let's discuss this after the meeting.", chinese: "好观点，会后我们讨论。" }
    ],
    pronunciationTips: "'offline' 比喻不在公开场合讨论"
  },
  {
    id: 27,
    english: "I'm under a tight deadline.",
    ipa: "/aɪm ˈʌndər ə taɪt ˈdedlaɪn/",
    chinese: "我截稿日期很紧。",
    category: "business",
    tags: ["忙碌", "压力"],
    examples: [
      { english: "Sorry, I can't join. I'm under a tight deadline.", chinese: "抱歉去不了，我截稿日期很紧。" },
      { english: "The deadline is tomorrow. I'm swamped.", chinese: "明天就是截止日了，我忙疯了。" }
    ],
    pronunciationTips: "'deadline' 重音在 first，/ˈdedlaɪn/"
  },
  {
    id: 28,
    english: "Let's sync up.",
    ipa: "/lets sɪŋk ʌp/",
    chinese: "我们同步一下。",
    category: "business",
    tags: ["会议", "沟通"],
    examples: [
      { english: "Can we sync up tomorrow about the project?", chinese: "我们明天同步一下项目？" },
      { english: "Sure, let's sync up on Friday.", chinese: "好的，我们周五碰一下。" }
    ],
    pronunciationTips: "'sync up' 意思是同步进度、对齐信息"
  },
  {
    id: 29,
    english: "I'll follow up on that.",
    ipa: "/aɪl ˈfɒloʊ ʌp ɒn ðæt/",
    chinese: "我会跟进这件事。",
    category: "business",
    tags: ["承诺", "行动"],
    examples: [
      { english: "Don't worry, I'll follow up on that.", chinese: "别担心，我会跟进这件事。" },
      { english: "Please follow up with the client today.", chinese: "请今天跟进一下客户。" }
    ],
    pronunciationTips: "'follow up' 意思是持续跟进"
  },
  {
    id: 30,
    english: "Let's table this for now.",
    ipa: "/lets ˈteɪbl ðɪs fɔːr naʊ/",
    chinese: "我们先搁置这个。",
    category: "business",
    tags: ["延期", "会议"],
    examples: [
      { english: "This needs more discussion, let's table it.", chinese: "这个需要更多讨论，我们先搁置。" },
      { english: "Can we table this and move on?", chinese: "我们先放一放，继续下一个？" }
    ],
    pronunciationTips: "'table' 在美式英语是搁置，英式英语是提上日程"
  },
];

export const categories = [
  { id: "all", label: "全部", emoji: "🌐" },
  { id: "smalltalk", label: "Small Talk", emoji: "💬" },
  { id: "business", label: "Business", emoji: "💼" },
  { id: "slang", label: "Slang", emoji: "😎" },
  { id: "travel", label: "Travel", emoji: "✈️" },
,
  {
    id: 31,
    english: "I'm all ears.",
    ipa: "/aɪm ɔːl ɪrz/",
    chinese: "洗耳恭听。",
    category: "smalltalk",
    tags: ["倾听", "沟通"],
    examples: [
      { english: "Tell me what happened. I'm all ears.", chinese: "告诉我发生了什么。" },
      { english: "You have my attention. I'm all ears.", chinese: "我在认真听呢。" }
    ],
    pronunciationTips: "'ears' 读 /ɪrz/，'all' 拖长表示强调"
  },
  {
    id: 32,
    english: "Speak of the devil.",
    ipa: "/spiːk əv ðə ˈdevəl/",
    chinese: "说曹操曹操到。",
    category: "smalltalk",
    tags: ["巧合", "日常"],
    examples: [
      { english: "Speak of the devil! We were just talking about you.", chinese: "说曹操曹操到！" },
      { english: "Oh speak of the devil here comes Tom.", chinese: "哦说曹操曹操到。" }
    ],
    pronunciationTips: "'of the' 弱读为 /əv ðə/"
  },
  {
    id: 33,
    english: "I'm just pulling your leg.",
    ipa: "/aɪm dʒʌst ˈpʊlɪŋ jɔːr leɡ/",
    chinese: "我开玩笑的啦。",
    category: "smalltalk",
    tags: ["玩笑", "幽默"],
    examples: [
      { english: "You won the lottery! Just kidding I'm pulling your leg.", chinese: "你中彩票了！开玩笑的。" },
      { english: "Don't take it seriously I was just pulling your leg.", chinese: "别当真跟你开玩笑呢。" }
    ],
    pronunciationTips: "'pulling' /ˈpʊlɪŋ/"
  },
  {
    id: 34,
    english: "I'm feeling under the weather.",
    ipa: "/aɪm ˈfiːlɪŋ ˈʌndər ðə ˈweðər/",
    chinese: "我身体不太舒服。",
    category: "smalltalk",
    tags: ["健康", "日常"],
    examples: [
      { english: "I'm feeling under the weather today.", chinese: "今天身体不太舒服。" },
      { english: "She's a bit under the weather.", chinese: "她不太舒服。" }
    ],
    pronunciationTips: "'under the weather' 是习语"
  },
  {
    id: 35,
    english: "I'll keep that in mind.",
    ipa: "/aɪl kiːp ðæt ɪn maɪnd/",
    chinese: "我会记住的。",
    category: "smalltalk",
    tags: ["回复", "承诺"],
    examples: [
      { english: "Thanks for the advice I'll keep that in mind.", chinese: "谢谢建议我会记住的。" },
      { english: "Good point. I'll keep that in mind for next time.", chinese: "好观点下次我会注意。" }
    ],
    pronunciationTips: "'keep' 重读"
  },
  {
    id: 36,
    english: "You rock!",
    ipa: "/juː rɒk/",
    chinese: "你太棒了！",
    category: "smalltalk",
    tags: ["赞美", "鼓励"],
    examples: [
      { english: "Thanks for helping me move. You rock!", chinese: "谢谢你帮我搬家！" },
      { english: "You finished early? You rock!", chinese: "你提前完成了？太棒了！" }
    ],
    pronunciationTips: "'rock' 短促有力"
  },
  {
    id: 37,
    english: "Don't get me started.",
    ipa: "/doʊnt ɡet miː ˈstɑːrtɪd/",
    chinese: "别提了。",
    category: "smalltalk",
    tags: ["抱怨", "情绪"],
    examples: [
      { english: "How was your commute? Don't get me started!", chinese: "通勤怎么样？别提了！" },
      { english: "The meeting was... Don't get me started.", chinese: "那个会……别提了。" }
    ],
    pronunciationTips: "'don't get me' 连读"
  },
  {
    id: 38,
    english: "That's on me.",
    ipa: "/ðæts ɒn miː/",
    chinese: "是我的错。",
    category: "smalltalk",
    tags: ["道歉", "认错"],
    examples: [
      { english: "Sorry I forgot your birthday. That's on me.", chinese: "抱歉忘了你生日是我的错。" },
      { english: "Don't blame him. That's on me.", chinese: "别怪他是我的问题。" }
    ],
    pronunciationTips: "'on me' 重读表示承担责任"
  },
  {
    id: 39,
    english: "You can say that again.",
    ipa: "/juː kæn seɪ ðæt əˈɡen/",
    chinese: "说得太对了。",
    category: "smalltalk",
    tags: ["同意", "强调"],
    examples: [
      { english: "This weather is freezing! You can say that again.", chinese: "这天气冷死了说得太对了！" },
      { english: "The project is behind. You can say that again.", chinese: "项目严重落后了可不是嘛。" }
    ],
    pronunciationTips: "'again' /əˈɡen/"
  },
  {
    id: 40,
    english: "Fat chance!",
    ipa: "/fæt tʃæns/",
    chinese: "想得美！",
    category: "smalltalk",
    tags: ["拒绝", "嘲讽"],
    examples: [
      { english: "Think he'll apologize? Fat chance!", chinese: "他会道歉想得美！" },
      { english: "Fat chance of getting a raise this year.", chinese: "今年想涨薪没门。" }
    ],
    pronunciationTips: "'fat' 重读表示彻底否定"
  },
  {
    id: 41,
    english: "I'm not gonna lie...",
    ipa: "/aɪm nɒt ˈɡʌnə laɪ/",
    chinese: "说实话……",
    category: "smalltalk",
    tags: ["诚实", "表达"],
    examples: [
      { english: "I'm not gonna lie that movie was terrible.", chinese: "说实话那电影太烂了。" },
      { english: "I'm not gonna lie I was really nervous.", chinese: "说实话我当时真的很紧张。" }
    ],
    pronunciationTips: "'gonna' = going to"
  },
  {
    id: 42,
    english: "I don't buy it.",
    ipa: "/aɪ doʊnt baɪ ɪt/",
    chinese: "我不信。",
    category: "smalltalk",
    tags: ["怀疑", "质疑"],
    examples: [
      { english: "He said he was working late. I don't buy it.", chinese: "他说在加班我不信。" },
      { english: "That explanation sounds fishy. I don't buy it.", chinese: "那个解释不太对劲。" }
    ],
    pronunciationTips: "'don't' 和 'buy' 都重读"
  },
  {
    id: 43,
    english: "Go figure.",
    ipa: "/ɡoʊ ˈfɪɡjər/",
    chinese: "谁知道呢。",
    category: "smalltalk",
    tags: ["感慨", "无奈"],
    examples: [
      { english: "He quit after getting promoted. Go figure.", chinese: "他刚升职就辞职了真搞不懂。" },
      { english: "The computer crashed right before my deadline. Go figure.", chinese: "电脑在截止前崩溃了。" }
    ],
    pronunciationTips: "'figure' /ˈfɪɡjər/"
  },
  {
    id: 44,
    english: "I owe you one.",
    ipa: "/aɪ oʊ juː wʌn/",
    chinese: "我欠你一个人情。",
    category: "smalltalk",
    tags: ["感谢", "人情"],
    examples: [
      { english: "Thanks for covering my shift. I owe you one!", chinese: "谢谢你帮我代班欠你个人情！" },
      { english: "You really helped me out. I owe you one.", chinese: "你真的帮了我大忙。" }
    ],
    pronunciationTips: "'owe you' 连读为 /oʊ ju/"
  },
  {
    id: 45,
    english: "I'm just saying.",
    ipa: "/aɪm dʒʌst ˈseɪɪŋ/",
    chinese: "随口一说。",
    category: "smalltalk",
    tags: ["缓和", "表态"],
    examples: [
      { english: "Not trying to offend you I'm just saying.", chinese: "不是想冒犯你。" },
      { english: "Maybe we should try a different approach. I'm just saying.", chinese: "也许该换个方法。" }
    ],
    pronunciationTips: "语气放轻"
  },
  {
    id: 46,
    english: "I'm swamped.",
    ipa: "/aɪm swɒmpt/",
    chinese: "忙得不可开交。",
    category: "smalltalk",
    tags: ["忙碌", "压力"],
    examples: [
      { english: "Can't talk now I'm swamped with work.", chinese: "现在没法聊忙得不可开交。" },
      { english: "I've been swamped all week.", chinese: "忙了一整周了。" }
    ],
    pronunciationTips: "'swamped' /swɒmpt/"
  },
  {
    id: 47,
    english: "Hang in there.",
    ipa: "/hæŋ ɪn ðer/",
    chinese: "坚持住。",
    category: "smalltalk",
    tags: ["鼓励", "安慰"],
    examples: [
      { english: "I know it's tough. Just hang in there.", chinese: "我知道很难坚持住。" },
      { english: "Hang in there! Things will get better.", chinese: "坚持住一切都会好的。" }
    ],
    pronunciationTips: "'hang' 的 /hæŋ/ 要发出鼻音"
  },
  {
    id: 48,
    english: "Take your time.",
    ipa: "/teɪk jɔːr taɪm/",
    chinese: "慢慢来。",
    category: "smalltalk",
    tags: ["安慰", "耐心"],
    examples: [
      { english: "No rush at all. Take your time.", chinese: "完全不急慢慢来。" },
      { english: "Take your time with the decision.", chinese: "做决定不着急。" }
    ],
    pronunciationTips: "'your time' 拖长表示不急"
  },
  {
    id: 49,
    english: "I swear I'm not lying!",
    ipa: "/aɪ swer aɪm nɒt ˈlaɪɪŋ/",
    chinese: "我发誓我没说谎！",
    category: "smalltalk",
    tags: ["强调", "保证"],
    examples: [
      { english: "I saw a UFO last night I swear!", chinese: "我昨晚看到UFO了我发誓！" },
      { english: "It really cost that much. I swear!", chinese: "真的花了那么多钱！" }
    ],
    pronunciationTips: "'swear' 要重读"
  },
  {
    id: 50,
    english: "I'm with you on that.",
    ipa: "/aɪm wɪð juː ɒn ðæt/",
    chinese: "我同意你。",
    category: "smalltalk",
    tags: ["同意", "支持"],
    examples: [
      { english: "I think we should postpone. I'm with you.", chinese: "我觉得应该推迟我同意。" },
      { english: "Whatever you decide I'm with you.", chinese: "不管怎样我都支持。" }
    ],
    pronunciationTips: "'with you' 连读为 /wɪð ju/"
  },
  {
    id: 51,
    english: "I've had it up to here.",
    ipa: "/aɪv hæd ɪt ʌp tuː hɪr/",
    chinese: "我受够了。",
    category: "smalltalk",
    tags: ["愤怒", "爆发"],
    examples: [
      { english: "I've had it up to here with their excuses.", chinese: "他们的借口我听够了。" },
      { english: "This noise is driving me crazy!", chinese: "这噪音快把我逼疯了！" }
    ],
    pronunciationTips: "'up to here' 配合手势"
  },
  {
    id: 52,
    english: "No hard feelings.",
    ipa: "/noʊ hɑːrd ˈfiːlɪŋz/",
    chinese: "别往心里去。",
    category: "smalltalk",
    tags: ["和解", "宽慰"],
    examples: [
      { english: "Sorry about the argument. No hard feelings?", chinese: "刚才吵架的事抱歉了。" },
      { english: "We lost the game but no hard feelings.", chinese: "输了比赛但没事。" }
    ],
    pronunciationTips: "'hard feelings' 重读在 'feelings'"
  },
  {
    id: 53,
    english: "That's the last straw.",
    ipa: "/ðæts ðə læst strɔː/",
    chinese: "忍无可忍。",
    category: "smalltalk",
    tags: ["愤怒", "爆发"],
    examples: [
      { english: "He was late again. That's the last straw.", chinese: "他又迟到了忍无可忍。" },
      { english: "When they canceled that was the last straw.", chinese: "他们取消时我忍无可忍了。" }
    ],
    pronunciationTips: "'last straw' 拖长"
  },
  {
    id: 54,
    english: "I'll believe it when I see it.",
    ipa: "/aɪl bɪˈliːv ɪt wen aɪ siː ɪt/",
    chinese: "眼见为实。",
    category: "smalltalk",
    tags: ["怀疑", "保留"],
    examples: [
      { english: "He said he'll finish by Friday. I'll believe it when I see it.", chinese: "他说周五前能搞定我看了才信。" },
      { english: "They promised a raise. I'll believe it when I see it.", chinese: "他们承诺加薪了看到再说吧。" }
    ],
    pronunciationTips: "带怀疑 'believe' 重读"
  },
  {
    id: 55,
    english: "That's easier said than done.",
    ipa: "/ðæts ˈiːziər sed ðæn dʌn/",
    chinese: "说起来容易做起来难。",
    category: "smalltalk",
    tags: ["现实", "建议"],
    examples: [
      { english: "Just stay calm during the interview? Easier said than done!", chinese: "面试保持冷静说起来容易做起来难！" },
      { english: "You should forgive him. Easier said than done.", chinese: "你应该原谅他。" }
    ],
    pronunciationTips: "'easier' 三音节 /ˈiːziər/"
  },
  {
    id: 56,
    english: "I'll sleep on it.",
    ipa: "/aɪl sliːp ɒn ɪt/",
    chinese: "我考虑一下。",
    category: "smalltalk",
    tags: ["决定", "慎重"],
    examples: [
      { english: "That's a big decision. Let me sleep on it.", chinese: "这个决定不小我考虑一下。" },
      { english: "Not sure about the offer? Sleep on it.", chinese: "不确定先考虑考虑。" }
    ],
    pronunciationTips: "'sleep on' 连读"
  },
  {
    id: 57,
    english: "I'm on the fence.",
    ipa: "/aɪm ɒn ðə fens/",
    chinese: "还在犹豫。",
    category: "smalltalk",
    tags: ["犹豫", "决定"],
    examples: [
      { english: "Are you moving? I'm still on the fence.", chinese: "你要搬走还在犹豫。" },
      { english: "I'm on the fence about buying this car.", chinese: "买不买车还在纠结。" }
    ],
    pronunciationTips: "'on the' 弱读为 /ɒnðə/"
  },
  {
    id: 58,
    english: "It slipped my mind.",
    ipa: "/ɪt slɪpt maɪn maɪnd/",
    chinese: "我忘了。",
    category: "smalltalk",
    tags: ["道歉", "忘记"],
    examples: [
      { english: "Sorry I didn't call. It slipped my mind.", chinese: "抱歉没打电话我完全忘了。" },
      { english: "Did you buy milk? It slipped my mind.", chinese: "你买牛奶了吗我忘了。" }
    ],
    pronunciationTips: "'slipped' 轻读 'mind' 重读"
  },
  {
    id: 59,
    english: "That rings a bell.",
    ipa: "/ðæt rɪŋz ə bel/",
    chinese: "好耳熟。",
    category: "smalltalk",
    tags: ["回忆", "认知"],
    examples: [
      { english: "I've heard that name before. It rings a bell.", chinese: "我以前听过这个名字好耳熟。" },
      { english: "That song rings a bell.", chinese: "那首歌听起来耳熟。" }
    ],
    pronunciationTips: "'rings a bell' 比喻唤起记忆"
  },
  {
    id: 60,
    english: "I'm drawing a blank.",
    ipa: "/aɪm ˈdrɔːɪŋ ə blæŋk/",
    chinese: "脑子一片空白。",
    category: "smalltalk",
    tags: ["忘记", "困惑"],
    examples: [
      { english: "I know the answer but I'm drawing a blank.", chinese: "我知道答案但脑子一片空白。" },
      { english: "What's his name? I'm drawing a blank.", chinese: "他叫什么来着我想不起来。" }
    ],
    pronunciationTips: "'drawing a blank' 比喻什么都记不起来"
  },
  {
    id: 61,
    english: "I'm in the same boat.",
    ipa: "/aɪm ɪn ðə seɪm boʊt/",
    chinese: "我也一样。",
    category: "smalltalk",
    tags: ["共鸣", "安慰"],
    examples: [
      { english: "You're struggling with deadlines? Same boat.", chinese: "你在为截止日期发愁我也一样。" },
      { english: "We're all in the same boat here.", chinese: "我们都面临同样的情况。" }
    ],
    pronunciationTips: "'in the same boat' 比喻处境相同"
  },
  {
    id: 62,
    english: "Don't jinx it!",
    ipa: "/doʊnt dʒɪŋks ɪt/",
    chinese: "别乌鸦嘴！",
    category: "smalltalk",
    tags: ["迷信", "玩笑"],
    examples: [
      { english: "We're going to win! Don't jinx it!", chinese: "我们肯定赢了别乌鸦嘴！" },
      { english: "The flight is on time. Don't jinx it!", chinese: "航班是准点的别乌鸦嘴！" }
    ],
    pronunciationTips: "'jinx' 意思是带来霉运"
  },
  {
    id: 63,
    english: "That's a bummer.",
    ipa: "/ðæts ə ˈbʌmər/",
    chinese: "真倒霉。",
    category: "smalltalk",
    tags: ["失望", "安慰"],
    examples: [
      { english: "The concert got canceled? That's a bummer.", chinese: "演唱会取消了真扫兴。" },
      { english: "I lost my wallet. That's a bummer.", chinese: "我丢钱包了太倒霉了。" }
    ],
    pronunciationTips: "'bummer' /ˈbʌmər/"
  },
  {
    id: 64,
    english: "What's the damage?",
    ipa: "/wɒts ðə ˈdæmɪdʒ/",
    chinese: "多少钱？",
    category: "smalltalk",
    tags: ["付账", "玩笑"],
    examples: [
      { english: "Great dinner! What's the damage?", chinese: "晚餐很棒多少钱？" },
      { english: "After the shopping spree what's the damage?", chinese: "大采购后花了多少？" }
    ],
    pronunciationTips: "'damage' 在这里是玩笑说法"
  },
  {
    id: 65,
    english: "I'm beat.",
    ipa: "/aɪm biːt/",
    chinese: "我累死了。",
    category: "smalltalk",
    tags: ["疲惫", "日常"],
    examples: [
      { english: "After the marathon I'm totally beat.", chinese: "马拉松之后我累死了。" },
      { english: "Long day at work. I'm beat.", chinese: "忙了一天我累坏了。" }
    ],
    pronunciationTips: "'beat' 是非常累的口语表达"
  },
  {
    id: 66,
    english: "Hold your horses.",
    ipa: "/hoʊld jɔːr ˈhɔːrsɪz/",
    chinese: "别着急。",
    category: "smalltalk",
    tags: ["耐心", "阻止"],
    examples: [
      { english: "Hold your horses! We're not ready yet.", chinese: "别着急我们还没准备好。" },
      { english: "I know you're excited but hold your horses.", chinese: "我知道你很激动但先等等。" }
    ],
    pronunciationTips: "原意是勒住马缰绳"
  },
  {
    id: 67,
    english: "Knock on wood.",
    ipa: "/nɒk ɒn wʊd/",
    chinese: "老天保佑。",
    category: "smalltalk",
    tags: ["迷信", "好运"],
    examples: [
      { english: "I've never been sick this year knock on wood.", chinese: "今年都没生过病老天保佑。" },
      { english: "The project is going smoothly. Knock on wood.", chinese: "项目进展顺利。" }
    ],
    pronunciationTips: "西方人敲木头祈求好运"
  },
  {
    id: 68,
    english: "Bury the hatchet.",
    ipa: "/ˈberi ðə ˈhætʃɪt/",
    chinese: "和解。",
    category: "smalltalk",
    tags: ["和解", "友谊"],
    examples: [
      { english: "Let's bury the hatchet and move on.", chinese: "我们和解吧往前看。" },
      { english: "They finally buried the hatchet after years.", chinese: "吵了多年后终于和好了。" }
    ],
    pronunciationTips: "'hatchet' /ˈhætʃɪt/"
  },
  {
    id: 69,
    english: "It's a small world.",
    ipa: "/ɪts ə smɔːl wɜːrld/",
    chinese: "世界真小。",
    category: "smalltalk",
    tags: ["巧合", "感慨"],
    examples: [
      { english: "We went to the same school? Small world!", chinese: "我们上过同一所学校世界真小！" },
      { english: "I met your cousin in Paris! Small world!", chinese: "我在巴黎遇到了你表妹！" }
    ],
    pronunciationTips: "'world' /wɜːrld/"
  },
  {
    id: 70,
    english: "Fair enough.",
    ipa: "/fer ɪˈnʌf/",
    chinese: "有道理。",
    category: "smalltalk",
    tags: ["同意", "让步"],
    examples: [
      { english: "I think we should wait. Fair enough.", chinese: "我觉得应该等等有道理。" },
      { english: "You have a point. Fair enough.", chinese: "你说得有道理。" }
    ],
    pronunciationTips: "'fair' /fer/"
  },
  {
    id: 71,
    english: "Let's cut to the chase.",
    ipa: "/lets kʌt tuː ðə tʃeɪs/",
    chinese: "开门见山吧。",
    category: "business",
    tags: ["会议", "效率"],
    examples: [
      { english: "We don't have much time. Let's cut to the chase.", chinese: "时间不多开门见山吧。" },
      { english: "Cut to the chase what's the budget?", chinese: "直说吧预算是多少？" }
    ],
    pronunciationTips: "'cut to' 连读"
  },
  {
    id: 72,
    english: "Put a pin in that.",
    ipa: "/pʊt ə pɪn ɪn ðæt/",
    chinese: "先放一放。",
    category: "business",
    tags: ["会议", "暂停"],
    examples: [
      { english: "Good point let's put a pin in that for now.", chinese: "好观点先放一放。" },
      { english: "Let's put a pin in this topic and move on.", chinese: "这个话题先记着。" }
    ],
    pronunciationTips: "'put a pin' 连读"
  },
  {
    id: 73,
    english: "I'm on board with that.",
    ipa: "/aɪm ɒn bɔːrd wɪð ðæt/",
    chinese: "我同意这个。",
    category: "business",
    tags: ["同意", "表态"],
    examples: [
      { english: "That plan sounds great. I'm on board!", chinese: "这个计划听起来很棒我赞成！" },
      { english: "Is everyone on board with this approach?", chinese: "大家都同意吗？" }
    ],
    pronunciationTips: "'on board' 连读"
  },
  {
    id: 74,
    english: "Tighten our belts.",
    ipa: "/ˈtaɪtn aʊr belts/",
    chinese: "勒紧裤腰带。",
    category: "business",
    tags: ["财务", "节约"],
    examples: [
      { english: "Revenue is down. We need to tighten our belts.", chinese: "收入下降了得省着点。" },
      { english: "We're tightening our belts across the board.", chinese: "我们全面缩减开支。" }
    ],
    pronunciationTips: "'tighten' /ˈtaɪtn/"
  },
  {
    id: 75,
    english: "That's a tall order.",
    ipa: "/ðæts ə tɔːl ˈɔːrdər/",
    chinese: "要求太高了。",
    category: "business",
    tags: ["挑战", "压力"],
    examples: [
      { english: "You want it done by tomorrow? Tall order.", chinese: "明天就要要求有点高。" },
      { english: "50% growth in one quarter is a tall order.", chinese: "一季增长50%非常困难。" }
    ],
    pronunciationTips: "'tall order' 重读"
  },
  {
    id: 76,
    english: "It's not rocket science.",
    ipa: "/ɪts nɒt ˈrɒkɪt ˈsaɪəns/",
    chinese: "这又不难。",
    category: "business",
    tags: ["简单", "鼓励"],
    examples: [
      { english: "Don't overthink it. It's not rocket science.", chinese: "别想太多这又不难。" },
      { english: "Using this software isn't rocket science.", chinese: "用这个软件又不难。" }
    ],
    pronunciationTips: "'rocket science' /ˈrɒkɪt ˈsaɪəns/"
  },
  {
    id: 77,
    english: "Think outside the box.",
    ipa: "/θɪŋk ˈaʊtsaɪd ðə bɒks/",
    chinese: "跳出框框思考。",
    category: "business",
    tags: ["创新", "鼓励"],
    examples: [
      { english: "We need fresh ideas. Think outside the box.", chinese: "我们需要新鲜的想法。" },
      { english: "That's creative. You thought outside the box.", chinese: "这个方案很有创意。" }
    ],
    pronunciationTips: "'outside the box' 连读"
  },
  {
    id: 78,
    english: "Keep me in the loop.",
    ipa: "/kiːp miː ɪn ðə luːp/",
    chinese: "让我了解情况。",
    category: "business",
    tags: ["信息", "沟通"],
    examples: [
      { english: "Keep me in the loop on any updates.", chinese: "有更新都通知我。" },
      { english: "Thanks for keeping me in the loop.", chinese: "谢谢让我了解情况。" }
    ],
    pronunciationTips: "'in the loop' 比喻在信息圈内"
  },
  {
    id: 79,
    english: "Loop me in.",
    ipa: "/luːp miː ɪn/",
    chinese: "加我进讨论。",
    category: "business",
    tags: ["沟通", "邮件"],
    examples: [
      { english: "When you send that email loop me in.", chinese: "发邮件时请抄送我。" },
      { english: "Can you loop me in on that conversation?", chinese: "把我加到讨论里？" }
    ],
    pronunciationTips: "'loop' /luːp/"
  },
  {
    id: 80,
    english: "I'll double down.",
    ipa: "/aɪl ˈdʌbl daʊn/",
    chinese: "我会加大投入。",
    category: "business",
    tags: ["投入", "决心"],
    examples: [
      { english: "This strategy works. Let's double down.", chinese: "这个策略有效我们加大力度。" },
      { english: "I'll double down on marketing this quarter.", chinese: "这季度加大营销投入。" }
    ],
    pronunciationTips: "'double down' 来自赌场术语"
  },
  {
    id: 81,
    english: "Play devil's advocate.",
    ipa: "/pleɪ ˈdevəlz ˈædvəkɪt/",
    chinese: "我来唱反调。",
    category: "business",
    tags: ["讨论", "辩论"],
    examples: [
      { english: "Let me play devil's advocate for a moment.", chinese: "让我来唱个反调。" },
      { english: "What if the plan fails? Just playing devil's advocate.", chinese: "如果失败了呢？" }
    ],
    pronunciationTips: "'devil's advocate'"
  },
  {
    id: 82,
    english: "Ballpark figure.",
    ipa: "/ˈbɔːlpɑːrk ˈfɪɡjər/",
    chinese: "大概的数字。",
    category: "business",
    tags: ["估算", "财务"],
    examples: [
      { english: "Can you give me a ballpark figure?", chinese: "能给我一个大概数字吗？" },
      { english: "Just a ballpark estimate is fine.", chinese: "大概估一下就行。" }
    ],
    pronunciationTips: "'ballpark' 比喻大致范围"
  },
  {
    id: 83,
    english: "Go the extra mile.",
    ipa: "/ɡoʊ ðiː ˈekstrə maɪl/",
    chinese: "多做一步。",
    category: "business",
    tags: ["努力", "服务"],
    examples: [
      { english: "She always goes the extra mile for clients.", chinese: "她总是为客户多做一步。" },
      { english: "If you want to stand out go the extra mile.", chinese: "想脱颖而出就多付出。" }
    ],
    pronunciationTips: "'extra' /ˈekstrə/"
  },
  {
    id: 84,
    english: "Call it a day.",
    ipa: "/kɔːl ɪt ə deɪ/",
    chinese: "今天到此为止。",
    category: "business",
    tags: ["下班", "结束"],
    examples: [
      { english: "It's 6pm. Let's call it a day.", chinese: "下午6点了今天到此为止。" },
      { english: "Good work everyone. Call it a day!", chinese: "大家做得好收工！" }
    ],
    pronunciationTips: "'call it' 连读"
  },
  {
    id: 85,
    english: "Raise the bar.",
    ipa: "/reɪz ðə bɑːr/",
    chinese: "提高标准。",
    category: "business",
    tags: ["目标", "激励"],
    examples: [
      { english: "Competitors are raising the bar.", chinese: "竞争对手在提高标准。" },
      { english: "This product raises the bar for the industry.", chinese: "这个产品提升了行业标准。" }
    ],
    pronunciationTips: "'raise' /reɪz/"
  },
  {
    id: 86,
    english: "Hit the ground running.",
    ipa: "/hɪt ðə ɡraʊnd ˈrʌnɪŋ/",
    chinese: "快速上手。",
    category: "business",
    tags: ["启动", "效率"],
    examples: [
      { english: "We need someone who can hit the ground running.", chinese: "需要能快速上手的人。" },
      { english: "She hit the ground running immediately.", chinese: "她立刻进入状态。" }
    ],
    pronunciationTips: "'hit the ground' 连读"
  },
  {
    id: 87,
    english: "Play it by ear.",
    ipa: "/pleɪ ɪt baɪ ɪr/",
    chinese: "随机应变。",
    category: "business",
    tags: ["计划", "灵活"],
    examples: [
      { english: "No fixed plan. Let's play it by ear.", chinese: "没有固定计划随机应变。" },
      { english: "Should we book or play it by ear?", chinese: "订餐厅还是到时候看情况？" }
    ],
    pronunciationTips: "'ear' 比喻即兴发挥"
  },
  {
    id: 88,
    english: "Step up your game.",
    ipa: "/step ʌp jɔːr ɡeɪm/",
    chinese: "提升你的水平。",
    category: "business",
    tags: ["鼓励", "进步"],
    examples: [
      { english: "Want that promotion? Step up your game.", chinese: "想升职就得提升自己。" },
      { english: "Competition is fierce. Time to step up.", chinese: "竞争激烈是时候提升了。" }
    ],
    pronunciationTips: "'step up' 重读"
  },
  {
    id: 89,
    english: "The ball is in your court.",
    ipa: "/ðə bɔːl ɪz ɪn jɔːr kɔːrt/",
    chinese: "现在看你的了。",
    category: "business",
    tags: ["交接", "决策"],
    examples: [
      { english: "I've done my part. The ball is in your court.", chinese: "我做完了现在看你的了。" },
      { english: "We sent the proposal. The ball is in their court.", chinese: "方案发了等他们回复。" }
    ],
    pronunciationTips: "'ball' /bɔːl/"
  },
  {
    id: 90,
    english: "See eye to eye.",
    ipa: "/siː aɪ tuː aɪ/",
    chinese: "达成一致。",
    category: "business",
    tags: ["一致", "讨论"],
    examples: [
      { english: "We don't see eye to eye on this issue.", chinese: "在这个问题上意见不一致。" },
      { english: "Glad we finally see eye to eye.", chinese: "很高兴达成一致。" }
    ],
    pronunciationTips: "'eye to eye' 每个词都要清晰"
  },
  {
    id: 91,
    english: "Wear multiple hats.",
    ipa: "/wer ˈmʌltɪpl hæts/",
    chinese: "身兼多职。",
    category: "business",
    tags: ["创业", "角色"],
    examples: [
      { english: "In a startup you wear multiple hats.", chinese: "创业公司里得身兼多职。" },
      { english: "I wear multiple hats developer designer support.", chinese: "我身兼数职。" }
    ],
    pronunciationTips: "'wear hats' 比喻扮演不同角色"
  },
  {
    id: 92,
    english: "Get your foot in the door.",
    ipa: "/ɡet jɔːr fʊt ɪn ðə dɔːr/",
    chinese: "先进入这个行业。",
    category: "business",
    tags: ["求职", "机会"],
    examples: [
      { english: "An internship gets your foot in the door.", chinese: "实习是入行的好方法。" },
      { english: "I just want to get my foot in the door.", chinese: "我先入行慢慢学。" }
    ],
    pronunciationTips: "比喻先把脚伸进门里"
  },
  {
    id: 93,
    english: "Par for the course.",
    ipa: "/pɑːr fɔːr ðə kɔːrs/",
    chinese: "意料之中。",
    category: "business",
    tags: ["预期", "常态"],
    examples: [
      { english: "Last-minute changes? Par for the course.", chinese: "最后一分钟改需求家常便饭。" },
      { english: "Some bugs are par for the course in software.", chinese: "有些bug在软件开发中正常。" }
    ],
    pronunciationTips: "来自高尔夫术语"
  },
  {
    id: 94,
    english: "The devil is in the details.",
    ipa: "/ðə ˈdevəl ɪz ɪn ðə dɪˈteɪlz/",
    chinese: "魔鬼在细节中。",
    category: "business",
    tags: ["细节", "提醒"],
    examples: [
      { english: "The plan looks good but the devil is in the details.", chinese: "计划不错但细节决定成败。" },
      { english: "Remember the devil is in the details.", chinese: "记住细节决定成败。" }
    ],
    pronunciationTips: "强调细节"
  },
  {
    id: 95,
    english: "Win-win situation.",
    ipa: "/wɪn wɪn ˌsɪtʃuˈeɪʃən/",
    chinese: "双赢局面。",
    category: "business",
    tags: ["谈判", "合作"],
    examples: [
      { english: "This partnership is a win-win for both.", chinese: "这次合作是双赢。" },
      { english: "We need a win-win solution.", chinese: "需要双赢方案。" }
    ],
    pronunciationTips: "'win-win' 商务表达之一"
  },
  {
    id: 96,
    english: "Back to the drawing board.",
    ipa: "/bæk tuː ðə ˈdrɔːɪŋ bɔːrd/",
    chinese: "从头再来。",
    category: "business",
    tags: ["失败", "重启"],
    examples: [
      { english: "The prototype failed. Back to the drawing board.", chinese: "原型失败了从头再来。" },
      { english: "Our proposal was rejected. Back to the board.", chinese: "方案被拒了重新来过。" }
    ],
    pronunciationTips: "'drawing board' 原指制图板"
  },
  {
    id: 97,
    english: "Get the green light.",
    ipa: "/ɡet ðə ɡriːn laɪt/",
    chinese: "得到批准。",
    category: "business",
    tags: ["审批", "启动"],
    examples: [
      { english: "We got the green light from management.", chinese: "得到了管理层的批准。" },
      { english: "Waiting for the green light to launch.", chinese: "等待批准启动。" }
    ],
    pronunciationTips: "'green light' 比喻绿灯放行"
  },
  {
    id: 98,
    english: "Miss the mark.",
    ipa: "/mɪs ðə mɑːrk/",
    chinese: "没达到目标。",
    category: "business",
    tags: ["失败", "评估"],
    examples: [
      { english: "Our Q3 sales missed the mark.", chinese: "第三季度销售没达标。" },
      { english: "The presentation missed the mark.", chinese: "那个演示没击中要害。" }
    ],
    pronunciationTips: "'mark' /mɑːrk/"
  },
  {
    id: 99,
    english: "Cut corners.",
    ipa: "/kʌt ˈkɔːrnərz/",
    chinese: "偷工减料。",
    category: "business",
    tags: ["质量", "批评"],
    examples: [
      { english: "Don't cut corners on quality control.", chinese: "别在质量管控上偷工减料。" },
      { english: "If you cut corners now it'll cost us later.", chinese: "现在偷工减料以后会更贵。" }
    ],
    pronunciationTips: "'corners' /ˈkɔːrnərz/"
  },
  {
    id: 100,
    english: "Read the room.",
    ipa: "/riːd ðə ruːm/",
    chinese: "看气氛。",
    category: "smalltalk",
    tags: ["情商", "沟通"],
    examples: [
      { english: "The joke didn't land. Read the room.", chinese: "笑话没人笑学会看气氛。" },
      { english: "Before proposing read the room first.", chinese: "提建议前先看看气氛。" }
    ],
    pronunciationTips: "职场情商重要表达"
  },
  {
    id: 101,
    english: "Put out fires.",
    ipa: "/pʊt aʊt faɪrz/",
    chinese: "救火。",
    category: "slang",
    tags: ["问题", "紧急"],
    examples: [
      { english: "I spent the whole day putting out fires.", chinese: "我整天都在救火。" },
      { english: "I'm always putting out fires no time to plan.", chinese: "总在处理紧急问题没时间规划。" }
    ],
    pronunciationTips: "比喻处理各种突发问题"
  },
  {
    id: 102,
    english: "Low-hanging fruit.",
    ipa: "/loʊ ˈhæŋɪŋ fruːt/",
    chinese: "容易搞定的事。",
    category: "slang",
    tags: ["效率", "策略"],
    examples: [
      { english: "Let's go after the low-hanging fruit first.", chinese: "先做容易搞定的事。" },
      { english: "These quick wins are the low-hanging fruit.", chinese: "快速见效的事就是低垂的果实。" }
    ],
    pronunciationTips: "比喻容易达成的目标"
  },
  {
    id: 103,
    english: "Break a leg!",
    ipa: "/breɪk ə leɡ/",
    chinese: "祝好运！",
    category: "slang",
    tags: ["鼓励", "演出"],
    examples: [
      { english: "Big presentation today? Break a leg!", chinese: "今天有大演示祝你好运！" },
      { english: "Break a leg on stage tonight!", chinese: "今晚演出加油！" }
    ],
    pronunciationTips: "表演界的吉利话"
  },
  {
    id: 104,
    english: "It's a piece of cake.",
    ipa: "/ɪts ə piːs əv keɪk/",
    chinese: "小菜一碟。",
    category: "slang",
    tags: ["简单", "日常"],
    examples: [
      { english: "The exam was a piece of cake!", chinese: "考试太简单了小菜一碟！" },
      { english: "Fixing this bug is a piece of cake.", chinese: "修这个bug小菜一碟。" }
    ],
    pronunciationTips: "'piece of' 连读为 /piːs əv/"
  },
  {
    id: 105,
    english: "That's a steal!",
    ipa: "/ðæts ə stiːl/",
    chinese: "太划算了！",
    category: "slang",
    tags: ["购物", "惊叹"],
    examples: [
      { english: "This jacket was only 50 bucks? That's a steal!", chinese: "这件外套只要50块太划算了！" },
      { english: "I got the phone for half price. What a steal!", chinese: "半价买了这个手机太值了！" }
    ],
    pronunciationTips: "'steal' 重读强调"
  },
  {
    id: 106,
    english: "Spill the tea.",
    ipa: "/spɪl ðə tiː/",
    chinese: "快说说八卦！",
    category: "slang",
    tags: ["八卦", "社交"],
    examples: [
      { english: "I heard you went on a date! Spill the tea!", chinese: "听说你去约会了快说说！" },
      { english: "OK everyone spill the tea.", chinese: "好了大家说说八卦。" }
    ],
    pronunciationTips: "'tea' 在这里不是茶"
  },
  {
    id: 107,
    english: "I'm down for that.",
    ipa: "/aɪm daʊn fɔːr ðæt/",
    chinese: "这个可以有。",
    category: "slang",
    tags: ["同意", "邀约"],
    examples: [
      { english: "Anyone want pizza? I'm down for that.", chinese: "有人想吃披萨吗我可以。" },
      { english: "Movie tonight? I'm down!", chinese: "今晚看电影走起！" }
    ],
    pronunciationTips: "'down' 语气上扬"
  },
  {
    id: 108,
    english: "Knock it off.",
    ipa: "/nɒk ɪt ɒf/",
    chinese: "别闹了。",
    category: "slang",
    tags: ["制止", "烦躁"],
    examples: [
      { english: "Hey knock it off! You're being too loud.", chinese: "嘿别闹了你们太吵了。" },
      { english: "Knock it off you two.", chinese: "你俩别闹了。" }
    ],
    pronunciationTips: "'knock' 中 'k' 要发音"
  },
  {
    id: 109,
    english: "Keep your chin up.",
    ipa: "/kiːp jɔːr tʃɪn ʌp/",
    chinese: "抬起头来。",
    category: "slang",
    tags: ["鼓励", "安慰"],
    examples: [
      { english: "I know things are tough. Keep your chin up.", chinese: "我知道情况不好抬起头来。" },
      { english: "Keep your chin up! Tomorrow is a new day.", chinese: "别气馁明天又是新的一天。" }
    ],
    pronunciationTips: "'chin up' 比喻抬高下巴"
  },
  {
    id: 110,
    english: "Bite the bullet.",
    ipa: "/baɪt ðə ˈbʊlɪt/",
    chinese: "硬着头皮上。",
    category: "slang",
    tags: ["勇气", "面对"],
    examples: [
      { english: "I'll bite the bullet and get it done.", chinese: "我硬着头皮上。" },
      { english: "Just bite the bullet and get it over with.", chinese: "咬咬牙做完就没事了。" }
    ],
    pronunciationTips: "'bite the bullet' 原指战场咬子弹"
  },
  {
    id: 111,
    english: "Hit the sack.",
    ipa: "/hɪt ðə sæk/",
    chinese: "睡觉去。",
    category: "slang",
    tags: ["休息", "日常"],
    examples: [
      { english: "I'm exhausted. Time to hit the sack.", chinese: "我累死了该睡觉了。" },
      { english: "I hit the sack early last night.", chinese: "我昨晚很早就睡了。" }
    ],
    pronunciationTips: "'sack' 比喻床铺"
  },
  {
    id: 112,
    english: "Let the cat out of the bag.",
    ipa: "/let ðə kæt aʊt əv ðə bæɡ/",
    chinese: "说漏嘴了。",
    category: "slang",
    tags: ["秘密", "意外"],
    examples: [
      { english: "She let the cat out of the bag about the party.", chinese: "她把派对的事说漏嘴了。" },
      { english: "Who let the cat out of the bag?", chinese: "谁说漏嘴了？" }
    ],
    pronunciationTips: "'cat out of' 要连读"
  },
  {
    id: 113,
    english: "When pigs fly.",
    ipa: "/wen pɪɡz flaɪ/",
    chinese: "太阳从西边出来。",
    category: "slang",
    tags: ["不可能", "幽默"],
    examples: [
      { english: "He'll apologize when pigs fly.", chinese: "他会道歉太阳从西边出来。" },
      { english: "You'll get promoted when pigs fly.", chinese: "你升职等下辈子。" }
    ],
    pronunciationTips: "夸张说法表示绝无可能"
  },
  {
    id: 114,
    english: "Barking up the wrong tree.",
    ipa: "/ˈbɑːrkɪŋ ʌp ðə rɒŋ triː/",
    chinese: "找错人了。",
    category: "slang",
    tags: ["误会", "提醒"],
    examples: [
      { english: "If you think I took your pen you're barking up the wrong tree.", chinese: "以为我拿了你笔找错人了。" },
      { english: "He's blaming the intern but barking up the wrong tree.", chinese: "他在怪实习生但怪错人了。" }
    ],
    pronunciationTips: "指猎犬对错树叫"
  },
  {
    id: 115,
    english: "Once in a blue moon.",
    ipa: "/wʌns ɪn ə bluː muːn/",
    chinese: "千载难逢。",
    category: "slang",
    tags: ["频率", "稀有"],
    examples: [
      { english: "She visits us once in a blue moon.", chinese: "她难得来看我们。" },
      { english: "I eat fast food once in a blue moon.", chinese: "我极少吃快餐。" }
    ],
    pronunciationTips: "'blue moon' 指一个月两次满月"
  },
  {
    id: 116,
    english: "The early bird catches the worm.",
    ipa: "/ðiː ˈɜːrli bɜːrd ˈkætʃɪz ðə wɜːrm/",
    chinese: "早起的鸟儿有虫吃。",
    category: "slang",
    tags: ["勤奋", "谚语"],
    examples: [
      { english: "I always get to the office first. Early bird catches the worm.", chinese: "我总第一个到办公室。" },
      { english: "Want the best deals? Be an early bird.", chinese: "想抢到最好的折扣得趁早。" }
    ],
    pronunciationTips: "'bird' 和 'worm' 都重读"
  },
  {
    id: 117,
    english: "Put yourself in my shoes.",
    ipa: "/pʊt jɔːrˈself ɪn maɪ ʃuːz/",
    chinese: "换位思考。",
    category: "slang",
    tags: ["换位", "理解"],
    examples: [
      { english: "Before you judge put yourself in my shoes.", chinese: "评判之前先站在我的角度想想。" },
      { english: "It's not easy. Put yourself in my shoes.", chinese: "这事不容易你换位思考。" }
    ],
    pronunciationTips: "'shoes' 比喻处境"
  },
  {
    id: 118,
    english: "Up in the air.",
    ipa: "/ʌp ɪn ðiː er/",
    chinese: "悬而未决。",
    category: "slang",
    tags: ["未定", "等待"],
    examples: [
      { english: "Our travel plans are still up in the air.", chinese: "旅行计划还没定下来。" },
      { english: "The project's future is up in the air.", chinese: "项目未来不确定。" }
    ],
    pronunciationTips: "'up in the air' 比喻事情悬在空中"
  },
  {
    id: 119,
    english: "Out of the blue.",
    ipa: "/aʊt əv ðə bluː/",
    chinese: "突然地。",
    category: "slang",
    tags: ["意外", "突然"],
    examples: [
      { english: "She showed up out of the blue after ten years.", chinese: "她十年后突然出现了。" },
      { english: "The news came out of the blue.", chinese: "消息来得很突然。" }
    ],
    pronunciationTips: "'blue' 指蓝天比喻晴天霹雳"
  },
  {
    id: 120,
    english: "Game changer.",
    ipa: "/ɡeɪm ˈtʃeɪndʒər/",
    chinese: "改变格局的东西。",
    category: "slang",
    tags: ["创新", "重要"],
    examples: [
      { english: "This new AI tool is a total game changer.", chinese: "这个新AI工具完全改变了游戏规则。" },
      { english: "Smartphones were a game changer for communication.", chinese: "智能手机是通讯方式的革命。" }
    ],
    pronunciationTips: "'game changer' 是技术领域常用语"
  },
  {
    id: 121,
    english: "Face the music.",
    ipa: "/feɪs ðə ˈmjuːzɪk/",
    chinese: "承担后果。",
    category: "slang",
    tags: ["责任", "面对"],
    examples: [
      { english: "You made a mistake. Face the music.", chinese: "你犯了错得承担后果。" },
      { english: "Time to face the music and tell the truth.", chinese: "是时候面对现实说实话了。" }
    ],
    pronunciationTips: "'face the music' 源于军人被开除时的仪式"
  },
  {
    id: 122,
    english: "Get out of town!",
    ipa: "/ɡet aʊt əv taʊn/",
    chinese: "不会吧！",
    category: "slang",
    tags: ["惊讶", "夸张"],
    examples: [
      { english: "You won the lottery? Get out of town!", chinese: "你中了彩票不会吧！" },
      { english: "She's quitting her job? Get out of town!", chinese: "她要辞职真的假的？" }
    ],
    pronunciationTips: "夸张表达惊讶"
  },
  {
    id: 123,
    english: "I'm on the ball.",
    ipa: "/aɪm ɒn ðə bɔːl/",
    chinese: "我很在状态。",
    category: "slang",
    tags: ["状态", "高效"],
    examples: [
      { english: "You're really on the ball today!", chinese: "你今天状态真不错！" },
      { english: "He's always on the ball in meetings.", chinese: "他开会时反应很快。" }
    ],
    pronunciationTips: "'on the ball' 形容机敏高效"
  },
  {
    id: 124,
    english: "Keep me posted.",
    ipa: "/kiːp miː ˈpoʊstɪd/",
    chinese: "随时告诉我。",
    category: "slang",
    tags: ["信息", "沟通"],
    examples: [
      { english: "Keep me posted on how it goes.", chinese: "随时告诉我进展。" },
      { english: "I'll keep you posted on the results.", chinese: "有结果了我通知你。" }
    ],
    pronunciationTips: "'keep someone posted' 是地道表达"
  },
  {
    id: 125,
    english: "I'm counting on you.",
    ipa: "/aɪm ˈkaʊntɪŋ ɒn juː/",
    chinese: "我指望你了。",
    category: "slang",
    tags: ["信任", "期待"],
    examples: [
      { english: "I'm counting on you to get this done.", chinese: "我指望你完成这件事。" },
      { english: "Don't let me down. I'm counting on you!", chinese: "别让我失望我就靠你了！" }
    ],
    pronunciationTips: "'counting on' 连读"
  },
  {
    id: 126,
    english: "Take it easy.",
    ipa: "/teɪk ɪt ˈiːzi/",
    chinese: "放轻松。",
    category: "slang",
    tags: ["安慰", "告别"],
    examples: [
      { english: "Take it easy everything will be fine.", chinese: "放轻松一切都会好的。" },
      { english: "See you tomorrow. Take it easy!", chinese: "明天见保重！" }
    ],
    pronunciationTips: "最常用的安慰和告别语"
  },
  {
    id: 127,
    english: "Facepalm.",
    ipa: "/ˈfeɪspɑːm/",
    chinese: "捂脸。",
    category: "slang",
    tags: ["无奈", "搞笑"],
    examples: [
      { english: "He said something stupid again. Facepalm.", chinese: "他又说了蠢话捂脸。" },
      { english: "I read my old tweets. Major facepalm.", chinese: "看了我以前的推特捂脸。" }
    ],
    pronunciationTips: "'facepalm' /ˈfeɪspɑːm/"
  },
  {
    id: 128,
    english: "I couldn't care less.",
    ipa: "/aɪ ˈkʊdnt ker les/",
    chinese: "我完全不在乎。",
    category: "slang",
    tags: ["冷漠", "表达"],
    examples: [
      { english: "He doesn't like my outfit? I couldn't care less.", chinese: "他不喜欢我的穿搭我完全不在乎。" },
      { english: "About their opinion I couldn't care less.", chinese: "他们的看法我压根不在乎。" }
    ],
    pronunciationTips: "'couldn't' /ˈkʊdnt/"
  },
  {
    id: 129,
    english: "Don't count your chickens.",
    ipa: "/doʊnt kaʊnt jɔːr ˈtʃɪkɪnz/",
    chinese: "别高兴得太早。",
    category: "slang",
    tags: ["劝诫", "谚语"],
    examples: [
      { english: "I'm sure I'll get the job! Don't count your chickens.", chinese: "肯定能拿到工作别高兴太早。" },
      { english: "They're spending the bonus already? Don't count your chickens.", chinese: "已经开始花奖金了？" }
    ],
    pronunciationTips: "谚语语速放慢"
  },
  {
    id: 130,
    english: "Can't make heads or tails.",
    ipa: "/kænt meɪk hedz ɔːr teɪlz/",
    chinese: "完全搞不懂。",
    category: "slang",
    tags: ["困惑", "表达"],
    examples: [
      { english: "I can't make heads or tails of this manual.", chinese: "这个说明书完全看不懂。" },
      { english: "I couldn't make heads or tails of her explanation.", chinese: "她的解释我完全没听懂。" }
    ],
    pronunciationTips: "'heads or tails' 原指抛硬币"
  },
  {
    id: 131,
    english: "Can I get a ride?",
    ipa: "/kæn aɪ ɡet ə raɪd/",
    chinese: "能搭个便车吗？",
    category: "travel",
    tags: ["交通", "搭车"],
    examples: [
      { english: "My car broke down. Can I get a ride?", chinese: "我车坏了能搭个便车吗？" },
      { english: "I can give you a ride to the station.", chinese: "我可以顺路捎你去车站。" }
    ],
    pronunciationTips: "'get a ride' 比 'catch a ride' 更常用"
  },
  {
    id: 132,
    english: "I'm just browsing.",
    ipa: "/aɪm dʒʌst ˈbraʊzɪŋ/",
    chinese: "我随便看看。",
    category: "travel",
    tags: ["购物", "日常"],
    examples: [
      { english: "Can I help you? No thanks just browsing.", chinese: "需要帮忙吗？不用了随便看看。" },
      { english: "I was browsing and saw this nice shirt.", chinese: "随便逛逛看到这件衬衫。" }
    ],
    pronunciationTips: "'browsing' /ˈbraʊzɪŋ/"
  },
  {
    id: 133,
    english: "Is there a catch?",
    ipa: "/ɪz ðer ə kætʃ/",
    chinese: "有什么猫腻？",
    category: "travel",
    tags: ["质疑", "谨慎"],
    examples: [
      { english: "The price seems too good. Is there a catch?", chinese: "价格好得离谱有什么条件？" },
      { english: "Free trial? Is there a catch?", chinese: "免费试用有什么猫腻？" }
    ],
    pronunciationTips: "'catch' 是隐藏的问题"
  },
  {
    id: 134,
    english: "I need to freshen up.",
    ipa: "/aɪ niːd tuː ˈfreʃən ʌp/",
    chinese: "我得洗漱一下。",
    category: "travel",
    tags: ["住宿", "日常"],
    examples: [
      { english: "Let me drop my bags and freshen up.", chinese: "我先放下行李洗漱一下。" },
      { english: "After the flight I just need to freshen up.", chinese: "飞了这么久我得先洗漱。" }
    ],
    pronunciationTips: "'freshen up' /ˈfreʃən ʌp/"
  },
  {
    id: 135,
    english: "Can you drop me off?",
    ipa: "/kæn juː drɒp miː ɒf/",
    chinese: "放我下来好吗？",
    category: "travel",
    tags: ["交通", "下车"],
    examples: [
      { english: "Can you drop me off at the next intersection?", chinese: "能在下个路口放我下来吗？" },
      { english: "Just drop me off here thanks!", chinese: "就在这儿放我下来吧谢谢！" }
    ],
    pronunciationTips: "'drop off' 是固定短语"
  },
  {
    id: 136,
    english: "I'd like to check in.",
    ipa: "/aɪd laɪk tuː tʃek ɪn/",
    chinese: "我想办理入住。",
    category: "travel",
    tags: ["住宿", "酒店"],
    examples: [
      { english: "Hello I'd like to check in. I have a reservation.", chinese: "你好我想办理入住有预约。" },
      { english: "Check-in time is at 3pm.", chinese: "入住时间是下午3点。" }
    ],
    pronunciationTips: "'check in' 是固定搭配"
  },
  {
    id: 137,
    english: "What's the Wi-Fi password?",
    ipa: "/wɒts ðə ˈwaɪfaɪ ˈpæswɜːrd/",
    chinese: "Wi-Fi密码？",
    category: "travel",
    tags: ["住宿", "网络"],
    examples: [
      { english: "Excuse me what's the Wi-Fi password?", chinese: "打扰一下Wi-Fi密码？" },
      { english: "Is the Wi-Fi free?", chinese: "Wi-Fi是免费的吗？" }
    ],
    pronunciationTips: "'password' /ˈpæswɜːrd/"
  },
  {
    id: 138,
    english: "Is breakfast included?",
    ipa: "/ɪz ˈbrekfəst ɪnˈkluːdɪd/",
    chinese: "含早餐吗？",
    category: "travel",
    tags: ["住宿", "餐饮"],
    examples: [
      { english: "Does the room rate include breakfast?", chinese: "房费含早餐吗？" },
      { english: "Breakfast is included from 7 to 10am.", chinese: "早餐含在房费里。" }
    ],
    pronunciationTips: "'included' /ɪnˈkluːdɪd/"
  },
  {
    id: 139,
    english: "I'd like a window seat.",
    ipa: "/aɪd laɪk ə ˈwɪndoʊ siːt/",
    chinese: "想要靠窗座位。",
    category: "travel",
    tags: ["交通", "飞机"],
    examples: [
      { english: "Can I have a window seat please?", chinese: "能给我靠窗座位吗？" },
      { english: "I prefer a window seat on flights.", chinese: "我坐飞机喜欢靠窗。" }
    ],
    pronunciationTips: "'window' /ˈwɪndoʊ/"
  },
  {
    id: 140,
    english: "I have a layover.",
    ipa: "/aɪ hæv ə ˈleɪoʊvər/",
    chinese: "我要中转。",
    category: "travel",
    tags: ["交通", "飞机"],
    examples: [
      { english: "I have a three-hour layover in Shanghai.", chinese: "我在上海中转三小时。" },
      { english: "Anything to do during the layover?", chinese: "转机期间有什么好玩的？" }
    ],
    pronunciationTips: "'layover' 重音在第一音节"
  },
  {
    id: 141,
    english: "This is on the house.",
    ipa: "/ðɪs ɪz ɒn ðə haʊs/",
    chinese: "这是免费的。",
    category: "travel",
    tags: ["餐饮", "惊喜"],
    examples: [
      { english: "The dessert is on the house tonight.", chinese: "今晚的甜品是餐厅送的。" },
      { english: "Don't worry about the drink. On the house.", chinese: "别担心饮料钱免费赠送。" }
    ],
    pronunciationTips: "'on the house' 指店家请客"
  },
  {
    id: 142,
    english: "Do you have any vacancies?",
    ipa: "/duː juː hæv ˈeni ˈveɪkənsiz/",
    chinese: "有空房吗？",
    category: "travel",
    tags: ["住宿", "询问"],
    examples: [
      { english: "Do you have any vacancies for tonight?", chinese: "今晚有空房吗？" },
      { english: "Sorry no vacancies. Fully booked.", chinese: "抱歉没空房了。" }
    ],
    pronunciationTips: "'vacancies' /ˈveɪkənsiz/"
  },
  {
    id: 143,
    english: "I'll take it to go.",
    ipa: "/aɪl teɪk ɪt tuː ɡoʊ/",
    chinese: "我要外带。",
    category: "travel",
    tags: ["餐饮", "打包"],
    examples: [
      { english: "A coffee and a sandwich to go please.", chinese: "一杯咖啡和一个三明治外带。" },
      { english: "Here or to go? To go please.", chinese: "在这儿吃还是带走？带走。" }
    ],
    pronunciationTips: "'to go' 是外带标准说法"
  },
  {
    id: 144,
    english: "How much does this cost?",
    ipa: "/haʊ mʌtʃ dʌz ðɪs kɒst/",
    chinese: "这个多少钱？",
    category: "travel",
    tags: ["购物", "询问"],
    examples: [
      { english: "How much does this cost? No price tag.", chinese: "多少钱没看到价格标签？" },
      { english: "How much does this cost with tax?", chinese: "含税多少钱？" }
    ],
    pronunciationTips: "'cost' /kɒst/"
  },
  {
    id: 145,
    english: "Can I get a discount?",
    ipa: "/kæn aɪ ɡet ə ˈdɪskaʊnt/",
    chinese: "能打折吗？",
    category: "travel",
    tags: ["购物", "砍价"],
    examples: [
      { english: "Is there any discount if I buy two?", chinese: "买两个有折扣吗？" },
      { english: "Can I get a student discount?", chinese: "有学生折扣吗？" }
    ],
    pronunciationTips: "'discount' /ˈdɪskaʊnt/"
  },
  {
    id: 146,
    english: "I'd like to make a reservation.",
    ipa: "/aɪd laɪk tuː meɪk ə ˌrezərˈveɪʃən/",
    chinese: "我想预约。",
    category: "travel",
    tags: ["餐饮", "预约"],
    examples: [
      { english: "I'd like a reservation for two at 7pm.", chinese: "我想预约今晚7点两位。" },
      { english: "Can I make a reservation for next Friday?", chinese: "可以预约下周五吗？" }
    ],
    pronunciationTips: "'reservation'"
  },
  {
    id: 147,
    english: "Is it within walking distance?",
    ipa: "/ɪz ɪt wɪˈðɪn ˈwɔːkɪŋ ˈdɪstəns/",
    chinese: "走路能到吗？",
    category: "travel",
    tags: ["问路", "距离"],
    examples: [
      { english: "Is the museum within walking distance?", chinese: "博物馆走路能到吗？" },
      { english: "About 10 minutes walking distance.", chinese: "走路大概10分钟。" }
    ],
    pronunciationTips: "'walking distance' 是固定搭配"
  },
  {
    id: 148,
    english: "I need to exchange currency.",
    ipa: "/aɪ niːd tuː ɪksˈtʃeɪndʒ ˈkɜːrənsi/",
    chinese: "我需要换汇。",
    category: "travel",
    tags: ["货币", "银行"],
    examples: [
      { english: "Where can I exchange currency?", chinese: "哪里能换汇？" },
      { english: "I need to exchange USD for RMB.", chinese: "需要把美元换成人民币。" }
    ],
    pronunciationTips: "'currency' /ˈkɜːrənsi/"
  },
  {
    id: 149,
    english: "Can we split the bill?",
    ipa: "/kæn wiː splɪt ðə bɪl/",
    chinese: "AA吗？",
    category: "travel",
    tags: ["餐饮", "付账"],
    examples: [
      { english: "Can we split the bill evenly?", chinese: "可以平摊账单吗？" },
      { english: "Let's split the bill three ways.", chinese: "三个人平摊。" }
    ],
    pronunciationTips: "'split the bill' 是AA制最地道的说法"
  },
  {
    id: 150,
    english: "Take a rain check.",
    ipa: "/teɪk ə reɪn tʃek/",
    chinese: "改天吧。",
    category: "travel",
    tags: ["婉拒", "改期"],
    examples: [
      { english: "Can't make it tonight. Rain check?", chinese: "今晚来不了改天吧？" },
      { english: "I'll take a rain check on that drink.", chinese: "那杯酒改天再喝。" }
    ],
    pronunciationTips: "'rain check' 原指比赛延期改天看的票根"
  },
  {
    id: 151,
    english: "I hear you.",
    ipa: "/aɪ hɪr juː/",
    chinese: "我懂你的意思。",
    category: "smalltalk",
    tags: ["理解", "共情"],
    examples: [
      { english: "I know it's frustrating. I hear you.", chinese: "我知道很沮丧我理解。" },
      { english: "I hear you but we have to follow the rules.", chinese: "我明白但必须按规定来。" }
    ],
    pronunciationTips: "比 'I understand' 更自然"
  },
  {
    id: 152,
    english: "That's not my cup of tea.",
    ipa: "/ðæts nɒt maɪ kʌp əv tiː/",
    chinese: "不是我的菜。",
    category: "smalltalk",
    tags: ["偏好", "拒绝"],
    examples: [
      { english: "Horror movies are not my cup of tea.", chinese: "恐怖片不是我的菜。" },
      { english: "Coding isn't really my cup of tea.", chinese: "编程不是我的强项。" }
    ],
    pronunciationTips: "'cup of tea' 比喻喜欢的事物"
  },
  {
    id: 153,
    english: "I've got your back.",
    ipa: "/aɪv ɡɒt jɔːr bæk/",
    chinese: "我支持你。",
    category: "smalltalk",
    tags: ["支持", "友情"],
    examples: [
      { english: "Don't worry about the presentation. I've got your back.", chinese: "别担心演示我支持你。" },
      { english: "You can count on me. I've got your back.", chinese: "你可以相信我我罩着你。" }
    ],
    pronunciationTips: "'got your back' 更有力更亲切"
  },
  {
    id: 154,
    english: "I'm over the moon.",
    ipa: "/aɪm ˈoʊvər ðə muːn/",
    chinese: "开心极了。",
    category: "smalltalk",
    tags: ["喜悦", "表达"],
    examples: [
      { english: "She got the job! She's over the moon.", chinese: "她拿到工作开心极了！" },
      { english: "I'm over the moon about the news!", chinese: "听到消息高兴得不得了！" }
    ],
    pronunciationTips: "'over the moon' 比喻开心到飞上天"
  },
  {
    id: 155,
    english: "Down to earth.",
    ipa: "/daʊn tuː ɜːrθ/",
    chinese: "脚踏实地的。",
    category: "smalltalk",
    tags: ["性格", "赞美"],
    examples: [
      { english: "Despite being famous she's very down to earth.", chinese: "虽然很有名但她很平易近人。" },
      { english: "I like working with him. He's really down to earth.", chinese: "我喜欢跟他共事。" }
    ],
    pronunciationTips: "英文中是非常正面的评价"
  },
  {
    id: 156,
    english: "Me time.",
    ipa: "/miː taɪm/",
    chinese: "属于自己的时间。",
    category: "smalltalk",
    tags: ["放松", "生活"],
    examples: [
      { english: "I need some me time this weekend.", chinese: "这周末我需要自己的时间。" },
      { english: "Everyone needs a little me time.", chinese: "每个人都需要独处的时间。" }
    ],
    pronunciationTips: "'me time' 是现代常用口语"
  },
  {
    id: 157,
    english: "What's the scoop?",
    ipa: "/wɒts ðə skuːp/",
    chinese: "有什么消息？",
    category: "smalltalk",
    tags: ["询问", "闲聊"],
    examples: [
      { english: "What's the scoop on the new project?", chinese: "新项目有什么消息？" },
      { english: "Hey what's the scoop?", chinese: "嘿有什么新鲜事？" }
    ],
    pronunciationTips: "'scoop' 原指独家新闻"
  },
  {
    id: 158,
    english: "I'm pulling for you.",
    ipa: "/aɪm ˈpʊlɪŋ fɔːr juː/",
    chinese: "我为你加油。",
    category: "smalltalk",
    tags: ["鼓励", "支持"],
    examples: [
      { english: "Your interview is tomorrow. I'm pulling for you!", chinese: "你明天面试我为你加油！" },
      { english: "No matter what I'm pulling for you.", chinese: "不管怎样我都支持你。" }
    ],
    pronunciationTips: "'pulling for you' 很有温度的表达"
  },
  {
    id: 159,
    english: "That's a load off my mind.",
    ipa: "/ðæts ə loʊd ɒf maɪ maɪnd/",
    chinese: "我放心了。",
    category: "smalltalk",
    tags: ["轻松", "释然"],
    examples: [
      { english: "The test was negative. I'm so relieved.", chinese: "检查结果是阴性我放心了。" },
      { english: "You finished the report? Load off my mind.", chinese: "报告完成心里石头落地了。" }
    ],
    pronunciationTips: "'load off' 比喻卸下重担"
  },
  {
    id: 160,
    english: "It's up to you.",
    ipa: "/ɪts ʌp tuː juː/",
    chinese: "你来决定。",
    category: "smalltalk",
    tags: ["选择", "表态"],
    examples: [
      { english: "Where should we eat? It's up to you.", chinese: "我们去哪吃你来决定。" },
      { english: "Whatever you think is best. It's up to you.", chinese: "你说了算。" }
    ],
    pronunciationTips: "'up to you' 非常地道"
  },
  {
    id: 161,
    english: "Two heads are better than one.",
    ipa: "/tuː hedz ɑːr ˈbetər ðæn wʌn/",
    chinese: "三个臭皮匠顶个诸葛亮。",
    category: "smalltalk",
    tags: ["谚语", "合作"],
    examples: [
      { english: "Let's work together. Two heads are better than one.", chinese: "一起来做吧。" },
      { english: "I'm stuck. Can you help? Two heads are better than one.", chinese: "我卡住了来帮忙。" }
    ],
    pronunciationTips: "经典谚语"
  },
  {
    id: 162,
    english: "Don't put all your eggs in one basket.",
    ipa: "/doʊnt pʊt ɔːl jɔːr eɡz ɪn wʌn ˈbæskɪt/",
    chinese: "不要把鸡蛋放一个篮子里。",
    category: "smalltalk",
    tags: ["道理", "投资"],
    examples: [
      { english: "Invest in different things. Don't put all your eggs in one basket.", chinese: "投资要分散。" },
      { english: "I'm applying to multiple jobs.", chinese: "我在投多家公司。" }
    ],
    pronunciationTips: "经典投资谚语"
  },
  {
    id: 163,
    english: "Rome wasn't built in a day.",
    ipa: "/roʊm ˈwɒznt bɪlt ɪn ə deɪ/",
    chinese: "罗马不是一天建成的。",
    category: "smalltalk",
    tags: ["耐心", "谚语"],
    examples: [
      { english: "Learning a language takes time.", chinese: "学语言需要时间。" },
      { english: "Don't rush the project.", chinese: "别催项目。" }
    ],
    pronunciationTips: "经典谚语提醒耐心"
  },
  {
    id: 164,
    english: "The more the merrier.",
    ipa: "/ðə mɔːr ðə ˈmeriər/",
    chinese: "人越多越热闹。",
    category: "smalltalk",
    tags: ["邀请", "聚会"],
    examples: [
      { english: "Can I bring my friend? The more the merrier!", chinese: "我能带朋友吗？人越多越热闹！" },
      { english: "We're having a party. The more the merrier.", chinese: "开派对人越多越好！" }
    ],
    pronunciationTips: "'merrier' 是 merry 的比较级"
  },
  {
    id: 165,
    english: "Better late than never.",
    ipa: "/ˈbetər leɪt ðæn ˈnevər/",
    chinese: "迟到总比不到好。",
    category: "smalltalk",
    tags: ["安慰", "谚语"],
    examples: [
      { english: "I finally finished. Better late than never.", chinese: "我终于完成了。" },
      { english: "Sorry I'm late! Better late than never right?", chinese: "抱歉来晚了！" }
    ],
    pronunciationTips: "经典谚语"
  },
  {
    id: 166,
    english: "No pain no gain.",
    ipa: "/noʊ peɪn noʊ ɡeɪn/",
    chinese: "不劳无获。",
    category: "smalltalk",
    tags: ["鼓励", "谚语"],
    examples: [
      { english: "This workout is tough! No pain no gain.", chinese: "这个训练好累！" },
      { english: "Working hard will pay off.", chinese: "现在努力以后会有回报。" }
    ],
    pronunciationTips: "经典健身/励志谚语"
  },
  {
    id: 167,
    english: "Honesty is the best policy.",
    ipa: "/ˈɒnɪsti ɪz ðə best ˈpɒlɪsi/",
    chinese: "诚实为上策。",
    category: "smalltalk",
    tags: ["道理", "道德"],
    examples: [
      { english: "Just tell them the truth.", chinese: "跟他们说实话。" },
      { english: "I know it's hard but honesty is the best.", chinese: "我知道很难但诚实最好。" }
    ],
    pronunciationTips: "经典谚语"
  },
  {
    id: 168,
    english: "Better safe than sorry.",
    ipa: "/ˈbetər seɪf ðæn ˈsɒri/",
    chinese: "有备无患。",
    category: "smalltalk",
    tags: ["谨慎", "提醒"],
    examples: [
      { english: "Bring an umbrella. Better safe than sorry.", chinese: "带把伞有备无患。" },
      { english: "I'll double-check the code. Better safe than sorry.", chinese: "再检查一遍代码。" }
    ],
    pronunciationTips: "经典谚语"
  },
  {
    id: 169,
    english: "Actions speak louder than words.",
    ipa: "/ˈækʃənz spiːk ˈlaʊdər ðæn wɜːrdz/",
    chinese: "行动胜于空谈。",
    category: "smalltalk",
    tags: ["道理", "劝诫"],
    examples: [
      { english: "He keeps promising but never delivers.", chinese: "他总承诺但不兑现。" },
      { english: "Stop talking and start doing.", chinese: "别说了开始做。" }
    ],
    pronunciationTips: "经典谚语"
  },
  {
    id: 170,
    english: "Every cloud has a silver lining.",
    ipa: "/ˈevri klaʊd hæz ə ˈsɪlvər ˈlaɪnɪŋ/",
    chinese: "黑暗中总有一线光明。",
    category: "smalltalk",
    tags: ["鼓励", "乐观"],
    examples: [
      { english: "I lost my job but found a better one.", chinese: "丢了工作但找到了更好的。" },
      { english: "Don't be too sad. Every cloud has a silver lining.", chinese: "别太难过。" }
    ],
    pronunciationTips: "经典谚语"
  },
  {
    id: 171,
    english: "Strike while the iron is hot.",
    ipa: "/straɪk waɪl ðiː ˈaɪərn ɪz hɒt/",
    chinese: "趁热打铁。",
    category: "smalltalk",
    tags: ["时机", "行动"],
    examples: [
      { english: "They're interested. Strike while the iron is hot.", chinese: "他们感兴趣趁热打铁。" },
      { english: "You should ask her out now. Strike while the iron is hot.", chinese: "你现在就该约她趁热打铁。" }
    ],
    pronunciationTips: "经典谚语"
  },
  {
    id: 172,
    english: "When in Rome do as the Romans do.",
    ipa: "/wen ɪn roʊm duː æz ðə ˈroʊmənz duː/",
    chinese: "入乡随俗。",
    category: "smalltalk",
    tags: ["文化", "旅行"],
    examples: [
      { english: "In Japan you bow when greeting. When in Rome.", chinese: "在日本打招呼要鞠躬入乡随俗。" },
      { english: "I'll try the local food. When in Rome.", chinese: "试试当地食物入乡随俗。" }
    ],
    pronunciationTips: "经典旅行名言"
  },
  {
    id: 173,
    english: "Easy come easy go.",
    ipa: "/ˈiːzi kʌm ˈiːzi ɡoʊ/",
    chinese: "来得容易去得快。",
    category: "smalltalk",
    tags: ["感慨", "道理"],
    examples: [
      { english: "He spent his lottery winnings in a month.", chinese: "他一个月花完彩票奖金。" },
      { english: "Don't worry about losing it. Easy come easy go.", chinese: "别在意丢的钱。" }
    ],
    pronunciationTips: "经典谚语"
  },
  {
    id: 174,
    english: "I've got a lot on my plate.",
    ipa: "/aɪv ɡɒt ə lɒt ɒn maɪ pleɪt/",
    chinese: "手头有很多事。",
    category: "smalltalk",
    tags: ["忙碌", "表达"],
    examples: [
      { english: "Can you help? I've got a lot on my plate.", chinese: "抱歉我手头事情很多。" },
      { english: "I've got a lot on my plate this week.", chinese: "这周我很忙。" }
    ],
    pronunciationTips: "'plate' 盘子比喻手头事务"
  },
  {
    id: 175,
    english: "I'm tied up.",
    ipa: "/aɪm taɪd ʌp/",
    chinese: "脱不开身。",
    category: "smalltalk",
    tags: ["忙碌", "借口"],
    examples: [
      { english: "Can I call you back? I'm tied up.", chinese: "等会儿打给你这会儿脱不开身。" },
      { english: "He's tied up in meetings all afternoon.", chinese: "他整个下午都有会。" }
    ],
    pronunciationTips: "'tied up' 比喻被事情拴住了"
  },
  {
    id: 176,
    english: "I'm running on fumes.",
    ipa: "/aɪm ˈrʌnɪŋ ɒn fjuːmz/",
    chinese: "快撑不住了。",
    category: "smalltalk",
    tags: ["疲惫", "压力"],
    examples: [
      { english: "I've been working for 12 hours. Running on fumes.", chinese: "工作了12小时快撑不住了。" },
      { english: "After the all-nighter running on fumes.", chinese: "熬了一夜后快不行了。" }
    ],
    pronunciationTips: "'fumes' 比喻快没能量了"
  },
  {
    id: 177,
    english: "Let's grab a bite.",
    ipa: "/lets ɡræb ə baɪt/",
    chinese: "去吃点东西。",
    category: "smalltalk",
    tags: ["邀约", "餐饮"],
    examples: [
      { english: "I'm hungry. Let's grab a bite.", chinese: "我饿了去吃点东西。" },
      { english: "Want to grab a bite after work?", chinese: "下班后去吃点东西？" }
    ],
    pronunciationTips: "'grab a bite' 比 'eat' 更口语地道"
  },
  {
    id: 178,
    english: "That's a wrap.",
    ipa: "/ðæts ə ræp/",
    chinese: "搞定了。",
    category: "smalltalk",
    tags: ["结束", "影视"],
    examples: [
      { english: "Great work everyone. That's a wrap!", chinese: "大家辛苦了搞定收工！" },
      { english: "After 12 hours of filming director said that's a wrap!", chinese: "拍了12小时后导演说收工！" }
    ],
    pronunciationTips: "源自电影拍摄的术语"
  },
  {
    id: 179,
    english: "Touch wood.",
    ipa: "/tʌtʃ wʊd/",
    chinese: "老天保佑。",
    category: "smalltalk",
    tags: ["迷信", "英式"],
    examples: [
      { english: "Everything's been going well touch wood.", chinese: "一切都很好老天保佑。" },
      { english: "Touch wood the weather will hold.", chinese: "老天保佑天气别变。" }
    ],
    pronunciationTips: "英式用 'touch wood' 美式用 'knock on wood'"
  },
  {
    id: 180,
    english: "Practice what you preach.",
    ipa: "/ˈpræktɪs wɒt juː priːtʃ/",
    chinese: "言行一致。",
    category: "smalltalk",
    tags: ["道理", "批评"],
    examples: [
      { english: "You tell us to save but spend on yourself.", chinese: "你叫我们省钱自己却花。" },
      { english: "He gives advice but never practices what he preaches.", chinese: "他给别人建议自己却做不到。" }
    ],
    pronunciationTips: "'preach' /priːtʃ/"
  },
  {
    id: 181,
    english: "Seat of your pants.",
    ipa: "/siːt əv jɔːr pænts/",
    chinese: "临场发挥。",
    category: "smalltalk",
    tags: ["即兴", "形容"],
    examples: [
      { english: "We didn't prepare. Flying by the seat of our pants.", chinese: "没有准备全靠临场发挥。" },
      { english: "He gave the speech without notes.", chinese: "他即兴演讲完全没看稿。" }
    ],
    pronunciationTips: "形容没有准备地做事"
  },
  {
    id: 182,
    english: "It's now or never.",
    ipa: "/ɪts naʊ ɔːr ˈnevər/",
    chinese: "机不可失。",
    category: "smalltalk",
    tags: ["决定", "鼓励"],
    examples: [
      { english: "This is your chance! Now or never.", chinese: "这是你的机会机不可失！" },
      { english: "If you don't ask her out it's now or never.", chinese: "现在不约以后就没机会了。" }
    ],
    pronunciationTips: "'now or never' 语气紧迫"
  },
  {
    id: 183,
    english: "Call it even.",
    ipa: "/kɔːl ɪt ˈiːvən/",
    chinese: "扯平了。",
    category: "smalltalk",
    tags: ["和解", "公平"],
    examples: [
      { english: "You paid last time I'll pay this time. Call it even.", chinese: "上次你付了这次我来扯平了。" },
      { english: "You helped me I helped you. Let's call it even.", chinese: "你帮我我也帮你扯平了。" }
    ],
    pronunciationTips: "'even' /ˈiːvən/"
  },
  {
    id: 184,
    english: "On the same page.",
    ipa: "/ɒn ðə seɪm peɪdʒ/",
    chinese: "意见一致。",
    category: "smalltalk",
    tags: ["沟通", "一致"],
    examples: [
      { english: "Let's make sure we're on the same page.", chinese: "先确认我们意见一致。" },
      { english: "Good we're all on the same page now.", chinese: "好现在我们意见统一了。" }
    ],
    pronunciationTips: "'page' 比喻同步"
  },
  {
    id: 185,
    english: "Hit the nail on the head.",
    ipa: "/hɪt ðə neɪl ɒn ðə hed/",
    chinese: "说到点子上了。",
    category: "smalltalk",
    tags: ["精准", "赞美"],
    examples: [
      { english: "You hit the nail on the head with that analysis.", chinese: "你的分析一针见血。" },
      { english: "She hit the nail on the head. Exactly the problem.", chinese: "她说到了点子上。" }
    ],
    pronunciationTips: "'nail' /neɪl/"
  },
  {
    id: 186,
    english: "Don't bite the hand that feeds you.",
    ipa: "/doʊnt baɪt ðə hænd ðæt fiːdz juː/",
    chinese: "不要恩将仇报。",
    category: "smalltalk",
    tags: ["道理", "提醒"],
    examples: [
      { english: "He gave you the job and you're complaining?", chinese: "他给了你工作你现在抱怨？" },
      { english: "Be grateful to your mentor.", chinese: "对你的导师心存感激。" }
    ],
    pronunciationTips: "经典谚语"
  },
  {
    id: 187,
    english: "Birds of a feather flock together.",
    ipa: "/bɜːrdz əv ə ˈfeðər flɒk təˈɡeðər/",
    chinese: "物以类聚。",
    category: "smalltalk",
    tags: ["谚语", "社交"],
    examples: [
      { english: "All the engineers sit together. Birds of a feather.", chinese: "工程师都坐在一起物以类聚。" },
      { english: "You guys are always gaming together.", chinese: "你们老是一起打游戏。" }
    ],
    pronunciationTips: "'flock' 是成群的意思"
  },
  {
    id: 188,
    english: "A penny for your thoughts.",
    ipa: "/ə ˈpeni fɔːr jɔːr θɔːts/",
    chinese: "在想什么呢？",
    category: "smalltalk",
    tags: ["关心", "闲聊"],
    examples: [
      { english: "You seem quiet. A penny for your thoughts?", chinese: "看起来有心事在想什么呢？" },
      { english: "I was just daydreaming.", chinese: "我在发呆。" }
    ],
    pronunciationTips: "很老的英语表达但至今仍在使用"
  },
  {
    id: 189,
    english: "Get a move on.",
    ipa: "/ɡet ə muːv ɒn/",
    chinese: "快点。",
    category: "smalltalk",
    tags: ["催促", "日常"],
    examples: [
      { english: "We're going to be late. Get a move on!", chinese: "要迟到了快点！" },
      { english: "Get a move on the taxi is waiting!", chinese: "快点出租车在等了！" }
    ],
    pronunciationTips: "比 'hurry up' 更自然"
  },
  {
    id: 190,
    english: "I'm in two minds.",
    ipa: "/aɪm ɪn tuː maɪndz/",
    chinese: "拿不定主意。",
    category: "smalltalk",
    tags: ["犹豫", "思考"],
    examples: [
      { english: "Should I take the job? I'm in two minds.", chinese: "该接受这份工作吗拿不定主意。" },
      { english: "I'm in two minds about moving.", chinese: "搬去新城市还在犹豫。" }
    ],
    pronunciationTips: "'in two minds' 表示犹豫不决"
  },
  {
    id: 191,
    english: "Take it up a notch.",
    ipa: "/teɪk ɪt ʌp ə nɒtʃ/",
    chinese: "再上一个台阶。",
    category: "smalltalk",
    tags: ["提升", "激励"],
    examples: [
      { english: "Great work. Let's take it up a notch.", chinese: "做得很好再上一个台阶。" },
      { english: "Time to take your performance up a notch.", chinese: "是时候再提升表现。" }
    ],
    pronunciationTips: "'notch' /nɒtʃ/"
  },
  {
    id: 192,
    english: "Throw someone under the bus.",
    ipa: "/θroʊ ˈsʌmwʌn ˈʌndər ðə bʌs/",
    chinese: "推出去背锅。",
    category: "slang",
    tags: ["职场", "批评"],
    examples: [
      { english: "He threw his colleague under the bus.", chinese: "他把同事推出去背锅。" },
      { english: "Don't throw me under the bus.", chinese: "别让我背锅。" }
    ],
    pronunciationTips: "语气较重"
  },
  {
    id: 193,
    english: "Move the needle.",
    ipa: "/muːv ðə ˈniːdl/",
    chinese: "产生实质性影响。",
    category: "slang",
    tags: ["效果", "影响"],
    examples: [
      { english: "This feature will move the needle on engagement.", chinese: "这个功能会提升用户参与度。" },
      { english: "Small tweaks won't move the needle.", chinese: "小修小改不会产生实质影响。" }
    ],
    pronunciationTips: "'needle' 比喻仪表盘指针"
  },
  {
    id: 194,
    english: "I'm buzzing.",
    ipa: "/aɪm ˈbʌzɪŋ/",
    chinese: "超级兴奋。",
    category: "slang",
    tags: ["兴奋", "英式"],
    examples: [
      { english: "I got tickets to the concert! I'm buzzing!", chinese: "买到演唱会票了超级兴奋！" },
      { english: "The team won and everyone was buzzing.", chinese: "团队赢了每个人兴奋不已。" }
    ],
    pronunciationTips: "英式俚语 buzzing 是兴奋激动"
  },
  {
    id: 195,
    english: "I'm chuffed to bits.",
    ipa: "/aɪm tʃʌft tuː bɪts/",
    chinese: "开心极了。",
    category: "slang",
    tags: ["喜悦", "英式"],
    examples: [
      { english: "I passed the exam! Chuffed to bits!", chinese: "通过考试了开心极了！" },
      { english: "She was chuffed to bits about the promotion.", chinese: "她升职了高兴得不得了。" }
    ],
    pronunciationTips: "英式表达 chuffed 是开心/自豪"
  },
  {
    id: 196,
    english: "I'm gutted.",
    ipa: "/aɪm ˈɡʌtɪd/",
    chinese: "太难过了。",
    category: "slang",
    tags: ["失望", "英式"],
    examples: [
      { english: "My team lost the final. I'm gutted.", chinese: "支持的队输了决赛太难过了。" },
      { english: "I was gutted when I didn't get the job.", chinese: "没拿到工作难过得不行。" }
    ],
    pronunciationTips: "英式表达 gutted 是极度失望"
  },
  {
    id: 197,
    english: "I'm crashing.",
    ipa: "/aɪm ˈkræʃɪŋ/",
    chinese: "累趴了。",
    category: "slang",
    tags: ["疲惫", "睡眠"],
    examples: [
      { english: "I'm so tired. I'm crashing as soon as I get home.", chinese: "我太累了到家就睡。" },
      { english: "After the flight I was crashing by 8pm.", chinese: "飞完到家8点就不行了。" }
    ],
    pronunciationTips: "'crash' 比喻累到趴下"
  },
  {
    id: 198,
    english: "Don't bite the hand that feeds you.",
    ipa: "/doʊnt baɪt ðə hænd ðæt fiːdz juː/",
    chinese: "不要恩将仇报。",
    category: "slang",
    tags: ["道理", "提醒"],
    examples: [
      { english: "He gave you the job and you're complaining?", chinese: "他给了你工作你现在抱怨？" },
      { english: "Be grateful to your mentor.", chinese: "对你的导师心存感激。" }
    ],
    pronunciationTips: "经典谚语"
  },
  {
    id: 199,
    english: "It slipped my mind.",
    ipa: "/ɪt slɪpt maɪn maɪnd/",
    chinese: "我忘了。",
    category: "smalltalk",
    tags: ["道歉", "忘记"],
    examples: [
      { english: "Sorry I didn't call. It slipped my mind.", chinese: "抱歉没打电话我完全忘了。" },
      { english: "Did you buy milk? It slipped my mind.", chinese: "你买牛奶了吗我忘了。" }
    ],
    pronunciationTips: "'slipped' 轻读 'mind' 重读"
  },
  {
    id: 200,
    english: "Get out of town!",
    ipa: "/ɡet aʊt əv taʊn/",
    chinese: "不会吧！",
    category: "slang",
    tags: ["惊讶", "夸张"],
    examples: [
      { english: "You won the lottery? Get out of town!", chinese: "你中了彩票不会吧！" },
      { english: "She's quitting her job? Get out of town!", chinese: "她要辞职真的假的？" }
    ],
    pronunciationTips: "夸张表达惊讶"
  }
];
