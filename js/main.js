/* tab lien he */
var _submitted = false;
function myClose() {
    $("#contactForm-message").show("slow");
    $("#ss-form").hide("slow")
    setTimeout(function () {
      $("#contact-button").trigger("click");
    }, 4500)
  }
var easeOutBounce = function (x, t, b, c, d) {
    if ((t /= d) < (1 / 2.75)) {
      return c * (7.5625 * t * t) + b;
    } else if (t < (2 / 2.75)) {
      return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
    } else if (t < (2.5 / 2.75)) {
      return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
    } else {
      return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
    }
  }

  function Animate(elem, propName, duration, start, end) {
    var start_time = new Date().getTime();
    var interval = setInterval(function () {
      var current_time = new Date().getTime(),
        remaining = Math.max(0, start_time + duration - current_time),
        temp = remaining / duration || 0,
        percent = 1 - temp;

      if (start_time + duration < current_time) clearInterval(interval);

      var pos = easeOutBounce(null, duration * percent, 0, 1, duration),
        current = (end - start) * pos + start;

      elem.style[propName] = current + 'px';
    }, 1);
  }

  var elem = document.getElementById('contactform');
  var opened = false;

  $("#menulienhe").click(function () {
    $("#contact-button").trigger("click");
  })

  document.getElementById('contact-button').onclick = function () {
    if (opened) {
      Animate(elem, 'left', 800, 0, -265);
      opened = false;
    } else {
      Animate(elem, 'left', 800, -265, 0);
      opened = true;
    }
  }
  document.getElementById('close-contactform').onclick = function () {
    Animate(elem, 'left', 800, 0, -265);
    opened = false;
  }
  $(function () {
    var arrLinkLayoutCH = [
      "https://drive.google.com/uc?id=18_vdfKZtO6yJaqfvfRaqh4kK9LiQ5Vpx",
      "https://drive.google.com/uc?id=1NK6xfTAhVu1LlRCCNZzfqBbHOQMiauD_",
      "https://drive.google.com/uc?id=1i9Mq4L1PTZQ599Hpz5eBBJ7e15JObCY5",
      "https://drive.google.com/uc?id=1FyCvp4a72CBjvaTElz6Jx1OzvEp8rwre",
      "https://drive.google.com/uc?id=1A7q0F3ZcbQFfncxAX6JRjJdoZl-v_F6D",
      "https://drive.google.com/uc?id=1lMRDTc-w-TRXxRBlH6d_e8TyTJEsNAvI",
      "https://drive.google.com/uc?id=1J3QTToae_iC1bEUcb3dgWwKw0X1b4l1y",
      "https://drive.google.com/uc?id=1DigrvnX6oP9veOOlVvDGMpV7m-JoBsKc",
      "https://drive.google.com/uc?id=1_8bUBgQzUIMPa6S0gsHXJ2q8DY2vFTNk",
      "https://drive.google.com/uc?id=1zdIBnA7DqX0GjuPHJ18Q3F6yi-EctnGW",
      "https://drive.google.com/uc?id=1u8IOAdP-xj4qDR2GAlYF-tkv4J58Rhya",
      "https://drive.google.com/uc?id=1TAK4zbY-sUOSguaoX5-OyN9kOYkfW6jH",
    ];
    var _layoutName = "A", _layoutIdx = 0, _matbangName = "tang-6-33";
    $("#choncan").change(function (e) {
      _layoutIdx = $(this).prop('selectedIndex') || 0; //0 la CH 1 PN

      $("#layoutcanho").attr('src', "");
      $("#layoutcanho").attr('src', arrLinkLayoutCH[_layoutIdx]);
    })

    var arrLinkMatBang = [
      "https://drive.google.com/uc?id=1GEd7hhZfoMQ0YiDt0_mFyf_Ct8e3fIyJ",
      "https://drive.google.com/uc?id=1TOnhpt184AriS3tjVCddEG7ymuEaLgtb",
      "https://drive.google.com/uc?id=1FMJRU_X3fafjaZXBdm31BFLuovZhRJjH",
      "https://drive.google.com/uc?id=1cwnE4wQwzwrzibh_xnkpkZpXyrJ78smq",
      "https://drive.google.com/uc?id=1ndILCZRlBNdEwtn3iObTKcu_Locu_dzO",
      "https://drive.google.com/uc?id=1BwtutFQOT3Mb1T9MAeAhQXUpgmMQ-2RU",
    ];

    $("#chonmatbang").change(function (e) {
      var idx = this.selectedIndex || 4;   /*4 la MB 6-33*/     
        $("#matbang").attr('src', "");
        $("#matbang").attr('src', arrLinkMatBang[idx]);

    })

    //bat su kien load
    $(window).load(function() {
      // Run code
      console.log("load ne")
    });
  })

  function buildDetail(data) {
    var _d = "";
    if (data) {
      for (var i in data) {
        _d += '<li class="list-group-item">' + i + '<span class="pull-right">' + data[i] + '</span></li>'
      }
    }
    return _d;
  }
  
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'UA-119873422-1');


  