import { Level, Question } from './types';

// --- 系统常量 ---
export const QUESTIONS_PER_LEVEL = 5; // 每关题目数量
export const PASS_THRESHOLD = 5;      // 通关所需最小正确题数 (必须全对)

// --- 关卡定义 ---
export const LEVELS: Level[] = [
  {
    id: 1,
    title: "第一关：无常",
    subtitle: "诸行无常，是生灭法",
    description: "面对失去与变化，心该安住何处？(需全对通关)",
    difficulty: 1,
  },
  {
    id: 2,
    title: "第二关：我执",
    subtitle: "放下小我，方见大千",
    description: "当被人误解或辱骂时，是谁在感到疼痛？(需全对通关)",
    difficulty: 2,
  },
  {
    id: 3,
    title: "第三关：布施",
    subtitle: "以此功德，普及于一切",
    description: "给予不仅仅是物质，更是心量的修行。(需全对通关)",
    difficulty: 3,
  },
  {
    id: 4,
    title: "第四关：精进",
    subtitle: "如救头燃，勿令空过",
    description: "修行路上，如何面对懈怠与疲惫？(需全对通关)",
    difficulty: 4,
  },
  {
    id: 5,
    title: "第五关：本来无一物",
    subtitle: "菩提本无树，明镜亦非台",
    description: "在这个纷繁的世界，哪里是净土？(需全对通关)",
    difficulty: 5,
  },
  {
    id: 6,
    title: "第六关：终极一问",
    subtitle: "不可说，不可说",
    description: "通往彼岸的最后一步。(需全对通关)",
    difficulty: 6,
  }
];

// --- 题目数据 ---

