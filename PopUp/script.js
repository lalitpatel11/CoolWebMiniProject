var pop = {
  show: function (title, txt) {
    document.getElementById("poptitle").innerHTML = title;
    document.getElementById("poptext").innerHTML = txt;
    document.getElementById("popwrap").style.display = "block";
  },
  hide: function () {
    document.getElementById("popwrap").style.display = "none";
  },
};
