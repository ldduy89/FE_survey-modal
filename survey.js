// =====================Show modal in pc=========================
!(function (e, n) {
  "function" == typeof define && define.amd
    ? define(n)
    : "object" == typeof exports
      ? (module.exports = n(require, exports, module))
      : (e.ouibounce = n());
})(this, function (e, n, o) {
  return function (e, n) {
    "use strict";
    function o(e, n) {
      return "undefined" == typeof e ? n : e;
    }
    function i(e) {
      var n = 24 * e * 60 * 60 * 1e3, o = new Date(new Date().getTime() + n);
      return "; expires=" + o.toUTCString();
    }
    function t() {
      s() ||
        (L.addEventListener("mouseleave", u),
          L.addEventListener("mouseenter", r),
          L.addEventListener("keydown", c));
    }
    function u(e) {
      e.clientY > k || (D = setTimeout(m, y));
    }
    function r() {
      D && (clearTimeout(D), (D = null));
    }
    function c(e) {
      g ||
        (e.metaKey && 76 === e.keyCode && ((g = !0), (D = setTimeout(m, y))));
    }
    function d(e, n) {
      return a()[e] === n;
    }
    function a() {
      var decodedCookie = decodeURIComponent(document.cookie);
      var e = decodedCookie.split("; ") || [], n = {};
      for (var o = e.length - 1; o >= 0; o--) {
        var i = e[o]?.split("=");
        if (i) n[i[0]] = i[1];
      }
      return n;
    }
    function s() {
      return d(T, "true") && !v;
    }
    function m() {
      s() || (e && (e.style.display = "block"), E(), f());
    }
    function f(e) {
      var n = e || {};
      "undefined" != typeof n.cookieExpire && (b = i(n.cookieExpire)),
        n.sitewide === !0 && (w = ";path=/"),
        "undefined" != typeof n.cookieDomain &&
        (x = ";domain=" + n.cookieDomain),
        "undefined" != typeof n.cookieName && (T = n.cookieName),
        (document.cookie = T + "=true" + b + x + w),
        L.removeEventListener("mouseleave", u),
        L.removeEventListener("mouseenter", r),
        L.removeEventListener("keydown", c);
    }
    var l = n || {},
      v = l.aggressive || !1,
      k = o(l.sensitivity, 20),
      p = o(l.timer, 1e3),
      y = o(l.delay, 0),
      E = l.callback || function () { },
      b = i(l.cookieExpire) || "",
      x = l.cookieDomain ? ";domain=" + l.cookieDomain : "",
      T = l.cookieName ? l.cookieName : "viewedOuibounceModal",
      w = l.sitewide === !0 ? ";path=/" : "",
      D = null,
      L = document.documentElement;
    setTimeout(t, p);
    var g = !1;
    return { fire: m, disable: f, isDisabled: s };
  };
});

var _ouibounce = ouibounce(document.getElementById("ouibounce-modal"), {
  aggressive: false,
  cookieName: "sfa_survey",
  cookieExpire: 1,
  timer: 0,
  callback: function () {
    _ouibounce.disable();
    var url_location = "";
    if (document.URL.slice(-1) == "/")
      url_location = document.URL + "dipstick_survey_start";
    else url_location = document.URL + "/dipstick_survey_start";
    gtag("event", "page_view", {
      page_title: "dipstick survey start",
      page_location: url_location,
    });
  },
});

// _ouibounce.fire();

$("#ouibounce-modal .modal").on("click", function (e) {
  e.stopPropagation();
});

// =====================Show modal in mobile=========================
$(document).ready(function () {
  var visitedUrlKey = "visitedUrl";
  if (mobileCheck()) {
    var visitedUrl = getCookie(visitedUrlKey);
    var surveyCookie = getCookie("sfa_survey");
    if (visitedUrl.length > 0) {
      if (visitedUrl != window.location.href && !surveyCookie) {
        setTimeout(function () {
          _ouibounce.fire();
        }, 10000);
      }
    } else {
      var href = window.location.pathname;
      if (href.includes(".html")) {
        href = href.replace(".html", "");
      }
      if (/^[a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)|(^\/{1,2})/.test(href)) {
        var now = new Date();
        var time = now.getTime();
        var expireTime = time + 1000 * 60 * 60 * 24;
        now.setTime(expireTime);
        document.cookie = visitedUrlKey + "=" + href + "; path=/" + "; expires=" + now.toUTCString() + ";"
      }
    }
  }
});