const level1Questions: Question[] = [
    { q: "兰花枯萎，心作何感想？", 
      options: [
        { text: "伤心，付出的心血白费了。", isCorrect: false, feedback: "伤心是人之常情，但这是看到了'失'，未看到'法'的本质。" }, 
        { text: "花开花落终有时。因缘散尽，不必挂怀，随顺自然。", isCorrect: true, feedback: "善哉！缘聚则生，缘散则灭，已得平常心，了知生灭本性。" }, 
        { text: "下次要更努力让它长生不老，或寻找替代品。", isCorrect: false, feedback: "强求长生或以外物填补，便是执念的开始，未观照变化。" }, 
        { text: "这只是一个提醒，万物都在变化，包括我的情绪。", isCorrect: true, feedback: "知性空者，虽动而常寂。这是将外境变化引入内心观照的智慧。" } 
      ], maxCorrect: 2 
    },
    { q: "茶具打碎，如何转念？", 
      options: [
        { text: "赶紧粘起来，假装没坏，并责怪自己。", isCorrect: false, feedback: "自欺欺人和嗔怪都是对既成事实的抗拒，无法解脱。" }, 
        { text: "茶具的因缘已尽，'碎'也是一种完整的形态，不必懊恼。", isCorrect: true, feedback: "物体本就是因缘和合，散了便是回归本性。心无增减，不着得失。" }, 
        { text: "非常懊恼，沉溺过去，不断回想打碎的瞬间。", isCorrect: false, feedback: "沉溺过去，便失去了当下。烦恼源于对瞬间的执着。" }, 
        { text: "观照愤怒和懊悔的念头，像看云卷云舒一样，不加评判。", isCorrect: true, feedback: "转境为观，不与烦恼为伍，即是智慧的现前。" } 
      ], maxCorrect: 2
    },
    { q: "生出第一根白发，意识到什么？", 
      options: [
        { text: "老了真可怕，要赶紧买染发剂或做医美来抗拒。", isCorrect: false, feedback: "掩盖衰老并不能阻止无常的脚步，只会加重对青春的贪爱。" }, 
        { text: "这是身体在示现'成住坏空'的真理，警示我要抓紧修行，而非放逸。", isCorrect: true, feedback: "以身说法，白发亦是善知识。无常是积极的警醒。" }, 
        { text: "感叹岁月无情，心情低落，认为生命走向终点。", isCorrect: false, feedback: "情绪是无用的消耗，且对终点的执着源于对'有我'的恐惧。" }, 
        { text: "生命过程的每一阶段都有其美，白发只是一个自然变化的名相。", isCorrect: true, feedback: "寂静观照，随顺自然。不以分别心看待生老病死。" }
      ], maxCorrect: 2
    },
    { q: "亲密朋友渐行渐远，如何面对？", 
      options: [
        { text: "一定要追问个究竟，找出是谁的错，试图强行挽留。", isCorrect: false, feedback: "攀缘强求，徒增烦恼。缘分如水，强留则溢。" }, 
        { text: "缘来则聚，缘去则散，彼此祝福，放下挂碍，心无增减。", isCorrect: true, feedback: "这才是对待关系的自在态度，不执着于关系的'实有'。" }, 
        { text: "心生怨恨，觉得对方背叛了自己，并将此归咎于对方。", isCorrect: false, feedback: "怨恨是毒，先伤己心。执着于'我'被亏欠的感受。" }, 
        { text: "将友谊的结束视为自己人生阶段的完成，感恩相遇，平静接受。", isCorrect: true, feedback: "一切关系皆是增上缘，结束亦是新的开始，无我故无失。" }
      ], maxCorrect: 2
    },
    { q: "既然'无常'，现在的努力还有意义吗？", 
      options: [
        { text: "没有意义，反正最后都是一场空，不如及时行乐。", isCorrect: false, feedback: "这是'断灭见'，也是一种执着。因果不空，精进不灭。" }, 
        { text: "正因为无常，未来才有无限可能，当下的因决定未来的果，故须努力。", isCorrect: true, feedback: "无常是积极的，它意味着改变是可能的，当下的行动具有巨大意义。" }, 
        { text: "只为了留下永恒的名声或功业而努力。", isCorrect: false, feedback: "名声亦是梦幻泡影，执着于'不灭'的相。" }, 
        { text: "努力的意义不在于结果是否永恒，而在于在过程中观照并圆满自性。", isCorrect: true, feedback: "真精进是内求，而非外求。圆满自性即是终极意义。" }
      ], maxCorrect: 2
    },
    { q: "股市大跌，资产缩水一半，怎么想？", 
      options: [
        { text: "痛苦万分，觉得人生被毁，甚至想报复市场。", isCorrect: false, feedback: "将人生寄托于无常之物，极其危险。贪嗔痴三毒具足。" }, 
        { text: "钱财乃五家共有，聚散无常，正好借此看清贪心，放下对数字的执着。", isCorrect: true, feedback: "身外之物不入心，方得自在。了知财富的虚妄性。" }, 
        { text: "责怪他人和环境，认为这是不公的命运安排。", isCorrect: false, feedback: "外归因，无法解脱。未看到'业力'与'因缘'的自作自受。" }, 
        { text: "以平和心观照失去的感受，明白这种痛苦也是一种生灭法。", isCorrect: true, feedback: "痛苦亦是受蕴的示现，观照它而不跟随它，即是观行。" }
      ], maxCorrect: 2
    },
    { q: "名声如水月，当你得到它时，你执着的是什么？", 
      options: [
        { text: "执着于'名'所带来的权力感和优越感。", isCorrect: false, feedback: "权力感是幻象，优越感是傲慢。" }, 
        { text: "执着于'我'是这个名声的拥有者和承受者。", isCorrect: true, feedback: "善哉，若无'我'，名声依附于谁？" }, 
        { text: "执着于未来名声可能带来的利益和安全感。", isCorrect: false, feedback: "对未来的贪爱，是现在苦的根源。" }, 
        { text: "名声只是他人意识中的一个符号，与我自性无关，应立即放下。", isCorrect: true, feedback: "了知一切皆是假名安立，不被外境符号所染。" }
      ], maxCorrect: 2
    },
    { q: "身体的新陈代谢每秒都在发生，你如何体悟'非我'？", 
      options: [
        { text: "只要我能感觉到疼痛，这个身体就是我的一部分，是'我'的载体。", isCorrect: false, feedback: "受蕴是无常的，怎能执着为恒常的'我'？" }, 
        { text: "身体只是由地水火风四大假合而成的元素集合体，时时刻刻都在变化，无有主宰。", isCorrect: true, feedback: "观身不净，观身无常，自然了知非我。" }, 
        { text: "我用强大的意志力去控制它，让它听从我的指挥。", isCorrect: false, feedback: "你连呼吸都无法完全控制，如何控制四大？" }, 
        { text: "观想它不是我，也不是我的，仅仅是一个生灭不止的器皿。", isCorrect: true, feedback: "能观照到'非我'的智慧，即是破我执的开始。" }
      ], maxCorrect: 2
    },
    { q: "你生起强烈的愤怒情绪，如何应用'无常'之理来化解？", 
      options: [
        { text: "压制它，告诉自己不应该生气，然后转移注意力。", isCorrect: false, feedback: "压制不是化解，只会将烦恼藏匿于深处。" }, 
        { text: "愤怒的生起需要因缘，它没有自性，生起即是灭的开始，我只需静静观察其变化。", isCorrect: true, feedback: "观照心生，随顺心灭，不与烦恼合一，即是解脱。" }, 
        { text: "找出愤怒的源头，并试图消除它。", isCorrect: false, feedback: "源头也是无常的，消除外因无法根除内因。" }, 
        { text: "情绪是虚妄不实的，我无需为任何感受而动摇根本的心性。", isCorrect: true, feedback: "受蕴虚妄，心性如镜，尘来则映，尘去则净。" }
      ], maxCorrect: 2
    },
    { q: "沉湎于过去的辉煌或未来的忧虑，本质上是在执着什么？", 
      options: [
        { text: "执着于时间的流逝和不可逆性。", isCorrect: false, feedback: "时间是假名，并非执着的核心。" }, 
        { text: "执着于'我'在过去或未来某个时刻的'实有'状态。", isCorrect: true, feedback: "过去心不可得，未来心不可得，执着即是妄想。" }, 
        { text: "执着于事件本身带来的结果和感受。", isCorrect: false, feedback: "结果和感受是外相，'我'的参与是内因。" }, 
        { text: "未能安住于当下，将心投射到虚妄的念头之中。", isCorrect: true, feedback: "过去未来皆是刹那生灭的念头，安住当下即是修行。" }
      ], maxCorrect: 2
    }
];

