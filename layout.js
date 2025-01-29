var LAYOUT = [
  {
    type: "menu",
    title: "このPCについて",
    cmds: ["gnome-control-center", "info-overview"],
  },
  {
    type: "separator",
  },
  {
    type: "menu",
    title: "システム環境設定...",
    cmds: ["gnome-control-center"],
  },
  {
    type: "menu",
    title: "App Store...",
    cmds: ["snap-store"],
  },
  {
    type: "separator",
  },
  {
    type: "expandable-menu",
    title: "最近使った項目"
  },
  {
    type: "separator",
  },
  {
    type: "menu",
    title: "強制終了",
    cmds: ["xkill"],
  },
  {
    type: "separator",
  },
  {
    type: "menu",
    title: "スリープ",
    cmds: ["systemctl", "suspend"],
  },
  {
    type: "menu",
    title: "再起動...",
    cmds: ["gnome-session-quit", "--reboot"],
  },
  {
    type: "menu",
    title: "シャットダウン...",
    cmds: ["gnome-session-quit", "--power-off"],
  },
  {
    type: "separator",
  },
  {
    type: "menu",
    title: "ログアウト...",
    cmds: ["gnome-session-quit", "--logout"],
  },
];
