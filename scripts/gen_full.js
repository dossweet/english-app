#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'data', 'expressions.ts');

let content = fs.readFileSync(filePath, 'utf-8');
const arrEnd = content.lastIndexOf('];');
const header = content.substring(0, arrEnd);
const cats = content.substring(arrEnd);

const data = [];

function a(id, en, ipa, zh, cat, tags, e1en, e1zh, e2en, e2zh, tips) {
  data.push({id, en, ipa, zh, cat, tags, e1en, e1zh, e2en, e2zh, tips});
}
// Small talk 31-70
a(31,"I'm all ears.","/aɪm ɔːl ɪrz/","洗耳恭听。","smalltalk",["倾听","沟通"],"Tell me what happened. I'm all ears.","告诉我发生了什么。","You have my attention. I'm all ears.","我在认真听呢。","'ears' 读 /ɪrz/，'all' 拖长表示强调");
a(32,"Speak of the devil.","/spiːk əv ðə ˈdevəl/","说曹操曹操到。","smalltalk",["巧合","日常"],"Speak of the devil! We were just talking about you.","说曹操曹操到！","Oh speak of the devil here comes Tom.","哦说曹操曹操到。","'of the' 弱读为 /əv ðə/");
a(33,"I'm just pulling your leg.","/aɪm dʒʌst ˈpʊlɪŋ jɔːr leɡ/","我开玩笑的啦。","smalltalk",["玩笑","幽默"],"You won the lottery! Just kidding I'm pulling your leg.","你中彩票了！开玩笑的。","Don't take it seriously I was just pulling your leg.","别当真跟你开玩笑呢。","'pulling' /ˈpʊlɪŋ/");
a(34,"I'm feeling under the weather.","/aɪm ˈfiːlɪŋ ˈʌndər ðə ˈweðər/","我身体不太舒服。","smalltalk",["健康","日常"],"I'm feeling under the weather today.","今天身体不太舒服。","She's a bit under the weather.","她不太舒服。","'under the weather' 是习语");
a(35,"I'll keep that in mind.","/aɪl kiːp ðæt ɪn maɪnd/","我会记住的。","smalltalk",["回复","承诺"],"Thanks for the advice I'll keep that in mind.","谢谢建议我会记住的。","Good point. I'll keep that in mind for next time.","好观点下次我会注意。","'keep' 重读");
a(36,"You rock!","/juː rɒk/","你太棒了！","smalltalk",["赞美","鼓励"],"Thanks for helping me move. You rock!","谢谢你帮我搬家！","You finished early? You rock!","你提前完成了？太棒了！","'rock' 短促有力");
a(37,"Don't get me started.","/doʊnt ɡet miː ˈstɑːrtɪd/","别提了。","smalltalk",["抱怨","情绪"],"How was your commute? Don't get me started!","通勤怎么样？别提了！","The meeting was... Don't get me started.","那个会……别提了。","'don't get me' 连读");
a(38,"That's on me.","/ðæts ɒn miː/","是我的错。","smalltalk",["道歉","认错"],"Sorry I forgot your birthday. That's on me.","抱歉忘了你生日是我的错。","Don't blame him. That's on me.","别怪他是我的问题。","'on me' 重读表示承担责任");
a(39,"You can say that again.","/juː kæn seɪ ðæt əˈɡen/","说得太对了。","smalltalk",["同意","强调"],"This weather is freezing! You can say that again.","这天气冷死了说得太对了！","The project is behind. You can say that again.","项目严重落后了可不是嘛。","'again' /əˈɡen/");
a(40,"Fat chance!","/fæt tʃæns/","想得美！","smalltalk",["拒绝","嘲讽"],"Think he'll apologize? Fat chance!","他会道歉想得美！","Fat chance of getting a raise this year.","今年想涨薪没门。","'fat' 重读表示彻底否定");
a(41,"I'm not gonna lie...","/aɪm nɒt ˈɡʌnə laɪ/","说实话……","smalltalk",["诚实","表达"],"I'm not gonna lie that movie was terrible.","说实话那电影太烂了。","I'm not gonna lie I was really nervous.","说实话我当时真的很紧张。","'gonna' = going to");
a(42,"I don't buy it.","/aɪ doʊnt baɪ ɪt/","我不信。","smalltalk",["怀疑","质疑"],"He said he was working late. I don't buy it.","他说在加班我不信。","That explanation sounds fishy. I don't buy it.","那个解释不太对劲。","'don't' 和 'buy' 都重读");
a(43,"Go figure.","/ɡoʊ ˈfɪɡjər/","谁知道呢。","smalltalk",["感慨","无奈"],"He quit after getting promoted. Go figure.","他刚升职就辞职了真搞不懂。","The computer crashed right before my deadline. Go figure.","电脑在截止前崩溃了。","'figure' /ˈfɪɡjər/");
a(44,"I owe you one.","/aɪ oʊ juː wʌn/","我欠你一个人情。","smalltalk",["感谢","人情"],"Thanks for covering my shift. I owe you one!","谢谢你帮我代班欠你个人情！","You really helped me out. I owe you one.","你真的帮了我大忙。","'owe you' 连读为 /oʊ ju/");
a(45,"I'm just saying.","/aɪm dʒʌst ˈseɪɪŋ/","随口一说。","smalltalk",["缓和","表态"],"Not trying to offend you I'm just saying.","不是想冒犯你。","Maybe we should try a different approach. I'm just saying.","也许该换个方法。","语气放轻");
a(46,"I'm swamped.","/aɪm swɒmpt/","忙得不可开交。","smalltalk",["忙碌","压力"],"Can't talk now I'm swamped with work.","现在没法聊忙得不可开交。","I've been swamped all week.","忙了一整周了。","'swamped' /swɒmpt/");
a(47,"Hang in there.","/hæŋ ɪn ðer/","坚持住。","smalltalk",["鼓励","安慰"],"I know it's tough. Just hang in there.","我知道很难坚持住。","Hang in there! Things will get better.","坚持住一切都会好的。","'hang' 的 /hæŋ/ 要发出鼻音");
a(48,"Take your time.","/teɪk jɔːr taɪm/","慢慢来。","smalltalk",["安慰","耐心"],"No rush at all. Take your time.","完全不急慢慢来。","Take your time with the decision.","做决定不着急。","'your time' 拖长表示不急");
a(49,"I swear I'm not lying!","/aɪ swer aɪm nɒt ˈlaɪɪŋ/","我发誓我没说谎！","smalltalk",["强调","保证"],"I saw a UFO last night I swear!","我昨晚看到UFO了我发誓！","It really cost that much. I swear!","真的花了那么多钱！","'swear' 要重读");
a(50,"I'm with you on that.","/aɪm wɪð juː ɒn ðæt/","我同意你。","smalltalk",["同意","支持"],"I think we should postpone. I'm with you.","我觉得应该推迟我同意。","Whatever you decide I'm with you.","不管怎样我都支持。","'with you' 连读为 /wɪð ju/");
a(51,"I've had it up to here.","/aɪv hæd ɪt ʌp tuː hɪr/","我受够了。","smalltalk",["愤怒","爆发"],"I've had it up to here with their excuses.","他们的借口我听够了。","This noise is driving me crazy!","这噪音快把我逼疯了！","'up to here' 配合手势");
a(52,"No hard feelings.","/noʊ hɑːrd ˈfiːlɪŋz/","别往心里去。","smalltalk",["和解","宽慰"],"Sorry about the argument. No hard feelings?","刚才吵架的事抱歉了。","We lost the game but no hard feelings.","输了比赛但没事。","'hard feelings' 重读在 'feelings'");
a(53,"That's the last straw.","/ðæts ðə læst strɔː/","忍无可忍。","smalltalk",["愤怒","爆发"],"He was late again. That's the last straw.","他又迟到了忍无可忍。","When they canceled that was the last straw.","他们取消时我忍无可忍了。","'last straw' 拖长");
a(54,"I'll believe it when I see it.","/aɪl bɪˈliːv ɪt wen aɪ siː ɪt/","眼见为实。","smalltalk",["怀疑","保留"],"He said he'll finish by Friday. I'll believe it when I see it.","他说周五前能搞定我看了才信。","They promised a raise. I'll believe it when I see it.","他们承诺加薪了看到再说吧。","带怀疑 'believe' 重读");
a(55,"That's easier said than done.","/ðæts ˈiːziər sed ðæn dʌn/","说起来容易做起来难。","smalltalk",["现实","建议"],"Just stay calm during the interview? Easier said than done!","面试保持冷静说起来容易做起来难！","You should forgive him. Easier said than done.","你应该原谅他。","'easier' 三音节 /ˈiːziər/");
a(56,"I'll sleep on it.","/aɪl sliːp ɒn ɪt/","我考虑一下。","smalltalk",["决定","慎重"],"That's a big decision. Let me sleep on it.","这个决定不小我考虑一下。","Not sure about the offer? Sleep on it.","不确定先考虑考虑。","'sleep on' 连读");
a(57,"I'm on the fence.","/aɪm ɒn ðə fens/","还在犹豫。","smalltalk",["犹豫","决定"],"Are you moving? I'm still on the fence.","你要搬走还在犹豫。","I'm on the fence about buying this car.","买不买车还在纠结。","'on the' 弱读为 /ɒnðə/");
a(58,"It slipped my mind.","/ɪt slɪpt maɪn maɪnd/","我忘了。","smalltalk",["道歉","忘记"],"Sorry I didn't call. It slipped my mind.","抱歉没打电话我完全忘了。","Did you buy milk? It slipped my mind.","你买牛奶了吗我忘了。","'slipped' 轻读 'mind' 重读");
a(59,"That rings a bell.","/ðæt rɪŋz ə bel/","好耳熟。","smalltalk",["回忆","认知"],"I've heard that name before. It rings a bell.","我以前听过这个名字好耳熟。","That song rings a bell.","那首歌听起来耳熟。","'rings a bell' 比喻唤起记忆");
a(60,"I'm drawing a blank.","/aɪm ˈdrɔːɪŋ ə blæŋk/","脑子一片空白。","smalltalk",["忘记","困惑"],"I know the answer but I'm drawing a blank.","我知道答案但脑子一片空白。","What's his name? I'm drawing a blank.","他叫什么来着我想不起来。","'drawing a blank' 比喻什么都记不起来");
a(61,"I'm in the same boat.","/aɪm ɪn ðə seɪm boʊt/","我也一样。","smalltalk",["共鸣","安慰"],"You're struggling with deadlines? Same boat.","你在为截止日期发愁我也一样。","We're all in the same boat here.","我们都面临同样的情况。","'in the same boat' 比喻处境相同");
a(62,"Don't jinx it!","/doʊnt dʒɪŋks ɪt/","别乌鸦嘴！","smalltalk",["迷信","玩笑"],"We're going to win! Don't jinx it!","我们肯定赢了别乌鸦嘴！","The flight is on time. Don't jinx it!","航班是准点的别乌鸦嘴！","'jinx' 意思是带来霉运");
a(63,"That's a bummer.","/ðæts ə ˈbʌmər/","真倒霉。","smalltalk",["失望","安慰"],"The concert got canceled? That's a bummer.","演唱会取消了真扫兴。","I lost my wallet. That's a bummer.","我丢钱包了太倒霉了。","'bummer' /ˈbʌmər/");
a(64,"What's the damage?","/wɒts ðə ˈdæmɪdʒ/","多少钱？","smalltalk",["付账","玩笑"],"Great dinner! What's the damage?","晚餐很棒多少钱？","After the shopping spree what's the damage?","大采购后花了多少？","'damage' 在这里是玩笑说法");
a(65,"I'm beat.","/aɪm biːt/","我累死了。","smalltalk",["疲惫","日常"],"After the marathon I'm totally beat.","马拉松之后我累死了。","Long day at work. I'm beat.","忙了一天我累坏了。","'beat' 是非常累的口语表达");
a(66,"Hold your horses.","/hoʊld jɔːr ˈhɔːrsɪz/","别着急。","smalltalk",["耐心","阻止"],"Hold your horses! We're not ready yet.","别着急我们还没准备好。","I know you're excited but hold your horses.","我知道你很激动但先等等。","原意是勒住马缰绳");
a(67,"Knock on wood.","/nɒk ɒn wʊd/","老天保佑。","smalltalk",["迷信","好运"],"I've never been sick this year knock on wood.","今年都没生过病老天保佑。","The project is going smoothly. Knock on wood.","项目进展顺利。","西方人敲木头祈求好运");
a(68,"Bury the hatchet.","/ˈberi ðə ˈhætʃɪt/","和解。","smalltalk",["和解","友谊"],"Let's bury the hatchet and move on.","我们和解吧往前看。","They finally buried the hatchet after years.","吵了多年后终于和好了。","'hatchet' /ˈhætʃɪt/");
a(69,"It's a small world.","/ɪts ə smɔːl wɜːrld/","世界真小。","smalltalk",["巧合","感慨"],"We went to the same school? Small world!","我们上过同一所学校世界真小！","I met your cousin in Paris! Small world!","我在巴黎遇到了你表妹！","'world' /wɜːrld/");
a(70,"Fair enough.","/fer ɪˈnʌf/","有道理。","smalltalk",["同意","让步"],"I think we should wait. Fair enough.","我觉得应该等等有道理。","You have a point. Fair enough.","你说得有道理。","'fair' /fer/");

