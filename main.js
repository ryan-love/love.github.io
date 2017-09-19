import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "html": {
        "WebkitFontSmoothing": "antialiased",
        "fontFamily": "Open Sans"
    },
    "body": {
        "background": "#25242c",
        "color": "#f4f4f4",
        "fontFamily": "'Open Sans'",
        "fontSize": 18,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "maxWidth": "100%",
        "paddingTop": 1,
        "paddingRight": 1,
        "paddingBottom": 1,
        "paddingLeft": 1
    },
    "h1": {
        "color": "#f4f4f4",
        "fontWeight": "500",
        "lineHeight": 80
    },
    "h2": {
        "color": "#f4f4f4",
        "fontWeight": "500",
        "lineHeight": 80,
        "textAlign": "center"
    },
    "h3": {
        "color": "#f4f4f4",
        "fontWeight": "500",
        "lineHeight": 80
    },
    "h4": {
        "color": "#f4f4f4",
        "fontWeight": "500",
        "lineHeight": 80
    },
    "h5": {
        "color": "#f4f4f4",
        "fontWeight": "500",
        "lineHeight": 80
    },
    "h6": {
        "color": "#f4f4f4",
        "fontWeight": "500",
        "lineHeight": 80
    },
    "p1": {
        "background": "#ec3f8c",
        "textAlign": "center",
        "paddingTop": 60,
        "paddingRight": 60,
        "paddingBottom": 60,
        "paddingLeft": 60,
        "fontSize": 18,
        "marginTop": 0,
        "marginRight": -35,
        "marginBottom": 0,
        "marginLeft": -35
    },
    "p3": {
        "background": "#1fd26a",
        "textAlign": "center",
        "paddingTop": 60,
        "paddingRight": 60,
        "paddingBottom": 60,
        "paddingLeft": 60,
        "fontSize": 18,
        "marginTop": 0,
        "marginRight": -35,
        "marginBottom": 0,
        "marginLeft": -35
    },
    "p2": {
        "background": "#39b1c6",
        "textAlign": "center",
        "paddingTop": 60,
        "paddingRight": 60,
        "paddingBottom": 60,
        "paddingLeft": 60,
        "fontSize": 18,
        "marginTop": 0,
        "marginRight": -35,
        "marginBottom": 0,
        "marginLeft": -35
    },
    "p2m": {
        "background": "#39b1c6",
        "paddingTop": 60,
        "paddingRight": 60,
        "paddingBottom": 60,
        "paddingLeft": 60,
        "fontSize": 18,
        "marginTop": 0,
        "marginRight": -35,
        "marginBottom": 0,
        "marginLeft": -35
    },
    "nav": {
        "textAlign": "center",
        "marginBottom": 10
    },
    "a": {
        "textDecoration": "none",
        "color": "#f4f4f4",
        "fontSize": 22
    },
    "ul": {
        "listStyleType": "none",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "overflow": "hidden",
        "backgroundColor": "#25242c"
    },
    "li": {
        "display": "inline-block",
        "alignContent": "center",
        "float": "center",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "li a": {
        "paddingLeft": 50,
        "paddingRight": 50,
        "paddingTop": 1,
        "paddingBottom": 1,
        "fontSize": 30
    },
    "li a:hover": {
        "color": "#dedede"
    },
    "img": {
        "height": 100,
        "width": 120
    },
    "header img": {
        "float": "left",
        "width": 150,
        "height": 100
    },
    "header h1": {
        "position": "relative",
        "top": 18,
        "left": 10
    },
    "header": {},
    "c2c": {
        "position": "relative",
        "width": "100%"
    },
    "c2c img": {
        "height": "100%",
        "width": "100%",
        "marginBottom": -10
    },
    "daftPunk": {
        "position": "relative",
        "width": "100%"
    },
    "daftPunk img": {
        "height": "100%",
        "width": "100%",
        "marginBottom": -10
    },
    "gambino": {
        "position": "relative",
        "width": "100%"
    },
    "p4": {
        "position": "absolute",
        "top": "50%",
        "left": 0,
        "width": "100%",
        "fontSize": 50,
        "color": "#ec3f8c"
    },
    "p5": {
        "position": "absolute",
        "top": "50%",
        "left": 0,
        "width": "100%",
        "fontSize": 50,
        "color": "#ec3f8c"
    },
    "p6": {
        "position": "absolute",
        "top": "50%",
        "left": 0,
        "width": "100%",
        "fontSize": 50,
        "color": "#ec3f8c"
    },
    "gambino img": {
        "height": "100%",
        "width": "100%",
        "marginBottom": -10
    },
    "footer": {
        "background": "#25242c",
        "fontSize": 12,
        "color": "#f3f3f3",
        "textAlign": "center"
    },
    "footer h2": {
        "fontSize": 25
    },
    "p": {
        "fontSize": 22,
        "textAlign": "center"
    },
    "audio": {
        "transition": "all 0.5s linear",
        "boxShadow": "2px 2px 4px 0px rgba(0, 0, 0, 0.4)",
        "borderRadius": "7px 7px 7px 7px",
        "alignContent": "left"
    },
    "audio:hover": {
        "boxShadow": "15px 15px 20px rgba(0, 0, 0, 0.4)",
        "transform": "scale(1.05)"
    },
    "audio:focus": {
        "boxShadow": "15px 15px 20px rgba(0, 0, 0, 0.4)",
        "transform": "scale(1.05)"
    },
    "audio:active": {
        "boxShadow": "15px 15px 20px rgba(0, 0, 0, 0.4)",
        "transform": "scale(1.05)"
    },
    "audioC2C": {
        "overflow": "hidden",
        "alignContent": "center"
    },
    "audioCG": {
        "overflow": "hidden",
        "alignContent": "center"
    },
    "audioDF": {
        "overflow": "hidden",
        "alignContent": "center"
    },
    "p2m h2": {
        "textAlign": "center",
        "marginTop": -10,
        "marginRight": -10,
        "marginBottom": -10,
        "marginLeft": -10
    },
    "audioCGimg": {
        "width": "100%"
    },
    "audioCGimg img": {
        "width": 300,
        "height": 150
    },
    "audioDPimg": {
        "width": "100%"
    },
    "audioDPimg img": {
        "width": 300,
        "height": 150
    },
    "audioC2Cimg": {
        "width": "100%"
    },
    "audioC2Cimg img": {
        "width": 300,
        "height": 150
    },
    "audioCGimg:active": {
        "boxShadow": "7px 7px 7px rgba(0, 0, 0, 0.4)",
        "transform": ""
    },
    "idCard1": {
        "textAlign": "right",
        "background": "#39b1aa",
        "paddingTop": 10,
        "boxShadow": "2px 2px 4px 0px rgba(0, 0, 0, 0.4)",
        "borderRadius": "7px 7px 7px 7px",
        "marginBottom": 10
    },
    "idCard1:hover": {
        "boxShadow": "15px 15px 20px rgba(0, 0, 0, 0.4)",
        "transform": "scale(1.01)"
    },
    "idCard1 img": {
        "marginTop": ""
    },
    "idCard1 p": {
        "textAlign": "left",
        "float": "left"
    },
    "idCard2": {
        "textAlign": "left",
        "background": "#39b1aa",
        "paddingBottom": -10,
        "boxShadow": "2px 2px 4px 0px rgba(0, 0, 0, 0.4)",
        "borderRadius": "7px 7px 7px 7px",
        "marginTop": 25
    },
    "idCard2:hover": {
        "boxShadow": "15px 15px 20px rgba(0, 0, 0, 0.4)",
        "transform": "scale(1.01)"
    },
    "idcard2 img": {
        "marginLeft": 20
    },
    "idCard2 p": {
        "textAlign": "right",
        "float": "right"
    },
    "map": {
        "height": 500
    },
    "hide": {
        "height": "100%"
    },
    "ng-hide": {
        "animation": "2s hideMap"
    }
});