const level2Questions: Question[] = [
    { q: "若有人无端辱骂你是'欺世盗名之徒'，当如何应对？", 
      options: [
        { text: "我一定要当众辩驳，还我清白，维护我的形象。", isCorrect: false, feedback: "心随境转，已被他人的言语所控制。这是执着于'名誉我'。" }, 
        { text: "默然走开。他骂的是他心中的影子，与真正的自性何干？", isCorrect: true, feedback: "大智慧！无我，故无受者。一切法从心想生。" }, 
        { text: "记下他的样貌和言语，日后定要报复，以平息怒火。", isCorrect: false, feedback: "嗔心如火，业力不息。这是被'情绪我'所主宰。" }, 
        { text: "观想'辱骂'、'被骂者'、'骂者'三者皆空，言语无自性。", isCorrect: true, feedback: "三轮体空在烦恼中的应用。连同'被骂的我'一起放下。" }
      ], maxCorrect: 2
    },
    { q: "别人夸奖你聪明绝顶时，你心里怎么想？", 
      options: [
        { text: "洋洋得意，觉得确实如此，并暗自希望下次得到更高赞扬。", isCorrect: false, feedback: "傲慢心起，我执加重。执着于'比人强'的幻象。" }, 
        { text: "这只是名相声音的震动，不应执着于此，心保持清净平和。", isCorrect: true, feedback: "八风吹不动，端坐紫金莲。了知赞扬的虚妄性。" }, 
        { text: "表面谦虚，心里乐开了花，认为这是对他人的尊重。", isCorrect: false, feedback: "心口不一，仍是执着。未观照到内心深处的贪爱。" }, 
        { text: "将功劳归于因缘聚合，而非独归于'我'这个实体。", isCorrect: true, feedback: "看到因缘网，破除独一无二的'我执'。" }
      ], maxCorrect: 2
    },
    { q: "你在禅修时，妄想纷飞，无法入定，为何？", 
      options: [
        { text: "因为我的身体太疲惫或环境太嘈杂，我需要更好的条件。", isCorrect: false, feedback: "将失败归咎于外境，未观内因。心不静，境何能静？" }, 
        { text: "因为我执着于'我要入定'，被这个目标和期待所困住。", isCorrect: true, feedback: "有求皆苦，无求乃真定。'想入定'的念头本身就是最大的妄想。" }, 
        { text: "我在运用我前五关积累的知识来分析妄想。", isCorrect: false, feedback: "知解非真智。用意识分析，仍在妄想的圈子里打转。" }, 
        { text: "我应该放下对'入定'的执着，只是安住在妄想本身，不加干涉。", isCorrect: true, feedback: "觉知妄想而不跟随，妄想自歇，即是真定。" }
      ], maxCorrect: 2
    },
    { q: "为了证明自己比别人优秀，你不断学习和工作，这种行为的根源是？", 
      options: [
        { text: "是积极向上的动力，自我激励的一种方式。", isCorrect: false, feedback: "动力中混杂了比较和优越感，并非清净的精进。" }, 
        { text: "是对'我'比他人'更好'的强烈渴望和对'不如人'的恐惧。", isCorrect: true, feedback: "一切烦恼，皆由我见而生。这个'我'是比较的产物。" }, 
        { text: "是为了实现自我价值，这是人类进步的动力。", isCorrect: false, feedback: "自我价值本身就是建立在'我'上的概念，仍有执着。" }, 
        { text: "是潜藏的对自我缺乏认可，需要通过外在成就来证明。", isCorrect: true, feedback: "通过外求来弥补内在的空虚，是无明烦恼。" }
      ], maxCorrect: 2
    },
    { q: "你看到别人犯了错，心中立刻升起批判和不屑，这批判的是谁？", 
      options: [
        { text: "批判的是他人的行为，是维护道德和正义的体现。", isCorrect: false, feedback: "以分别心来维护正义，仍是着相。" }, 
        { text: "批判的是自己内心对'完美我'的执着，将恐惧投射到他人身上。", isCorrect: true, feedback: "善哉！你所厌恶的，正是你心中未解的恐惧或傲慢。" }, 
        { text: "批判的是他人的业力，这与我无关。", isCorrect: false, feedback: "心中生起分别念，即是与他人的业力相连。" }, 
        { text: "我应该立即纠正他，因为我的智慧比他高。", isCorrect: false, feedback: "这是傲慢心和'法执'的结合，并非慈悲。" }
      ], maxCorrect: 1
    },
    { q: "身体疼痛的执着", 
      options: [
        { text: "疼痛是我的，我必须立刻消除它，以恢复'我'的舒适状态。", isCorrect: false, feedback: "将疼痛执着为'我所受'，加重了受蕴的痛苦。" }, 
        { text: "疼痛是五蕴中的'受蕴'，它生起时无我相，消散时无常相，我只是觉知，不认同。", isCorrect: true, feedback: "观照受蕴，了知无主。痛是身体的反应，非'我'的受难。" }, 
        { text: "是业力现前，我必须忍耐，这是我必须承受的。", isCorrect: false, feedback: "忍耐仍是二元对立，应放下'承受者'这个角色。" }, 
        { text: "将心从身体抽离，观想疼痛的性质、边界和变化，不给它贴上'我的痛'的标签。", isCorrect: true, feedback: "心物分离观，破除对身体的强烈执着。" }
      ], maxCorrect: 2
    },
    { q: "你通过大量阅读经书获得了许多佛理知识，此时最大的危险是什么？", 
      options: [
        { text: "对知识本身产生骄傲，认为自己比未读者高明。", isCorrect: false, feedback: "这是傲慢，但不是法执的根本。" }, 
        { text: "将佛理知识视为'实有'之法，并执着于文字和概念的正确性。", isCorrect: true, feedback: "善哉！依文解义，三世佛冤。知解非真智。" }, 
        { text: "忘记了修行的目的，沉迷于与人辩论佛理。", isCorrect: false, feedback: "这是口头禅，未触及实修。" }, 
        { text: "忘记'法尚应舍，何况非法'，将指月之指视为月亮。", isCorrect: true, feedback: "法执是比人我执更细微的障碍，须警惕。" }
      ], maxCorrect: 2
    },
    { q: "看到别人修得很快，而自己进展缓慢，你心生嫉妒，这是哪种执着的体现？", 
      options: [
        { text: "嫉妒是动力，说明我还没有放松。", isCorrect: false, feedback: "以毒攻毒，非正道。烦恼不会带来清净。" }, 
        { text: "执着于'我'必须'更好'，将修行的果相视为外在成就。", isCorrect: true, feedback: "修行是内心的事，比较心是世间法。" }, 
        { text: "是潜藏的对自身懈怠的批判。", isCorrect: false, feedback: "批判仍是分别念，不是根本。" }, 
        { text: "将他人视为与'我'对立的竞争者，而非同参道友。", isCorrect: true, feedback: "二元对立的思维方式是我执的体现。" }
      ], maxCorrect: 2
    },
    { q: "你感到强烈的恐惧和不安，这种感受的根本来源是？", 
      options: [
        { text: "外在环境的威胁和压力。", isCorrect: false, feedback: "外境只是诱因，不是根本来源。" }, 
        { text: "执着于'我'这个实体是恒常、不灭的，因此恐惧它的消亡和失去。", isCorrect: true, feedback: "若知无我，则无所失，何来恐惧？" }, 
        { text: "童年创伤和潜意识的投射。", isCorrect: false, feedback: "心理学上的解释，但未触及佛法的根本。" }, 
        { text: "对未来的不确定性，希望一切尽在'我'的掌控之中。", isCorrect: true, feedback: "掌控欲是强烈我执的体现。" }
      ], maxCorrect: 2
    },
    { q: "当你被赋予一个重要身份（例如导师、领导），此时应如何警惕我执？", 
      options: [
        { text: "享受这个身份带来的尊重和权力，因为这是我努力得来的。", isCorrect: false, feedback: "被身份名相所束缚，加重慢心。" }, 
        { text: "观照这个身份只是暂时的职责和工具，并非真实的'我'。", isCorrect: true, feedback: "身份是假名，用完即弃，不留痕迹。" }, 
        { text: "告诉自己要谦虚，但在心中仍保持优越感。", isCorrect: false, feedback: "心口不一，仍是执着。" }, 
        { text: "利用这个身份更好地行善和布施，不贪图身份带来的利益。", isCorrect: true, feedback: "借假修真，用身份这个工具来利益众生，而非成就自己。" }
      ], maxCorrect: 2
    }
];

