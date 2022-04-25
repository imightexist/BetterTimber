function bettertimber() {
    var $win = make_iframe_window({
        src: "http://quark-elemental-tsunami.glitch.me/",
        icons: iconsAtTwoSizes("desktop"),
        title: "BetterTimber",
        innerWidth: 640,
        innerHeight: 480,
    });
    return new Task($win);
}

add_icon_not_via_filesystem({
    title: "BetterTimber",
    iconID: "desktop",
    open: bettertimber,
    shortcut: true
});
