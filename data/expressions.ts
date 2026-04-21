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
];
