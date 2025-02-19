# unshittifier
A Firefox extension that blocks social media websites subject to enshittification (ie; Meta, X, TikTok) and redirects the user to unshittified equivalents. Don't put up with user-hostile websites or give them your ad revenue! Together we can make the internet suck less. 

This extension uses 3 redirect modes, "Full", which redirects any given enshittified link to a full unshittified equivalent (ie; YouTube to Indivious), "Basic", which redirects you to an unshittified clone of a website (ie; Twitter to Bluesky), and "Blocked", which fully blocks a page and displays a redirect message. 

![icon](icon.png)

# Current Redirects
## Full (shows the full contents of the link with an unshittified front-end)
- Youtube -> Invidious (invidious.nerdvpn.de)
- Twitter -> XCancel (toggle)
- Reddit -> RedLib (redlib.r4fo.com)

## Basic (redirects you entirely away from a website and towards it's best unshittified equivalent, ie; replacing Twitter with Bluesky!)
- Twitter -> Bluesky (toggle)
- Facebook -> Mastodon
- Instagram + TikTok -> PixelFed

## Blocked (explains itself)
- Meta

# Why?
I'm tired of these user-hostile social media platforms that are unusable being commonplace. All major social media platforms are essentially just bots and ragebait, and life's too short to be subjected to that sort of nonsense. Social media should be about connecting with people first and foremost, not generating capital by making your websites functionally worse to extract every last dollar.

# Issues
- Youtube -> Indivious embeds will break sometimes. This isn't really an issue with the extension, it means the Invidious instance is actively being blocked by YouTube. A refresh after a moment usually resolves it.

# TODO:
- Add more redirects
- Add site-specific blocked pages that list all equivalents (ie; Twitter would lead to a page that shows Mastodon, Bluesky, etc.)
- Add a per-site toggle
- Add embed toggle
- Use European servers as opposed to American servers as enhanced user privacy measure
- Allow users to set manual redirects for each website
- Add cute random animal photos to the blocked page to lighten the user's mood.
- Add settings page

# Sites to add:
- AntiFandom (Fandom replacement)
- Any sort of FOSS Instagram front-end replacement (like Bibliogram, r.i.p.)
