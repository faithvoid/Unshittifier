const redirects = {
  "x.com": "https://xcancel.com",
  "www.x.com": "https://xcancel.com",
  "youtube.com": "https://invidious.nerdvpn.de",
  "www.youtube.com": "https://invidious.nerdvpn.de",
  "reddit.com": "https://redlib.r4fo.com",
  "www.reddit.com": "https://redlib.r4fo.com"
};

const pathRetainingRedirects = [
  "youtube.com",
  "www.youtube.com",
  "x.com",
  "www.x.com",
  "reddit.com",
  "www.reddit.com"
];

const blockedPages = {
  "example.com": "/blocked.html",
  "www.example.com": "/blocked.html"
};

browser.webRequest.onBeforeRequest.addListener(
  function(details) {
    const url = new URL(details.url);
    if (redirects[url.hostname]) {
      const redirectBase = redirects[url.hostname];
      if (pathRetainingRedirects.includes(url.hostname)) {
        const redirectUrl = redirectBase + url.pathname + url.search + url.hash;
        return { redirectUrl: redirectUrl };
      } else {
        return { redirectUrl: redirectBase };
      }
    } else if (blockedPages[url.hostname]) {
      return { redirectUrl: browser.runtime.getURL(blockedPages[url.hostname]) };
    }
    return {};
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);