window.mobileCheck = function () {
  var check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// =====================Action in modal=========================

$(".text-area textarea").keyup(function () {
  var charsno = $(this).val().length;
  $(".text-area span").html(charsno + "/100");
});

$(".text-area textarea").keydown(function () {
  var charsno = $(this).val().length;
  $(".text-area span").html(charsno + "/100");
});

$("input[type='radio']").on("click", function (e) {
  var { name, value } = e.target;
  if (name == "who_you_are" && value == "food") {
    $(".group-food").show();
  } else {
    $(".group-food").hide();
  }

  if (name == "completed_your_task" && value == "Yes with some difficulty") {
    $(".group-complete-yes").show();
  } else {
    $(".group-complete-yes").hide();
  }

  if (name == "completed_your_task" && value == "No") {
    $(".group-complete-no").show();
  } else {
    $(".group-complete-no").hide();
  }
});

var currentTab = 0;
showTab(currentTab);

function closeModal() {
  $("#ouibounce-modal").hide();
}
function showTab(n) {
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
}

function nextPrev(n) {
  var arrayObj = $("form").serializeArray();
  var values = arrayObj?.reduce((x, y) => {
    x[y.name] = y.value;
    return x;
  }, {});
  var errors = null;
  switch (currentTab) {
    case 0:
      errors = handelTab1(values);
      break;
    case 1:
      errors = handelTab2(values);
      break;
    case 2:
      errors = handelTab3(values);
      break;
    case 3:
      errors = handelTab4(values);
      break;
    case 4:
      errors = handelTab5(!!n);
      break;
    case 5:
      errors = handelTab6(values);
      break;
    default:
      break;
  }
  if (errors) {
    $("#ouibounce-modal .errors").html(errors);
    return;
  } else {
    $("#ouibounce-modal .errors").html("");
  }
  var x = document.getElementsByClassName("tab");
  x[currentTab].style.display = "none";
  currentTab = currentTab + n;
  if (currentTab >= x.length) {
    return false;
  }
  showTab(currentTab);
}

function handelTab1(values) {
  var selectedJob;
  if (values.who_you_are == "food") {
    var arrFoods = [];
    Object.keys(values)
      .filter((key) => key.includes("wya_food_"))
      .forEach((key) => {
        if (key == "wya_food_other") {
          if (values["wya_food_order_input"] != "")
            arrFoods.push("food others - " + values["wya_food_order_input"]);
        } else if (key != "wya_food_order_input") {
          arrFoods.push("food " + values[key]);
        }
      });
    if (arrFoods.length > 0) selectedJob = arrFoods.join(" | ");
  } else if (values.who_you_are == "others") {
    if (values.wya_order_input != "")
      selectedJob = "others - " + values.wya_order_input;
  } else {
    selectedJob = values.who_you_are;
  }

  if (!selectedJob) return "Please select the options.";
  gtag("set", "user_properties", {
    who_you_are: selectedJob,
  });
  gtag("event", "dipstick_survey_step1");
}

function handelTab2(values) {
  var arrRfv = [];
  Object.keys(values)
    .filter((key) => key.includes("rfv_"))
    .forEach((key) => {
      if (key == "rfv_others") {
        if (values["rfv_others_input"] != "")
          arrRfv.push("others - " + values["rfv_others_input"]);
      } else if (key != "rfv_others_input") {
        arrRfv.push(values[key]);
      }
    });
  if (arrRfv.length == 0) return "Please select the options.";
  gtag("event", "dipstick_survey_step2", {
    reason_for_visit: arrRfv.join(" | "),
  });
}

function handelTab3(values) {
  var completed_your_task = values.completed_your_task;
  var challenges_faced = "";
  var arrRfv = [];
  if (completed_your_task == "Yes with some difficulty") {
    Object.keys(values)
      .filter((key) => key.includes("yes_challenges_faced_"))
      .forEach((key) => {
        if (key == "yes_challenges_faced_others") {
          if (values["yes_challenges_faced_others_input"] != "")
            arrRfv.push(
              "others - " + values["yes_challenges_faced_others_input"]
            );
        } else if (key != "yes_challenges_faced_others_input") {
          arrRfv.push(values[key]);
        }
      });
    challenges_faced = arrRfv.join(" | ");
  } else if (completed_your_task == "No") {
    Object.keys(values)
      .filter((key) => key.includes("no_challenges_faced_"))
      .forEach((key) => {
        if (key == "no_challenges_faced_others") {
          if (values["no_challenges_faced_others_input"] != "")
            arrRfv.push(
              "others - " + values["no_challenges_faced_others_input"]
            );
        } else if (key != "no_challenges_faced_others_input") {
          arrRfv.push(values[key]);
        }
      });
    challenges_faced = arrRfv.join(" | ");
  }

  if (
    !completed_your_task ||
    (["Yes with some difficulty", "No"].includes(completed_your_task) &&
      challenges_faced == "")
  ) {
    return "Please select the options.";
  }
  var body = { completed_your_task }
  if (challenges_faced && challenges_faced != '') body.challenges_faced = challenges_faced
  gtag("event", "dipstick_survey_step3", body);
}

function handelTab4(values) {
  var {
    satisfaction_availability_rating,
    satisfaction_navigation_rating,
    satisfaction_design_rating,
    relative_availability_rating,
    relative_navigation_rating,
    relative_design_rating,
    feedback_rating
  } = values
  if (
    !satisfaction_availability_rating ||
    !satisfaction_navigation_rating ||
    !satisfaction_design_rating ||
    !relative_availability_rating ||
    !relative_navigation_rating ||
    !relative_design_rating
  ) {
    return "Please select the options.";
  }
  var body = {
    satisfaction_availability_rating,
    satisfaction_navigation_rating,
    satisfaction_design_rating,
    relative_availability_rating,
    relative_navigation_rating,
    relative_design_rating,
  }
  if (feedback_rating && feedback_rating != '') body.feedback = feedback_rating
  gtag("event", "dipstick_survey_step4", body);
}

function handelTab5(participate_in_survey) {
  gtag("event", "dipstick_survey_step5", {
    participate_in_survey: participate_in_survey ? 'yes' : 'no',
  });
  if (!participate_in_survey) {
    closeModal();
  }
}

function handelTab6(values) {
  var { sfa_name, sfa_email, sfa_interviews, sfa_prototype } = values;
  if (sfa_email == '') {
    return "Please enter your email.";
  }
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(sfa_email)) {
    return "Email invalid.";
  }

  var random = (Math.random() + 1).toString(36).substring(7);
  var token = "token_" + random + "_" + new Date().getTime();
  var bodyLineArr = [];
  if (sfa_name) bodyLineArr.push(`- Name: ${sfa_name}`);
  if (sfa_email) bodyLineArr.push(`- Email: ${sfa_email}`);
  if (sfa_interviews) bodyLineArr.push(`- ${sfa_interviews}`);
  if (sfa_prototype) bodyLineArr.push(`- ${sfa_prototype}`);
  sfa_name = sfa_name && sfa_name !== "" ? `<${sfa_name}>` : "";

  location.href = `mailto:sfawebsitesurvey@sfa.gov.sg?subject=SFA Survey Response (${token})&body=${bodyLineArr.join(
    "%0A"
  )}`;
  var url_location = "";
  if (document.URL.slice(-1) == "/")
    url_location = document.URL + "dipstick_survey_complete";
  else url_location = document.URL + "/dipstick_survey_complete";
  gtag('set', 'user_properties', {
    survey_token: token,
  });
  gtag('event', 'page_view', {
    page_title: 'dipstick survey complete',
    page_location: url_location,
  });
}