const level3Questions: Question[] = [
    { q: "布施时，心念中应作何观想，方能清净？", 
      options: [
        { text: "我施、人受、物为实有，这才是真实不虚的功德。", isCorrect: false, feedback: "三轮体空是清净布施的根本，执着实有即是着相。" }, 
        { text: "行布施而不见施者、不见受者、不见所施之物，此为三轮体空。", isCorrect: true, feedback: "善哉！无所求而施，方是真功德。" }, 
        { text: "希望获得别人赞扬、好报或来世福报。", isCorrect: false, feedback: "有所求的布施，是福德而非功德，仍是贪爱之因。" }, 
        { text: "将布施视为对治自己吝啬习气的良药，而非对他人有所期望。", isCorrect: true, feedback: "布施的本质是破除自己的悭贪和执着。" }
      ], maxCorrect: 2
    },
    { q: "施主施舍五文钱后，心中生起一丝优越感，这功德如何？", 
      options: [
        { text: "优越感是烦恼，但五文钱的福报仍然很大，功过相抵。", isCorrect: false, feedback: "烦恼心行布施，福德有限，功德全无，心不净则果不圆。" }, 
        { text: "功德全失，因为布施的目的被'我慢'和'有所求'污染。", isCorrect: true, feedback: "施而生慢，非真布施。心净则土净，心染则果染。" }, 
        { text: "无妨，下次注意即可，施比受更有福。", isCorrect: false, feedback: "不观照自心，下次仍会犯。强调'比'即是比较心。" }, 
        { text: "观照到优越感的生起，并立即将其放下，回归到布施当下的清净心。", isCorrect: true, feedback: "转烦恼为菩提，觉知是唯一解药。" }
      ], maxCorrect: 2
    },
    { q: "当你布施金钱时，心中期盼获得的回报是什么？", 
      options: [
        { text: "希望家人平安，身体健康，事业有成。", isCorrect: false, feedback: "这是世间法的布施，仍有贪爱。" }, 
        { text: "期盼通过布施，破除自己的悭贪，增长自己的慈悲心。", isCorrect: true, feedback: "以布施对治自身烦恼，是真正的智慧。" }, 
        { text: "希望获得别人的赞扬和认可，提高自己的社会地位。", isCorrect: false, feedback: "这是名闻利养的布施，与解脱道相违。" }, 
        { text: "愿一切众生离苦得乐，这是最上乘的布施。", isCorrect: true, feedback: "发菩提心，是布施的最高境界。" }
      ], maxCorrect: 2
    },
    { q: "无意中得知你的布施被他人浪费或滥用时，你的心境如何？", 
      options: [
        { text: "感到愤怒和委屈，觉得自己的一番心意被辜负了。", isCorrect: false, feedback: "布施已毕，不应攀缘回响。心有所求，故有所失。" }, 
        { text: "我已将它布施出去了，物品的使用权和果报皆归于受者，与我无关。", isCorrect: true, feedback: "此乃心无挂碍的布施，真正做到了放下。" }, 
        { text: "感到遗憾，但提醒自己这是对布施的考验，应保持清净心。", isCorrect: true, feedback: "知错不悔，善念不退，是精进与布施的结合。" }, 
        { text: "赶紧把东西要回来，以免被嫌弃或浪费。", isCorrect: false, feedback: "这与商贩何异？布施行为已经染污。" }
      ], maxCorrect: 2
    },
    { q: "何谓无畏布施？", 
      options: [
        { text: "给予他人巨大的物质财富，使其衣食无忧，不再恐惧贫穷。", isCorrect: false, feedback: "这是财布施，非无畏布施。" }, 
        { text: "在他人面临身心危险时，给予保护、安慰或精神上的支持。", isCorrect: true, feedback: "消除众生恐惧，即是无畏布施。" }, 
        { text: "放下自己对财富和身体的执着，以无我的心行施。", isCorrect: true, feedback: "真正的无畏布施，源于施者放下对自身失去的恐惧。" }, 
        { text: "用强硬的态度去阻止别人做恶事。", isCorrect: false, feedback: "这可能是嗔心或强迫，并非无畏。" }
      ], maxCorrect: 2
    },
    { q: "法布施和财布施相比，哪种功德更大？", 
      options: [
        { text: "财布施，因为它能直接解决众生的饥寒之苦。", isCorrect: false, feedback: "财布施是解决'身苦'，法布施是解决'心苦'。" }, 
        { text: "法布施，因为它能令众生获得究竟解脱的智慧，利益无量。", isCorrect: true, feedback: "法布施能破除无明，功德无量。" }, 
        { text: "两者皆重要，但应以清净心而施，不作高下分别。", isCorrect: true, feedback: "不执着高下，心平等故，所施平等。" }, 
        { text: "法布施容易流于口头，不如财布施来得实在。", isCorrect: false, feedback: "小看智慧的力量，即是无明。" }
      ], maxCorrect: 2
    },
    { q: "你在布施时，发现受者心存欺骗或不善，此时应如何保持慈悲？", 
      options: [
        { text: "立刻收回布施，因为对欺骗者行施是助长恶业。", isCorrect: false, feedback: "布施已毕，心应清净。收回已施之物，即是着相。" }, 
        { text: "我只布施他的需要，不评判他的人格，这是慈悲心的平等观。", isCorrect: true, feedback: "慈悲是无条件的，不应以对方是否良善而有所分别。" }, 
        { text: "心生厌恶，但为了功德仍勉强施予。", isCorrect: false, feedback: "心有染污，非清净布施。" }, 
        { text: "观想他的欺骗亦是烦恼逼迫，更应以慈悲心默默回向。", isCorrect: true, feedback: "看到他的苦，即是真慈悲。" }
      ], maxCorrect: 2
    },
    { q: "有人说，施比受更有福，你认为这句话的内在含义是什么？", 
      options: [
        { text: "施者可以获得福报，受者则不能。", isCorrect: false, feedback: "施受是平等的因缘，不是高下。" }, 
        { text: "施的过程是放下执着、增长慈悲心的过程，是内在的净化。", isCorrect: true, feedback: "真正的福，在于心量的扩大与烦恼的减少。" }, 
        { text: "施者享有社会美誉和尊重。", isCorrect: false, feedback: "着于名相，非真福。" }, 
        { text: "施是主动的，受是被动的，主动才能掌控命运。", isCorrect: false, feedback: "强调掌控，即是执着。" }
      ], maxCorrect: 1
    },
    { q: "你用非法所得的钱财去行布施，是否能获得清净功德？", 
      options: [
        { text: "能，因为布施的目的是好的，结果是利益了众生。", isCorrect: false, feedback: "因地不真，果招纡曲。不清净的因无法带来清净的果。" }, 
        { text: "不能，因果是同时的，钱财来源的染污已破坏了布施的清净性。", isCorrect: true, feedback: "财物应为清净正命所得。" }, 
        { text: "只有一点点福报，但罪业仍在。", isCorrect: true, feedback: "福罪不相抵，只是微薄的福德，难抵不净之因。" }, 
        { text: "只要心是清净的，钱财的来源并不重要。", isCorrect: false, feedback: "自欺欺人，心无所住，但法有清净。" }
      ], maxCorrect: 2
    },
    { q: "你没有金钱，但想行布施，可以做什么？", 
      options: [
        { text: "心生惭愧，等待有钱后再布施。", isCorrect: false, feedback: "等待即是懈怠。" }, 
        { text: "行法布施（以正法劝人）、无畏布施（给予安慰支持）和颜施（面带微笑）。", isCorrect: true, feedback: "布施不限于财物，身体力行亦是布施。" }, 
        { text: "只能通过发愿回向来积累功德。", isCorrect: false, feedback: "发愿是基础，但应结合行动。" }, 
        { text: "以欢喜心赞叹他人的布施，这是随喜功德。", isCorrect: true, feedback: "随喜功德，无财亦能积福。" }
      ], maxCorrect: 2
    }
];

