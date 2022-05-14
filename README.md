### Next.js + TS + SWC Minification + RainbowKit

This repository serves as an example of a minimal `next` + `typescript` + `swc` + [`@rainbow-me/rainbowkit`](https://www.npmjs.com/package/@rainbow-me/rainbowkit) project.

Setting `swcMinify: true` in `next.config.js` causes rainbowkit to break with the following error output: `Uncaught SyntaxError: missing ) after argument list`

#### Relevant code:

```js
// next.config.js
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true // breaks the app
  // Setting swcMinify to false works fine
  // and renders a "Connect Wallet" button
  // on the index page as expected.
}
```

#### Installation
```bash
# Install dependencies
yarn

# Build and export as a static site
yarn build

# Serve the site locally
yarn serve
```