// Business 71-100
a(71,"Let's cut to the chase.","/lets kʌt tuː ðə tʃeɪs/","开门见山吧。","business",["会议","效率"],"We don't have much time. Let's cut to the chase.","时间不多开门见山吧。","Cut to the chase what's the budget?","直说吧预算是多少？","'cut to' 连读");
a(72,"Put a pin in that.","/pʊt ə pɪn ɪn ðæt/","先放一放。","business",["会议","暂停"],"Good point let's put a pin in that for now.","好观点先放一放。","Let's put a pin in this topic and move on.","这个话题先记着。","'put a pin' 连读");
a(73,"I'm on board with that.","/aɪm ɒn bɔːrd wɪð ðæt/","我同意这个。","business",["同意","表态"],"That plan sounds great. I'm on board!","这个计划听起来很棒我赞成！","Is everyone on board with this approach?","大家都同意吗？","'on board' 连读");
a(74,"Tighten our belts.","/ˈtaɪtn aʊr belts/","勒紧裤腰带。","business",["财务","节约"],"Revenue is down. We need to tighten our belts.","收入下降了得省着点。","We're tightening our belts across the board.","我们全面缩减开支。","'tighten' /ˈtaɪtn/");
a(75,"That's a tall order.","/ðæts ə tɔːl ˈɔːrdər/","要求太高了。","business",["挑战","压力"],"You want it done by tomorrow? Tall order.","明天就要要求有点高。","50% growth in one quarter is a tall order.","一季增长50%非常困难。","'tall order' 重读");
a(76,"It's not rocket science.","/ɪts nɒt ˈrɒkɪt ˈsaɪəns/","这又不难。","business",["简单","鼓励"],"Don't overthink it. It's not rocket science.","别想太多这又不难。","Using this software isn't rocket science.","用这个软件又不难。","'rocket science' /ˈrɒkɪt ˈsaɪəns/");
a(77,"Think outside the box.","/θɪŋk ˈaʊtsaɪd ðə bɒks/","跳出框框思考。","business",["创新","鼓励"],"We need fresh ideas. Think outside the box.","我们需要新鲜的想法。","That's creative. You thought outside the box.","这个方案很有创意。","'outside the box' 连读");
a(78,"Keep me in the loop.","/kiːp miː ɪn ðə luːp/","让我了解情况。","business",["信息","沟通"],"Keep me in the loop on any updates.","有更新都通知我。","Thanks for keeping me in the loop.","谢谢让我了解情况。","'in the loop' 比喻在信息圈内");
a(79,"Loop me in.","/luːp miː ɪn/","加我进讨论。","business",["沟通","邮件"],"When you send that email loop me in.","发邮件时请抄送我。","Can you loop me in on that conversation?","把我加到讨论里？","'loop' /luːp/");
a(80,"I'll double down.","/aɪl ˈdʌbl daʊn/","我会加大投入。","business",["投入","决心"],"This strategy works. Let's double down.","这个策略有效我们加大力度。","I'll double down on marketing this quarter.","这季度加大营销投入。","'double down' 来自赌场术语");
a(81,"Play devil's advocate.","/pleɪ ˈdevəlz ˈædvəkɪt/","我来唱反调。","business",["讨论","辩论"],"Let me play devil's advocate for a moment.","让我来唱个反调。","What if the plan fails? Just playing devil's advocate.","如果失败了呢？","'devil's advocate'");
a(82,"Ballpark figure.","/ˈbɔːlpɑːrk ˈfɪɡjər/","大概的数字。","business",["估算","财务"],"Can you give me a ballpark figure?","能给我一个大概数字吗？","Just a ballpark estimate is fine.","大概估一下就行。","'ballpark' 比喻大致范围");
a(83,"Go the extra mile.","/ɡoʊ ðiː ˈekstrə maɪl/","多做一步。","business",["努力","服务"],"She always goes the extra mile for clients.","她总是为客户多做一步。","If you want to stand out go the extra mile.","想脱颖而出就多付出。","'extra' /ˈekstrə/");
a(84,"Call it a day.","/kɔːl ɪt ə deɪ/","今天到此为止。","business",["下班","结束"],"It's 6pm. Let's call it a day.","下午6点了今天到此为止。","Good work everyone. Call it a day!","大家做得好收工！","'call it' 连读");
a(85,"Raise the bar.","/reɪz ðə bɑːr/","提高标准。","business",["目标","激励"],"Competitors are raising the bar.","竞争对手在提高标准。","This product raises the bar for the industry.","这个产品提升了行业标准。","'raise' /reɪz/");
a(86,"Hit the ground running.","/hɪt ðə ɡraʊnd ˈrʌnɪŋ/","快速上手。","business",["启动","效率"],"We need someone who can hit the ground running.","需要能快速上手的人。","She hit the ground running immediately.","她立刻进入状态。","'hit the ground' 连读");
a(87,"Play it by ear.","/pleɪ ɪt baɪ ɪr/","随机应变。","business",["计划","灵活"],"No fixed plan. Let's play it by ear.","没有固定计划随机应变。","Should we book or play it by ear?","订餐厅还是到时候看情况？","'ear' 比喻即兴发挥");
a(88,"Step up your game.","/step ʌp jɔːr ɡeɪm/","提升你的水平。","business",["鼓励","进步"],"Want that promotion? Step up your game.","想升职就得提升自己。","Competition is fierce. Time to step up.","竞争激烈是时候提升了。","'step up' 重读");
a(89,"The ball is in your court.","/ðə bɔːl ɪz ɪn jɔːr kɔːrt/","现在看你的了。","business",["交接","决策"],"I've done my part. The ball is in your court.","我做完了现在看你的了。","We sent the proposal. The ball is in their court.","方案发了等他们回复。","'ball' /bɔːl/");
a(90,"See eye to eye.","/siː aɪ tuː aɪ/","达成一致。","business",["一致","讨论"],"We don't see eye to eye on this issue.","在这个问题上意见不一致。","Glad we finally see eye to eye.","很高兴达成一致。","'eye to eye' 每个词都要清晰");
a(91,"Wear multiple hats.","/wer ˈmʌltɪpl hæts/","身兼多职。","business",["创业","角色"],"In a startup you wear multiple hats.","创业公司里得身兼多职。","I wear multiple hats developer designer support.","我身兼数职。","'wear hats' 比喻扮演不同角色");
a(92,"Get your foot in the door.","/ɡet jɔːr fʊt ɪn ðə dɔːr/","先进入这个行业。","business",["求职","机会"],"An internship gets your foot in the door.","实习是入行的好方法。","I just want to get my foot in the door.","我先入行慢慢学。","比喻先把脚伸进门里");
a(93,"Par for the course.","/pɑːr fɔːr ðə kɔːrs/","意料之中。","business",["预期","常态"],"Last-minute changes? Par for the course.","最后一分钟改需求家常便饭。","Some bugs are par for the course in software.","有些bug在软件开发中正常。","来自高尔夫术语");
a(94,"The devil is in the details.","/ðə ˈdevəl ɪz ɪn ðə dɪˈteɪlz/","魔鬼在细节中。","business",["细节","提醒"],"The plan looks good but the devil is in the details.","计划不错但细节决定成败。","Remember the devil is in the details.","记住细节决定成败。","强调细节");
a(95,"Win-win situation.","/wɪn wɪn ˌsɪtʃuˈeɪʃən/","双赢局面。","business",["谈判","合作"],"This partnership is a win-win for both.","这次合作是双赢。","We need a win-win solution.","需要双赢方案。","'win-win' 商务表达之一");
a(96,"Back to the drawing board.","/bæk tuː ðə ˈdrɔːɪŋ bɔːrd/","从头再来。","business",["失败","重启"],"The prototype failed. Back to the drawing board.","原型失败了从头再来。","Our proposal was rejected. Back to the board.","方案被拒了重新来过。","'drawing board' 原指制图板");
a(97,"Get the green light.","/ɡet ðə ɡriːn laɪt/","得到批准。","business",["审批","启动"],"We got the green light from management.","得到了管理层的批准。","Waiting for the green light to launch.","等待批准启动。","'green light' 比喻绿灯放行");
a(98,"Miss the mark.","/mɪs ðə mɑːrk/","没达到目标。","business",["失败","评估"],"Our Q3 sales missed the mark.","第三季度销售没达标。","The presentation missed the mark.","那个演示没击中要害。","'mark' /mɑːrk/");
a(99,"Cut corners.","/kʌt ˈkɔːrnərz/","偷工减料。","business",["质量","批评"],"Don't cut corners on quality control.","别在质量管控上偷工减料。","If you cut corners now it'll cost us later.","现在偷工减料以后会更贵。","'corners' /ˈkɔːrnərz/");
a(100,"Read the room.","/riːd ðə ruːm/","看气氛。","smalltalk",["情商","沟通"],"The joke didn't land. Read the room.","笑话没人笑学会看气氛。","Before proposing read the room first.","提建议前先看看气氛。","职场情商重要表达");