const level4Questions: Question[] = [
    { q: "你在长期修行中感到身心俱疲，无法坚持，此时应如何理解'精进'？", 
      options: [
        { text: "应该咬紧牙关，强行继续，否则就是懈怠，会堕入恶道。", isCorrect: false, feedback: "强行精进是'疲劳精进'，非中道。过度的紧绷会导致断裂。" }, 
        { text: "精进非仅是身体的劳作，更是心念的持续、不夹杂、不间断，此时应调和身心，而非硬抗。", isCorrect: true, feedback: "正精进是心不放逸，而非身心俱疲。精进是觉知的保持。" }, 
        { text: "给自己放个长假，等心情好了再说，毕竟休息是为了走更远的路。", isCorrect: false, feedback: "这是懈怠放逸，修行是持续的，不应中断。" }, 
        { text: "观照疲惫的念头和身体的感受，将此作为修行的对象，而非停下来。", isCorrect: true, feedback: "转境为观，疲惫亦是善知识，能治傲慢与放逸。" }
      ], maxCorrect: 2
    },
    { q: "看到别人修得很快，而自己进展缓慢，你心生嫉妒，如何转念为精进？", 
      options: [
        { text: "嫉妒是动力，说明我还没有放松，应该加倍努力追上他。", isCorrect: false, feedback: "以烦恼为动力，果报仍是苦。比较心是精进的障碍。" }, 
        { text: "观照嫉妒的生起，并将这种比较之心转向对自身未尽之功的警策，随喜他人的成就。", isCorrect: true, feedback: "转烦恼为菩提，以自省为精进。真精进是与自己比。" }, 
        { text: "假装没看见，只顾自己，不与他人接触。", isCorrect: false, feedback: "内心已受污染，外表无益。逃避非解脱之道。" }, 
        { text: "了知一切成就皆是因缘果报，心生随喜，并坚定自己的道心，不受他人影响。", isCorrect: true, feedback: "心平等故，精进平等。不被外相所动。" }
      ], maxCorrect: 2
    },
    { q: "你在修行中，若久不见成果，你该如何保持初心？", 
      options: [
        { text: "成果是水到渠成，我只要专注于过程，不问结果，不执着果相。", isCorrect: true, feedback: "不求功利，是真精进。只问耕耘，不问收获。" }, 
        { text: "开始怀疑道路是否正确，四处求问新法门或放弃。", isCorrect: false, feedback: "心不稳定，精进有漏。怀疑是退转之因。" }, 
        { text: "暂时停止，等来年再做打算，给自己一个缓冲期。", isCorrect: false, feedback: "间断精进，非久住法。心一旦松懈，很难再提起。" }, 
        { text: "精进的本质是断恶修善，只要每天都在减少烦恼，就是最大的成果。", isCorrect: true, feedback: "以内心的净化为目标，成果自然显现。" }
      ], maxCorrect: 2
    },
    { q: "明日复明日，明日何其多。精进的障碍是什么？", 
      options: [
        { text: "缺乏足够的时间和金钱。", isCorrect: false, feedback: "外在条件不是根本障碍，心才是。" }, 
        { text: "懈怠放逸，贪图安逸和享乐，总将修行推到明天。", isCorrect: true, feedback: "善哉！懈怠是最大的毒瘤，今日事今日毕。" }, 
        { text: "修行法门太难，自己根基太差。", isCorrect: false, feedback: "这是自卑心和法执。" }, 
        { text: "对'我'的未来有一种虚妄的安全感，认为来日方长。", isCorrect: true, feedback: "无常观的缺失，导致对当下的放逸。" }
      ], maxCorrect: 2
    },
    { q: "精进是与烦恼的搏斗，你如何观照烦恼的生起？", 
      options: [
        { text: "发现烦恼时，立即转移注意力，不让它占据心头。", isCorrect: false, feedback: "转移注意力不是观照，仍是逃避。" }, 
        { text: "在烦恼生起时，觉知它、安住它，但不起第二念去跟随它或对抗它。", isCorrect: true, feedback: "烦恼即菩提，观照烦恼的当下即是修行。" }, 
        { text: "用强烈的自责来惩罚自己，以求下次不再犯。", isCorrect: false, feedback: "自责是另一种烦恼，无益于解脱。" }, 
        { text: "将烦恼视为自性空的假相，不与它合一，任其自生自灭。", isCorrect: true, feedback: "了知烦恼无自性，自然不会被它所转。" }
      ], maxCorrect: 2
    },
    { q: "修行者身处红尘，如何平衡世俗工作与精进修行？", 
      options: [
        { text: "应辞去工作，专心修行，才能成就。", isCorrect: false, feedback: "身离尘境，心不离故。六祖曾言：佛法在世间。" }, 
        { text: "将工作视为修行的道场，在为人处世、待人接物中观照自心、断恶修善。", isCorrect: true, feedback: "境即是心，心即是境。世间法即是佛法。" }, 
        { text: "只在固定时间（如早晚课）修行，其余时间专心工作。", isCorrect: false, feedback: "修行是二六时中，而非片段性行为。" }, 
        { text: "在任何行动和言语中，都保持觉知和正念，将生活本身化为精进。", isCorrect: true, feedback: "行住坐卧皆是禅。" }
      ], maxCorrect: 2
    },
    { q: "当你取得一些成就后，心生'我已经够了'的念头，这是什么障碍？", 
      options: [
        { text: "这是谦虚，因为满足感是修行的终点。", isCorrect: false, feedback: "满足感是懈怠的开始，非真谦虚。" }, 
        { text: "这是修行路上的'增上慢'，执着于已得的法，障碍更进一步的精进。", isCorrect: true, feedback: "已有所得，即是着相。未证言证，是大妄语。" }, 
        { text: "这是正常的疲惫，应该休息。", isCorrect: false, feedback: "以休息为借口，实是退转。" }, 
        { text: "应立即观照'我已得'这个念头，了知法无实有，无有少法可得。", isCorrect: true, feedback: "得亦无得，方是真得。破除法执，方能更精进。" }
      ], maxCorrect: 2
    },
    { q: "佛法修行讲究闻思修，何谓修的精进？", 
      options: [
        { text: "大量阅读经书，做到过目不忘。", isCorrect: false, feedback: "这是闻的精进。" }, 
        { text: "将所闻所思的佛理，切实地运用到日常生活中，断除烦恼习气。", isCorrect: true, feedback: "修是践行，是习气烦恼的转化。" }, 
        { text: "在脑海中不断思考佛理的逻辑，直到完全理解。", isCorrect: false, feedback: "这是思的精进。" }, 
        { text: "时时刻刻保持觉知，观照身口意三业的清净。", isCorrect: true, feedback: "正念相续，即是修的精进。" }
      ], maxCorrect: 2
    },
    { q: "精进是勇猛还是长远？", 
      options: [
        { text: "勇猛，必须以最快的速度达到目标。", isCorrect: false, feedback: "勇猛而无长远，易生疲劳。" }, 
        { text: "长远，细水长流，永不退转。", isCorrect: false, feedback: "长远而无勇猛，则流于懈怠。" }, 
        { text: "两者皆是，勇猛而持续，不急不躁，永不退转，方为中道。", isCorrect: true, feedback: "如调弦，不紧不松，方出妙音。" }, 
        { text: "勇猛是初发心，长远是持戒心。", isCorrect: true, feedback: "将精进分解为阶段性功课，有助于理解。" }
      ], maxCorrect: 2
    },
    { q: "为什么烦恼总是会反复出现，感觉修行没有进步？", 
      options: [
        { text: "因为业力太深，非一时可断。", isCorrect: false, feedback: "业力是客观的，但过分强调会造成消极。" }, 
        { text: "烦恼如野草，春风吹又生，只有不断地觉知和断除才是精进。", isCorrect: true, feedback: "烦恼无自性，其反复是习气的力量，精进就是不断对治习气。" }, 
        { text: "这是佛菩萨对我的考验。", isCorrect: false, feedback: "将自己的烦恼归咎于外力。" }, 
        { text: "觉知到烦恼的反复，本身就是一种进步，说明你更敏锐了。", isCorrect: true, feedback: "将观照的深度视为进步，而非烦恼是否彻底消失。" }
      ], maxCorrect: 2
    }
];

