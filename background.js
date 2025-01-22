const redirects = {
  "threads.net": "https://bsky.app",
  "www.threads.net": "https://bsky.app",
  "x.com": "https://xcancel.com",
  "www.x.com": "https://xcancel.com",
  "instagram.com": "https://pixelfed.org",
  "www.instagram.com": "https://pixelfed.org",
  "tiktok.com": "https://pixelfed.org",
  "www.tiktok.com": "https://pixelfed.org",
  "facebook.com": "https://mastodon.social",
  "www.facebook.com": "https://mastodon.social",
  "youtube.com": "https://invidious.nerdvpn.de",
  "www.youtube.com": "https://invidious.nerdvpn.de",
  "fandom.com": "https://antifandom.com",
  "www.fandom.com": "https://antifandom.com"
};

const pathRetainingRedirects = [
  "youtube.com",
  "www.youtube.com",
  "x.com",
  "www.x.com"
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