// Slang 101-130
a(101,"Put out fires.","/pʊt aʊt faɪrz/","救火。","slang",["问题","紧急"],"I spent the whole day putting out fires.","我整天都在救火。","I'm always putting out fires no time to plan.","总在处理紧急问题没时间规划。","比喻处理各种突发问题");
a(102,"Low-hanging fruit.","/loʊ ˈhæŋɪŋ fruːt/","容易搞定的事。","slang",["效率","策略"],"Let's go after the low-hanging fruit first.","先做容易搞定的事。","These quick wins are the low-hanging fruit.","快速见效的事就是低垂的果实。","比喻容易达成的目标");
a(103,"Break a leg!","/breɪk ə leɡ/","祝好运！","slang",["鼓励","演出"],"Big presentation today? Break a leg!","今天有大演示祝你好运！","Break a leg on stage tonight!","今晚演出加油！","表演界的吉利话");
a(104,"It's a piece of cake.","/ɪts ə piːs əv keɪk/","小菜一碟。","slang",["简单","日常"],"The exam was a piece of cake!","考试太简单了小菜一碟！","Fixing this bug is a piece of cake.","修这个bug小菜一碟。","'piece of' 连读为 /piːs əv/");
a(105,"That's a steal!","/ðæts ə stiːl/","太划算了！","slang",["购物","惊叹"],"This jacket was only 50 bucks? That's a steal!","这件外套只要50块太划算了！","I got the phone for half price. What a steal!","半价买了这个手机太值了！","'steal' 重读强调");
a(106,"Spill the tea.","/spɪl ðə tiː/","快说说八卦！","slang",["八卦","社交"],"I heard you went on a date! Spill the tea!","听说你去约会了快说说！","OK everyone spill the tea.","好了大家说说八卦。","'tea' 在这里不是茶");
a(107,"I'm down for that.","/aɪm daʊn fɔːr ðæt/","这个可以有。","slang",["同意","邀约"],"Anyone want pizza? I'm down for that.","有人想吃披萨吗我可以。","Movie tonight? I'm down!","今晚看电影走起！","'down' 语气上扬");
a(108,"Knock it off.","/nɒk ɪt ɒf/","别闹了。","slang",["制止","烦躁"],"Hey knock it off! You're being too loud.","嘿别闹了你们太吵了。","Knock it off you two.","你俩别闹了。","'knock' 中 'k' 要发音");
a(109,"Keep your chin up.","/kiːp jɔːr tʃɪn ʌp/","抬起头来。","slang",["鼓励","安慰"],"I know things are tough. Keep your chin up.","我知道情况不好抬起头来。","Keep your chin up! Tomorrow is a new day.","别气馁明天又是新的一天。","'chin up' 比喻抬高下巴");
a(110,"Bite the bullet.","/baɪt ðə ˈbʊlɪt/","硬着头皮上。","slang",["勇气","面对"],"I'll bite the bullet and get it done.","我硬着头皮上。","Just bite the bullet and get it over with.","咬咬牙做完就没事了。","'bite the bullet' 原指战场咬子弹");
a(111,"Hit the sack.","/hɪt ðə sæk/","睡觉去。","slang",["休息","日常"],"I'm exhausted. Time to hit the sack.","我累死了该睡觉了。","I hit the sack early last night.","我昨晚很早就睡了。","'sack' 比喻床铺");
a(112,"Let the cat out of the bag.","/let ðə kæt aʊt əv ðə bæɡ/","说漏嘴了。","slang",["秘密","意外"],"She let the cat out of the bag about the party.","她把派对的事说漏嘴了。","Who let the cat out of the bag?","谁说漏嘴了？","'cat out of' 要连读");
a(113,"When pigs fly.","/wen pɪɡz flaɪ/","太阳从西边出来。","slang",["不可能","幽默"],"He'll apologize when pigs fly.","他会道歉太阳从西边出来。","You'll get promoted when pigs fly.","你升职等下辈子。","夸张说法表示绝无可能");
a(114,"Barking up the wrong tree.","/ˈbɑːrkɪŋ ʌp ðə rɒŋ triː/","找错人了。","slang",["误会","提醒"],"If you think I took your pen you're barking up the wrong tree.","以为我拿了你笔找错人了。","He's blaming the intern but barking up the wrong tree.","他在怪实习生但怪错人了。","指猎犬对错树叫");
a(115,"Once in a blue moon.","/wʌns ɪn ə bluː muːn/","千载难逢。","slang",["频率","稀有"],"She visits us once in a blue moon.","她难得来看我们。","I eat fast food once in a blue moon.","我极少吃快餐。","'blue moon' 指一个月两次满月");
a(116,"The early bird catches the worm.","/ðiː ˈɜːrli bɜːrd ˈkætʃɪz ðə wɜːrm/","早起的鸟儿有虫吃。","slang",["勤奋","谚语"],"I always get to the office first. Early bird catches the worm.","我总第一个到办公室。","Want the best deals? Be an early bird.","想抢到最好的折扣得趁早。","'bird' 和 'worm' 都重读");
a(117,"Put yourself in my shoes.","/pʊt jɔːrˈself ɪn maɪ ʃuːz/","换位思考。","slang",["换位","理解"],"Before you judge put yourself in my shoes.","评判之前先站在我的角度想想。","It's not easy. Put yourself in my shoes.","这事不容易你换位思考。","'shoes' 比喻处境");
a(118,"Up in the air.","/ʌp ɪn ðiː er/","悬而未决。","slang",["未定","等待"],"Our travel plans are still up in the air.","旅行计划还没定下来。","The project's future is up in the air.","项目未来不确定。","'up in the air' 比喻事情悬在空中");
a(119,"Out of the blue.","/aʊt əv ðə bluː/","突然地。","slang",["意外","突然"],"She showed up out of the blue after ten years.","她十年后突然出现了。","The news came out of the blue.","消息来得很突然。","'blue' 指蓝天比喻晴天霹雳");
a(120,"Game changer.","/ɡeɪm ˈtʃeɪndʒər/","改变格局的东西。","slang",["创新","重要"],"This new AI tool is a total game changer.","这个新AI工具完全改变了游戏规则。","Smartphones were a game changer for communication.","智能手机是通讯方式的革命。","'game changer' 是技术领域常用语");
a(121,"Face the music.","/feɪs ðə ˈmjuːzɪk/","承担后果。","slang",["责任","面对"],"You made a mistake. Face the music.","你犯了错得承担后果。","Time to face the music and tell the truth.","是时候面对现实说实话了。","'face the music' 源于军人被开除时的仪式");
a(122,"Get out of town!","/ɡet aʊt əv taʊn/","不会吧！","slang",["惊讶","夸张"],"You won the lottery? Get out of town!","你中了彩票不会吧！","She's quitting her job? Get out of town!","她要辞职真的假的？","夸张表达惊讶");
a(123,"I'm on the ball.","/aɪm ɒn ðə bɔːl/","我很在状态。","slang",["状态","高效"],"You're really on the ball today!","你今天状态真不错！","He's always on the ball in meetings.","他开会时反应很快。","'on the ball' 形容机敏高效");
a(124,"Keep me posted.","/kiːp miː ˈpoʊstɪd/","随时告诉我。","slang",["信息","沟通"],"Keep me posted on how it goes.","随时告诉我进展。","I'll keep you posted on the results.","有结果了我通知你。","'keep someone posted' 是地道表达");
a(125,"I'm counting on you.","/aɪm ˈkaʊntɪŋ ɒn juː/","我指望你了。","slang",["信任","期待"],"I'm counting on you to get this done.","我指望你完成这件事。","Don't let me down. I'm counting on you!","别让我失望我就靠你了！","'counting on' 连读");
a(126,"Take it easy.","/teɪk ɪt ˈiːzi/","放轻松。","slang",["安慰","告别"],"Take it easy everything will be fine.","放轻松一切都会好的。","See you tomorrow. Take it easy!","明天见保重！","最常用的安慰和告别语");
a(127,"Facepalm.","/ˈfeɪspɑːm/","捂脸。","slang",["无奈","搞笑"],"He said something stupid again. Facepalm.","他又说了蠢话捂脸。","I read my old tweets. Major facepalm.","看了我以前的推特捂脸。","'facepalm' /ˈfeɪspɑːm/");
a(128,"I couldn't care less.","/aɪ ˈkʊdnt ker les/","我完全不在乎。","slang",["冷漠","表达"],"He doesn't like my outfit? I couldn't care less.","他不喜欢我的穿搭我完全不在乎。","About their opinion I couldn't care less.","他们的看法我压根不在乎。","'couldn't' /ˈkʊdnt/");
a(129,"Don't count your chickens.","/doʊnt kaʊnt jɔːr ˈtʃɪkɪnz/","别高兴得太早。","slang",["劝诫","谚语"],"I'm sure I'll get the job! Don't count your chickens.","肯定能拿到工作别高兴太早。","They're spending the bonus already? Don't count your chickens.","已经开始花奖金了？","谚语语速放慢");
a(130,"Can't make heads or tails.","/kænt meɪk hedz ɔːr teɪlz/","完全搞不懂。","slang",["困惑","表达"],"I can't make heads or tails of this manual.","这个说明书完全看不懂。","I couldn't make heads or tails of her explanation.","她的解释我完全没听懂。","'heads or tails' 原指抛硬币");