const level5Questions: Question[] = [
    { q: "若有人问你'什么是佛？'，你应如何回答，才不落言诠？", 
      options: [
        { text: "佛是觉悟者，是历史上的悉达多太子，是人而非神。", isCorrect: false, feedback: "落入了'有'的相和历史的执着。" }, 
        { text: "佛是每个人自性中本具的光明，非从外得，非可言说。", isCorrect: true, feedback: "自性是佛，不假外求。言语道断，心行处灭。" }, 
        { text: "佛就是我眼前这位大师，他能指引我解脱。", isCorrect: false, feedback: "心外求法，执着于'师相'。" }, 
        { text: "佛是'觉性'本身，是那个了知一切、清净圆满的本性。", isCorrect: true, feedback: "佛即是觉，非名词，非实体。" }
      ], maxCorrect: 2
    },
    { q: "当你观想'我'不存在时，是什么在进行这种观想？", 
      options: [
        { text: "仍然是'我'的意识在观想，只是换了一种形式，所以无法彻底放下。", isCorrect: false, feedback: "'能观'与'所观'仍是二元对立，未破我见。" }, 
        { text: "是空的自性在进行觉照，无'能'亦无'所'，只是觉性的自然显现。", isCorrect: true, feedback: "二边不着，中道了义。觉性无需载体。" }, 
        { text: "是你的大脑在进行逻辑思考，属于色蕴范畴。", isCorrect: false, feedback: "落入物质的限制，未见心性。" }, 
        { text: "观想的当下，'观想者'和'被观想的空'同时消融，当下即是空。", isCorrect: true, feedback: "体用不二，不落观想相。" }
      ], maxCorrect: 2
    },
    { q: "你眼前所见的世界，其本体是什么？", 
      options: [
        { text: "世界是坚实的物质，真实不虚，是独立存在的。", isCorrect: false, feedback: "执着于'实有'。" }, 
        { text: "世界是因缘和合的假名，体性是空，但妙用不空。", isCorrect: true, feedback: "色即是空，空即是色。不落两边。" }, 
        { text: "世界是梦幻泡影，没有任何意义，我应远离它。", isCorrect: false, feedback: "落入'断灭空'，有逃避之心。" }, 
        { text: "世界是心识的投射，唯心所现，一切唯识。", isCorrect: true, feedback: "将外境归于内境，是唯识学的精要。" }
      ], maxCorrect: 2
    },
    { q: "当你谈论'空'时，是否又执着于'空'这个概念？", 
      options: [
        { text: "是的，'空'是最高的真理，我必须牢牢记住它。", isCorrect: false, feedback: "将'空'法执着为实有，即是犯了'空执'。" }, 
        { text: "空是用来破除'有'的工具，当'有'被破除后，'空'也应放下。", isCorrect: true, feedback: "法尚应舍，何况非法。空亦复空。" }, 
        { text: "不，我在运用我前五关积累的知识来分析空性。", isCorrect: false, feedback: "知解非真智，分析仍是分别念。" }, 
        { text: "真正的空，是连'空'这个念头都没有的寂静状态。", isCorrect: true, feedback: "无念无住，方为真性空。" }
      ], maxCorrect: 2
    },
    { q: "若五蕴皆空，你所感受到的快乐和痛苦又从何而来？", 
      options: [
        { text: "它们是由大脑的神经活动产生的，是物质的反应。", isCorrect: false, feedback: "落入物质的限制，未见心识的作用。" }, 
        { text: "它们是依于因缘和合而起的幻相，当体即空，但又现起感受。", isCorrect: true, feedback: "幻有而非实有，妙有而非真有。" }, 
        { text: "它们是真实的，因为我能真切地感受到。", isCorrect: false, feedback: "执着于'感受'的真实性。" }, 
        { text: "感受的生起是如梦如幻的，我觉知它，但不被它的虚妄性所困。", isCorrect: true, feedback: "观照幻相而不跟随，即是菩萨行。" }
      ], maxCorrect: 2
    },
    { q: "如何理解'涅槃'的境界？", 
      options: [
        { text: "涅槃是死后去到的一个永恒、极乐的世界。", isCorrect: false, feedback: "这是世间的想象，涅槃是超越生死的境界。" }, 
        { text: "涅槃是烦恼的彻底止息，是生死的终结，不是一种'存在'的状态。", isCorrect: true, feedback: "寂静、不生不灭，是涅槃的本质。" }, 
        { text: "涅槃是神通广大，可以随意改变世界的境界。", isCorrect: false, feedback: "这是对神通的执着。" }, 
        { text: "涅槃是无住、无依、无所得，当下即是，不假外求。", isCorrect: true, feedback: "涅槃在当下，不离生死。" }
      ], maxCorrect: 2
    },
    { q: "施主，时间与空间，是真实的存在还是心的投射？", 
      options: [
        { text: "时间是物理学的维度，空间是物质的容器，都是客观实在。", isCorrect: false, feedback: "执着于物理学的'实有'。" }, 
        { text: "时间是念头的相续，空间是方位的假合，皆是心识的分别所现。", isCorrect: true, feedback: "一切法从心想生，时空亦是假名。" }, 
        { text: "它们是真实存在的，但可以通过修行来超越。", isCorrect: false, feedback: "既真实存在，何能超越？" }, 
        { text: "若心无分别，刹那即永恒，一花一世界，时空即消融。", isCorrect: true, feedback: "心量与时空等同。" }
      ], maxCorrect: 2
    },
    { q: "何谓'真如'？", 
      options: [
        { text: "真如是诸佛所住的清净法身。", isCorrect: false, feedback: "这是对真如的着相理解。" }, 
        { text: "真如是万法不动的本性，即是事物的'如实'本相，离一切虚妄分别。", isCorrect: true, feedback: "真如是体，空性是相，不增不减。" }, 
        { text: "真如是超越一切，与世间无关的绝对实体。", isCorrect: false, feedback: "真如不离世间，世间即真如。" }, 
        { text: "真如是空性、佛性、法性、心性、实相的异名，只是指涉同一个不二之理。", isCorrect: true, feedback: "名相虽多，理体唯一。" }
      ], maxCorrect: 2
    },
    { q: "如何理解'烦恼即菩提'这句话？", 
      options: [
        { text: "烦恼会催促我修行，所以烦恼是善知识。", isCorrect: false, feedback: "这是烦恼的'妙用'，但非'即是'。" }, 
        { text: "烦恼和菩提在本质上是空性不二的，烦恼生起的当下即是觉性的显现。", isCorrect: true, feedback: "觉悟到烦恼的虚妄性，烦恼就转化为菩提。" }, 
        { text: "我应该去多制造烦恼，以加速觉悟。", isCorrect: false, feedback: "这是颠倒行。" }, 
        { text: "烦恼是妄想，菩提是实相，二者不可分离，如水和波。", isCorrect: true, feedback: "波即是水，水即是波，体用不二。" }
      ], maxCorrect: 2
    },
    { q: "解脱的意义是什么？", 
      options: [
        { text: "永远不再受苦，进入极乐世界。", isCorrect: false, feedback: "仍是求乐避苦的执着。" }, 
        { text: "从对一切事物的执着和束缚中彻底释放出来，心无挂碍。", isCorrect: true, feedback: "解脱是内在状态，而非外在位置的改变。" }, 
        { text: "能够掌控自己的生死和命运。", isCorrect: false, feedback: "掌控欲仍是我执。" }, 
        { text: "了知一切皆空，但仍以大悲心入世度化众生。", isCorrect: true, feedback: "空而不空，才是大乘解脱。" }
      ], maxCorrect: 2
    }
];

