/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Screen Reader Tips: You can adjust the game speed in the Options. You can find the current status of each System in the corresponding column to the left of each System Action button. Announce the time remaining to the next Load Cycle by pressing": "屏幕阅读器提示：您可以在选项中调整游戏速度。 您可以在每个系统操作按钮左侧的相应列中找到每个系统的当前状态。 按",
    "to see if we can find an alternative power source before that happens.": "看看我们是否能在这之前找到替代电源。",
    "Unmute": "取消静音",
    "Volume": "音量",
    "we should be able to": "我们应该能够",
    "we should be able to jump to a spaceport to make repairs.": "我们应该能够跳到太空港进行维修。",
    "We'll need to": "我们需要",
    "We've arrived at the power source and our Engineers will begin the collection process. We'll just need to make sure we": "我们已经到达电源，我们的工程师将开始收集过程。我们只需要确保我们",
    "With Engineering functional, we think we can cobble together something that will more than double a": "有了工程功能，我们认为我们可以拼凑出一些东西，使工作量增加一倍以上",
    "With the engines stabilized we don't have to worry about them blowing up on us. As an added benefit we believe we can use them to reduce the cooldown of a single system.": "发动机稳定后，我们不必担心它们会炸毁我们。作为一个额外的好处，我们相信我们可以使用它们来减少单个系统的冷却时间。",
    "You Win!": "你赢了！",
    "Your spaceship was hit by an asteroid while on an exploration mission. It's badly damaged. Life support is failing and most systems are offline. You'll need to have your crew repair and manually operate them until they are working again.": "您的飞船在执行探索任务时被小行星击中。它损坏得很厉害。生命支持失败，大多数系统处于离线状态。您需要让您的船员修理并手动操作它们，直到它们再次工作。",
    ". Choose which systems to activate wisely because if we lose a single system we won't be able to make it.": ".明智地选择要激活的系统，因为如果我们丢失一个系统，我们将无法创建它。",
    ". Music by": ".音乐",
    ". Pause the game at any time by pressing": ".随时按暂停游戏",
    ". With power online we can start bringing other systems on one by one. Once all the": ".有了电源，我们就可以开始将其他系统一一启动。一旦所有",
    "Action": "行动",
    "action.": "行动。",
    "Activate JumpDrive": "激活 JumpDrive",
    "Activate the JumpDrive": "激活 JumpDrive",
    "After": "后",
    "and": "和",
    "are back online and we can now make the jump to the nearest spaceport.": "重新上线，我们现在可以跳转到最近的太空港。",
    "are online": "在线",
    "As the engines stabilize more, we should be able to do this for more systems.": "随着引擎更加稳定，我们应该能够为更多系统做到这一点。",
    "Auto": "自动",
    "Auto Resource": "自动资源",
    "Before": "前",
    "Brandon Morris": "布兰登·莫里斯",
    "Calibrate Sensors": "校准传感器",
    "Close": "关闭",
    "Color Blind Mode": "色盲模式",
    "Cooldown": "冷却",
    "Cycle Air": "空气循环",
    "Engineering": "工程",
    "Engines": "引擎",
    "Game Paused": "游戏暂停",
    "Game Speed": "游戏速度",
    "Generate Power": "发电",
    "Generating Power": "发电",
    "Git游戏": "吉特游戏",
    "Great news captain! Our sensors have detected a renewable power source not too far away. If we can sufficiently": "队长好消息！我们的传感器在不远处检测到可再生能源。如果我们能够充分",
    "Great work sir! All": "先生辛苦了！全部",
    "Guidance": "指导",
    "Improve Resource System Action": "改善资源系统动作",
    "Install Source": "安装源",
    "Life Support": "生命维持",
    "Load": "加载",
    "Made by": "作者",
    "Main Systems": "主系统",
    "Mine asteroid": "开采小行星",
    "Mine Asteroid": "开采小行星",
    "Modifications": "修改",
    "Music": "音乐",
    "Mute": "静音",
    "Note: you can choose to do this at a later time.": "注意：您可以选择稍后执行此操作。",
    "Note: You can choose to do this at a later time.": "注意：您可以选择稍后执行此操作。",
    "Now that the Guidance system has been recalculated, our Engineers believe they can use it to auto produce a single system.": "既然已经重新计算了引导系统，我们的工程师相信他们可以使用它来自动生产单个系统。",
    "Off": "关闭",
    "On": "开启",
    "Once Guidance is repaired some more, we should be able to do this for more systems.": "一旦 Guidance 得到更多修复，我们应该能够为更多系统执行此操作。",
    "Once we get Engineering repaired more, we should be able to do this for more systems.": "一旦我们对工程进行了更多的修复，我们应该能够为更多的系统做到这一点。",
    "Options": "选项",
    "Our Engineers were successfully able to install the new power source. It looks like it's generating enough power to finish the repairs.": "我们的工程师成功地安装了新电源。看起来它产生的电力足以完成维修。",
    "Pause Game": "暂停游戏",
    "Plot a Course": "绘制路线",
    "Plot Course": "剧情课程",
    "Power": "力量",
    "Processing": "加工",
    "Ravaged Space": "被破坏的空间",
    "Recalculate Guidance": "重新计算指导",
    "Reduce Resource System Cooldown": "减少资源系统冷却时间",
    "Remember that reactivating systems can increase the": "请记住，重新激活系统可以增加",
    "Repair Engineering": "维修工程",
    "Resource Amount": "资源量",
    "Resource Speed": "资源速度",
    "Resource System's": "资源系统的",
    "Resource Systems": "资源系统",
    "Resume Game": "游戏继续",
    "Scan Sector": "扫描扇区",
    "Scan the Sector": "扫描扇区",
    "Sensors": "传感器",
    "Sir! Our sensors have just completed a scan of the asteroid and we have some bad news. If we continue to mine the asteroid at our current rate we will deplete it of resources before we can finish repairing the ship.": "先生！ 我们的传感器刚刚完成了对小行星的扫描，我们有一些坏消息。 如果我们继续以目前的速度开采这颗小行星，我们将在完成飞船修理之前耗尽它的资源。",
    "Stabilize Engines": "稳定引擎",
    "Stabilize the Engines": "稳定引擎",
    "Start by": "开始",
    "Start Over": "重来",
    "Steven Lambert": "史蒂文兰伯特",
    "sufficiently so we can install the power source. Once that's done we should have enough power to finish making repairs.": "足以让我们可以安装电源。 一旦完成，我们应该有足够的力量来完成维修。",
    "System": "系统",
    "System Load": "系统负载",
    "to Sector 5 and then": "到第 5 区，然后",
    "Cycle Air on cooldown for 10 seconds.": "循环空气冷却 10 秒。",
    "Generate Power on cooldown for 10 seconds.": "产生能量冷却 10 秒。",
    "Generate Power ready for use.": "发电准备使用。",
    "System load deducted 1 Life Support. Next load cycle in 20 seconds.": "系统负载扣除 1 次生命支持。 下一个加载循环在 20 秒后。",
    "Life Support.": "生命支持。",
    "Cycle Air ready for use.": "循环空气准备使用。",
    "Engineering will now deduct 1 Power, 1 Life Support every load cycle.": "工程学现在将在每个负载周期中扣除 1 点能量和 1 点生命支持。",
    "Engines will now deduct 1 Power, 1 Life Support every load cycle.": "引擎现在将在每个负载循环中扣除 1 点动力和 1 点生命支持。",
    "Mine asteroid on cooldown for 10 seconds.": "开采小行星冷却时间为 10 秒。",
    "Engineering.": "工程。",
    "Engineering, Engines.": "工程，发动机。",
    "Guidance, Engines, Sensors. New modification available: Engineering.": "指导、引擎、传感器。 新的修改可用：工程。",
    "Processing, Engineering.": "加工，工程。",
    "Repair Engineering on cooldown for 10 seconds.": "修复工程冷却 10 秒。",
    "Stabilize Engines on cooldown for 10 seconds.": "稳定引擎冷却 10 秒。",
    "Guidance.": "指导。",
    "Guidance, Engines, Sensors.": "指导、引擎、传感器。",
    "Recalculate Guidance on cooldown for 10 seconds.": "重新计算指导，冷却时间 10 秒。",
    "Engineering will now deduct 1 Power, 2 Life Support every load cycle.": "工程 现在将在每个负载循环中扣除 1 电力、2 生命支持。",
    "Engines.": "引擎。",
    "Guidance will now deduct 1 Power every load cycle.": "指导 现在将在每个负载循环中扣除 1 电力。",
    "Engineering, Guidance.": "工程，指导。",
    "Guidance, Engines.": "指导, 引擎.",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "The life support system fails. The air begins to go stale. The crew desperately tries to continue to make repairs, but the work slows as they do. Slowly, they drift asleep, never to wake again.": "生命支持系统出现故障。 空气开始变质。 船员们拼命地试图继续进行维修，但工作速度却越来越慢。 慢慢地，他们睡着了，再也没有醒来。",
    "The power system fails. The lights go out one by one and are replaced by darkness. You hear soft crying coming from around the ship. As the air stales, they are replaced by silence.": "电力系统出现故障。 灯光一一熄灭，取而代之的是黑暗。 你听到船周围传来轻柔的哭声。 随着空气变旧，它们被寂静所取代。",
    "The processing system fails. The power system explodes from lack of resources. The ship lurches. Fire spreads quickly throughout the ship. Just as quickly it goes out, only to be replaced by Space.": "处理系统出现故障。 电力系统因缺乏资源而爆炸。 船摇摇晃晃。 火势迅速蔓延到整艘船。 就像它很快消失一样，只是被空间取代。",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "New system action available: ": "新的系统动作可用：",
    "New modification available: ": "新的修改可用：",
    "New system actions available: ": "新的系统动作可用：",
    "New modifications available: ": "新的修改可用：",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^Auto deducting every (.+) seconds; Next load cycle in (.+) seconds.$/, '每 $1 秒自动扣减一次； 下一个加载周期在 $2 秒后。'],
    [/^System load deducted (.+) Power, (.+) Life Support. Next load cycle in (.+) seconds.$/, '系统负载扣除 $1 点能量，$2 点生命支持。 $3 秒后的下一个加载循环。'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Calibrate Sensors on cooldown for (.+) seconds.$/, '校准传感器 冷却时间为 $1 秒。'],
    [/^On cooldown for (.+) seconds.$/, '冷却时间为 $1 秒。'],
    [/^Auto producing every (.+) seconds; Next production in (.+) seconds.$/, '每 $1 秒自动生产一次；下一次生产还有 $2 秒。'],
    [/^Guidance will now deduct (.+) Power every load cycle.$/, '指导现在将在每个负载循环中扣除 $1 电力。'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) \/ (.+) elves$/, '成本：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);