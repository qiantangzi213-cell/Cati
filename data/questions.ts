import { Question } from "../types/cati";

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "好奇心：路边有个一直冒烟的井盖，你的第一反应是？",
    options: [
      { text: "凑过去看个究竟", scores: { COW: 2, SIAMESE: 1 } },
      { text: "绕道走，保持安全距离", scores: { BLACK: 2, MAINE: 1 } },
      { text: "拍张照片发朋友圈分享", scores: { CALICO: 2, RAGDOLL: 1 } },
      { text: "视而不见，继续走我的路", scores: { BRITISH: 2, ORANGE: 1 } },
    ],
  },
  {
    id: 2,
    text: "社交：参加一个全是陌生人的聚会，你会？",
    options: [
      { text: "迅速找到零食区开始吃", scores: { ORANGE: 2, BRITISH: 1 } },
      { text: "躲在角落里玩手机观察大家", scores: { BLACK: 2, CALICO: 1 } },
      { text: "成为全场焦点，到处找人聊天", scores: { COW: 2, SIAMESE: 1 } },
      { text: "紧紧跟在带你来的那个朋友后面", scores: { RAGDOLL: 2, MAINE: 1 } },
    ],
  },
  {
    id: 3,
    text: "休息方式：难得的周末，你最想怎么过？",
    options: [
      { text: "关掉手机，在家睡到天昏地暗", scores: { BRITISH: 2, ORANGE: 1 } },
      { text: "约上死党，去体验最火的户外运动", scores: { COW: 2, SIAMESE: 1 } },
      { text: "整理房间，看本想看很久的书", scores: { MAINE: 2, BLACK: 1 } },
      { text: "赖在沙发上，等别人来约我", scores: { RAGDOLL: 2, CALICO: 1 } },
    ],
  },
  {
    id: 4,
    text: "情绪表达：当你觉得很委屈的时候，你会？",
    options: [
      { text: "给信任的人打电话大哭/吐槽一场", scores: { SIAMESE: 2, RAGDOLL: 1 } },
      { text: "一个人躲起来，谁也不想理", scores: { BLACK: 2, CALICO: 1 } },
      { text: "疯狂购物或大吃一顿来发泄", scores: { COW: 2, ORANGE: 1 } },
      { text: "告诉自己“这没什么大不了的”", scores: { MAINE: 2, BRITISH: 1 } },
    ],
  },
  {
    id: 5,
    text: "行动力：突然有个旅行/创业的好点子，你会？",
    options: [
      { text: "立马查攻略/做计划，明天就出发", scores: { COW: 2, MAINE: 1 } },
      { text: "先发个动态试探下大家的反应", scores: { SIAMESE: 2, CALICO: 1 } },
      { text: "想想觉得太麻烦，过两分钟就忘了", scores: { ORANGE: 2, BRITISH: 1 } },
      { text: "认真钻研可行性，默默准备很久", scores: { BLACK: 2, RAGDOLL: 1 } },
    ],
  },
  {
    id: 6,
    text: "边界感：在图书馆看书，有人坐得离你非常近，你会？",
    options: [
      { text: "默默把自己的东西往旁边挪挪", scores: { BLACK: 2, CALICO: 1 } },
      { text: "直接看对方一眼，示意他太近了", scores: { MAINE: 2, SIAMESE: 1 } },
      { text: "没关系，继续看我自己的书", scores: { RAGDOLL: 2, ORANGE: 1 } },
      { text: "既然这么近，不如跟他聊两句？", scores: { COW: 2, BRITISH: 1 } },
    ],
  },
  {
    id: 7,
    text: "计划性：面对一大堆待办事项，你的策略是？",
    options: [
      { text: "按优先级列好清单，一个一个搞定", scores: { MAINE: 2, BLACK: 1 } },
      { text: "哪个简单先做哪个，随缘处理", scores: { ORANGE: 2, BRITISH: 1 } },
      { text: "先焦虑半小时，然后疯狂赶工", scores: { COW: 2, CALICO: 1 } },
      { text: "撒个娇看看有没有人能帮我分担", scores: { RAGDOLL: 2, SIAMESE: 1 } },
    ],
  },
  {
    id: 8,
    text: "压力反应：突然接到一个紧急任务，你的第一反应是？",
    options: [
      { text: "瞬间炸毛，开始输出情绪", scores: { COW: 2, SIAMESE: 1 } },
      { text: "冷静分析，迅速寻找解决方案", scores: { MAINE: 2, BLACK: 1 } },
      { text: "压力大到想直接原地躺平", scores: { BRITISH: 2, ORANGE: 1 } },
      { text: "寻求周围人的鼓励和安慰", scores: { RAGDOLL: 2, CALICO: 1 } },
    ],
  },
  {
    id: 9,
    text: "人际/原则：朋友想借你最心爱的宝贝，你会？",
    options: [
      { text: "委婉拒绝，真的舍不得", scores: { BLACK: 2, CALICO: 1 } },
      { text: "大方借出，大家都是好哥们", scores: { COW: 2, ORANGE: 1 } },
      { text: "丑话说在前面，弄坏了要赔", scores: { MAINE: 2, SIAMESE: 1 } },
      { text: "犹豫半天，最后还是不好意思拒绝", scores: { RAGDOLL: 2, BRITISH: 1 } },
    ],
  },
  {
    id: 10,
    text: "综合：如果可以选择一种超能力，你最想要？",
    options: [
      { text: "瞬间移动，想去哪玩去哪玩", scores: { COW: 2, SIAMESE: 1 } },
      { text: "隐身术，可以不被打扰地观察", scores: { BLACK: 2, CALICO: 1 } },
      { text: "点石成金，这辈子不用再奋斗", scores: { ORANGE: 2, BRITISH: 1 } },
      { text: "治愈力，让身边的人都开心", scores: { RAGDOLL: 2, MAINE: 1 } },
    ],
  },
];