const level6Questions: Question[] = [
    { q: "何为终极？", 
      options: [
        { text: "无止境的轮回和永恒的功德。", isCorrect: false, feedback: "轮回是过程，功德是相，非终点。" }, 
        { text: "一切言语道断，心行处灭，离四句，绝百非。", isCorrect: true, feedback: "不可说，不可说，言说即非，已得寂灭。" }, 
        { text: "成佛立地，从此不再受苦。", isCorrect: false, feedback: "仍有'成'和'不受苦'的执着。" }, 
        { text: "连'终极'这个念头都放下的圆满觉性。", isCorrect: true, feedback: "无所得，故无所畏。" }
      ], maxCorrect: 2
    },
    { q: "既已通关，你获得了什么？", 
      options: [
        { text: "通关的成就感和一笔功德分。", isCorrect: false, feedback: "仍着相。" }, 
        { text: "无所获得，因智慧本自具足，本性圆满。", isCorrect: true, feedback: "得亦无得，方是真得。" }, 
        { text: "开启了下一段更艰难的旅程和任务。", isCorrect: false, feedback: "仍有'旅程'和'任务'的执着。" }, 
        { text: "了知一切知识、法门皆是方便，可以随时放下。", isCorrect: true, feedback: "知识是船，登岸即弃。" }
      ], maxCorrect: 2
    },
    { q: "当你进入'终极一问'，你是否仍在'分别'题目的对错？", 
      options: [
        { text: "是的，我必须全对才能通关，故须分别。", isCorrect: false, feedback: "执着于通关的果。" }, 
        { text: "觉知'对错'本身就是妄念，我只是随顺因缘作答，不执着结果。", isCorrect: true, feedback: "离四句，绝百非。放下对分别的分别。" }, 
        { text: "我在运用我前五关积累的知识来做最后的分析。", isCorrect: false, feedback: "仍有'知识'的执着。" }, 
        { text: "对错是假名，真正的目的是观照内心的分别念，并放下它。", isCorrect: true, feedback: "一切境相皆是考验自心。" }
      ], maxCorrect: 2
    },
    { q: "如何从修行中彻底解脱出来？", 
      options: [
        { text: "必须永恒精进，一刻不停，直到法身成就。", isCorrect: false, feedback: "精进亦是法，亦需放下。" }, 
        { text: "解脱并非'出来'，而是在'修行'的当下即是解脱，不增不减。", isCorrect: true, feedback: "烦恼即菩提，当下即是。" }, 
        { text: "远离尘世，遁入深山老林，不受干扰。", isCorrect: false, feedback: "身离尘境，心不离故。" }, 
        { text: "了知根本无'修行者'和'被修行之法'，则自然解脱。", isCorrect: true, feedback: "无能修，无所修，即是究竟。" }
      ], maxCorrect: 2
    },
    { q: "试问，你今安在？", 
      options: [
        { text: "安在屏幕前，正在作答，等待结果。", isCorrect: false, feedback: "落入方所。" }, 
        { text: "在无始劫以来，在无尽时空之中，遍一切处，无所不在。", isCorrect: true, feedback: "非在非不在，周遍法界，心包太虚。" }, 
        { text: "安在我的身体里，我的心里，作为我的主宰。", isCorrect: false, feedback: "落入内境，仍有我执。" }, 
        { text: "安在那个无念、无住、无相的寂静本性中。", isCorrect: true, feedback: "不生不灭，本自清净。" }
      ], maxCorrect: 2
    },
];

const QUESTION_POOL: Record<number, Question[]> = {
  1: level1Questions,
  2: level2Questions,
  3: level3Questions,
  4: level4Questions,
  5: level5Questions,
  6: level6Questions
};

// --- 工具函数 ---

// Fisher-Yates shuffle algorithm
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export const getLevelQuestions = (levelId: number): Question[] => {
  const coreQuestions = QUESTION_POOL[levelId] || QUESTION_POOL[1]; 
  
  const indices = new Set<number>();
  
  // 随机抽取 QUESTIONS_PER_LEVEL 题，确保不重复
  while (indices.size < Math.min(QUESTIONS_PER_LEVEL, coreQuestions.length)) {
      indices.add(Math.floor(Math.random() * coreQuestions.length));
  }
  
  // Get selected questions and shuffle their options
  const result = Array.from(indices).map(i => {
    const q = coreQuestions[i];
    return {
      ...q,
      options: shuffleArray(q.options)
    };
  });
  
  return result.slice(0, QUESTIONS_PER_LEVEL);
};