# $ROBIN — Website

Static site for **$ROBIN — The Degenerate** on Robinhood Chain. Single-page HTML/CSS/JS. Deploys to GitHub Pages with zero build step.

> Take from the rich. Give to the people.

## Structure

```
robin-site/
├── index.html              # Single-page site
├── css/style.css           # All styles
├── js/main.js              # Copy CA + cursor spotlight + scroll reveals
├── assets/img/             # Robin brand images
├── .nojekyll               # GitHub Pages: don't run Jekyll
├── CNAME                   # Custom domain (edit when you buy one)
├── .gitignore
└── README.md
```

## Links wired in

- Contract: `0xF051ea98319b066eB493e191a0E37e24De514f14`
- Chain: **Robinhood Chain**
- DexScreener: https://dexscreener.com/robinhood/0x033fd2D3b3c3D9145430EF969542CE3fe94561aA
- Sentry: https://www.sentry.trading/tokens?chain=robinhood&token=0xF051ea98319b066eB493e191a0E37e24De514f14
- X: https://x.com/robinonrhc

## Local preview

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy to GitHub Pages

1. Create a new repo on GitHub (e.g. `robinonrhc/robin-site`).
2. From inside `robin-site/`:
   ```bash
   git init -b main
   git add .
   git commit -m "Initial commit: \$ROBIN site"
   git remote add origin https://github.com/YOUR_USER/robin-site.git
   git push -u origin main
   ```
3. In the GitHub repo: **Settings → Pages → Build from branch → main / root → Save**.
4. When you have a custom domain, edit `CNAME` with your domain and push, then point A records at GitHub Pages IPs (see the CNAME wiring section of the deploy guide).

Fair play only.
