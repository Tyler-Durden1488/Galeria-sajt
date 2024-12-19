Fancybox.bind('[data-fancybox', {


    Toolbar: {
        display: {
            left: [],
            middle: [],
            right: ["close"],
        },
    },

    Images: {
        Panzoom: {
            panMode: "mousemove",
            mouseMoveFactor: 1.1,
            mouseMoveFriction: 0.12,
        },
    },

    Toolbar: {
        display: {
            left: ["infobar"],
            middle: [
                "zoomIn",
                "zoomOut",
                "rotateCCW",
                "rotateCW",
                "flipX",
                "flipY",
            ],
            right: ["fullscreen","download", "close"],
        },
    },
});    