// Travel 131-150
a(131,"Can I get a ride?","/kæn aɪ ɡet ə raɪd/","能搭个便车吗？","travel",["交通","搭车"],"My car broke down. Can I get a ride?","我车坏了能搭个便车吗？","I can give you a ride to the station.","我可以顺路捎你去车站。","'get a ride' 比 'catch a ride' 更常用");
a(132,"I'm just browsing.","/aɪm dʒʌst ˈbraʊzɪŋ/","我随便看看。","travel",["购物","日常"],"Can I help you? No thanks just browsing.","需要帮忙吗？不用了随便看看。","I was browsing and saw this nice shirt.","随便逛逛看到这件衬衫。","'browsing' /ˈbraʊzɪŋ/");
a(133,"Is there a catch?","/ɪz ðer ə kætʃ/","有什么猫腻？","travel",["质疑","谨慎"],"The price seems too good. Is there a catch?","价格好得离谱有什么条件？","Free trial? Is there a catch?","免费试用有什么猫腻？","'catch' 是隐藏的问题");
a(134,"I need to freshen up.","/aɪ niːd tuː ˈfreʃən ʌp/","我得洗漱一下。","travel",["住宿","日常"],"Let me drop my bags and freshen up.","我先放下行李洗漱一下。","After the flight I just need to freshen up.","飞了这么久我得先洗漱。","'freshen up' /ˈfreʃən ʌp/");
a(135,"Can you drop me off?","/kæn juː drɒp miː ɒf/","放我下来好吗？","travel",["交通","下车"],"Can you drop me off at the next intersection?","能在下个路口放我下来吗？","Just drop me off here thanks!","就在这儿放我下来吧谢谢！","'drop off' 是固定短语");
a(136,"I'd like to check in.","/aɪd laɪk tuː tʃek ɪn/","我想办理入住。","travel",["住宿","酒店"],"Hello I'd like to check in. I have a reservation.","你好我想办理入住有预约。","Check-in time is at 3pm.","入住时间是下午3点。","'check in' 是固定搭配");
a(137,"What's the Wi-Fi password?","/wɒts ðə ˈwaɪfaɪ ˈpæswɜːrd/","Wi-Fi密码？","travel",["住宿","网络"],"Excuse me what's the Wi-Fi password?","打扰一下Wi-Fi密码？","Is the Wi-Fi free?","Wi-Fi是免费的吗？","'password' /ˈpæswɜːrd/");
a(138,"Is breakfast included?","/ɪz ˈbrekfəst ɪnˈkluːdɪd/","含早餐吗？","travel",["住宿","餐饮"],"Does the room rate include breakfast?","房费含早餐吗？","Breakfast is included from 7 to 10am.","早餐含在房费里。","'included' /ɪnˈkluːdɪd/");
a(139,"I'd like a window seat.","/aɪd laɪk ə ˈwɪndoʊ siːt/","想要靠窗座位。","travel",["交通","飞机"],"Can I have a window seat please?","能给我靠窗座位吗？","I prefer a window seat on flights.","我坐飞机喜欢靠窗。","'window' /ˈwɪndoʊ/");
a(140,"I have a layover.","/aɪ hæv ə ˈleɪoʊvər/","我要中转。","travel",["交通","飞机"],"I have a three-hour layover in Shanghai.","我在上海中转三小时。","Anything to do during the layover?","转机期间有什么好玩的？","'layover' 重音在第一音节");
a(141,"This is on the house.","/ðɪs ɪz ɒn ðə haʊs/","这是免费的。","travel",["餐饮","惊喜"],"The dessert is on the house tonight.","今晚的甜品是餐厅送的。","Don't worry about the drink. On the house.","别担心饮料钱免费赠送。","'on the house' 指店家请客");
a(142,"Do you have any vacancies?","/duː juː hæv ˈeni ˈveɪkənsiz/","有空房吗？","travel",["住宿","询问"],"Do you have any vacancies for tonight?","今晚有空房吗？","Sorry no vacancies. Fully booked.","抱歉没空房了。","'vacancies' /ˈveɪkənsiz/");
a(143,"I'll take it to go.","/aɪl teɪk ɪt tuː ɡoʊ/","我要外带。","travel",["餐饮","打包"],"A coffee and a sandwich to go please.","一杯咖啡和一个三明治外带。","Here or to go? To go please.","在这儿吃还是带走？带走。","'to go' 是外带标准说法");
a(144,"How much does this cost?","/haʊ mʌtʃ dʌz ðɪs kɒst/","这个多少钱？","travel",["购物","询问"],"How much does this cost? No price tag.","多少钱没看到价格标签？","How much does this cost with tax?","含税多少钱？","'cost' /kɒst/");
a(145,"Can I get a discount?","/kæn aɪ ɡet ə ˈdɪskaʊnt/","能打折吗？","travel",["购物","砍价"],"Is there any discount if I buy two?","买两个有折扣吗？","Can I get a student discount?","有学生折扣吗？","'discount' /ˈdɪskaʊnt/");
a(146,"I'd like to make a reservation.","/aɪd laɪk tuː meɪk ə ˌrezərˈveɪʃən/","我想预约。","travel",["餐饮","预约"],"I'd like a reservation for two at 7pm.","我想预约今晚7点两位。","Can I make a reservation for next Friday?","可以预约下周五吗？","'reservation'");
a(147,"Is it within walking distance?","/ɪz ɪt wɪˈðɪn ˈwɔːkɪŋ ˈdɪstəns/","走路能到吗？","travel",["问路","距离"],"Is the museum within walking distance?","博物馆走路能到吗？","About 10 minutes walking distance.","走路大概10分钟。","'walking distance' 是固定搭配");
a(148,"I need to exchange currency.","/aɪ niːd tuː ɪksˈtʃeɪndʒ ˈkɜːrənsi/","我需要换汇。","travel",["货币","银行"],"Where can I exchange currency?","哪里能换汇？","I need to exchange USD for RMB.","需要把美元换成人民币。","'currency' /ˈkɜːrənsi/");
a(149,"Can we split the bill?","/kæn wiː splɪt ðə bɪl/","AA吗？","travel",["餐饮","付账"],"Can we split the bill evenly?","可以平摊账单吗？","Let's split the bill three ways.","三个人平摊。","'split the bill' 是AA制最地道的说法");
a(150,"Take a rain check.","/teɪk ə reɪn tʃek/","改天吧。","travel",["婉拒","改期"],"Can't make it tonight. Rain check?","今晚来不了改天吧？","I'll take a rain check on that drink.","那杯酒改天再喝。","'rain check' 原指比赛延期改天看的票根");

