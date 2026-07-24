/* Site i18n: English (default) / 中文 switcher */
(function () {
  var LANG = 'en';
  try { LANG = localStorage.getItem('site-lang') || 'en'; } catch (e) {}
  if (LANG !== 'zh') LANG = 'en';

  document.documentElement.setAttribute('data-lang', LANG);
  document.documentElement.lang = LANG === 'en' ? 'en' : 'zh-TW';
  var st = document.createElement('style');
  st.textContent = '[data-lang="en"] .i18n-zh{display:none!important}[data-lang="zh"] .i18n-en{display:none!important}';
  (document.head || document.documentElement).appendChild(st);

  var DICT = {
    /* Navigation & UI */
    '首頁': 'Home',
    '關於': 'About',
    '歸檔': 'Archives',
    '分類': 'Categories',
    '標籤': 'Tags',
    '搜尋': 'Search',
    '關鍵字': 'Keyword',
    '目錄': 'Contents',
    '作者': 'Author',
    '發布於': 'Published on',
    '許可協議': 'License',
    '署名': 'Attribution',
    '上一篇': 'Previous',
    '下一篇': 'Next',
    '交換連結': 'Links',
    '頁面不存在': 'Page Not Found',
    '博客在允許 JavaScript 運行的環境下瀏覽效果更佳': 'This site works best with JavaScript enabled',
    '主题博客': 'Theme Blog',
    '主题使用指南': 'Theme Docs',
    '主题 GitHub 仓库': 'Theme GitHub Repo',
    /* Banner / about */
    '許 譯 文 EVAN 的 作 品 集': "EVAN'S PORTFOLIO",
    '許譯文 Evan': 'Evan Hsu',
    /* Tags & categories */
    '大學專題': 'Undergraduate Project',
    '案子': 'Freelance Work',
    '產學計畫': 'Industry-Academia Project',
    '碩士論文': "Master's Thesis",
    '競賽': 'Competition',
    /* Post titles */
    '基於人工智慧之頸部淋巴腫瘤超音波輔助診斷系統': 'AI-Based Ultrasound-Assisted Diagnosis System for Neck Lymph Node Tumors',
    '用於邊緣運算之超輕量化道路物件辨識模型的知識蒸餾': 'Knowledge Distillation for Ultra-Lightweight Road Object Detection Models on Edge Devices',
    'Wifi 遙控四驅車': 'WiFi-Controlled 4WD Car',
    'Wifi遙控四驅車': 'WiFi-Controlled 4WD Car',
    '打殭屍遊戲機': 'Whack-a-Zombie Arcade Game',
    '水稻植株位置自動標註競賽': 'Rice Seedling Auto-Labeling Competition',
    '水稻植株位置自動標註模型': 'Rice Seedling Auto-Labeling Model',
    '自動追光太陽能板雲台': 'Sun-Tracking Solar Panel Gimbal',
    '醫療內視鏡辨識APP': 'Medical Endoscope Recognition App',
    /* Home page excerpts */
    '2023 ICKII BEST CONFERENCE PAPER，此為與博遠智能科技公司合作的產學計畫，我們在搭載 Snapdragon 660 Mobile Platform 的 Xiaomi Mi A2手機上，利用知識蒸餾提升學生模型的精度，最後我們在資料集BDD100K將 YOLOv5p 由 mAP 18% 提高至 mAP 19.3%。':
      "2023 ICKII Best Conference Paper. An industry-academia project with Boyuan Intelligent Technology. On a Xiaomi Mi A2 phone powered by the Snapdragon 660 Mobile Platform, we used knowledge distillation to improve the student model's accuracy, raising YOLOv5p from 18% mAP to 19.3% mAP on the BDD100K dataset.",
    '此為與亞東紀念醫院合作的產學計畫，我們使用深度學習的方法將淋巴腺腫瘤的超音波影像輸入到分類模型預測良惡性，並且對腫瘤超音波影像做一些紋理特徵的分析後，呈現在UI上輔助醫師的看診，最終分類模型Accuracy 90% F1 91%。':
      'An industry-academia project with Far Eastern Memorial Hospital. We fed ultrasound images of lymph node tumors into a deep learning classification model to predict whether tumors are benign or malignant, analyzed texture features of the ultrasound images, and presented everything in a UI to assist physicians. The final classifier reached 90% accuracy and a 91% F1 score.',
    '此計畫目的是開發一個能夠協助醫護人員快速辨認醫療內視鏡型號的APP，醫療內視鏡分為非常多型號與尺寸，所以醫護人員在收納整理內視鏡時，常常需要花費非常多時間查找並且對應編號表，此APP的開發，讓他們只需要使用手機拍攝就可以辨識出內視鏡的編號加快收納速度。':
      'This project builds an app that helps medical staff quickly identify medical endoscope models. Endoscopes come in many models and sizes, so staff often spend a lot of time looking them up against reference tables when sorting and storing them. With this app, they simply point their phone camera at an endoscope to recognize its model number, greatly speeding up storage and organization.',
    '此為AIdea競賽的參賽題目，我們要從空拍機拍出的全彩影像中，將水稻的植株位置標註出來，我們訓練深度模型輸出水稻標點的heatmap，在設定閥值將heatmap中的peak過濾出來得到預測結果，最終以 F1 92.6%得到前標。':
      'An AIdea competition task: labeling rice seedling positions in full-color drone imagery. We trained a deep model to output a heatmap of rice keypoints, then filtered the peaks with a threshold to obtain predictions, finishing in the top tier with an F1 score of 92.6%.',
    '這是一個簡易的打殭屍遊戲機，利用Arduino控制8*8點矩陣、二位七段顯示器、按鈕與一些解碼IC構成，紅色的方塊會由上慢慢降下，按下相對應的按鈕就可以獲得分數，充滿小時候的遊戲時光回憶。':
      'A simple whack-a-zombie arcade game built with an Arduino controlling an 8x8 LED matrix, a two-digit seven-segment display, buttons, and a few decoder ICs. Red blocks slowly descend from the top, and pressing the matching button scores points — full of childhood gaming nostalgia.',
    '這是一個可以自動追逐光源的雲台，利用Arduino控制四個光敏電阻與兩個伺服馬達構成，我們可以將太陽能板放置在雲台上，讓太陽能板能夠隨時正對太陽達到最高的發電效率。':
      'A gimbal that automatically tracks a light source, built with an Arduino, four photoresistors, and two servo motors. A solar panel mounted on the gimbal always faces the sun directly for maximum power-generation efficiency.',
    '這是一個可以用網路遙控前後的四驅車，利用ESP8266經由MQTT通訊遙控器與四驅車，再利用繼電器控制電流流向改變馬達轉向，遠端遙控四驅車的動作。':
      'A 4WD car that can be driven forward and backward over the internet. An ESP8266 links the remote and the car via MQTT, and relays switch the current direction to reverse the motors, enabling remote control of the car.'
  };

  var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  function tr(t) {
    if (!t) return null;
    if (DICT.hasOwnProperty(t)) return DICT[t];
    if (t.charAt(0) === '#' && DICT.hasOwnProperty(t.slice(1))) return '#' + DICT[t.slice(1)];
    var m = t.match(/^(\d{4})年(\d{1,2})月(\d{1,2})日$/);
    if (m) return MONTHS[+m[2] - 1] + ' ' + m[3] + ', ' + m[1];
    m = t.match(/^共有 (\d+) 篇文章$/);
    if (m) return m[1] + (m[1] === '1' ? ' post' : ' posts') + ' in total';
    if (t.indexOf(' - ') > -1) {
      var parts = t.split(' - ').map(function (p) {
        var r = tr(p);
        return r === null ? p : r;
      });
      var joined = parts.join(' - ');
      if (joined !== t) return joined;
    }
    return null;
  }

  function apply() {
    /* Remove blocks of the inactive language so TOC/anchors only see one */
    var kill = LANG === 'en' ? '.i18n-zh' : '.i18n-en';
    var blocks = document.querySelectorAll(kill);
    for (var i = 0; i < blocks.length; i++) {
      blocks[i].parentNode.removeChild(blocks[i]);
    }

    if (LANG === 'en') {
      /* Translate text nodes */
      var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
      var node;
      while ((node = walker.nextNode())) {
        var v = node.nodeValue;
        var t = v.trim();
        if (!t) continue;
        var r = tr(t);
        if (r !== null) node.nodeValue = v.replace(t, r);
      }
      /* Translate attributes */
      var attrs = ['alt', 'aria-label', 'data-typed-text', 'title'];
      var els = document.querySelectorAll('[alt],[aria-label],[data-typed-text],[title]');
      for (var j = 0; j < els.length; j++) {
        for (var k = 0; k < attrs.length; k++) {
          var a = els[j].getAttribute(attrs[k]);
          if (a) {
            var ra = tr(a.trim());
            if (ra !== null) els[j].setAttribute(attrs[k], ra);
          }
        }
      }
      /* Page title */
      var rt = tr(document.title.trim());
      if (rt !== null) document.title = rt;
    }

    /* Inject language toggle into navbar */
    var navs = document.querySelectorAll('ul.navbar-nav');
    for (var n = 0; n < navs.length; n++) {
      var li = document.createElement('li');
      li.className = 'nav-item';
      li.id = 'lang-toggle-btn';
      var aEl = document.createElement('a');
      aEl.className = 'nav-link';
      aEl.href = 'javascript:;';
      aEl.setAttribute('aria-label', 'Switch language');
      var span = document.createElement('span');
      span.textContent = LANG === 'en' ? '中文' : 'EN';
      aEl.appendChild(span);
      aEl.addEventListener('click', function () {
        try { localStorage.setItem('site-lang', LANG === 'en' ? 'zh' : 'en'); } catch (e) {}
        location.reload();
      });
      li.appendChild(aEl);
      var searchBtn = navs[n].querySelector('#search-btn');
      if (searchBtn) {
        navs[n].insertBefore(li, searchBtn);
      } else {
        navs[n].appendChild(li);
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', apply);
  } else {
    apply();
  }
})();
