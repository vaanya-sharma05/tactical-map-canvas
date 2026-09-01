# Tactical Map Display

https://www.figma.com/make/VE519gEb3drKNxXvxSaeYW/Dark-Mode-Event-Landing-Page?p=f&t=SvOE4YSTTEDjpLXj-0 The map background still looks too blurry/glowy. Fix it with this exact style instead: - Base background: pure black (or near-black, #050508) - World map continents drawn as clean, crisp outlines only — no glow, no blur, no bloom - Outline color: thin white or very light blue-white lines for continent borders/coastlines (like a technical/cartographic line map, not a photographic night-earth map) - Add a subtle secondary layer of fine blue grid lines or latitude/longitude lines across the map for a "tactical map" feel — thin, low-opacity, blue (#1e3a5f or similar) - Do NOT use soft glowing dots or bloom effects for city lights — remove that "night earth from space" look entirely - Keep the animated flight-path arcs, but make them thin, crisp, glowing blue lines (subtle glow only on the arcs themselves, not the whole map) - Overall effect should look like a sharp, high-contrast tactical/military ops map: black background, crisp white/blue continent outlines, blue grid overlay — clean and legible, not hazy or diffused - Make sure pin markers and connector lines stay sharp and high-contrast against this cleaner background

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/4d543693-fe66-4378-b7fb-af51156d25b2).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