// More small talk / sayings 151-180
a(151,"I hear you.","/aɪ hɪr juː/","我懂你的意思。","smalltalk",["理解","共情"],"I know it's frustrating. I hear you.","我知道很沮丧我理解。","I hear you but we have to follow the rules.","我明白但必须按规定来。","比 'I understand' 更自然");
a(152,"That's not my cup of tea.","/ðæts nɒt maɪ kʌp əv tiː/","不是我的菜。","smalltalk",["偏好","拒绝"],"Horror movies are not my cup of tea.","恐怖片不是我的菜。","Coding isn't really my cup of tea.","编程不是我的强项。","'cup of tea' 比喻喜欢的事物");
a(153,"I've got your back.","/aɪv ɡɒt jɔːr bæk/","我支持你。","smalltalk",["支持","友情"],"Don't worry about the presentation. I've got your back.","别担心演示我支持你。","You can count on me. I've got your back.","你可以相信我我罩着你。","'got your back' 更有力更亲切");
a(154,"I'm over the moon.","/aɪm ˈoʊvər ðə muːn/","开心极了。","smalltalk",["喜悦","表达"],"She got the job! She's over the moon.","她拿到工作开心极了！","I'm over the moon about the news!","听到消息高兴得不得了！","'over the moon' 比喻开心到飞上天");
a(155,"Down to earth.","/daʊn tuː ɜːrθ/","脚踏实地的。","smalltalk",["性格","赞美"],"Despite being famous she's very down to earth.","虽然很有名但她很平易近人。","I like working with him. He's really down to earth.","我喜欢跟他共事。","英文中是非常正面的评价");
a(156,"Me time.","/miː taɪm/","属于自己的时间。","smalltalk",["放松","生活"],"I need some me time this weekend.","这周末我需要自己的时间。","Everyone needs a little me time.","每个人都需要独处的时间。","'me time' 是现代常用口语");
a(157,"What's the scoop?","/wɒts ðə skuːp/","有什么消息？","smalltalk",["询问","闲聊"],"What's the scoop on the new project?","新项目有什么消息？","Hey what's the scoop?","嘿有什么新鲜事？","'scoop' 原指独家新闻");
a(158,"I'm pulling for you.","/aɪm ˈpʊlɪŋ fɔːr juː/","我为你加油。","smalltalk",["鼓励","支持"],"Your interview is tomorrow. I'm pulling for you!","你明天面试我为你加油！","No matter what I'm pulling for you.","不管怎样我都支持你。","'pulling for you' 很有温度的表达");
a(159,"That's a load off my mind.","/ðæts ə loʊd ɒf maɪ maɪnd/","我放心了。","smalltalk",["轻松","释然"],"The test was negative. I'm so relieved.","检查结果是阴性我放心了。","You finished the report? Load off my mind.","报告完成心里石头落地了。","'load off' 比喻卸下重担");
a(160,"It's up to you.","/ɪts ʌp tuː juː/","你来决定。","smalltalk",["选择","表态"],"Where should we eat? It's up to you.","我们去哪吃你来决定。","Whatever you think is best. It's up to you.","你说了算。","'up to you' 非常地道");
a(161,"Two heads are better than one.","/tuː hedz ɑːr ˈbetər ðæn wʌn/","三个臭皮匠顶个诸葛亮。","smalltalk",["谚语","合作"],"Let's work together. Two heads are better than one.","一起来做吧。","I'm stuck. Can you help? Two heads are better than one.","我卡住了来帮忙。","经典谚语");
a(162,"Don't put all your eggs in one basket.","/doʊnt pʊt ɔːl jɔːr eɡz ɪn wʌn ˈbæskɪt/","不要把鸡蛋放一个篮子里。","smalltalk",["道理","投资"],"Invest in different things. Don't put all your eggs in one basket.","投资要分散。","I'm applying to multiple jobs.","我在投多家公司。","经典投资谚语");
a(163,"Rome wasn't built in a day.","/roʊm ˈwɒznt bɪlt ɪn ə deɪ/","罗马不是一天建成的。","smalltalk",["耐心","谚语"],"Learning a language takes time.","学语言需要时间。","Don't rush the project.","别催项目。","经典谚语提醒耐心");
a(164,"The more the merrier.","/ðə mɔːr ðə ˈmeriər/","人越多越热闹。","smalltalk",["邀请","聚会"],"Can I bring my friend? The more the merrier!","我能带朋友吗？人越多越热闹！","We're having a party. The more the merrier.","开派对人越多越好！","'merrier' 是 merry 的比较级");
a(165,"Better late than never.","/ˈbetər leɪt ðæn ˈnevər/","迟到总比不到好。","smalltalk",["安慰","谚语"],"I finally finished. Better late than never.","我终于完成了。","Sorry I'm late! Better late than never right?","抱歉来晚了！","经典谚语");
a(166,"No pain no gain.","/noʊ peɪn noʊ ɡeɪn/","不劳无获。","smalltalk",["鼓励","谚语"],"This workout is tough! No pain no gain.","这个训练好累！","Working hard will pay off.","现在努力以后会有回报。","经典健身/励志谚语");
a(167,"Honesty is the best policy.","/ˈɒnɪsti ɪz ðə best ˈpɒlɪsi/","诚实为上策。","smalltalk",["道理","道德"],"Just tell them the truth.","跟他们说实话。","I know it's hard but honesty is the best.","我知道很难但诚实最好。","经典谚语");
a(168,"Better safe than sorry.","/ˈbetər seɪf ðæn ˈsɒri/","有备无患。","smalltalk",["谨慎","提醒"],"Bring an umbrella. Better safe than sorry.","带把伞有备无患。","I'll double-check the code. Better safe than sorry.","再检查一遍代码。","经典谚语");
a(169,"Actions speak louder than words.","/ˈækʃənz spiːk ˈlaʊdər ðæn wɜːrdz/","行动胜于空谈。","smalltalk",["道理","劝诫"],"He keeps promising but never delivers.","他总承诺但不兑现。","Stop talking and start doing.","别说了开始做。","经典谚语");
a(170,"Every cloud has a silver lining.","/ˈevri klaʊd hæz ə ˈsɪlvər ˈlaɪnɪŋ/","黑暗中总有一线光明。","smalltalk",["鼓励","乐观"],"I lost my job but found a better one.","丢了工作但找到了更好的。","Don't be too sad. Every cloud has a silver lining.","别太难过。","经典谚语");
a(171,"Strike while the iron is hot.","/straɪk waɪl ðiː ˈaɪərn ɪz hɒt/","趁热打铁。","smalltalk",["时机","行动"],"They're interested. Strike while the iron is hot.","他们感兴趣趁热打铁。","You should ask her out now. Strike while the iron is hot.","你现在就该约她趁热打铁。","经典谚语");
a(172,"When in Rome do as the Romans do.","/wen ɪn roʊm duː æz ðə ˈroʊmənz duː/","入乡随俗。","smalltalk",["文化","旅行"],"In Japan you bow when greeting. When in Rome.","在日本打招呼要鞠躬入乡随俗。","I'll try the local food. When in Rome.","试试当地食物入乡随俗。","经典旅行名言");
a(173,"Easy come easy go.","/ˈiːzi kʌm ˈiːzi ɡoʊ/","来得容易去得快。","smalltalk",["感慨","道理"],"He spent his lottery winnings in a month.","他一个月花完彩票奖金。","Don't worry about losing it. Easy come easy go.","别在意丢的钱。","经典谚语");
a(174,"I've got a lot on my plate.","/aɪv ɡɒt ə lɒt ɒn maɪ pleɪt/","手头有很多事。","smalltalk",["忙碌","表达"],"Can you help? I've got a lot on my plate.","抱歉我手头事情很多。","I've got a lot on my plate this week.","这周我很忙。","'plate' 盘子比喻手头事务");
a(175,"I'm tied up.","/aɪm taɪd ʌp/","脱不开身。","smalltalk",["忙碌","借口"],"Can I call you back? I'm tied up.","等会儿打给你这会儿脱不开身。","He's tied up in meetings all afternoon.","他整个下午都有会。","'tied up' 比喻被事情拴住了");
a(176,"I'm running on fumes.","/aɪm ˈrʌnɪŋ ɒn fjuːmz/","快撑不住了。","smalltalk",["疲惫","压力"],"I've been working for 12 hours. Running on fumes.","工作了12小时快撑不住了。","After the all-nighter running on fumes.","熬了一夜后快不行了。","'fumes' 比喻快没能量了");
a(177,"Let's grab a bite.","/lets ɡræb ə baɪt/","去吃点东西。","smalltalk",["邀约","餐饮"],"I'm hungry. Let's grab a bite.","我饿了去吃点东西。","Want to grab a bite after work?","下班后去吃点东西？","'grab a bite' 比 'eat' 更口语地道");
a(178,"That's a wrap.","/ðæts ə ræp/","搞定了。","smalltalk",["结束","影视"],"Great work everyone. That's a wrap!","大家辛苦了搞定收工！","After 12 hours of filming director said that's a wrap!","拍了12小时后导演说收工！","源自电影拍摄的术语");
a(179,"Touch wood.","/tʌtʃ wʊd/","老天保佑。","smalltalk",["迷信","英式"],"Everything's been going well touch wood.","一切都很好老天保佑。","Touch wood the weather will hold.","老天保佑天气别变。","英式用 'touch wood' 美式用 'knock on wood'");
a(180,"Practice what you preach.","/ˈpræktɪs wɒt juː priːtʃ/","言行一致。","smalltalk",["道理","批评"],"You tell us to save but spend on yourself.","你叫我们省钱自己却花。","He gives advice but never practices what he preaches.","他给别人建议自己却做不到。","'preach' /priːtʃ/");

