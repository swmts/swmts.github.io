---
layout: post
title:  "Teen Wolf: The Movie"
date:   2023-01-18 12:00:00 +0300
categories: Movies
---
<head>
<link href="https://unpkg.com/video.js/dist/video-js.css" rel="stylesheet" />
<script src="https://unpkg.com/video.js/dist/video.js"></script>
<script src="https://unpkg.com/videojs-contrib-quality-levels/dist/videojs-contrib-quality-levels.js"></script>
<script src="https://unpkg.com/@samueleastdev/videojs-dash-hls-bitrate-switcher/dist/videojs-dash-hls-bitrate-switcher.js"></script>
<script src="https://unpkg.com/@samueleastdev/videojs-settings-menu/dist/videojs-settings-menu.js"></script>
</head>
<body>
<p style="text-align: center;"></p><div style="text-align: center;"><b><span style="color: #783f04;">الأسم</span></b></div><div style="text-align: center;"><b><span style="color: #073763;">Teen Wolf: The Movie</span></b></div><div style="text-align: center;"><b><br /></b></div><div><div style="text-align: center;"><b><span style="color: #660000;">الأسم بالعربي</span></b></div><div style="text-align: center;"><b><span style="color: #073763;">تين وولف: الفلم</span></b></div><div style="text-align: center;"><b><br /></b></div><div><div style="text-align: center;"><b><span style="color: #274e13;">النوع</span></b></div><div style="text-align: center;"><b><span style="color: #20124d;">حركة, فانتازيا</span></b></div><div style="text-align: center;"><b><br /></b></div><div><div style="text-align: center;"><b><span style="color: #741b47;">السنة</span></b></div><div style="text-align: center;"><b><span style="color: #a64d79;">2023</span></b></div><div style="text-align: center;"><b><br /></b></div><div><div style="text-align: center;"><b><span style="color: #3d85c6;">القصة</span></b></div></div></div></div></div><div style="text-align: center;"><b><span style="color: #45818e;">يرتفع القمر الكامل في بيكون هيلز ، ومعه ظهر شر مرعب. تعوي الذئاب مرة أخرى ، داعية إلى عودة الشؤم و ذئاب ضارية و الجحيم و كيتسونيس وكل مغير شكل آخر في الليل. لكن فقط بالذئب مثل سكوت ماكول ، الذي لم يعد مراهقا بعد لا يزال ألفا ، يمكنه جمع حلفاء جدد ولم شمل الأصدقاء الموثوق بهم للرد على ما يمكن أن يكون أقوى عدو واجهه على الإطلاق.</span></b></div>
<video
    id="vid1"
    class="video-js"
    controls
	width="800"
	height="600"
    preload="auto"
    poster="https://m.media-amazon.com/images/M/MV5BYmExMWU0ODktY2YyMS00Zjc3LWI3YTYtNDIzMzhiZDQ3NGNlXkEyXkFqcGdeQXVyMTQzNTA5MzYz._V1_.jpg"
    data-setup='{}'>
<source src="https://t-eu-2.magnewscontent.org/_v10/a60b51d1559e7f09e5f9cae52675ccaf1e9f71bae1914f5ce5d4977a9b2c04dcaeb704e606e0c38f0d4d865bf4f91a3358fa51b4f8c414a4d46bfd7efdb91442bb000552fa056b08d9ee34d39ab07a7748aad46446cacf54b37d35e757aafc65d665c72e628945983c4f87b358d1cb1d363bc7441f9d5e9bc42a241b20ea359d/1080/index.m3u8" type="application/x-mpegURL">
<track src="" kind="subtitles" srclang="ar" label="Arabic">
</video>
<script src="https://unpkg.com/video.js/dist/video.js"></script>
<script src="https://unpkg.com/videojs-contrib-quality-levels/dist/videojs-contrib-quality-levels.js"></script>
<script src="https://unpkg.com/@samueleastdev/videojs-dash-hls-bitrate-switcher/dist/videojs-dash-hls-bitrate-switcher.js"></script>
<script src="https://unpkg.com/@samueleastdev/videojs-settings-menu/dist/videojs-settings-menu.js"></script>
<script>
  (function (window, videojs) {
    var examplePlayer = (window.examplePlayer = videojs("vid1", {
      techOrder: ["html5"],
      html5: {
        hls: {
          overrideNative: false,
          cacheEncryptionKeys: true,
        },
      },
      plugins: {
        dashHlsBitrateSwitcher: {
          support: "both",
        },
        settingsMenu: {
          items: [
            "AudioTrackButton",
            "ChaptersButton",
            "SubsCapsButton",
            "PlaybackRateMenuButton",
            "RatesButton",
          ],
          languages: {
            settings: "Settings",
            loading: "Loading",
            back: "Back",
            captions_off: "Captions Off",
            default_audio: "Default Audio",
            audio: "Audio",
            subtitles: "Subtitles",
            chapters: "Chapters",
            speed: "Speed",
            quality: "Quality",
          },
        },
      },
      crossOrigin: "anonymous",
      liveui: true,
      autoplay: true,
      muted: true,
      playbackRates: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
      nativeControlsForTouch: true,
    }));

    document.getElementById("switch").addEventListener("click", (_evt) => {
      examplePlayer.src({
        src: "https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8",
        type: "application/x-mpegURL",
      });
    });
  })(window, window.videojs);
</script>
</body>