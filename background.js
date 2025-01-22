const redirects = {
  "threads.net": "https://bsky.app",
  "www.threads.net": "https://bsky.app",
  "x.com": "https://bsky.app",
  "www.x.com": "https://bsky.app",
  "instagram.com": "https://pixelfed.org",
  "www.instagram.com": "https://pixelfed.org",
  "tiktok.com": "https://pixelfed.org",
  "www.tiktok.com": "https://pixelfed.org",
  "facebook.com": "https://mastodon.social",
  "www.facebook.com": "https://mastodon.social"
};

const blockedPages = {
  "meta.com": "/blocked.html",
  "www.meta.com": "/blocked.html"
};

browser.webRequest.onBeforeRequest.addListener(
  function(details) {
    const url = new URL(details.url);
    if (redirects[url.hostname]) {
      return { redirectUrl: redirects[url.hostname] };
    } else if (blockedPages[url.hostname]) {
      return { redirectUrl: browser.runtime.getURL(blockedPages[url.hostname]) };
    }
    return {};
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);
