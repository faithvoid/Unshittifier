const blockedPageURL = browser.runtime.getURL("blocked.html");

browser.webRequest.onBeforeRequest.addListener(
  function(details) {
    return {redirectUrl: blockedPageURL};
  },
  {
    urls: [
      "*://x.com/*",
      "*://instagram.com/*",
      "*://www.instagram.com/*",
      "*://meta.com/*",
      "*://www.meta.com/*",
      "*://facebook.com/*",
      "*://tiktok.com/*",
      "*://www.tiktok.com/*",
      "*://www.facebook.com/*"
    ]
  },
  ["blocking"]
);
