document.addEventListener("DOMContentLoaded", () => {
  logEvent("DOMContentLoaded: Document has been fully loaded and parsed.");

  document.getElementById("changeHash").addEventListener("click", () => {
    const newHash = hash${Math.floor(Math.random() * 1000)};
    location.hash = newHash;
    logEvent(Hash changed programmatically to: ${newHash});
  });

  document.getElementById("navigateAway").addEventListener("click", () => {
    window.location.href = "http://www.chipitechnologies.com";
  });
});

window.addEventListener("resize", () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  logEvent(resize: Window has been resized. New size: ${width}x${height});
});

window.addEventListener("scroll", () => {
  const scrollX = window.scrollX;
  const scrollY = window.scrollY;
  logEvent(
    scroll: Page is being scrolled. Scroll position: (${scrollX}, ${scrollY}),
  );
});

window.addEventListener("hashchange", (event) => {
  const oldURL = event.oldURL;
  const newURL = event.newURL;
  const oldHash = oldURL.substring(oldURL.indexOf("#") + 1);
  const newHash = newURL.substring(newURL.indexOf("#") + 1);
  logEvent(
    hashchange: URL hash has changed. Old URL: ${oldURL}, New URL: ${newURL}, Old Hash: ${oldHash}, New Hash: ${newHash},
  );
});

window.addEventListener("beforeunload", (event) => {
  event.preventDefault();
  logEvent("beforeunload: Page is about to be unloaded.");
  event.return = "";
});

window.addEventListener("unload", () => {
  logEvent("unload: Page is being unloaded.");
});

function logEvent(message) {
  const log = document.getElementById("log");
  const timestamp = new Date().toLocaleTimeString();
  log.innerHTML += <p>[${timestamp}] ${message}</p>;
  log.scrollTop = log.scrollHeight; // Auto-scroll to the bottom
}