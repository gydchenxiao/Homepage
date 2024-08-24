function changevolume() {
  var E = $("#volume").val();
  ap.volume(E, !0),
    0 == E
      ? $("#volume-ico").html("<i class='iconfont icon-volume-x'></i>")
      : E > 0 && E <= 0.3
      ? $("#volume-ico").html("<i class='iconfont icon-volume'></i>")
      : E > 0.3 && E <= 0.6
      ? $("#volume-ico").html("<i class='iconfont icon-volume-1'></i>")
      : $("#volume-ico").html("<i class='iconfont icon-volume-2'></i>");
}
const ap = new APlayer({
  container: document.getElementById("aplayer"),
  order: "random",
  preload: "auto",
  listMaxHeight: "336px",
  volume: "0.5",
  mutex: !0,
  audio: [
    {
      name: "Turn Back Time",
      artist: "Rich Edwards / Emelie",
      url: "http://music.163.com/song/media/outer/url?id=1331800077.mp3",
      cover: "https://pic.imgdb.cn/item/66b4d81ed9c307b7e9509a33.jpg",
    },
    {
      name: "半岛铁盒",
      artist: "周杰伦",
      url: "https://echeverra.cn/wp-content/uploads/2022/05/周杰伦-半岛铁盒.mp3",
      cover: "https://pic.imgdb.cn/item/66b4d81ed9c307b7e9509a33.jpg",
    },
    {
      name: "보라빛 밤",
      artist: "宣美",
      url: "https://music.163.com/song/media/outer/url?id=1459014561.mp3",
      cover: "https://pic.imgdb.cn/item/66b4d81ed9c307b7e9509a33.jpg",
    },
    {
      name: "雨蝶",
      artist: "李翊君",
      url: "https://od.lk/s/OThfNDAyOTcwNTVf/Rain%20butterfly.mp3",
      cover: "https://pic.imgdb.cn/item/66b4d81ed9c307b7e9509a33.jpg",
    },
    {
      name: "永远的奥特曼",
      artist: "Line",
      url: "https://music.163.com/song/media/outer/url?id=1461262038.mp3",
      cover: "https://pic.imgdb.cn/item/66b4d81ed9c307b7e9509a33.jpg",
    },
    {
      name: "恶作剧",
      artist: "王蓝茵",
      url: "https://od.lk/s/OThfNDAyOTcwNjRf/mischief.mp3",
      cover: "https://pic.imgdb.cn/item/66b4d81ed9c307b7e9509a33.jpg",
    },
    {
      name: "사이렌",
      artist: "宣美",
      url: "https://music.163.com/song/media/outer/url?id=1307376239.mp3",
      cover: "https://pic.imgdb.cn/item/66b4d81ed9c307b7e9509a33.jpg",
    },
    {
      name: "Bad Girl Good Girl",
      artist: "Miss a",
      url: "https://od.lk/s/OThfNDAyNTQ0MjZf/bad%20girl%20good%20girl.mp3",
      cover: "https://pic.imgdb.cn/item/66b4d81ed9c307b7e9509a33.jpg",
    },
    {
      name: "彼女は旅に出る",
      artist: "鎖那",
      url: "https://music.163.com/song/media/outer/url?id=509106775.mp3",
      cover: "https://pic.imgdb.cn/item/66b4d81ed9c307b7e9509a33.jpg",
    },
    {
      name: "안녕 Goodbye",
      artist: "DIA",
      url: "https://music.163.com/song/media/outer/url?id=485347116.mp3",
      cover: "https://pic.imgdb.cn/item/66b4d81ed9c307b7e9509a33.jpg",
    },
    {
      name: "Touch",
      artist: "3LAU / Carly Paige",
      url: "https://music.163.com/song/media/outer/url?id=534228257.mp3",
      cover: "https://pic.imgdb.cn/item/66b4d81ed9c307b7e9509a33.jpg",
    },
    {
      name: "Seasons",
      artist: "Futuristik",
      url: "https://music.163.com/song/media/outer/url?id=557583842.mp3",
      cover: "https://pic.imgdb.cn/item/66b4d81ed9c307b7e9509a33.jpg",
    },
    {
      name: "24시간이 모자라",
      artist: "宣美",
      url: "https://music.163.com/song/media/outer/url?id=27630860.mp3",
      cover: "https://pic.imgdb.cn/item/66b4d81ed9c307b7e9509a33.jpg",
    },
    {
      name: "大雪",
      artist: "音阙诗听 / 王梓钰",
      url: "https://music.163.com/song/media/outer/url?id=1407970468.mp3",
      cover: "https://pic.imgdb.cn/item/66b4d81ed9c307b7e9509a33.jpg",
    },
    {
      name: "学猫叫",
      artist: "小潘潘，小峰峰",
      url: "http://music.163.com/song/media/outer/url?id=1360833175.mp3",
      cover: "https://pic.imgdb.cn/item/66b4d81ed9c307b7e9509a33.jpg",
    },
    {
      name: "一笑倾城",
      artist: "汪苏泷",
      url: "https://h5.1ting.com/file?url=/zzzzzmp3/2016hAug/22X/22c_Sulon/01.mp3",
      cover: "https://pic.imgdb.cn/item/66b4d81ed9c307b7e9509a33.jpg",
    },
    {
      name: "Senbonzakura",
      artist: "Lindsey Stirling",
      url: "http://music.163.com/song/media/outer/url?id=31273131.mp3",
      cover: "https://pic.imgdb.cn/item/66b4d81ed9c307b7e9509a33.jpg",
    },
    {
      name: "凉城",
      artist: "任然",
      url: "https://od.lk/s/OThfMzk4ODQyNzlf/13373134__1620215223.mp3",
      cover: "https://pic.imgdb.cn/item/66b4d81ed9c307b7e9509a33.jpg",
    },
    {
      name: "Cloud Nine",
      artist: "Cherry Bullet",
      url: "https://od.lk/s/OThfNDAyNTQ0MzBf/Cloud%20Nine.mp3",
      cover: "https://pic.imgdb.cn/item/66b4d81ed9c307b7e9509a33.jpg",
    },
    {
      name: "像鱼",
      artist: "王贰浪",
      url: "https://od.lk/s/OThfNDAyOTcwNjNf/like%20fish.mp3",
      cover: "https://pic.imgdb.cn/item/66b4d81ed9c307b7e9509a33.jpg",
    },
    {
      name: "One More Last Time",
      artist: "Henry Young / Ashley Alisha",
      url: "https://music.163.com/song/media/outer/url?id=1942576027.mp3",
      cover: "https://pic.imgdb.cn/item/66b4d81ed9c307b7e9509a33.jpg",
    },
    {
      name: "Fast lane",
      artist: "Palm Trees / MdL / Abi F Jones",
      url: "https://music.163.com/song/media/outer/url?id=1406099861.mp3",
      cover: "https://pic.imgdb.cn/item/66b4d81ed9c307b7e9509a33.jpg",
    },
    {
      name: "Back to Me",
      artist: "Back to Me",
      url: "https://music.163.com/song/media/outer/url?id=521954930.mp3",
      cover: "https://pic.imgdb.cn/item/66b4d81ed9c307b7e9509a33.jpg",
    },
    {
      name: "살만찌고",
      artist: "4minute",
      url: "https://od.lk/s/OThfNDAyNTQ0Mjdf/%E5%8F%AA%E6%98%AF%E9%95%BF%E8%83%96.mp3",
      cover: "https://pic.imgdb.cn/item/66b4d81ed9c307b7e9509a33.jpg",
    },
    {
      name: "可不可以",
      artist: "张紫豪",
      url: "https://od.lk/s/OThfMzk4OTAyNzFf/bu.mp3",
      cover: "https://pic.imgdb.cn/item/66b4d81ed9c307b7e9509a33.jpg",
    },
    {
      name: "天外来物",
      artist: "薛之谦",
      url: "https://od.lk/s/OThfMzk4OTEwMTBf/tianwailaiwu.mp3",
      cover: "https://pic.imgdb.cn/item/66b4d81ed9c307b7e9509a33.jpg",
    },
    {
      name: "Baby I'm Sorry",
      artist: "MYNAME",
      url: "https://od.lk/s/OThfMzk4OTA2ODJf/baby.mp3",
      cover: "https://pic.imgdb.cn/item/66b4d81ed9c307b7e9509a33.jpg",
    },
    {
      name: "情深深雨蒙蒙",
      artist: "赵薇",
      url: "https://od.lk/s/OThfNDAzMTQ0MzZf/Romantic%20in%20the%20rain.mp3",
      cover: "https://pic.imgdb.cn/item/66b4d81ed9c307b7e9509a33.jpg",
    },
    {
      name: "Horizon",
      artist: "Janji",
      url: "https://music.163.com/song/media/outer/url?id=32046918.mp3",
      cover: "https://pic.imgdb.cn/item/66b4d81ed9c307b7e9509a33.jpg",
    },
    {
      name: "Back to me",
      artist: "Vanotek",
      url: "https://od.lk/s/OThfMzk5MDc0MzRf/back%20to%20me.mp3",
      cover: "https://pic.imgdb.cn/item/66b4d81ed9c307b7e9509a33.jpg",
    },
    {
      name: "Kill bill",
      artist: "Brown Eyes Girls",
      url: "https://music.163.com/song/media/outer/url?id=27514515.mp3",
      cover: "https://pic.imgdb.cn/item/66b4d81ed9c307b7e9509a33.jpg",
    },
    {
      name: "雨爱",
      artist: "杨丞琳",
      url: "https://od.lk/s/OThfMzk5MTQ3NDFf/yuai.mp3",
      cover: "https://pic.imgdb.cn/item/66b4d81ed9c307b7e9509a33.jpg",
    },
    {
      name: "Decor",
      artist: "Andreea Balan",
      url: "https://music.163.com/song/media/outer/url?id=31446595.mp3",
      cover: "https://pic.imgdb.cn/item/66b4d81ed9c307b7e9509a33.jpg",
    },
    {
      name: " Ce Frumoasa E Iubirea",
      artist: "Giulia ",
      url: "https://od.lk/s/OThfMzk5NTIwMjdf/Ce%20Frumoasa%20E%20Iubirea.mp3",
      cover: "https://pic.imgdb.cn/item/66b4d81ed9c307b7e9509a33.jpg",
    },
    {
      name: "Stay",
      artist: "The Kid LAROI,Justin Bieber",
      url: "https://od.lk/s/OThfMzk5NTIwMjhf/stay.mp3",
      cover: "https://pic.imgdb.cn/item/66b4d81ed9c307b7e9509a33.jpg",
    },
    {
      name: "犯错",
      artist: "顾峰/斯琴高丽",
      url: "https://music.163.com/song/media/outer/url?id=1383381667.mp3",
      cover: "https://pic.imgdb.cn/item/66b4d81ed9c307b7e9509a33.jpg",
    },
    {
      name: "快乐女孩",
      artist: "刘惜君",
      url: "https://music.163.com/song/media/outer/url?id=255184.mp3",
      cover: "https://pic.imgdb.cn/item/66b4d81ed9c307b7e9509a33.jpg",
    },
    {
      name: "泡沫",
      artist: "邓紫棋",
      url: "https://od.lk/s/OThfMzk5NTIwMzVf/paomo.mp3",
      cover: "https://pic.imgdb.cn/item/66b4d81ed9c307b7e9509a33.jpg",
    },
    {
      name: "願い～あの頃のキミへ～(把回忆拼好给你的原版)",
      artist: "當山みれい",
      url: "https://od.lk/s/OThfNDAyNTQ0Mjlf/%E5%9B%9E%E5%BF%86%E6%8B%BC%E5%A5%BD%E7%BB%99%E4%BD%A0.mp3",
      cover: "https://pic.imgdb.cn/item/66b4d81ed9c307b7e9509a33.jpg",
   },
  ],
});

