# unshittifier
A Firefox extension that blocks social media websites subject to enshittification (ie; Meta, X, TikTok) and redirects the user to unshittified equivalents. Don't put up with user-hostile websites or give them your ad revenue! Together we can make the internet suck less. 

This extension uses 3 redirect modes, "Full", which redirects any given enshittified link to a full unshittified equivalent (ie; YouTube to Indivious), "Basic", which redirects you to an unshittified clone of a website (ie; Twitter to Bluesky), and "Blocked", which fully blocks a page and displays a redirect message. 

![icon](icon.png)

# Current Redirects
## Full ("show me the full contents of this link with a different front-end")
- Youtube -> Invidious (invidious.nerdvpn.de)
- Twitter -> XCancel (toggle)
- Reddit -> RedLib (redlib.r4fo.com)

## Basic ("don't show me anything to do with this site, redirect me from it!")
- Twitter -> Bluesky (toggle)
- Facebook -> Mastodon
- Instagram + TikTok -> PixelFed

## Blocked (explains itself)
- Meta

# Why?
I'm tired of these user-hostile social media platforms that are unusable being commonplace. All major social media platforms are essentially just bots and ragebait, and life's too short to be subjected to that sort of nonsense. Social media should be about connecting with people first and foremost, not generating capital by making your websites functionally worse to extract every last dollar.

# TODO:
- Add more redirects
- Add site-specific blocked pages that list all equivalents (ie; Twitter would lead to a page that shows Mastodon, Bluesky, etc.)
- Add a per-site toggle
- Use European servers as opposed to American servers as enhanced user privacy measure
- Allow users to set manual redirects for each website
- Add cute random animal photos to the blocked page to lighten the user's mood.
- Add settings page
