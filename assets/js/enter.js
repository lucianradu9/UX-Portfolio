function validateForm(_0x1fa38f) {
  _0x1fa38f.preventDefault();
  var _0x2a8c3d = document.getElementById("password").value;
  var _0x4029ef = ["23AR9PAL", "27PR7PAL", "10RN02GB", "20AM1CTC", "PTZ10BRN"];
  var _0x9aa3c3 = document.getElementById('error-message');
  if (_0x4029ef.includes(_0x2a8c3d)) {
      var _0x4aa6d6 = localStorage.getItem("lastPasswordTime");
      if (!_0x4aa6d6 || Date.now() - _0x4aa6d6 > 86400000) {
          localStorage.setItem("lastPasswordTime", Date.now());
      }

      // Redirect to the originally requested page or default to index.html
      var returnURL = localStorage.getItem("returnURL");
      if (returnURL) {
          window.location.href = returnURL;
          localStorage.removeItem("returnURL");
      } else {
          window.location.href = "index.html";
      }
  } else {
      _0x9aa3c3.textContent = "The password you entered is incorrect, please try again.";
  }
}
document.getElementById("form_3").addEventListener("submit", validateForm);
