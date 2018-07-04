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
    var dataCanHo = {
      "A": {
        "<b>Thông tin căn hộ A - 1 phòng ngủ</b>": "", "DT Tim tường": "49.23m² - 49.77m²", "DT Thông thủy": "45,13m² - 45,81m²", "Phòng khách": "13.92m²", "Bếp": "4.86m²", "Lô gia": "2.34m²", "Sân phơi": "1.08m²", "Phòng ngủ": "13.26m²", "Vệ sinh 1": "4.48m²", "DT phụ": "5.28m²",
      },
      "B1": {
        "<b>Thông tin căn hộ B1 - 2 phòng ngủ</b>": "", "DT Tim tường": "73.60m² - 74.40m²", "DT Thông thủy": "66.78m² - 70.25m²", "Phòng khách": "15m²", "Bếp": "5.37m²", "Lô gia": "2.43m²", "Sân phơi": "1.08m²", "Phòng ngủ 1": "10.74m²", "Phòng ngủ 2": "16.27m²", "Vệ sinh 1": "4.68m²", "Vệ sinh 2": "3.60m²", "DT phụ": "8.09m²",
      },
      "B2": {
        "<b>Thông tin căn hộ B2 - 2 phòng ngủ</b>": "", "DT Tim tường": "71.16m² - 72.12m²", "DT Thông thủy": "63.87m² - 64.83m²", "Phòng khách": "13.75m²", "Bếp": "4.98m²", "Lô gia": "2.43m²", "Sân phơi": "2.43m²", "Phòng ngủ 1": "13.46m²", "Phòng ngủ 2": "13.05m²", "Vệ sinh 1": "4.32m²", "Vệ sinh 2": "3.44m²", "DT phụ": "7.65m²",
      },
      "B3": {
        "<b>Thông tin căn hộ B3 - 2 phòng ngủ</b>": "", "DT Tim tường": "68.98m²", "DT Thông thủy": "61.23m²", "Phòng khách": "12.33m²", "Bếp": "5.36m²", "Lô gia": "2.56²", "Sân phơi": "3.64m²", "Phòng ngủ 1": "10.92m²", "Phòng ngủ 2": "10.80m²", "Vệ sinh 1": "3.64m²", "Vệ sinh 2": "4.08m²", "DT phụ": "7.89m²",
      },
      "B4": {
        "<b>Thông tin căn hộ B4 - 2 phòng ngủ</b>": "", "DT Tim tường": "71.24m²", "DT Thông thủy": "64.05m² - 65.08m²", "Phòng khách": "12.45m²", "Bếp": "6.27m²", "Lô gia": "2.61m²", "Sân phơi": "1.44m²", "Phòng ngủ 1": "9.75m²", "Phòng ngủ 2": "14.63m²", "Vệ sinh 1": "4.50m²", "Vệ sinh 2": "3.38m²", "DT phụ": "9.18m²",
      },
      "B5": {
        "<b>Thông tin căn hộ B5 - 2 phòng ngủ</b>": "", "DT Tim tường": "64.78m²", "DT Thông thủy": "59.58m² - 60.25m²", "Phòng khách": "13.85m²", "Bếp": "5.2m²", "Lô gia": "2.29m²", "Sân phơi": "1.08m²", "Phòng ngủ 1": "13.75m²", "Phòng ngủ 2": "11.97m²", "Vệ sinh 1": "4.90m²", "DT phụ": "6.53m²",
      },
      "B6": {
        "<b>Thông tin căn hộ B6 - 2 phòng ngủ</b>": "", "DT Tim tường": "63.37m²", "DT Thông thủy": "57.14m² - 58.16m²", "Phòng khách": "12.88m²", "Bếp": "4.95m²", "Lô gia": "2.03m²", "Sân phơi": "1.08m²", "Phòng ngủ 1": "14.09m²", "Phòng ngủ 2": "11.40m²", "Vệ sinh 1": "4.90m²", "DT phụ": "5.88m²",
      },
      "B7": {
        "<b>Thông tin căn hộ B7 - 2 phòng ngủ</b>": "", "DT Tim tường": "71.31m² -  72.29m²", "DT Thông thủy": "64.68m² - 65.70m²", "Phòng khách": "13.77m²", "Bếp": "5.13m²", "Lô gia": "2.11m²", "Sân phơi": "1.08m²", "Phòng ngủ 1": "10.52m²", "Phòng ngủ 2": "16.12m²", "Vệ sinh 1": "4.68m²", "Vệ sinh 2": "3.60m²", "DT phụ": "7.66m²",
      },
      "B8": {
        "<b>Thông tin căn hộ B8 - 2 phòng ngủ</b>": "", "DT Tim tường": "69.51m² - 70.49m²", "DT Thông thủy": "63.58m² - 65.62m²", "Phòng khách": "14.53m²", "Bếp": "4.99m²", "Lô gia": "2.29m²", "Sân phơi": "1.08m²", "Phòng ngủ 1": "9.64m²", "Phòng ngủ 2": "15.00m²", "Vệ sinh 1": "4.31m²", "Vệ sinh 2": "3.64m²", "DT phụ": "8.10m²",
      },
      "C1": {
        "<b>Thông tin căn hộ C1 - 3 phòng ngủ</b>": "", "DT Tim tường": "95.32m²", "DT Thông thủy": "84.47m² - 85.59m²", "Phòng khách": "13.20m²", "Bếp": "6.16m²", "Lô gia": "2.61m²", "Sân phơi": "3.30m²", "Phòng ngủ 1": "11.25m²", "Phòng ngủ 2": "16.80m²", "Phòng ngủ 3": "12.19m²", "Vệ sinh 1": "3.24m²", "Vệ sinh 2": "4.38m²", "DT phụ": "11.34m²",
      },
      "C2": {
        "<b>Thông tin căn hộ C2 - 3 phòng ngủ</b>": "", "DT Tim tường": "90.32m²", "DT Thông thủy": "80.64m² - 81.60m²", "Phòng khách": "13.96m²", "Bếp": "5.63m²", "Lô gia": "2.97m²", "Sân phơi": "3.41m²", "Phòng ngủ 1": "9.46m²", "Phòng ngủ 2": "11.87m²", "Phòng ngủ 3": "15.24m²", "Vệ sinh 1": "3.24m²", "Vệ sinh 2": "3.90m²", "DT phụ": "10.96m²",
      },
      "C3": {
        "<b>Thông tin căn hộ C3 - 3 phòng ngủ</b>": "", "DT Tim tường": "119.21m² - 119.34m²", "DT Thông thủy": "108.45m²", "Phòng khách": "24.39m²", "Bếp": "10.12m²", "Lô gia": "5.08m²", "Sân phơi 1": "3.30m²", "Sân phơi 2": "2.00m²", "Phòng ngủ 1": "16.15m²", "Phòng ngủ 2": "10.92m²", "Phòng ngủ 3": "10.80m²", "Vệ sinh 1": "4.08m²", "Vệ sinh 2": "4.58m²", "Vệ sinh 3": "3.64m²", "DT phụ": "15.63m²",
      }
    }
    var _layoutName = "A", _layoutIdx = 0, _matbangName = "tang-6-33";
    $("#choncan").change(function (e) {
      _layoutName = $(this).val() || "A";
      _layoutIdx = $(this).prop('selectedIndex') || 0;

      $("#layoutcanho").attr('src', 'img/layout/new/canho-' + _layoutName + '-2D.png');
      $("#chitietcanho").html(buildDetail(dataCanHo[_layoutName]))
    })

    $("#chonmatbang").change(function (e) {
      _matbangName = $(this).val() || "tang-6-33";
      $("#matbang").attr('src', 'img/matbang/' + _matbangName + '.png');
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


  