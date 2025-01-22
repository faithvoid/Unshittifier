const redirects = {
  "x.com": "https://bsky.app",
  "www.x.com": "https://bsky.app",
  "instagram.com": "https://pixelfed.org",
  "www.instagram.com": "https://pixelfed.org",
  "tiktok.com": "https://pixelfed.org",
  "www.tiktok.com": "https://pixelfed.org",
  "facebook.com": "https://mastodon.social",
  "www.facebook.com": "https://mastodon.social"
};

browser.webRequest.onBeforeRequest.addListener(
  function(details) {
    const url = new URL(details.url);
    if (redirects[url.hostname]) {
      return { redirectUrl: redirects[url.hostname] };
    }
    return {};
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);