// Remaining 181-200
a(181,"Seat of your pants.","/siːt əv jɔːr pænts/","临场发挥。","smalltalk",["即兴","形容"],"We didn't prepare. Flying by the seat of our pants.","没有准备全靠临场发挥。","He gave the speech without notes.","他即兴演讲完全没看稿。","形容没有准备地做事");
a(182,"It's now or never.","/ɪts naʊ ɔːr ˈnevər/","机不可失。","smalltalk",["决定","鼓励"],"This is your chance! Now or never.","这是你的机会机不可失！","If you don't ask her out it's now or never.","现在不约以后就没机会了。","'now or never' 语气紧迫");
a(183,"Call it even.","/kɔːl ɪt ˈiːvən/","扯平了。","smalltalk",["和解","公平"],"You paid last time I'll pay this time. Call it even.","上次你付了这次我来扯平了。","You helped me I helped you. Let's call it even.","你帮我我也帮你扯平了。","'even' /ˈiːvən/");
a(184,"On the same page.","/ɒn ðə seɪm peɪdʒ/","意见一致。","smalltalk",["沟通","一致"],"Let's make sure we're on the same page.","先确认我们意见一致。","Good we're all on the same page now.","好现在我们意见统一了。","'page' 比喻同步");
a(185,"Hit the nail on the head.","/hɪt ðə neɪl ɒn ðə hed/","说到点子上了。","smalltalk",["精准","赞美"],"You hit the nail on the head with that analysis.","你的分析一针见血。","She hit the nail on the head. Exactly the problem.","她说到了点子上。","'nail' /neɪl/");
a(186,"Don't bite the hand that feeds you.","/doʊnt baɪt ðə hænd ðæt fiːdz juː/","不要恩将仇报。","smalltalk",["道理","提醒"],"He gave you the job and you're complaining?","他给了你工作你现在抱怨？","Be grateful to your mentor.","对你的导师心存感激。","经典谚语");
a(187,"Birds of a feather flock together.","/bɜːrdz əv ə ˈfeðər flɒk təˈɡeðər/","物以类聚。","smalltalk",["谚语","社交"],"All the engineers sit together. Birds of a feather.","工程师都坐在一起物以类聚。","You guys are always gaming together.","你们老是一起打游戏。","'flock' 是成群的意思");
a(188,"A penny for your thoughts.","/ə ˈpeni fɔːr jɔːr θɔːts/","在想什么呢？","smalltalk",["关心","闲聊"],"You seem quiet. A penny for your thoughts?","看起来有心事在想什么呢？","I was just daydreaming.","我在发呆。","很老的英语表达但至今仍在使用");
a(189,"Get a move on.","/ɡet ə muːv ɒn/","快点。","smalltalk",["催促","日常"],"We're going to be late. Get a move on!","要迟到了快点！","Get a move on the taxi is waiting!","快点出租车在等了！","比 'hurry up' 更自然");
a(190,"I'm in two minds.","/aɪm ɪn tuː maɪndz/","拿不定主意。","smalltalk",["犹豫","思考"],"Should I take the job? I'm in two minds.","该接受这份工作吗拿不定主意。","I'm in two minds about moving.","搬去新城市还在犹豫。","'in two minds' 表示犹豫不决");
a(191,"Take it up a notch.","/teɪk ɪt ʌp ə nɒtʃ/","再上一个台阶。","smalltalk",["提升","激励"],"Great work. Let's take it up a notch.","做得很好再上一个台阶。","Time to take your performance up a notch.","是时候再提升表现。","'notch' /nɒtʃ/");
a(192,"Throw someone under the bus.","/θroʊ ˈsʌmwʌn ˈʌndər ðə bʌs/","推出去背锅。","slang",["职场","批评"],"He threw his colleague under the bus.","他把同事推出去背锅。","Don't throw me under the bus.","别让我背锅。","语气较重");
a(193,"Move the needle.","/muːv ðə ˈniːdl/","产生实质性影响。","slang",["效果","影响"],"This feature will move the needle on engagement.","这个功能会提升用户参与度。","Small tweaks won't move the needle.","小修小改不会产生实质影响。","'needle' 比喻仪表盘指针");
a(194,"I'm buzzing.","/aɪm ˈbʌzɪŋ/","超级兴奋。","slang",["兴奋","英式"],"I got tickets to the concert! I'm buzzing!","买到演唱会票了超级兴奋！","The team won and everyone was buzzing.","团队赢了每个人兴奋不已。","英式俚语 buzzing 是兴奋激动");
a(195,"I'm chuffed to bits.","/aɪm tʃʌft tuː bɪts/","开心极了。","slang",["喜悦","英式"],"I passed the exam! Chuffed to bits!","通过考试了开心极了！","She was chuffed to bits about the promotion.","她升职了高兴得不得了。","英式表达 chuffed 是开心/自豪");
a(196,"I'm gutted.","/aɪm ˈɡʌtɪd/","太难过了。","slang",["失望","英式"],"My team lost the final. I'm gutted.","支持的队输了决赛太难过了。","I was gutted when I didn't get the job.","没拿到工作难过得不行。","英式表达 gutted 是极度失望");
a(197,"I'm crashing.","/aɪm ˈkræʃɪŋ/","累趴了。","slang",["疲惫","睡眠"],"I'm so tired. I'm crashing as soon as I get home.","我太累了到家就睡。","After the flight I was crashing by 8pm.","飞完到家8点就不行了。","'crash' 比喻累到趴下");
a(198,"Don't bite the hand that feeds you.","/doʊnt baɪt ðə hænd ðæt fiːdz juː/","不要恩将仇报。","slang",["道理","提醒"],"He gave you the job and you're complaining?","他给了你工作你现在抱怨？","Be grateful to your mentor.","对你的导师心存感激。","经典谚语");
a(199,"It slipped my mind.","/ɪt slɪpt maɪn maɪnd/","我忘了。","smalltalk",["道歉","忘记"],"Sorry I didn't call. It slipped my mind.","抱歉没打电话我完全忘了。","Did you buy milk? It slipped my mind.","你买牛奶了吗我忘了。","'slipped' 轻读 'mind' 重读");
a(200,"Get out of town!","/ɡet aʊt əv taʊn/","不会吧！","slang",["惊讶","夸张"],"You won the lottery? Get out of town!","你中了彩票不会吧！","She's quitting her job? Get out of town!","她要辞职真的假的？","夸张表达惊讶");

// ===== GENERATE =====
const newEntries = data.map(d => {
  return `  {\n    id: ${d.id},\n    english: ${JSON.stringify(d.en)},\n    ipa: ${JSON.stringify(d.ipa)},\n    chinese: ${JSON.stringify(d.zh)},\n    category: "${d.cat}",\n    tags: [${d.tags.map(t => JSON.stringify(t)).join(', ')}],\n    examples: [\n      { english: ${JSON.stringify(d.e1en)}, chinese: ${JSON.stringify(d.e1zh)} },\n      { english: ${JSON.stringify(d.e2en)}, chinese: ${JSON.stringify(d.e2zh)} }\n    ],\n    pronunciationTips: ${JSON.stringify(d.tips)}\n  }`;
}).join(',\n');

const full = header + ',\n' + newEntries + '\n];\n\n' + cats;
fs.writeFileSync(filePath, full, 'utf-8');
const count = (full.match(/id: \d+/g) || []).length;
console.log('Done! Total entries with id:', count);
