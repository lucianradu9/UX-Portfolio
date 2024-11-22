// Show the loading overlay to block content
document.getElementById("loading-overlay").style.display = "block";

var lastPasswordTime = localStorage.getItem("lastPasswordTime");
if (lastPasswordTime) {
    var twoHoursAgo = Date.now() - (24 * 60 * 60 * 1000);
    if (lastPasswordTime >= twoHoursAgo) {
        // User is still authenticated; hide the loading overlay
        document.getElementById("loading-overlay").style.display = "none";
    } else {
        // Save the current page URL before redirecting
        localStorage.setItem("returnURL", window.location.href);
        window.location.href = "../../auth.html";
    }
} else {
    // Save the current page URL before redirecting
    localStorage.setItem("returnURL", window.location.href);
    window.location.href = "../../auth.html";
}
