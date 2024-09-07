function setBgImg(a) {
  return !!a && (Cookies.set("bg_img", a, { expires: 36500 }), !0);
}
function getBgImg() {
  var a = Cookies.get("bg_img");
  return a && "{}" !== a
    ? JSON.parse(a)
    : (setBgImg(bg_img_preinstall), bg_img_preinstall);
}
function setBgImgInit() {
  var a = getBgImg();
  switch (
    ($("input[name='wallpaper-type'][value=" + a.type + "]").click(), a.type)
  ) {
    case "1":
      // var g = new Array();
      // (g[0] = "./img/background1.webp"),
      //   (g[1] = "./img/background2.webp"),
      //   (g[2] = "./img/background3.webp"),
      //   (g[3] = "https://pic.imgdb.cn/item/66b9f627d9c307b7e91b63d9.webp"),
      //   (g[4] = "https://pic.imgdb.cn/item/66b9f663d9c307b7e91ba72b.webp"),
      //   (g[5] = "./img/background6.webp"),
      //   (g[6] = "./img/background7.webp"),
      //   (g[7] = "https://pic.imgdb.cn/item/66b9f5afd9c307b7e91ad920.webp");
      // var i = Math.floor(8 * Math.random());
      $("#bg").attr("src", "https://wkphoto.cdn.bcebos.com/c995d143ad4bd113625b4e5c4aafa40f4afb05cd.jpg");
      break;
    case "2":
      $("#bg").attr("src", "https://api.dujin.org/bing/1920.php");
      break;
    case "3":
      $("#bg").attr("src", "https://api.xsot.cn/bing?jump=true");
      break;
    case "4":
      $("#bg").attr("src", "https://api.hanximeng.com/ranimg/api.php");
  }
}
var bg_img_preinstall = { type: "1", path: "" };
$(document).ready(function () {
  setBgImgInit(),
    $("#wallpaper").on("click", ".set-wallpaper", function () {
      var a = $(this).val(),
        g = getBgImg();
      if (((g.type = a), "1" === a)) {
        setBgImg(g);
        // var i = new Array();
        // (i[0] = "./img/background1.webp"),
        //   (i[1] = "./img/background2.webp"),
        //   (i[2] = "./img/background3.webp"),
        //   (i[3] = "https://pic.imgdb.cn/item/66b9f627d9c307b7e91b63d9.webp"),
        //   (i[4] = "https://pic.imgdb.cn/item/66b9f663d9c307b7e91ba72b.webp"),
        //   (i[5] = "./img/background6.webp"),
        //   (i[6] = "./img/background7.webp"),
        //   (i[7] = "https://pic.imgdb.cn/item/66b9f5afd9c307b7e91ad920.webp");
        // var e = Math.floor(8 * Math.random());
        $("#bg").attr("src",
"https://wkphoto.cdn.bcebos.com/c995d143ad4bd113625b4e5c4aafa40f4afb05cd.jpg  "), iziToast.show({ message: "壁纸设置成功" });
      }
      "2" === a &&
        (setBgImg(g),
        $("#bg").attr("src",
"https://bing.img.run/1920x1080.php"),
        iziToast.show({ message: "壁纸设置成功" })),
        "3" === a &&
          (setBgImg(g),
          $("#bg").attr("src", "https://api.xsot.cn/bing?jump=true"),
          iziToast.show({ message: "壁纸设置成功" })),
        "4" === a &&
          (setBgImg(g),
          $("#bg").attr("src", "https://api.hanximeng.com/ranimg/api.php"),
          iziToast.show({ message: "壁纸设置成功" }));
    });
});