ap.on("play", function () {
  (music = $(".aplayer-title").text() + $(".aplayer-author").text()),
    iziToast.info({
      timeout: 5e3,
      iconUrl: "./img/icon/music.png",
      displayMode: "replace",
      message: music,
    }),
    $("#play").html("<i class='iconfont icon-pause'>"),
    $("#music-name").html(
      $(".aplayer-title").text() + $(".aplayer-author").text()
    ),
    $(document).width() >= 990 &&
      ($(".power").css("cssText", "display:none"),
      $("#lrc").css("cssText", "display:block !important"));
}),
  ap.on("pause", function () {
    $("#play").html("<i class='iconfont icon-play'>"),
      $(document).width() >= 990 &&
        ($("#lrc").css("cssText", "display:none !important"),
        $(".power").css("cssText", "display:block"));
  }),
  $("#music").hover(
    function () {
      $(".music-text").css("display", "none"),
        $(".music-volume").css("display", "flex");
    },
    function () {
      $(".music-text").css("display", "block"),
        $(".music-volume").css("display", "none");
    }
  ),
  $("#open-music").on("click", function () {
    $("#hitokoto").css("display", "none"), $("#music").css("display", "flex");
  }),
  $("#hitokoto").hover(
    function () {
      $("#open-music").css("display", "flex");
    },
    function () {
      $("#open-music").css("display", "none");
    }
  ),
  $("#music-close").on("click", function () {
    $("#music").css("display", "none"), $("#hitokoto").css("display", "flex");
  }),
  $("#play").on("click", function () {
    ap.toggle(),
      $("#music-name").html(
        $(".aplayer-title").text() + $(".aplayer-author").text()
      );
  }),
  $("#last").on("click", function () {
    ap.skipBack(),
      $("#music-name").html(
        $(".aplayer-title").text() + $(".aplayer-author").text()
      );
  }),
  $("#next").on("click", function () {
    ap.skipForward(),
      $("#music-name").html(
        $(".aplayer-title").text() + $(".aplayer-author").text()
      );
  }),
  $("#music-open").on("click", function () {
    $(document).width() >= 990 &&
      ($("#box").css("display", "block"),
      $("#row").css("display", "none"),
      $("#more").css("cssText", "display:none !important"));
  });

  
