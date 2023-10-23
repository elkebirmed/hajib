console.log("Hajib loaded");

const zionismList = [
  "cocacola",
  "coca-cola",
  "starbucks",
  "mcdonalds",
  "nike",
  "hugoboss",
  "chicco",
  "barbie",
  "kodak",
  "pampers",
  "luvs",
  "kotex",
  "always",
  "kleenex",
  "raid",
  "tide",
  "ariel",
  "vanish",
  "zest",
  "ivory",
  "camay",
  "crest",
  "pantene",
  "pert",
  "headandshoulders",
  "glade",
  "vicks",
  "halls",
  "tang",
  "mountaindew",
  "pepsi",
  "popeyes",
  "burgerking",
  "kfc",
  "hardees",
];

let href = window.location.hostname;

let zionismWarning = document.createElement("div");

zionismWarning.innerHTML = `
<div style="width:100%;height:100vh;background-color:white;position:fixed;top:0;right:0;z-index:2147483647;dir:rtl;padding:20px;color:red;text-align:center;font-size:25px;font-weight:bold;text-shadow:1px 1px 20px black;" id="zionism-warning">

  <img src='${chrome.runtime.getURL("images/gaza-children.jpg")}' style="
    position: fixed;
    width: 100%;
    height: 100vh;
    right: 0;
    top: 0;
    object-fit: cover;" />
  
  <div style="
    position: fixed;
    width: 100%;
    height: 100vh;
    right: 0;
    top: 0;
    padding: 20px;
    background-color: white;
    opacity: 0.7;">
    هذا الموقع يدعم الصهاينة، هل أنت متأكد من دخولك لهذا الموقع؟
    <br>
    <br>
    <button style="padding:5px 10px;text-shadow:0 0 20px black;box-shadow:0 0 3px black;font-weight:bold;border:1px solid green;border-radius:5px;color:green;" onclick="window.location = 'https://shuounislamiya.com/'">الخروج من الموقع</button>
    <br>
    <br>
    <button style="padding:5px 10px;text-shadow:0 0 20px black;box-shadow:0 0 3px black;font-weight:bold;border:1px solid red;border-radius:5px;color:red;" onclick="document.getElementById('zionism-warning').style.display = 'none'">الدخول إلى الموقع</button>
  </div>
  
  </div>
`;

zionismList.forEach((zionism) => {
  if (href.includes(zionism)) {
    console.log(`Zionism detected: ${zionism}`);

    document.body.appendChild(zionismWarning);
  }
});
